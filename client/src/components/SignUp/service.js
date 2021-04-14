import api from "../../Api";

export async function RegisterUser(name, email, password) {
  try {
    return await api({
      method: "POST",
      url: "users/register",
      data: { name: name, username: email, password: password },
    });
  } catch (err) {
    throw err;
  }
}
