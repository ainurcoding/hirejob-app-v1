# angkasa-ticketing-app
<div align="center"><img src="https://github.com/ainurcoding/hirejob-app-v1/blob/master/public/assets-img/only%20logo.png" height="50" width="50"/></div>
<div align='center'><a href='https://github.com/ainurcoding/hirejob-api-v1'> >>Visit backend repository<< </a></div>
<hr />

### Description

<p>Hirejob is a website application that collects information from two types of users, the first type is the recruiter and the second type is the worker. Employees can display their portfolio and work experience, while recruiters can search for the required worker criteria. This website for the Backend is built with ExpressJS and NodeJS as the main Technology, for the Frontend I use Next JS, a library in the ReactJS library.
</p>
<hr/>

## General Information

### Table of contents
<div id='table-of-content'>List</div>

- <a href='#build-with'>Build With</a>
- <a href='#structure-folder'>Structure Folder</a>
- <a href='#installation-guide'>Installation Guide</a>
- <a href='#commands'>Commands</a>
- <a href='#endpoint'>Endpoint Application</a>
- <a href='#ss-app'>Screenshot Application</a>
- <a href='#packages-included'>Packages Included</a>
- <a href='#demo-application'>Demo Application</a>
- <a href='#for-more-information'>For More Information</a>



### Build with 
<ul id='build-with'>
  <li><a href='https://html5.org/'>HTML 5: for markup language</a></li>
  <li><a href='https://www.w3.org/Style/CSS/Overview.en.html'>CSS: for styling website display</a></li>
  <li><a href='https://nodejs.org/en/'>NodeJS: for main language set dynamic website application</a></li>
  <li><a href='https://nextjs.org/'>Next JS: for library from React JS to create powerfull website application</a></li>
  <li><a href='https://html5.org/'>Bootstrap: a library framework of CSS/HTML/JS </a></li>
  <li><a href='https://html5.org/'>Axios: dependency for fetching data from API</a></li>
  <li><a href='https://github.com/ainurcoding/mama_recipe_app/blob/master/frontend/package.json'>and se more for dependecy on package.json</a></li>
</ul>

<a href='#table-of-content'>Back to top</a>
<hr />

### Structure Folder 

<p id='structure-folder'>Frontend</p>
<ul>
  <li>public || <span><b><i>You can drop anything if that is accesseble for public</i></b></span></li>
  <li>componets || <span><b><i>Components have been used to modify content and, like content cards, buttons, etc, can be reused.</i></b></span></li>
  <li>layouts || <span>Layouts, like components, are used throughout the page, such as the navbar or footer.</span></li>
  <li>pages || <span><b><i>This folder is used to hold all the pages on our website.</i></b></span></li>
  <li>styles || <span><b><i>This folder contains CSS styles for beautifying website pages.</i></b></span></li>
</ul>

<a href='#table-of-content'>Back to top</a>
<hr/>

### Installation Guide 
<div id='installation-guide'>
<p>Frontend</p>
<ol type="1">
  <li>Make sure your backend is ready to use, and the backend server is running.</li>
  <li>Set .env in the frontend folder to be your backend URL for example, your backend server is: <b>'localhost:5000'</b>.</li>
  <li>Run the front-end server with the command npm run start on Shell / Git Bash.</li>
  <li>To run the server that has been set, use the <b>npm run dev command</b>.</li>
  <li>If the website page has appeared, then the front end is ready to use.</li>
</ol>
</div>

<a href='#table-of-content'>Back to top</a>
<hr />

### Commands 
<p id='commands'>Running the Application</p>

`npx next start`

Develop the Application

`npx next dev`

Build the Application

`npx next build`

Linting the Application

`npx next lint`

<a href='#table-of-content'>Back to top</a>
<hr />

### Endpoint of Application 

<p id='endpoint'>List</p>

1. `PATH /` - Access Login page

2. Registers
    - `PATH /register_choice` - Access Register choice page
    - `PATH /register_worker` - Access Register worker page
    - `PATH /register_recruiter` - Access Register recruiter page
3. Reset Password
    - `PATH /reset_password/change_password` - Access reset password page
    - `PATH /reset_password/email verify` - Access email verify page

4. `PATH /landing` - Access Home page
5. `PATH /home` - Access Home page
6. Profile
    - `PATH /profile/company_detail` - Access company detail page
    - Edit Profile
      - `PATH /profile/edit_profile/company/:id` - Access edit profile company page
      - `PATH /profile/edit_profile/worker/:id` - Access edit profile worker page
    - `PATH /profile/person_detail/:id` - Access worker detail page
7. Worker
    - `PATH /worker/detail_portofolio/:id` - Access worker detail portofolio page
    - `PATH /worker/edit_portofolio/:id` - Access worker edit portofolio page

8. `PATH *` - Access 404 Not Found page

<a href='#table-of-content'>Back to top</a>
<hr />

