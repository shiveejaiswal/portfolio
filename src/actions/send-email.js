'use server'

import nodemailer from 'nodemailer'

export async function sendEmail(formData) {
  try {
    const emailData = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    }

    // Create HTML email template
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(45deg, #00d4ff, #7000ff); padding: 20px; color: white; border-radius: 5px; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 5px; margin-top: 20px; }
            .footer { text-align: center; margin-top: 20px; font-size: 0.8em; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Contact Form Submission</h2>
            </div>
            <div class="content">
              <p><strong>Name:</strong> ${emailData.name}</p>
              <p><strong>Email:</strong> ${emailData.email}</p>
              <p><strong>Message:</strong></p>
              <p>${emailData.message.replace(/\n/g, '<br>')}</p>
            </div>
            <div class="footer">
              <p>This email was sent from your portfolio website contact form.</p>
            </div>
          </div>
        </body>
      </html>
    `

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Message from ${emailData.name}`,
      html: htmlContent,
      replyTo: emailData.email,
    })

    return { success: true, message: 'Email sent successfully!' }
  } catch (error) {
    console.error('Error sending email:', error)
    return { success: false, message: 'Failed to send email. Please try again.' }
  }
}

