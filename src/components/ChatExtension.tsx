import React, { useState } from 'react';
import { mockNewsData as relatedNewsData } from '../data/relatedMockNewsData';
import { mockNewsData, type NewsData } from '../data/subjectMockNewsData';
import NewsInChat from './NewsInChat';

type VerifyRequest = {
  platform?: string;
  sourceUrl?: string;
  language?: string;
  title?: string;
  text?: string;
  imageUrls?: string[];
};

type VerifyResponse = {
  verdict?: 'LIKELY_TRUE' | 'UNSURE' | 'LIKELY_FALSE';
  confidence?: number;
  rationale?: string;
  consensusSummary?: string;
  normalizedText?: string;
  evidences?: Array<{
    source?: string;
    domain?: string;
    title?: string;
    url?: string;
    snippet?: string;
    publishedAt?: string | null;
    similarity?: number;
    trustPrior?: number;
  }>;
};

interface ChatExtensionProps {
  verifyEndpoint?: string;
  verifyPayload?: VerifyRequest;
}

// 샘플 뉴스 데이터

const ChatExtension: React.FC<ChatExtensionProps> = ({
  verifyEndpoint = 'https://port-0-cleannews-5b8v2nlsa3msrp.sel5.cloudtype.app/api/v1/verify',
  verifyPayload,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentNews, setCurrentNews] = useState<NewsData | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [verifyError, setVerifyError] = useState<string | null>(null);
  const [verifyData, setVerifyData] = useState<VerifyResponse | null>(null);

  // 팝업 열기
  const handleAnalyzeNews = () => {
    // 전달된 verifyPayload가 있으면 그것을 현재 아이템으로 사용
    if (verifyPayload) {
      const fallbackTitle = verifyPayload.title || '(제목 없음)';
      const fallbackText = verifyPayload.text || '';
      setCurrentNews({
        id: 0,
        title: fallbackTitle,
        content: fallbackText,
        verdict: '진짜뉴스',
        confidence: 50,
        source: verifyPayload.sourceUrl || ''
      });
    } else {
      // 없으면 무작위 더미
      const randomNews = mockNewsData[Math.floor(Math.random() * mockNewsData.length)];
      setCurrentNews(randomNews);
    }
    setIsOpen(true);
    setVerifyData(null);
    setVerifyError(null);
  };

  // 팝업 닫기
  const handleClose = () => {
    setIsOpen(false);
    setCurrentNews(null);
    setVerifyData(null);
    setVerifyError(null);
  };

  const mapVerdictClass = (v?: VerifyResponse['verdict']) => {
    if (v === 'LIKELY_FALSE') return 'fake';
    if (v === 'LIKELY_TRUE') return 'real';
    return 'caution';
  };

  const mapVerdictLabel = (v?: VerifyResponse['verdict']) => {
    if (v === 'LIKELY_FALSE') return '❌ 거짓 가능성 높음';
    if (v === 'LIKELY_TRUE') return '✅ 진실 가능성 높음';
    return '⚠️ 불확실';
  };

  const buildPayload = (): VerifyRequest => {
    if (verifyPayload) return verifyPayload;
    return {
      platform: 'instagram',
      language: 'ko',
      title: currentNews?.title,
      text: currentNews?.title,
    };
  };

  const handleVerify = async () => {
    setIsVerifying(true);
    setVerifyError(null);
    setVerifyData(null);
    try {
      const body = buildPayload();
      const res = await fetch(verifyEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        const text = await res.text().catch(() => '');
        throw new Error(`요청 실패 (${res.status}) ${text}`);
      }
      const data: VerifyResponse = await res.json();
      setVerifyData(data);
    } catch (e: any) {
      setVerifyError(e?.message || '알 수 없는 오류가 발생했습니다');
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div className="news-verification-extension">
      {/* 분석 버튼 */}
      <button 
        className="analyze-button"
        onClick={handleAnalyzeNews}
      >
        🔍 뉴스 분석
      </button>
      
      {/* 분석 결과 팝업 */}
      {isOpen && currentNews && (
        <div className="popup-container">
          <div className="popup-content">
            {/* 팝업 헤더 */}
            <div className="popup-header">
              <h2>📰 뉴스 검증 결과</h2>
              <button className="close-button" onClick={handleClose}>×</button>
            </div>

            {/* 뉴스 제목 */}
            <div className="news-title">
              <h3>{verifyPayload?.title || currentNews.title}</h3>
            </div>

            {/* 검증 결과 */}
            <div className="verification-result">
              {verifyData ? (
                <div className={`verdict ${mapVerdictClass(verifyData.verdict)}`}>
                  {mapVerdictLabel(verifyData.verdict)}
                </div>
              ) : (
                <div className={`verdict ${currentNews.verdict === '가짜뉴스' ? 'fake' : 'real'}`}>
                  {currentNews.verdict === '가짜뉴스' ? '❌ 가짜뉴스' : '✅ 진짜뉴스'}
                </div>
              )}
              
              {/* 신뢰도 게이지 */}
              <div className="confidence-meter">
                <div className="confidence-label"> 신뢰도 {verifyData?.confidence ?? currentNews.confidence}%</div>
                <div className="confidence-bar">
                  <div 
                    className={`confidence-fill ${(verifyData?.confidence ?? currentNews.confidence) > 70 ? 'safe' : (verifyData?.confidence ?? currentNews.confidence) > 30 ? 'caution' : 'danger'}`}
                    style={{ width: `${verifyData?.confidence ?? currentNews.confidence}%` }}
                  ></div>
                </div>
                
                {/* 신뢰도 구간 표시 */}
                <div className="confidence-ranges">
                  <span className="range danger">위험 0-30%</span>
                  <span className="range caution">주의 30-70%</span>
                  <span className="range safe">안전 70-100%</span>
                </div>
              </div>
            </div>

            {/* 서버 응답 상세 */}
            {isVerifying && (
              <div className="confidence-label">⏳ 서버에 분석 요청 중...</div>
            )}
            {verifyError && (
              <div className="confidence-label">⚠️ 오류: {verifyError}</div>
            )}
            {verifyData && (
              <div className="server-details">
                {verifyData.rationale && (
                  <div className="confidence-label"><pre style={{ whiteSpace: 'pre-wrap', margin: 0 }}>{verifyData.rationale}</pre></div>
                )}
                {verifyData.consensusSummary && (
                  <div className="confidence-label">요약: {verifyData.consensusSummary}</div>
                )}
                {Array.isArray(verifyData.evidences) && verifyData.evidences.length > 0 && (
                  <div className="related-news">
                    <h4>🔎 근거</h4>
                    <div className="news-carousel">
                      {verifyData.evidences.slice(0, 6).map((ev, idx) => (
                        <div key={idx} className="news-in-chat">
                          <a href={ev.url} target="_blank" rel="noreferrer" className="news-title-link">
                            {ev.title || ev.url}
                          </a>
                          <div className="news-meta">{ev.domain} {ev.publishedAt ? `· ${ev.publishedAt}` : ''}</div>
                          {ev.snippet && <div className="news-snippet">{ev.snippet}</div>}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* 관련 뉴스 캐러셀 */}
            <div className="related-news">
              <h4>📰 관련 뉴스</h4>
              <div className="news-carousel">
                {relatedNewsData.map((news) => (
                  <NewsInChat
                    key={news.id}
                    news={news}
                  />
                ))}
              </div>
            </div>

            {/* 권장사항 */}
            <div className="confidence-label">
              <p>💡 다른 신뢰할 수 있는 공식 기관이나 전문가의 의견과 교차검증이 필요합니다. </p>
            </div>

            {/* 액션 버튼들 */}
            <div className="action-buttons">
              <button className="btn-secondary" onClick={handleClose}>
                닫기
              </button>
              <button className="btn-primary" onClick={handleVerify} disabled={isVerifying}>
                {isVerifying ? '분석 중...' : '분석할까말까'}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default ChatExtension;