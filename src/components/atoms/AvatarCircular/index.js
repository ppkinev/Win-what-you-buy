import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const getHolderSize = function getHolderSize(props) {
  if (props.big) return 50
  if (props.forActivity) return 35
  if (props.small) return 22
  if (props.mini) return 12
  return 30
}
const ImageHolder = styled.div`
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  width: ${props => getHolderSize(props)}px;
  height: ${props => getHolderSize(props)}px;
  flex-shrink: 0;
  ${props => props.shifted && `margin-left: -${getHolderSize(props) / 3}px`}
`

const AvatarCircular = ({ className, image, big, small, mini, shifted, forActivity, onClick }) => {
  return (
    <ImageHolder className={className} big={big} small={small} mini={mini} forActivity={forActivity} shifted={shifted} onClick={onClick}>
      <Image src={image} />
    </ImageHolder>
  )
}

AvatarCircular.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  big: PropTypes.bool,
  forActivity: PropTypes.bool,
  small: PropTypes.bool,
  mini: PropTypes.bool,
  shifted: PropTypes.bool,
  onClick: PropTypes.func,
}

AvatarCircular.defaultProps = {
  image: 'https://static.rewarded.club/content/main/assets/images/default-profile.png',
}

export default AvatarCircular
