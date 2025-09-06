import React, { useMemo, useState } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import ChatExtension from '@/components/ChatExtension';


const FacebookPage: React.FC = () => {

  const [posts, setPosts] = useState([
    {
      id: 1,
      user: {
        name: 'Wikitree',
        avatar: '/src/asset/fb-profile1.png',
        time: '2시간 전'
      },
      title: "2025 딩고뮤직 '킬링보이스' 콘서트 예매 안내",
      content: '딩고가 10월 18~19일 잠실실내체육관에서 콘서트를 개최한다는 소식입니다. 예매 정보와 일정 확인 필요.',
      sourceUrl: 'https://www.instagram.com/_tripgoing/p/DOQiINrkwjv/',
      image: '',
      likes: 24,
      comments: 8,
      shares: 3
    },
    {
      id: 2,
      user: {
        name: 'News1',
        avatar: '/src/asset/fb-profile2.png',
        time: '4시간 전'
      },
      title: '정부, 디지털 미디어 문해력 캠페인 발표',
      content: '청소년 대상 미디어 리터러시 교육 강화 방안 공개. 세부 일정은 미정.',
      sourceUrl: 'https://www.instagram.com/p/ABCDEF12345/',
      image: '',
      likes: 45,
      comments: 12,
      shares: 7
    },
    {
      id: 3,
      user: {
        name: 'FactDaily',
        avatar: '/src/asset/fb-profile3.png',
        time: '6시간 전'
      },
      title: 'SNS 확산 루머: 특정 약품 품절 사태',
      content: '약국 품절 소문이 돌고 있으나 식약처 공지와 불일치 가능성 제기.',
      sourceUrl: 'https://www.instagram.com/p/GHIJKL67890/',
      image: '',
      likes: 67,
      comments: 15,
      shares: 4
    }

  ]);

  const stories = [
    { id: 1, user: '내 스토리', avatar: '/src/asset/fb-profile1.png', isOwn: true },
    { id: 2, user: '김철수', avatar: '/src/asset/fb-profile2.png' },
    { id: 3, user: '이영희', avatar: '/src/asset/fb-profile3.png' },
    { id: 4, user: '박민수', avatar: '/src/asset/fb-profile1.png' },
    { id: 5, user: '정수진', avatar: '/src/asset/fb-profile2.png' }
  ];

  const [newPost, setNewPost] = useState('');

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPost.trim()) {
      const post = {
        id: Date.now(),
        user: {
          name: '나',
          avatar: '/src/asset/fb-profile3.png',
          time: '방금 전'
        },
        title: '사용자 게시물',
        content: newPost,
        sourceUrl: 'https://facebook.com/post/' + Date.now(),
        image: '',
        likes: 0,
        comments: 0,
        shares: 0
      };
      setPosts([post, ...posts]);
      setNewPost('');
    }
  };

  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selected = useMemo(() => selectedId != null ? posts.find(p => p.id === selectedId) || null : null, [posts, selectedId]);
  return (
    <div className="facebook-page">
      {/* Facebook Header */}
      <div className="fb-header">
        <div className="fb-header-content">
          <div className="fb-logo">
            <h1>facebook</h1>
          </div>
          <div className="fb-search">
            <input type="text" placeholder="Facebook 검색" />
          </div>
          <div className="fb-nav">
            <button className="fb-nav-item active">홈</button>
            <button className="fb-nav-item">친구</button>
            <button className="fb-nav-item">그룹</button>
            <button className="fb-nav-item">게임</button>
            <button className="fb-nav-item">메뉴</button>
          </div>
          <div className="fb-profile">
            <img src="/src/asset/fb-profile1.png" alt="프로필" />
          </div>
        </div>
      </div>

      <div className="fb-main">
        {/* Left Sidebar */}
        <div className="fb-sidebar">
          <div className="fb-sidebar-section">
            <div className="fb-sidebar-item">
              <span><b>콘텐츠</b></span>
            </div>
            <div className="fb-sidebar-item">
              <span>🎮 게임&앱</span>
            </div>
            <div className="fb-sidebar-item">
              <span>👥 팔로잉 목록</span>
            </div>
            <div className="fb-sidebar-item">
              <span> </span>
              <span><b>활동</b></span>
            </div>
            <div className="fb-sidebar-item">
              <span>📷 사진 앨범</span>
            </div>
            <div className="fb-sidebar-item">
              <span>📹 동영상</span>
            </div>
            <div className="fb-sidebar-item">
              <span>🕒 과거의 오늘</span>
            </div>
            <div className="fb-sidebar-item">
              <span><b>기타</b></span>
            </div>
            <div className="fb-sidebar-item">
              <span>☕ 커뮤니티 그룹</span>
            </div>
            <div className="fb-sidebar-item">
              <span>🎉 이벤트</span>
            </div>
            <div className="fb-sidebar-item">
              <span>⭐ 즐겨찾기</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="fb-content">
          {/* Stories Section */}
          <div className="fb-stories">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView="auto"
              direction="horizontal"
              className="fb-stories-swiper"
            >
              {stories.map((story) => (
                <SwiperSlide key={story.id} className="fb-story-slide">
                  <div className={`fb-story ${story.isOwn ? 'own-story' : ''}`}>
                    <img src={story.avatar} alt={story.user} />
                    <span>{story.user}</span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Create Post */}
          <div className="fb-create-post">
            <div className="fb-create-post-header">
              <img src="/src/asset/fb-profile2.png" alt="프로필" />
              <form onSubmit={handlePostSubmit}>
                <input
                  type="text"
                  placeholder="무슨 생각을 하고 계신가요?"
                  value={newPost}
                  onChange={(e) => setNewPost(e.target.value)}
                />
                <button type="submit" style={{ display: 'none' }} />
              </form>
            </div>
            <div className="fb-create-post-actions">
              <button className="fb-action-btn">
                <span>📹 동영상</span>
              </button>
              <button className="fb-action-btn">
                <span>📷 사진</span>
              </button>
              <button className="fb-action-btn">
                <span>🫧 기분/활동</span>
              </button>
            </div>
          </div>

          {/* Posts */}
          <div className="fb-posts">
            {posts.map((post) => (
              <div key={post.id} className={`fb-post${selectedId===post.id ? ' is-selected' : ''}`} onClick={() => setSelectedId(selectedId===post.id ? null : post.id)}>
                <div className="fb-post-header">
                  <img src={post.user.avatar} alt={post.user.name} />
                  <div className="fb-post-user">
                    <h4>{post.user.name}</h4>
                    <span>{post.user.time}</span>
                  </div>
                  <button className="fb-post-more">⋯</button>
                </div>
                <div className="fb-post-content">
                  <h4 style={{ margin: '0 0 6px' }}>{post.title}</h4>
                  <p>{post.content}</p>
                  {post.image && <img src={post.image} alt="포스트 이미지" />}
                </div>
                <div className="fb-post-actions">
                  <button className="fb-post-action">
                  <span>👍</span>
                  <span>{post.likes}</span>
                  <span>♥️</span>
                  <span>{post.likes}</span>
                  </button>
                  <button className="fb-post-action">
                    <span>💬</span>
                    <span>{post.comments}</span>
                  </button>
                  <button className="fb-post-action">
                    <span>🔄</span>
                    <span>{post.shares}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="fb-right-sidebar">
          <div className="fb-right-section">
            <h3>친구</h3>
            <div className="fb-contact-list">
              <div className="fb-contact-item">
                <img src="/src/asset/fb-profile1.png" alt="강산들" />
                <span>강산들</span>
                <div className="fb-online-indicator"></div>
              </div>
              <div className="fb-contact-item">
                <img src="/src/asset/fb-profile2.png" alt="조재민" />
                <span>조재민</span>
                <div className="fb-online-indicator"></div>
              </div>
              <div className="fb-contact-item">
                <img src="/src/asset/fb-profile3.png" alt="최주경" />
                <span>최주경</span>
                <div className="fb-online-indicator"></div>
              </div>
              <div className="fb-contact-item">
                <img src="/src/asset/fb-profile1.png" alt="한상문" />
                <span>한상문</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ChatExtension
        verifyPayload={selected ? {
          platform: 'facebook',
          sourceUrl: selected.sourceUrl,
          language: 'ko',
          title: selected.title,
          text: selected.content,
          imageUrls: []
        } : undefined}
      />
    </div>
  );
};

export default FacebookPage;
