import express from "express";
import cors from "cors"

const app = express();

const PORT = 5000;

let led_state = "0";

app.use(cors({

    origin: ["http://localhost:5500", "http://127.0.0.1:5500", "https://villegasal.github.io/esp32-GUI/"],   
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.get("/toggle", (req, res) => {

    if (led_state === "0") {
        
        led_state = "1";

    }else{

        led_state = "0"
    }

    res.status(200).send(led_state);
});


app.listen(PORT, () => {

    console.log(`Server is running on port ${PORT}...`);
    
});