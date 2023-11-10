import axios from "axios";

export const commonRequest = async (method,url,formData,header) => {
    try {
        const headers=header?header:{}
        const config = {
            method,
            url,
            body: formData,
            headers
        }
        const response = await axios(config)
        return response

        }
    catch (error) {
        return error
        
    }
}