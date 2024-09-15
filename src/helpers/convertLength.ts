type LengthUnit = 'centimeter' | 'meter' | 'kilometer' | 'inch' | 'foot' | 'yard' | 'mile';  

export function convertLength(value : number, fromUnit : LengthUnit, toUnit : LengthUnit): number {  
    const conversionFactors: Record<LengthUnit, number> = {
        centimeter: 0.01,  
        meter: 1,  
        kilometer: 1000,  
        inch: 0.0254,  
        foot: 0.3048,  
        yard: 0.9144,  
        mile: 1609.34  
    };  

    const valueInMeters = value * conversionFactors[fromUnit];

    const convertedValue = valueInMeters / conversionFactors[toUnit];  
    return convertedValue;  
} 