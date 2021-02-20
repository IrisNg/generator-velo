# Generator-Velo

Scaffolding tool for Vue single page application, as inspired by generator-yolo's folder structure. 

Generator-Velo has been built on top of project setup from Vue-CLI.

<br/>

# Features

### Included

 - **Webpack** (extending Webpack config from Vue-CLI)
 - **SCSS** in single file components (CSS pre-processor)
 - **Auto-import of SCSS** **helper** files into every single file component
 - **ESLint** (Standard Config)
 - **Axios** (Promise-based HTTP requests)
 - Folder setup for **Icomoon icons** & **development API** JSON files
 - **Image optimization** in production
 - **Customizable output path** for production build (Useful for CI/CD deployment)
 - **Minification** of HTML/CSS/Javascript (by Vue-CLI)
 - **Babel** (ES6 JS) and **Autoprefixer** (CSS) (for better browser compatibility, by Vue-CLI)

<br/>

### Optional

 - **Pug** (HTML templating in .vue single file component)
 - **Vue-Router** (official router for Vue.js)
 - **Vuex** (State management pattern + library)

   

<br/>

# Setup
1.  **Install [Node.js & NPM](https://nodejs.org/en/)**

    Using a terminal, type the command below to check installed Node.js version is v8.16.x or above
    
    ```
    node -v
    ```
    <br/>
2.  **Install Yeoman**
  
    This is a generator dependency, thus there is no need for you to study Yeoman documentation. "-g" flag installs this dependency globally. 
    
    Enter this in terminal to install Yeoman:
    
    ```
    npm install -g yo
    ```
    <br/>
3.  **Install Generator-Velo**
    
    Doing so will install this generator globally, you can then scaffold in any folder.
    
    ```
    npm install -g generator-velo
    ```
    <br/>
4.  **Create a new project**

    Create a new folder and navigate to that folder in terminal. Then enter the following terminal command:
    
    ```
    yo velo
    ```
    <br/>
    
    You will be prompted to answer some questions:
    
    1.  **Name of Project**
         
         Enter in a name for the project without space character. This can be changed in package.json under 'name' parameter later.
    
    2.  **Name of Author**
         
         Enter in name of author. Can be changed in package.json under 'author' parameter.
    
    3.  **Path of deployment Assets folder** relative to current Prototype folder
         
         When 'npm run deploy' command is run later, compiled build assets will automatically output to the directory path specified here (Assets meaning css, js, image, font files etc). Prototype folder refers to the folder in which 'yo velo' was run.
    4.  **Path of deployment HTML folder** relative to deployment Assets folder
         
         Similar to the previous prompt, but for index.html compiled output.
    5.  **Include Pug**
         
         Input 'Y' if you will like to template Vue single file component in Pug.js syntax instead of regular html syntax.
    
    6.  **Include Vue-Router**
         
         Input 'Y' if you wish to include vue-router plugin
    
    7.  **Include Vuex**
         
         Input 'Y' if you wish to include vuex plugin
    
      
    <br/>
    After answering the prompts, folders and files generation should start. Generator will automatically run 'npm install' to install required dependencies.
    
    
    
    If project generation is successfully completed, you will see '*All Done! Use "npm run serve" to start up dev server!*' message in terminal.
    
    <br/>
    
    Enter this command in terminal to start up the development server:
    ```shell
    npm run serve
    ```
    Once Webpack has finished compiling, open your browser and go to http://localhost:8080/. You should see a welcome message. 
    
    
    <br/>
    
    **Congratulations!** You have successfully created your first project folder using Generator-Velo!
    
<br/>
    
    

# Folder Structure
A project scaffolded by Generator-Velo will have the following folder structure:


```
|__ node_modules                        # NPM dependencies 
|__ public
    |__ index.html                      # Only html for single page app
    |__ favicon.ico
|__ src
    |__ assets
        |__ apis                        # Dummy JSON files for mock API request
            |__ sample-response.json
        |__ fonts                       # Custom font files
            |__ sample.ttf
        |__ icomoon                     # Extract downloaded icomoon.zip here
            |__ fonts
            |__ ...
        |__ images                      # Images
            |__ sample.jpg
        |__ styles
            |__ helpers                 # These 3 SCSS files are auto-imported into
                |__ _helpers.scss       # every .vue Single File Component
                |__ _mixins.scss        # More SCSS helper files can be added via
                |__ _variables.scss     # vue.config.js 'css'->'additionalData' 

            |__ _icons.scss             # Icomoon icon classes imported into App.vue
                                        # To be maintained by copying icon classes
                                        # from icomoon/style.css when Icomoon change
          								
    |__ components                      # Vue Single File Components (SFC)
        |__ Example.vue
    |__ router                          # Optional, with Vue-router
        |__ index.js                    # Contain routes for single page app
    	
    |__ store                           # Optional, with Vuex
        |__ index.js                    # Contain Vuex state, mutations, actions
    	
    |__ views                           # Optional, with Vue-router 
        |__ Homepage.vue                # Page components used in router/index.js
    	
    |__ main.js                         # Main JS file instantiating Vue instance
    |__ App.vue                         # Root Vue component, global styles go here
    
|__ .browserslistrc        # Supported browsers config (affect babel & css autoprefix)
|__ .editorconfig
|__ eslintrc.js            # Eslint config
|__ .gitignore             # Files/Folders to be ignored by GIT
|__ .yo-rc.json            # Data for generator's reference
|__ babel.config.js        # Babel config
|__ vue.config.js          # Extended Webpack config using vue-cli webpack config as base
|__ jsconfig.json
|__ package-lock.json
|__ package.json           # Project config to manage dependencies, 
                           # deployment build path, etc
|__ README.md
```



<br />

# Commands

The following commands can be used in terminal after navigating to the project root folder:


- **Generate a new project**

  ```
  yo velo
  ```
<br/>


- **Add a component**

  (This adds a .vue component file to src/components folder with basic Vue single file component setup)

  ```
  yo velo:component <component-name>
  ```

  For example,

  ```
  yo velo:component navigation-bar
  ```

<br/>

- **Add a view component**

  (A .vue component file will be added to src/views folder with basic Vue single file component setup)

  ```
  yo velo:view <view-component-name>
  ```

  For example,

  ```
  yo velo:view events-listing
  ```
<br/>


------

<br/>

These script commands are available **after project is created**: 



- **Run development server** with hot reload

  (After dev server is running, you can go to http://localhost:8080/webpack-dev-server to see a directory of compiled files for debugging reference. No /dist folder will be generated in development mode as Webpack holds compiled code in memory.)

  ```
  npm run serve
  ```

<br/>

- **Compile for production build**, output all compiled files to **/dist** folder

  ```
  npm run build
  ```

<br/>

- **Compile for production build**, output to **paths specified** in package.json 'deployment'

  (This command is useful for CI/CD deployment)

  ```
  npm run deploy 
  ```


<br/>

# Assets Usage

Here are examples on how you can use various asset files in /src/assets/... folders



- **Mock API request** (using src/assets/apis/file.json)
  
  Within a .vue component file in src/components or src/views folder, make API request to endpoint '/apis/file.json' for development testing (do remember to change to production endpoint later).

  For example using Axios in src/components/Example.vue \<script>...\</script>,

  ```
  axios.get('/apis/file.json')
  ```

  This will return file.json as API response.

  *Note: In <u>development</u> mode, POST requests are redirected to the same specified endpoint as a separate GET request (not applied to production code). You can turn this behaviour off in vue.config.js, by commenting out or removing this chunk of code -

  ```
  devServer: {
  
    setup (app) {
  
     app.post('*', (req, res) => {
  
      // Redirect POST request as GET request in dev mode
  
      res.redirect(req.originalUrl);
  
     });
  
    }
  
   },
  ```

  This is purely for development testing purposes, as it ensures a JSON response is returned when POST request is made to src/assets/apis/file.json (instead of API request error). 

  <br />

- **Custom font** (using src/assets/fonts/sample.ttf)

  If importing font file into src/App.vue \<style>...\</style>,

  ```
  @font-face {
    font-family: "Sample";
    src: url("./assets/fonts/sample.ttf");
  }
  ```

  This pathing is relative from src/App.vue to src/assets/fonts/sample.ttf.

  If importing font file into src/components/Example.vue, pathing will be relative from src/components/Example.vue to src/assets/fonts/sample.ttf.

  <br />

- **Icomoon** (using src/assets/icomoon/fonts/)

  src/assets/styles/_icons.scss is imported into src/App.vue with

  ```
  //App.vue
  @import "./assets/styles/_icons.scss";
  ```

  src/assets/styles/_icons.scss is importing icomoon font files from src/assets/icomoon/fonts/ with

  ```
  //_icons.scss
  $fontPath: './assets/icomoon/fonts';
  
  @font-face {
    font-family: 'icomoon';
    font-weight: normal;
    font-style: normal;
  
    src: url($fontPath+'/icomoon.eot');
    src: url($fontPath+'/icomoon.eot?6q1lit#iefix')
        format('embedded-opentype'),
      url($fontPath+'/icomoon.ttf?6q1lit') format('truetype'),
      url($fontPath+'/icomoon.woff?6q1lit') format('woff'),
      url($fontPath+'/icomoon.svg?6q1lit#icomoon')
        format('svg');
  }
  ```

  Icomoon icons' classes section ('Imported Icomoon Icons') in _icons.scss need to be copied from and maintained in sync with src/assets/icomoon/style.css

  <br />

- **Images** (from src/assets/images/sample.jpg)

  If image is being used in markup as \<img> or \<svg>, pathing will be relative from .vue component file to src/assets/images/sample.jpg

  For example in src/components/Example.vue \<template>...\</template>,

  ```
  <img src="../assets/images/sample.jpg" />
  ```

  If image is used in scss with url(...), pathing will be relative from .vue component file to src/assets/images/sample.jpg also.

  For example in src/components/Example.vue \<style>...\</style>,

  ```
  background: url("../assets/images/sample.jpg");
  ```

<br />

- **SCSS Reusable Helpers** (from src/assets/styles/helpers/)

  _helpers.scss, _mixins.scss, _variables.scss from src/assets/styles/helpers/ are *automatically* imported into every .vue component file by default.

  *Note: Since these helper SCSS are imported into every .vue component, these helper files should only contain SCSS mixins, placeholder selectors and variables that will not be included in the CSS output if they are not used in a Vue component. You should not include global styles into these helper files, but put those in App.vue \<style>...\</style> (else those styles will be duplicated for each component during compilation).

  To add more SCSS helper files to the automatically imported list, in vue.config.js, add files to 'additionalData'

  ```
  css: {
      loaderOptions: {
        sass: {
          additionalData: `@import "@/assets/styles/helpers/_variables.scss";
          @import "@/assets/styles/helpers/_mixins.scss";
          @import "@/assets/styles/helpers/_helpers.scss";
          `
        }
      }
    },
  ```

  

<br />

# FAQ

 1. *Can I use another HTTP client instead? I do not want to use Axios.*

    Absolutely yes. You will have to uninstall Axios as a dependency and install another HTTP client of your choice in the project.

    

 2. *Do I need to install promise polyfill for Axios to work in older browsers?*

    There is no need for you to do so manually as it has already been included by default in babel configuration.  

    

 3. *Where can I specify the SCSS helper files that will be auto-imported into every .vue single file component?*

    See section Assets Usage - SCSS Reusable Helpers.

    

 4. *Where can I specify the output path for production build?*

    See section Commands - 'npm run build' and 'npm run deploy'.

    

 5. *Where can I change browser compatibility / the list of browsers supported by Babel and CSS Autoprefixer?*

    You can do so in file .browserslistrc (in project root folder, on the same folder level as package.json) according to the format listed here https://github.com/browserslist/browserslist

    

  6. *I made a POST request in javascript but i see two requests were made in network tab of console - one POST and one GET request, what is happening?*

     See section Assets Usage - Mock API Request.


<br />
     

# License

MIT © [Iris Ng](https://github.com/irisng)