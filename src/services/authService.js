import jwtDecode from "jwt-decode";

const tokenKey = "whatsAppToken";

export default function isAuthenticated() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}