### Screenshot Application 

<details id='ss-app' >
   <summary>
    Login Page
  </summary>
<img src="https://github.com/ainurcoding/angkasa-ticketing-app/blob/master/ss/login%20page.png" alt="login Page" />
</details>
<details>
  <summary>
    Register Page
  </summary>
<img src="https://github.com/ainurcoding/angkasa-ticketing-app/blob/master/ss/regist%20page.png" alt="login Page" />
</details>
<details>
  <summary>
    Landing Page
  </summary>
<img src="https://github.com/ainurcoding/angkasa-ticketing-app/blob/master/ss/landing%20page.png" alt="login Page" />
</details>
<details>
  <summary>
    Find ticket page
  </summary>
<img src="https://github.com/ainurcoding/angkasa-ticketing-app/blob/master/ss/Flight%20search%20new.jpeg" alt="login Page" />
</details>
<details>
  <summary>
    Flight booking page
  </summary>
<img src="https://github.com/ainurcoding/angkasa-ticketing-app/blob/master/ss/FLight%20booking%20new.jpeg" alt="login Page" />
</details>
<details>
  <summary>
    My booking list page
  </summary>
<img src="https://github.com/ainurcoding/angkasa-ticketing-app/blob/master/ss/My%20booking%20list%20new.jpeg" alt="login Page" />
</details>
<details>
  <summary>
    Detail my booking Page
  </summary>
<img src="https://github.com/ainurcoding/angkasa-ticketing-app/blob/master/ss/detail%20booking%20page.png" alt="login Page" />
</details>
<details>
  <summary>
    My profile
  </summary>
<img src="https://github.com/ainurcoding/angkasa-ticketing-app/blob/master/ss/Profile%20user%20new.jpeg" alt="login Page" />
</details>
<details>
  <summary>
    My profile settings
  </summary>
<img src="https://github.com/ainurcoding/angkasa-ticketing-app/blob/master/ss/Update%20profile%20user%20new.jpeg" alt="login Page" />
</details>

<a href='#table-of-content'>Back to top</a>
<hr />

### Packages Included 

- <p id='packages-included'>NPM dependencies</p>


  ![](https://img.shields.io/badge/bcrypt-v5.0.1-blue)
  ![](https://img.shields.io/badge/body--parser-v1.19.2-blue)
  ![](https://img.shields.io/badge/cors-v2.8.5-blue)
  ![](https://img.shields.io/badge/dotenv-v16.0.0-blue)
  ![](https://img.shields.io/badge/express-v4.17.3-blue)
  ![](https://img.shields.io/badge/express--validator-v5.3.1-blue)
  ![](https://img.shields.io/badge/helmet-v5.0.2-blue)
  ![](https://img.shields.io/badge/pg-v8.7.3-blue)
  ![](https://img.shields.io/badge/multer-v1.4.4-blue)
  ![](https://img.shields.io/badge/xss--clean-v0.1.1-blue)
  ![](https://img.shields.io/badge/jsonwebtoken-v8.5.1-blue)
  ![](https://img.shields.io/badge/sweetalert-v2.1.2-blue)
  ![](https://img.shields.io/badge/reactstrap-v9.0.2-blue)
  ![](https://img.shields.io/badge/react-router-dom-v6.3.0-blue)
  ![](https://img.shields.io/badge/react-dom-v17.0.2-blue)
  ![](https://img.shields.io/badge/react-v17.0.2-blue)
  ![](https://img.shields.io/badge/jwt-decode-v3.1.2-blue)
  ![](https://img.shields.io/badge/axios-v0.26.1-blue)
  ![](https://img.shields.io/badge/bootstrap-v5.1.3-blue)
  
<a href='#table-of-contents'>Back to top</a>
<hr />

### Demo Application
<p id='demo-application'>Visit this link for app demo <a href='https://hirejob-iota.vercel.app/'>Hirejob</a></p>
<p><a href='https://github.com/ainurcoding/hirejob-api-v1'>Visit backend repository</a><p>

<a href='#table-of-content'>Back to top</a>
<hr />

### For More Information 
<p id='for-more-information'>My Social media account:</p> <br />
<div>
<img height="25" width="25" src='https://camo.githubusercontent.com/c9dacf0f25a1489fdbc6c0d2b41cda58b77fa210a13a886d6f99e027adfbd358/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f696e7374616772616d2e737667' alt='ig-icon'></img><span> : @ainurridwan_</span>
</div>

<div>
<img height="25" width="25" src='https://camo.githubusercontent.com/4a3dd8d10a27c272fd04b2ce8ed1a130606f95ea6a76b5e19ce8b642faa18c27/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f676d61696c2e737667' alt='gmail-icon'></img><span> : ainurridwank2@gmail.com</span>
</div>

<a href='#table-of-content'>Back to top</a>

<div align='center'>
:copyright: Ainur Ridwan, 2022
</div>
