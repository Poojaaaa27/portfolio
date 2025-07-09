'use server';

/**
 * @fileOverview An AI agent that delivers a whimsical message and animation upon receiving a specific prompt.
 *
 * - easterEggBot - A function that triggers the easter egg message.
 * - EasterEggBotInput - The input type for the easterEggBot function.
 * - EasterEggBotOutput - The return type for the easterEggBot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EasterEggBotInputSchema = z.object({
  prompt: z.string().describe('The user input to check for the easter egg trigger.'),
});
export type EasterEggBotInput = z.infer<typeof EasterEggBotInputSchema>;

const EasterEggBotOutputSchema = z.object({
  message: z.string().describe('The whimsical message delivered by the bot.'),
  animation: z.string().optional().describe('Optional animation data or trigger.'),
});
export type EasterEggBotOutput = z.infer<typeof EasterEggBotOutputSchema>;

export async function easterEggBot(input: EasterEggBotInput): Promise<EasterEggBotOutput> {
  return easterEggBotFlow(input);
}

const prompt = ai.definePrompt({
  name: 'easterEggBotPrompt',
  input: {schema: EasterEggBotInputSchema},
  output: {schema: EasterEggBotOutputSchema},
  prompt: `You are a whimsical AI bot that delivers a hidden easter egg message when the user enters the secret prompt. If the user prompt is exactly "reveal easter egg", then respond with a funny message and an instruction to trigger a fun animation on the website. Otherwise, return an empty message.

User Prompt: {{{prompt}}}

If the prompt matches, respond with a creative, lighthearted message and animation suggestion. Otherwise, leave the message empty.
`,
});

const easterEggBotFlow = ai.defineFlow(
  {
    name: 'easterEggBotFlow',
    inputSchema: EasterEggBotInputSchema,
    outputSchema: EasterEggBotOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
