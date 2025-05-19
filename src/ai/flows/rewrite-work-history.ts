// src/ai/flows/rewrite-work-history.ts
'use server';
/**
 * @fileOverview Rewrites a work history description using AI.
 *
 * - rewriteWorkHistory - A function that handles the rewriting of the work history description.
 * - RewriteWorkHistoryInput - The input type for the rewriteWorkHistory function.
 * - RewriteWorkHistoryOutput - The return type for the rewriteWorkHistory function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RewriteWorkHistoryInputSchema = z.object({
  currentDescription: z
    .string()
    .describe('The current work history description to rewrite.'),
  desiredTone: z
    .string()
    .optional()
    .describe('The desired tone for the rewritten description (e.g., professional, concise, creative).'),
  keywords: z
    .string()
    .optional()
    .describe('Comma-separated keywords to include in the rewritten description.'),
});
export type RewriteWorkHistoryInput = z.infer<typeof RewriteWorkHistoryInputSchema>;

const RewriteWorkHistoryOutputSchema = z.object({
  rewrittenDescription: z
    .string()
    .describe('The AI-rewritten work history description.'),
});
export type RewriteWorkHistoryOutput = z.infer<typeof RewriteWorkHistoryOutputSchema>;

export async function rewriteWorkHistory(input: RewriteWorkHistoryInput): Promise<RewriteWorkHistoryOutput> {
  return rewriteWorkHistoryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'rewriteWorkHistoryPrompt',
  input: {schema: RewriteWorkHistoryInputSchema},
  output: {schema: RewriteWorkHistoryOutputSchema},
  prompt: `You are an AI assistant specializing in rewriting work history descriptions to be more compelling.

Rewrite the following work history description, taking into account the desired tone and keywords provided.

Current Description: {{{currentDescription}}}

Desired Tone: {{#if desiredTone}}{{{desiredTone}}}{{else}}Professional{{/if}}

Keywords: {{#if keywords}}{{{keywords}}}{{/if}}

Rewritten Description:`,
});

const rewriteWorkHistoryFlow = ai.defineFlow(
  {
    name: 'rewriteWorkHistoryFlow',
    inputSchema: RewriteWorkHistoryInputSchema,
    outputSchema: RewriteWorkHistoryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
