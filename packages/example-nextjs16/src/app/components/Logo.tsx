import Image from 'next/image';

import type { ChromeCopy } from '../i18n/copy/types';

export const Logo = ({
  className,
  copy,
}: {
  className: string;
  copy: ChromeCopy;
}) => (
  <Image
    src="/Logo_symbol.png"
    alt={copy.logoAlt}
    width="150"
    height="150"
    className={className}
    priority={true}
    sizes="150px"
  />
);
