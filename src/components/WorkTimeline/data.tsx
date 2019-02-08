import React from 'react'

export interface ExperienceData {
  date: string
  company: string
  companyUrl: string
  place: string
  title: string
  content: JSX.Element
  current?: boolean
}

export interface YearData {
  year: number
  current?: boolean
  data: ExperienceData[]
}

export type Data = YearData[]

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
          <p>
            Developed applications for Android mobile devices using Java and
            CSS3/jQuery. Also implemented new features and maintained existing
            websites using PHP and Javascript.
          </p>
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
        companyUrl:
          'https://www.usa.siemens.com/en/about_us/research/about_us.htm',
        place: 'Princeton, NJ, USA',
        title: 'Software Development – Internship',
        content: (
          <p>
            Developed mobile applications (natives and web) using Android and
            CSS3/jQuery.
            <br />
            Back-end implementation using .NET/C++.
          </p>
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
          <p>
            Created an Android app for tablets allowing disabled people to
            assess their workday. Developed an administration application using
            Symfony2 with a dual purpose: to present the results of each user in
            a structured layout and to customize the Android app for each user.
          </p>
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
          <p>
            Within the Reservations service of Amadeus, I developed a product
            named Community Trip Organizer. It is a web application providing a
            platform for groups in order to organize trips in a collaborative
            way.
          </p>
        ),
      },
      {
        date: 'August 2014 – June 2017',
        company: 'Milanamos',
        companyUrl: 'https://milanamos.com',
        place: 'Sophia-Antipolis, France',
        title: 'Full-stack engineer',
        content: (
          <p>
            In charge of the front-end part of a SAAS application, powered by
            AngularJS and Python. Milanamos provides traffic and revenue
            forecasting for the air transport industry (airlines and airports).
          </p>
        ),
      },
    ],
  },
  {
    year: 2017,
    current: true,
    data: [
      {
        date: 'July 2017 – Present',
        company: 'Ricardo.ch',
        companyUrl: 'https://www.ricardo.ch',
        place: 'Sophia-Antipolis, France',
        title: 'Senior Front-end Engineer',
        current: true,
        content: (
          <p>
            We are rebuilding an 18 y.o. ecommerce website using cool stuffs:
            React, SSR, Webpack, Node.js, MaterialUI...
            <br /> Ensuring that everything runs smoothly using Prometheus,
            Grafana and Google Analytics.
            <br /> Powered by our micro-services APIs.
          </p>
        ),
      },
    ],
  },
]

export default data