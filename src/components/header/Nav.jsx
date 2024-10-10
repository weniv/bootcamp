import handleAnalyticsClick from "@/utils/handleAnalyticsClick";
import SVGArrow from "@/svg/SVGArrow";

export default function Nav(props) {
    const { navRef } = props;
    return (
        <nav ref={navRef} {...props}>
            <ul>
                <li>
                    <a  href="/camp">
                        위니브 부트캠프 소개
                    </a>
                </li>
                <li>
                    <a href="/review">수강생 후기</a>
                </li>
                <li>
                    <a 
                      href="https://archive.weniv.co.kr/" target="_blank" 
                      title="새창"
                      onClick={(event) => handleAnalyticsClick(event, "콘텐츠 아카이브")}>
                        콘텐츠 아카이브
                        <SVGArrow />
                    </a>
                </li>
            </ul>
        </nav>
    );
}
