import axios from "axios";
import {BASE_USER } from "../constants";

async function VerifyClient() {
  let error = false;
  let userData;
  const token = localStorage.getItem("token");

await axios
.get(BASE_USER+"/verifyClient", {
  headers: {
    authorization: token,
  },
  withCredentials: true,
})
.then((res) => {
  if (res.data.client._id) {
    userData = res.data.client;
  }
})
.catch((err) => {
  if (err.response && (err.response.status === 401 || err.response.status)) {
    error = true;
  }
});


  return { error, userData };
}

export default VerifyClient;
