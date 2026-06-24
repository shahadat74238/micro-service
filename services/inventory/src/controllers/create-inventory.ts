import { Request, Response, NextFunction } from "express";
import prisma from "@/prisma";
import { InventorySchema } from "@/schema";

const createInventory = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const parsedBody = InventorySchema.safeParse(req.body);
    if (!parsedBody.success) {
      return res.status(400).json({ error: parsedBody.error.issues });
    }

    // create inventory in the database
    const inventory = await prisma.inventory.create({
      data: {
        ...parsedBody.data,

        history: {
          create: {
            action: "IN",
            quantity: parsedBody.data.quantity,
          },
        },
      },
      select: {
        id: true,
        quantity: true,
      },
    });

    res.status(201).json(inventory);
  } catch (error) {
    next(error);
  }
};

export default createInventory;
