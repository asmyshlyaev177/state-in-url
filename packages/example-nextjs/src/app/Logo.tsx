import Image from 'next/image';

export const Logo = (props: { className: string }) => (
  <Image
    src="/Logo_symbol.png"
    alt="Logo"
    width="200"
    height="200"
    className={props.className}
    priority={true}
  />
);
