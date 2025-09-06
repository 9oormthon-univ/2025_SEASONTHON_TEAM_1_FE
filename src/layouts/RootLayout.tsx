import { NavLink, Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div>
      <header className="appbar">
        <div className="appbar-inner">
          <div className="brand">
            <span>뉴스플랫폼</span>
          </div>
          <nav className="nav">
            <NavLink to="/insta">인스타그램</NavLink>
            <NavLink to="/facebook">페이스북</NavLink>
            <NavLink to="/naver-news">네이버 뉴스</NavLink>
            <span className="divider">|</span>
            <NavLink to="/intro">서비스 소개</NavLink>
          </nav>
          <div className="spacer" />
          <div className="right">
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


