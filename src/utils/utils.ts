interface IRoundAndDecimal {
    round: number,
    decimal: number
}
const currencyToRoundAndDecimial = (price: number): IRoundAndDecimal  => {
    const priceToString = price.toString()
    return ({
        round: Number(priceToString.split('.')[0]),
        decimal: Number(priceToString.split('.')[1])
    })
}

const textLimit = (text: string, maxLength: number): string => {
    if(text.length <= maxLength) {
        return text;
    }
 
    text = text.slice(0, maxLength);
    text += "...";
 
    return text;
}

const changeRootCss = (propery: string, color: string) => {
    document.documentElement.style.setProperty(propery, color)
} 
let isMobile = (): boolean => {
    return window.matchMedia("only screen and (max-width: 600px)").matches;
}

export { currencyToRoundAndDecimial, textLimit, changeRootCss, isMobile }