import Img from '@/components/Img';
import CampInfo from '@/components/detail/CampInfo';
import InfoSection from '@/components/InfoSection';
import MessageSection from '@/components/MessageSection';
import PageNav from '@/components/detail/PageNav';
import TeacherInfo from '@/components/detail/TeacherInfo';
import TeacherDetail from '@/components/detail/TeacherDetail';
import FAQSection from '@/components/detail/FAQSection';
import CurriculumSection from '@/components/detail/CurriculumSection';
import ToggleList from '@/components/detail/ToggleList';

export default function SubPage({ params }) {
  const { slug } = params;
  const campData = require('/public/data/camp.json').find(
    (camp) => camp.url === `/${slug}`,
  );

  return (
    <div className="sub-max-width">
      <Img src={campData?.image} alt="" />
      <h2>{campData?.title}</h2>
      <p>{campData?.description}</p>

      <TeacherInfo name={campData?.teacher} />
      <CampInfo data={campData} />

      <PageNav />

      {/* 이런 걸 배울 수 있어요. */}
      <h3>이런 걸 배울 수 있어요.</h3>

      {/* 이런 분들께 추천해요. */}
      <h3>이런 분들께 추천해요.</h3>

      {/* 후기 */}
      <MessageSection
        messages={campData?.messages}
        title="수강생분들의 생생한 후기"
      />
      <hr />

      {/* 수강생 혜택 */}
      <h3>수강생 혜택</h3>

      <hr />

      {/* 커리큘럼 */}
      <section>
        <h3 className="title2 tac">커리큘럼</h3>
        <p className="p-des">{campData?.totalCurriculum} </p>
        <ToggleList data={campData?.curriculum} />
      </section>

      <hr />

      {/* 강사소개 */}
      <section>
        <h3 className="title2 tac">강사소개</h3>
        <p className="p-des">
          "부트캠프 수료율 100%의 비결은 수강생을 향한 ‘진심’입니다."
        </p>

        <TeacherDetail name={campData?.teacher} />
      </section>

      <hr />
      {/* FAQ */}
      <section>
        <h3 className="title2 tac">FAQ</h3>
        <ToggleList data={campData?.faq} />
      </section>
    </div>
  );
}
