const express = require("express");
const _ = require("lodash");

const router = express.Router();

let data = [
    { id: 1, username: "Alabi Emmanuel", password: "alabs" },
    { id: 2, username: "Brad Traversy", password: "brad" },
    { id: 3, username: "Jane Doe", password: "Jane1234" },
    { id: 4, username: "Fedrick Lamar", password: "peace" },
    { id: 5, username: "Wrights Philips", password: "cool" }
];

router.post("/login", ({ body: { username, password } }, res) => {
    console.log(username, password);
    if(!username || !password) return res.json({ success: false, msg: "No user found" });

    if(_.find(data, { username, password }) ) {
        return res.json({ success: true, data });
    }else {
        return res.json({ success: false, msg: "Username/Password not correct" });
    }
});

router.delete("/:id", ({ params: { id } }, res) => {
    let deleted = _.find(data, { id: Number(id) });
    return res.json(deleted);
});

router.put("/edit/:id", ({ params: { id }, body: { username, password } }, res) => {
   data.find(user => {
       if(Number(id) === user.id) {
           user.username = username;
           user.password = password
       }
   });
   return res.json({ success: true, data });
});

// Export router
module.exports = router;