import React from 'react';
import './App.css';

function App() {
  const handleEnroll = (courseName) => {
    alert(`You have successfully enrolled in ${courseName}!`);
  }

  return (
    <div class="container">
      <nav>
			    <ul>
				    <li><a href="#home">Home</a></li>
				    <li><a href="#courses">Courses</a></li>
				    <li><a href="#contact">Contact</a></li>
			    </ul>
		  </nav>

      <header class="header">
        <h1>Explore Online Education Platform</h1>
      </header>

        <section class="course">
          <img src="https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg" alt="HTML Course" width="280" height="150" />
          <h2>Introduction to HTML</h2>
          <p>Learn the basics of HTML with this introductory course.</p>
          {/*<button class="enroll">Enroll now</button><br></br>*/}
          <button className="enroll" onClick={() => handleEnroll('Introduction to HTML')}>Enroll now</button>
        </section>

        <section class="course">
        <img src="https://gbcdn.mrgcdn.ru/uploads/geekbrains/public/ckeditor_assets/pictures/8975/retina-5df8bc110901350173f8be719ce2ea1d.png" alt="HTML Course" width="280" height="150" />
          <h2>Introduction to CSS</h2>
          <p>Learn the basics of CSS with this introductory course.</p>
          {/*<button class="enroll">Enroll now</button><br></br>*/}
          <button className="enroll" onClick={() => handleEnroll('Introduction to CSS')}>Enroll now</button>
        </section>

        <section class="course">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq7qWMofHSyXqlmyjTGCihAjxGohg8XgIZObW_TZUE8X1ekZbukGSYfJTevwJdor5N6fc&usqp=CAU.jpeg" alt="HTML Course" width="280" height="150" />
          <h2>Introduction to JavaScript</h2>
          <p>Learn the basics of JavaScript with this introductory course.</p>
          {/*<button class="enroll">Enroll now</button><br></br>*/}
          <button className="enroll" onClick={() => handleEnroll('Introduction to JavaScript')}>Enroll now</button>
        </section>

        <section class="course">
        <img src="https://www.unicorn.dev/wp-content/uploads/2023/01/react.png" alt="HTML Course" width="280" height="150" />
          <h2>Introduction to React Js</h2>
          <p>Learn the basics of Reat Js with this introductory course.</p>
          {/*<button class="enroll">Enroll now</button><br></br>*/}
          <button className="enroll" onClick={() => handleEnroll('Introduction to React Js')}>Enroll now</button>
        </section>

        <section id="contact">
			    <h2>Contact</h2>
			    <p>You can contact us using the following information:</p>
				  <p>Email: explore@education.com</p>
				  <p>Phone: +91 9087543657</p>
				  <p>Address: 108 2nd street, Moholla, Mysore.</p>
		    </section>

      <footer class="footer">
        <p>&copy; 2023 Explore Online Education Platform</p>
      </footer>
    </div>
  );
}

export default App;
