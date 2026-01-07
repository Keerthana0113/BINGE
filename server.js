const express = require("express")
const app = express()

app.use(express.static("public"))
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/movie.html")
})
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set("view engine","ejs")

const userRouter = require("./routes/users")

app.use("/users", userRouter)

app.listen(7777)