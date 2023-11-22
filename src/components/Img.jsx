'use client';

export default function Img(props) {
  const { src, alt, ...rest } = props;
  const noimg = '/images/no-img.png';

  const onError = (e) => {
    e.target.src = noimg;
  };

  return (
    <img
      src={src ? src : noimg}
      alt={alt ? alt : ''}
      onError={onError}
      {...rest}
    />
  );
}
