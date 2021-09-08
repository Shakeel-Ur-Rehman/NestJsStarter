import { MailerService } from '../mailer.service';
import { forgotPasswordTemplate } from '../templates/forgotPassword.template';
import { RegistrationTemplate } from '../templates/registeration.template';

export class userMailer extends MailerService {
  static registerRequest(user) {
    const subject = 'Register Request';
    const body = RegistrationTemplate(user);
    return this.sendEmail(user, subject, body);
  }

  static forgotPassword(user) {
    const subject = 'Forgot Password';
    const body = forgotPasswordTemplate(user);
    console.log(body);
    return this.sendEmail(user, subject, body);
  }
}
