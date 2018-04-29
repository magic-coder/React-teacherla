import React from 'react';
import { Divider, Card} from 'antd';
import { connect } from 'react-redux'
import { getCookie } from '../../config/util'
import { getCourseDetail } from '../../redux/action/course.action';

const gridStyle_1 = {
  width: '35%',
  height: '100%',
  textAlign: 'center',
};

const gridStyle_2 = {
  width: '65%',
  textAlign: 'center',
};

@connect(state => state, { getCourseDetail, })
class ClassStatus extends React.PureComponent {
  componentWillMount(){
    this.props.getCourseDetail({
      userid: getCookie('user_id'),
      token: getCookie('token'),
      ...this.props.match.params,
    })  
  }
  render() {
    const courseDetail = this.props.course.courseDetail;
    return (<div>
      <Divider >课程状态</Divider>
      <Card>
        <Card.Grid style={gridStyle_1}>任职教师</Card.Grid>
        <Card.Grid style={gridStyle_2}>{courseDetail.teacher_name}</Card.Grid>
        <Card.Grid style={gridStyle_1}>任教班级</Card.Grid>
        <Card.Grid style={gridStyle_2}>{courseDetail.class_name}</Card.Grid>
        <Card.Grid style={gridStyle_1}>班级年级</Card.Grid>
        <Card.Grid style={gridStyle_2}>{courseDetail.grade}级</Card.Grid>
        <Card.Grid style={gridStyle_1}> 时 间 </Card.Grid>
        <Card.Grid style={gridStyle_2}>{courseDetail.datetime}</Card.Grid>
        <Card.Grid style={gridStyle_1}> 节 次 </Card.Grid>
        <Card.Grid style={gridStyle_2}>{courseDetail.section}</Card.Grid>
        <Card.Grid style={gridStyle_1}> 教 室 </Card.Grid>
        <Card.Grid style={gridStyle_2}>{courseDetail.place}</Card.Grid>
        <Card.Grid style={gridStyle_1}>课程名称</Card.Grid>
        <Card.Grid style={gridStyle_2}>{courseDetail.course_name}</Card.Grid>
        <Card.Grid style={gridStyle_1}>起止时间</Card.Grid>
        <Card.Grid style={gridStyle_2}>第{courseDetail.startweek}周-第{courseDetail.endweek}周</Card.Grid>
      </Card>
    </div>)
  }
}

export default ClassStatus
