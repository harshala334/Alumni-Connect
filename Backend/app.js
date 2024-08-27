const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const cookiesParser = require("cookie-parser");
const app = express();
const router = require("./src/routes");

// Load environment variables
dotenv.config();

// Log the MONGODB_URI to verify it's loaded correctly
console.log('MONGODB_URI:', process.env.MONGODB_URI);

app.use(express.json());
app.use(cors());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static(`${__dirname}/public`));
app.use(cookiesParser());
app.use("/", router);

const PORT = process.env.PORT || 4000;

async function connectDB() {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true, // Added this option for connection stability
            autoIndex: true,
        });
        console.log(`\nMongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED", error);
        process.exit(1);
    }
}

connectDB();

const connection = mongoose.connection;
connection.once("open", function() {
    console.log("MongoDB connection established successfully.");
});

app.listen(PORT, function() {
    console.log("Server is running on port:", PORT);
});

module.exports = app;