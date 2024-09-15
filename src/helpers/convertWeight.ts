type WeightUnit = 'milligram' | 'gram' | 'kilogram' | 'ounce' | 'pound';  

export function convertWeight(value: number, fromUnit: WeightUnit, toUnit: WeightUnit): number {   
    const conversionFactors: Record<WeightUnit, number> = {  
        milligram: 0.001,  
        gram: 1,  
        kilogram: 1000,  
        ounce: 28.3495,   
        pound: 453.592   
    };  

    const valueInGrams = value * conversionFactors[fromUnit];  

    const convertedValue = valueInGrams / conversionFactors[toUnit];  
    return convertedValue;  
}  