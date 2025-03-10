import SVGCodeBox from "@/svg/SVGCodeBox";
import SVGLocation from "@/svg/SVGLocation";
import SVGPeoples from "@/svg/SVGPeoples";
import SVGTalk from "@/svg/SVGTalk";

export default function LiveFrontEst() {
  return (
    <>
      <section>
        <div className="header">
          <h4>100% 라이브로 함께해요!</h4>
        </div>
        <p>
          <strong>
            ‘프론트엔드 개발자 양성 과정 오르미’는{" "}
            <span className="fc-primary">
              ZOOM에서 100% 라이브로 진행됩니다.{" "}
            </span>
          </strong>
          또한 강사와 수강생이 모두 모여있는 디스코드 커뮤니티에서 동기부여를
          받으며 함께 학습할 수 있습니다.
        </p>

        <figure className="figure">
          <img
            src="/images/camps/zoom.webp"
            alt=""
            loading="lazy"
            width="790px"
            height="402px"
          />
          <figcaption>100% 라이브로 진행되는 강의</figcaption>
        </figure>

        <figure className="figure">
          <img
            src="/images/camps/discord.webp"
            alt=""
            loading="lazy"
            width="790px"
            height="402px"
          />
          <figcaption>
            디스코드 커뮤니티에서 소통하는 수강생과 강사, 멘토진
          </figcaption>
        </figure>
        <h5 className="title">“온라인 라이브 강의의 장점은요?”</h5>
        <ul className="bg-ul columns">
          <li>
            <SVGPeoples color="surface" />
            <p>
              실시간으로 강사와 <strong className="fc-blue">질의응답</strong>이
              가능합니다.
            </p>
          </li>
          <li>
            <SVGCodeBox />
            <p>
              <strong className="fc-blue">작성한 코드에 대한 피드백</strong>을
              바로바로 받을 수 있습니다.
            </p>
          </li>
          <li>
            <SVGLocation />
            <p>
              장소에 제약 없이{" "}
              <strong className="fc-blue">자신의 환경에서 편안하게 학습</strong>
              할 수 있습니다.
            </p>
          </li>
          <li>
            <SVGTalk />
            <p>
              온라인 커뮤니티(디스코드)에서 강사, 수강생이 모두 모여{" "}
              <strong className="fc-blue">자유롭게 네트워킹</strong>할 수
              있습니다.
            </p>
          </li>
        </ul>
      </section>
    </>
  );
}
