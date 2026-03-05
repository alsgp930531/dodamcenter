import { Metadata } from 'next';
import AnimatedSection from '@/components/shared/AnimatedSection';
import ReviewList from '@/components/reviews/ReviewList';

export const metadata: Metadata = {
  title: '상담 후기',
  description: '도담상담센터 상담을 경험한 내담자분들의 솔직한 후기입니다.',
};

const sampleReviews = [
  {
    id: '1',
    clientInitial: '김○○',
    counselingType: '개인상담',
    content: '6개월간 직장 스트레스로 힘들었는데, 상담을 통해 제 감정을 올바르게 인식하고 대처하는 방법을 배웠습니다. 상담사 선생님의 따뜻한 공감이 큰 힘이 되었어요. 이제는 스트레스 상황에서도 차분하게 대응할 수 있게 되었습니다.',
    rating: 5,
    createdAt: '2025.11.15',
  },
  {
    id: '2',
    clientInitial: '이○○',
    counselingType: '커플상담',
    content: '연인과의 소통 문제로 이별 직전까지 갔었는데, 커플 상담을 통해 서로를 이해하는 방법을 배웠습니다. 지금은 더 깊은 대화를 나눌 수 있게 되었고, 관계가 훨씬 좋아졌어요.',
    rating: 5,
    createdAt: '2025.10.28',
  },
  {
    id: '3',
    clientInitial: '박○○',
    counselingType: '성장 프로그램',
    content: '퍼스널 브랜딩 프로그램을 수강했는데, 단순히 외적인 브랜딩이 아니라 내면의 가치부터 정립하는 과정이 정말 좋았습니다. 진로에 대한 확신이 생겼고, 이직에도 성공했습니다!',
    rating: 5,
    createdAt: '2025.09.10',
  },
  {
    id: '4',
    clientInitial: '정○○',
    counselingType: '개인상담',
    content: '자존감이 낮아서 항상 남의 눈치를 보며 살았는데, 상담을 통해 제 가치를 인정하는 법을 배웠습니다. 8회 상담 후 확실히 제 삶의 주인이 된 느낌이에요. 도담상담센터에 정말 감사합니다.',
    rating: 5,
    createdAt: '2025.08.22',
  },
  {
    id: '5',
    clientInitial: '최○○',
    counselingType: '그룹상담',
    content: '처음에는 그룹 상담이 어색했는데, 비슷한 고민을 가진 또래들과 이야기하면서 "나만 이런 게 아니구나" 하는 안도감을 느꼈어요. 서로 응원하며 성장하는 경험이 귀중했습니다.',
    rating: 4.5,
    createdAt: '2025.07.05',
  },
  {
    id: '6',
    clientInitial: '한○○',
    counselingType: '가족상담',
    content: '부모님과의 관계가 항상 불편했는데, 가족상담을 통해 서로의 입장을 이해하게 되었습니다. 상담사 선생님이 중립적이면서도 따뜻하게 이끌어주셔서 편안하게 이야기할 수 있었어요.',
    rating: 5,
    createdAt: '2025.06.18',
  },
  {
    id: '7',
    clientInitial: '윤○○',
    counselingType: '개인상담',
    content: '취업 스트레스로 우울감이 심했는데, 상담을 통해 제 감정을 정리하고 현실적인 계획을 세울 수 있었습니다. 무엇보다 제가 충분히 잘하고 있다는 걸 깨달았어요.',
    rating: 5,
    createdAt: '2025.05.01',
  },
  {
    id: '8',
    clientInitial: '조○○',
    counselingType: '성장 프로그램',
    content: '나를 알아가는 여행 프로그램을 듣고 나서 제 강점과 가치관을 명확히 정리할 수 있었습니다. 매주 과제도 실생활에 바로 적용할 수 있어서 실질적인 도움이 됐어요.',
    rating: 4.5,
    createdAt: '2025.03.20',
  },
  {
    id: '9',
    clientInitial: '서○○',
    counselingType: '개인상담',
    content: '반복되는 불안감 때문에 일상생활이 힘들었는데, 상담을 통해 불안의 원인을 이해하고 다루는 방법을 배웠습니다. 이제는 불안이 와도 흔들리지 않고 대처할 수 있어요.',
    rating: 5,
    createdAt: '2025.02.14',
  },
  {
    id: '10',
    clientInitial: '강○○',
    counselingType: '커플상담',
    content: '결혼 전 갈등이 잦아서 고민이 많았는데, 상담을 통해 서로의 기대와 가치관을 맞춰갈 수 있었어요. 결혼 준비 기간이 오히려 관계를 단단하게 만드는 시간이 되었습니다.',
    rating: 5,
    createdAt: '2025.01.08',
  },
  {
    id: '11',
    clientInitial: '임○○',
    counselingType: '그룹상담',
    content: '사회불안이 심해서 사람들 앞에서 말하는 게 너무 두려웠어요. 그룹 상담에서 조금씩 연습하면서 자신감이 생겼고, 지금은 회의에서도 의견을 말할 수 있게 되었습니다.',
    rating: 5,
    createdAt: '2024.12.15',
  },
  {
    id: '12',
    clientInitial: '오○○',
    counselingType: '개인상담',
    content: '이직 후 적응이 힘들어서 매일 퇴사 생각만 했는데, 상담사 선생님과 함께 제 감정과 상황을 객관적으로 바라보는 연습을 했어요. 덕분에 지금은 새 직장에 잘 적응하고 있습니다.',
    rating: 5,
    createdAt: '2024.11.22',
  },
  {
    id: '13',
    clientInitial: '신○○',
    counselingType: '성장 프로그램',
    content: '커리어 리디자인 프로그램을 통해 막연했던 진로 방향이 확실해졌어요. 내가 진짜 원하는 게 뭔지 알게 되니 매일이 훨씬 활기차게 느껴집니다.',
    rating: 5,
    createdAt: '2024.10.30',
  },
  {
    id: '14',
    clientInitial: '송○○',
    counselingType: '가족상담',
    content: '형제간 갈등으로 사이가 틀어졌었는데, 가족상담을 통해 서로 감정을 털어놓고 대화할 수 있는 자리가 만들어졌어요. 완전히 해결되진 않았지만 대화의 물꼬를 트는 계기가 됐습니다.',
    rating: 4.5,
    createdAt: '2024.09.12',
  },
  {
    id: '15',
    clientInitial: '양○○',
    counselingType: '개인상담',
    content: '번아웃이 와서 아무것도 하고 싶지 않았어요. 상담에서 쉬어가도 괜찮다는 걸 배웠고, 나를 돌보는 방법을 하나씩 실천하면서 에너지를 되찾았습니다.',
    rating: 5,
    createdAt: '2024.08.05',
  },
  {
    id: '16',
    clientInitial: '홍○○',
    counselingType: '커플상담',
    content: '남편과 대화가 안 통해서 답답했는데, 커플상담에서 각자의 소통 방식이 다르다는 걸 알게 됐어요. 서로 맞춰가는 법을 배우니 집안 분위기가 확 달라졌습니다.',
    rating: 5,
    createdAt: '2024.07.18',
  },
  {
    id: '17',
    clientInitial: '문○○',
    counselingType: '개인상담',
    content: '대인관계에서 항상 맞춰주기만 하다가 지쳐서 상담을 시작했어요. 건강한 경계를 세우는 법을 배운 후로 관계가 오히려 더 편안해졌습니다. 거절해도 괜찮다는 걸 알게 됐어요.',
    rating: 5,
    createdAt: '2024.06.25',
  },
  {
    id: '18',
    clientInitial: '배○○',
    counselingType: '성장 프로그램',
    content: '감정 다루기 워크숍에서 화가 날 때 어떻게 표현해야 하는지 배웠어요. 전에는 참다가 폭발했는데 이제는 적절하게 표현할 수 있게 되어서 주변 관계가 많이 좋아졌습니다.',
    rating: 4.5,
    createdAt: '2024.05.10',
  },
  {
    id: '19',
    clientInitial: '노○○',
    counselingType: '개인상담',
    content: '원가족 문제로 오랫동안 힘들었는데, 상담을 통해 과거의 상처를 직면하고 치유하는 과정을 경험했습니다. 시간이 걸렸지만 지금은 훨씬 자유로워진 느낌이에요.',
    rating: 5,
    createdAt: '2024.04.02',
  },
  {
    id: '20',
    clientInitial: '권○○',
    counselingType: '그룹상담',
    content: '20대 또래 그룹상담에 참여했는데, 다들 비슷한 고민을 하고 있다는 게 위안이 됐어요. 혼자 끙끙 앓던 것들을 나누니 마음이 한결 가벼워졌습니다.',
    rating: 5,
    createdAt: '2024.03.14',
  },
  {
    id: '21',
    clientInitial: '장○○',
    counselingType: '개인상담',
    content: '공황장애로 지하철도 못 탔었는데, 상담과 병행하면서 조금씩 생활 범위를 넓혀갔어요. 완치까지는 시간이 걸리겠지만 확실히 나아지고 있다는 걸 느낍니다.',
    rating: 5,
    createdAt: '2024.02.08',
  },
  {
    id: '22',
    clientInitial: '유○○',
    counselingType: '커플상담',
    content: '잦은 다툼으로 지쳐있었는데, 상담을 통해 갈등의 패턴을 이해하게 됐어요. 같은 상황에서도 다르게 반응할 수 있게 되니 싸움이 많이 줄었습니다.',
    rating: 4.5,
    createdAt: '2024.01.20',
  },
  {
    id: '23',
    clientInitial: '전○○',
    counselingType: '성장 프로그램',
    content: '마인드풀니스 명상 프로그램을 8주간 참여했어요. 매일 10분 명상이 이렇게 큰 변화를 줄 줄 몰랐습니다. 수면의 질이 좋아지고 불안감도 많이 줄었어요.',
    rating: 5,
    createdAt: '2023.12.05',
  },
  {
    id: '24',
    clientInitial: '안○○',
    counselingType: '개인상담',
    content: '완벽주의 성향 때문에 스스로를 너무 몰아붙였어요. 상담을 통해 "충분히 좋다"는 기준을 만들고 나니 일할 때도 생활할 때도 훨씬 편안해졌습니다.',
    rating: 5,
    createdAt: '2023.11.18',
  },
  {
    id: '25',
    clientInitial: '황○○',
    counselingType: '가족상담',
    content: '시부모님과의 갈등으로 결혼생활이 힘들었는데, 가족상담을 통해 남편이 중재 역할을 할 수 있게 되었고, 시부모님과도 적당한 거리를 유지하는 법을 알게 됐어요.',
    rating: 5,
    createdAt: '2023.10.22',
  },
  {
    id: '26',
    clientInitial: '추○○',
    counselingType: '개인상담',
    content: '대학원 생활의 압박감과 지도교수와의 관계 스트레스로 힘들었어요. 상담에서 학업과 정신건강의 균형을 잡는 방법을 배운 후 논문도 무사히 마칠 수 있었습니다.',
    rating: 5,
    createdAt: '2023.09.15',
  },
  {
    id: '27',
    clientInitial: '차○○',
    counselingType: '그룹상담',
    content: '직장인 그룹상담에서 다른 분들의 경험을 들으며 제 상황을 객관적으로 볼 수 있게 됐어요. 혼자였으면 절대 몰랐을 시야를 얻은 귀중한 시간이었습니다.',
    rating: 4.5,
    createdAt: '2023.08.08',
  },
  {
    id: '28',
    clientInitial: '하○○',
    counselingType: '개인상담',
    content: '이별 후 극심한 우울감에 시달렸는데, 상담을 통해 슬픔을 건강하게 처리하는 법을 배웠어요. 시간이 지나면서 자연스럽게 회복되는 걸 느꼈고, 지금은 새 출발을 준비하고 있습니다.',
    rating: 5,
    createdAt: '2023.07.12',
  },
  {
    id: '29',
    clientInitial: '구○○',
    counselingType: '성장 프로그램',
    content: '관계의 기술 워크숍에서 경청과 공감의 중요성을 실습으로 배웠어요. 이론만 아는 것과 직접 해보는 건 정말 다르더라고요. 실전에서 바로 써먹을 수 있는 스킬을 얻었습니다.',
    rating: 5,
    createdAt: '2023.06.25',
  },
  {
    id: '30',
    clientInitial: '민○○',
    counselingType: '커플상담',
    content: '동거를 시작하면서 사소한 생활습관 차이로 매일 다퉜는데, 상담에서 서로의 기준을 조율하는 과정을 거치니 함께 사는 게 훨씬 편해졌어요. 진작 받을걸 그랬습니다.',
    rating: 5,
    createdAt: '2023.05.30',
  },
  {
    id: '31',
    clientInitial: '나○○',
    counselingType: '개인상담',
    content: '사회생활을 시작하면서 정체성 혼란이 왔어요. 학생 때의 나와 직장인인 나 사이에서 방황했는데, 상담을 통해 새로운 환경에서의 나를 찾아가는 과정이 도움이 많이 됐습니다.',
    rating: 5,
    createdAt: '2023.04.18',
  },
  {
    id: '32',
    clientInitial: '도○○',
    counselingType: '개인상담',
    content: '만성적인 무기력감으로 주말이면 하루 종일 누워만 있었어요. 상담에서 작은 목표부터 하나씩 세우고 성취하는 연습을 했더니, 어느새 활기를 되찾은 제 모습에 놀랐습니다.',
    rating: 5,
    createdAt: '2023.03.05',
  },
];

export default function ReviewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-beige-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl">
              <span className="text-sm tracking-[0.2em] uppercase font-medium text-accent">Reviews</span>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                상담 후기
              </h1>
              <p className="mt-6 text-lg md:text-xl text-black-light leading-relaxed">
                도담상담센터와 함께 변화를 경험한 분들의 이야기입니다.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-beige-200">
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
