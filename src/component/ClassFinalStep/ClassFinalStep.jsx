import React from 'react';
import { Slider, InputNumber, Row, Col, Tabs } from 'antd';
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
            <Row>
             <Col span={12}>
               <Slider min={1} max={10} onChange={this.onChange} value={this.state.inputValue} />
             </Col>
             <Col span={4}>
               <InputNumber
                 min={1}
                 max={20}
                 style={{ marginLeft: 16 }}
                 value={this.state.inputValue}
                 onChange={this.onChange}
               />
             </Col>
           </Row>
         </TabPane>
         <TabPane tab="学生情况" key="table-2">
         </TabPane>
       </Tabs>
      </div>)
  }
}

export default ClassFinalStep
