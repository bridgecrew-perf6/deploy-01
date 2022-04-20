import dotenv from "dotenv";
import express from 'express'
import { Router } from 'express'

dotenv.config();

const DATABASE_URL=process.env.DATABASE_URL;

const router = Router();

router.get('/hello', (request, response) => {
  let res = [];
  for (let i = 0; i < 10; i++) {
    res[i] = `${i}-HELLO WORLD !!!`;
  }
  return response.json(res, null, 2)
})

router.get('/env', (request, response) => {

  return response.json(DATABASE_URL)
})

const PORT = process.env.PORT

const app = express();
app.use(router);
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is Running on port :>> ${PORT}`)
})