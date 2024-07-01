import axios from "axios";

async function VerifyClient() {
  let error = false;
  let userData;
  const token = localStorage.getItem("token");

  await axios
    .get("https://zummit-chandan.onrender.com/api/users/verifyClient", {
      withCredentials: true,
    })
    .then((res) => {
      if (res.data.client._id) {
        userData = res.data.client;
      }
    })
    .catch((err) => {
      if (err.response.status || err.response.status === 401) {
        error = true;
      }
    });

  return { error, userData };
}

export default VerifyClient;
