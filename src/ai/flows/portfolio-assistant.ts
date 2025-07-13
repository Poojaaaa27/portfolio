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

About Me:
I'm a final-year Computer Science student at SRM University with a passion for using AI to solve real-world problems. I enjoy experimenting with new ideas, collaborating with diverse teams, and tackling LeetCode challenges. If you're looking for someone who combines technical excellence with a drive for positive change, let's connect!

Fun Fact: When I'm not coding, I'm probably catching up on the latest movies and series or discovering new music.

Education:
- SRM University, Chennai: B.Tech, CSE (AI/ML), 2021-2025, CGPA: 9.81. Deeply engaged in AI/ML research and application, actively participating in hackathons and competitive programming.
- Modern School, Chennai: Higher Secondary (CBSE), 2021, Achieved 95% in Higher Secondary Certificate examinations, laying a strong foundation in science and mathematics.

Skills:
- Languages: Python, C, C++, HTML/CSS, SQL, JavaScript
- Tools: Git, GCP, Anaconda, PyCharm, VS Code
- Frameworks: Streamlit, Flask, Node.js, Express, MongoDB, FastAPI
- Libraries: Pandas, Numpy, Scikit-learn, TensorFlow, PyTorch, OpenCV

Featured Projects:
- AgriImpact: An innovative full-stack solution to optimize crop planning for farmers using ML-driven predictions. Reduced manual farm planning effort by 40%.
- Anti Spoofing Detection: A robust system to enhance facial recognition security by detecting and preventing spoofing attacks. Achieved 98% accuracy in identifying spoofing attempts.
- Student Stress Level Prediction: An analytical tool that predicts student stress levels based on academic and personal factors, enabling timely intervention. Provided actionable insights for improving student wellness programs.
- ResQbite: A platform using AI to reduce food waste by connecting donors with NGOs, featuring ML-powered waste prediction, nutritional analysis, and optimized delivery routes.

Research & Publications:
- Title: Anti Spoofing Detection for Face Recognition using Image Quality Assessment and Deep Learning
- Publication: IEEE CONFERENCE PUBLICATION (Publication Pending)
- Summary: This research introduces a novel two-step model combining image quality assessment and a fine-tuned MobileNetV2 architecture to effectively combat face spoofing attacks. Our method demonstrates high accuracy and robustness across various spoofing techniques. Achieved 96.5% F1 Score.
- Title: Accuracy Improvement in Diabetic Retinopathy Detection
- Publication: IEEE International Conference on Research and Technology
- Summary: This work compares four high-performing machine learning models to develop a robust prediction model for Diabetic Retinopathy, achieving high precision and recall with CNN, Transfer Learning, and Ensemble models. The publication is available at https://ieeexplore.ieee.org/document/10895961.

Competitive Programming Experience (CodeChef University Club - SRMIST Chapter):
- Event Organizer: Organized and managed multiple coding contests and workshops for the university community.
- Competitive Programmer: Active in CodeChef contests, 3-star rating.
- Challenge Streaks: Maintained long streaks of daily problem-solving on platforms like LeetCode and GeeksforGeeks.
- LeetCode Profile: https://leetcode.com/u/poojaa_j/
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
