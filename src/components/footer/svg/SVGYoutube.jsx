import SVGWrap from './SVGWrap';

export default function SVGYoutube({ color }) {
  return (
    <SVGWrap alt="유튜브" color={color}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.25 6C1.25 3.37665 3.37665 1.25 6 1.25H14C16.6234 1.25 18.75 3.37665 18.75 6V14C18.75 16.6234 16.6234 18.75 14 18.75H6C3.37665 18.75 1.25 16.6234 1.25 14V6ZM6 2.75C4.20507 2.75 2.75 4.20507 2.75 6V14C2.75 15.7949 4.20507 17.25 6 17.25H14C15.7949 17.25 17.25 15.7949 17.25 14V6C17.25 4.20507 15.7949 2.75 14 2.75H6ZM7.75 12.5C7.75 12.7726 7.89796 13.0238 8.13642 13.156C8.37489 13.2882 8.6663 13.2805 8.8975 13.136L12.8975 10.636C13.1168 10.4989 13.25 10.2586 13.25 10C13.25 9.74141 13.1168 9.50105 12.8975 9.364L8.8975 6.864C8.6663 6.7195 8.37489 6.71185 8.13642 6.84402C7.89796 6.97619 7.75 7.22736 7.75 7.5L7.75 12.5Z"
      />
    </SVGWrap>
  );
}