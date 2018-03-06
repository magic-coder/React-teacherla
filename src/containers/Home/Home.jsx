import React from 'react'
import {Card , Avatar} from 'antd'
import Carousels from '../../component/Carousel/Carousel'

const {Meta} = Card;

class Home extends React.PureComponent {
  render() {
    return (<div>
      <Carousels/>
      <h1 style={{
          marginTop: 10,
          marginBottom: 0
        }}>今日课程推荐</h1>
      <Card style={{
          width: '100%'
        }} cover={<img alt = "example" src = "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}>
        <Meta avatar={<Avatar src = "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />} title="软件工程" description={<div > <p>上午第三节课</p>
          <p>任课老师：陈维斌</p>
        </div>}/>
      </Card>
    </div>)
  }
}

export default Home
