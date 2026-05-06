import '@fontsource/roboto';
import '#src/global.css';

import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faBriefcase,
  faCode,
  faEnvelope,
  faGraduationCap,
  faHeart,
  faLanguage,
  faLink,
  faLocationDot,
  faPhone,
  faRocket,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment, type ReactNode } from 'react';
import { createRoot } from 'react-dom/client';

import profilePicture from '#src/components/Intro/profile-2026.jpg';
import { cn } from '#src/lib/utils';

type ContactItem = {
  icon: IconDefinition;
  label: string;
};

type Experience = {
  period: string;
  company: string;
  title: string;
  location: string;
  bullets: string[];
  coreTools: string;
};

type SkillGroup = {
  title: string;
  items: string;
};

const contactItems: ContactItem[] = [
  { icon: faLocationDot, label: import.meta.env.VITE_RESUME_LOCATION ?? '' },
  { icon: faPhone, label: import.meta.env.VITE_RESUME_PHONE ?? '' },
  { icon: faEnvelope, label: import.meta.env.VITE_RESUME_EMAIL ?? '' },
  { icon: faLink, label: import.meta.env.VITE_RESUME_WEBSITE ?? '' },
];

const summary =
`Staff-level Product Engineer with 12+ years building polished SaaS products and open-source developer tools.
Strong in TypeScript, React, Next.js, GraphQL, product architecture, AI-assisted workflows, observability,
 and close product/design collaboration.`;


const experiences: Experience[] = [
  {
    period: '2022 - 2026',
    company: 'elba.security',
    title: 'Founding Product Engineer',
    location: 'Remote, France',
    bullets: [
      "Founding engineer in a small product team building Elba's B2B security SaaS from early foundations to a production-grade platform.",
      'Most active contributor to the codebase, with 2 500+ commits and 3 600+ PR reviews across product, architecture, reliability, observability, and developer experience.',
      'Owned complex product areas end-to-end across TypeScript, React, Next.js, GraphQL, PostgreSQL, Inngest, analytics, observability, and AI-assisted workflows.',
      'Built AI-assisted editors, visual automation workflows, analytics infrastructure, multi-channel communication flows, and production reliability systems.',
      'Applied AI agents and automation tools, including OpenClaw, to improve error triage, workflow monitoring, and production issue investigation.',
      'Shipped reliable async workflows and safe rollouts with durable jobs, retries, rate limits, idempotency, feature flags, staged migrations, and backfills.',
      'Worked daily in Linear to shape feature ideas, technical refinements, bug reports, and async product/engineering collaboration.',
    ],
    coreTools:
      'TypeScript, React, Next.js, GraphQL, Apollo, Hasura, PostgreSQL, Inngest, PostHog, Sentry, Vercel, Render, AI-SDK, OpenClaw',
  },
  {
    period: '2017 - 2021',
    company: 'Ricardo',
    title: 'Principal Frontend Engineer',
    location: 'Sophia-Antipolis, France',
    bullets: [
      "Core contributor to one of Switzerland's largest second-hand e-commerce platforms.",
      'Led migration of core pages to React and prepared the introduction of Next.js.',
      'Drove Flow to TypeScript migration and built BFF APIs using Node.js and Express.',
      'Introduced testing with React Testing Library and Cypress; contributed to admin tools and a Material UI / Storybook design system.',
      'Built observability with Prometheus, Grafana, and Sentry; improved CI/CD, monitoring, and hiring.',
    ],
    coreTools:
      'TypeScript, React, Material UI, Node.js, Express, React Testing Library, Cypress, GitHub, CircleCI',
  },
  {
    period: '2016 - 2021',
    company: 'Freelance',
    title: 'Frontend Engineer',
    location: '',
    bullets: [
      'Delivered web applications and dashboards for multiple clients using React, Next.js, TypeScript, React Query, and NATS.',
      'Set up and optimized CI/CD with GitHub Actions and Vercel.',
    ],
    coreTools:
      'React, TypeScript, Next.js, Material UI, React Testing Library, Cypress, GitHub Actions, Vercel',
  },
  {
    period: '2014 - 2017',
    company: 'Milanamos',
    title: 'Full Stack Web Developer',
    location: 'Sophia-Antipolis, France',
    bullets: [
      'Built data-oriented SaaS dashboards for the air transport industry using AngularJS, Python, MongoDB, maps, and data visualization.',
    ],
    coreTools: 'AngularJS, D3.js, Leaflet, Python, Scikit-learn, MongoDB, GitLab',
  },
];

