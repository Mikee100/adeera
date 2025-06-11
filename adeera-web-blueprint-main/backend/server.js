app.post('/contact', async (req, res) => {
  const { name, email, company, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'mikekariuki10028@gmail.com',
        pass: 'qvfk dcie sjop hcxb',
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: 'contact@adeeraunitech.com',
      subject: `📩 New Contact Message from ${name}`,
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        }
        body {
            background-color: #f5f7fa;
            color: #333;
            line-height: 1.6;
        }
        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .email-header {
            background: linear-gradient(135deg, #6e48aa 0%, #9d50bb 100%);
            padding: 30px 20px;
            text-align: center;
            color: white;
        }
        .logo {
            max-width: 180px;
            height: auto;
            margin-bottom: 15px;
        }
        .email-title {
            font-size: 22px;
            font-weight: 600;
            margin-bottom: 5px;
        }
        .email-subtitle {
            font-size: 14px;
            opacity: 0.9;
        }
        .email-body {
            padding: 25px;
        }
        .details-table {
            width: 100%;
            border-collapse: collapse;
        }
        .details-table td {
            padding: 12px 0;
            border-bottom: 1px solid #eee;
        }
        .details-table td:first-child {
            font-weight: 600;
            color: #555;
            width: 120px;
        }
        .message-box {
            background: #f9f9f9;
            border-left: 4px solid #6e48aa;
            padding: 15px;
            margin-top: 20px;
            border-radius: 4px;
        }
        .footer {
            text-align: center;
            padding: 20px;
            background: #f5f7fa;
            font-size: 12px;
            color: #777;
        }
        .social-links {
            margin-top: 15px;
        }
        .social-links a {
            margin: 0 8px;
            text-decoration: none;
        }
        .social-icon {
            width: 24px;
            height: 24px;
            vertical-align: middle;
        }
        .reply-btn {
            display: inline-block;
            margin-top: 20px;
            padding: 10px 20px;
            background: #6e48aa;
            color: white !important;
            text-decoration: none;
            border-radius: 6px;
            font-weight: 500;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <!-- Header with Logo & Branding -->
        <div class="email-header">
           <img src="data:image/jpeg;base64,PASTE_YOUR_BASE64_STRING_HERE" alt="Adeera Unitech" class="logo">
            <h1 class="email-title">New Contact Form Submission</h1>
            <p class="email-subtitle">You've received a new message from your website</p>
        </div>

        <!-- Email Body -->
        <div class="email-body">
            <table class="details-table">
                <tr>
                    <td>Name:</td>
                    <td><strong>${name}</strong></td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td><a href="mailto:${email}" style="color: #6e48aa;">${email}</a></td>
                </tr>
                <tr>
                    <td>Company:</td>
                    <td>${company || "—"}</td>
                </tr>
            </table>

            <!-- Message Box -->
            <div class="message-box">
                <p style="font-weight: 600; margin-bottom: 10px;">Message:</p>
                <p>${message.replace(/\n/g, "<br>")}</p>
            </div>

            <!-- Reply Button -->
            <a href="mailto:${email}" class="reply-btn">Reply to ${name}</a>
        </div>

        <!-- Footer -->
        <div class="footer">
            <p>© ${new Date().getFullYear()} <strong>Adeera Unitech</strong>. All rights reserved.</p>
            
            <!-- Social Media Links (Optional) -->
            <div class="social-links">
                <a href="https://facebook.com/adeeraunitech">
                    <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" class="social-icon" alt="Facebook">
                </a>
                <a href="https://linkedin.com/company/adeeraunitech">
                    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" class="social-icon" alt="LinkedIn">
                </a>
                <a href="https://twitter.com/adeeraunitech">
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" class="social-icon" alt="Twitter">
                </a>
            </div>
        </div>
    </div>
</body>
</html>
      `,
    });

    res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});