import React, { useState } from 'react';
import { mockNewsData as relatedNewsData } from '../data/relatedMockNewsData';
import { mockNewsData, type NewsData } from '../data/subjectMockNewsData';
import NewsInChat from './NewsInChat';

// 샘플 뉴스 데이터

const ChatExtension: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentNews, setCurrentNews] = useState<NewsData | null>(null);

  // 팝업 열기
  const handleAnalyzeNews = () => {
    // mockNewsData에서 랜덤으로 뉴스 선택
    const randomNews = mockNewsData[Math.floor(Math.random() * mockNewsData.length)];
    setCurrentNews(randomNews);
    setIsOpen(true);
  };

  // 팝업 닫기
  const handleClose = () => {
    setIsOpen(false);
    setCurrentNews(null);
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
              <h3>{currentNews.title}</h3>
            </div>

            {/* 검증 결과 */}
            <div className="verification-result">
              <div className={`verdict ${currentNews.verdict === '가짜뉴스' ? 'fake' : 'real'}`}>
                {currentNews.verdict === '가짜뉴스' ? '❌ 가짜뉴스' : '✅ 진짜뉴스'}
              </div>
              
              {/* 신뢰도 게이지 */}
              <div className="confidence-meter">
              <div className="confidence-label"> 신뢰도 {currentNews.confidence}%</div>
                <div className="confidence-bar">
                  <div 
                    className={`confidence-fill ${currentNews.confidence > 70 ? 'safe' : currentNews.confidence > 30 ? 'caution' : 'danger'}`}
                    style={{ width: `${currentNews.confidence}%` }}
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
              <button className="btn-primary">
                분석할까말까
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default ChatExtension;