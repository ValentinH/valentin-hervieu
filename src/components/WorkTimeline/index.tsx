import animateScrollTo from 'animated-scroll-to'
import React from 'react'
import { InView } from 'react-intersection-observer'

import srcData, { ExperienceData, YearData } from './data'
import {
  Wrapper,
  Container,
  YearContainer,
  YearLabel,
  YearContent,
  ExperienceContainer,
  ExpDate,
  ExpPlace,
  ExpTitle,
  ExpContent,
} from './styles'
import ExternalLink from '../ExternalLink'

const getMousePoint = (e: React.MouseEvent<HTMLDivElement> | MouseEvent) =>
  Number(e.clientX)

const WorkTimeline = () => {
  const [startAnimation, setStartAnimation] = React.useState(false)
  const dragStartPositionRef = React.useRef(0)
  const dragStartScrollRef = React.useRef(0)
  const rafTimeoutRef = React.useRef<number | null>(null)
  const wrapperRef = React.useRef<HTMLDivElement | null>(null)

  const scrollTimeline = ({ delay = 100, speed = 1000 }) => {
    if (wrapperRef && wrapperRef.current) {
      const element = wrapperRef.current
      const mobileThreshold = 540
      const isMobile = window.innerWidth < mobileThreshold
      const scrollOffset = isMobile ? mobileThreshold : window.innerWidth
      window.setTimeout(() => {
        const scrollDestination = element.scrollWidth - scrollOffset
        animateScrollTo([scrollDestination, null], {
          elementToScroll: element,
          speed,
        })
      }, delay)
    }
  }

  const playAnimation = () => {
    setStartAnimation(true)
    scrollTimeline({ delay: 2000, speed: 1000 })
  }

  const onDragStart = (x: number) => {
    dragStartPositionRef.current = x
    dragStartScrollRef.current = wrapperRef.current?.scrollLeft || 0
  }

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onDragStopped)
    onDragStart(getMousePoint(e))
  }

  const onMouseMove = React.useCallback((e: MouseEvent) => {
    const x = getMousePoint(e)

    if (rafTimeoutRef.current)
      window.cancelAnimationFrame(rafTimeoutRef.current)

    rafTimeoutRef.current = window.requestAnimationFrame(() => {
      if (x === undefined || !wrapperRef.current) return
      const offsetX = dragStartPositionRef.current - x
      const requestedPosition = dragStartScrollRef.current + offsetX

      wrapperRef.current.scrollLeft = requestedPosition
    })
  }, [])

  const onDragStopped = React.useCallback(() => {
    document.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('mouseup', onDragStopped)
  }, [onMouseMove])

  React.useEffect(() => {
    return () => {
      onDragStopped()
    }
  }, [onDragStopped])

  return (
    <div>
      <h2>Work experience</h2>
      <InView
        tag="div"
        threshold={0.7}
        triggerOnce
        onChange={(inView) => inView && playAnimation()}
      >
        <Wrapper ref={wrapperRef}>
          <Container onMouseDown={onMouseDown} startAnimation={startAnimation}>
            {srcData.map((yearData) => (
              <Year
                key={yearData.year}
                {...yearData}
                startAnimation={startAnimation}
              />
            ))}
          </Container>
        </Wrapper>
      </InView>
    </div>
  )
}

const now = new Date()

type YearProps = {
  startAnimation: boolean
} & YearData

const Year: React.FC<YearProps> = ({ year, current, startAnimation, data }) => (
  <YearContainer current={current} startAnimation={startAnimation}>
    <YearLabel current={current}>
      {current ? `${year} ... ${now.getFullYear()}` : year}
    </YearLabel>
    <YearContent>
      {data.map((experience: ExperienceData) => (
        <Experience key={experience.title} {...experience} />
      ))}
    </YearContent>
  </YearContainer>
)

const Experience: React.FC<ExperienceData> = ({
  date,
  company,
  companyUrl,
  place,
  title,
  content,
  current,
}) => (
  <ExperienceContainer current={current}>
    <ExpDate>{date}</ExpDate>
    <ExternalLink href={companyUrl}>{company}</ExternalLink>
    <ExpPlace>{place}</ExpPlace>
    <ExpTitle>{title}</ExpTitle>
    <ExpContent>{content}</ExpContent>
  </ExperienceContainer>
)

export default WorkTimeline
