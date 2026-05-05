import '@fontsource/roboto';
import 'react-image-gallery/styles/image-gallery.css';

import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router';
import React from 'react';
import ReactGA from 'react-ga';

import Footer from '#src/components/Footer';
import Header from '#src/components/Header';
import colors from '#src/const/colors';
import config from '#src/const/config';
import appCss from '#src/global.css?url';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        content: 'Personal website of Valentin Hervieu',
      },
      { name: 'keywords', content: 'Valentin, Hervieu, React, Frontend' },
      { name: 'theme-color', content: colors.primaryColor },
      { title: config.title },
    ],
    links: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'stylesheet', href: appCss },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    ReactGA.initialize('UA-40453888-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Header siteTitle={config.title} />
        <main className="max-w-screen-xl mx-auto p-4 space-y-12">{children}</main>
        <Footer />
        <Scripts />
      </body>
    </html>
  );
}
