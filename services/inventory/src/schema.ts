import { z } from "zod";

export const InventorySchema = z.object({
  productId: z.string().uuid(),
  sku: z.string(),
  quantity: z.number().int().nonnegative().default(0),
});


// export type Inventory = z.infer<typeof InventorySchema>;