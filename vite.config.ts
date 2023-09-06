import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

import baseConfig from './vite.base.config'
import prodConfig from './vite.prod.config'
import devConfig from './vite.dev.config'
// https://vitejs.dev/config/
const envResolver = {
    "serve":()=>{
        console.log('开发模式');
        return ({...baseConfig,...devConfig})
    },
    "build":()=>{
        console.log('生产模式');
        return ({...baseConfig,...prodConfig})
    }
}
export default defineConfig(({command, mode})=>{
    const env = loadEnv(mode,process.cwd(),'');
    return envResolver[command]()
})
