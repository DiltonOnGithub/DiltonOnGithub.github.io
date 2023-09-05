import data from './data.json' assert {type: 'json'};
console.log(data);
console.log(data.courses.length)
console.log(data.coursesActions)
const banner = document.createElement("div");
banner.className = "banner";
const section1 = document.createElement("div");
section1.className = "section";

const section1_image = document.createElement("img");
section1_image.src='assets/courses.svg';
const section1_para = document.createElement("p");
const section1_h1 = document.createElement("h1");
const h1node = document.createTextNode(data.noOfCourses);
const p1node = document.createTextNode(" Courses");

section1.appendChild(section1_image);
section1.appendChild(section1_para);
section1_para.appendChild(section1_h1);
section1_h1.appendChild(h1node);
section1_para.appendChild(p1node);



const section2 = document.createElement("div");
section2.className = "section";

const section2_image = document.createElement("img");
section2_image.src='assets/classes.svg';
const section2_para = document.createElement("p");
const section2_h1 = document.createElement("h1");
const h1node2 = document.createTextNode(data.noOfClasses);
const p2node = document.createTextNode(" Classes");

section2.appendChild(section2_image);
section2.appendChild(section2_para);
section2_para.appendChild(section2_h1);
section2_h1.appendChild(h1node2);
section2_para.appendChild(p2node);

banner.appendChild(section1);
banner.appendChild(section2);
const element = document.getElementById("DB");
const dd = document.getElementById("dd");
element.insertBefore(banner,dd);

const cardConatiner = document.createElement("div");
cardConatiner.className = "card-container";

if(data.courses.length > 0){
    const card1 = document.createElement("div");
    cardConatiner.className = "card-container";
    for (let i = 0; i < data.courses.length; i++) {
        
        const card = document.createElement("div");
        card.className = "card";

        const expired = document.createElement("p");
        expired.classList.add("expired");
        expired.classList.add("expired-false");
        if(data.courses[i].expired){
            expired.classList.remove("expired-false");
            const expirednode = document.createTextNode("EXPIRED");
        expired.appendChild(expirednode);
        }
        
        card.appendChild(expired);
        

        const data_ = document.createElement("div");
        data_.className = "data";

        const data_img = document.createElement("img");
        data_img.src = data.courses[i].image;
        data_.appendChild(data_img);

        const values = document.createElement("div");
        values.className = "values";

        
        const title = document.createElement("p");
        title.className = "title";
        const titlenode = document.createTextNode(data.courses[i].title);
        title.appendChild(titlenode);
        const card_line2 = document.createElement("p");
        card_line2.className="small";
        const card_line2node = document.createTextNode(data.courses[i].subject + " | Grade " +data.courses[i].grade);
        card_line2.appendChild(card_line2node);
        const span2 = document.createElement("span");
        const span2node = document.createTextNode(data.courses[i].span);
        span2.appendChild(span2node);
        card_line2.appendChild(span2);
    
        values.appendChild(title);
        values.appendChild(card_line2);
        if(data.courses[i].units && data.courses[i].lessons && data.courses[i].topics){
            const card_line3 = document.createElement("p");
            card_line3.className="small";
            const b1 = document.createElement("b");
            const b1node = document.createTextNode(data.courses[i].units);
            b1.appendChild(b1node);
            const b2 = document.createElement("b");
            const b2node = document.createTextNode(data.courses[i].lessons);
            b2.appendChild(b2node);
            const b3 = document.createElement("b");
            const b3node = document.createTextNode(data.courses[i].topics);
            b3.appendChild(b3node);
            card_line3.appendChild(b1);
            card_line3.appendChild(document.createTextNode(" Units "))
            card_line3.appendChild(b2);
            card_line3.appendChild(document.createTextNode(" Lessons "))
            card_line3.appendChild(b3);
            card_line3.appendChild(document.createTextNode(" Topics"))
            values.appendChild(card_line3);
        }

        const select = document.createElement("select");
        const option = document.createElement("option");
        if(data.courses[i].courseName == ""){
            const optionnode = document.createTextNode("No Classes");
            
            option.appendChild(optionnode);
            option.className ="disabled";
        }else{
            const optionnode = document.createTextNode(data.courses[i].courseName);
            option.appendChild(optionnode);
        }
        
        select.appendChild(option);
        values.appendChild(select);
        if(data.courses[i].noOfStudents){
            const card_line4 = document.createElement("p");
        card_line4.className="small";
        
        if(data.courses[i].startDay){
            const card_line4node = document.createTextNode(data.courses[i].noOfStudents + " students | " +data.courses[i].startDay +" "+data.courses[i].startMonth +" "+data.courses[i].startYear +" - "+data.courses[i].endDay +" "+data.courses[i].endMonth +" "+data.courses[i].endYear);
            card_line4.appendChild(card_line4node);
        }else{
            const card_line4node = document.createTextNode(data.courses[i].noOfStudents + " students");
            card_line4.appendChild(card_line4node);
        }
        
        values.appendChild(card_line4);
        }
        
        data_.appendChild(values);

        card.appendChild(data_);
        const actions = document.createElement("div");
        actions.className = "actions";
        for(let j=0;j<4;j++){
            const act = document.createElement("img");
            act.src = data.coursesActions[j];
            actions.appendChild(act);
        }
        card.appendChild(actions);
        cardConatiner.appendChild(card);
    }
    element.appendChild(cardConatiner);
}
