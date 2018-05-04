import React from 'react'
import {Steps, Button, message} from 'antd';
import { getCookie } from '../../config/util';

import ClassReadyStep from '../../component/ClassReadyStep/ClassReadyStep'
import ClassOnStep from '../../component/ClassOnStep/ClassOnStep'
import ClassFinalStep from '../../component/ClassFinalStep/ClassFinalStep'
import ClassNote from '../../component/ClassNote/ClassNote'

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
      s1: 0,
      s2: 0,
      s3: 0,
      stotal: 0,
    };
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.content = this.content.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
        return (<ClassOnStep />)
      default:
        return null
    }
  }
  render() {
    const {current} = this.state;
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
            message.success('完成听课!')
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
