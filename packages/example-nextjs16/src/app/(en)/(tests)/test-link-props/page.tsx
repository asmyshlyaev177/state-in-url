'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Suspense } from 'react';
import { form } from 'shared/form';
import { useUrlState } from 'state-in-url/next';
import { useLinkProps } from 'state-in-url/useLinkProps';

import { Form } from '../../../Form-for-test';

const target = '/test-use-client';

export default function Page() {
  const linkProps = useLinkProps(form, useRouter().push);
  const { setState } = useUrlState(form);

  return (
    <div className="p-8">
      <Suspense fallback={null}>
        <Form />
      </Suspense>

      {/* Never calls setUrl, so state stays ahead of the URL for good. */}
      <input
        data-testid="state-only"
        onChange={(e) => setState({ name: e.target.value })}
      />

      <Link {...linkProps(target)} data-testid="plain">
        plain
      </Link>
      <Link {...linkProps(`${target}?page=2`)} data-testid="own-params">
        own params
      </Link>
      <Link {...linkProps(`${target}#bottom`)} data-testid="hash">
        hash
      </Link>
      <a {...linkProps(target)} target="_blank" data-testid="new-tab">
        new tab
      </a>
      <a {...linkProps('https://example.com/')} data-testid="external">
        external
      </a>
    </div>
  );
}
