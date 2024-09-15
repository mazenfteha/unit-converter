import { z } from 'zod';

export const LengthSchema = z.object({
    value: z.number().positive(),
    fromUnit: z.string(),
    toUnit: z.string(),
});

export const WeightSchema = z.object({
    value: z.number().positive(),
    fromUnit: z.string(),
    toUnit: z.string(),
});

export const TemperatureSchema = z.object({
    value: z.number(),
    fromUnit: z.string(),
    toUnit: z.string(),
});