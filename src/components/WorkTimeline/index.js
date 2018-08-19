import React from 'react'
import animateScrollTo from 'animated-scroll-to'
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
  dragStartPosition = 0
  dragStartScroll = 0
  rafTimeout = null
  wrapperRef = React.createRef()

  componentDidMount() {
    this.scrollTimeline({ delay: 2000, speed: 1000 })
  }

  scrollTimeline = ({ delay, speed }) => {
    if (this.wrapperRef && this.wrapperRef.current) {
      const element = this.wrapperRef.current
      window.setTimeout(() => {
        const scrollDestination = element.scrollWidth - window.innerWidth
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
    return (
      <Wrapper innerRef={this.wrapperRef}>
        <Container onMouseDown={this.onMouseDown}>
          {srcData.map(yearData => (
            <Year key={yearData.year} {...yearData} />
          ))}
        </Container>
      </Wrapper>
    )
  }
}

const Year = ({ year, current, data }) => (
  <YearContainer current={current}>
    <YearLabel current={current}>{year}</YearLabel>
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
