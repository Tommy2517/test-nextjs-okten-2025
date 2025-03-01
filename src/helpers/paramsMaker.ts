import {CustomSearchParamsType} from "@/models/CustomSearchParamsType";

type ParamsType = {
    params: CustomSearchParamsType
}
export const paramsMaker = ({params}: ParamsType) => {
    switch (true) {
        case params.search !== undefined:
            if (isNaN(parseInt(params.search))) {
                console.log(params.search,'111')
                return `/search?q=${params.search}&limit=${params.limit}&skip=${params.skip}`
            }
            else {
                console.log(params.search,'222')
                return `/filter?key=id&value=${params.search}`
            }
        case params.skip !== undefined: {
            console.log('3')
            return `?limit=${params.limit}&skip=${params.skip}`
        }
        default:
            return ''
    }
}