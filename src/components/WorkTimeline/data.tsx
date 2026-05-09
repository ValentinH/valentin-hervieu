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
            Developed applications for Android mobile devices using Java and CSS3/JQuery in order to
            compare these two technologies. Also implemented new features and maintained existing
            websites using PHP and Javascript.
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
            Working in Automation systems and HMI department. I developed mobile applications
            (native and web) using Android and CSS3/jQuery. Back-end implementation using .NET/C++.
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
            As part of a project with the Junior Company of the UTC, I worked for an organization
            which help people with disabilities to integrate into non-technical business
            environments. The aim of the project was the realization of an Android app for tablets
            allowing people supervised by the organization (called &quot;residents&quot;) to assess
            their workday. The results of these assessments are then synchronized to a server. The
            screens of the Android application are fully configurable through a web application,
            used by the staff of the association. The administration application has a dual purpose:
            to present the results of each resident in a structured layout and to customize the
            Android app in order to adapt the questions to each resident.
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
            Within the Reservations service of Amadeus, I&apos;m developing a product named
            Community Trip Organizer. It is a web application providing a platform for groups in
            order to organize trips in a collaborative way.
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
          <Typography variant="caption">
            Development of a SAAS application, powered by AngularJS and Python. We provide many
            data-oriented dashboards for the air transport industry (airlines and airports).
            <br />
            Main tasks:
            <br />- design and development of interactive data-powered visualisations using
            AngularJS, D3 and Leaflet
            <br />- query and transformation of large amount of data in Python/MongoDB
            <br />- setup and maintenance of the continuous integration process using Gitlab
          </Typography>
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
            React)
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
          <Typography variant="caption">
            Core contributor of the largest second-hand e-commerce website of Switzerland.
            <br />‣ Migration of the main pages to React with homemade SSR setup
            <br />‣ Implementation of BFF APIs using Node.js/Express
            <br />‣ Lead of the Flow to Typescript migration
            <br />‣ Preparation of the introduction of Next.js to replace our SSR setup
            <br />‣ Introduction of react-testing-library and Cypress for testing
            <br />‣ Introduction of the react-admin framework for our admin tools
            <br />‣ Contribution to our design system using Material-UI and Storybook
            <br />‣ Architecture and implementation of realtime Core Web Vitals monitoring using
            Prometheus and Grafana
            <br />‣ Frontend error monitoring using Sentry
            <br />‣ Part of the on-call team to keep the platform up and running 24/7
            <br />‣ Optimisation of our CI/CD pipelines (CircleCI)
            <br />‣ Knowledge-sharing and mentoring (documentation, guidelines, code-reviews,
            pair-programming, workshops organisation)
            <br />‣ Technical interviews as part of the hiring process
            <br />‣ Open-source of several projects
          </Typography>
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
              Founding engineer in a small product team building Elba&apos;s B2B security SaaS from
              early foundations to a production-grade platform.
            </Typography>
            <Typography variant="caption" className="mt-6">
              Worked as a product engineer across TypeScript, React, Next.js, GraphQL, PostgreSQL,
              Inngest, analytics, observability, and AI-assisted product features. Owned complex
              product areas from ambiguous problem framing to polished UI, rollout, monitoring, and
              long-term maintenance.
            </Typography>
            <Typography variant="caption" className="mt-6">
              Most active contributor to the codebase, with 2 500+ commits and 3 600+ PR reviews
              across product, architecture, reliability, observability, and developer experience.
            </Typography>
            <div className="mt-6">
              <Typography variant="caption">Selected work:</Typography>
              <div className="mt-2">
                <Typography variant="caption">
                  - Built a training editor with AI-assisted generation, translation, quizzes,
                  localized previews, and multi-channel rendering across web, Slack, Teams, and
                  Google Chat.
                </Typography>
                <Typography variant="caption" className="mt-2">
                  - Built an AI-assisted phishing scenario editor with prompt-based generation,
                  translation, real-time previews, validation, image handling, and polished editing
                  flows.
                </Typography>
                <Typography variant="caption" className="mt-2">
                  - Built a visual security automation editor for trigger/condition/action
                  workflows, with reusable primitives, validation, templates, runtime execution,
                  versioning, and legacy migration.
                </Typography>
                <Typography variant="caption" className="mt-2">
                  - Designed analytics and observability infrastructure for product monitoring,
                  activation tracking, journey analysis, logs, metrics, alerts, and production
                  health.
                </Typography>
                <Typography variant="caption" className="mt-2">
                  - Built multi-channel employee/admin communication workflows across web, email,
                  Slack, Microsoft Teams, and Google Chat.
                </Typography>
                <Typography variant="caption" className="mt-2">
                  - Implemented reliable async workflows with durable jobs, retries, rate limits,
                  concurrency controls, idempotency, cancellation paths, and monitoring.
                </Typography>
                <Typography variant="caption" className="mt-2">
                  - Shipped non-breaking rollouts with feature flags, staged migrations, backfills,
                  compatibility layers, and legacy cleanup.
                </Typography>
                <Typography variant="caption" className="mt-2">
                  - Helped raise the engineering bar through code reviews, pragmatic architecture,
                  mentoring, and close product/design collaboration.
                </Typography>
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
];

export default data;
