import React from 'react';

import { Typography } from '../Typography';

export type ExperienceData = {
  date: string;
  company: string;
  companyUrl?: string;
  place: string;
  title: string;
  content: React.JSX.Element;
  current?: boolean;
};

export type YearData = {
  year: number;
  current?: boolean;
  data: ExperienceData[];
};

export type Data = YearData[];

const WorkBullets = ({ items, className = 'mt-2' }: { items: string[]; className?: string }) => (
  <ul className={`${className} list-disc space-y-1 pl-5 marker:text-primary`}>
    {items.map((item) => (
      <Typography as="li" variant="caption" key={item}>
        {item}
      </Typography>
    ))}
  </ul>
);

const data: Data = [
  {
    year: 2011,
    data: [
      {
        date: 'March 2011 – June 2011',
        company: 'Frontware Co. Ltd.',
        companyUrl: 'https://www.frontware.com',
        place: 'Bangkok, Thailand',
        title: 'Student Intern, Software Development',
        content: (
          <Typography variant="caption">
            Built Android mobile applications with Java and CSS3/jQuery to compare both approaches.
            Also implemented new features and maintained existing websites with PHP and JavaScript.
          </Typography>
        ),
      },
    ],
  },
  {
    year: 2012,
    data: [
      {
        date: 'August 2012 – February 2013',
        company: 'Siemens Corporate Research',
        companyUrl: 'https://www.usa.siemens.com/en/about_us/research/about_us.htm',
        place: 'Princeton, NJ, USA',
        title: 'Software Engineer Intern',
        content: (
          <Typography variant="caption">
            Worked in the Automation Systems and HMI department. Built native and web mobile
            applications with Android and CSS3/jQuery, and implemented backend features with .NET
            and C++.
            <br />
            Technologies: HTML5, CSS3, JQuery, PhoneGap, Push messages, C++, .NET, Android
          </Typography>
        ),
      },
    ],
  },
  {
    year: 2013,
    data: [
      {
        date: 'July 2013 – December  2013',
        company: 'USEC',
        companyUrl: 'https://www.usec-utc.fr',
        place: 'Compiègne, France',
        title: 'Full-stack engineer',
        content: (
          <Typography variant="caption">
            Built an Android tablet app and web administration platform for an organization
            supporting workers with disabilities in sheltered workshops. Workers used the tablet app
            to assess their workday, while staff used the web app to configure questions for each
            worker and review the results.
            <br />
            Technologies: Android, Symfony2, Bootstrap3 & JQuery.
          </Typography>
        ),
      },
    ],
  },
  {
    year: 2014,
    data: [
      {
        date: 'February 2014 – July  2014',
        company: 'Amadeus',
        companyUrl: 'https://amadeus.com',
        place: 'Sophia-Antipolis, France',
        title: 'Software Engineering Intern - Amadeus',
        content: (
          <Typography variant="caption">
            Built Community Trip Organizer from scratch in the Amadeus Reservations team, turning
            product specs into a working prototype for groups planning trips together.
            <br />
            Technologies: AngularJS, Play! Framework, REST API, Bootstrap3.
          </Typography>
        ),
      },
      {
        date: 'August 2014 – June 2017',
        company: 'Milanamos',
        companyUrl: 'https://milanamos.com',
        place: 'Sophia-Antipolis, France',
        title: 'Full-stack engineer',
        content: (
          <div>
            <Typography variant="caption">
              Built a SaaS application with AngularJS and Python, providing data-oriented
              dashboards for the air transport industry, mainly airlines and airports.
            </Typography>
            <WorkBullets
              items={[
                'Designed and developed interactive data visualizations using AngularJS, D3, and Leaflet.',
                'Queried and transformed large datasets with Python and MongoDB.',
                'Set up and maintained the continuous integration process with GitLab.',
              ]}
            />
          </div>
        ),
      },
    ],
  },
  {
    year: 2016,
    data: [
      {
        date: 'May 2016 – December 2021',
        company: 'Freelancing',
        place: '',
        title: 'Freelance Web Developer',
        content: (
          <Typography variant="caption">
            As a freelance on my free time, I work on various Javascript projects (mainly using
            React).
          </Typography>
        ),
      },
    ],
  },
  {
    year: 2017,
    data: [
      {
        date: 'July 2017 – October 2021',
        company: 'Ricardo.ch',
        companyUrl: 'https://www.ricardo.ch',
        place: 'Sophia-Antipolis, France',
        title: 'Principal Front-end Engineer',
        content: (
          <div>
            <Typography variant="caption">
              Core contributor of the largest second-hand e-commerce website of Switzerland.
            </Typography>
            <WorkBullets
              items={[
                'Migrated the main pages to React with a custom SSR setup.',
                'Implemented BFF APIs using Node.js and Express.',
                'Led the Flow to TypeScript migration.',
                'Prepared the introduction of Next.js to replace the custom SSR setup.',
                'Introduced React Testing Library and Cypress for testing.',
                'Introduced react-admin for internal admin tools.',
                'Contributed to the design system using Material UI and Storybook.',
                'Designed and implemented real-time Core Web Vitals monitoring with Prometheus and Grafana.',
                'Set up frontend error monitoring with Sentry.',
                'Joined the on-call rotation to keep the platform running 24/7.',
                'Optimized CI/CD pipelines with CircleCI.',
                'Shared knowledge and mentored through documentation, guidelines, code reviews, pair programming, and workshops.',
                'Took part in technical interviews.',
                'Open-sourced several internal projects.',
              ]}
            />
          </div>
        ),
      },
    ],
  },
  {
    year: 2022,
    current: true,
    data: [
      {
        date: 'January 2022 – Present',
        company: 'elba',
        companyUrl: 'https://elba.security',
        place: 'Remote from France',
        title: 'Founding Engineer',
        current: true,
        content: (
          <div>
            <Typography variant="caption">
              Founding engineer in a small product team that built Elba&apos;s B2B security SaaS
              from the first MVP to a production platform.
            </Typography>
            <Typography variant="caption" className="mt-4">
              Worked across TypeScript, React, Next.js, GraphQL, PostgreSQL, Inngest, analytics,
              observability, and AI-assisted product features. I owned product areas from problem
              framing to UI, rollout, monitoring, and maintenance.
            </Typography>
            <Typography variant="caption" className="mt-4">
              Most active contributor to the codebase, with 2,500+ commits and 3,600+ PR reviews
              across product, architecture, reliability, observability, and developer experience.
            </Typography>
            <WorkBullets
              items={[
                'Built a training editor with AI-assisted generation, translation, quizzes, localized previews, and rendering for web, Slack, Teams, and Google Chat.',
                'Built an AI-assisted phishing scenario editor with prompt-based generation, translation, real-time previews, validation, image handling, and clean editing flows.',
                'Built a visual security automation editor for trigger/condition/action workflows, including reusable primitives, validation, templates, runtime execution, versioning, and legacy migration.',
                'Designed analytics and observability infrastructure for product monitoring, activation tracking, journey analysis, logs, metrics, alerts, and production health.',
                'Built employee and admin communication workflows across web, email, Slack, Microsoft Teams, and Google Chat.',
                'Implemented reliable async workflows with durable jobs, retries, rate limits, concurrency controls, idempotency, cancellation paths, and monitoring.',
                'Shipped non-breaking rollouts with feature flags, staged migrations, backfills, compatibility layers, and legacy cleanup.',
                'Helped raise the engineering bar through code reviews, pragmatic architecture, mentoring, and close product/design collaboration.',
              ]}
            />
          </div>
        ),
      },
    ],
  },
];

export default data;
