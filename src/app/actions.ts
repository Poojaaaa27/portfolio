'use server';

import { easterEggBot, type EasterEggBotOutput } from '@/ai/flows/easter-egg-bot';
import { portfolioAssistant, type PortfolioAssistantOutput } from '@/ai/flows/portfolio-assistant';
import { generateImage, type GenerateImageOutput } from '@/ai/flows/generate-image';

export async function getEasterEgg(prompt: string): Promise<EasterEggBotOutput> {
  const result = await easterEggBot({ prompt });
  return result;
}

export async function askPortfolioAssistant(query: string): Promise<PortfolioAssistantOutput> {
  try {
    const result = await portfolioAssistant({ query });
    return result;
  } catch (e: any) {
    console.error("Error asking portfolio assistant:", e);
    return {
      response: "Sorry, I'm having trouble connecting to my AI brain right now. Please try again in a moment."
    };
  }
}

export async function generateProjectImage(prompt: string): Promise<GenerateImageOutput> {
  return generateImage({ prompt });
}
