import React from 'react';
import { Slider, InputNumber, Row, Col, Tabs, Rate } from 'antd';
const TabPane = Tabs.TabPane;

class ClassFinalStep extends React.Component {
  state = {
      val_1: 0,
      val_2: 0,
      val_3: 0,
      val_4: 0,
      val_5: 0,
      val_6: 0,
      val_7: 0,
      val_8: 0,
      val_9: 0,
      val_10: 0,
  }

  render(){
    return (<div>
       <h3>教学评价质量表</h3>
       <Tabs>
         <TabPane tab="教师情况" key="table-1">
            <p>备课充分，有关教学资料准备符合要求和规范</p>
            <Row>
             <Col span={2} />
             <Col span={12}>
              <Slider key="val_1" min={0} max={10} onChange={(v) => {
                this.setState({
                  val_1: v
                })
              }} value={this.state.val_1} />
             </Col>
             <Col span={2}>
               <InputNumber
                 key="val_1"
                 min={0}
                 max={10}
                 style={{ marginLeft: 16 }}
                 value={this.state.val_1}
                 onChange={(v)=>{
                   this.setState({
                     val_1:v
                   })
                 }}
               />
             </Col>
           </Row>
           <p>精神饱满，讲课有激情，有感染力</p>
           <Row>
            <Col span={2} />
            <Col span={12}>
              <Slider key="val_2" min={0} max={10} onChange={(v) => {
                this.setState({
                  val_2: v
                })
              }} value={this.state.val_2} />
            </Col>
            <Col span={2}>
              <InputNumber
                min={0}
                max={10}
                style={{ marginLeft: 16 }}
                value={this.state.val_2}
                onChange={
                  (v) => {
                    this.setState({
                      val_2: v
                    })
                  }
                }
              />
            </Col>
          </Row>
           <p>板书规范，语言准确、表达生动，或能使用多媒体教学手段、图像清效果好、不是简单的文字堆积</p>
           <Row>
            <Col span={2} />
            <Col span={12}>
              <Slider key="val_3" min={0} max={10} onChange={
                (v) => {
                  this.setState({
                    val_3: v
                  })
                }
              } value={this.state.val_3} />
            </Col>
            <Col span={2}>
              <InputNumber
                min={0}
                max={10}
                style={{ marginLeft: 16 }}
                value={this.state.val_3}
                onChange={(v) => {
                  this.setState({
                    val_3: v
                  })
                }}
              />
            </Col>
          </Row>
           <p>基本概念表达简练准确、思路清晰、重点难点突出</p>
           <Row>
            <Col span={2} />
            <Col span={12}>
              <Slider key="val_4" min={0} max={10} onChange={(v) => {
                this.setState({
                  val_4: v
                })
              }} value={this.state.val_4} />
            </Col>
            <Col span={2}>
              <InputNumber
                min={0}
                max={10}
                style={{ marginLeft: 16 }}
                value={this.state.val_4}
                onChange={(v) => {
                  this.setState({
                    val_4: v
                  })
                }}
              />
            </Col>
          </Row>
           <p>对课程内容娴熟，运用自如</p>
           <Row>
            <Col span={2} />
            <Col span={12}>
              <Slider key="val_5" min={0} max={10} onChange={(v) => {
                this.setState({
                  val_5: v
                })
              }} value={this.state.val_5} />
            </Col>
            <Col span={2}>
              <InputNumber
                min={0}
                max={10}
                style={{ marginLeft: 16 }}
                value={this.state.val_5}
                onChange={(v) => {
                  this.setState({
                    val_5: v
                  })
                }}
              />
            </Col>
          </Row>
           <p>讲述内容充实、信息量大</p>
           <Row>
            <Col span={2} />
            <Col span={12}>
              <Slider key="val_6" min={0} max={10} onChange={(v) => {
                this.setState({
                  val_6: v
                })
              }} value={this.state.val_6} />
            </Col>
            <Col span={2}>
              <InputNumber
                min={0}
                max={10}
                style={{ marginLeft: 16 }}
                value={this.state.val_6}
                onChange={(v) => {
                  this.setState({
                    val_6: v
                  })
                }}
              />
            </Col>
          </Row>
           <p>教学内容能反应或联系学科发展的新思想、新概念、新成果</p>
           <Row>
            <Col span={2} />
            <Col span={12}>
              <Slider key="val_7" min={0} max={10} onChange={(v) => {
                this.setState({
                  val_7: v
                })
              }} value={this.state.val_7} />
            </Col>
            <Col span={2}>
              <InputNumber
                min={0}
                max={10}
                style={{ marginLeft: 16 }}
                value={this.state.val_7}
                onChange={(v) => {
                  this.setState({
                    val_7: v
                  })
                }}
              />
            </Col>
          </Row>
           <p>注意启发学生思考和联想，给学生以创新的启迪</p>
           <Row>
            <Col span={2} />
            <Col span={12}>
              <Slider key="val_8" min={0} max={10} onChange={(v) => {
                this.setState({
                  val_8: v
                })
              }} value={this.state.val_8} />
            </Col>
            <Col span={2}>
              <InputNumber
                min={0}
                max={10}
                style={{ marginLeft: 16 }}
                value={this.state.val_8}
                onChange={(v) => {
                  this.setState({
                    val_8: v
                  })
                }}
              />
            </Col>
          </Row>
           <p>能有效调控课堂秩序，并通过适当互动，调动学生学习情绪</p>
           <Row>
            <Col span={2} />
            <Col span={12}>
              <Slider key="val_9" min={0} max={10} onChange={(v) => {
                this.setState({
                  val_9: v
                })
              }} value={this.state.val_9} />
            </Col>
            <Col span={2}>
              <InputNumber
                min={0}
                max={10}
                style={{ marginLeft: 16 }}
                value={this.state.val_9}
                onChange={(v) => {
                  this.setState({
                    val_9: v
                  })
                }}
              />
            </Col>
          </Row>
           <p>结合学生的理解水平组织教学，教学调度张弛有度</p>
           <Row>
            <Col span={2} />
            <Col span={12}>
              <Slider key="val_10" min={0} max={10} onChange={(v) => {
                this.setState({
                  val_10: v
                })
              }} value={this.state.val_10} />
            </Col>
            <Col span={2}>
              <InputNumber
                min={0}
                max={10}
                style={{ marginLeft: 16 }}
                value={this.state.val_10}
                onChange={(v) => {
                  this.setState({
                    val_10: v
                  })
                }}
              />
            </Col>
          </Row>
         </TabPane>
         <TabPane tab="学生情况" key="table-2">
            <p>遵守制度、按时到课、出勤率高</p>
            <Rate count={4} defaultValue={1} />
            <p>遵守课堂纪律，课堂秩序良好</p>
            <Rate count={4} defaultValue={1} />
            <p>听课精力集中，能积极思考，有较强的学习兴趣</p>
            <Rate count={4} defaultValue={1} />
         </TabPane>
       </Tabs>
      </div>)
  }
}

export default ClassFinalStep
