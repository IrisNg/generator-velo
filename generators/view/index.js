var Generator = require('yeoman-generator');

module.exports = class extends (Generator) {
  constructor(args, opts) {
    super(args, opts);

    const stringPackageJSON = JSON.stringify(this.fs.readJSON(this.destinationPath('package.json'), {})),
      hasRouter = stringPackageJSON.indexOf('vue-router') > -1;

    if (!hasRouter) {
      //Throw error and exit generator
      this.env.error('*** Vue-router dependency is not detected in package.json. Views folder should not be used, try ":component component-name" subcommand instead. ***')
    }

    //View name is required arg
    this.argument('nameKebab', { type: String, required: true, desc: 'Name of View in kebab case. E.g. "event-listing".' })

  }

  _capitalize_first_letter(word) {
    return word[0].toUpperCase() + word.substring(1).toLowerCase()
  }

  writing() {
    let { nameKebab } = this.options,
      nameReadable = nameKebab.split('-').map(this._capitalize_first_letter.bind(this)).join(' '),
      nameLowerKebab = nameKebab.toLowerCase(),
      namePascal = nameReadable.replace(/\s/g, '');


    //Read previously stored prompt answer from .yo-rc.json
    const { pug } = this.config.get('app')

    let templateContext = {
      nameReadable,
      nameLowerKebab,
      namePascal,
      pug,
    }

    this.fs.copyTpl(this.templatePath('src/views/View.vue'), this.destinationPath(`src/views/${namePascal}.vue`), templateContext);

  }
};
