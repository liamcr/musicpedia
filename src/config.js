const test = false;

export const config = {
  clientID: "f2cf3c13ec1444678b9abce91a647d26",
  redirectURI: test
    ? "http://localhost:3000/home"
    : "https://musidex.web.app/home",
  scopes: [
    "user-top-read",
    "user-library-read",
    "streaming",
    "user-read-email",
    "user-read-private",
    "user-modify-playback-state"
  ],
  homePageURL: test ? "http://localhost:3000" : "https://musidex.web.app"
};
