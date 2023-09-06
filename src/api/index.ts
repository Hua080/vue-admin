import request from "@/utils/request";

export const getUrl = () => {
    return request({
        url: "/users/test" // 请求地址
    })
}

export default { getUrl };