const skillGroups: SkillGroup[] = [
  {
    title: 'Core',
    items: 'TypeScript, React, Next.js, GraphQL, Hasura',
  },
  {
    title: 'Frontend',
    items: 'Tailwind CSS, Apollo Client, Shadcn UI, Zustand',
  },{
    title: 'Backend',
    items: 'Node.js, Bun, PostgreSQL, Inngest, React Email',
  },
  {
    title: 'AI',
    items: 'AI SDK, OpenAI Realtime API, OpenClaw',
  },
  {
    title: 'Quality',
    items: 'Vitest, React Testing Library, Playwright, Oxlint, Oxfmt',
  },
  {
    title: 'Observability',
    items: 'PostHog, Axiom, Sentry, Prometheus, Grafana',
  },
  {
    title: 'Delivery',
    items: 'Linear, GitHub, GitHub Actions, Graphite, Vercel, Render, feature flags',
  },
  {
    title: 'Mobile',
    items: 'React Native, Expo',
  },
];

const projects = [
  {
    title: 'react-easy-crop',
    description:
      'Open-source React image/video cropping library with nearly 100 million downloads.',
  },
  {
    title: 'ConcoursAdmis',
    description:
      'AI-powered oral exam simulator with real-time voice chat, dynamic turn detection, transcripts, playback, and feedback reports.',
  },
  {
    title: 'Medicalist',
    description: 'Expo React Native app to manage and learn about medicines.',
  },
];

const education = [
  {
    period: '2011 - 2014',
    title: 'Université de Technologie de Compiègne',
    description: "Master's Degree in Computer Engineering",
  },
  {
    period: '2009 - 2011',
    title: 'IUT Caen Basse-Normandie',
    description: 'Two-year technical degree in Computer Science',
  },
];

