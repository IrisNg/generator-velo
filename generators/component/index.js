var Generator = require('yeoman-generator');

module.exports = class extends (Generator) {
  constructor(args, opts) {
    super(args, opts);

    //component name is required arg
    this.argument('nameKebab', { type: String, required: true, desc: 'Name of Component in kebab case. E.g. "component-one".' })

  }


  writing() {
    let { nameKebab } = this.options,
      nameLowerKebab = nameKebab.toLowerCase(),
      namePascal = nameKebab.split('-').map((word) => { return word[0].toUpperCase() + word.substring(1).toLowerCase() }).join('');


    //Read previously stored prompt answer from .yo-rc.json
    const { pug } = this.config.get('app')

    let templateContext = {
      nameLowerKebab,
      namePascal,
      pug,
    }

    this.fs.copyTpl(this.templatePath('src/components/Component.vue'), this.destinationPath(`src/components/${namePascal}.vue`), templateContext);


  }
};
