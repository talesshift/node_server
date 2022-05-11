import { prisma } from '../../prisma';
import { FeedbacksRepository, FeedbacksData } from '../feedbacks-repository';
export class PrismaFeedbacksRepository implements FeedbacksRepository{
    async create({type,comment,screenshot}: FeedbacksData){
        await prisma.feedback.create({
            data:{
                type,
                comment,
                screenshot
            }
        })
    }
}