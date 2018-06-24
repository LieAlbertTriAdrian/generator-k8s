'use strict';

const Generator = require('yeoman-generator');

module.exports = class extends Generator {
    constructor (args, opts) {
        super(args, opts);

        this.log('Initializing kubernetes template ...');
    }

    start () {
        this.prompt([
            {
              type    : 'input',
              name    : 'service_name',
              message : 'Enter the service name for your project (i.e.: albert-product-service): '
            }
        ]).then((answers) => {
            this.destinationRoot('.service');

            const templatePath = this.templatePath('service.yml');
            const destinationPath = this.destinationPath(`servers/${answers.service_name}.yml`);
            const fileData = {
                service_name: answers.service_name
            };

            this.fs.copyTpl(templatePath, destinationPath, fileData);
        });
    }
}