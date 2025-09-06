import ChatExtension from '@/components/ChatExtension'
import { useState } from 'react'
const NaverNewsPage = () => {
  const leftArticles = [
    { id: 'l-0', title: '국내 항공요금 내년 인하 검토… 국토부·항공사 협의', summary: '한국경제 · 09월 06일 09:12 · 운임체계 개편 논의 본격화' },
    { id: 'l-1', title: '기상청 "주말 강한 비바람… 태풍 북상 경로 주의"', summary: '연합뉴스 · 09월 06일 11:30 · 일부 지역 호우 특보 가능성' },
    { id: 'l-2', title: '서울시, 심야버스 증편 시범 운영… 시민 체감 교통 확대', summary: '서울신문 · 09월 06일 14:05 · 노선·배차 개선안 공개' },
    { id: 'l-3', title: '반도체 수출 7개월 연속 증가… IT 경기 회복 신호', summary: '전자신문 · 09월 06일 16:22 · 메모리·파운드리 동반 상승' },
    { id: 'l-4', title: '교육부, AI 디지털교과서 단계적 확대… 2026년까지', summary: '경향신문 · 09월 06일 18:01 · 교실 혁신·교사 지원책 포함' },
  ]

  const midArticles = [
    { id: 'm-0', title: '국회, 데이터 기본법 소위 통과… 산업계 환영', source: 'KBS · 09월 06일 12:11' },
    { id: 'm-1', title: 'WHO, 신종 호흡기 질환 경계 단계 재조정', source: 'MBC · 09월 06일 13:45' },
    { id: 'm-2', title: '달 착륙선 추가 임무 성공… 과학장비 가동 개시', source: 'YTN · 09월 06일 15:02' },
    { id: 'm-3', title: '원·달러 환율 장중 1,350원 하회… 외인 순매수', source: 'SBS · 09월 06일 17:28' },
  ]

  const rightArticles = [
    { id: 'r-0', title: '방탄소년단, 친환경 캠페인 동참… 글로벌 행동 촉구', source: 'JTBC · 09월 06일 10:20' },
    { id: 'r-1', title: '전기차 보조금 개편안 예고… 중저가 차종 집중', source: '조선일보 · 09월 06일 11:05' },
    { id: 'r-2', title: '스타트업 투자, 3분기 반등… 후속 라운드 증가', source: '매일경제 · 09월 06일 13:10' },
    { id: 'r-3', title: '프로야구 포스트시즌 윤곽… 막판 순위싸움 치열', source: '스포츠서울 · 09월 06일 16:40' },
    { id: 'r-4', title: '부동산 전세가 안정세… 갭리스크 완화 조짐', source: '한국경제 · 09월 06일 17:05' },
    { id: 'r-5', title: '메타버스 교육 현장 도입 가속… 체험형 수업 확대', source: 'ZDNet Korea · 09월 06일 18:22' },
  ]

  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [selectedPayload, setSelectedPayload] = useState<{ title: string; text: string } | null>(null)
  return (
    <div className="nv-page">
      <div className="nv-gnb">
        <div className="nv-gnb-inner">
          <div className="nv-logo">N 뉴스</div>
          <nav className="nv-menu">
            {['언론사별','정치','경제','사회','생활/문화','IT/과학','세계','랭킹','신문보기','오피니언','TV','팩트체크','알고리즘 안내','정정보도 모음'].map((m) => (
              <a key={m}>{m}</a>
            ))}
          </nav>
        </div>
      </div>

      <div className="nv-subnav">
        <span>전체 언론사</span>
        <span>뉴스스탠드</span>
        <span>라이브러리</span>
      </div>

      <div className="nv-grid">
        {/* Left column */}
        <section className="nv-col">
          <div className="nv-card">
            <div className="nv-card-header">
              <strong>언론사편집</strong>
              <button className="nv-more">⋯</button>
            </div>
            <div className="nv-press-list">
              {leftArticles.map((a) => (
                <div
                  key={a.id}
                  className={`nv-news${selectedId===a.id ? ' is-selected' : ''}`}
                  onClick={() => { const isSame = selectedId===a.id; setSelectedId(isSame ? null : a.id); setSelectedPayload(isSame ? null : { title: a.title, text: a.summary }); }}
                >
                  <div className="nv-thumb" />
                  <div className="nv-article-body">
                    <h4>{a.title}</h4>
                    <p className="nv-meta">{a.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Middle column */}
        <section className="nv-col">
          <div className="nv-card nv-broadcast">
            <div className="nv-card-header">
              <strong>방송뉴스</strong>
            </div>
            <div className="nv-chips">
              {['A','KBS','MBC','YTN','연합','SBS'].map((c) => (
                <span key={c} className="nv-chip">{c}</span>
              ))}
            </div>
            <div className="nv-video">
              <span className="nv-live">LIVE</span>
            </div>
          </div>

          {midArticles.map((a) => (
            <div
              key={a.id}
              className={`nv-news nv-card${selectedId===a.id ? ' is-selected' : ''}`}
              onClick={() => { const isSame = selectedId===a.id; setSelectedId(isSame ? null : a.id); setSelectedPayload(isSame ? null : { title: a.title, text: a.source || '' }); }}
            >
              <div className="nv-meta">{a.source}</div>
              <div className="nv-article">
                <div className="nv-thumb sm" />
                <div className="nv-article-body">
                  <h4>{a.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Right column */}
        <section className="nv-col">
          {rightArticles.map((a) => (
            <div
              key={a.id}
              className={`nv-news nv-card${selectedId===a.id ? ' is-selected' : ''}`}
              onClick={() => { const isSame = selectedId===a.id; setSelectedId(isSame ? null : a.id); setSelectedPayload(isSame ? null : { title: a.title, text: a.source || '' }); }}
            >
              <div className="nv-meta">{a.source}</div>
              <h4>{a.title}</h4>
            </div>
          ))}
        </section>
      </div>
      <ChatExtension
        verifyPayload={selectedPayload ? {
          platform: 'naver_news',
          sourceUrl: 'https://news.naver.com/',
          language: 'ko',
          title: selectedPayload.title,
          text: selectedPayload.text,
          imageUrls: []
        } : undefined}
      />
    </div>
  )
}

export default NaverNewsPage


