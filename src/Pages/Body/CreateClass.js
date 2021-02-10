import axios from "axios";
import React from "react"
import { Link, Redirect } from "react-router-dom";

//用antd实现表单校验
import 'antd/dist/antd.css'
import { Form, Input, Button, Select, Radio } from 'antd';
const { Option } = Select;

const layout = {
    labelCol: {
        span: 3,
    },
    wrapperCol: {
        span: 9,
        offset: 1,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 3,
    },
};

class CreateClass extends React.Component {
    formRef = React.createRef();
    constructor(props) {
        super(props);
        this.onFinish = this.onFinish.bind(this);
    }
    componentDidMount() {
        const _this = this;
        axios.get('http://localhost:3003/classes')
            .then(function (response) {
                var classNum = response.data.length;
                //根据获取到的班级类型进行分类
                _this.setState({
                    classId: classNum + 1
                });
            })
            .catch(function (error) {
                console.log(error);
                _this.setState({
                    error: error
                });
            })
    }

    onFinish(values) {
        let classDate = {
            id: values.classId,
            schoolName: values.schoolName,
            session: values.classPeriod,
            name: values.classGrade + values.className,
            classType: values.classType,
            quitSetting: values.quitSetting,
            hdTeacher: "刘老师",
            teachers: [],
            students: [],
            parents: [],
        };
        axios.post('http://localhost:3003/classes', classDate).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
        this.props.history.push("/myclass/classlist");
    }


    render() {
        return (
            <div className="l-content">
                <div className="l-content-hd">
                    <span className="l-content-hd__text">我的班级</span>
                    <Link to="/myclass/classlist">
                        <button type="button" className="l-content-btn">返回上一级</button>
                    </Link>
                </div>
                <div className="l-createclass">
                    <div className="promptinfo">
                        尊敬的
                        <a style={{ color: '#3ba8f0', cursor: 'pointer' }}>老师（刘老师）</a>
                        ，请填写班级信息：
                    </div>
                    <Form {...layout} ref={this.formRef} name="control-ref" onFinish={this.onFinish}>
                        <Form.Item name="schoolName" label="学校" >
                            <Input type="text" placeholder="请选择学校" />
                        </Form.Item>
                        <Form.Item name="classPeriod" label="学段" rules={[
                            {
                                required: true, message: "必须选择一个学段",
                            },
                        ]}>
                            <Select placeholder="请选择学段">
                                <Option value="小学">小学</Option>
                                <Option value="初中">初中</Option>
                                <Option value="高中">高中</Option>
                                <Option value="大学">大学</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item name="classGrade" label="年级" rules={[
                            {
                                required: true, message: '必须选择一个年级',
                            },
                        ]}>
                            <Select placeholder="请选择年级">
                                <Option value="一年级">一年级</Option>
                                <Option value="二年级">二年级</Option>
                                <Option value="三年级">三年级</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item name="className" label="班级名" rules={[
                            {
                                required: true, message: '必须选择一个年级',
                            },
                            {
                                pattern: /^((?!_|%).){1,20}$/,
                                message: '班级名必须在20字以内,不能含有_和%',
                            }
                        ]}
                        >
                            <Input type="text" placeholder="请输入班级名称，限20个字符，不支持输入_和%" />
                        </Form.Item>
                        <Form.Item name="classType" label="类型"  >
                            <Radio.Group initialValues={"行政班"}>
                                <Radio selected value={"行政班"}>行政班</Radio>
                                <Radio value={"教学班"}>教学班</Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item name="quitSetting" label="退出权限设置" >
                            <Radio.Group initialValues={"允许退出"}>
                                <Radio value={"允许退出"}>允许退出</Radio>
                                <Radio value={"通过班级管理员审核后退出"}>通过班级管理员审核后退出</Radio>
                                <Radio value={"禁止退出"}>禁止退出</Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item {...tailLayout}>
                            <Button className="antd-button" size='large' type="primary" htmlType="submit">
                                保存
                            </Button>
                        </Form.Item>
                    </Form>
                    
                </div>
            </div>
        );
    }
}

export default CreateClass;