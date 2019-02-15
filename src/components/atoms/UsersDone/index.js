import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette, font, size } from 'styled-theme'

const SIZE = 20
const LARGE_SIZE = 36

const Holder = styled.div`
  display: inline-flex;
  flex-direction: ${props => props.column ? 'column' : 'row'};
  align-items: center;
  justify-content: center;
  min-height: ${props => props.column ? 44 : 24}px;
`

Holder.propTypes = {
  column: PropTypes.bool,
}

const getRightMargin = (users, large) => {
  if (large) {
    if (users === 2) return 18
    if (users === 3) return 36
  }
  if (users === 2) return 10
  if (users === 3) return 20
  return 0
}

const ImagesHolder = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  margin-right: -${props => getRightMargin(props.usersAmount, props.large)}px;
`

ImagesHolder.propTypes = {
  usersAmount: PropTypes.number,
  large: PropTypes.bool,
}

const Text = styled.p`
  font-family: ${font('main')};
  color: ${palette('text', 0)};
  font-size: ${size('textParagraph')};
  margin: 5px 0 5px 10px;
`

const AvatarHolder = styled.div`
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  width: ${props => props.large ? LARGE_SIZE : SIZE}px;
  height: ${props => props.large ? LARGE_SIZE : SIZE}px;
  flex-shrink: 0;
  box-shadow: 1px 1px 4px rgba(0,0,0,0.3);

  &:nth-of-type(2) {
    transform: translateX(-50%);
  }
  
  &:nth-of-type(3) {
    transform: translateX(-100%);
  }
`

AvatarHolder.propTypes = {
  large: PropTypes.bool,
}

const Avatar = styled.img`
  position: absolute;
  width: 100%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const UsersDone = ({ users = [], totalAmount, column, large }) => {
  if (users.length === 0) return (<Holder column={column} />)

  const text = totalAmount === 1 ? 'user has' : 'users have'
  return (
    <Holder column={column}>
      <ImagesHolder usersAmount={users.length} large={large}>
        {users.map(user => (
          <AvatarHolder key={user.id} large={large}>
            <Avatar src={user.image} />
          </AvatarHolder>
        ))}
      </ImagesHolder>
      <Text>{totalAmount} {text} done this</Text>
    </Holder>
  )
}

UsersDone.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
  totalAmount: PropTypes.number,
  column: PropTypes.bool,
  large: PropTypes.bool,
}

export default UsersDone
