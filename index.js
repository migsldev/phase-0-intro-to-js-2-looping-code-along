// Code your solutions in this file
//1

function writeCards(names, event) {
    let arrayMessage = [];
    for (let x = 0; x < names.length; x++) {
        arrayMessage.push(`Thank you, ${names[x]}, for the wonderful ${event} gift!`);
    }
    return arrayMessage; // Return the array of messages
}

console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"));

//2
function countDown() {
    let count = 10;
    while (count >= 0) {
        console.log(count);
        count --;
    }
    
}


console.log(countDown());
