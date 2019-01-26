import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import colors from '../../const/colors.json'

const containerHeight = 360 /* needs to be adjusted if heights changes */
const arrowWidth = 150
const sidePadding = 50

export const Wrapper = styled('div')({
  width: '100vw',
  position: 'relative',
  left: '50%',
  right: '50%',
  marginLeft: '-50vw',
  marginRight: '-50vw',
  overflowX: 'auto',
  overflowY: 'hidden',
  marginBottom: 24,
  '-ms-overflow-style': '-ms-autohiding-scrollbar',
  '::-webkit-scrollbar': {
    height: '0 !important',
  },
})

const slideIn = keyframes({
  '0%': {
    transform: `translateX(-200%)`,
  },
  '100%': {
    transform: `translateX(0%)`,
  },
})

export const Container = styled('div')({
  position: 'relative',
  display: 'inline-flex',
  margin: `0 ${arrowWidth + sidePadding}px`,
  marginTop: 24,
  background: '#fff',
  height: containerHeight,
  animation: `${slideIn} 1s ease-out`,
  cursor: 'grab',
  ':active': {
    cursor: 'grabing',
  },
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

const appear = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateX(-20%) scaleX(0)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateX(0px) scaleX(1)',
  },
})

const yearAnimations = Array(10)
  .fill(0)
  .reduce(
    (res, _, i) => ({
      ...res,
      [`:nth-of-type(${i + 1})`]: {
        animationDelay: `${1000 + i * 333}ms`,
      },
    }),
    {}
  )

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
  opacity: 0,
  transformOrigin: 'left center',
  animation: `${appear} 500ms`,
  animationFillMode: 'forwards',
  ...yearAnimations,
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
  color: current ? colors.secondaryColor : colors.primaryColor,
  fontWeight: 'bold',
  marginLeft: 8,
}))

export const YearContent = styled('div')({
  display: 'flex',
  marginLeft: 16,
})

export const ExperienceContainer = styled('div')(({ current }) => ({
  width: 280,
  padding: 16,
  border: '1px solid #ddd',
  boxShadow: '1px 1px 4px rgba(0, 0, 0, 0.2)',
  borderRadius: 3,
  margin: '0 8px',
  background: current ? '#FEB' : 'none',
}))
export const ExpDate = styled('div')({
  fontSize: 12,
  fontStyle: 'italic',
  marginBottom: 8,
  fontWeight: 500,
})
export const ExpPlace = styled('div')({
  color: '#666',
  fontSize: 14,
  fontWeight: 600,
  marginBottom: 8,
})
export const ExpTitle = styled('div')({
  fontSize: 16,
  fontWeight: '600',
  color: '#444',
})
export const ExpContent = styled('div')({
  lineHeight: 1.5,
  fontSize: 14,
  textAlign: 'justify',
})
