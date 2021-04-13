import axios from "axios";

export function SignIn(request) {
  return axios({
    method: "POST",
    url: "http://localhost:5000/users/register",
    data: request,
  })
    .then((res) => {})
    .catch((err) => {});
}
