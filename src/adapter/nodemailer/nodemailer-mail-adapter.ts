import { mailtrap_auth, my_email } from '../../data';
import { MailAdapter, SendMailData } from './../mail-adapter';
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: mailtrap_auth
});

export class NodemailerMailAdapter implements MailAdapter{
    async sendMail({subject,body}: SendMailData){
        await transport.sendMail({
            from: 'Equipe Feedback <feedback@feed.com>',
            to: `Big Boss <${my_email}>`,
            subject:subject,
            html:body,
        })
    }
}
