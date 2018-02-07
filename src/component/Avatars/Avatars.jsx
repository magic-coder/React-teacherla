import React from 'react'
import { Avatar } from 'antd'

class Avatars extends React.PureComponent {
  render(){
    return(
        <Avatar style={{right:'0px'}} shape="square" icon="user" />
    )
  }
}

export default Avatars
