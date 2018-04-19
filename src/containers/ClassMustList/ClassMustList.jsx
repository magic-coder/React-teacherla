import React from 'react'
import { Card, Avatar, Divider } from 'antd';
import { connect } from 'react-redux'
const { Meta } = Card;

@connect(state => state.user,)
class ClassMustList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      must_num: 5,
      all_num: 10,
    }
  }

  render() {
    console.log(this.props);
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
      {this.props.teachList !== []
       ?this.props.teachList.forEach(element => {
          return(
            <Card style={{
              marginTop: 20,
              width: '100%'
            }}>
              <Meta avatar={<Avatar shape="square" icon="user" />} title={element.teacher_name} />
            </Card>
          )
        })
        :null
      }
    </div>)
  }
}

export default ClassMustList
