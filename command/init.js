'use strict' 
const exec = require('child_process').exec 
const co = require('co') 
const prompt = require('co-prompt') 
const config = require('../templates') 
const chalk = require('chalk') 
 
module.exports = () => { 
 co(function *() { 
    // 处理用户输入 
      // let tplName = yield prompt('Template name: ') 
      let projectName = yield prompt('Project name<默认为 myapp>: ')
    if (projectName.length == 0) { 
        projectName = 'myapp'
        console.log(chalk.red('\n 没有输入项目名字，默认为myapp项目---老程---'));
        // process.exit() 
    } 
    // gitUrl = config.tpl[tplName].url 
    // branch = config.tpl[tplName].branch 
 
    // git命令，远程拉取项目并自定义项目名 
    let cmdStr = `git clone https://github.com/chengjs/vue-best-app.git ${projectName} && cd ${projectName} ` 
 
    console.log(chalk.white('\n Start generating...')) 
 
    exec(cmdStr, (error, stdout, stderr) => { 
      if (error) { 
        console.log(error) 
        process.exit() 
      } 
      console.log(chalk.green('\n √ 模板下载完成!')) 
      console.log(`\n cd ${projectName} && npm install \n`) 
      process.exit() 
    }) 
  }) 
} 