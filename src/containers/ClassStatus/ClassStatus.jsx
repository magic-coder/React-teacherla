import React from 'react'
import { Divider, Card} from 'antd'

const gridStyle_1 = {
  width: '35%',
  height: '100%',
  textAlign: 'center',
};

const gridStyle_2 = {
  width: '65%',
  textAlign: 'center',
};

class ClassStatus extends React.PureComponent {
  render() {
    return (<div>
      <Divider >课程状态</Divider>
      <Card>
        <Card.Grid style={gridStyle_1}>任职教师</Card.Grid>
        <Card.Grid style={gridStyle_2}>陈维斌</Card.Grid>
        <Card.Grid style={gridStyle_1}>所在院系</Card.Grid>
        <Card.Grid style={gridStyle_2}>计算机科学与工程系</Card.Grid>
        <Card.Grid style={gridStyle_1}>任教班级</Card.Grid>
        <Card.Grid style={gridStyle_2}>14软件2班</Card.Grid>
        <Card.Grid style={gridStyle_1}> 时 间 </Card.Grid>
        <Card.Grid style={gridStyle_2}>2018-10-23</Card.Grid>
        <Card.Grid style={gridStyle_1}> 节 次 </Card.Grid>
        <Card.Grid style={gridStyle_2}>2</Card.Grid>
        <Card.Grid style={gridStyle_1}> 教 室 </Card.Grid>
        <Card.Grid style={gridStyle_2}>明德216</Card.Grid>
        <Card.Grid style={gridStyle_1}>课程名称</Card.Grid>
        <Card.Grid style={gridStyle_2}>软件工程</Card.Grid>
        <Card.Grid style={gridStyle_1}>教材章节</Card.Grid>
        <Card.Grid style={gridStyle_2}>第一章 软件危机</Card.Grid>
      </Card>
    </div>)
  }
}

export default ClassStatus
