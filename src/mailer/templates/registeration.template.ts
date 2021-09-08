import { ResetPasswordEndpoint } from 'src/config/constants';
import { Layout } from '../layouts/layout.template';

export const RegistrationTemplate = (user) => {
  return Layout(`
  <h2>Hi ${user.firstName},</h2>
  <p>
  You have been registered by almana group of hospitals . Please use the link below to setup the password
  </p>
  <center>
  <a style="height:30px;width:50px;background-color:blue;color:white;padding:10px 30px" href="${process.env.FRONTEND_URL}${ResetPasswordEndpoint}">Setup Password</a>
  </center>
  `);
};
