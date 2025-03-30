import express from "express";
import cors from "cors"

const app = express();

const PORT = 5000;

let led_state = "0";

app.use(cors({
    origin: ["http://localhost:5500", "http://127.0.0.1:5500/" , "https://villegasal.github.io/esp32-GUI/"],  // Allows all origins (for testing, you can change it later)
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.get("/toggle", (req, res) => {
    led_state = (led_state === "0") ? "1" : "0";

    // Manually set CORS headers (for extra security)
    res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

    res.status(200).send(led_state);
});


app.listen(PORT, () => {

    console.log(`Server is running on port ${PORT}...`);
    
});