import React from 'react'
import { Item, Date, Diploma } from './styles'

const Education = () => (
  <div>
    <h2>Education</h2>
    <Item>
      <Date>2011 - 2014</Date>
      <Diploma>
        Diplôme d’ingénieur UTC (Master’s Degree in Computer Engineering)
      </Diploma>
      <span>Université de Technologie de Compiègne - France</span>
    </Item>
    <Item>
      <Date>2009 - 2011</Date>
      <Diploma>
        DUT Informatique (Two-year technical degree in Computer Sciences)
      </Diploma>
      <span>Institut Universitaire de Technologie – Ifs, France</span>
    </Item>
  </div>
)

export default Education
