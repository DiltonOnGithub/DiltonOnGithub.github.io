const person = {
    name: 'Wes',
    job: 'Web Developer',
    city: 'Hamilton',
    bio: 'Wes is a really cool guy that loves to teach web development!'
}
// And then create our markup:
const markup = `
<div class="header">
<img src="assets/headerlogo.svg" alt="">
<div class="navbar-menu">
    <a href="" class="active item">DASHBOARD</a>
    <a href="" class="item">CONTENT</a>
    <a href="" class="item">USERS</a>
    <a href="" class="item">REPORTS</a>
    <a href="" class="item">ADMIN</a>
    <div class="icons" id="alerts-icon"><img src="assets/alerts.svg" alt=""><span class="num">2</span></a></div>
    <div class="icons" id="announcements-icon"><img src="assets/announcements.svg" alt=""><span class="num">1</span></div>
    <div class="icons"><img src="assets/account_circle.svg" alt=""><span class="num" style="background-color: white;color: black;">T</span></div>
    <div class="ham" id="hamburger-icon"><img src="assets/hamburger-menu.svg" alt=""></div>
</div>
</div>
<div class="ham-menu" id="hamburger-menu">
<a href="" >DASHBOARD</a>
<select>
    <option>CONTENT</option>
    <option>CONTENT</option>
</select>
<select>
    <option>USERS</option>
</select>
<select>
    <option>REPORTS</option>
</select>
<select>
    <option>ADMIN</option>
</select>
</div>
<div class="announcements" id="announcements-menu"><p>jfslkhoyohkhoho Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum sed quis tenetur vero ab aliquid dicta dolorem in vel doloremque sapiente itaque voluptate suscipit adipisci error nihil cum, beatae cumque quidem dolores? Eos asperiores, ipsam fuga amet debitis pariatur explicabo molestias officia odit dolorem exercitationem quisquam voluptatibus sequi sunt nam dolorum, suscipit quam? Quisquam nobis sequi laborum nostrum aut itaque laboriosam labore, vero laudantium pariatur maiores amet adipisci enim obcaecati voluptatum similique dolore aspernatur! Deserunt doloremque at iure repellendus possimus obcaecati facilis eius, provident accusantium reiciendis commodi corrupti voluptatum deleniti consequuntur ex quibusdam fugiat et perspiciatis esse id nostrum ullam?</p></div>
<div class="alerts" id="alerts-menu"><p>jfslkhoyohkhoho Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum sed quis tenetur vero ab aliquid dicta dolorem in vel doloremque sapiente itaque voluptate suscipit adipisci error nihil cum, beatae cumque quidem dolores? Eos asperiores, ipsam fuga amet debitis pariatur explicabo molestias officia odit dolorem exercitationem quisquam voluptatibus sequi sunt nam dolorum, suscipit quam? Quisquam nobis sequi laborum nostrum aut itaque laboriosam labore, vero laudantium pariatur maiores amet adipisci enim obcaecati voluptatum similique dolore aspernatur! Deserunt doloremque at iure repellendus possimus obcaecati facilis eius, provident accusantium reiciendis commodi corrupti voluptatum deleniti consequuntur ex quibusdam fugiat et perspiciatis esse id nostrum ullam?</p></div>
<div class="dashboard-container">

<div class="banner">
    <div class="section" style="border-bottom: 4px solid black;">
        <img src="assets/courses.svg" alt="">
        <p><h1>4</h1> Courses</p>
    </div>
    <div class="section">
        <img src="assets/classes.svg" alt="">
        <p><h1>4</h1> Classes</p>
    </div>
</div>

<div class="display-details">
    <div class="detail-card">
        <p>Showing 4 of 4 courses</p>
    </div>
    <div  class="detail-card">
        <label for="sortBy">Sort By: </label>
        <select name="sortBy" id="sortBy">
            <option value="CourseName">Course Name</option>
        </select>
        <img src="assets/sort.svg" alt="">
    </div>
</div>

<div class="card-container">
    <div class="card">
        <p class="expired expired-false"></p>
        <div class="data">
            <img src="assets/course1.svg" alt="">
            <div class="values">
                <p class="title">Acceleration<img src="assets/favourite.svg" class="fav"alt=""></p>
                <p class="small">Physics | Grade 7 <span>+2</span></p>
                <p class="small"><b>4</b> Units <b>18</b> Lessons <b>42</b> Topics</p>
                <select name="" id="">
                    <option value="CourseName">Mr Frank's Class B</option>
                </select>
                <p class="small">50 students | 21 Jan 2020 - 21 Aug 2020</p>
            </div>
        </div>
        <div class="actions">
            <img src="assets/eye.svg" alt="">
            <img src="assets/manage.svg" alt="">
            <img src="assets/grade.svg" alt="">
            <img src="assets/reports.svg" alt="">
        </div>
    </div>
    <div class="card">
        <p class="expired expired-false"></p>
        <div class="data">
            <img src="assets/course2.svg" alt="">
            <div class="values">
                <p class="title">Acceleration <span><img src="assets/favourite.svg" class="fav"alt=""></span></p>
                <p class="small">Physics | Grade 7 <span>+2</span></p>
                <p class="small"><b>4</b> Units <b>18</b> Lessons <b>42</b> Topics</p>
                <select name="" id="">
                    <option value="CourseName">Mr Frank's Class B</option>
                </select>
                <p class="small">50 students | 21 Jan 2020 - 21 Aug 2020</p>
            </div>
        </div>
        <div class="actions">
            <img src="assets/eye.svg" alt="">
            <img src="assets/manage.svg" class="disabled" alt="">
            <img src="assets/grade.svg" class="disabled" alt="">
            <img src="assets/reports.svg" alt="">
        </div>
    </div>
    <div class="card">
        <p class="expired expired-false"></p>
        <div class="data">
            <img src="assets/course3.svg" alt="">
            <div class="values">
                <p class="title">Acceleration<img src="assets/favourite.svg" class="fav"alt=""></p>
                <p class="small">Physics | Grade 7 <span>+2</span></p>
                <p class="small"><b>4</b> Units <b>18</b> Lessons <b>42</b> Topics</p>
                <select name="" id="">
                    <option value="CourseName">Mr Frank's Class B</option>
                </select>
                <p class="small">50 students | 21 Jan 2020 - 21 Aug 2020</p>
            </div>
        </div>
        <div class="actions">
            <img src="assets/eye.svg" alt="">
            <img  class="disabled" src="assets/manage.svg" alt="">
            <img class="disabled" src="assets/grade.svg" alt="">
            <img src="assets/reports.svg" alt="">
        </div>
    </div>
    <div class="card">
        <p class="expired">EXPIRED</p>
        <div class="data">
            <img src="assets/course4.svg" alt="">
            <div class="values">
                <p class="title">Acceleration<img src="assets/not-favourite.svg" class="fav"alt=""></p>
                <p class="small">Physics | Grade 7 <span>+2</span></p>
                <p class="small"><b>4</b> Units <b>18</b> Lessons <b>42</b> Topics</p>
                <select name="" id="">
                    <option value="CourseName">Mr Frank's Class B</option>
                </select>
                <p class="small">50 students | 21 Jan 2020 - 21 Aug 2020</p>
            </div>
        </div>
        <div class="actions">
            <img src="assets/eye.svg" alt="">
            <img src="assets/manage.svg" alt="">
            <img src="assets/grade.svg" alt="">
            <img src="assets/reports.svg" alt="">
        </div>
    </div>
</div>
</div>

<div class="footer">
<a href="" style="border-right: 1px solid grey;">About</a><a href="">Contact Us</a>
<div class="footer-banner">
    <img src="assets/footerlogo.svg" alt=""><p>Copyright &copy; 2020-2021 <b>Zeus Systems Pvt. Ltd.</b> All rights reserved.</p>
</div>
</div>
<script src="scripts/script.js"></script>
`;
document.body.innerHTML = markup;