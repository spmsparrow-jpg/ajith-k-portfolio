

## Plan: Integrate EmailJS into Contact Form

EmailJS lets you send emails directly from the browser with no backend. The free tier gives you 200 emails/month.

### Setup Steps (you do once)

1. Go to [emailjs.com](https://www.emailjs.com) and create a free account
2. Add an **Email Service** (e.g. Gmail, Outlook) — note your **Service ID**
3. Create an **Email Template** with variables like `{{from_name}}`, `{{from_email}}`, `{{message}}` — note your **Template ID**
4. Copy your **Public Key** from Account > API Keys

### Code Changes

**1. Install `@emailjs/browser` package**

**2. Update `Contact.tsx`**
- Import EmailJS and initialize with the public key
- Replace the current `handleSubmit` (which only shows a toast) with an actual `emailjs.send()` call
- Pass form fields (`from_name`, `from_email`, `message`) matching the EmailJS template variables
- Show success/error toasts based on the result
- Add a loading state to disable the button while sending

Since the EmailJS public key is a publishable key, it will be stored directly in the code (this is safe and expected).

### What You'll Get
- Contact form submissions delivered to your email inbox
- Success/error feedback for the user
- Loading state while sending

