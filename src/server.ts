import { routes } from './routes';
import { mailtrap_auth, my_email } from './data';
import express from 'express'
import nodemailer from 'nodemailer'
import { prisma } from './prisma';


const app = express();
const port = 3333;

//GET,POST,PUT,PATCH,DELETE
app.use(express.json())

app.use(routes)

app.listen(port, () => {
    console.log(`Server Running on http://localhost:${port}/`)
});

//npx prisma studio