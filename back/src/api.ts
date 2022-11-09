import express from "express";
import cors from "cors";
import {
  type Article,
  generateId,
  type NewArticle,
} from "@gestionstock/common";

let articles: Article[] = [
  { id: "a1", name: "Tournevis", price: 2.99, qty: 120 },
  { id: "a2", name: "Pelle", price: 8.1, qty: 30 },
  { id: "a3", name: "Marteau", price: 5, qty: 200 },
  { id: "a4", name: "Défonceuse", price: 120, qty: 32 },
];

const app = express.Router();

app.use(cors());

app.use((req, res, next) => {
  setTimeout(next, 1000);
});

app.get("/date", (req, res) => {
  res.json({ date: new Date() });
});

app.get("/articles", (req, res) => {
  res.json(articles);
});

app.use(express.json());

app.post("/articles", (req, res) => {
  const newArticle: NewArticle = req.body;
  const article = { ...newArticle, id: generateId() };
  articles.push(article);
  res.status(201).json({ id: article.id });
});

app.delete("/articles", (req, res) => {
  const ids: string[] = req.body;
  articles = articles.filter((a) => !ids.includes(a.id));
  res.status(204).end();
});

export const api = app;
