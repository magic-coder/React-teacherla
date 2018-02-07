import React from 'react'
import {Carousel} from 'antd'
import './carousel.css'

class Carousels extends React.PureComponent {
  render() {
    return (<Carousel autoplay="autoplay">
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
    </Carousel>)
  }
}

export default Carousels
