# Personal Portfolio

One-page portfolio in plain HTML, CSS and JavaScript. No build step.

## Run locally
Open `index.html`, or serve the folder: `python3 -m http.server 8000` then visit http://localhost:8000.
Deploy by uploading the folder to any static host (GitHub Pages, Netlify, Vercel). All paths are relative.

## Edit your content: `js/data.js`
Hero text and rotating roles, about, skill groups, projects, experience, education, certifications, contact details and security principles all live there.
- Project detail view: add optional fields (`image`, `demo`, `problem`, `solution`, `contribution`, `architecture`, `decisions`, `security`, `lessons`, `next`). Only the fields you fill in are shown.
- `education` and `certifications` render only when they contain real entries.
- Replace `js/Resume-Templates.pdf` with your resume (keep the filename or update the two links in `index.html`).

## Contact form
Sends through EmailJS (`js/submitForm.js`, IDs at the top of the file). The public key is meant to be public.
In the EmailJS dashboard, restrict allowed domains, enable reCAPTCHA if available, and set a usage limit, since there is no server of your own to rate-limit.
The form also sends `inquiry_type`; add `{{inquiry_type}}` to your EmailJS template to receive it.

## Structure
- `css/` tokens and shared styles in `style.css`, one file per section. 
- `js/render.js` builds the DOM from data, 
- `js/main.js` handles theme, navigation and animation, 
- `js/submitForm.js` handles the form.
