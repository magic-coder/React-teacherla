import React from 'react'
import { DatePicker, Icon, Card, Avatar} from 'antd'
import moment from 'moment'
import { Link } from 'react-router-dom'

const dateFormat = 'MM月DD日'
const { Meta } = Card
const todayTime = moment(new Date()).format(dateFormat)


class VisitList extends React.PureComponent {
  constructor() {
    super()
    this.state = {
      dateTime: moment(new Date()).format(dateFormat),
    }
    this.dateChange = this.dateChange.bind(this)
  }
  dateChange(v, str) {
    this.setState({dateTime: str})
  }
  render() {
    const disabledDate = function (current) {
      return  current  <= (new Date()).getTime()-1000*60*60*24;
    };
    return (<div>
      <h2>
        <span style={{
            color: '#1890ff'
          }}>{this.state.dateTime === todayTime ? '今天' : this.state.dateTime}</span>可以听的课
      </h2>
      <DatePicker allowClear='false' disabledDate={disabledDate} defaultValue={moment()} format={dateFormat} onChange={this.dateChange}/>
      <Card style={{
          marginTop: 20,
          width: '100%'
        }} actions={[<div>{this.state.dateTime === todayTime ? '随堂听课' : '预约听课'}</div> , <div><Link to='/classstatus'><Icon type="file-pdf" /> 课程资料</Link></div>]}>
        <Meta avatar={<Avatar shape="square" icon="user" />} title="软件工程" description={<div > <p>上午第三节课</p>
          <p>任课老师：陈维斌</p>
        </div>}/>
      </Card>
      <Card style={{
          marginTop: 20,
          width: '100%'
        }} actions={[<div>{this.state.dateTime === todayTime ? '随堂听课' : '预约听课'}</div> , <div><Link to='/classstatus'><Icon type="file-pdf" /> 课程资料</Link></div>]}>
        <Meta avatar={<Avatar shape="square" icon="user" />} title="软件工程" description={<div > <p>上午第三节课</p>
          <p>任课老师：陈维斌</p>
        </div>}/>
      </Card>
      <Card style={{
          marginTop: 20,
          width: '100%'
        }} actions={[<div>{this.state.dateTime === todayTime ? '随堂听课' : '预约听课'}</div> , <div><Link to='/classstatus'><Icon type="file-pdf" /> 课程资料</Link></div>]}>
        <Meta avatar={<Avatar shape="square" icon="user" />} title="软件工程" description={<div > <p>上午第三节课</p>
          <p>任课老师：陈维斌</p>
        </div>}/>
      </Card>
      <Card style={{
          marginTop: 20,
          width: '100%'
        }} actions={[<div>{this.state.dateTime === todayTime ? '随堂听课' : '预约听课'}</div> , <div><Link to='/classstatus'><Icon type="file-pdf" /> 课程资料</Link></div>]}>
        <Meta avatar={<Avatar shape="square" icon="user" />} title="软件工程" description={<div > <p>上午第三节课</p>
          <p>任课老师：陈维斌</p>
        </div>}/>
      </Card>
    </div>)
  }
}

export default VisitList
