import React from 'react'
import ScrollGradientText from '../components/ScrollGradientText'

const Text = () => {
  return (
    <div>
      
     
      <ScrollGradientText
        texts={['big ideas, smart strategies`, `endless creativity to ', 'supercharge your brand!', 'right?']}
        className="items-start"
      />
      
    </div>
  )
}

export default Text

