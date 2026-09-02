import '@fontsource-variable/inter/wght.css';
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
import { defaultResumeData, parseResumeData, type ResumeData } from '#src/resume/resume-data';

type ContactItem = {
  icon: IconDefinition;
  label: string;
};

const injectedResumeData = import.meta.env.VITE_RESUME_DATA;
const resumeData = injectedResumeData
  ? parseResumeData(JSON.parse(injectedResumeData))
  : parseResumeData({
      ...defaultResumeData,
      candidate: {
        ...defaultResumeData.candidate,
        location: import.meta.env.VITE_RESUME_LOCATION,
        phone: import.meta.env.VITE_RESUME_PHONE,
        email: import.meta.env.VITE_RESUME_EMAIL,
        portfolio: import.meta.env.VITE_RESUME_WEBSITE
          ? {
              url: import.meta.env.VITE_RESUME_WEBSITE,
              display: import.meta.env.VITE_RESUME_WEBSITE,
            }
          : undefined,
      },
    });

function Resume({ data }: { data: ResumeData }) {
  const languages = data.languages ?? [];
  const interests = data.interests ?? [];
  const contactItems: ContactItem[] = [
    { icon: faLocationDot, label: data.candidate.location ?? '' },
    { icon: faPhone, label: data.candidate.phone ?? '' },
    { icon: faEnvelope, label: data.candidate.email ?? '' },
    { icon: faLink, label: data.candidate.portfolio?.display ?? '' },
  ].filter((item) => item.label);

  return (
    <main
      className="relative mx-auto min-h-[297mm] w-[210mm] bg-white p-[9mm_9mm_4mm] text-[10.2px] leading-[1.34] text-[#16172a] shadow-[0_0_0_1px_rgba(0,0,0,0.1)] print:m-0 print:shadow-none"
      data-resume-page
    >
      <div className="absolute bottom-[12mm] left-[149.5mm] top-[6mm] w-px bg-[#d7d7de]" />

      <header className="grid grid-cols-[26mm_1fr_48mm] items-start gap-[6mm] pb-[8mm]">
        <img
          className="h-[32mm] w-[26mm] rounded-[2mm] object-cover"
          src={profilePicture}
          alt={data.candidate.name}
        />
        <div>
          <h1 className="m-0 text-[25px] font-extrabold leading-none tracking-normal text-[#0c1027] uppercase">
            {data.candidate.name}
          </h1>
          {data.candidate.headline ? (
            <p className="my-[4px] mb-[5px] text-[14px] leading-[1.2] text-primary">
              {data.candidate.headline}
            </p>
          ) : null}
          <p className="m-0 max-w-[112mm] text-[#25263a]">
            <FormattedText>{data.summary}</FormattedText>
          </p>
        </div>
        <ul className="m-0 flex min-h-[34mm] list-none flex-col gap-[3.4mm] p-0">
          {contactItems.map((item) => (
            <li
              className="grid grid-cols-[1.7mm_1fr] items-center gap-[3mm]"
              key={item.icon.iconName}
            >
              <FontAwesomeIcon className="justify-self-center text-primary" icon={item.icon} />
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </header>

      <div className="grid grid-cols-[1fr_48mm] gap-[7mm]">
        <div>
          {data.experience.length > 0 ? (
            <Section icon={faBriefcase} title="Experience" withHeadingRule>
              <div className="grid grid-cols-[max-content_4mm_1fr] gap-x-[4mm] gap-y-[3.8mm]">
                {data.experience.map((experience) => (
                  <Fragment key={`${experience.dates}-${experience.company}`}>
                    <Period>{experience.dates}</Period>
                    <TimelineLine />
                    <article>
                      <ItemTitle>
                        <strong>{experience.company}</strong>
                        <span> - {experience.role}</span>
                      </ItemTitle>
                      {experience.location ? <Location>{experience.location}</Location> : null}
                      <ul className="m-0 list-disc pl-[4mm] marker:text-primary">
                        {experience.bullets.map((bullet) => (
                          <li className="pl-[1mm]" key={bullet}>
                            <FormattedText>{bullet}</FormattedText>
                          </li>
                        ))}
                      </ul>
                      {experience.tech ? (
                        <p className="m-[1mm_0_0] text-[9.4px] leading-[1.25] font-semibold text-[#656577] italic">
                          {formatItems(experience.tech)}
                        </p>
                      ) : null}
                    </article>
                  </Fragment>
                ))}
              </div>
            </Section>
          ) : null}

          {data.projects.length > 0 ? (
            <Section icon={faRocket} title="Projects" withHeadingRule separated>
              <ul className="m-0 grid list-disc gap-[1.4mm] pl-[4mm] marker:text-primary">
                {data.projects.map((project) => (
                  <li key={project.name}>
                    {project.url ? (
                      <a className="font-bold text-primary no-underline" href={project.url}>
                        {project.name}
                      </a>
                    ) : (
                      <strong className="text-primary">{project.name}</strong>
                    )}
                    <span> - {project.description}</span>
                  </li>
                ))}
              </ul>
            </Section>
          ) : null}

          {data.education.length > 0 ? (
            <Section icon={faGraduationCap} title="Education" withHeadingRule separated>
              <div className="grid grid-cols-[max-content_1fr] gap-x-[4mm] gap-y-[2mm]">
                {data.education.map((item) => (
                  <Fragment key={`${item.year}-${item.title}`}>
                    <Period>{item.year}</Period>
                    <div>
                      <ItemTitle>{item.org ?? item.title}</ItemTitle>
                      {item.org || item.description ? (
                        <p className="m-0 text-gray-500">
                          {item.org ? item.title : item.description}
                          {item.org && item.description ? ` - ${item.description}` : ''}
                        </p>
                      ) : null}
                    </div>
                  </Fragment>
                ))}
              </div>
            </Section>
          ) : null}

          {data.certifications?.length ? (
            <Section icon={faGraduationCap} title="Certifications" withHeadingRule separated>
              <ul className="m-0 grid list-disc gap-[1.4mm] pl-[4mm] marker:text-primary">
                {data.certifications.map((certification) => (
                  <li key={certification.title}>
                    <strong>{certification.title}</strong>
                    {certification.org ? ` - ${certification.org}` : ''}
                    {certification.year ? ` (${certification.year})` : ''}
                  </li>
                ))}
              </ul>
            </Section>
          ) : null}
        </div>

        <aside className="flex flex-col gap-[5.5mm]">
          {data.skills.length > 0 ? (
            <Section icon={faCode} title="Skills">
              <div className="grid gap-[4.4mm]">
                {data.skills.map((group) => (
                  <article
                    className="border-b border-[#d7d7de] pb-[4.4mm] last:border-b-0"
                    key={group.category}
                  >
                    <DotHeading>{group.category}</DotHeading>
                    <p className="m-0 pl-[4.8mm]">{formatItems(group.items)}</p>
                  </article>
                ))}
              </div>
            </Section>
          ) : null}

          {languages.length > 0 ? (
            <Section icon={faLanguage} title="Languages" separated>
              <ul className="m-0 grid list-none gap-[3.2mm] p-0">
                {languages.map((language) => (
                  <li
                    className="before:mr-[3mm] before:inline-block before:size-[1.2mm] before:rounded-full before:bg-primary before:align-middle before:content-['']"
                    key={language.name}
                  >
                    <strong>{language.name}</strong> - {language.proficiency}
                    {language.detail ? <span> ({language.detail})</span> : null}
                  </li>
                ))}
              </ul>
            </Section>
          ) : null}

          {interests.length > 0 ? (
            <Section icon={faHeart} title="Hobbies" separated>
              <ul className="m-0 grid list-none gap-[3.2mm] p-0">
                <li className="before:mr-[3mm] before:inline-block before:size-[1.2mm] before:rounded-full before:bg-primary before:align-middle before:content-['']">
                  {interests.join(', ')}
                </li>
              </ul>
            </Section>
          ) : null}
        </aside>
      </div>
    </main>
  );
}

function FormattedText({ children }: { children: string }) {
  return children
    .split(/(\*\*[^*]+\*\*)/)
    .map((part, index) =>
      part.startsWith('**') && part.endsWith('**') ? (
        <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>
      ) : (
        part
      ),
    );
}

function formatItems(items: string | string[]) {
  return Array.isArray(items) ? items.join(', ') : items;
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
    <section className={cn('break-inside-avoid', separated && 'mt-[6mm]')}>
      <h2 className="!m-[0_0_4mm] grid grid-cols-[6mm_max-content_1fr] items-center !text-[11px] !leading-none font-bold tracking-normal !text-[#101126] uppercase">
        <FontAwesomeIcon className="text-primary" icon={icon} />
        <span>{title}</span>
        {withHeadingRule ? <span className="ml-[2mm] h-px bg-[#d7d7de]" /> : null}
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
    <div className="mb-[2mm] text-[10.5px] leading-[1.22] text-[#14162b] before:mr-[3mm] before:inline-block before:size-[1.2mm] before:rounded-full before:bg-primary before:align-middle before:content-['']">
      {children}
    </div>
  );
}

createRoot(document.getElementById('root')!).render(<Resume data={resumeData} />);
