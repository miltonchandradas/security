const cds = require("@sap/cds");

module.exports = async (srv) => {
  const { Employees, Departments } = srv.entities;

  srv.on("READ", Employees, async (req, next) => {
    console.log("Logged in user: ", req.user?.id);
    console.log("Email: ", req.user?.attributes?.email);
    return await next();
  });
};
