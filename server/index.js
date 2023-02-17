require("dotenv").config();
const { sequelize } = require("./utli/database");
const { user } = require("./models/user");
const { list } = require("./models/list");
// const { planet } = require("./models/planet");
const express = require("express");
const cors = require("cors");

//relationships
user.hasMany(list);
list.belongsTo(user);
// list.belongsTo(planet);

//creating and using app
const app = express();

app.use(express.json());
app.use(cors())

const { SERVER_PORT } = process.env;

const {
    getCurrentUserLists,
    addList,
    deleteList
} = require("./Controllers/lists");

const { register, login } = require("./Controllers/auth")
const { isAuthenticated } = require("./Middleware/isAuthenticated")


//authorization
app.post('/register', register);
app.post('/login', login);

//get list

app.get('/userlists/:userId', getCurrentUserLists);
app.post("/lists", isAuthenticated, addList);
app.delete("/lists/:id", isAuthenticated, deleteList);

//listening for server and database and sending response or error

sequelize.sync(

).then(() => {
    app.listen(SERVER_PORT, () =>
        console.log(`The database is sucessful and server running on on ${SERVER_PORT}`)
    )
}).catch((error) => console.log(error))