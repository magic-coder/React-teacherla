import React from 'react'
import { DatePicker, Icon, Card, Avatar } from 'antd';
import moment from 'moment';
import { connect } from 'react-redux';
import { getCookie } from '../../config/util'
import { getDoCourse } from '../../redux/action/course.action';

const dateFormat = 'MM月DD日';
const timeFormat = 'YYYY-MM-DD'
const { Meta } = Card;
const todayTime = moment(new Date()).format(dateFormat);
const user_id = getCookie('user_id');
const access_token = getCookie('token');

@connect(state => state, { getDoCourse, })
class ClassList extends React.Component {
  constructor() {
    super()
    this.state = {
      dateTime: moment(new Date()).format(dateFormat),
      time: moment(new Date()).format(timeFormat),
    }
    this.dateChange = this.dateChange.bind(this)
    this.getChange = this.getChange.bind(this)
  }

  dateChange(v, str) {
    this.setState({
      dateTime: str,
      time: v.format(timeFormat),
    }, this.getChange())
  }

  getChange(){
    this.props.getDoCourse({
      userid: user_id,
      token: access_token,
      datetime: this.state.time,
      teacherid: user_id,
    });
  }

  componentDidMount(){
    this.getChange();
  }

  render() {
    console.log(this.props);
    const disabledDate = function (current) {
      return  current  <= (new Date()).getTime()-1000*60*60*24;
    };
    return (<div>
      <h1>
        <span style={{
            color: '#1890ff'
          }}>{this.state.dateTime === todayTime ? '今天' : this.state.dateTime}</span>您要上的课程
      </h1>
      <DatePicker disabledDate={disabledDate} defaultValue={moment()} format={dateFormat} onChange={this.dateChange}/>
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
      <Card style={{
          marginTop: 20,
          width: '100%'
        }} actions={[<div>课程详情</div> , <div><Icon type="team" /> 听课教师</div>]}>
        <Meta avatar={<Avatar shape="square" icon="user" />} title="软件工程" description={<div >
          <p>上午第三节课</p>
        </div>}/>
      </Card>
    </div>)
  }
}

export default ClassList
