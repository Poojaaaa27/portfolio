'use server';

import { easterEggBot, type EasterEggBotOutput } from '@/ai/flows/easter-egg-bot';

export async function getEasterEgg(prompt: string): Promise<EasterEggBotOutput> {
  const result = await easterEggBot({ prompt });
  return result;
}
