const progressBarStyles = progressBarId => (`
/*
 * react-circular-progressbar styles
 *
 * All of the styles in this file are optional and configurable!
 */

.CircularProgressbar {
  /*
   * This fixes an issue where the CircularProgressbar svg has
   * 0 width inside a "display: flex" container, and thus not visible.
   *
   * If you're not using "display: flex", you can remove this style.
   */
  width: 100%;
}

.CircularProgressbar .CircularProgressbar-path {
  stroke: url(#${progressBarId});
  stroke-linecap: round;
  transform: rotate(-130deg);
  transform-origin: center center;
  transition: stroke-dashoffset 0.5s ease 0s;
}

.CircularProgressbar .CircularProgressbar-trail {
  stroke: #d6d6d6;
  stroke-linecap: round;
  transform: rotate(-130deg);
  transform-origin: center center;
}

.CircularProgressbar .CircularProgressbar-text {
  fill: #3e98c7;
  font-size: 20px;
  dominant-baseline: middle;
  text-anchor: middle;
}

.CircularProgressbar .CircularProgressbar-background {
  fill: #d6d6d6;
}

.CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-background {
  fill: #3e98c7;
}

.CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-text {
  fill: #fff;
}

.CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-path {
  stroke: #fff;
}

.CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-trail {
  stroke: transparent;
}
`)
export default progressBarStyles
