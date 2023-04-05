/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/


import React from 'react';

function App() {
  return (
    <div>
      <header>
      <h1>The Hope Foundation</h1>
		    <nav>
			    <ul>
				    <li><a href="#home">Home</a></li>
				    <li><a href="#donate">Donate</a></li>
				    <li><a href="#contact">Contact</a></li>
			    </ul>
		    </nav>
      </header>

    <div class="img">
      <img src="https://education.rask.com.au/wp-content/uploads/sites/4/2020/12/charity-donation-australia-scaled.jpg" alt="" width="800" height="400" />
    </div>

    <div class="list">
      <h1>Welcome to Our Non-Profit Organization</h1>
      <p>Here at our organization, we strive to make a difference in the lives of those in need. Our mission is to raise awareness and funds for various charitable causes, including:</p>
      <ul>
        <li>Helping the homeless</li>
        <li>Supporting families in need</li>
        <li>Providing education opportunities for underprivileged children</li>
        <li>And more...</li>
      </ul>

      <section class="slide-charity">
      <div class="slider">
      <span id="slide-1"></span>
      <span id="slide-2"></span>
      <span id="slide-3"></span>
      <div class="image-container">
        <img src="https://www.unicef.org/southafrica/sites/unicef.org.southafrica/files/styles/hero_tablet/public/ZAF-BEC9590.jpg?itok=7gCNHxYd.jpeg" class="slide" width="600" height="400" />
        <img src="https://images.theconversation.com/files/214077/original/file-20180410-584-15igumx.jpg?ixlib=rb-1.1.0&rect=50%2C672%2C5602%2C2801&q=45&auto=format&w=1356&h=668&fit=crop.jpeg" class="slide" width="600" height="400" />
        <img src="https://transmission-private.com/admin/resources/insights/family-philanthropy-w1300.jpg" class="slide" width="600" height="400" />
      </div>
      <div class="buttons">
        <a href="#slide-1"></a>
        <a href="#slide-2"></a>
        <a href="#slide-3"></a>
      </div>
    </div>
    </section>


      <div class="footer">
      <h2>Make a Donation</h2>
      <p>If you would like to make a donation to support our cause, please fill out the form below:</p>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Amount:
          <input type="number" name="amount" />
        </label>
        <br></br>
        <button type="submit" class="btn">Donate Now </button>
      </form>
      </div>
    </div>
    </div>
  );
}

export default App;

