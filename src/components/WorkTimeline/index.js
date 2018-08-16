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

const WorkTimeline = () => (
  <Wrapper>
    <Container>
      {srcData.map(yearData => (
        <Year key={yearData.year} {...yearData} />
      ))}
    </Container>
  </Wrapper>
)

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

const Experience = ({ date, company, companyUrl, place, title, content }) => (
  <ExperienceContainer>
    <ExpDate>{date}</ExpDate>
    <ExternalLink href={companyUrl}>{company}</ExternalLink>
    <ExpPlace>{place}</ExpPlace>
    <ExpTitle>{title}</ExpTitle>
    <ExpContent>{content}</ExpContent>
  </ExperienceContainer>
)

export default WorkTimeline
