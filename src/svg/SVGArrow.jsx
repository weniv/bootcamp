export default function SVGArrow(props) {
  const { color } = props;
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g style={{ fill: `${color ? `var(--${color})` : 'var(--grayLv3)'}` }}>
        <path d="M10.0158 2.22775C9.99401 2.17506 9.96177 2.12568 9.9191 2.08276C9.91847 2.08212 9.91783 2.08148 9.91719 2.08085C9.83584 1.99998 9.72373 1.95 9.59995 1.95H3.59995C3.35142 1.95 3.14995 2.15147 3.14995 2.4C3.14995 2.64853 3.35142 2.85 3.59995 2.85H8.51356L2.08175 9.2818C1.90602 9.45754 1.90602 9.74246 2.08175 9.9182C2.25749 10.0939 2.54241 10.0939 2.71815 9.9182L9.14995 3.4864V8.4C9.14995 8.64853 9.35142 8.85 9.59995 8.85C9.84848 8.85 10.05 8.64853 10.05 8.4V2.4C10.05 2.33899 10.0378 2.28081 10.0158 2.22775Z" />
      </g>
    </svg>
  );
}
