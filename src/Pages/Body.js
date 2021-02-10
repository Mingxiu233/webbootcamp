import React from "react";
//引入组件
import ClassList from "./Body/ClassList";
import ClassDetail from "./Body/ClassDetail";
import CreateClass from "./Body/CreateClass";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//引入图片
import back_img from "../img/back.png";
import opearate_img from "../img/opearate.png";
import home_img from "../img/home.png";
import task_img from "../img/task.png";
import myclass_img from "../img/myclass.png";
import statistics_img from "../img/statistics.png";



function Body() {
    return (
        //主体区
        <Router>
            <div className="l-body">
                {/*侧边栏*/}
                <div className="l-operate">
                    <div className="l-operate-title">
                        <a href="###" className="btn-back">
                            <img src={back_img} alt=""></img>
                        </a>
                        <span className="l-operate-title__text">个人中心</span>
                        <a href="###" className="btn-opearate">
                            <img src={opearate_img} alt=""></img>
                        </a>
                    </div>
                    <div className="l-operate-sidebar">
                        <ul className="sidebar-list">
                            <li>
                                <Link to="">
                                    <span className="icon"><img src={home_img} alt=""></img></span>其他内容
                                </Link>
                            </li>
                            <li>
                                <Link to="">
                                    <span className="icon"><img src={task_img} alt=""></img></span>其他内容
                                </Link>
                            </li>
                            <li>
                                <Link to="/myclass/classlist">
                                    <span className="icon"><img src={myclass_img} alt="" ></img></span>我的班级
                                </Link>
                            </li>
                            <li>
                                <Link to="">
                                    <span className="icon"><img src={statistics_img} alt=""></img></span>其他内容
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {/*内容区*/}
                <div className="rightMain">
                    <Route path="/myclass/classlist" component={ClassList} />
                    <Route path="/myclass/classdetail/:id" component={ClassDetail} />
                    <Route path="/myclass/createclass" component={CreateClass} />
                </div>
            </div>
        </Router>);
}
export default Body;