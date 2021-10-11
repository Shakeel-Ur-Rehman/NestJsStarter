import * as dotenv from 'dotenv';
import { Injectable } from '@nestjs/common';
import * as mailJet from 'node-mailjet';
const url = 'api.mailjet.com';
dotenv.config();

const mailjet: any = mailJet.connect(
  process.env.MAIL_JET_USER_NAME,
  process.env.MAIL_JET_PASSWORD,
  {
    url,
  },
);

interface MailToInterface {
  email: string;
  name: string;
}

@Injectable()
export class MailerService {
  static async sendEmail(to: MailToInterface, subject: string, body: string) {
    try {
      await mailjet
        .post('send', { version: process.env.MAIL_JET_VERSION })
        .request({
          Messages: [
            {
              From: {
                Email: process.env.MAIL_JET_MAIL_FROM_EMAIL,
                Name: process.env.MAIL_JET_MAIL_FROM_NAME,
              },
              To: [
                {
                  Email: `${to.email}`,
                  Name: `${to.name || to.email}`,
                },
              ],
              Subject: `${subject}`,
              HTMLPart: body,
            },
          ],
        });
      return 'successfully sent email';
    } catch (error) {
      return error.message;
    }
  }
}
