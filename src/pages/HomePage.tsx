import Carousel from '@/components/Carousel'
import ChatExtension from '@/components/ChatExtension'
import RightRail from '@/components/RightRail'

const dummy = [
  {
    id: '1',
    title: '“AI 혁명은 가짜였다?” 미국 직장인 3명 중 2명이 의문하는 진짜 이유',
    summary: 'AI 혁명이라더니, 막상 미국 직장인 3명 중 2명은 AI를 안 쓴다. 특히 나이든 세대는 거의 안 쓰고, 젊은 세대만 적극적이라는 조사다.',
  },
  {
    id: '2',
    title: '챗GPT가 1대 공학과를 바꾼다? 개발자 2천만 명의 선택',
    summary: '코딩 실무 흐름이 대화형 도구 중심으로 재편되며 생산성 격차가 벌어진다. 기업들은 도입 매뉴얼을 표준화 중.',
  },
  {
    id: '3',
    title: '대학 중퇴하고 380억 벌었다?! 세상을 뒤집은 스타트업',
    summary: '실패를 거듭하던 팀이 고객 문제에 집착하며 전환에 성공, 글로벌 MRR 1위로 도약했다는 비하인드.',
  },
  {
    id: '4',
    title: '“내일 과외 학원 다 망하나?” 생성형 튜터의 반격',
    summary: 'AI 튜터가 개인맞춤 커리큘럼을 제공, 학습 격차 해소 가능성이 높아지며 교육 시장의 질적 변화가 예고된다.',
  },
  {
    id: '5',
    title: 'MS-오픈AI 동맹의 진짜 속내, 클라우드 전쟁 2막',
    summary: '모델-인프라-생태계의 수직 통합을 두고 클라우드 빅3의 전략이 분화 중. 국내 기업에 주는 시사점은 무엇일까.',
  },
]

const HomePage = () => {
  return (
    <>
      <div className="home-grid">
        <div className="main">
          <Carousel items={dummy.slice(0, 5)} />
        </div>
        <RightRail />
      </div>
      <ChatExtension />
    </>
  )
}

export default HomePage


