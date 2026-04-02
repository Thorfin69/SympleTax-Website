# Email Configuration

## Backend Email Sending

The application now uses a custom backend endpoint (`/api/contact`) that sends emails directly to all configured recipients using nodemailer.

## Configured Email Recipients

All form submissions are automatically sent to these 4 email addresses:

1. `energy.apatel@gmail.com`
2. `prestilindia@gmail.com`
3. `abhi9824054002@yahoo.com`
4. `abhi9824054002@gmail.com`

**Total: 4 email addresses**

## Configuration

### Environment Variables

Configure SMTP settings in `.env` file (see `.env.example`):

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=your-email@gmail.com
```

### Gmail Setup

1. Enable 2-Factor Authentication on your Google account
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Use the App Password as `SMTP_PASS` (not your regular password)

### Other SMTP Providers

- **Outlook/Hotmail**: `smtp-mail.outlook.com`, port `587`
- **Yahoo**: `smtp.mail.yahoo.com`, port `587`
- **Custom SMTP**: Use your provider's SMTP settings

## Forms Using This Endpoint

All forms submit to `/api/contact` which sends to all 4 recipients:

- Contact Page Form (`client/src/pages/contact.tsx`)
- Blog Contact Form (`client/src/components/blog/blog-contact-form.tsx`)
- Catalog Request Dialog (`client/src/components/catalog-request-dialog.tsx`)

## Backend Implementation

The email sending logic is in `server/routes.ts`:
- Receives form submissions via POST `/api/contact`
- Sends emails to all 4 recipients in parallel using nodemailer
- Includes form data in HTML and plain text formats

## Removed Email

- ~~`hi@kpatel.xyz`~~ (removed from both frontend and backend configuration)
