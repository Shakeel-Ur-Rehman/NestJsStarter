import { ResetPasswordEndpoint } from 'src/config/constants';
import { Layout } from '../layouts/layout.template';

export const forgotPasswordTemplate = (user) => {
  return Layout(`
  <h2>Hi ${user.firstName || user.email}</h2>,
<p>
Please use the link below to update your password, if you have not requested the email to update password please ignore this email
</p>
<center>
<a style="height:30px;width:50px;background-color:blue;color:white;padding:10px 30px" href="${
    process.env.FRONTEND_URL
  }${ResetPasswordEndpoint}/${user.resetPasswordToken}">Update Password</a>
</center>
  `);
};
