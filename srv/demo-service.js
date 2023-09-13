const cds = require("@sap/cds");
cds.env.requires.auth.users["*"] = false;

module.exports = async (srv) => {
  const { Employees, Departments } = srv.entities;

  srv.on("READ", Employees, async (req, next) => {
    console.log("Logged in user: ", req.user?.id);
    return await next();
  });
};
