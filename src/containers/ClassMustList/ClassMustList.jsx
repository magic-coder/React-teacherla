import React from 'react'
import {Card, Avatar, Divider} from 'antd';
const {Meta} = Card;

class ClassMustList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      must_num: 5,
      all_num: 10
    }
  }
  render() {
    return (<div>
      <h2>计划目标剩余
      <span style={{
          color: '#1890ff'
        }}> {this.state.all_num} </span>
      节 | 必听课剩余
        <span style={{
            color: '#1890ff'
          }}> {this.state.must_num} </span>
        节</h2>
      <Divider>必听课程剩余列表</Divider>
      <Card style={{
          marginTop: 20,
          width: '100%'
        }}>
        <Meta avatar={<Avatar shape = "square" icon = "user" />} title="软件工程" description={<div > <p>陈维斌</p>
        </div>}/>
      </Card>
      <Card style={{
          marginTop: 20,
          width: '100%'
        }}>
        <Meta avatar={<Avatar shape = "square" icon = "user" />} title="软件工程" description={<div > <p>陈维斌</p>
        </div>}/>
      </Card>
      <Card style={{
          marginTop: 20,
          width: '100%'
        }}>
        <Meta avatar={<Avatar shape = "square" icon = "user" />} title="软件工程" description={<div > <p>陈维斌</p>
        </div>}/>
      </Card>
      <Card style={{
          marginTop: 20,
          width: '100%'
        }}>
        <Meta avatar={<Avatar shape = "square" icon = "user" />} title="软件工程" description={<div > <p>陈维斌</p>
        </div>}/>
      </Card>
      <Card style={{
          marginTop: 20,
          width: '100%'
        }}>
        <Meta avatar={<Avatar shape = "square" icon = "user" />} title="软件工程" description={<div > <p>陈维斌</p>
        </div>}/>
      </Card>
    </div>)
  }
}

export default ClassMustList
