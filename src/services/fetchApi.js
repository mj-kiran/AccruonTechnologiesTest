import { BASE_URL } from "./common/base_Url"
import { commonRequest } from "./common/commonHttpRequest"

export const fetchdata = async () => {
    try {
        const response = await commonRequest("GET", `${BASE_URL}/users`)
        // console.log(response.data,"inApi");
        return response.data
    } catch (error) {
        return console.log(error);
    }
}