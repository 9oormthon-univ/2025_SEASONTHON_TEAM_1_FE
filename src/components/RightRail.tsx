const RightRail = () => {
  return (
    <aside className="right-rail">
      <section className="card greet">
        <h5>유아이블, 만나서 반가워.</h5>
        <p>오늘도 함께 앞서 나가 보자구</p>
        <a className="primary" href="#">맞춤 뉴스 →</a>
      </section>

      <section className="card hot">
        <h5>지금 핫한 뉴스</h5>
        <ol className="hot-list">
          {Array.from({ length: 10 }).map((_, i) => (
            <li key={i}>
              <a href="#">임시 리스트 텍스트 {i + 1}</a>
            </li>
          ))}
        </ol>
      </section>

      <section className="card newsletter">
        <h5>부키가 물어다 주는 뉴스레터</h5>
        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="email@example.com" />
          <button type="submit">구독</button>
        </form>
      </section>
    </aside>
  )
}

export default RightRail


