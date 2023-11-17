'use client';
import Image from 'next/image';

export default function Img(props) {
  const { src } = props;

  const onError = (e) => {
    e.target.src = 'http://placehold.it/500x500';
  };

  return <Image src={src} alt="" onError={onError} {...props} />;
}
