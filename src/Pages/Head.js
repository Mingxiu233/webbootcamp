import React from "react";
//引入图片
import fj101logo_img from "../img/fj101-logo.png";
import new_img from "../img/new.png";
import search_img from "../img/search.png";
import user_img from "../img/user.png";

function Head() {
    return (
        //导航栏
        <div className="l-header">
            {/*LOGO区*/}
            <div className="fj-logo-box">
                <a href="###" className="fj-logo">
                    <img className="fj-logo-img" src={fj101logo_img}/>
                </a>
            </div>
            {/*导航列表*/}
            <div className="l-nav">
                <ul className="nav-list">
                    <li className="nav-item">
                        <a href="###"><span className="nav-list__text">首页</span></a>
                    </li>
                    <li className="nav-item">
                        <a href="###"><span className="nav-list__text">教学管理</span></a>
                    </li>
                    <li className="nav-item">
                        <a href="###"><span className="nav-list__text">学习</span></a>
                    </li>
                    <li className="nav-item">
                        <a href="###"><span className="nav-list__text">资源超市</span></a>
                    </li>
                    <li className="nav-item">
                        <a href="###"><span className="nav-list__text">教育应用</span></a>
                    </li>
                    <li className="nav-item">
                        <a href="###"><span className="nav-list__text">新闻</span></a>
                    </li>
                    <li className="nav-item">
                        <a href="###"><span className="nav-list__text">名师名校</span></a>
                    </li>
                </ul>
            </div>
            {/*右侧其他功能*/}
            <div className="hd-right">
                <div className="hd-new">
                    <a href="###">
                        <img src={new_img} alt=""></img>
                    </a>
                </div>
                <div className="hd-search">
                    <a href="###">
                        <img src={search_img} alt=""></img>
                    </a>
                </div>
                <div className="hd-user">
                    <a href="###">
                        <img src={user_img} alt=""></img>
                        <span style={{color:"black"}}>Coco</span>
                    </a>
                </div>
            </div>
        </div>);
}
export default Head;