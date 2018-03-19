import React from 'react'
import { Steps, Button, message } from 'antd';
import './classstep.css'
const Step = Steps.Step;

const steps = [{
  title: '课程准备',
  content: 'First-content',
}, {
  title: '听课阶段',
  content: 'Second-content',
}, {
  title: '课程评价',
  content: 'Last-content',
}];

class ClassStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
    this.next = this.next.bind(this)
    this.prev = this.prev.bind(this)
  }
  next() {
    const current = this.state.current + 1;
    this.setState({current});
  }
  prev() {
    const current = this.state.current - 1;
    this.setState({current});
  }
  render() {
    const { current } = this.state;
    return (<div>
      <Steps size="small" current={current}>
        {steps.map(item => <Step key={item.title} title={item.title}/>)}
      </Steps>
      <div className="steps-content">{steps[this.state.current].content}</div>
      <div className="steps-action">
        {this.state.current < steps.length - 1 && <Button type="primary" onClick={() => this.next()}>下一步</Button>}
        {this.state.current === steps.length - 1 && <Button type="primary" onClick={() => message.success('完成听课!')}> 完成</Button>}
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
