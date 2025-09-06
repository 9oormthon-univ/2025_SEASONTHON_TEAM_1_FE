import ChatExtension from '@/components/ChatExtension'
import { useState } from 'react'

const AboutPage = () => {
  const instaPosts = [
    {
      username: 'wikitree',
      weeksAgo: 2,
      likes: 6420,
      title: "2025 딩고뮤직 '킬링보이스' 콘서트 예매 안내",
      text: "딩고가 10월 18~19일 잠실실내체육관에서 콘서트를 개최한다는 소식입니다. 예매 정보와 일정 확인 필요.",
      sourceUrl: 'https://www.instagram.com/_tripgoing/p/DOQiINrkwjv/',
      imageUrl: ''
    },
    {
      username: 'news1',
      weeksAgo: 1,
      likes: 5123,
      title: '정부, 디지털 미디어 문해력 캠페인 발표',
      text: '청소년 대상 미디어 리터러시 교육 강화 방안 공개. 세부 일정은 미정.',
      sourceUrl: 'https://www.instagram.com/p/ABCDEF12345/',
      imageUrl: ''
    },
    {
      username: 'factdaily',
      weeksAgo: 3,
      likes: 7130,
      title: 'SNS 확산 루머: 특정 약품 품절 사태',
      text: '약국 품절 소문이 돌고 있으나 식약처 공지와 불일치 가능성 제기.',
      sourceUrl: 'https://www.instagram.com/p/GHIJKL67890/',
      imageUrl: ''
    },
    {
      username: 'cityscope',
      weeksAgo: 4,
      likes: 4892,
      title: '도시 축제 일정 변경 루머',
      text: '비 예보로 인한 일정 변경 소식이 있으나 공식 홈페이지 고지 확인 필요.',
      sourceUrl: 'https://www.instagram.com/p/MNOPQR24680/',
      imageUrl: ''
    },
    {
      username: 'sportsflash',
      weeksAgo: 5,
      likes: 8254,
      title: '스타 선수 이적설 급부상',
      text: '해외 매체 보도와 구단 공식 입장 상충. 팩트체크 필요.',
      sourceUrl: 'https://www.instagram.com/p/STUVWX13579/',
      imageUrl: ''
    }
  ] as const;
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null)
  const selected = selectedIdx !== null ? instaPosts[selectedIdx] : null
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
        {instaPosts.map((post, i) => (
          <article
            key={i}
            className={`ig-post${i === selectedIdx ? ' is-selected' : ''}`}
            onClick={() => setSelectedIdx(selectedIdx === i ? null : i)}
          >
            <header className="ig-post-header">
              <div className="ig-avatar" />
              <div className="ig-user">
                <div className="ig-username">{post.username}</div>
                <div className="ig-sub">{post.weeksAgo}주 · 팔로우</div>
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
              <div className="ig-likes">좋아요 {post.likes}개</div>
              <div className="ig-post-title">{post.title}</div>
              <div className="ig-caption">
                <span className="ig-username">{post.username}</span>
                <span className="ig-text"> {post.text}</span>
              </div>
              <button className="ig-view-comments">댓글 {332 + i}개 모두 보기</button>
            </div>
          </article>
        ))}
      </main>
      <ChatExtension
        verifyPayload={selected ? {
          platform: 'instagram',
          sourceUrl: selected.sourceUrl,
          language: 'ko',
          title: selected.title,
          text: selected.text,
          imageUrls: selected.imageUrl ? [selected.imageUrl] : []
        } : undefined}
      />
    </div>
  )
}

export default AboutPage


