import React from 'react';

import { Typography } from '../Typography';

export type ExperienceData = {
  date: string;
  company: string;
  companyUrl: string;
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
        title: 'Software Development – Internship',
        content: (
          <Typography variant="caption">
            Developed applications for Android mobile devices using Java and CSS3/jQuery. Also
            implemented new features and maintained existing websites using PHP and Javascript.
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
        title: 'Software Development – Internship',
        content: (
          <Typography variant="caption">
            Developed mobile applications (natives and web) using Android and CSS3/jQuery.
            <br />
            Back-end implementation using .NET/C++.
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
            Created an Android app for tablets allowing disabled people to assess their workday.
            Developed an administration application using Symfony2 with a dual purpose: to present
            the results of each user in a structured layout and to customize the Android app for
            each user.
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
        title: 'Software Development - Internship',
        content: (
          <Typography variant="caption">
            Within the Reservations service of Amadeus, I developed a product named Community Trip
            Organizer. It is a web application providing a platform for groups in order to organize
            trips in a collaborative way.
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
            In charge of the front-end part of a SAAS application, powered by AngularJS and Python.
            Milanamos provides traffic and revenue forecasting for the air transport industry
            (airlines and airports).
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
            Polished a 20 y.o. ecommerce website using cool stuffs: React, SSR, Typescript, Webpack,
            Node.js, MaterialUI...
            <br /> Ensuring that everything runs smoothly using Prometheus, Grafana and Google
            Analytics.
            <br /> Powered by our micro-services APIs.
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
        company: 'elba.security',
        companyUrl: 'https://elba-security',
        place: 'Remote from France',
        title: 'Founding Product Engineer',
        current: true,
        content: (
          <Typography variant="caption">
            Helped build Elba&apos;s B2B security SaaS from early foundations to production.
            <br />
            Owned end-to-end product work across AI-assisted editors, security automation workflows,
            analytics, observability, and multi-channel communication.
            <br />
            Core stack: TypeScript, React, Next.js, Hasura, GraphQL, PostgreSQL, Inngest, analytics, and
            observability tooling.
          </Typography>
        ),
      },
    ],
  },
];

export default data;
