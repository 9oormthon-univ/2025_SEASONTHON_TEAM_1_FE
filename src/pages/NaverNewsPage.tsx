import ChatExtension from '@/components/ChatExtension'
const NaverNewsPage = () => {
  const leftArticles = Array.from({ length: 5 }).map((_, i) => ({
    id: `l-${i}`,
    title: `[속보] LG엔솔 "임직원 47명 협력사 2500억 구금...김기..."`,
    summary: '국제신문 · 09월 06일 18:48 · 속보|조현 외교장관 "우리군과 300여 명 구금, 공휴일..."',
  }))

  const midArticles = Array.from({ length: 4 }).map((_, i) => ({
    id: `m-${i}`,
    title: '[속보]LG엔솔 美 출장 전면 중단... 297명 구금',
    source: '동아일보 · 09월 06일 18:48',
  }))

  const rightArticles = Array.from({ length: 6 }).map((_, i) => ({
    id: `r-${i}`,
    title: '이 대통령, "한국인 대규모 구금 사태"에... "신속 해결 위해 총력 대응"',
    source: 'KBS · 09월 06일 18:41',
  }))

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
            {leftArticles.map((a) => (
              <div key={a.id} className="nv-article">
                <div className="nv-thumb" />
                <div className="nv-article-body">
                  <h4>{a.title}</h4>
                  <p className="nv-meta">{a.summary}</p>
                </div>
              </div>
            ))}
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
            <div key={a.id} className="nv-card">
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
            <div key={a.id} className="nv-card">
              <div className="nv-meta">{a.source}</div>
              <h4>{a.title}</h4>
            </div>
          ))}
        </section>
      </div>
      <ChatExtension />
    </div>
  )
}

export default NaverNewsPage


