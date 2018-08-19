import React from 'react'
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

const contentSize = Math.min(960 - 50, window.innerWidth - 260) // right padding

class WorkTimeline extends React.Component {
  state = { translate: null }
  initialTranslate = 0
  dragStartPosition = 0
  dragStartTranslate = 0
  rafTimeout = null
  timelineRef = React.createRef()

  componentDidMount() {
    if (this.timelineRef && this.timelineRef.current) {
      const timelineWidth = this.timelineRef.current.getBoundingClientRect()
        .width
      this.initialTranslate = -(timelineWidth - contentSize)
    }
  }

  componentWillUnmount() {
    this.cleanEvents()
  }

  cleanEvents = () => {
    document.removeEventListener('mousemove', this.onMouseMove)
    document.removeEventListener('mouseup', this.onDragStopped)
    document.removeEventListener('touchmove', this.onTouchMove)
    document.removeEventListener('touchend', this.onDragStopped)
  }

  ensureInit = callback => {
    // if first interaction
    if (this.state.translate === null) {
      this.setState(
        {
          translate: this.initialTranslate,
        },
        callback
      )
    } else {
      callback()
    }
  }

  onWheel = e => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      e.preventDefault()
      const delta = e.deltaX
      this.ensureInit(() =>
        this.setState(state => ({
          translate: this.restrictPosition(state.translate - delta),
        }))
      )
    }
  }

  restrictPosition = value =>
    Math.max(this.initialTranslate, Math.min(0, value))

  static getMousePoint = e => Number(e.clientX)

  static getTouchPoint = touch => Number(touch.clientX)

  onMouseDown = e => {
    e.preventDefault()
    document.addEventListener('mousemove', this.onMouseMove)
    document.addEventListener('mouseup', this.onDragStopped)
    this.onDragStart(WorkTimeline.getMousePoint(e))
  }

  onMouseMove = e => this.onDrag(WorkTimeline.getMousePoint(e))

  onTouchStart = e => {
    e.preventDefault()
    document.addEventListener('touchmove', this.onTouchMove, { passive: false }) // iOS 11 now defaults to passive: true
    document.addEventListener('touchend', this.onDragStopped)
    this.onDragStart(WorkTimeline.getTouchPoint(e.touches[0]))
  }

  onTouchMove = e => {
    this.onDrag(WorkTimeline.getTouchPoint(e.touches[0]))
  }

  onDragStart = x => {
    this.ensureInit(() => {
      this.dragStartPosition = x
      this.dragStartTranslate = this.state.translate
    })
  }

  onDrag = x => {
    if (this.rafTimeout) window.cancelAnimationFrame(this.rafTimeout)

    this.rafTimeout = window.requestAnimationFrame(() => {
      if (x === undefined) return
      const offsetX = x - this.dragStartPosition
      const requestedPosition = this.dragStartTranslate + offsetX

      this.setState({
        translate: this.restrictPosition(requestedPosition),
      })
    })
  }

  onDragStopped = () => {
    this.cleanEvents()
  }

  render() {
    const style = {}
    if (this.state.translate != null) {
      style.transform = `translateX(${this.state.translate}px)`
    }
    return (
      <Wrapper innerRef={this.wrapperRef}>
        <Container
          innerRef={this.timelineRef}
          onWheel={this.onWheel}
          onMouseDown={this.onMouseDown}
          onTouchStart={this.onTouchStart}
          style={style}
        >
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
