const cds = require("@sap/cds");
const jwtDecode = require("jwt-decode");

module.exports = async (srv) => {
  const { Employees, Departments } = srv.entities;

  srv.before("*", async (req) => {
    if (process.env.ENVIRONMENT === "development") {
      req.headers["id"] = req.user?.id;
      req.headers["email"] = req.user?.attributes?.email;
    } else if (process.env.ENVIRONMENT === "production") {
      // TODO: Read values from JWT token and store in headers...
      let jwt = req.headers.authorization;
      console.log("JWT Token: ", jwt);
      let jwtDecoded = jwtDecode(jwt);
      console.log("Decoded JWT Token: ", jwtDecoded);
    }
  });

  srv.on("READ", Employees, async (req, next) => {
    console.log("Logged in user: ", req.headers?.id);
    console.log("Email: ", req.headers?.email);
    return await next();
  });
};
