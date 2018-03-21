import React from 'react'
import { Icon, Card, Avatar } from 'antd';
const { Meta } = Card;

class ClassMustList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      test:''
    }
  }
  render(){
    return(
      <div>
      <h2>必听课列表</h2>
      <Card style={{
          marginTop: 20,
          width: '100%'
        }} actions={[<div>课程详情</div> , <div><Icon type="team" /> 听课教师</div>]}>
        <Meta avatar={<Avatar shape="square" icon="user" />} title="软件工程" description={<div >
          <p>上午第三节课</p>
        </div>}/>
      </Card>
      <Card style={{
          marginTop: 20,
          width: '100%'
        }} actions={[<div>课程详情</div> , <div><Icon type="team" /> 听课教师</div>]}>
        <Meta avatar={<Avatar shape="square" icon="user" />} title="软件工程" description={<div >
          <p>上午第三节课</p>
        </div>}/>
      </Card>
      </div>
    )
  }
}

export default ClassMustList
