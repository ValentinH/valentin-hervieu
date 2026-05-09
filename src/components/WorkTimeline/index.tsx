import animateScrollTo from 'animated-scroll-to';
import React from 'react';
import { InView } from 'react-intersection-observer';

import { cn } from '#src/lib/utils';

import srcData, { ExperienceData, YearData } from './data';
import styles from './styles.module.css';
import ExternalLink from '../ExternalLink';
import { Typography } from '../Typography';

const getMousePoint = (e: React.MouseEvent<HTMLDivElement> | MouseEvent) => Number(e.clientX);

const WorkTimeline = () => {
  const [startAnimation, setStartAnimation] = React.useState(false);
  const dragStartPositionRef = React.useRef(0);
  const dragStartScrollRef = React.useRef(0);
  const rafTimeoutRef = React.useRef<number | null>(null);
  const wrapperRef = React.useRef<HTMLDivElement | null>(null);

  const scrollTimeline = ({ delay = 100, speed = 1000 }) => {
    if (wrapperRef && wrapperRef.current) {
      const element = wrapperRef.current;
      const mobileThreshold = 540;
      const isMobile = window.innerWidth < mobileThreshold;
      const scrollOffset = isMobile ? mobileThreshold : window.innerWidth;
      window.setTimeout(() => {
        const scrollDestination = element.scrollWidth - scrollOffset;
        animateScrollTo([scrollDestination, null], {
          elementToScroll: element,
          speed,
        });
      }, delay);
    }
  };

  const playAnimation = () => {
    setStartAnimation(true);
    scrollTimeline({ delay: 1000, speed: 1000 });
  };

  const onDragStart = (x: number) => {
    dragStartPositionRef.current = x;
    dragStartScrollRef.current = wrapperRef.current?.scrollLeft || 0;
  };

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    document.addEventListener('pointermove', onPointerMove);
    document.addEventListener('pointerup', onDragStopped);
    onDragStart(getMousePoint(e));
  };

  const onPointerMove = React.useCallback((e: MouseEvent) => {
    const x = getMousePoint(e);

    if (rafTimeoutRef.current) window.cancelAnimationFrame(rafTimeoutRef.current);

    rafTimeoutRef.current = window.requestAnimationFrame(() => {
      if (x === undefined || !wrapperRef.current) return;
      const offsetX = dragStartPositionRef.current - x;
      const requestedPosition = dragStartScrollRef.current + offsetX;

      wrapperRef.current.scrollLeft = requestedPosition;
    });
  }, []);

  const onDragStopped = React.useCallback(() => {
    document.removeEventListener('pointermove', onPointerMove);
    document.removeEventListener('pointerup', onDragStopped);
  }, [onPointerMove]);

  React.useEffect(() => {
    return () => {
      onDragStopped();
    };
  }, [onDragStopped]);

  return (
    <section>
      <Typography as="h2" variant="sectionTitle" color="heading" className="mb-4">
        Work experience
      </Typography>
      <InView as="div" threshold={0.5} triggerOnce onChange={(inView) => inView && playAnimation()}>
        <div
          className={cn(
            styles.wrapper,
            'relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-x-auto overflow-y-hidden',
          )}
          ref={wrapperRef}
        >
          <div
            className={cn(
              styles.container,
              'relative mx-[200px] mt-6 inline-flex h-[400px] cursor-grab bg-white ring-1 ring-black/10 active:cursor-[grabing]',
              startAnimation && styles.containerAnimated,
            )}
            onMouseDown={onMouseDown}
            role="presentation"
          >
            {srcData.map((yearData) => (
              <Year key={yearData.year} {...yearData} startAnimation={startAnimation} />
            ))}
          </div>
        </div>
      </InView>
    </section>
  );
};

const now = new Date();

type YearProps = {
  startAnimation: boolean;
} & YearData;

const Year = ({ year, current, startAnimation, data }: YearProps) => (
  <div
    className={cn(
      styles.year,
      'relative -top-6 mb-[-25px] mr-4 flex items-center border-l-[5px] pb-4 pt-10 opacity-0',
      startAnimation && styles.yearAnimated,
    )}
  >
    <Typography as="div" variant="captionStrong" color="primary" className="absolute top-0 ml-2">
      {current ? `${year} ... ${now.getFullYear()}` : year}
    </Typography>
    <div className="ml-4 flex">
      {data.map((experience: ExperienceData) => (
        <Experience key={experience.title} {...experience} />
      ))}
    </div>
  </div>
);

const Experience = ({
  date,
  company,
  companyUrl,
  place,
  title,
  content,
  current,
}: ExperienceData) => (
  <div
    className={cn(
      'mx-2 w-[280px] rounded-lg border border-solid border-black/10 bg-white p-4',
      current && 'bg-orange-50',
    )}
  >
    <Typography as="div" variant="meta" color="muted" className="mb-1">
      {date}
    </Typography>
    <Typography as={ExternalLink} variant="body" color="primary" href={companyUrl}>
      {company}
    </Typography>
    <Typography as="div" variant="captionStrong" color="muted" className="mb-2">
      {place}
    </Typography>
    <Typography as="div" variant="bodyStrong" color="heading" className="mb-1">
      {title}
    </Typography>
    {content}
  </div>
);

export default WorkTimeline;
