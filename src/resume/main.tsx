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

const summary = `Product-minded engineer with 12+ years building polished SaaS products. Strong in
TypeScript, React, Next.js, GraphQL and product architecture. Experienced in turning
ambiguous problems into high-quality UI, reliable systems, AI-assisted workflows, and
strong collaboration with product and design.`

const experiences: Experience[] = [
  {
    period: '2022 - Present',
    company: 'elba.security',
    title: 'Founding Product Engineer',
    location: 'Remote, France',
    bullets: [
      "Founding engineer in a small product team building Elba's B2B security SaaS from early foundations to a production-grade platform.",
      'Owned complex product areas end-to-end across TypeScript, React, Next.js, GraphQL, PostgreSQL, Inngest, analytics, observability and AI-assisted workflows.',
      'Built an AI-assisted training editor with generation, translation, quizzes, localized previews, and multi-channel rendering across web, Slack, Teams and Google Chat.',
      'Built AI-assisted phishing scenario and visual automation editors for trigger / condition / action workflows.',
      'Designed analytics and observability for activation tracking, journey analysis, logs, metrics, alerts and production health.',
      'Shipped reliable async workflows and safe rollouts with retries, rate limits, idempotency, feature flags, staged migrations and backfills.',
    ],
    coreTools:
      'TypeScript, React, Next.js, GraphQL, PostgreSQL, Inngest, PostHog, Axiom, Sentry, AI SDK',
  },
  {
    period: '2017 - 2022',
    company: 'Ricardo',
    title: 'Principal Frontend Engineer',
    location: 'Sophia-Antipolis, France',
    bullets: [
      "Core contributor to one of Switzerland's largest second-hand e-commerce platforms.",
      'Led migration of core pages to React and prepared the introduction of Next.js.',
      'Drove Flow to TypeScript migration and built BFF APIs using Node.js / Express.',
      'Introduced testing with React Testing Library and Cypress; contributed to admin tools and a Material-UI / Storybook design system.',
      'Built observability with Prometheus, Grafana and Sentry; improved CI/CD, monitoring and hiring.',
    ],
    coreTools:
      'React, Typescript, Material-UI, Node.js, RTL, Cypress, Github, CircleCI',
  },
  {
    period: '2016 - 2022',
    company: 'Freelance',
    title: 'Frontend Engineer',
    location: '',
    bullets: [
      'Delivered web applications and dashboards for multiple clients using React, Next.js, TypeScript, react-query and NATS.',
      'Set up and optimized CI/CD with GitHub Actions and Vercel.',
    ],
    coreTools: 'React, Typescript, Material-UI, Next.js, RTL, Cypress, Github, Vercel',
  },
  {
    period: '2014 - 2017',
    company: 'Milanamos',
    title: 'Full Stack Web Developer',
    location: 'Sophia-Antipolis, France',
    bullets: [
      'Built data-oriented SaaS dashboards for the air transport industry using AngularJS, Python and MongoDB.',
    ],
    coreTools: 'AngularJS, D3.js, Leaflet, Python, Scikit-learn, MongoDB, Gitlab',
  },
];

const skillGroups: SkillGroup[] = [
  {
    title: 'Core',
    items: 'TypeScript, React, Next.js, GraphQL',
  },
  {
    title: 'Backend',
    items: 'Node.js, Bun, PostgreSQL, Inngest',
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
    items: 'Git, GitHub, GitHub Actions, Graphite, Vercel, Render, feature flags',
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
      'Open-source image cropping library with near 100 million downloads.',
  },
  {
    title: 'ConcoursAdmis',
    description: 'AI-powered oral exam simulations with realtime voice chat and feedback reports.',
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
    description: 'Two-year technical degree in Computer Sciences',
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
                    <p className="m-[1mm_0_0] pl-[4mm] text-[9.4px] leading-[1.25] font-semibold text-[#656577] italic">
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
                Badminton, Piano, Lego
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
