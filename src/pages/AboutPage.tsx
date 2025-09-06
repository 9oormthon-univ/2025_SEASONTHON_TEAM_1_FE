import ChatExtension from '@/components/ChatExtension'

const AboutPage = () => {
  return (
    <div className="ig">
      <aside className="ig-sidebar">
        <div>
          <div className="ig-logo">Instagram</div>
          <nav className="ig-nav">
            <a className="ig-nav-item" href="#">
              <svg className="ig-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 10.5L12 4l9 6.5V20a2 2 0 0 1-2 2h-4v-6H9v6H5a2 2 0 0 1-2-2v-9.5z" strokeWidth="1.8"/></svg>
              <span>홈</span>
            </a>
            <a className="ig-nav-item" href="#">
              <svg className="ig-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="7" strokeWidth="1.8"/><path d="M21 21l-3.5-3.5" strokeWidth="1.8"/></svg>
              <span>검색</span>
            </a>
            <a className="ig-nav-item" href="#">
              <svg className="ig-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="9" strokeWidth="1.8"/><path d="M12 7l3 5-5 0 2-5z" strokeWidth="1.8"/></svg>
              <span>탐색 탭</span>
            </a>
            <a className="ig-nav-item" href="#">
              <svg className="ig-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="4" width="18" height="16" rx="4" strokeWidth="1.8"/><path d="M8 4v4M16 4v4" strokeWidth="1.8"/><polygon points="10,12 14,14 10,16" fill="currentColor" stroke="none"/></svg>
              <span>릴스</span>
            </a>
            <a className="ig-nav-item has-badge" href="#">
              <svg className="ig-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 5L3 12l7 2 2 7 9-16z" strokeWidth="1.8"/></svg>
              <span>메시지</span>
              <span className="ig-badge">5</span>
            </a>
            <a className="ig-nav-item" href="#">
              <svg className="ig-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" strokeWidth="1.8"/></svg>
              <span>알림</span>
            </a>
            <a className="ig-nav-item" href="#">
              <svg className="ig-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="4" y="4" width="16" height="16" rx="3" strokeWidth="1.8"/><path d="M12 8v8M8 12h8" strokeWidth="1.8"/></svg>
              <span>만들기</span>
            </a>
            <a className="ig-nav-item" href="#">
              <svg className="ig-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="8" r="4" strokeWidth="1.8"/><path d="M4 20c1.5-3.5 5-5 8-5s6.5 1.5 8 5" strokeWidth="1.8"/></svg>
              <span>프로필</span>
            </a>
          </nav>
        </div>

        <div className="ig-bottom">
          <a className="ig-nav-item" href="#">
            <svg className="ig-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 7h16M4 12h16M4 17h16" strokeWidth="1.8"/></svg>
            <span>더 보기</span>
          </a>
          <a className="ig-nav-item" href="#">
            <svg className="ig-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="4" y="4" width="6" height="6" rx="1.5" strokeWidth="1.8"/><rect x="14" y="4" width="6" height="6" rx="1.5" strokeWidth="1.8"/><rect x="4" y="14" width="6" height="6" rx="1.5" strokeWidth="1.8"/><rect x="14" y="14" width="6" height="6" rx="1.5" strokeWidth="1.8"/></svg>
            <span>Meta의 다른 앱</span>
          </a>
        </div>
      </aside>

      <main className="ig-feed">
        {Array.from({ length: 5 }).map((_, i) => (
          <article key={i} className="ig-post">
            <header className="ig-post-header">
              <div className="ig-avatar" />
              <div className="ig-user">
                <div className="ig-username">wikitree</div>
                <div className="ig-sub">{2 + i}주 · 팔로우</div>
              </div>
              <button className="ig-more">···</button>
            </header>

            <div className="ig-post-media" />

            <div className="ig-post-actions">
              <div className="ig-actions-left">
                <button>♡</button>
                <button>💬</button>
                <button>↗︎</button>
              </div>
              <button>🔖</button>
            </div>

            <div className="ig-post-body">
              <div className="ig-likes">좋아요 {6384 + i * 17}개</div>
              <div className="ig-caption">
                <span className="ig-username">wikitree</span>
                <span className="ig-text"> 이정부가 추석 연휴 직후 금요일인 10월 10일(금)을 임시공휴일로 지정한다는 전망을 공식적으로 부인했습니다.</span>
              </div>
              <button className="ig-view-comments">댓글 {332 + i}개 모두 보기</button>
            </div>
          </article>
        ))}
      </main>
      <ChatExtension />
    </div>
  )
}

export default AboutPage


