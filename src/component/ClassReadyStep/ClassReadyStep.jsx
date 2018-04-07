import React from 'react'
import { Input } from 'antd';


class ClassReadyStep extends React.Component {
  render(){
    return (<div>
       <h4>请填写表单</h4>
       <div style={{ marginBottom: 16 }}>
         <Input addonBefore="应到人数" disabled />
       </div>
       <div style={{ marginBottom: 16 }}>
         <Input addonBefore="实到人数" type="number" />
       </div>
       <div style={{ marginBottom: 16 }}>
         <Input addonBefore="迟到人数" type="number" />
       </div>
       <div style={{ marginBottom: 16 }}>
         <Input addonBefore="早退人数" type="number" />
       </div>
      </div>)
  }
}

export default ClassReadyStep
