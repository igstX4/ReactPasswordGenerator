export interface IGenerate {
    lower: boolean;
    upper: boolean;
}

export function Generate(lenght: number | number[], options: IGenerate) {
    const arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    if (!options.lower && !options.upper) {
        return 'Choose something'
    }
    let res = ''
    for (let i = 0; i <= lenght; i++) {
        if (options.upper && options.lower) {
            const letter = Math.floor(Math.random() * 10)
            if (letter % 2 === 0) {
                res += arr_en[Math.floor(Math.random() * arr_en.length)]
            }
            else {
                res += arr_en[Math.floor(Math.random() * arr_en.length)].toUpperCase()
            }
        }
        else if (options.lower) {
            res += arr_en[Math.floor(Math.random() * arr_en.length)]
        }
        else {
            
            res += arr_en[Math.floor(Math.random() * arr_en.length)].toUpperCase()
        }

    }

    return res
} 