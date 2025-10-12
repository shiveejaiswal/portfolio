# EmailJS Setup Guide for Contact Form

This guide will help you set up automated email sending for your contact form using EmailJS.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID** (e.g., `service_xxxxxxx`)

## Step 3: Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template content:

### Template Subject:
```
New Contact Form Submission from {{from_name}}
```

### Template Body:
```
Hello,

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}

You can reply directly to this email to respond to {{from_name}}.

Best regards,
Your Portfolio Contact Form
```

4. Save the template and note down your **Template ID** (e.g., `template_xxxxxxx`)

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `xxxxxxxxxxxxxxxx`)
3. Copy this key

## Step 5: Update Configuration

1. Open `src/config/emailConfig.js`
2. Replace the placeholder values:

```javascript
export const emailConfig = {
  serviceId: 'service_xxxxxxx', // Your actual service ID
  templateId: 'template_xxxxxxx', // Your actual template ID
  publicKey: 'xxxxxxxxxxxxxxxx', // Your actual public key
  toEmail: 'shiveejaiswal25@gmail.com' // Your email address
};
```

## Step 6: Test the Setup

1. Start your development server: `npm start`
2. Fill out the contact form
3. Submit the form
4. Check your email for the automated message

## Troubleshooting

### Common Issues:

1. **"Invalid service ID"**: Double-check your service ID in the config
2. **"Template not found"**: Verify your template ID is correct
3. **"Invalid public key"**: Ensure your public key is correct
4. **Emails not sending**: Check your email service provider settings

### EmailJS Limits (Free Plan):
- 200 emails per month
- 2 email services
- 2 email templates

## Security Notes

- Never commit your actual EmailJS credentials to version control
- Consider using environment variables for production
- The public key is safe to expose in frontend code
- EmailJS handles the email sending securely

## Alternative: Environment Variables

For better security, you can use environment variables:

1. Create `.env` file in your project root:
```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
REACT_APP_EMAILJS_TO_EMAIL=your_email@example.com
```

2. Update `src/config/emailConfig.js`:
```javascript
export const emailConfig = {
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
  toEmail: process.env.REACT_APP_EMAILJS_TO_EMAIL
};
```

## Support

If you encounter issues:
1. Check EmailJS documentation: https://www.emailjs.com/docs/
2. Verify your email service provider settings
3. Check browser console for error messages
4. Ensure all IDs and keys are correctly copied
