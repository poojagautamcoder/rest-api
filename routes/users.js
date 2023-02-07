import express from "express";
import { v4 as uuidv4 } from "uuid";
const router = express.Router();
let users = [];
router.get("/", (req, res) => {
  console.log(users, "calling");
  res.send(users);
});

router.post("/", (req, res) => {
  const user = req.body;
  const userWithId = { ...user, id: uuidv4() };
  users.push(userWithId);
  res.send(`user with the name ${user.FirstName} added to the database`);
});

router.get("/:id", (req, res) => {
 const findUser = users.find((user) => {
    user.id === req.params;
  });
  // users.find(user) => user.id === req.params
  res.send(findUser);
  console.log(req.params)
});

router.delete('/:id', (req, res) => {
  const {id} = req.params
   users = users.filter((user) => user.id !== id);
  res.send(`user with ${id} has been deleted from the data base`);
  // console.log(findUser)
 });
 router.patch('/:id', (req, res) => {
  const {id} = req.params
  users = users.filter((user) => user.id === id);
  const { FirstName,LastName,age} = req.body
  if(FirstName){
    users.FirstName = FirstName
  }
  if(LastName){
    users.LastName = LastName
  }
  if(age){
    users.age = age
  }
  res.send(`user with ${id} has been update in the datbase`);
  console.log(findUser)

 });
export default router;
