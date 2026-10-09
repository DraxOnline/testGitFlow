import express from "express";

export const app = express();
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ ok: true });
});

app.get("/health", (_req, res) => {
  res.json({
    status: "ok",
    timestamp: new Date().toISOString(),
  });
});