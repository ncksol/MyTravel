import { defineCollection, z } from 'astro:content';

const tripSchema = z.object({
  title: z.string().optional(),
});

const japan2026 = defineCollection({
  type: 'content',
  schema: tripSchema,
});

const jersey2026 = defineCollection({
  type: 'content',
  schema: tripSchema,
});

export const collections = { japan2026, jersey2026 };
