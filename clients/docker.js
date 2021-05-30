"use strict"
var Docker = require('dockerode');
var docker = new Docker();

module.exports = class {

    constructor({
        log
    }) {
        this.log = log
    }

    async build() {
        await this.buildImage()
    }

    async buildImage() {

        return new Promise((resolve, reject) => {

            docker.buildImage({
                context: __dirname,
                src: ['Dockerfile', './temp/src']
            }, {
                t: imageName
            }, (err, response) => {
                
                err ? reject(err) : resolve(response)
                
            });
        })
    }

}