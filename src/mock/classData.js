
var Mock = require('mockjs');

let classes = Mock.mock({
    "classes|5":[
        {
            "id|+1":1,
            "name|1":["三年二班","三年一班","三年四班","三年三班","三年五班"],
            "session|1":"高中-2013级",
            "hdTeacher|1":"@cname",
            "stuNum|30-50":50,
            "classType|1":["行政班","教学班"],
            "teachers|3-5":[{
                "name|1":"@cname",
                "isHeadTeacher|1":true,
                "isManager|1":true,
                "type|1":["生物老师","语文老师","数学老师","历史老师","地理老师","物理老师","美术老师"]
            }],
            "students|5-10":["@cname"],
            "parents|5-10":["@cname"],
        }
    ]
});

module.exports = function(){
    return classes
};