const LoginPage = () => {
  return (
    <div className="auth">
      <div className="auth-card">
        <h2>로그인</h2>
        <p className="auth-sub">계정에 로그인하여 가짜뉴스 분석을 시작하세요.</p>
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <label>
            이메일
            <input type="email" placeholder="you@example.com" required />
          </label>
          <label>
            비밀번호
            <input type="password" placeholder="••••••••" required />
          </label>
          <button className="btn btn-primary" type="submit">로그인</button>
        </form>
        <div className="auth-foot">
          계정이 없나요? <a href="/signup">회원가입</a>
        </div>
      </div>
    </div>
  )
}

export default LoginPage


