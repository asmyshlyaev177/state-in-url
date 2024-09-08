import Image from 'next/image';

export const Logo = (props: { className: string }) => (
  <Image
    src="/Logo_symbol.png"
    alt="Logo"
    width="150"
    height="150"
    className={props.className}
    quality={1}
    priority={true}
    sizes="150px"
  />
);
