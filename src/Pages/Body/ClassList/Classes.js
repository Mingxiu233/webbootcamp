import React from "react";
import { Route, Link } from "react-router-dom";

import classicon_img from "../../../img/classicon.png";

function Classes(props) {
    if (props.classType === 1) {
        return (
            props.xzclasses.map((xzclass, index) => {
                
                return (
                    <li key={index}>
                        <Link to={'/myclass/classdetail/' + xzclass.id}>
                            <div className="class-list__cell">
                                <div className="class-list__head"></div>
                                <div className="class-list__icon">
                                    <img src={classicon_img} alt="" />
                                </div>
                                <div className="class-list__info">
                                    <p className="class-list__row">
                                        <span className="class-list__text">{xzclass.session}</span>
                                    </p>
                                    <p className="class-list__row">
                                        <span className="class-list__tag">班级:</span>
                                        <span className="class-list__text">{xzclass.name}</span>
                                    </p>
                                    <p className="class-list__row">
                                        <span className="class-list__tag">班主任:</span>
                                        <span className="class-list__bold">{xzclass.hdTeacher}</span>
                                    </p>
                                    <p className="class-list__row">
                                        <span className="class-list__tag">学生:</span>
                                        <span className="class-list__text">{xzclass.students.length}</span>
                                    </p>
                                </div>
                                <span className="class-list__type">行政班</span>
                            </div>
                        </Link>
                    </li>
                );
            })
        );
    } else if (props.classType === 2) {
        return (
            props.jxclasses.map((jxclass, index) => {
                return (
                    <li key={index}>
                        <Link to={'/myclass/classdetail/' + jxclass.id}>
                            <div className="class-list__cell">
                                <div className="class-list__head"></div>
                                <div className="class-list__icon">
                                    <img src={classicon_img} alt="" />
                                </div>
                                <div className="class-list__info">
                                    <p className="class-list__row">
                                        <span className="class-list__text">{jxclass.session}</span>
                                    </p>
                                    <p className="class-list__row">
                                        <span className="class-list__tag">班级:</span>
                                        <span className="class-list__text">{jxclass.name}</span>
                                    </p>
                                    <p className="class-list__row">
                                        <span className="class-list__tag">班主任:</span>
                                        <span className="class-list__bold">{jxclass.hdTeacher}</span>
                                    </p>
                                    <p className="class-list__row">
                                        <span className="class-list__tag">学生:</span>
                                        <span className="class-list__text">{jxclass.students.length}</span>
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </li>
                );
            })
        );
    }
}

export default Classes;