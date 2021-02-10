import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

import Classes from './ClassList/Classes'



class ClassList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            xzclasses: [],
            jxclasses: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        const _this = this;
        axios.get('http://localhost:3003/classes')
            .then(function (response) {
                var classes = response.data;
                //根据获取到的班级类型进行分类
                _this.setState({
                    xzclasses: classes.filter((x) => { return x.classType === "行政班"; }),
                    jxclasses: classes.filter((x) => { return x.classType === "教学班"; }),
                    isLoaded: true
                });
            })
            .catch(function (error) {
                console.log(error);
                _this.setState({
                    isLoaded: false,
                    error: error
                })
            })
    }

    renderClasses(i) {
        //根据传进的参数判断渲染什么类型的班级
        return <Classes classType={i} xzclasses={this.state.xzclasses} jxclasses={this.state.jxclasses} />;
    }

    render() {
        return (
            <div className="l-content">
                <div className="l-content-hd">
                    <span className="l-content-hd__text">我的班级</span>
                    <Link to="/myclass/createclass">
                    <button type="button" className="l-content-btn">创建班级</button>
                    </Link>
                </div>
                {/*班级列表*/}
                <div className="class-list">
                    <div className="class">
                        <p className="class-list__desc">行政班是为学生管理和教学管理而设置的班级</p>
                        <ul className="class-list__group">
                            {this.renderClasses(1)}
                        </ul>
                    </div>
                    <div className="class">
                        <p className="class-list__desc">教学班是根据课程教学要求而设置的班级</p>
                        <ul className="class-list__group">
                            {this.renderClasses(2)}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ClassList;