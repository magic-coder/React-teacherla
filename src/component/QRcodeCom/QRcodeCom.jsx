import React from 'react'
import QRCode from 'qrcode.react'

class QRcodeCom extends React.PureComponent {
  render(){
    return (
      <QRCode value="http://test.kejiganhuo.com" />
    )
  }
}

export default QRcodeCom
