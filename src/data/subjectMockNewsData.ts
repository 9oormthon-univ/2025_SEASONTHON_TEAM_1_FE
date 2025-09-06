export interface NewsData {
  id: number;
  title: string;
  content: string;
  verdict: string;
  confidence: number;
  source: string;
}

export const mockNewsData: NewsData[] = [
  {
    id: 1,
    title: "정부, 내년부터 모든 국민에게 기본소득 지급한다",
    content: "정부가 내년부터 모든 국민에게 월 50만원의 기본소득을 지급한다고 발표했습니다. 이는 경제적 불평등을 해소하고 국민의 삶의 질을 향상시키기 위한 정책입니다.",
    verdict: "가짜뉴스",
    confidence: 20,
    source: "정부 공식 발표 없음"
  },
  {
    id: 2,
    title: "코로나19 백신, 5G 통신과 연동되어 인체에 해롭다",
    content: "최근 접종된 코로나19 백신에는 5G 통신 칩이 내장되어 있어 인체에 해로운 전자파를 발생시킨다는 주장이 제기되었습니다.",
    verdict: "가짜뉴스",
    confidence: 10,
    source: "의학 전문가 반박"
  },
  {
    id: 3,
    title: "한국은행 기준금리 0.5%p 인상",
    content: "한국은행이 11월 금융통화위원회에서 기준금리를 0.5%p 인상하여 연 3.5%로 결정했습니다.",
    verdict: "진짜뉴스",
    confidence: 80,
    source: "한국은행 공식 발표"
  },
  {
    id: 4,
    title: "서울시, 모든 대중교통 무료화 추진",
    content:
      "서울시가 내년부터 지하철과 버스 등 모든 대중교통을 무료로 운영하겠다고 발표했다는 소식이 퍼지고 있습니다.",
    verdict: "가짜뉴스",
    confidence: 15,
    source: "서울시 교통국 해명 자료"
  },
  {
    id: 5,
    title: "삼성전자, 세계 최초 완전 자율주행 스마트폰 출시",
    content:
      "삼성전자가 운전대를 잡지 않아도 자동차를 조종할 수 있는 자율주행 기능을 탑재한 스마트폰을 출시했다고 보도되었습니다.",
    verdict: "가짜뉴스",
    confidence: 12,
    source: "삼성전자 공식 보도자료"
  },
  {
    id: 6,
    title: "대한민국, 2030년 월드컵 본선 직행 확정",
    content:
      "대한민국이 국제축구연맹(FIFA)으로부터 2030년 월드컵 본선 직행 티켓을 받았다는 소문이 퍼지고 있습니다.",
    verdict: "가짜뉴스",
    confidence: 25,
    source: "대한축구협회 공식 발표"
  },
  {
    id: 7,
    title: "구글, 한국에 AI 연구개발 센터 신설",
    content:
      "구글이 서울에 새로운 AI 연구개발 센터를 설립한다고 공식 발표했습니다.",
    verdict: "진짜뉴스",
    confidence: 85,
    source: "구글 코리아 공식 발표"
  },
  {
    id: 8,
    title: "국제우주정거장, 한국인 최초 장기 체류 시작",
    content:
      "한국인 우주비행사가 국제우주정거장에서 6개월간의 장기 체류를 시작했습니다.",
    verdict: "진짜뉴스",
    confidence: 90,
    source: "KARI 및 NASA 공식 발표"
  },
  {
    id: 9,
    title: "전 세계 인터넷, 2026년부터 유료화 전환",
    content:
      "국제 인터넷 협의체가 모든 인터넷 접속을 유료화하기로 결정했다는 뉴스가 온라인에 퍼지고 있습니다.",
    verdict: "가짜뉴스",
    confidence: 5,
    source: "국제 인터넷 협회(ICANN) 공식 반박"
  },
  {
    id: 10,
    title: "애플, 아이폰에 뇌파 인식 기능 탑재 발표",
    content:
      "애플이 차세대 아이폰에 사용자의 뇌파를 읽어 기기를 조작할 수 있는 기능을 도입한다고 발표했다는 소문이 있습니다.",
    verdict: "가짜뉴스",
    confidence: 18,
    source: "애플 공식 이벤트 기록"
  }
];
