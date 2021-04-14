import api from "../../Api";

export async function SignInUser(email, password) {
  console.log(email, password);
  try {
    return await api({
      method: "POST",
      url: "users/login",
      data: { username: email, password: password },
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
}
