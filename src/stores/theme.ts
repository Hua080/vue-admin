import { defineStore } from "pinia";
import {ThemeEnum} from "@/enum"

const useThemeStore = defineStore('theme',{
    state:()=>{
        return {
            theme: ThemeEnum.LIGHT
        }
    },
    getters:{
        getCurrentTheme(state):ThemeEnum{
            return state.theme
        }
    },
    actions:{
        setCurrentTheme(mode:ThemeEnum):void{
            this.theme = mode;
        }
    }

})
 export {useThemeStore}