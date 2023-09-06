import { ref, computed, unref, Ref } from 'vue';
/**
 * 1. 列举5种登录状态
 * 2. 更新当前状态函数
 * 3. 获取当前状态函数
 */

export enum LoginStateEnum  {
    LOGIN,
    REGISTER,
    RESET_PASSWORD,
    MOBILE,
    QR_CODE
}
// currentState 需要相应式
var currentState = ref(LoginStateEnum['LOGIN']); 
// 如果不响应式？ 不行
export function changeLoginState(state: LoginStateEnum): void {
    console.log('changeLoginState', state);
    currentState.value = state;
}

export function getLoginState(): LoginStateEnum {
    console.log('getLoginState',currentState.value);
    
    return currentState.value;
}