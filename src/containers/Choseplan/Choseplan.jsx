import React from 'react'
import { DatePicker, Icon, Card, Modal } from 'antd'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { getCookie } from '../../config/util';
import { getDoCourse } from '../../redux/action/course.action';
import { addPlanFromT } from '../../redux/action/plan.action';

const dateFormat = 'MM月DD日';
const timeFormat = 'YYYY-MM-DD'
const { Meta } = Card;
const confirm = Modal.confirm;


@connect(state => state, { getDoCourse,addPlanFromT })
class Choseplan extends React.Component {
    constructor() {
        super()
        this.state = {
            dateTime: moment().add(1, 'days').format(dateFormat),
            time: moment().add(1, 'days').format(timeFormat),
            user_id: getCookie('user_id'),
            access_token: getCookie('token'),
            task_id:window.location.hash.substring(1)
        }
        this.dateChange = this.dateChange.bind(this)
        this.getChange = this.getChange.bind(this)
    }

    dateChange(v, str) {
        this.setState({
            dateTime: str,
            time: v.format(timeFormat),
        }, () => {
            this.getChange()
        })
    }

    getChange() {
        this.props.getDoCourse({
            userid: this.state.user_id,
            token: this.state.access_token,
            datetime: this.state.time,
            ...this.props.match.params,
        });
    }

    componentDidMount() {
        this.props.getDoCourse({
            userid: this.state.user_id,
            token: this.state.access_token,
            datetime: this.state.time,
            ...this.props.match.params,
        });
    }

    render() {
        const disabledDate = function (current) {
            return current <= moment().add(1, 'days') - 1000 * 60 * 60 * 24;
        };
        console.log(this.props)
        return (<div>
            <h1>
                <span style={{
                    color: '#1890ff'
                }}>{this.state.dateTime}</span>的课
            </h1>
            <DatePicker disabledDate={disabledDate} defaultValue={moment().add(1, 'days')} format={dateFormat} onChange={this.dateChange} />
            {
                this.props.course.doCourse.length !== 0
                    ? this.props.course.doCourse.map(element => {
                        return (
                            <Card
                                key={element.attend_id}
                                style={{
                                    width: '100%',
                                    marginTop: 10,
                                }}
                                actions={
                                    [<div onClick={()=>{
                                      const props = this.props;
                                      const state = this.state;
                                      confirm({
                                        title: '确定是否添加该课程',
                                        okText: '确定',
                                        cancelText: '取消',
                                        onOk() {
                                          props.addPlanFromT({
                                            userid:state.user_id,
                                            token:state.access_token,
                                            attendid:element.attend_id,
                                            ...props.match.params,
                                            taskid:state.task_id})
                                        },
                                      });
                                    }}>预约听课
                                    </div>,
                                    <div>
                                        <Link to={`/classstatus/${element.attend_id}`}><Icon type="file-pdf" /> 课程资料</Link>
                                    </div>]}
                            >
                                <Meta title={element.course_name} description={<div>
                                    <p>时间：{element.datetime} 第{element.weeks}周 {element.which_day} {element.section}节</p>
                                    <p>地点：{element.place}</p>
                                    <p>任课老师：{element.teacher_name}</p>
                                </div>} />
                            </Card>
                        )
                    }
                    )
                    : <div style={{
                        textAlign: 'center',
                        marginTop: '50%',
                    }}>今日无课程</div>
            }
        </div>)
    }
}

export default Choseplan
