const cds = require("@sap/cds");

module.exports = async (srv) => {
  const { Employees, Departments } = srv.entities;

  srv.on("*", async (req, next) => {
    req.headers["id"] = req.user?.id;
    req.headers["email"] = req.user?.attributes?.email;
    next();
  });

  srv.on("READ", Employees, async (req, next) => {
    console.log("Logged in user: ", req.headers?.id);
    console.log("Email: ", req.headers?.email);
    return await next();
  });
};
