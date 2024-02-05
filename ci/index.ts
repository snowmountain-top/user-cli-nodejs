import * as fs from 'fs'
import * as path from 'path'
import inquirer from 'inquirer'
import { spawn } from 'child_process'

let content = fs.readFileSync(path.resolve(__dirname, '../package.json'), { encoding: 'utf-8' })
const packageContent = JSON.parse(content as string)
const version = packageContent.version;
const reg = /([0-9])\.([0-9])\.([0-9]+)(?:(\-\w*)\.([0-9]+))?/g;
const execs: any[] = reg.exec(version) as Array<any>;
console.log("当前 version: ", version)
const addOne = (num: string) => Number(num) + 1;
const getVersion = ([major, minor, patch]: Array<string| number>) => `${major}.${minor}.${patch}`

const getVersionLists = () => ([
    //major
    {
        name:  'major version update: ' + getVersion([addOne(execs[1]), 0, 0]),
        value: 'major',
    },
    //  minor
    {
        name: 'minor version update: ' + getVersion([execs[1], addOne(execs[2]), execs[3]]),
        value: 'minor'
    },
    // patch
    {
        name:  'patch version update: ' + getVersion([execs[1], execs[2], addOne(execs[3])]),
        value: 'patch'
    },
    // beta
    {
        name: 'beta version update: '  + getVersion([execs[1], execs[2], addOne(execs[3])]) + `-beta.${addOne(execs[5] || -1)}`,
        value: 'beta'
    }
])


const onSelectVersion = async () => {
    const versions = getVersionLists();
    inquirer.prompt([
        {
            name: 'mode',
            type: 'list',
            message: '请选择需要发布的版本',
            choices: versions,
            default: [version[0]]
        }
    ]).then(result => {
        // 更新版本号
        // const standardVersion = path.resolve(__dirname, '../node_modules/.bin/standard-version')
        const script = `npm run update:${result.mode} && npm run build &&  cd dist && npm publish && cd ..`
        runScript(script)
    })
}
onSelectVersion()

function runScript(script: string) {
    if(!script) return

    const childProcess = spawn(script,{
        shell: true
    });

    childProcess.stderr.on('data', chunk=>{
        console.log("stderr data", chunk.toString())
    })

    childProcess.stdout.on('data', chunk=>{
        console.log(chunk.toString())
    })

}
