'use server'

import { highlight } from '../highlighter';
import { Langs } from '../types';

export const Code = async ({ content, lang, id, ...rest }: { content: string, lang?: Langs, id?: string } & React.ComponentPropsWithoutRef<'div'>) => {
  const text = await highlight(content, { lang })

  return <div id={id}>{text ?
    <div dangerouslySetInnerHTML={{ __html: text }} {...rest}></div>
    : <div {...rest}>{content.split('\n')
      .map((el, ind) => (<div key={ind}>{el || '_'}</div>))}
    </div>}
  </div>
}
