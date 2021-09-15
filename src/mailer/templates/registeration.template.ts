import { Layout } from '../layouts/layout.template';

export const RegistrationTemplate = (user) => {
  return Layout(`
  <h2>Hi ${user.firstName ?? user.email},</h2>
  <p>
  Please use the link below to activate your account
  </p>
  <center>
  <a style="height:30px;width:50px;background-color:blue;color:white;padding:10px 30px" href="${
    process.env.APPLICATION_SERVER_BASE_URL
  }">Setup Password</a>
  </center>
  `);
};
