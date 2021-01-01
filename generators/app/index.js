var Generator = require('yeoman-generator');

const copyPaths = [
  { template: 'public', destination: 'public' },
  { template: 'root', destination: '' },
  { template: 'src/assets', destination: 'src/assets' },
  { template: 'src/components', destination: 'src/components' },
];

const basePackageJSON = require('./templates/package.json'),
  vueRouterPackageJSON = require('./templates/vue-router-package.json'),
  vuexPackageJSON = require('./templates/vuex-package.json'),
  pugPackageJSON = require('./templates/pug-package.json');

module.exports = class extends (Generator) {
  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    //Creates .yo-rc.json
    //In future cycles, yeoman will find .yo-rc.json's folder and take that folder as the generator's context
    this.config.save();
  }

  async prompting() {
    this.answers = await this.prompt([
      { type: 'input', name: 'projectName', message: 'Name of project', validate: this._validate_name },
      { type: 'input', name: 'author', message: 'Name of author', default: '' },
      {
        type: 'input',
        name: 'deploymentAssetsFolder',
        message: 'Path of deployment assets folder relative to current prototype folder? (Can be changed in package.json later)',
        default: '../build/public',
      },
      {
        type: 'input',
        name: 'deploymentHtmlFolderRelativeToAssets',
        message: 'Path of deployment html folder relative to deployment assets folder? (Can be changed in package.json later)',
        default: '../views',
      },
      { type: 'confirm', name: 'pug', message: 'Include Pug', default: true },
      { type: 'confirm', name: 'router', message: 'Include Vue-Router', default: false },
      { type: 'confirm', name: 'vuex', message: 'Include Vuex', default: false },
    ]);

    //Store in .yo-rc.json as 'app'
    const { projectName, pug, router, vuex } = this.answers
    this.config.set('app', { projectName, pug, router, vuex })
  }

  _validate_name(input) {
    if (!input) {
      return 'Name of project is required';
    }
    return true;
  }

  writing() {
    const { projectName, author, deploymentAssetsFolder, deploymentHtmlFolderRelativeToAssets, router, vuex, pug } = this.answers,
      pathPackageJSON = this.destinationPath('package.json'),
      deployment = { assetsFolder: deploymentAssetsFolder, htmlFolderRelativeToAssets: deploymentHtmlFolderRelativeToAssets };

    //Copy folder/file
    for (const obj of copyPaths) {
      //Copy files that start with . also
      this.fs.copy(this.templatePath(obj.template), this.destinationPath(obj.destination), { globOptions: { dot: true } });
    }

    //Copy and template 'main.js'
    this.fs.copyTpl(this.templatePath('src/main.js'), this.destinationPath('src/main.js'), this.answers);
    //Copy and template 'App.vue'
    this.fs.copyTpl(this.templatePath('src/App.vue'), this.destinationPath('src/App.vue'), this.answers);

    // Extend or create package.json file in destination path
    this.fs.extendJSON(pathPackageJSON, { name: projectName, author: author, ...basePackageJSON, deployment });

    if (router) {
      //copy router folder
      this.fs.copy(this.templatePath('src/router'), this.destinationPath('src/router'));
      //copy views folder
      this.fs.copy(this.templatePath('src/views'), this.destinationPath('src/views'));

      //Add vue router dependencies
      this.fs.extendJSON(pathPackageJSON, vueRouterPackageJSON);
    }

    if (vuex) {
      //copy store folder
      this.fs.copy(this.templatePath('src/store'), this.destinationPath('src/store'));
      //Add vuex dependencies
      this.fs.extendJSON(pathPackageJSON, vuexPackageJSON);
    }

    if (pug) {
      this.fs.extendJSON(pathPackageJSON, pugPackageJSON);
    }
  }

  install() {
    this.npmInstall();
  }

  end() {
    this.spawnCommandSync('npm', ['run', 'lint'], { fix: true });
    this.log('*** All Done! Use "npm run serve" to start up dev server! ***');
    this.log('*** Use terminal command "npm run lint --fix" to resolve eslint errors automatically. ***')
  }
};
