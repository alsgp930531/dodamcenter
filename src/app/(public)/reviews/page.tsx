import { Metadata } from 'next';
import AnimatedSection from '@/components/shared/AnimatedSection';
import ReviewList from '@/components/reviews/ReviewList';

export const metadata: Metadata = {
  title: '상담 후기',
  description: '다온상담센터 상담을 경험한 내담자분들의 솔직한 후기입니다.',
};

const sampleReviews = [
  {
    id: '33',
    clientInitial: '김○○',
    counselingType: '가족상담',
    content: '엄마랑 맨날 싸우고 집에 가기 싫었는데 가족상담 받고 나서 서로 좀 이해하게 됐어요~ 😊 완벽하진 않아도 대화가 다시 시작된 것만으로도 진짜 큰 변화!! 예전엔 명절이 지옥이었는데 이번 설날은 웃으면서 보냈어요ㅠㅠ 선생님이 중간에서 양쪽 입장을 다 들어주시니까 엄마도 저도 서로 "아 그런 마음이었구나" 하게 되더라고요. 아직 가끔 부딪히긴 하지만 예전처럼 며칠씩 연락 끊는 일은 없어졌습니다 💕',
    rating: 5,
    createdAt: '2026.03.08',
  },
  {
    id: '34',
    clientInitial: '최○○',
    counselingType: '심리검사 - 종합심리검사',
    content: '왜 이렇게 불안하고 우울한지 모르겠어서 종합심리검사 받았는데, 제 성향이랑 상태를 되게 구체적으로 알려주시더라고요~ 결과 해석도 엄청 꼼꼼하게 해주셔서 앞으로 뭘 어떻게 하면 좋을지 방향이 잡혔어요! 막연한 불안이 줄어든 느낌이라 진작 받을걸 싶었습니다 ^^',
    rating: 5,
    createdAt: '2026.02.14',
  },
  {
    id: '35',
    clientInitial: '이○○',
    counselingType: '청년 응원 패키지',
    content: '비용 때문에 상담 계속 미루다가 청년 응원 패키지로 시작했어요! 😆 프로그램이 체계적이라 그냥 상담만 받는 것보다 효과가 좋았고 지금은 일상이 훨씬 안정적이에요~ 이런 패키지가 있는 줄 진작 알았으면 좋았을 텐데ㅠ 부담 없이 전문 상담 받을 수 있어서 정말 감사했습니다. 주변 친구들한테도 추천했어요! 경제적으로 부담돼서 망설이는 분들 꼭 알아보세요 👍',
    rating: 5,
    createdAt: '2026.01.20',
  },
  {
    id: '36',
    clientInitial: '박○○',
    counselingType: '개인상담',
    content: '회사 스트레스로 잠을 못 잤는데 지금은 퇴근하면 마음이 편해요~',
    rating: 5,
    createdAt: '2025.12.10',
  },
  {
    id: '1',
    clientInitial: '김○○',
    counselingType: '개인상담',
    content: '반년 넘게 직장 스트레스로 매일 힘들었거든요ㅠㅠ 아침마다 출근하기 싫어서 이불 속에서 울기도 했었어요. 근데 상담받으면서 제 감정을 알아차리는 법을 배웠어요~ 선생님이 진짜 따뜻하게 공감해주셔서 그게 제일 큰 힘이 됐어요! 😊 요즘은 스트레스 상황에서도 차분하게 대처하는 제가 신기합니다. 상사한테 부당한 말 들어도 예전처럼 밤새 끙끙 앓지 않고 "그건 제 문제가 아니야"라고 선 긋는 게 가능해졌어요~ 상담이 이렇게 삶을 바꿀 줄 몰랐습니다 🙏',
    rating: 5,
    createdAt: '2025.11.15',
  },
  {
    id: '2',
    clientInitial: '이○○',
    counselingType: '커플상담',
    content: '남자친구랑 진짜 헤어지기 직전이었는데 커플상담 받고 완전 달라졌어요!! 서로 이해하는 법을 배우니까 대화가 깊어지고 관계가 훨씬 좋아졌어요~ 감사합니다!',
    rating: 5,
    createdAt: '2025.10.28',
  },
  {
    id: '3',
    clientInitial: '박○○',
    counselingType: '성장 프로그램',
    content: '퍼스널 브랜딩 프로그램 들었는데 겉모습이 아니라 내면의 가치부터 정리하는 거라 진짜 좋았어요! 진로 확신도 생기고 이직도 성공했습니다~!! 🎉🎉',
    rating: 5,
    createdAt: '2025.09.10',
  },
  {
    id: '4',
    clientInitial: '정○○',
    counselingType: '개인상담',
    content: '저 원래 눈치를 엄~청 보는 스타일이었거든요. 자존감이 바닥이라 늘 남들 신경 쓰면서 살았는데, 8회 상담 받고 나니까 확실히 달라진 게 느껴져요. 제 삶의 주인이 된 느낌이랄까? 예를 들면 예전엔 친구가 연락 안 하면 "나한테 화났나?" 이러면서 혼자 전전긍긍했거든요ㅠ 근데 이젠 "바쁜가 보다~" 하고 넘길 수 있어요. 이게 별거 아닌 것 같지만 저한테는 엄청난 변화예요!! 다온센터 선생님들 진짜 감사합니다 ^^',
    rating: 5,
    createdAt: '2025.08.22',
  },
  {
    id: '5',
    clientInitial: '최○○',
    counselingType: '그룹상담',
    content: '처음엔 그룹상담 좀 어색했는데 비슷한 고민 가진 또래들이랑 얘기하다 보니까 "아 나만 이런 게 아니구나~" 싶어서 위안이 많이 됐어요! 🤗',
    rating: 4.5,
    createdAt: '2025.07.05',
  },
  {
    id: '6',
    clientInitial: '한○○',
    counselingType: '가족상담',
    content: '부모님이랑 항상 불편했어요. 같은 공간에 있으면 숨이 막히는 느낌? 가족상담에서 선생님이 중립적으로 이끌어주시니까 서로 입장을 편하게 얘기할 수 있었어요~ 😌 아버지가 처음으로 "미안했다"고 하셨을 때 눈물이 나더라고요ㅠㅠ 분위기가 확 달라졌습니다! 지금은 일주일에 한 번씩 가족 단톡방에서 안부도 묻고 가끔 같이 밥도 먹으러 가요. 1년 전만 해도 상상도 못 했던 일인데 😭💕',
    rating: 5,
    createdAt: '2025.06.18',
  },
  {
    id: '7',
    clientInitial: '윤○○',
    counselingType: '개인상담',
    content: '취준 스트레스 미쳤었는데 상담받으니까 마음 정리가 됐어요. 제가 충분히 잘하고 있다는 걸 깨달은 게 제일 커요~!',
    rating: 5,
    createdAt: '2025.05.01',
  },
  {
    id: '8',
    clientInitial: '조○○',
    counselingType: '성장 프로그램',
    content: '나를 알아가는 여행 프로그램 진짜 추천이요~ 😁 제 강점이랑 가치관을 정리할 수 있었고, 매주 과제가 실생활에 바로 적용되니까 실질적으로 도움이 많이 됐어요! 프로그램 끝나고도 계속 써먹고 있습니다. 특히 "나만의 가치 리스트" 만드는 시간이 인상 깊었어요. 결정을 내려야 할 때마다 그 리스트를 꺼내보면서 판단하니까 후회가 줄었달까? 8주가 이렇게 빨리 끝날 줄 몰랐어요ㅠ 더 하고 싶었습니다 ✨',
    rating: 4.5,
    createdAt: '2025.03.20',
  },
  {
    id: '9',
    clientInitial: '서○○',
    counselingType: '개인상담',
    content: '이제는 불안이 와도 흔들리지 않아요~!',
    rating: 5,
    createdAt: '2025.02.14',
  },
  {
    id: '10',
    clientInitial: '강○○',
    counselingType: '커플상담',
    content: '결혼 준비하면서 갈등이 엄청 잦았거든요ㅠ 예식장, 혼수, 신혼집... 하나하나가 다 싸움의 불씨였어요 🔥 상담받으면서 서로 기대하는 것도 다르고 가치관도 다르다는 걸 인정하게 됐어요. 근데 그게 오히려 좋았어요! 맞춰가는 과정 자체가 관계를 단단하게 만들어준 느낌~ 선생님이 "다름은 틀림이 아니다"라고 하신 말씀이 아직도 기억나요 😊 결혼 준비 기간에 상담 꼭 받아보세요!! 결혼 후에도 커플상담에서 배운 소통법이 진짜 큰 도움이 됩니다 💍',
    rating: 5,
    createdAt: '2025.01.08',
  },
  {
    id: '11',
    clientInitial: '임○○',
    counselingType: '그룹상담',
    content: '사람들 앞에서 말하는 게 너무 무서웠는데 그룹상담에서 조금씩 연습하면서 자신감이 생겼어요~ 지금은 회의에서도 의견 말할 수 있게 됐습니다!',
    rating: 5,
    createdAt: '2024.12.15',
  },
  {
    id: '12',
    clientInitial: '오○○',
    counselingType: '개인상담',
    content: '이직하고 적응이 안 돼서 매일 퇴사각이었는데ㅋㅋ 😂 선생님이랑 얘기하면서 제 감정을 객관적으로 보는 연습을 했어요. 덕분에 지금은 새 회사 잘 다니고 있습니다~ 진작 상담받을걸 그랬어요!',
    rating: 5,
    createdAt: '2024.11.22',
  },
  {
    id: '13',
    clientInitial: '신○○',
    counselingType: '성장 프로그램',
    content: '진로가 막막했는데 커리어 리디자인 프로그램 듣고 방향이 확 잡혔어요! 🧭 내가 진짜 뭘 원하는지 알게 되니까 매일이 활기차네요~ 프로그램 안에서 실제로 직무 분석도 해보고, 저의 강점이랑 관심사를 교차시켜서 가능한 커리어 경로를 3개나 뽑았거든요. 그중 하나를 실행에 옮겨서 지금 이직 준비 중이에요! 😁 막연하게 "뭐 해야 되지..." 하던 때가 엊그제 같은데 지금은 면접 준비하면서 설레는 마음이 더 커요. 이 프로그램 없었으면 아직도 고민만 하고 있었을 듯ㅋㅋ',
    rating: 5,
    createdAt: '2024.10.30',
  },
  {
    id: '14',
    clientInitial: '송○○',
    counselingType: '가족상담',
    content: '형이랑 사이가 완전 틀어졌었는데 가족상담 받으면서 서로 감정을 솔직하게 얘기할 수 있는 자리가 생겼어요ㅠ 아직 완전히 해결된 건 아니지만 대화의 물꼬를 틀 수 있었던 게 컸습니다. 선생님이 분위기를 잘 이끌어주셔서 편하게 말할 수 있었어요~',
    rating: 4.5,
    createdAt: '2024.09.12',
  },
  {
    id: '15',
    clientInitial: '양○○',
    counselingType: '개인상담',
    content: '번아웃 와서 아무것도 하기 싫었는데 상담에서 쉬어가도 괜찮다는 걸 배웠어요~ 나를 돌보는 법을 하나씩 실천하면서 에너지가 돌아왔습니다!',
    rating: 5,
    createdAt: '2024.08.05',
  },
  {
    id: '16',
    clientInitial: '홍○○',
    counselingType: '커플상담',
    content: '남편이랑 대화가 안 통해서 진짜 답답했거든요ㅠ 같은 말을 해도 서로 다르게 받아들이고, 나중엔 대화 자체를 피하게 됐었어요. 근데 커플상담 받아보니까 우리 둘의 소통 방식이 완전 다른 거였어요! 😲 그걸 알고 나니까 서로 맞춰가게 되고 집안 분위기가 확 바뀌었어요~ 솔직히 처음엔 남편이 상담 가자니까 귀찮아했는데 지금은 본인이 더 만족하고 있어요ㅋㅋ "왜 진작 안 갔지?" 라고 하더라고요 😂 아이들도 부모 사이가 좋아지니까 표정이 밝아졌어요 💕',
    rating: 5,
    createdAt: '2024.07.18',
  },
  {
    id: '17',
    clientInitial: '문○○',
    counselingType: '개인상담',
    content: '건강한 거절을 배웠더니 관계가 오히려 편해졌어요~! :)',
    rating: 5,
    createdAt: '2024.06.25',
  },
  {
    id: '18',
    clientInitial: '배○○',
    counselingType: '성장 프로그램',
    content: '화 조절이 안 돼서 참다가 폭발하는 게 패턴이었는데 감정 다루기 워크숍 듣고 표현하는 법을 배웠어요! 🔥➡️😊 주변 관계가 많이 좋아졌습니다~ 특히 직장에서 스트레스 받을 때 써먹으니까 효과가 바로 보이더라고요. 예전엔 회의 중에 버럭해서 분위기 싸해진 적도 있었는데ㅋㅋ 지금은 화가 올라와도 "잠깐, 내가 지금 왜 화가 나지?" 하고 한 템포 쉬어가는 습관이 생겼어요. 와이프가 제일 좋아합니다 😂',
    rating: 4.5,
    createdAt: '2024.05.10',
  },
  {
    id: '19',
    clientInitial: '노○○',
    counselingType: '개인상담',
    content: '원가족 문제로 오래 힘들었는데 상담하면서 과거 상처를 직면하게 됐어요. 시간은 좀 걸렸지만 지금은 훨씬 자유로워진 느낌이에요~ 무거운 짐을 내려놓은 것 같아요.',
    rating: 5,
    createdAt: '2024.04.02',
  },
  {
    id: '20',
    clientInitial: '권○○',
    counselingType: '그룹상담',
    content: '다들 비슷한 고민 하고 있더라고요~ 혼자 끙끙 앓던 거 나누니까 마음이 한결 가벼워졌어요! 🤗 처음 갔을 때는 "낯선 사람들한테 내 얘기를 한다고?" 싶어서 긴장했는데, 한 분이 먼저 솔직하게 이야기해주시니까 저도 자연스럽게 입이 열리더라고요. 끝나고 나서도 같은 조 분들이랑 연락하면서 서로 응원해주고 있어요 😊 비슷한 고민을 가진 사람들이 있다는 것만으로도 위로가 되는 경험이었습니다~',
    rating: 5,
    createdAt: '2024.03.14',
  },
  {
    id: '21',
    clientInitial: '장○○',
    counselingType: '개인상담',
    content: '공황장애 때문에 지하철도 못 탔었거든요ㅠㅠ 상담받으면서 조금씩 생활 범위를 넓혀갔는데 확실히 나아지고 있다는 게 느껴져요 🚇 완치까지는 시간이 걸리겠지만 선생님이랑 같이 하니까 든든합니다~ 혼자 끙끙거렸으면 못 버텼을 거예요!',
    rating: 5,
    createdAt: '2024.02.08',
  },
  {
    id: '22',
    clientInitial: '유○○',
    counselingType: '커플상담',
    content: '싸움이 확 줄었어요~ 같은 상황에서도 다르게 반응할 수 있게 됐습니다 :)',
    rating: 4.5,
    createdAt: '2024.01.20',
  },
  {
    id: '23',
    clientInitial: '전○○',
    counselingType: '성장 프로그램',
    content: '명상 프로그램 8주 했는데 매일 10분이 이렇게 큰 차이를 만들 줄 몰랐어요!! 🧘‍♀️ 잠도 잘 오고 불안감도 줄고~ 강추합니다. 솔직히 처음엔 "명상이 뭐 도움이 되겠어" 싶었거든요ㅋㅋ 근데 2주차부터 확실히 달라지는 게 느껴졌어요. 퇴근 후에 머릿속이 복잡할 때 10분만 앉아서 호흡하면 리셋되는 느낌? 😌 지금은 프로그램 끝났는데도 매일 아침 명상으로 하루를 시작하고 있어요. 습관이 된 게 제일 큰 성과인 것 같습니다 ✨',
    rating: 5,
    createdAt: '2023.12.05',
  },
  {
    id: '24',
    clientInitial: '안○○',
    counselingType: '개인상담',
    content: '완벽주의 때문에 저를 너무 몰아붙였어요ㅠ 상담에서 "이 정도면 충분해"라는 기준을 만들었더니 일할 때도 생활할 때도 훨씬 편안해졌어요~ 예전엔 작은 실수에도 하루 종일 자책했는데 지금은 "그럴 수도 있지~" 하고 넘길 수 있게 됐습니다 ^^',
    rating: 5,
    createdAt: '2023.11.18',
  },
  {
    id: '25',
    clientInitial: '황○○',
    counselingType: '가족상담',
    content: '시부모님 때문에 결혼생활이 너무 힘들었는데ㅠ 가족상담 받고 남편이 중재를 해주게 됐어요! 적당한 거리 유지하는 법도 알게 돼서 지금은 많이 편해졌습니다~ 😊 처음엔 남편이 "우리 엄마가 뭘 잘못했냐"면서 방어적이었거든요. 근데 상담실에서 선생님이 객관적으로 상황을 정리해주시니까 남편도 "아... 그랬구나" 하면서 인정하더라고요. 그때부터 확 달라졌어요! 지금은 시부모님과도 적당한 거리에서 편안한 관계를 유지하고 있어요 🏠',
    rating: 5,
    createdAt: '2023.10.22',
  },
  {
    id: '26',
    clientInitial: '추○○',
    counselingType: '개인상담',
    content: '대학원 압박감 + 교수님 스트레스 겹쳐서 진짜 힘들었는데 상담에서 멘탈 균형 잡는 법 배웠더니 논문도 무사히 끝냈습니다!!',
    rating: 5,
    createdAt: '2023.09.15',
  },
  {
    id: '27',
    clientInitial: '차○○',
    counselingType: '그룹상담',
    content: '직장인 그룹상담에서 다른 분들 경험 들으면서 제 상황을 객관적으로 볼 수 있었어요. 혼자였으면 절대 못 봤을 시야를 얻은 시간이었습니다~ 이런 자리가 있다는 것 자체가 감사해요!',
    rating: 4.5,
    createdAt: '2023.08.08',
  },
  {
    id: '28',
    clientInitial: '하○○',
    counselingType: '개인상담',
    content: '이별 후 3개월 동안 매일 울었어요. 밥도 못 먹고, 일도 손에 안 잡히고, 친구들 만나기도 싫었거든요 😢 "시간이 약이다" 라는 말이 너무 무책임하게 느껴졌는데, 상담에서는 슬픔을 억지로 없애려 하지 않고 건강하게 처리하는 법을 알려주셨어요. 울고 싶을 때 울어도 되고, 그리울 때 그리워해도 된다는 거요. 그렇게 감정을 있는 그대로 받아들이니까 오히려 정리가 되더라고요 🌱 지금은 새 출발 준비 중이에요! 다시 설렐 수 있을 거라곤 생각도 못 했는데 😊',
    rating: 5,
    createdAt: '2023.07.12',
  },
  {
    id: '29',
    clientInitial: '구○○',
    counselingType: '성장 프로그램',
    content: '관계의 기술 워크숍에서 경청이랑 공감을 실습으로 배웠는데 이론만 아는 거랑 직접 해보는 거랑 진짜 다르더라고요!! 실전에서 바로 써먹을 수 있는 스킬들이라 너무 좋았어요~ 주변 사람들이 제가 달라졌다고 해요 ^^',
    rating: 5,
    createdAt: '2023.06.25',
  },
  {
    id: '30',
    clientInitial: '민○○',
    counselingType: '커플상담',
    content: '동거 시작하고 생활습관 차이로 매일 싸웠는데ㅋㅋ 🥴 상담에서 서로 기준 맞추는 연습하니까 같이 사는 게 훨씬 편해졌어요! 설거지 전쟁, 화장실 사용 순서, TV 리모컨 싸움까지... 웃기지만 이런 사소한 것들이 쌓이니까 진짜 폭발하더라고요 💥 선생님이 "규칙을 정하세요, 근데 유연하게"라고 하셨는데 그 말이 핵심이었어요. 지금은 냉장고에 우리만의 규칙 적어놓고 지키고 있어요~ 가끔 어기면 벌칙도 있음ㅋㅋ 진작 받을걸 😂',
    rating: 5,
    createdAt: '2023.05.30',
  },
  {
    id: '31',
    clientInitial: '나○○',
    counselingType: '개인상담',
    content: '사회초년생이 되면서 정체성 혼란이 왔어요ㅠ 학생 때의 나와 직장인인 나 사이에서 방황했는데 상담받으면서 새로운 환경에서의 나를 찾아가는 과정이 진짜 도움 많이 됐어요~ 지금은 직장인 나도 꽤 괜찮다고 느끼고 있습니다 ^^',
    rating: 5,
    createdAt: '2023.04.18',
  },
  {
    id: '32',
    clientInitial: '도○○',
    counselingType: '개인상담',
    content: '주말마다 하루 종일 누워만 있었어요 😴 상담에서 작은 목표부터 세워보자고 하셔서 하나씩 해봤더니 어느새 활기를 되찾았어요~ 저도 제가 놀랐습니다! 처음 목표가 "토요일 오전에 산책 10분 하기"였거든요ㅋㅋ 그게 어느새 주말마다 러닝으로 바뀌었어요 🏃‍♂️',
    rating: 5,
    createdAt: '2023.03.05',
  },
];

export default function ReviewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-sage-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl">
              <span className="text-sm tracking-[0.2em] uppercase font-medium text-accent">Reviews</span>
              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                상담 후기
              </h1>
              <p className="mt-6 text-lg md:text-xl text-black-light leading-relaxed">
                다온상담센터와 함께 변화를 경험한 분들의 이야기입니다.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-sage-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">4.9</div>
              <p className="text-sm text-black-light mt-1">평균 만족도</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">98%</div>
              <p className="text-sm text-black-light mt-1">추천 의향</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">5,000+</div>
              <p className="text-sm text-black-light mt-1">누적 상담</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid with Pagination */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ReviewList reviews={sampleReviews} />
        </div>
      </section>
    </>
  );
}
