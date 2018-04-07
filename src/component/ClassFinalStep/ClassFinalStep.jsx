import React from 'react';
import { Slider, InputNumber, Row, Col, Tabs, Rate } from 'antd';
const TabPane = Tabs.TabPane;

class ClassFinalStep extends React.Component {
  state = {
    inputValue: 1,
  }
  onChange = (value) => {
    this.setState({
      inputValue: value,
    });
  }
  render(){
    return (<div>
       <h3>教学评价质量表</h3>
       <Tabs>
         <TabPane tab="教师情况" key="table-1">
            <p>备课充分，有关教学资料准备符合要求和规范</p>
            <Row>
             <Col span={2} />
             <Col span={12}>
               <Slider min={1} max={10} onChange={this.onChange} value={this.state.inputValue} />
             </Col>
             <Col span={2}>
               <InputNumber
                 min={1}
                 max={20}
                 style={{ marginLeft: 16 }}
                 value={this.state.inputValue}
                 onChange={this.onChange}
               />
             </Col>
           </Row>
           <p>精神饱满，讲课有激情，有感染力</p>
           <p>板书规范，语言准确、表达生动</p>
         </TabPane>
         <TabPane tab="学生情况" key="table-2">
            <p>遵守制度、按时到课、出勤率高</p>
            <Rate count={4} defaultValue={1} />
            <p>遵守课堂纪律，课堂秩序良好</p>
            <Rate count={4} defaultValue={1} />
            <p>听课精力集中，能积极思考，有较强的学习兴趣</p>
            <Rate count={4} defaultValue={1} />
         </TabPane>
       </Tabs>
      </div>)
  }
}

export default ClassFinalStep
