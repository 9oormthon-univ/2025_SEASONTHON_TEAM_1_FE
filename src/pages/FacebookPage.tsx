import React, { useState } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import ChatExtension from '@/components/ChatExtension';


const FacebookPage: React.FC = () => {

  const [posts, setPosts] = useState([
    {
      id: 1,
      user: {
        name: '김철수',
        avatar: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiM4MDgwODAiLz4KPC9zdmc+',
        time: '2시간 전'
      },
      content: '오늘 날씨가 정말 좋네요! 산책하기 딱 좋은 날씨입니다. 여러분도 좋은 하루 보내세요! 😊',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDUwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjODA4MDgwIi8+Cjwvc3ZnPg==',
      likes: 24,
      comments: 8,
      shares: 3
    },
    {
      id: 2,
      user: {
        name: '이영희',
        avatar: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiM4MDgwODAiLz4KPC9zdmc+',
        time: '4시간 전'
      },
      content: '새로운 프로젝트를 시작했습니다! 정말 기대되네요. 팀원들과 함께 열심히 해보겠습니다 💪',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDUwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjODA4MDgwIi8+Cjwvc3ZnPg==',
      likes: 45,
      comments: 12,
      shares: 7
    },
    {
      id: 3,
      user: {
        name: '박민수',
        avatar: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiM4MDgwODAiLz4KPC9zdmc+',
        time: '6시간 전'
      },
      content: '맛있는 파스타를 만들어봤어요! 레시피는 비밀입니다 😄',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDUwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjODA4MDgwIi8+Cjwvc3ZnPg==',
      likes: 67,
      comments: 15,
      shares: 4
    }

  ]);

  const stories = [
    { id: 1, user: '내 스토리', avatar: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMzAiIGZpbGw9IiM4MDgwODAiLz4KPC9zdmc+', isOwn: true },
    { id: 2, user: '김철수', avatar: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMzAiIGZpbGw9IiM4MDgwODAiLz4KPC9zdmc+' },
    { id: 3, user: '이영희', avatar: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMzAiIGZpbGw9IiM4MDgwODAiLz4KPC9zdmc+' },
    { id: 4, user: '박민수', avatar: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMzAiIGZpbGw9IiM4MDgwODAiLz4KPC9zdmc+' },
    { id: 5, user: '정수진', avatar: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMzAiIGZpbGw9IiM4MDgwODAiLz4KPC9zdmc+' }
  ];

  const [newPost, setNewPost] = useState('');

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPost.trim()) {
      const post = {
        id: Date.now(),
        user: {
          name: '나',
          avatar: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiM4MDgwODAiLz4KPC9zdmc+',
          time: '방금 전'
        },
        content: newPost,
        image: '',
        likes: 0,
        comments: 0,
        shares: 0
      };
      setPosts([post, ...posts]);
      setNewPost('');
    }
  };

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
            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9IiM4MDgwODAiLz4KPC9zdmc+" alt="프로필" />
          </div>
        </div>
      </div>

      <div className="fb-main">
        {/* Left Sidebar */}
        <div className="fb-sidebar">
          <div className="fb-sidebar-section">
            <div className="fb-sidebar-item">
              <span>콘텐츠</span>
            </div>
            <div className="fb-sidebar-item">
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTIiIGZpbGw9IiM4MDgwODAiLz4KPC9zdmc+" alt="프로필" />
              <span>게임&앱</span>
            </div>
            <div className="fb-sidebar-item">
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTIiIGZpbGw9IiM4MDgwODAiLz4KPC9zdmc+" alt="친구" />
              <span>팔로잉 목록</span>
            </div>
            <div className="fb-sidebar-item">
              <span>활동</span>
            </div>
            <div className="fb-sidebar-item">
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTIiIGZpbGw9IiM4MDgwODAiLz4KPC9zdmc+" alt="프로필" />
              <span>사진 앨범</span>
            </div>
            <div className="fb-sidebar-item">
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTIiIGZpbGw9IiM4MDgwODAiLz4KPC9zdmc+" alt="시장" />
              <span>동영상</span>
            </div>
            <div className="fb-sidebar-item">
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTIiIGZpbGw9IiM4MDgwODAiLz4KPC9zdmc+" alt="동영상" />
              <span>과거의 오늘</span>
            </div>
            <div className="fb-sidebar-item">
              <span>기타</span>
            </div>
            <div className="fb-sidebar-item">
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTIiIGZpbGw9IiM4MDgwODAiLz4KPC9zdmc+" alt="그룹" />
              <span>커뮤니티 그룹</span>
            </div>
            <div className="fb-sidebar-item">
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTIiIGZpbGw9IiM4MDgwODAiLz4KPC9zdmc+" alt="동영상" />
              <span>이벤트</span>
            </div>
            <div className="fb-sidebar-item">
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTIiIGZpbGw9IiM4MDgwODAiLz4KPC9zdmc+" alt="동영상" />
              <span>즐겨찾기</span>
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
              slidesPerView={5}
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
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiM4MDgwODAiLz4KPC9zdmc+" alt="프로필" />
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
              <div key={post.id} className="fb-post">
                <div className="fb-post-header">
                  <img src={post.user.avatar} alt={post.user.name} />
                  <div className="fb-post-user">
                    <h4>{post.user.name}</h4>
                    <span>{post.user.time}</span>
                  </div>
                  <button className="fb-post-more">⋯</button>
                </div>
                <div className="fb-post-content">
                  <p>{post.content}</p>
                  {post.image && <img src={post.image} alt="포스트 이미지" />}
                </div>
                <div className="fb-post-actions">
                  <button className="fb-post-action">
                    <span>👍♥️</span>
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
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9IiM4MDgwODAiLz4KPC9zdmc+" alt="김철수" />
                <span>강산들</span>
                <div className="fb-online-indicator"></div>
              </div>
              <div className="fb-contact-item">
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9IiM4MDgwODAiLz4KPC9zdmc+" alt="이영희" />
                <span>조재민</span>
                <div className="fb-online-indicator"></div>
              </div>
              <div className="fb-contact-item">
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9IiM4MDgwODAiLz4KPC9zdmc+" alt="박민수" />
                <span>최주경</span>
                <div className="fb-online-indicator"></div>
              </div>
              <div className="fb-contact-item">
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9IiM4MDgwODAiLz4KPC9zdmc+" alt="박민수" />
                <span>한상문</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ChatExtension />
    </div>
  );
};

export default FacebookPage;
