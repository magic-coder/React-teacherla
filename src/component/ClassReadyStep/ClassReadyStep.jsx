import React from 'react'
import { Input } from 'antd';


class ClassReadyStep extends React.Component {
  render(){
    return (<div>
       <h4>请填写表单</h4>
       <div style={{ marginBottom: 16 }}>
         <Input addonBefore="章节选择" type="number" onChange={(v)=>{
           this.props.handleChange('chapter',v.target.value)
         }} />
       </div>
       <div style={{ marginBottom: 16 }}>
         <Input addonBefore="应到人数" type="number" onChange={(v)=>{
           this.props.handleChange('requirenum',v.target.value)
         }} />
       </div>
       <div style={{ marginBottom: 16 }}>
         <Input addonBefore="实到人数" type="number" onChange={(v)=>{
           this.props.handleChange('actualnum',v.target.value)
         }}/>
       </div>
       <div style={{ marginBottom: 16 }}>
         <Input addonBefore="迟到人数" type="number" onChange={(v)=>{
           this.props.handleChange('numoflate',v.target.value)
         }}/>
       </div>
       <div style={{ marginBottom: 16 }}>
         <Input addonBefore="早退人数" type="number" onChange={(v)=>{
           this.props.handleChange('numofearly',v.target.value)
         }}/>
       </div>
      </div>)
  }
}

export default ClassReadyStep
