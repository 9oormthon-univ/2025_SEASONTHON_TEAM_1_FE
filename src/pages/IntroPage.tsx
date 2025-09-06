const IntroPage = () => {
  const features = [
    { icon: '🔍', title: 'AI 기반 분석', desc: '언어 패턴, 출처 신뢰도, 팩트체킹 DB를 종합 분석합니다.' },
    { icon: '⚡️', title: '즉시 결과', desc: '텍스트·URL 입력 후 평균 수 초 내에 결과를 제공합니다.' },
    { icon: '🎯', title: '97.3% 정확도', desc: '지속적인 학습과 개선으로 업계 최고 수준의 정확도를 자랑합니다.' },
    { icon: '✅', title: '신뢰성 보장', desc: '다양한 팩트체킹 기관과의 연동으로 결과 신뢰성을 높였습니다.' },
    { icon: '🌐', title: '다국어 지원', desc: '주요 언어를 폭넓게 지원하여 글로벌 환경에서도 사용 가능합니다.' },
    { icon: '🕘', title: '24/7 서비스', desc: '언제든지 안정적으로 사용할 수 있도록 운영됩니다.' },
  ]

  const steps = [
    { num: 1, title: '텍스트 또는 URL 입력', desc: '의심스러운 뉴스의 텍스트를 붙여넣거나 URL을 입력하세요.' },
    { num: 2, title: 'AI 분석 수행', desc: '언어 패턴, 출처, 팩트체킹 데이터를 종합 분석합니다.' },
    { num: 3, title: '결과 확인', desc: '가짜뉴스 확률과 상세한 분석 근거를 확인하세요.' },
  ]

  return (
    <div className="intro">
      <section className="intro-landing">
        <div className="landing-left">
          <span className="intro-badge">AI 기반 가짜뉴스 판별 서비스</span>
          <h1>진실을 찾는 가장 <span className="highlight">스마트</span>한 방법</h1>
          <p className="sub">AI가 몇 초 만에 뉴스의 신뢰도를 분석합니다. 가짜뉴스로부터 여러분을 보호하고, 올바른 정보만을 제공합니다.</p>
          <div className="intro-cta">
            <button className="btn btn-primary">지금 분석해보기</button>
            <button className="btn btn-outline">데모 보기</button>
          </div>
          <div className="intro-social-proof">
            <span className="dot dot-1" />
            <span className="dot dot-2" />
            <span className="dot dot-3" />
            <span className="label">12,000+ 사용자가 신뢰</span>
            <span className="stars">★★★★★</span>
            <span className="label">4.9/5 평점</span>
          </div>
        </div>
        <div className="landing-right">
          <div className="landing-media">
            <div className="chip top-right">2.3초 <span>분석 시간</span></div>
            <div className="chip bottom-left">97.3% <span>정확도</span></div>
          </div>
        </div>
      </section>

      <section className="intro-hero">
        <h1>왜 FactCheck AI를 선택해야 할까요?</h1>
        <p>최첨단 AI 기술로 가짜뉴스를 정확하게 판별하고, 신뢰할 수 있는 정보만을 제공합니다.</p>
      </section>

      <section className="intro-grid">
        {features.map((f, i) => (
          <div key={i} className="intro-card">
            <div className="intro-ico">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </section>

      <section className="intro-how">
        <h2>어떻게 작동하나요?</h2>
        <p>세 단계만으로 간편하게 가짜뉴스를 판별할 수 있습니다.</p>
        <div className="intro-steps">
          {steps.map((s) => (
            <div key={s.num} className="intro-step">
              <div className="intro-num">{s.num}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default IntroPage


