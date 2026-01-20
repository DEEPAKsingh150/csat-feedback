import { z } from 'zod';

export const csatSchema = z.object({
  rating: z.number().min(1).max(5),
  feedback_option: z.string().optional(),
  additional_comments: z.string().max(500).optional(),
  tags: z.array(z.string()).max(3).optional(),
});
