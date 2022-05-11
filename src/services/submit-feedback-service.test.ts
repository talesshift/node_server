import { MailAdapter } from './../adapter/mail-adapter';
import { FeedbacksRepository } from './../repositories/feedbacks-repository';
import { SubmitFeedbackService } from './submit-feedback-service';

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn()

const submitFeedback = new SubmitFeedbackService(
    {create: createFeedbackSpy},
    {sendMail: sendMailSpy}
)

describe('Submit feedback',() =>{
    it('should be able to submit a feedback', async () => {
        
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example coment',
            screenshot: 'data:image/png;base64,teste',
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });

    it('should not be able to submit a feedback without a type', async () => {
        
        await expect(submitFeedback.execute({
            type: '',
            comment: 'example coment',
            screenshot: 'data:image/png;base64,teste',
        })).rejects.toThrow();
    });

    it('should not be able to submit a feedback without a comment', async () => {
        
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64,teste',
        })).rejects.toThrow();
    }); 

    it('should not be able to submit a feedback with an invalid image', async () => {
        
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example coment',
            screenshot: 'alo.jpg',
        })).rejects.toThrow();
    });
});