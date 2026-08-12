import { InstallCmd } from './InstallCmd';
import { siteUrl } from '../domain';

const INTENT_CMD = 'npx @tanstack/intent@latest install';
const INTENT_DOCS = 'https://tanstack.com/intent/latest/docs/overview';
const SKILLS_SRC =
  'https://github.com/asmyshlyaev177/state-in-url/tree/master/skills';

// The SKILL.md files published inside the package, and the one line each
// that says when it is the one to load. Same set and order as the table in
// public/llms.txt — that file is this section's machine-readable twin, and
// the two drifting apart is the failure mode worth watching for.
const SKILLS: ReadonlyArray<readonly [string, string]> = [
  [
    'feature-state-hook',
    'Defining state, and wrapping useUrlState in a feature-scoped hook',
  ],
  ['input-handling', 'Text inputs, sliders, anything that changes fast'],
  ['nextjs-ssr', 'App Router: searchParams forwarding, Proxy for layouts'],
  ['react-router-remix-setup', 'React Router v6/v7 or Remix v2 setup'],
  ['form-library-integration', 'Pairing with react-hook-form (or formik)'],
  ['shared-state-no-url', 'useSharedState — sharing without touching the URL'],
];

// Inline code. Deliberately not the shared <Word>: this section is a wall of
// identifiers, and Word's chip treatment at that density reads as noise.
const Mono = ({ children }: { children: React.ReactNode }) => (
  <span className="font-mono text-[0.9em]">{children}</span>
);

const Link = ({ href, children }: { href: string; children: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener"
    className="font-semibold text-[var(--brand)] hover:underline"
  >
    {children}
  </a>
);

export const AiSkills = () => (
  <section
    className="flex w-full max-w-[640px] flex-col items-start"
    aria-labelledby="ai-skills-title"
  >
    <h2 id="ai-skills-title" className="mb-4 mt-12 text-3xl font-bold">
      Using an AI coding agent?
    </h2>

    <div className="space-y-3 text-base leading-relaxed">
      <p>
        Agents get the same two things wrong here, every time. They type the
        state shape with <Mono>interface</Mono>, which the{' '}
        <Mono>JSONCompatible</Mono> constraint rejects outright. And they build
        the default-state object inside the component, which breaks sharing
        silently — it is keyed by object identity, so nothing errors, the two
        components simply stop seeing each other.
      </p>
      <p>
        So the package ships six <Mono>SKILL.md</Mono> files. Your agent loads
        one on demand through <Link href={INTENT_DOCS}>TanStack Intent</Link>,
        and they are versioned with the library rather than with this page.
      </p>
    </div>

    <div className="mt-6">
      <InstallCmd cmd={INTENT_CMD} label="Copy Intent install command" />
    </div>

    <p className="mt-3 text-sm leading-relaxed">
      Run once in a project that already has <Mono>state-in-url</Mono>{' '}
      installed. Your agent then finds the skills in{' '}
      <Mono>node_modules/state-in-url/skills/</Mono>.
    </p>

    <ul className="mt-6 w-full text-sm">
      {SKILLS.map(([skill, when]) => (
        <li
          key={skill}
          className="flex flex-col gap-x-4 gap-y-1 border-b border-[var(--line)] py-2.5 last:border-b-0 sm:flex-row"
        >
          <code className="shrink-0 font-mono text-[var(--brand)] sm:w-56">
            {skill}
          </code>
          <span>{when}</span>
        </li>
      ))}
    </ul>

    <p className="mt-6 text-base leading-relaxed">
      The sources are <Link href={SKILLS_SRC}>on GitHub</Link>. An agent that
      can&apos;t load Intent skills should read{' '}
      <Link href={`${siteUrl}/llms.txt`}>llms.txt</Link> instead — the same
      rules, condensed into one file.
    </p>
  </section>
);
