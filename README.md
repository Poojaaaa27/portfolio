
# PoojaJ.AI Portfolio

This is a Next.js portfolio website built with Firebase Studio, featuring Genkit for AI capabilities.

## Deploying to Vercel

Deploying this project is straightforward. Follow these steps:

1.  **Connect to GitHub:** Push your project code to a GitHub repository.
2.  **Import Project on Vercel:**
    *   Sign up or log in to your [Vercel account](https://vercel.com).
    *   From your dashboard, click "Add New..." -> "Project".
    *   Import the GitHub repository you just created.
3.  **Configure Project:**
    *   Vercel will automatically detect that this is a Next.js project. The default build settings are correct.
    *   You need to add one important **Environment Variable**. Go to the "Environment Variables" section in your new Vercel project's settings.
    *   Add the following variable:
        *   **Name:** `GOOGLE_API_KEY`
        *   **Value:** Paste your Google AI Studio API key here.

4.  **Deploy:** Click the "Deploy" button. Vercel will build and deploy your site.

That's it! Your portfolio will be live. The `vercel.json` file in this repository is already configured to handle the Genkit AI flows correctly.
