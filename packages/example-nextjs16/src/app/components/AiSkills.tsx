import { InstallCmd } from './InstallCmd';
import { siteUrl } from '../domain';
import type { AiSkillsTableCopy, SiteCopy } from '../i18n/copy/types';

const INTENT_CMD = 'npx @tanstack/intent@latest install';
const INTENT_DOCS = 'https://tanstack.com/intent/latest/docs/overview';
const SKILLS_SRC =
  'https://github.com/asmyshlyaev177/state-in-url/tree/master/skills';

// The SKILL.md files published inside the package, paired with the copy key
// holding the one line that says when it is the one to load. The names are
// identifiers and stay here; only the descriptions are translated. Same set
// and order as the table in public/llms.txt — that file is this section's
// machine-readable twin, and the two drifting apart is the failure mode worth
// watching for.
const SKILLS: ReadonlyArray<readonly [string, keyof AiSkillsTableCopy]> = [
  ['feature-state-hook', 'featureStateHook'],
  ['input-handling', 'inputHandling'],
  ['nextjs-ssr', 'nextjsSsr'],
  ['react-router-remix-setup', 'reactRouterRemixSetup'],
  ['form-library-integration', 'formLibraryIntegration'],
  ['shared-state-no-url', 'sharedStateNoUrl'],
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

export const AiSkills = ({ copy }: { copy: SiteCopy }) => (
  <section
    className="flex w-full max-w-[640px] flex-col items-start"
    aria-labelledby="ai-skills-title"
  >
    <h2 id="ai-skills-title" className="mb-4 mt-12 text-3xl font-bold">
      {copy.aiSkills.title}
    </h2>

    <div className="space-y-3 text-base leading-relaxed">
      <p>
        {copy.aiSkills.pitfallsLead} <Mono>interface</Mono>
        {copy.aiSkills.pitfallsMid} <Mono>JSONCompatible</Mono>{' '}
        {copy.aiSkills.pitfallsTail}
      </p>
      <p>
        {copy.aiSkills.shipsLead} <Mono>SKILL.md</Mono>{' '}
        {copy.aiSkills.shipsMid}{' '}
        <Link href={INTENT_DOCS}>{copy.aiSkills.intentLinkText}</Link>
        {copy.aiSkills.shipsTail}
      </p>
    </div>

    <div className="mt-6">
      <InstallCmd
        cmd={INTENT_CMD}
        label={copy.aiSkills.installLabel}
        copy={copy.chrome}
      />
    </div>

    <p className="mt-3 text-sm leading-relaxed">
      {copy.aiSkills.runLead} <Mono>state-in-url</Mono>{' '}
      {copy.aiSkills.runMid}{' '}
      <Mono>node_modules/state-in-url/skills/</Mono>
      {copy.aiSkills.runTail}
    </p>

    <ul className="mt-6 w-full text-sm">
      {SKILLS.map(([skill, key]) => (
        <li
          key={skill}
          className="flex flex-col gap-x-4 gap-y-1 border-b border-[var(--line)] py-2.5 last:border-b-0 sm:flex-row"
        >
          <code className="shrink-0 font-mono text-[var(--brand)] sm:w-56">
            {skill}
          </code>
          <span>{copy.aiSkills.skills[key]}</span>
        </li>
      ))}
    </ul>

    <p className="mt-6 text-base leading-relaxed">
      {copy.aiSkills.sourcesLead}{' '}
      <Link href={SKILLS_SRC}>{copy.aiSkills.sourcesLinkText}</Link>.{' '}
      {copy.aiSkills.sourcesMid}{' '}
      <Link href={`${siteUrl}/llms.txt`}>llms.txt</Link>{' '}
      {copy.aiSkills.sourcesTail}
    </p>
  </section>
);
