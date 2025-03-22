import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: false,
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASSWORD,
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
                .btn { display: inline-block; background-color:  #DDA0DD; color: #ffffff; padding: 12px 20px; text-decoration: none; font-weight: bold; border-radius: 5px; margin-top: 20px; }
                .footer { margin-top: 20px; font-size: 12px; color: #777; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Welcome to LaBorrow, ${userName}!</h1>
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
        from: process.env.USER_EMAIL,
        to: to,
        subject: "Welcome to LaBorrow - Your Tech Marketplace Awaits!",
        html: htmlTemplate,
    });

    console.log('Email sent:', send);
};

