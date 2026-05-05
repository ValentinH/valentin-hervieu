import animateScrollTo from 'animated-scroll-to';
import React from 'react';
import { InView } from 'react-intersection-observer';
import '@fontsource/roboto/700.css';

import { cn } from '#src/lib/utils';

import srcData, { ExperienceData, YearData } from './data';
import styles from './styles.module.css';
import ExternalLink from '../ExternalLink';

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
    scrollTimeline({ delay: 2000, speed: 1000 });
  };

  const onDragStart = (x: number) => {
    dragStartPositionRef.current = x;
    dragStartScrollRef.current = wrapperRef.current?.scrollLeft || 0;
  };

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onDragStopped);
    onDragStart(getMousePoint(e));
  };

  const onMouseMove = React.useCallback((e: MouseEvent) => {
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
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onDragStopped);
  }, [onMouseMove]);

  React.useEffect(() => {
    return () => {
      onDragStopped();
    };
  }, [onDragStopped]);

  return (
    <section>
      <h2>Work experience</h2>
      <InView as="div" threshold={0.7} triggerOnce onChange={(inView) => inView && playAnimation()}>
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
              'relative mx-[200px] mt-6 inline-flex h-[400px] cursor-grab bg-white active:cursor-[grabing]',
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
      current && styles.yearCurrent,
      startAnimation && styles.yearAnimated,
    )}
  >
    <div
      className={cn('absolute top-0 ml-2 font-bold', current ? 'text-secondary' : 'text-primary')}
    >
      {current ? `${year} ... ${now.getFullYear()}` : year}
    </div>
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
      'mx-2 w-[280px] rounded-sm border border-solid border-[#ddd] p-4 shadow-[1px_1px_4px_rgba(0,0,0,0.2)]',
      current && 'bg-[#ffec6e63]',
    )}
  >
    <div className="mb-2 text-[12px] italic">{date}</div>
    <ExternalLink href={companyUrl}>{company}</ExternalLink>
    <div className="mb-2 text-[14px] font-bold text-[#666]">{place}</div>
    <div className="text-[16px] font-bold text-[#444]">{title}</div>
    <div className="text-[14px] leading-[1.5]">{content}</div>
  </div>
);

export default WorkTimeline;
