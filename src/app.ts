import express from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = 3333;

app.listen(port, () => {
    const data = new Date();
    console.log(`Node server started in ${data.toLocaleString()} at http://localhost:${port}`);
})

app.get("/", (req, res) => {
    const data = new Date();
    res.status(200).json({
        msg: "Hello World",
        time: data
    })
});