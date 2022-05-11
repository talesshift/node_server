import { NodemailerMailAdapter } from './adapter/nodemailer/nodemailer-mail-adapter';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedback-repository';
import express from 'express'

import { mailtrap_auth, my_email } from './data';
import { prisma } from './prisma';
import { SubmitFeedbackService } from './services/submit-feedback-service';


export const routes = express.Router()



routes.post('/feedbacks', async (req,res) => {
    const {type,comment,screenshot}= req.body
    
    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
    const nodemailerMailAdapter = new NodemailerMailAdapter()
    const submitFeedbackService = new SubmitFeedbackService(prismaFeedbacksRepository,nodemailerMailAdapter)
    
    await submitFeedbackService.execute({
        type,
        comment,
        screenshot
    })
    return( res.status(201).send())
    
})