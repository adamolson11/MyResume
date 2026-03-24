# MyResume

Portfolio site for Adam Olson.

## Contact Flow (Formspree)

This project is set up for a secure, static-site-friendly contact flow.

1. Create a Formspree form with fields:
	- `name`
	- `email`
	- `message`
2. Route submissions to `RJVALE8@proton.me` in the Formspree dashboard.
3. Copy `.env.example` to `.env.local` and set:
	- `NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/<your-form-id>`
4. Optional: set public profile links:
	- `NEXT_PUBLIC_LINKEDIN_URL`
	- `NEXT_PUBLIC_GITHUB_URL`

If `NEXT_PUBLIC_FORMSPREE_ENDPOINT` is not set, the app shows an honest
activation notice and does not pretend to submit.

## Spam Protection

Enable in Formspree dashboard:
- Built-in spam filtering
- Cloudflare Turnstile (recommended)

No secrets are stored in frontend code in this version.
