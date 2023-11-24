'use client';

export default function Img(props) {
  const { src, alt, ...rest } = props;
  const noimg = '/bootcamp/images/no-img.png';

  return <img src={src ? src : noimg} alt={alt ? alt : ''} {...rest} />;
}
