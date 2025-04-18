import { glob } from "glob";
import fs from 'fs/promises'
import { build } from 'esbuild'
// 1. 获取所有的测试脚本 *.spec.js
// 2. 执行所有的测试脚本

const files = glob.sync("*.spec.js");
for (const file of files) {
    const fileContent = await fs.readFile(file, 'utf-8')
    await runModule(fileContent + ";import {run} from './core.js';run()")
}

async function runModule(fileContent) {
    const result = await build({
        stdin: {
            contents: fileContent,
            resolveDir: process.cwd(), // 工作目录  相对路径
        },
        write: false,// 不需要写入文件
        bundle: true, // 打包
        target: "esnext",
    })

    // console.log(result.outputFiles[0].text);
    // console.log(result);
    new Function(result.outputFiles[0].text)()
}

