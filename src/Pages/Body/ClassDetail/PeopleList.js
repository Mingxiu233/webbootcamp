import React from "react";
import Picture from "../../../img/picture.png"
function PeopleList(props) {

    if (props.showType === 1) {
        if(props.search === ""){
            return (
                props.classData.teachers.map((teacher, i) => {
                    return (
                        <li className="PeopleCard-List" key={i}>
                            <div className="PeopleCard">
                                <div className="CardMid">
                                    <img src={Picture}/>
                                    <span className="CardMid-span">{teacher.type}</span>
                                </div>
                                <div className="CardBottom">
                                    <span className="CardName">{teacher.name}</span>
                                </div>
                            </div>
                        </li>
                    )
                })
            );
        }else{
            return (
                props.classData.teachers.filter((x)=>{return x.name.indexOf(props.search) >= 0;}).map((teacher, i) => {
                    return (
                        <li className="PeopleCard-List" key={i}>
                            <div className="PeopleCard">
                                <div className="CardMid">
                                    <img src={Picture}/>
                                    <span className="CardMid-span">{teacher.type}</span>
                                </div>
                                <div className="CardBottom">
                                    <span className="CardName">{teacher.name}</span>
                                </div>
                            </div>
                        </li>
                    )
                })
            );
        }
    } else if (props.showType === 2) {
        if(props.search === ""){
            return (
                props.classData.students.map((student, i) => {
                    return (
                        <li className="PeopleCard-List" key={i}>
                            <div className="PeopleCard">
                                <div className="CardMid">
                                    <img src={Picture}/>
                                    
                                </div>
                                <div className="CardBottom">
                                    <span className="CardName">{student}</span>
                                </div>
                            </div>
                        </li>
                    )
                })
            );
        }else{
            return (
                props.classData.students.filter((x)=>{return x.indexOf(props.search) >= 0;}).map((student, i) => {
                    return (
                        <li className="PeopleCard-List" key={i}>
                            <div className="PeopleCard">
                                <div className="CardMid">
                                    <img src={Picture}/>
                                    
                                </div>
                                <div className="CardBottom">
                                    <span className="CardName">{student}</span>
                                </div>
                            </div>
                        </li>
                    )
                }));
        }
        
    } else if (props.showType === 3) {
        if(props.search === ""){
            return (
                props.classData.parents.map((parent, i) => {
                    return (
                        <li className="PeopleCard-List" key={i}>
                            <div className="PeopleCard">
                                <div className="CardMid">
                                    <img src={Picture}/>
                                    
                                </div>
                                <div className="CardBottom">
                                    <span className="CardName">{parent}</span>
                                </div>
                            </div>
                        </li>
                    )
                })
            );
        }else{
            return (
                props.classData.parents.filter((x)=>{return x.indexOf(props.search) >= 0;}).map((parent, i) => {
                    return (
                        <li className="PeopleCard-List" key={i}>
                            <div className="PeopleCard">
                                <div className="CardMid">
                                    <img src={Picture}/>
                                    
                                </div>
                                <div className="CardBottom">
                                    <span className="CardName">{parent}</span>
                                </div>
                            </div>
                        </li>
                    )
                })
            );
        }
        
    }

}

export default PeopleList;