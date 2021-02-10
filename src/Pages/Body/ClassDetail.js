import React from 'react';
import axios from 'axios';

import PeopleList from './ClassDetail/PeopleList'
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";

import searchIcon from "../../img/search2.png";

class ClassDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            class: {
                teachers: [],
                students: [],
                parents: []
            },
            showType: 1,
            isLoaded: false,
            search:""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        let classId = this.props.match.params.id;
        const _this = this;
        axios.get('http://localhost:3003/classes/' + classId)
            .then(function (response) {
                _this.setState({
                    class: response.data,
                    isLoaded: true,
                    
                });
            })
            .catch(function (error) {
                console.log(error);
                _this.setState({
                    isLoaded: false,
                    error: error
                })
            });
    }

    handleSubmit(event){
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({search: event.target.value});
    }

    handleClick(i) {
        this.setState({
            showType: i
        });
    }

    renderPeopleList(showType) {
        return (<PeopleList showType={showType} classData={this.state.class} search={this.state.search}/>);
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
                <div className="l-content-title">
                    <span className="l-content-title__text">{this.state.class.name}</span>
                    <form  className="l-content-search" onSubmit={this.handleSubmit}>
                        <input value={this.state.value} onChange={this.handleChange} name="search" type="text" className="l-content-search__input" placeholder="快捷查找" ></input>
                        <button type="submit" className="l-content-search__button" value="Submit"><img src={searchIcon} /></button>
                    </form>
                </div>
                <div className="l-classdetail">
                    <div className="l-classdetail-hd">
                        <ul className="l-classdetail-hd__ul">
                            <li className="l-classdetail-hd__li">
                                <button className="l-classdetail-hd__tab" onClick={() => this.handleClick(1)}>
                                    所有老师（ {this.state.class.teachers.length} ）
                                </button>
                            </li>
                            <li className="l-classdetail-hd__li">
                                <button className="l-classdetail-hd__tab" onClick={() => this.handleClick(2)}>
                                    所有学生（ {this.state.class.students.length} ）
                                </button>
                            </li>
                            <li className="l-classdetail-hd__li">
                                <button className="l-classdetail-hd__tab" onClick={() => this.handleClick(3)}>
                                    所有家长（ {this.state.class.parents.length} ）
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="l-classdetail-body">
                        <ul className="l-classdetail-cardlist">
                            {this.renderPeopleList(this.state.showType)}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
export default ClassDetail;