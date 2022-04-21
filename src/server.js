import dotenv from "dotenv";
import express from 'express'
import { Router } from 'express'

dotenv.config();

const PORT = process.env.PORT;
const DATABASE_URL=process.env.DATABASE_URL;

const router = Router();

router.get('/hello', (request, response) => {
  let res = [];
  for (let i = 0; i < 10; i++) {
    res[i] = `${i}-HELLO WORLD !!!`;
  }
  return response.json(res, null, 2)
})

router.get('/port', (request, response) => {
  const port = `Servidor is Running on PORT :>> ${PORT}`
  return response.json(port)
})

router.get('/env', (request, response) => {
  const dbString = `Data Base Connection String :>> ${DATABASE_URL}`
  return response.json(dbString)
})



const app = express();
app.use(router);
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is Running on port :>> ${PORT}`)
})