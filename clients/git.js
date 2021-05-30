"use strict"
const simpleGit = require('simple-git');
const git = simpleGit();

module.exports = class {

    constructor({
        log,
        config,
        repoPath
    }) {
        this.log = log
        this.config = config
        this.repoPath = repoPath
    }

    async clone() {
        await this.cloneRepository()
    }

    async cloneRepository() {
        await git.clone(this.repoPath, [this.config.localPath])
    }
}