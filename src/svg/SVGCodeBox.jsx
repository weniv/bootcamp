export default function SVGCodeBox({ color = 'surface' }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill={`var(--${color})`}
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.0607 13.9393C17.6464 14.5251 17.6464 15.4749 17.0607 16.0607L13.1213 20L17.0607 23.9393C17.6464 24.5251 17.6464 25.4749 17.0607 26.0607C16.4749 26.6464 15.5251 26.6464 14.9393 26.0607L9.93934 21.0607C9.35355 20.4749 9.35355 19.5251 9.93934 18.9393L14.9393 13.9393C15.5251 13.3536 16.4749 13.3536 17.0607 13.9393Z"
        fill="#121314"
      />
      <path
        d="M22.9393 23.9393C22.3536 24.5251 22.3536 25.4749 22.9393 26.0607C23.5251 26.6464 24.4749 26.6464 25.0607 26.0607L30.0607 21.0607C30.6464 20.4749 30.6464 19.5251 30.0607 18.9393L25.0607 13.9393C24.4749 13.3536 23.5251 13.3536 22.9393 13.9393C22.3536 14.5251 22.3536 15.4749 22.9393 16.0607L26.8787 20L22.9393 23.9393Z"
        fill="#121314"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.5 12C2.5 6.75329 6.75329 2.5 12 2.5H28C33.2467 2.5 37.5 6.75329 37.5 12V28C37.5 33.2467 33.2467 37.5 28 37.5H12C6.75329 37.5 2.5 33.2467 2.5 28V12ZM12 5.5C8.41015 5.5 5.5 8.41015 5.5 12V28C5.5 31.5899 8.41015 34.5 12 34.5H28C31.5899 34.5 34.5 31.5899 34.5 28V12C34.5 8.41015 31.5899 5.5 28 5.5H12Z"
        fill="#121314"
      />
    </svg>
  );
}