type TemperatureUnit = 'Celsius' | 'Fahrenheit' | 'Kelvin';  

export function convertTemperature(value: number, fromUnit: TemperatureUnit, toUnit: TemperatureUnit): number {  
    let tempInCelsius: number;  

    switch (fromUnit) {  
        case 'Celsius':  
            tempInCelsius = value;  
            break;  
        case 'Fahrenheit':  
            tempInCelsius = (value - 32) * (5 / 9);  
            break;  
        case 'Kelvin':  
            tempInCelsius = value - 273.15;  
            break;  
        default:  
            throw new Error('Invalid fromUnit');  
    }  

    switch (toUnit) {  
        case 'Celsius':  
            return tempInCelsius;  
        case 'Fahrenheit':  
            return (tempInCelsius * (9 / 5)) + 32;  
        case 'Kelvin':  
            return tempInCelsius + 273.15;  
        default:  
            throw new Error('Invalid toUnit');  
    }  
}  