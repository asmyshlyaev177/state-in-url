import Image from 'next/image';

export const Logo = ({ className }: { className: string }) => (
  <Image
    src="/Logo_symbol.png"
    alt="Logo"
    width="150"
    height="150"
    className={className}
    quality={1}
    priority={true}
    sizes="150px"
  />
);
