import React from 'react'
import { Card , Avatar, Icon} from 'antd'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { getPlan } from '../../redux/action/plan.action'
import Carousels from '../../component/Carousel/Carousel'
import { getCookie } from '../../config/util'


const {Meta} = Card;

@connect(state => state, { getPlan })
class Home extends React.PureComponent {
  componentDidMount() {
    const user_id = getCookie('user_id');
    const access_token = getCookie('token');
    this.props.getPlan({ userid: user_id, token: access_token });
  }
  render() {
    console.log(this.props)
    return (<div>
      <Carousels/>
      <h1 style={{
          marginTop: 10,
          marginBottom: 0,
          color:'red'
        }}>今日听课提醒</h1>
      <h1 style={{
          marginTop: 10,
          marginBottom: 0
        }}>听课排表</h1>
      {this.props.plan.plan.length !== 0 
       ? this.props.plan.plan.map((element) => {
         if (element.plan_status === 0) {
           return (
             <Card 
                key={element.attend_id} 
                style={{
                  width: '100%',
                  marginTop: 10,
                }}
                actions={[<div>课程详情</div>, <div><Link to='/classstatus'><Icon type="file-pdf" /> 课程资料</Link></div>]}
             >
               <Meta avatar={<Avatar src={element.avatar} />} title={element.course_name} description={<div>
                 <p>时间：{element.datetime} 第{element.weeks}周 {element.which_day} {element.section}节</p>
                 <p>地点：{element.place}</p>
                 <p>任课老师：{element.teacher_name}</p>
               </div>} />
             </Card>
           )
         }
         return null
       })
       : <div>无已选择课程</div>
      }
    </div>)
  }
}

export default Home
