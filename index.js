const express = require("express");
const fetch = require("node-fetch");
const app = express();

app.get("/likes", async (req, res) => {
  const universeId = "YOUR_UNIVERSE_ID"; // Replace this
  const url = `https://games.roblox.com/v1/games?universeIds=${universeId}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json({
      likes: data.data[0].votes.upVotes,
      dislikes: data.data[0].votes.downVotes
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("✅ Proxy running");
});
