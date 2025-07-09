'use server';

import { easterEggBot, type EasterEggBotOutput } from '@/ai/flows/easter-egg-bot';
import { portfolioAssistant, type PortfolioAssistantOutput } from '@/ai/flows/portfolio-assistant';

export async function getEasterEgg(prompt: string): Promise<EasterEggBotOutput> {
  const result = await easterEggBot({ prompt });
  return result;
}

export async function askPortfolioAssistant(query: string): Promise<PortfolioAssistantOutput> {
  const result = await portfolioAssistant({ query });
  return result;
}
