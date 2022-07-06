//exercise 1

function squareDigits(number) {

    let numToString = number.toString();

    let stringToArray = numToString.split("");

    const mapArray = stringToArray.map(n => n * n);

    let arrayToString = mapArray.join();

    let sum = arrayToString.replace(/,/g, '');

    let stringToNumber = parseInt(sum);

    return stringToNumber ;
}

console.log(squareDigits(3212));


//exercise 2

function chessBoard(pole) {
    let numberOfChess = ["1", "2", "3", "4", "5", "6", "7", "8"];
    let wordsOfChess = ["a", "b", "c", "d", "e", "f", "g", "h"];

    let result = {};
    wordsOfChess.forEach((w) => {
        numberOfChess.forEach((n) => {
            let namePole = w + n;

            if (n % 2 === 0) {
                result[namePole] = "white";

            } else {
                result[namePole] = "black";
            }

        })

    });
    for (let keyPole in result){

        if (pole === keyPole){
            return result[keyPole];
        }
    }

}

console.log(chessBoard("g7"));


//exercise 3

function reversibleInclusiveList(start, end) {
    let listOfNumber = [];
    if (start < end){
        for (let i = start ; i <= end ; i++){
            listOfNumber.push(i);
        }
    }else{
        for (let i = start ; i >= end ; i--){
            listOfNumber.push(i);
        }
    }
    return listOfNumber ;



}


console.log(reversibleInclusiveList(40,20));


//exercise 4

function equal(a, b, c) {
    if (a === b && a === c) {

        return "3" ;

    } else if (a === b || a === c || b === c) {

        return "2" ;

    } else {

        return "0" ;

    }
}

console.log(equal(3, 3, 4));


//exercise 5


function rps(p1, p2) {

    switch (true) {
        case p1 === "Paper" && p2 === "Rock":
            console.log("The winner is P1");
            break;
        case p1 === "Scissors" && p2 === "Paper":
            console.log("The winner is P1");
            break;
        case p1 === "Rock" && p2 === "Scissors":
            console.log("The winner is P1");
            break;
        case p1 === "Scissors" && p2 === "Rock":
            console.log("The winner is P2");
            break;
        case p1 === "Rock" && p2 === "Paper":
            console.log("The winner is P2");
            break;
        case p1 === "Paper" && p2 === "Scissors":
            console.log("The winner is P2");
            break;
        case p1 === "Rock" && p2 === "Rock":
            console.log("It is a draw");
            break;
        case p1 === "Paper" && p2 === "Paper":
            console.log("It is a draw");
            break;
        case p1 === "Scissors" && p2 === "Scissors":
            console.log("It is a draw");
            break;
        default :
            console.log("You don't choose correctly");
            break;
    }



}

rps("Paper","Paper");


//exercise 6


function arrayOfMultiples (num, len) {

    let resultOfMultiples = [];

    for (let i =1 ; i <= len ; i++ ){

        let itemMultiple = num * i ;

        resultOfMultiples.push(itemMultiple);
    }
    return resultOfMultiples ;
}

console.log(arrayOfMultiples (7, 14));


//exercise 7

let names = []
let users = [
    { name: "John", email: "john@example.com" },
    { name: "Jason", email: "jason@example.com" },
    { name: "Jeremy", email: "jeremy@example.com" },
    { name: "Jacob", email: "jacob@example.com" }
]
for(const info of users) {

    let name = info.name;

    names.push(name);
}


console.log(names);


//exercise 8


function keysAndValues(obj) {

//first way

    // let keys = [];
    // let values = [];
    // let keysAndValues = [];
    //
    // for (const key in obj) {
    //
    //     keys.push(key);
    //     values.push(obj[key]);
    //
    // }
    // keysAndValues.push(keys, values);
    // return keysAndValues;


    //second way

    let keys1 = Object.keys(obj);
    let values1 = Object.values(obj);

    let keysAndValues1 = [[...keys1], [...values1]];

    return keysAndValues1;
}

console.log(keysAndValues({a: "Apple", b: "Microsoft", c: "Google"}));


//exercise 9


const getStudentsWithNamesAndAvgNote = (array) => {

    let infoOfStudents = [];
    let infoOfStudents1 = {};
    for (let student of array) {

        let scoresOfStudent = student.notes;
        let total = 0;
        for (let i = 0; i < scoresOfStudent.length; i++) {
            total += scoresOfStudent[i];
        }
        let averageOfStudent = total / scoresOfStudent.length;

        const nameOfStudent = student.name;

        infoOfStudents1['name'] = nameOfStudent;

        infoOfStudents1['avgNote'] = averageOfStudent;

        infoOfStudents.push(infoOfStudents1);

        // infoOfStudents.push(averageOfStudent);
    }
    return infoOfStudents;


}

console.log(getStudentsWithNamesAndAvgNote([{name: "John", notes: [3, 5, 4]}]));


//exercise 10

function generation(x, y) {

    const arrayGeneration = [[-3 ,"great grandfather", "great grandmother"],
        [-2 ,"grandfather", "grandmother"],
        [-1 ,"father", "mother"],
        [0 ,"me!", "me!"],
        [1 ,"son", "daughter"],
        [2 ,"grandson", "granddaughter"],
        [3 ,"great grandson", "great granddaughter"],
    ]

    for (let element of arrayGeneration){

        if (x === element[0] && y === "m"){
            return element[1];

        }else if (x === element[0] && y === "f"){
            return element[2] ;

        }
    }

    const objectGeneration = [
        {gen : -3 , male : "great grandfather" , female : "great grandmother"},
        {gen : -2 , male : "grandfather" , female : "grandmother"},
        {gen : -1 , male : "father" , female : "mother"},
        {gen : 0 , male : "me!" , female : "me!"},
        {gen : 1 , male : "son" , female : "daughter"},
        {gen : 2 , male : "grandson" , female : "granddaughter"},
        {gen : 3 , male : "great grandson" , female : "great granddaughter"},

    ]

    for (let key of objectGeneration){

        if (x === key.gen && y === "m"){
            return key.male;
        }else if (x === key.gen && y === "f"){
            return key.female;
        }
    }
}

console.log(generation(1, "f"));



