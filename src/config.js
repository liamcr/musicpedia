const test = false;

export const config = {
  clientID: "21699c8efa3f42b6a2c38e6420206fee",
  redirectURI: test
    ? "http://localhost:3000/home"
    : "https://musicpedia-app.web.app/home",
  scopes: [
    "user-top-read",
    "user-library-read",
    "streaming",
    "user-read-email",
    "user-read-private",
    "user-modify-playback-state"
  ],
  homePageURL: test ? "http://localhost:3000" : "https://musicpedia-app.web.app"
};
