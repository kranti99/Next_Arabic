import React, { Component } from 'react'
import Typical from 'react-typical'

class AnimatedTyping extends React.Component {
  render () {
    return (
      <Typical
        steps={['engagement', 1000, 'retention', 1000, 'lifetime', 1000, 'value', 1000,  'loyalty', 1000]}
        loop={Infinity}
         wrapper="span"
      />
    )
  }
}
export default AnimatedTyping;