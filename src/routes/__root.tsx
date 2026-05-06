import '@fontsource-variable/inter/wght.css';
import 'react-image-gallery/styles/image-gallery.css';

import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router';
import { Analytics } from '@vercel/analytics/react';
import React from 'react';

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
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Header siteTitle={config.title} />
        <main className="max-w-screen-xl mx-auto min-h-[calc(100vh-328px)] space-y-12 p-4">
          {children}
        </main>
        <Footer />
        <Analytics />
        <Scripts />
      </body>
    </html>
  );
}
