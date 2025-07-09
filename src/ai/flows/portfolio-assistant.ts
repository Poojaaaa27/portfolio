'use server';
/**
 * @fileOverview A portfolio assistant AI agent.
 *
 * - portfolioAssistant - A function that answers questions about the portfolio.
 * - PortfolioAssistantInput - The input type for the portfolioAssistant function.
 * - PortfolioAssistantOutput - The return type for the portfolioAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const portfolioContext = `
Pooja J - AI Innovator | Creative Technologist | Real-World Problem Solver
Final-year B.Tech student at SRM University, passionate about applying AI and ML to solve real-world challenges. Proven experience in research, hackathons, and impactful projects.

About Me:
From my first "Hello, World!" program to developing complex machine learning models, my passion for technology has been a journey of constant learning and creation. As a final-year Computer Science student specializing in AI, I'm driven by the challenge of turning complex problems into elegant, impactful solutions. Whether it's through research, building full-stack applications, or competing in hackathons, I thrive on pushing the boundaries of what's possible with code. My goal is to leverage technology to build a smarter, more efficient future.
Fun Fact: When I'm not coding, I'm an avid keyboardist! I love recreating symphony pieces and exploring new melodies—it's my own version of algorithmic composition.
Education:
- SRM University, Chennai: B.Tech, CSE (AI/ML), 2021-2025, CGPA: 9.81. Deeply engaged in AI/ML research and application, actively participating in hackathons and competitive programming.
- Modern School, Nagpur: Higher Secondary (CBSE), 2021, Achieved 95% in Higher Secondary Certificate examinations, laying a strong foundation in science and mathematics.

Technical Skills:
- Languages: Python, C/C++, JavaScript, SQL, HTML/CSS
- Frameworks & Databases: Node.js, Express, Flask, FastAPI, Streamlit, MongoDB
- AI/ML Libraries: TensorFlow, PyTorch, Scikit-learn, Pandas, Numpy, OpenCV
- Developer Tools: Git, GCP, Anaconda, PyCharm, VS Code

Featured Projects:
- AgriImpact: An innovative full-stack solution to optimize crop planning for farmers using ML-driven predictions. Reduced manual farm planning effort by 40%.
- Anti Spoofing Detection: A robust system to enhance facial recognition security by detecting and preventing spoofing attacks. Achieved 98% accuracy in identifying spoofing attempts.
- Student Stress Level Prediction: An analytical tool that predicts student stress levels based on academic and personal factors, enabling timely intervention. Provided actionable insights for improving student wellness programs.

Research & Publications:
- Title: Anti Spoofing Detection for Face Recognition using Image Quality Assessment and Deep Learning
- Publication: IEEE CONFERENCE PUBLICATION
- Summary: This research introduces a novel two-step model combining image quality assessment and a fine-tuned MobileNetV2 architecture to effectively combat face spoofing attacks. Our method demonstrates high accuracy and robustness across various spoofing techniques. Achieved 96.5% F1 Score.

Competitive Programming Experience (CodeChef University Club - SRMIST Chapter):
- Event Organizer: Organized and managed multiple coding contests and workshops for the university community.
- Competitive Programmer: Active in CodeChef contests, 3-star rating.
- Leaderboard Performance: Regularly ranked among top performers in university-level contests.
- Challenge Streaks: Maintained long streaks of daily problem-solving on platforms like LeetCode and GeeksforGeeks.
`;


const PortfolioAssistantInputSchema = z.object({
  query: z.string().describe('The user question about Pooja J.'),
});
export type PortfolioAssistantInput = z.infer<typeof PortfolioAssistantInputSchema>;

const PortfolioAssistantOutputSchema = z.object({
  response: z.string().describe('The answer to the user query.'),
});
export type PortfolioAssistantOutput = z.infer<typeof PortfolioAssistantOutputSchema>;

export async function portfolioAssistant(input: PortfolioAssistantInput): Promise<PortfolioAssistantOutput> {
  return portfolioAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'portfolioAssistantPrompt',
  input: {schema: PortfolioAssistantInputSchema},
  output: {schema: PortfolioAssistantOutputSchema},
  system: `You are a friendly and professional AI assistant for Pooja J's portfolio website. Your goal is to answer questions from visitors based on the information provided below. Be concise and helpful. If a question is outside the scope of the provided information or is inappropriate, politely decline to answer.

Portfolio Information:
---
${portfolioContext}
---
`,
  prompt: `User question: {{{query}}}`,
});

const portfolioAssistantFlow = ai.defineFlow(
  {
    name: 'portfolioAssistantFlow',
    inputSchema: PortfolioAssistantInputSchema,
    outputSchema: PortfolioAssistantOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
