import srcData, { ExperienceData } from './data';
import ExternalLink from '../ExternalLink';
import { Typography } from '../Typography';

const WorkTimeline = () => {
  const experiences = srcData
    .slice()
    .reverse()
    .flatMap((yearData) =>
      yearData.data
        .slice()
        .reverse()
        .map((experience) => experience),
    );

  return (
    <section>
      <Typography as="h2" variant="sectionTitle" color="heading" className="mb-4">
        Work experience
      </Typography>
      <ol className="relative max-w-3xl list-none border-l border-black/10 pl-0">
        {experiences.map((experience) => (
          <Experience key={`${experience.date}-${experience.title}`} {...experience} />
        ))}
      </ol>
    </section>
  );
};

const Experience = ({
  date,
  company,
  companyUrl,
  place,
  title,
  content,
  current,
}: ExperienceData) => (
  <li className="relative pb-6 pl-6 last:pb-0">
    <span
      className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-page bg-primary"
      aria-hidden="true"
    />
    <article className="rounded-lg border border-black/10 bg-white p-4">
      <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <Typography as="div" variant="bodyStrong" color="heading">
              {title}
            </Typography>
            {current ? (
              <Typography
                as="span"
                variant="meta"
                color="primary"
                className="rounded-full border border-primary/20 bg-primary/5 px-2 py-0.5 not-italic"
              >
                Current
              </Typography>
            ) : null}
          </div>
          {companyUrl ? (
            <Typography as={ExternalLink} variant="captionStrong" color="primary" href={companyUrl}>
              {company}
            </Typography>
          ) : (
            <Typography as="div" variant="captionStrong" color="primary">
              {company}
            </Typography>
          )}
        </div>
        <Typography as="div" variant="meta" color="muted" className="shrink-0 sm:text-right">
          {date}
        </Typography>
      </div>
      {place ? (
        <Typography as="div" variant="captionStrong" color="muted" className="mb-2">
          {place}
        </Typography>
      ) : null}
      {content}
    </article>
  </li>
);

export default WorkTimeline;
