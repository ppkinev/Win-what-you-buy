import React from 'react'
import { storiesOf } from '@storybook/react'
import WinWheel from '.'

const onRef = () => {}

/**
 *
 class Parent extends React.Component {
  onClick = () => {
    this.child.method() // do stuff
  }
  render() {
    return (
      <div>
        <Child onRef={ref => (this.child = ref)} />
        <button onClick={this.onClick}>Child.method()</button>
      </div>
    );
  }
 }
 */

const items = [
  { text: 'Segment 1', image: './icon.png', id: '0' },
  { text: 'Segment 2', image: './icon.png', id: '1' },
  { text: 'Segment 3', image: './icon.png', id: '2' },
  { text: 'Segment 4', image: './icon.png', id: '3' },
  { text: 'Segment 5', image: './icon.png', id: '4' },
  { text: 'Segment 6', image: './icon.png', id: '5' },
]

storiesOf('Winner Wheel', module)
  .add('default', () => (
    <WinWheel winWheelItems={items} onRef={onRef} onWheelSpinStart={onRef} />
  ))
