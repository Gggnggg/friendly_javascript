console.log("Hello World!")
console.log("Again Hello World!")

//Задача 1

var greeting = "hello"
let number = 42
const answer = true
console.log(greeting, number, answer)

if (greeting !== "") {
    var greeting = 23
    let number = false
    const answer = "goodbye"
}
console.log (greeting, number, answer)
/* разница заключается в том, что переменная var поменяла
своё значение со строчного hello в числовой 23, в то время,
как остальные сохранили те же значения, что были заданы вначале */

//Задача 2
console.log(a)

var a = 4

// console.log (b)
//
// let b = 17


/* Вывод переменной var отображается как undefind, в то время,
как вывод переменной let выдаёт ошибку "нет доступа до инициализации"
скорее всего это связано с тем, что переменная var позволяет произвести хостинг,
но не доносит при этом значение */

//Задача 3
const messageFirst = "why"
const messageSecond = 93
const messageThird = true
const messageFourth = null
const messageFith = undefined
const messageSixth = {name: "Diana"}
const messageSeventh = Symbol("key")
const messageEighth = 67289n

console.log (typeof messageFirst, messageSecond, messageThird, messageFourth, messageFith, messageSixth, messageSeventh, messageEighth)

//Задача 4

const strNum= "21"
const realNum = 39
const bool = true

const sumNum = (strNum + realNum)
const difNum = (strNum - realNum)
const sumBool = realNum + bool

console.log(sumNum)
console.log(difNum)
console.log(sumBool)


/* Возможно они отличаются по причине того, что складывать строки можно,
а вычитать нельзя и при вычитании JS сразу пробует преобразовать данные в числа
А при сложении булеан значения с числом JS вероятнее всего конвертирует true в 1,
а false в 0*/

//Задача 5

console.log("5" - 2)
console.log("5" + 2)
console.log(true + 1)
console.log(false == 0)
console.log(null == undefined)

/*В первом случае - строка превартилась в число, во втором - число в строку
* в третьем - true превратилось в 1, в четвертом - false считалось как 0,
* в пятом - null и undefined конвертировались в нули аналогично*/
