import { Link, NavLink, Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div>
      <header className="appbar">
        <div className="appbar-inner">
          <nav className="nav">
            <Link to="/">AI PICK</Link>
            <NavLink to="/">홈</NavLink>
            <NavLink to="/about">소개</NavLink>
            <NavLink to="/news">뉴스</NavLink>
            <NavLink to="/insights">인사이트</NavLink>
            <NavLink to="/notices">공지</NavLink>
            <span className="divider">|</span>
            <NavLink to="/newsletter">뉴스레터 구독</NavLink>
          </nav>
          <div className="spacer" />
          <div className="right">
            <Link className="search" to="/search">🔍 검색</Link>
            <NavLink to="/login">로그인</NavLink>
            <NavLink to="/signup">회원가입</NavLink>
          </div>
        </div>
      </header>

      <main className="container">
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout


