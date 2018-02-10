import React from 'react'
import { Calendar } from 'antd'

class ClassList extends React.PureComponent {
  render() {
    return (<div>
        <Calendar fullscreen={false} />
      </div>)
  }
}

export default ClassList
