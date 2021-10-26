import animateScrollTo from 'animated-scroll-to'
import React from 'react'
import { InView } from 'react-intersection-observer'

import ExternalLink from '../ExternalLink'
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

class WorkTimeline extends React.Component {
  state = {
    startAnimation: false,
  }

  dragStartPosition = 0

  dragStartScroll = 0

  rafTimeout: number | null = null

  wrapperRef = React.createRef<HTMLDivElement>()

  static getMousePoint = (e: React.MouseEvent<HTMLDivElement> | MouseEvent) =>
    Number(e.clientX)

  componentWillUnmount() {
    this.cleanEvents()
  }

  scrollTimeline = ({ delay, speed }: { delay: number; speed: number }) => {
    if (this.wrapperRef && this.wrapperRef.current) {
      const element = this.wrapperRef.current
      const mobileThreshold = 540
      const isMobile = window.innerWidth < mobileThreshold
      const scrollOffset = isMobile ? mobileThreshold : window.innerWidth
      window.setTimeout(() => {
        const scrollDestination = element.scrollWidth - scrollOffset
        animateScrollTo(scrollDestination, {
          element,
          horizontal: true,
          speed,
        })
      }, delay)
    }
  }

  playAnimation = () => {
    this.setState({ startAnimation: true })
    this.scrollTimeline({ delay: 2000, speed: 1000 })
  }

  cleanEvents = () => {
    document.removeEventListener('mousemove', this.onMouseMove)
    document.removeEventListener('mouseup', this.onDragStopped)
  }

  onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    document.addEventListener('mousemove', this.onMouseMove)
    document.addEventListener('mouseup', this.onDragStopped)
    this.onDragStart(WorkTimeline.getMousePoint(e))
  }

  onMouseMove = (e: MouseEvent) => this.onDrag(WorkTimeline.getMousePoint(e))

  onDragStart = (x: number) => {
    this.dragStartPosition = x
    this.dragStartScroll = this.wrapperRef.current?.scrollLeft || 0
  }

  onDrag = (x: number) => {
    if (this.rafTimeout) window.cancelAnimationFrame(this.rafTimeout)

    this.rafTimeout = window.requestAnimationFrame(() => {
      if (x === undefined || !this.wrapperRef.current) return
      const offsetX = this.dragStartPosition - x
      const requestedPosition = this.dragStartScroll + offsetX

      this.wrapperRef.current.scrollLeft = requestedPosition
    })
  }

  onDragStopped = () => {
    this.cleanEvents()
  }

  render() {
    const { startAnimation } = this.state
    return (
      <div>
        <h2>Work experience</h2>
        <InView
          tag="div"
          threshold={0.7}
          triggerOnce
          onChange={(inView) => inView && this.playAnimation()}
        >
          <Wrapper ref={this.wrapperRef}>
            <Container
              onMouseDown={this.onMouseDown}
              startAnimation={startAnimation}
            >
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
