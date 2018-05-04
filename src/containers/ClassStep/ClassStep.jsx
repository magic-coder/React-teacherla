import React from 'react'
import { Steps, Button } from 'antd';
import { getCookie } from '../../config/util';
import axios from 'axios';
import { connect } from 'react-redux';
import { API, URL } from '../../redux/contants/content';

import ClassReadyStep from '../../component/ClassReadyStep/ClassReadyStep';
import ClassOnStep from '../../component/ClassOnStep/ClassOnStep';
import ClassFinalStep from '../../component/ClassFinalStep/ClassFinalStep';
import ClassNote from '../../component/ClassNote/ClassNote';

import { getCourseDetail, makemark } from  '../../redux/action/course.action';

import './classstep.css'
const Step = Steps.Step;

const steps = [
  {
    title: '课程准备'
  }, {
    title: '听课记录'
  }, {
    title: '课程评价'
  }, {
    title: '听课打卡'
  }
];

@connect(state => state, { getCourseDetail, makemark })
class ClassStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      token: getCookie('token'),
      userid: getCookie('user_id'),
      chapter: '',
      requirenum: '',
      actualnum: '',
      numoflate: '',
      numofearly: '',
      lessoncontent: '',
      remarkoflesson: '',
      suggestion: '',
      needtime: 31,
      val_1: 0,
      val_2: 0,
      val_3: 0,
      val_4: 0,
      val_5: 0,
      val_6: 0,
      val_7: 0,
      val_8: 0,
      val_9: 0,
      val_10: 0,
      ttotal: 0,
      s1: 1,
      s2: 1,
      s3: 1,
      stotal: 1,
    };
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.content = this.content.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount(){
    this.props.getCourseDetail({
      userid: this.state.userid,
      token: this.state.token,
      ...this.props.match.params,
    })
  }

  handleChange(key,val){
      this.setState({
        [key]:val
      })
  }

  next() {
    const current = this.state.current + 1;
    this.setState({current});
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({current});
  }

  content() {
    switch (this.state.current) {
      case 0:
        return (<ClassReadyStep store={this.state} handleChange={this.handleChange} />)
      case 1:
        return (<ClassNote store={this.state} handleChange={this.handleChange} />)
      case 2:
        return (<ClassFinalStep store={this.state} handleChange={this.handleChange} />)
      case 3:
        return (<ClassOnStep store={this.props.course.courseDetail}/>)
      default:
        return null
    }
  }

  render() {
    const {current} = this.state;
    axios.post(URL + API.COURSE.GETCOURSEDETAIL, {
      userid:this.state.userid,
      planid:window.location.hash.substring(1),
      token:this.state.token
    })
    return (<div>
      <Steps size="small" current={current}>
        {steps.map(item => <Step key={item.title} title={item.title}/>)}
      </Steps>
      <div className="steps-content">
        {
          this.content()
        }
      </div>
      <div className="steps-action">
        {this.state.current < steps.length - 1 && <Button type="primary" onClick={() => this.next()}>下一步</Button>}
        {
          this.state.current === steps.length - 1 && <Button type="primary" onClick={() => {
            makemark({
              token: this.state.token,
              userid: this.state.userid,
              planid: window.location.hash.substring(1),
              chapter: this.state.chapter,
              requirenum: this.state.requirenum,
              actualnum: this.state.actualnum,
              numoflate: this.state.numflate,
              numofearly: this.state.numofearly,
              lessoncontent: this.state.lessoncontent,
              remarkoflesson: this.state.remarkoflesson,
              suggestion: this.state.suggestion,
              date: this.props.course.courseDetail.datetime,
              classname: this.props.course.courseDetail.class_name,
              section: this.props.course.courseDetail.section,
              place: this.props.course.courseDetail.place,
              coursename: this.props.course.courseDetail.course_name,
              needtime: this.state.needtime,
              t1: this.state.val_1,
              t2: this.state.val_2,
              t3: this.state.val_3,
              t4: this.state.val_4,
              t5: this.state.val_5,
              t6: this.state.val_6,
              t7: this.state.val_7,
              t8: this.state.val_8,
              t9: this.state.val_9,
              t10: this.state.val_10,
              ttotal: this.state.val_ttotal,
              s1: this.state.s1,
              s2: this.state.s2,
              s3: this.state.s3,
              stotal: this.state.stotal,
            })
          }}>完成</Button>
        }
        {
          this.state.current > 0 && <Button
            style={{
              marginLeft: 8
            }}
            onClick={() => this.prev()}>
            上一步
          </Button>
        }
      </div>
    </div>)
  }
}

export default ClassStep
