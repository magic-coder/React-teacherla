import React from 'react'
import {Carousel} from 'antd'
import './carousel.css'

class Msg extends React.component {
  render(){
    return(<Carousel autoplay="autoplay">
        <div>
          <img src="http://www.xit.edu.cn/xygh/UploadFiles_5553/200905/2009050723025005.jpg" alt=""/>
        </div>
        <div>
          <img src="http://www.xit.edu.cn/xygh/UploadFiles_5553/200905/2009050708423373.jpg" alt=""/>
        </div>
      </Carousel>)
  }
}

export default Msg
