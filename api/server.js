const express = require("express");
const cors = require("cors"); // stands for Cross-Origin Resource Sharing

const app = express(); // This creates an instance of Express application

app.use(cors()); // allows frontend to communicate with backend.
app.use(express.json()); // tells Express to automatically parse incoming JSON data

// When someone sends data to /shorten...
app.post("/shorten", async (req, res) => { // Handles POST requests to /shorten
  const { url } = req.body; // This extracts url from the frontend's request body
  if (!url) return res.status(400).json({ error: "URL is required" }); // If url is empty, it sends back a 400 Bad Request status

  try { // tries to run the code, and if an error happens, it will jump to catch
    const response = await fetch("https://cleanuri.com/api/v1/shorten", { // like saying, please take this URL and give me back a shortened one
      method: "POST", // I want to send you some data
      headers: { "Content-Type": "application/x-www-form-urlencoded" }, // The data I'm sending is in form format, like HTML form submissions
      body: new URLSearchParams({ url }).toString(),
    });

    const data = await response.json(); // converts the response from CleanURI into a JavaScript object.
    res.json(data); // This sends the shortened link back to frontend.
  } catch (err) {
    console.error("Proxy error:", err.message);
    res.status(500).json({ error: "Server failed to fetch short URL" });
  }
});

app.listen(5000, () => {
  console.log("Server is running at http://localhost:5000");
});