declare module '*.png' {
  const content: any;
  export default content;
}

declare module '*.jpg' {
  const content: any;
  export default content;
}

declare module '*.webp' {
  const content: any;
  export default content;
}

declare module '*.module.css' {
  const classes: Record<string, string>;
  export default classes;
}

declare module '@fontsource/*';

interface ImportMetaEnv {
  readonly VERCEL: boolean;
  readonly VITE_RESUME_LOCATION?: string;
  readonly VITE_RESUME_PHONE?: string;
  readonly VITE_RESUME_EMAIL?: string;
  readonly VITE_RESUME_WEBSITE?: string;
}
