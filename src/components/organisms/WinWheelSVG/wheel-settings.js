import theme from '../../themes/default'
import { audioPath } from '../../../config'

const WIDTH = 720
const HEIGHT = 800

const getImageSize = segAmount => Math.min(((2 * Math.PI * (WIDTH / 2)) / segAmount) * 0.4, 160)

const getSegmentsArray = ({ segments, mainPrizeFrame, mainPrizeFrameOnTop, reducePrizeImageBy }) => segments.map(segment => {
  const text = segment.text.replace(/\s/g, '^')
  const { id, image } = segment
  return segment.mainPrize
    ? {
      type: 'image',
      value: segment.image,
      image,
      text,
      title: segment.text,
      id,
      wheelImageSize: getImageSize(segments.length),
      mainPrize: {
        frameImage: mainPrizeFrame,
        isFrameOverlay: mainPrizeFrameOnTop,
        reduceImageBy: reducePrizeImageBy
        || ((getImageSize(segments.length) / 2) + 10),
      },
    }
    : {
      type: 'image',
      value: segment.image,
      image,
      text,
      title: segment.text,
      id,
    }
})

const wheelSettings = {
  colorArray: ['transparent'],

  segmentValuesArray: [],

  svgWidth: WIDTH,
  svgHeight: HEIGHT,
  wheelStrokeColor: theme.palette.main[0],
  wheelStrokeWidth: 22,
  wheelSize: WIDTH - 20,
  wheelTextOffsetY: 30,
  wheelTextColor: theme.palette.main[0],
  wheelTextSize: '1.4em',
  wheelImageOffsetY: 30,
  wheelImageSize: 120,
  centerCircleSize: 0,
  centerCircleStrokeColor: theme.palette.main[0],
  centerCircleStrokeWidth: 12,
  centerCircleFillColor: '#EDEDED',
  segmentStrokeColor: theme.palette.main[0],
  segmentStrokeWidth: 9,
  centerX: WIDTH / 2,
  centerY: HEIGHT / 2,
  hasShadows: false,
  numSpins: 4,
  spinDestinationArray: [],
  minSpinDuration: 4,
  hasSound: true,
  clickToSpin: true,
  spinDirection: 'ccw',

  spinSound: `${audioPath}/tick.mp3`,
}

const getSpinWheelSettings = (wheelProps) => {
  const settings = wheelSettings
  settings.segmentValuesArray = getSegmentsArray(wheelProps)
  settings.wheelImageSize = getImageSize(wheelProps.segments.length) - 30

  return settings
}

export default getSpinWheelSettings
