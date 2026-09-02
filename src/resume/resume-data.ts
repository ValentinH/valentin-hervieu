import { z } from 'zod';

const requiredString = z.string().trim().min(1);
const optionalString = z.preprocess(
  (value) => (value === '' ? undefined : value),
  requiredString.optional(),
);
const stringOrArray = z.union([requiredString, z.array(requiredString)]);
const linkSchema = z.object({ url: requiredString, display: requiredString });

export const resumeDataSchema = z.object({
  lang: optionalString,
  candidate: z.object({
    name: requiredString,
    headline: optionalString,
    phone: optionalString,
    email: optionalString,
    location: optionalString,
    linkedin: linkSchema.optional(),
    github: linkSchema.optional(),
    portfolio: linkSchema.optional(),
  }),
  summary: requiredString,
  competencies: z.array(requiredString).optional(),
  experience: z
    .array(
      z.object({
        company: requiredString,
        role: requiredString,
        location: optionalString,
        dates: requiredString,
        bullets: z.array(requiredString),
        tech: stringOrArray.optional(),
      }),
    )
    .default([]),
  projects: z
    .array(
      z.object({
        name: requiredString,
        url: optionalString,
        badge: optionalString,
        tech: optionalString,
        description: requiredString,
      }),
    )
    .default([]),
  education: z
    .array(
      z.object({
        title: requiredString,
        org: optionalString,
        year: requiredString,
        description: optionalString,
      }),
    )
    .default([]),
  certifications: z
    .array(
      z.object({
        title: requiredString,
        org: optionalString,
        year: optionalString,
      }),
    )
    .optional(),
  skills: z
    .array(
      z.object({
        category: requiredString,
        items: stringOrArray,
      }),
    )
    .default([]),
  languages: z
    .array(
      z.object({
        name: requiredString,
        proficiency: requiredString,
        detail: optionalString,
      }),
    )
    .optional(),
  interests: z.array(requiredString).optional(),
});

export type ResumeData = z.infer<typeof resumeDataSchema>;

export const defaultResumeData: ResumeData = {
  lang: 'en',
  candidate: {
    name: 'Valentin Hervieu',
    headline: 'Product Engineer',
  },
  summary: [
    'Product Engineer with 12+ years building polished SaaS products, production systems, and open-source developer tools.',
    'Strong in TypeScript, React, Next.js, GraphQL, product architecture, production AI systems, observability, and close product/design collaboration.',
  ].join(' '),
  experience: [
    {
      dates: '2022 - 2026',
      company: 'elba.security',
      role: 'Founding Engineer',
      location: 'Remote, France',
      bullets: [
        "Founding engineer in a small product team that built Elba's B2B security SaaS from the first MVP to a production platform.",
        'Most active contributor to the codebase, with 2,500+ commits and 3,600+ PR reviews across product, architecture, reliability, observability, and developer experience.',
        'Owned complex product areas end-to-end across TypeScript, React, Next.js, GraphQL, PostgreSQL, Inngest, analytics, observability, and production AI features.',
        'Built AI-assisted editors, visual automation workflows, analytics infrastructure, communication flows, and production reliability systems.',
        'Applied AI agents and automation tools, including OpenClaw, to improve error triage, workflow monitoring, and production issue investigation.',
        'Shipped reliable async workflows and safe rollouts with durable jobs, retries, rate limits, idempotency, feature flags, staged migrations, and backfills.',
      ],
      tech: 'TypeScript, React, Next.js, GraphQL, Apollo, Hasura, PostgreSQL, Inngest, PostHog, Sentry, Vercel, Render, AI SDK, OpenClaw',
    },
    {
      dates: '2017 - 2021',
      company: 'Ricardo',
      role: 'Principal Frontend Engineer',
      location: 'Sophia-Antipolis, France',
      bullets: [
        "Core contributor to one of Switzerland's largest second-hand e-commerce platforms.",
        'Led migration of core pages to React and prepared the introduction of Next.js.',
        'Drove Flow to TypeScript migration and built BFF APIs using Node.js and Express.',
        'Introduced testing with React Testing Library and Cypress; contributed to admin tools and a Material UI / Storybook design system.',
        'Built observability with Prometheus, Grafana, and Sentry; improved CI/CD, monitoring, and hiring.',
      ],
      tech: 'TypeScript, React, Material UI, Node.js, Express, React Testing Library, Cypress, GitHub, CircleCI, Kubernetes',
    },
    {
      dates: '2016 - 2021',
      company: 'Freelance',
      role: 'Frontend Engineer',
      bullets: [
        'Delivered web applications and dashboards for multiple clients using React, Next.js, TypeScript, React Query, and NATS.',
        'Set up and optimized CI/CD with GitHub Actions and Vercel.',
      ],
      tech: 'React, TypeScript, Next.js, Material UI, React Testing Library, Cypress, GitHub Actions, Vercel',
    },
    {
      dates: '2014 - 2017',
      company: 'Milanamos',
      role: 'Full Stack Web Developer',
      location: 'Sophia-Antipolis, France',
      bullets: [
        'Built data-oriented SaaS dashboards for the air transport industry using AngularJS, Python, MongoDB, maps, and data visualization.',
      ],
      tech: 'AngularJS, D3.js, Leaflet, Python, Scikit-learn, MongoDB, GitLab',
    },
  ],
  projects: [
    {
      name: 'react-easy-crop',
      description:
        'Open-source React image/video cropping library with nearly 100 million downloads.',
    },
    {
      name: 'ConcoursAdmis',
      description:
        'AI-powered oral exam simulator with real-time voice chat, dynamic turn detection, transcripts, playback, and feedback reports.',
    },
    {
      name: 'Medicalist',
      description: 'Expo React Native app to manage and learn about medicines.',
    },
  ],
  education: [
    {
      year: '2011 - 2014',
      title: "Master's Degree in Computer Engineering",
      org: 'Université de Technologie de Compiègne',
    },
    {
      year: '2009 - 2011',
      title: 'Two-year technical degree in Computer Science',
      org: 'IUT Caen Basse-Normandie',
    },
  ],
  skills: [
    { category: 'Core', items: 'TypeScript, React, Next.js, GraphQL, Hasura' },
    {
      category: 'Frontend',
      items: 'Apollo Client, Zustand, Shadcn UI, Tailwind CSS, Framer Motion',
    },
    { category: 'Backend', items: 'Node.js, Bun, PostgreSQL, Inngest, React Email' },
    { category: 'AI', items: 'AI SDK, OpenAI Realtime API, OpenClaw' },
    {
      category: 'Quality',
      items: 'Vitest, React Testing Library, Playwright, Oxlint, Oxfmt',
    },
    {
      category: 'Observability',
      items: 'PostHog, Axiom, Sentry, Prometheus, Grafana',
    },
    {
      category: 'Delivery',
      items: 'Linear, GitHub, GitHub Actions, Graphite, Vercel, Render, feature flags',
    },
    { category: 'Mobile', items: 'React Native, Expo' },
  ],
  languages: [
    { name: 'English', proficiency: 'Fluent', detail: 'TOEIC 985/990' },
    { name: 'French', proficiency: 'Native' },
  ],
  interests: ['Badminton', 'Piano', 'Lego', 'Raycast'],
};

export function parseResumeData(value: unknown): ResumeData {
  return resumeDataSchema.parse(value);
}
