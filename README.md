<a name="readme-top"></a>
### <div align="center"><a href="#"><img src="https://github.com/Benawi/Benawi/assets/21217148/de823737-5f7f-4de8-b62e-3fe88c238eab"/></a></div> 
# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  - [Deployment](#triangular_flag_on_post-deployment)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)

- [📝 License](#license)


# 📖 LeaderBoard Project <a name="about-project"></a>

LeaderBoard - Microverse! project is a repository consisting of the following files:
- HTML file 
- CSS file 
- JS files
- HTML, CSS, and JS linters file


The repository also contains files for setting up linters and validators.


## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>


  <ul>
    <li><a href="https://microverse.notion.site/HTML-CSS-Get-a-head-start-275eb85fd34b4416aa06ec635d69cdaf">HTML</a></li>
    <li><a href="https://microverse.notion.site/HTML-CSS-Get-a-head-start-275eb85fd34b4416aa06ec635d69cdaf">CSS</a></li>
       <li><a href="https://microverse.notion.site/HTML-CSS-Get-a-head-start-275eb85fd34b4416aa06ec635d69cdaf">JS</a></li>
  </ul>


### Key Features <a name="key-features"></a>
## Leaderboard: [Requirements](https://github.com/microverseinc/curriculum-javascript/blob/main/leaderboard/sneak_peek.md)
### Features Added:
- Set up a new project with webpack 
- Create an index.html file and 
- Leaderboard item placeholder (div or ul element).
- The index.html file must be set as a template using the HTML Webpack Plugin.
- Create an index.js file and set an array of some simple to-do tasks (array of objects). Each task object  contain three keys:
   - name [string].
   - score [number].
- A function to iterate over the tasks array and populate an HTML list item element for each task.
- On page load render the dynamically created list of tasks in the dedicated placeholder. The list  appears in order of the index values for each task.
- Create a style.css and set rules for the Leaderboard. CSS must be loaded by Webpack Style/CSS Loader. 
 - The [Leaderboard API documentation](https://www.notion.so/microverse/Leaderboard-API-service-24c0c3c116974ac49488d4eb0267ade3) followed.
 - A new game with the name of 'benawiGame' created by using the API.
 - The ID of 'benawiGame game save that has  been returned by API.
 - The "Refresh" button Implemented that will get all scores for a game created by you from the API (receiving data from the API and parsing the JSON).
 - The form "Submit" button is implemented that will save a score for a game created (sending data to the API).
 - Arrow functions used instead of the function keyword.
 - async and await JavaScript features used to consume the API.
![image](https://github.com/Benawi/Microverse-Leaderboard/assets/21217148/f9ff71d2-1d78-4677-90f5-65f7990ff79b)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🚀 Live Demo <a name="live-demo"></a>

- [Live Demo](https://benawi.github.io/Leaderboard/dist/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Setup

Clone this repository to your desired folder:

> cd my-folder
> git clone git@github.com:myaccount/my-project.git

### Prerequisites

In order to run this project you need:

- gitHub account;
- git installed on your OS.

### Install
>[Linters]( https://github.com/microverseinc/linters-config/tree/master/html-css-js)
- Installations required to run this project:
### Install the node module 
- Run the following command:
```
npm install 
```
### Install the webpack-cli. 
- Run the following command:
```
npm install webpack webpack-cli --save-dev
```
### Install the plugin and adjust the webpack.config.js file
- Run the following command:
```
npm install --save-dev html-webpack-plugin
```
### In order to import a CSS file  add the style-loader and css-loader to your module configuration
- Run the following command:
```
npm install --save-dev style-loader css-loader
```
### webpack-dev-server
- Run the following command:
```
npm install --save-dev webpack-dev-server
```
### Webhint installation. 
- Run the following command:
```
npm install --save-dev hint@7.x
```
### Stylelint installation.
- Run the following command:
```
npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x
```
### ESLint
- Run
```
npm install --save-dev eslint@7.x eslint-config-airbnb-base@14.x eslint-plugin-import@2.x babel-eslint@10.x
```
### Usage

You can use this project by cloning it to your folder and changing index.html and styles.css files.

### Run tests

To run tests, run the following commands:

To track linter errors locally follow these steps:  

Download all the dependencies run:
```
npm install
```
Track HTML linter errors run:
```
npx hint .
```
Track CSS linter errors run:
```
npx stylelint "**/*.{css,scss}"
```
Track JavaScript linter errors run:
```
npx eslint .
```

### Deployment

You can redeploy this project by adding new lines of code to source files.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 👥 Authors <a name="authors"></a>

### 👤 Habtamu Alemayehu 
- GitHub: [Benawi](https://github.com/Benawi)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🔭 Future Features <a name="future-features"></a>

- Leaderboard: Hit the API [this](https://github.com/microverseinc/curriculum-javascript/blob/main/leaderboard/m2_send_receive_data.md) will be added.
- Leaderboard: final touches [this](https://github.com/microverseinc/curriculum-javascript/blob/main/leaderboard/m3_final_touches.md)  will be added.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ⭐️ Show your support <a name="support"></a>

Give me ⭐️ If you like this project!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🙏 Acknowledgments <a name="acknowledgements"></a>

- I would like to thank Microverse program for providing me this great chance.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📝 License <a name="license"></a>

This project is [MIT](./MIT.md) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
