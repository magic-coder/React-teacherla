import React from 'react'
import { Calendar } from 'antd'
import Carousels from '../../component/Carousel/Carousel'

class Home extends React.PureComponent {
  render() {
    return (
      <div>
        <Carousels/>
        <Calendar fullscreen={false} />
      </div>
    )
  }
}

export default Home
