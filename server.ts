import express from "express";
// console.log(express);
const app = express();
const PORT = process.env.PORT || 6060;
import db from "./models";
import { users } from "./seeders/users";

const createUser = () => {
  users.map((user) => {
    db.User.create(user);
  });
};

// const findUsers = ()=>{
//   db.User.findAll({})
// }
// console.log(findUsers());
// createUser();
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log("App is running on port " + PORT);
  });
});
