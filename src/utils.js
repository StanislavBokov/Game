export const getGenerationArray = (array, num) => {
    const generationArray = []

    for (let i = 0; i < num; i++) {
        const randomIndex = Math.floor(Math.random() * array.length)
        generationArray.push(array[randomIndex])
        array = array.filter((item) => item !== array[randomIndex])
    }
    return generationArray
}
export const createArray = (n) => {
    return new Array(n).fill(null).map((_, idx) => idx + 1)
}
