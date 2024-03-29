import React from 'react';
import { Input, Tabs } from 'antd';
const TabPane = Tabs.TabPane;
const { TextArea } = Input;

class ClassNote extends React.Component {
  render(){
    return(<div>
        <h4>听课笔记本</h4>
        <Tabs>
          <TabPane tab="讲课内容" key="1">
            <TextArea placeholder="讲课内容" autosize={{ minRows: 4, maxRows: 12 }} onChange={(v)=>{
              this.props.handleChange('lessoncontent',v.target.value)
            }}/>
          </TabPane>
          <TabPane tab="授课评价" key="2">
            <TextArea placeholder="授课及课堂情况评价" autosize={{ minRows: 4, maxRows: 12 }} onChange={(v)=>{
              this.props.handleChange('remarkoflesson',v.target.value)
            }}/>
          </TabPane>
          <TabPane tab="意见建议" key="3">
            <TextArea placeholder="意见建议" autosize={{ minRows: 4, maxRows: 12 }} onChange={(v)=>{
              this.props.handleChange('suggestion',v.target.value)
            }}/>
          </TabPane>
        </Tabs>
      </div>)
  }
}

export default ClassNote
