import React from 'react'
import SwipperData from './Swipper/SwipperData'
import ScrollVelocity from './ScrollVelocity'
import Text from './Text'
import ScrollGradientText from '../components/ScrollGradientText'

const WhyUsPage = () => {
  return (
    <div>
      <div className="w-full h-[130vh] flec items-center justify-between flex-col">
        <div className="w-full h-[30vh] bg-pink-700">
        <h2>root</h2>
         
        </div>
        <div className="w-full h-[90vh] flex items-center justify-center flex-col bg-yellow-600">
            
          <div className="w-[75%] h-full"><SwipperData /></div>
        </div>
      </div>
    </div>
  )
}

export default WhyUsPage
