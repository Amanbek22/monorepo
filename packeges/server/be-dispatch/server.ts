import express from "express";
import cors from "cors";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../../../configs/firebase";
const app = express();
const port = 3001;
app.use(cors());

app.get("/pizzas", async (req, res) => {
  const data = collection(db, "pizzas");
  const feedbacks = await getDocs(data);
  const feedbackList = feedbacks.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  res.json(feedbackList);
});

app.get("/pizzas/:id", async (req, res) => {
  const id = req.params.id;
  const pizza = doc(db, "pizzas", id);
  const pizzaData = await getDoc(pizza);
  res.json(pizzaData.data());
});

app.post("/pizzas", async (req, res) => {});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
