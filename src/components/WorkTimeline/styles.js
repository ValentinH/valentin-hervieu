import styled from 'react-emotion'

export const Wrapper = styled('div')({
  width: '100vw',
  position: 'relative',
  left: '50%',
  right: '50%',
  marginLeft: '-50vw',
  marginRight: '-50vw',
  overflow: 'auto',
  padding: '0 200px',
})

const containerHeight = 428 /* needs to be adjusted if heights changes */
const arrowWidth = 150

export const Container = styled('div')({
  position: 'relative',
  display: 'inline-flex',
  marginTop: 40,
  background: '#fff',
  height: containerHeight,
  ':before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: -arrowWidth,
    width: arrowWidth,
    height: containerHeight,
    background: 'white',
  },
  ':after': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: -arrowWidth,
    width: 0,
    height: 0,
    borderLeft: `${arrowWidth}px solid white`,
    borderBottom: `${containerHeight / 2}px solid transparent`,
    borderTop: `${containerHeight / 2}px solid transparent`,
  },
})

export const YearContainer = styled('div')(({ current }) => ({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  top: -24,
  paddingTop: 24 + 16,
  paddingBottom: 16,
  marginRight: 16,
  marginBottom: -25,
  borderLeftWidth: 5,
  borderLeftStyle: 'solid',
  borderLeftColor: current
    ? 'rgba(250, 75, 42, 0.4)'
    : 'rgba(0, 114, 188, 0.4)',
  ':before': {
    content: '""',
    position: 'absolute',
    left: -12,
    top: '50%',
    marginTop: -10,
    width: 20,
    height: 20,
    background: '#38a9dc',
    borderRadius: '100%',
  },
  ':after': {
    content: '""',
    position: 'absolute',
    left: 8,
    top: '50%',
    marginTop: -1,
    width: 16,
    height: 2,
    background: '#b8dbec',
  },
}))

export const YearLabel = styled('div')(({ current }) => ({
  position: 'absolute',
  top: 0,
  color: current ? '#fa4b2a' : '#0072bc',
  fontWeight: 'bold',
  marginLeft: 8,
}))

export const YearContent = styled('div')({
  display: 'flex',
  marginLeft: 16,
})

export const ExperienceContainer = styled('div')({
  width: 280,
  padding: 16,
  border: '1px solid #ddd',
  boxShadow: '1px 1px 4px rgba(0, 0, 0, 0.2)',
  borderRadius: 3,
  margin: '0 8px',
})
export const ExpDate = styled('div')({})
export const ExpPlace = styled('div')({})
export const ExpTitle = styled('div')({})
export const ExpContent = styled('div')({})
