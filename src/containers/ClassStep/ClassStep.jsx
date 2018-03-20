import React from 'react'
import {Steps, Button, message} from 'antd';

import ClassReadyStep from '../../component/ClassReadyStep/ClassReadyStep'

import './classstep.css'
const Step = Steps.Step;

const steps = [
  {
    title: '课程准备'
  }, {
    title: '听课阶段'
  }, {
    title: '课程评价'
  }
];

class ClassStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    };
    this.next = this.next.bind(this)
    this.prev = this.prev.bind(this)
    this.content = this.content.bind(this)
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
        return (<ClassReadyStep/>)
      case 1:
        return (<div>1</div>)
      case 2:
        return (<ClassReadyStep/>)
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
          this.state.current === steps.length - 1 && <Button type="primary" onClick={() => message.success('完成听课!')}>
              完成</Button>
        }
        {
          this.state.current > 0 && <Button style={{
                marginLeft: 8
              }} onClick={() => this.prev()}>
              上一步
            </Button>
        }
      </div>
    </div>)
  }
}

export default ClassStep
