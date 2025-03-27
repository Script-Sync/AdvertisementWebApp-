import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: false,
    auth: {
        user: process.env.G_EMAIL,
        pass: process.env.G_PASSWORD,
    },
});

export const sendEmail = async (to, userName, dashboardUrl) => {
    const htmlTemplate = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Welcome to LaBorrow - Rent & Advertise Tech with Ease!</title>
            <style>
                body { font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; }
                .container { max-width: 600px; margin: 0 auto; background: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); text-align: center; }
                h1 { color: #333; }
                p { font-size: 16px; color: #555; }
                .btn { display: inline-block; background-color:  #5c7bd9; color: #ffffff; padding: 12px 20px; text-decoration: none; font-weight: bold; border-radius: 5px; margin-top: 20px; }
                .footer { margin-top: 20px; font-size: 12px; color: #777; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1 "style="color: #5c7bd9; font-size: 24px; font-weight: 600;">Welcome to LaBorrow, ${userName}!</h1>
                <p>Your journey to <strong>seamless tech rentals</strong> and <strong>powerful gadget advertising</strong> starts now.</p>
                <p>At <strong>LaBorrow</strong>, you can explore an ever-growing marketplace where tech lovers <strong>rent gadgets hassle-free</strong> and vendors <strong>showcase their best products</strong>.</p>
                <p>Ready to get started? Click below and dive into the future of tech accessibility!</p>
                <a href="${dashboardUrl}" class="btn">Explore LaBorrow</a>
                <p>Need help? Our support team is always here for you.</p>
                <p>Best wishes,<br> The LaBorrow Team</p>
                <div class="footer">
                    <p>&copy; 2025 LaBorrow Inc. All rights reserved.</p>
                </div>
            </div>
        </body>
        </html>
    `;

    const send = await transporter.sendMail({
        from: process.env.G_EMAIL,
        to: to,
        subject: "Welcome to LaBorrow - Your Tech Marketplace Awaits!",
        html: htmlTemplate,
    });

    console.log('Email sent:', send);
};


export const sendEmailAdmin = async (to, adminName, dashboardUrl) => {
    const htmlTemplate = `
        <!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to LaBorrow</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f9fafb; font-family: 'Poppins', sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f9fafb;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="background-color: #ffffff; padding: 40px; border-radius: 8px; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);">
          <tr>
            <td align="center">
              <img src="https://via.placeholder.com/150" alt="Laborrow Logo" style="width: 120px; margin-bottom: 20px;">
              <h1 style="color: #5c7bd9; font-size: 24px; font-weight: 600;">Welcome to LaBorrow,${adminName}! </h1>
              <p style="color: #374151; font-size: 16px; line-height: 1.6;">
                Congratulations on joining LaBorrow, the ultimate rental platform for electronic gadgets and more. 
                We are thrilled to have you on board!
              </p>
              <p style="color: #374151; font-size: 16px; line-height: 1.6;">
                As a vendor, you now have the opportunity to rent out your gadgets securely and conveniently, 
                reaching a wide range of customers looking for short-term tech solutions. Our platform is 
                designed to ensure a seamless experience for you.
              </p>
              <a href="${dashboardUrl}" style="display: inline-block; margin-top: 20px; padding: 12px 24px; background-color: #5c7bd9; color: #ffffff; font-size: 16px; font-weight: 600; text-decoration: none; border-radius: 6px;">
                Get Started
              </a>
              <h4> Your Admin Portal Awaits!</h4>
              <p style="color: #374151; font-size: 14px; margin-top: 20px;">
                Need help? Our support team is here for you! <a href="mailto:support@laBorrow.com" style="color: #5c7bd9; text-decoration: none; font-weight: 600;">Contact us</a>
              </p>
            </td>
          </tr>
        </table>
        <p style="color: #6b7280; font-size: 12px; margin-top: 20px;">
          &copy; 2025 LaBorrow. All rights reserved.
        </p>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    const send = await transporter.sendMail({
        from: process.env.G_EMAIL,
        to: to,
        subject: "Welcome to LaBorrow - The Best Place to Share Your Tech!",
        html: htmlTemplate,
    });

    console.log('Email sent:', send);
};

