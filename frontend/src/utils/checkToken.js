import Cookies from "js-cookie";

//give the name of token as argumment
//this function will check if token is present or not
export const checkToken = (tokenName) => {
    return !!Cookies.get(tokenName)
}