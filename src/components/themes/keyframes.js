import { keyframes } from 'styled-components'

export const pinRotationOnSpin = keyframes`
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(-18deg);
  }
`

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`


export const spinner = keyframes`
  from {
    transform: translate(-50%, -50%) rotateZ(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotateZ(359deg);
  }
`

export const winWheelReveal = keyframes`
  from {
    transform: translate(-50%, 10%);
  }
  to {
    transform: translate(-50%, -50%);
  }
`

export const winWheelHide = keyframes`
  from {
    transform: translate(-50%, -50%);
  }
  to {
    transform: translate(-50%, 10%);
  }
`

export const prizeBadgeReveal = keyframes`
  from {
    transform: translate(-50%, 100%) rotateZ(0);  
  }
  to {
    transform: translate(-50%, 5%) rotateZ(720deg);
  }
`

export const rightCardSlideIn = keyframes`
  from {
    opacity: 0;
    transform: translate(170%, -50%) rotate(480deg);
  }
  to {
    opacity: 1;
    transform: translate(0, 0) rotate(0deg);
  }
`

export const leftCardSlideIn = keyframes`
  from {
    opacity: 0;
    transform: translate(-170%, -50%) rotate(-480deg);
  }
  to {
    opacity: 1;
    transform: translate(0, 0) rotate(0deg);
  }
`

export const panelSlideUp = keyframes`
  from {
    transform: translateY(120%);
  }
  to {
    transform: translateY(0);
  }
`

export const notificationTooltipShow = keyframes`
  from {
    opacity: 0;
    transform: translate(12px, -100%) rotateZ(90deg);  
  }
  to {
    opacity: 1;
    transform: translate(0, -50%) rotateZ(0);
  }
`

export const badgeAppear = keyframes`
  from {
    transform: translate(-50%, -50%) rotateZ(720deg) scale(0.1);
    top: 100%;
  }
  to {
    transform: translate(-50%, -50%) rotateZ(0) scale(1);
    top: 50%;
  }
`

export const sideMenuReveal = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`
