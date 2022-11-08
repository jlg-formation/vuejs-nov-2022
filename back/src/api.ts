import express from "express";
import cors from "cors";
import { Article } from "@gestionstock/common";

const articles: Article[] = [
  { id: "a1", name: "Tournevis", price: 2.99, qty: 120 },
  { id: "a2", name: "Pelle", price: 8.1, qty: 30 },
  { id: "a3", name: "Marteau", price: 5, qty: 200 },
  { id: "a4", name: "Défonceuse", price: 120, qty: 32 },
];

const app = express.Router();

app.use(cors());

app.use((req, res, next) => {
  setTimeout(next, 2000);
});

app.get("/date", (req, res) => {
  res.json({ date: new Date() });
});

app.get("/articles", (req, res) => {
  res.json(articles);
});

export const api = app;
