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
      username: 'trendpick_officl',
      weeksAgo: 1,
      likes: 5123,
      title: '💡미혼 남녀를 위한 특별한 만남, 템플스테이 <나는 절로, 신흥사>',
      text: `@jabinanum 행사에 무려 2,620명이 신청하며 역대급 경쟁률 기록! 남성 1,084명(90.3:1), 여성 1,536명(128:1)로 전체 평균 109:1🔥 작년 낙산사 편(77:1)을 훌쩍 넘는 수치. 행사는 10월 24일(금)~25일(토) 경북 김천 직지사에서 열리며, 최종 선발된 남녀 12쌍(총 24명)에게는 특별한 인연의 기회가 주어집니다.❣️`,
      sourceUrl: 'https://www.instagram.com/jabinanum/',
      imageUrl: ''
    },
    {
      username: 'moo_i_mood',
      weeksAgo: 3,
      likes: 7130,
      title: '“스폰지밥의 비키니 시티, 실제로 발견됐다?”',
      text: `애니메이션 속 가상 공간으로만 알려졌던 ‘비키니 시티(Bikini City)’가 실제 장소에서 확인됐다는 주장이 나와 화제. 비키니 시티의 모티프는 태평양 마셜 제도의 비키니 환초(Bikini Atoll)로, 과거 미국 핵실험지로 유명. 스폰지밥의 창작자 스티븐 힐렌버그는 해양생물학 교사 출신으로 바다 지식과 상상력을 결합해 세계관을 구축했다는 점에서 오래전부터 비키니 환초가 실제 배경이라는 해석이 꾸준히 제기되어 왔습니다.`,
      sourceUrl: 'https://www.instagram.com/moo_i_mood/',
      imageUrl: ''
    },
    {
      username: 'wikitree',
      weeksAgo: 4,
      likes: 4892,
      title: '이정부, 10월 10일 임시공휴일 지정설 공식 부인',
      text: `기재부는 “검토한 사실이 없다”고 밝혀 장기간 연휴가 해외여행 수요만 키워 내수 활성화에 도움이 되지 않고, 조업일수 감소로 수출·생산에 타격 우려가 있다고 설명. 실제 올해 설 연휴 임시공휴일 지정 당시에도 해외여행은 늘고 국내 소비는 줄어 효과가 미미했다는 지적이 있었습니다. 🗓️📸 연합뉴스`,
      sourceUrl: 'https://www.instagram.com/wikitree/',
      imageUrl: ''
    },
    {
      username: 'wikitree',
      weeksAgo: 5,
      likes: 8254,
      title: '‘누가 미국 가서 내 것도 사줘.’',
      text: `미국 파워볼 로또 1등 당첨자가 14주째 나오지 않으며 상금이 17억 달러(약 2조3640억 원)로 불어났습니다. CNN 등 외신에 따르면 4일 추첨에서도 1등 번호(3, 16, 29, 61, 69 + 파워볼 22)를 모두 맞힌 당첨자는 나오지 않았고, 이로써 41차례 연속 이월. 오는 6일 추첨에는 미국 복권 사상 세 번째로 큰 규모의 당첨금이 걸릴 예정입니다. 파워볼은 2달러로 살 수 있으나 1등 당첨 확률은 2억9220만 분의 1. 1등 당첨 시 연금(17억 달러) 또는 일시불(세후 약 7억7000만 달러) 수령 선택 가능. 2조의 주인공은 누가 될까요? 📸AFP연합뉴스`,
      sourceUrl: 'https://www.cnn.com/',
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


