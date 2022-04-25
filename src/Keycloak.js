import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
  url: "https://auth.oli-system.com/auth/",
  realm: "oli_move_dev",
  clientId: "dashboard_oli_move",
});

export default keycloak;
