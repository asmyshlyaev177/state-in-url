'use client'
import React from 'react';

import { highlight } from '../highlighter';
import { Langs } from '../types';

export const Code = ({ content, lang, ...rest }: { content: string, lang?: Langs } & React.ComponentPropsWithoutRef<'div'>) => {

  const [text, setText] = React.useState('');

  React.useEffect(() => {
    highlight(content, { lang }).then(setText)
  }, [content, lang])

  return text ?
  <div dangerouslySetInnerHTML={{ __html: text }} {...rest}></div>
  : <div {...rest}>{content.split('\n').map((el, ind) => (<div key={ind}>{el || '_'}</div>))}</div>
}
