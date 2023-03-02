export const line = () => {
    return '\n---------------------------------------------\n'
}

export const jumpLines  = (...params) => {
    params.forEach(data =>  console.log(data))
    console.log(line())
}