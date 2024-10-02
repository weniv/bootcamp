import SVGPencil from "@/svg/SVGPencil";
import styles from "./Need.module.scss";
import SVGCheck from "@/svg/SVGCheck";
import SVGCode from "@/svg/SVGCode";
import SVGCodeBox from "@/svg/SVGCodeBox";
import SVGTobe from "@/svg/SVGTobe";
import SVGPeoples from "@/svg/SVGPeoples";
import SVGArrow from "@/svg/SVGArrow";
import SVGReset from "@/svg/SVGReset";

export default function NeedFrontEst() {
  return (
    <section>
      <div className="header">
        <p className="fc-text">교육 과정 추천</p>
        <h4>이런분들에게 추천합니다.</h4>
      </div>
      <ul className="bg-ul">
        <li>
          <SVGCodeBox color="primary" width="24" />
          <p>
            개발의 기초부터 차근차근 학습하고 싶은
            <span className="fc-blue"> 비전공자</span>
          </p>
        </li>
        <li>
          <SVGReset />
          <p>
            <span className="fc-blue">직무 전환</span>&nbsp;을 계획 중이지만
            시작이 막연한 분{" "}
          </p>
        </li>
        <li>
          <SVGPeoples />
          <p>
            IT 분야
            <span className="fc-blue"> 취업 정보와 커뮤니티</span>&nbsp;가
            필요한 전공자
          </p>
        </li>{" "}
        <li>
          <SVGPencil />
          <p>
            프론트엔드
            <span className="fc-blue">&nbsp;개발 독학에 어려움</span>을 느끼는
            분
          </p>
        </li>
      </ul>
    </section>
  );
}
