import React from 'react'
import QRcodeCom from '../QRcodeCom/QRcodeCom'

class ClassOnStep extends React.Component {
  render(){
    return (<div>
       <h4>请任课教师扫描二维码完成听课</h4>
       <QRcodeCom/>
      </div>)
  }
}

export default ClassOnStep
