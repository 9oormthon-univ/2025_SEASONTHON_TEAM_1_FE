import { useRef } from 'react'

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
      <div className="sns-head">
          <h2>실시간 SNS 연동</h2>
          <p>우리가 쓰는 플랫폼 위에서 바로 팩트체크를 적용해보세요.</p>
        </div>
      {/* SNS 연동 카드 캐러셀 (간단 스크롤 스냅) */}
      <section className="sns-section">
        {/* 플랫폼 아이콘 스트립 */}
        <div className="sns-logos">
          {[
            { name: 'X', key: 'x' },
            { name: 'YouTube', key: 'yt' },
            { name: 'Instagram', key: 'ig' },
            { name: 'Threads', key: 'th' },
            { name: 'TikTok', key: 'tt' },
          ].map((p) => (
            <span key={p.key} className={`sns-logo ${p.key}`}>
              <span className="ico" aria-hidden />
              {p.name}
            </span>
          ))}
        </div>
        
        {(() => {
          const list = [
            { name: 'X (Twitter)', tag: '실시간 확산 트윗, 즉시 판별', bg: 'grad-x' },
            { name: 'YouTube', tag: '영상 설명/댓글, 링크 한 번으로', bg: 'grad-yt' },
            { name: 'Instagram', tag: '피드/릴스 캡션 검증', bg: 'grad-ig' },
            { name: 'Threads', tag: '스레드 토픽 요약+진위', bg: 'grad-th' },
            { name: 'TikTok', tag: '짧은 영상의 사실 여부', bg: 'grad-tt' },
          ]
          const ref = useRef<HTMLDivElement>(null)
          const scroll = (dir: 'prev' | 'next') => () => {
            const el = ref.current
            if (!el) return
            const delta = Math.floor(el.clientWidth * 0.425)
            el.scrollBy({ left: dir === 'next' ? delta : -delta, behavior: 'smooth' })
          }
          return (
            <div className="sns-row">
              <button className="sns-nav-btn prev" onClick={scroll('prev')} aria-label="prev">‹</button>
              <div ref={ref} className="sns-scroll">
                {list.map((p) => (
                  <article key={p.name} className={`sns-card ${p.bg}`}>
                    <div className="sns-content">
                      <h3>{p.name}</h3>
                      <p>{p.tag}</p>
                      <div className="sns-cta">
                        <button className="btn btn-primary">바로 연결</button>
                      </div>
                    </div>
                    <div className="sns-visual" />
                  </article>
                ))}
              </div>
              <button className="sns-nav-btn next" onClick={scroll('next')} aria-label="next">›</button>
            </div>
          )
        })()}
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

      {/* 사용법 - 실시간 SNS 선택 + 챗봇 조사 */}
      <section className="usage">
        <h2>어떻게 사용하나요?</h2>
        <p className="muted">실시간 SNS에서 점검할 내용을 선택하고, 챗봇과 대화하며 사실 여부를 빠르게 확인하세요.</p>
        <div className="usage-steps">
          <div className="usage-card">
            <div className="usage-ico">1</div>
            <h4>플랫폼 선택</h4>
            <div className="chips">
              <span>X</span><span>YouTube</span><span>Instagram</span><span>Threads</span><span>TikTok</span>
            </div>
          </div>
          <div className="usage-card">
            <div className="usage-ico">2</div>
            <h4>점검 항목 선택</h4>
            <div className="chips">
              <span>출처 확인</span><span>날짜/맥락</span><span>인물/기관</span><span>수치 검증</span>
            </div>
          </div>
          <div className="usage-card">
            <div className="usage-ico">3</div>
            <h4>챗봇에 질문</h4>
            <div className="usage-input">
              <input placeholder="URL 또는 텍스트를 붙여넣고 엔터" />
              <button className="btn btn-primary">분석</button>
            </div>
            <div className="chat-demo">
              <div className="bubble me">이 게시물 사실인가요?</div>
              <div className="bubble bot">가짜 가능성 72%. 주요 근거: 공식 통계와 불일치, 원문 출처 부재.</div>
            </div>
          </div>
        </div>
      </section>

      {/* 통계 - 최근 내 SNS에서의 거짓 정보 노출 */}
      <section className="stats">
        <h2>최근 내 SNS에서 본 거짓 정보</h2>
        <p className="muted">최근 7일 기준</p>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-num">12건</div>
            <div className="stat-label">잠재적 거짓</div>
          </div>
          <div className="stat-card">
            <div className="stat-num">5건</div>
            <div className="stat-label">확정 오정보</div>
          </div>
          <div className="stat-card">
            <div className="stat-num">18건</div>
            <div className="stat-label">검증 요청</div>
          </div>
          <div className="stat-card">
            <div className="stat-num score">78%</div>
            <div className="stat-label">탐지 정확도(샘플)</div>
          </div>
        </div>
        <div className="bar" aria-hidden>
          <div className="bar-fill" style={{ width: '78%' }} />
        </div>
      </section>
    </div>
  )
}

export default IntroPage


