import React from 'react'
import animateScrollTo from 'animated-scroll-to'
import { InView } from 'react-intersection-observer'
import ExternalLink from '../ExternalLink'
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
import srcData from './data'

class WorkTimeline extends React.Component {
  state = {
    startAnimation: false,
  }
  dragStartPosition = 0
  dragStartScroll = 0
  rafTimeout = null
  wrapperRef = React.createRef()

  playAnimation = () => {
    this.setState({ startAnimation: true })
    this.scrollTimeline({ delay: 2000, speed: 1000 })
  }

  scrollTimeline = ({ delay, speed }) => {
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
          speed: speed,
        })
      }, delay)
    }
  }

  componentWillUnmount() {
    this.cleanEvents()
  }

  cleanEvents = () => {
    document.removeEventListener('mousemove', this.onMouseMove)
    document.removeEventListener('mouseup', this.onDragStopped)
  }

  static getMousePoint = e => Number(e.clientX)

  onMouseDown = e => {
    e.preventDefault()
    document.addEventListener('mousemove', this.onMouseMove)
    document.addEventListener('mouseup', this.onDragStopped)
    this.onDragStart(WorkTimeline.getMousePoint(e))
  }

  onMouseMove = e => this.onDrag(WorkTimeline.getMousePoint(e))

  onDragStart = x => {
    this.dragStartPosition = x
    this.dragStartScroll = this.wrapperRef.current.scrollLeft
  }

  onDrag = x => {
    if (this.rafTimeout) window.cancelAnimationFrame(this.rafTimeout)

    this.rafTimeout = window.requestAnimationFrame(() => {
      if (x === undefined) return
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
          onChange={inView => inView && this.playAnimation()}
        >
          <Wrapper ref={this.wrapperRef}>
            <Container
              onMouseDown={this.onMouseDown}
              startAnimation={startAnimation}
            >
              {srcData.map(yearData => (
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

const Year = ({ year, current, startAnimation, data }) => (
  <YearContainer current={current} startAnimation={startAnimation}>
    <YearLabel current={current}>
      {current ? `${year} ... ${now.getFullYear()}` : year}
    </YearLabel>
    <YearContent>
      {data.map(experience => (
        <Experience key={experience.title} {...experience} />
      ))}
    </YearContent>
  </YearContainer>
)

const Experience = ({
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
