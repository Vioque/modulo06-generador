var array = []

var randomPick = (n, min, max) => {
    var range = max - min + 1
    var i = 0
    while (i < n) {
        result = (Math.floor(Math.random() * range) + min)
        array.indexOf(result) === -1 ? array.push(result) : i--
        i++
    }
    console.log('Contenido del array: ', array)
}

n = parseInt(window.prompt('Indica la cantidad de números: '))
min = parseInt(window.prompt('Indica el número menor: '))
max = parseInt(window.prompt('Indica el número mayor: '))

randomPick(n, min, max)