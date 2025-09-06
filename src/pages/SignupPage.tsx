const SignupPage = () => {
  return (
    <div className="auth">
      <div className="auth-card">
        <h2>회원가입</h2>
        <p className="auth-sub">간단히 가입하고 서비스를 바로 사용해보세요.</p>
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <label>
            이름
            <input type="text" placeholder="홍길동" required />
          </label>
          <label>
            이메일
            <input type="email" placeholder="you@example.com" required />
          </label>
          <label>
            비밀번호
            <input type="password" placeholder="8자 이상" required />
          </label>
          <button className="btn btn-primary" type="submit">가입하기</button>
        </form>
        <div className="auth-foot">
          이미 계정이 있나요? <a href="/login">로그인</a>
        </div>
      </div>
    </div>
  )
}

export default SignupPage


