# PEPO Saad — Portfolio Website

A responsive, dark navy/black portfolio made with plain HTML, CSS, and JavaScript. No build tools or package installation are required.

## Files

- `index.html` — page content and sections
- `style.css` — layout, colors, responsive styling, light theme
- `script.js` — theme toggle, mobile navigation, assignment search
- `assets/assignments/` — put your PDF files here

## Run the website

### Option 1: Visual Studio Code
1. Extract the ZIP file.
2. Open the extracted `pepo-portfolio` folder in VS Code.
3. Open `index.html`.
4. If you have the **Live Server** extension, right-click `index.html` and choose **Open with Live Server**. Otherwise, double-click `index.html` to open it in your browser.

### Option 2: Visual Studio
Open the folder and open `index.html` in a browser. For this simple static website, you do not need to compile anything.

## Personalize it

1. In `index.html`, replace `PEPO Saad` with your preferred display name.
2. Replace `your-email@example.com` with your real email address.
3. Replace the `href="#"` social links with your real GitHub/LinkedIn URLs.
4. Update the skills and their progress values in `index.html` to reflect your actual skills.
5. Replace sample project descriptions with projects you have actually completed.

## Add an assignment PDF

1. Put your PDF inside `assets/assignments/`. For example: `web-assignment.pdf`.
2. In `index.html`, find the assignment row you want to edit.
3. Change its link to the exact relative path:
   `href="assets/assignments/web-assignment.pdf"`
4. Update the assignment title and description.
5. Save and refresh the page.

The provided assignment links are placeholders until you add files with matching names. This is a static portfolio, so it does not have a public upload form or server-side storage. If you publish it online, commit the PDFs along with the website files.

## Publish it online (optional)

You can publish the static website using GitHub Pages:
1. Create a GitHub repository and upload the website files.
2. In the repository, open **Settings → Pages**.
3. Under the build/deployment section, select deploying from a branch, choose `main` and `/ (root)`, then save.
4. Wait for GitHub Pages to provide the published URL.

If your assignments contain private information or student IDs, remove those details before publishing PDFs publicly.
