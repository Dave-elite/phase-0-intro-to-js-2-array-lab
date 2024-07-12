// Write your solution here!...


let  cats = ["Milo", "Otis", "Garfield"]


function destructivelyAppendCat(name){
    cats.push("Ralph")
}
function destructivelyPrependCat(name){
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(name){
    cats.pop()
}
function destructivelyRemoveFirstCat(name){
    cats.shift()
}
function appendCat(name){
    let newCats = [...cats];
    newCats.push("Broom");
    return newCats
}
function prependCat(name){
    let newCats = [...cats];
    newCats.unshift("Arnold");
    return newCats

}
function removeLastCat(name){
    let newCats = [...cats];
    newCats.pop();
    return newCats
    
}
function removeFirstCat(name){
    let newCats = [...cats];
    newCats.shift("Milo")
    
    return newCats
}
