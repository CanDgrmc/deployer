"use strict"
const simpleGit = require('simple-git');
const git = simpleGit();

module.exports = class {

    constructor({
        log,
        config
    }) {
        this.log = log
        this.config = config
    }

    async clone(repoPath) {
        await this.cloneRepository(repoPath)
    }

    async cloneRepository(repoPath) {
        await git.clone(repoPath, [this.config.localPath])
    }
}