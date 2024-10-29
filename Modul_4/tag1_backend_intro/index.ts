import express from "express";

const app = express();
const port = 3000;

const starships = [
  { id: 1, name: "Millennium Falcon" },
  { id: 2, name: "X-Wing" },
  { id: 3, name: "TIE Fighter" },
];

app.get("/hallo", (request, response) => {
  response.json({ answer: "Hallo Welt!" });
});

app.get("/starships", (request, response) => {
  response.json(starships);
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