function Resume() {
  return (
    <main className="relative mx-auto min-h-[297mm] w-[210mm] bg-white p-[10mm_10mm_8mm] text-[10.2px] leading-[1.34] text-[#16172a] shadow-[0_0_0_1px_rgba(0,0,0,0.1)] print:m-0 print:shadow-none">
      <div className="absolute bottom-[8mm] left-[146mm] top-[10mm] w-px bg-[#d7d7de]" />

      <header className="grid grid-cols-[26mm_1fr_48mm] items-start gap-[6mm] pb-[10mm]">
        <img
          className="h-[32mm] w-[26mm] rounded-[2mm] object-cover"
          src={profilePicture}
          alt="Valentin Hervieu"
        />
        <div>
          <h1 className="m-0 text-[25px] font-extrabold leading-none tracking-normal text-[#0c1027] uppercase">
            Valentin Hervieu
          </h1>
          <p className="my-[4px] mb-[5px] text-[14px] leading-[1.2] text-primary">
            Staff Product Engineer
          </p>
          <p className="m-0 max-w-[112mm] text-[#25263a]">
            {summary}
          </p>
        </div>
        <ul className="m-0 flex min-h-[34mm] list-none flex-col gap-[4mm] p-0">
          {contactItems.map((item) => (
            <li
              className="grid grid-cols-[1.7mm_1fr] items-center gap-[3mm]"
              key={item.label || item.icon.iconName}
            >
              <FontAwesomeIcon className="justify-self-center text-primary" icon={item.icon} />
              <span>{item.label || 'Missing env value'}</span>
            </li>
          ))}
        </ul>
      </header>

      <div className="grid grid-cols-[1fr_48mm] gap-[6mm]">
        <div className="pr-[5mm]">
          <Section icon={faBriefcase} title="Experience" withHeadingRule>
            <div className="grid grid-cols-[max-content_4mm_1fr] gap-x-[4mm] gap-y-[3.2mm]">
              {experiences.map((experience) => (
                <Fragment key={`${experience.period}-${experience.company}`}>
                  <Period>{experience.period}</Period>
                  <TimelineLine />
                  <article>
                    <ItemTitle>
                      <strong>{experience.company}</strong>
                      <span> — {experience.title}</span>
                    </ItemTitle>
                    {experience.location && <Location>{experience.location}</Location>}
                    <ul className="m-0 list-disc pl-[4mm] marker:text-primary">
                      {experience.bullets.map((bullet) => (
                        <li className="pl-[1mm]" key={bullet}>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                    <p className="m-[1mm_0_0] text-[9.4px] leading-[1.25] font-semibold text-[#656577] italic">
                      {experience.coreTools}
                    </p>
                  </article>
                </Fragment>
              ))}
            </div>
          </Section>

          <Section icon={faRocket} title="Projects" withHeadingRule separated>
            <ul className="m-0 grid list-disc gap-[1.5mm] pl-[4mm] marker:text-primary">
              {projects.map((project) => (
                <li key={project.title}>
                  <strong className="text-primary">{project.title}</strong>
                  <span> — {project.description}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section icon={faGraduationCap} title="Education" withHeadingRule separated>
            <div className="grid grid-cols-[max-content_1fr] gap-x-[4mm] gap-y-[2mm]">
              {education.map((item) => (
                <Fragment key={item.period}>
                  <Period>{item.period}</Period>
                  <div>
                    <ItemTitle>{item.title}</ItemTitle>
                    <p className="m-0 text-gray-500">{item.description}</p>
                  </div>
                </Fragment>
              ))}
            </div>
          </Section>
        </div>

        <aside className="flex flex-col gap-[4mm]">
          <Section icon={faCode} title="Skills">
            <div className="grid gap-[4.8mm]">
              {skillGroups.map((group) => (
                <article
                  className="border-b border-[#d7d7de] pb-[4.8mm] last:border-b-0"
                  key={group.title}
                >
                  <DotHeading>{group.title}</DotHeading>
                  <p className="m-0 pl-[4.8mm]">{group.items}</p>
                </article>
              ))}
            </div>
          </Section>

          <Section icon={faLanguage} title="Languages" separated>
            <ul className="m-0 grid list-none gap-[4mm] p-0">
              <li className="before:mr-[3mm] before:inline-block before:size-[1.7mm] before:rounded-full before:bg-primary before:align-middle before:content-['']">
                <strong>English</strong> — Fluent <span>(TOEIC 985/990)</span>
              </li>
              <li className="before:mr-[3mm] before:inline-block before:size-[1.7mm] before:rounded-full before:bg-primary before:align-middle before:content-['']">
                <strong>French</strong> — Native
              </li>
            </ul>
          </Section>

          <Section icon={faHeart} title="Hobbies" separated>
            <ul className="m-0 grid list-none gap-[4mm] p-0">
              <li className="before:mr-[3mm] before:inline-block before:size-[1.7mm] before:rounded-full before:bg-primary before:align-middle before:content-['']">
                Badminton, Piano, Lego, Raycast
              </li>
            </ul>
          </Section>
        </aside>
      </div>
    </main>
  );
}

function Section({
  icon,
  title,
  children,
  withHeadingRule = false,
  separated = false,
}: {
  icon: IconDefinition;
  title: string;
  children: ReactNode;
  withHeadingRule?: boolean;
  separated?: boolean;
}) {
  return (
    <section className={cn('break-inside-avoid', separated && 'mt-[5mm]')}>
      <h2 className="!m-[0_0_4mm] grid grid-cols-[6mm_max-content_1fr] items-center !text-[11px] !leading-none font-bold tracking-normal !text-[#101126] uppercase">
        <FontAwesomeIcon className="text-primary" icon={icon} />
        <span>{title}</span>
        {withHeadingRule && <span className="h-px bg-[#d7d7de] ml-[2mm]" />}
      </h2>
      {children}
    </section>
  );
}

function Period({ children }: { children: ReactNode }) {
  return <p className="m-0 text-[10.2px] text-primary">{children}</p>;
}

function TimelineLine() {
  return (
    <div className="relative flex justify-center">
      <span className="absolute top-[0.7mm] size-[2mm] rounded-full bg-primary" />
      <span className="mt-[5mm] mb-[1mm] w-px bg-[#d9d9e2]" />
    </div>
  );
}

function ItemTitle({ children }: { children: ReactNode }) {
  return <div className="m-0 text-[10.5px] leading-[1.22] text-[#14162b]">{children}</div>;
}

function Location({ children }: { children: ReactNode }) {
  return <p className="m-[1px_0_2px] text-[#656577] italic">{children}</p>;
}

function DotHeading({ children }: { children: ReactNode }) {
  return (
    <div className="mb-[2.2mm] text-[10.5px] leading-[1.22] text-[#14162b] before:mr-[3mm] before:inline-block before:size-[1.7mm] before:rounded-full before:bg-primary before:align-middle before:content-['']">
      {children}
    </div>
  );
}

createRoot(document.getElementById('root')!).render(<Resume />);
