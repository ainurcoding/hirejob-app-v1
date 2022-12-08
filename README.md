
# Hirejob-App
<div align="center"><img src="https://github.com/ainurcoding/hirejob-app-v1/blob/master/public/assets-img/only%20logo.png"/></div>

<hr/>

## General Information
### Build with
<ul>
  <li><a href='https://html5.org/'>HTML 5</a></li>
  <li><a href='https://www.w3.org/Style/CSS/Overview.en.html'>CSS</a></li>
  <li><a href='https://www.javascript.com/'>JavaScript</a></li>
  <li><a href='https://nodejs.org/en/'>NodeJS</a></li>
  <li><a href='https://nextjs.org/'>Next JS (for frontend as a library React JS)</a></li>
  <li><a href='https://expressjs.com/'>Express JS (for backend)</a></li>
</ul>

### Structure Folder 
<p>Backend</p>

<a href='https://github.com/ainurcoding/hirejob-api-v1'>Visit backend repository</a>
<ul>
  <li>public</li>
  <ul>
    <li>img <span><b><i>image public access</i></b></span></li>
  </ul>
  <li>src</li>
  <ul>
    <li>config ||<span><b><i>You can put database configuration in here</i></b></span></li>
    <li>controller ||<span><b><i>This folder for the logic componenent of API</i></b></span></li>
    <li>helper ||<span><b><i>This folder is used to help improve the logic of the controller, for example, response alignment.</i></b></span></li>
    <li>middleware ||<span><b><i>Middleware is used as a bridge during the routes API, for example, uploading images.</i></b></span></li>
    <li>model ||<span><b><i>Models are used to give commands to database manipulation, as in the crud example.</i></b></span></li>
    <li>router ||<span><b><i>The router is the place to set the endpoint for the API.</i></b></span></li>
  </ul>
  <li>index.js || <span><b><i>You can setup this application in this file, such as set port, set another library, and other.</i></b></span></li>
</ul>
<hr/>
<p>Frontend</p>
<ul>
  <li>public || <span><b><i>You can drop anything if that is accesseble for public</i></b></span></li>
  <li>componets || <span><b><i>Components have been used to modify content and, like content cards, buttons, etc, can be reused.</i></b></span></li>
  <li>layouts || <span>Layouts, like components, are used throughout the page, such as the navbar or footer.</span></li>
  <li>pages || <span><b><i>This folder is used to hold all the pages on our website.</i></b></span></li>
  <li>styles || <span><b><i>This folder contains CSS styles for beautifying website pages.</i></b></span></li>
  
  
</ul>
<hr/>

### Installation Guide
<p>Backend</p>
<ol type="1">
  <li>Your first step is to add the .env settings contained in the backend folder, with the examples contained in the .env-example.</li>
  <li>Continue with database creation.</li>
  <li>You can first import the postman documentation contained in this repo and pay attention to the fields in each POST request.
</li>
  <li>To run the server that has been set, use the <b>npm run dev command</b>.</li>
  <li>When there is a description of the Server running on Port (with the port you have specified), the API is ready to use.</li>
</ol>
<hr />
<p>Frontend</p>
<ol type="1">
  <li>Make sure your backend is ready to use, and the backend server is running.</li>
  <li>Set .env in the frontend folder to be your backend URL for example, your backend server is: <b>'localhost:5000'</b>.</li>
  <li>Run the front-end server with the command npm run start on Shell / Git Bash.</li>
  <li>To run the server that has been set, use the <b>npm run dev command</b>.</li>
  <li>If the website page has appeared, then the front end is ready to use.</li>
</ol>
<hr />

### Screenshot Application
<details>
  <summary>
    Login Page
  </summary>
<img src="https://github.com/ainurcoding/hirejob-app-v1/blob/master/ss/1.%20login%20page.PNG" alt="login Page" />
</details>
<details>
  <summary>
    Register Worker Page
  </summary>
<img src="https://github.com/ainurcoding/hirejob-app-v1/blob/master/ss/1.2%20registrasi%20worker.PNG" alt="login Page" />
</details>
<details>
  <summary>
    Register Recruiter Page
  </summary>
<img src="https://github.com/ainurcoding/hirejob-app-v1/blob/master/ss/1.3%20registrasi%20recruiter.PNG" alt="login Page" />
</details>
<details>
  <summary>
    Landing Page
  </summary>
<img src="https://github.com/ainurcoding/hirejob-app-v1/blob/master/ss/2.%20landing%20page.PNG" alt="login Page" />
</details>
<details>
  <summary>
    Search Worker Page
  </summary>
<img src="https://github.com/ainurcoding/hirejob-app-v1/blob/master/ss/search%20worker.png" alt="login Page" />
</details>
<details>
  <summary>
    Profile Worker Page
  </summary>
<img src="https://github.com/ainurcoding/hirejob-app-v1/blob/master/ss/4.1%20profile%20page%20worker.PNG" alt="login Page" />
</details>
<details>
  <summary>
    Profile recruiter Page
  </summary>
<img src="https://github.com/ainurcoding/hirejob-app-v1/blob/master/ss/profile-recruiter.png" alt="login Page" />
</details>
<details>
  <summary>
    Update Profile Worker Page
  </summary>
<img src="https://github.com/ainurcoding/hirejob-app-v1/blob/master/ss/5.%20edit%20profile%20worker.PNG" alt="login Page" />
</details>

<hr />

### Demo Application
<p>Visit this link for app demo <a href='https://hirejob-iota.vercel.app/'>Hirejob</a></p>
<hr />

### For More Information
<p>My Social media account:</p> <br />
<div>
<img height="25" width="25" src='https://camo.githubusercontent.com/c9dacf0f25a1489fdbc6c0d2b41cda58b77fa210a13a886d6f99e027adfbd358/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f696e7374616772616d2e737667' alt='ig-icon'></img><span> : @ainurridwan_</span>
</div>

<div>
<img height="25" width="25" src='https://camo.githubusercontent.com/4a3dd8d10a27c272fd04b2ce8ed1a130606f95ea6a76b5e19ce8b642faa18c27/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f676d61696c2e737667' alt='gmail-icon'></img><span> : ainurridwank2@gmail.com</span>
</div>

<div align='center'>
:copyright: Ainur Ridwan, 2022
</div>


