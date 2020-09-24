    const firstRow = 'мама мыла раму';
    const secondRow = 'собака друг человека';

function getRow(firstRow, secondRow) {
    
    var k = 0;
    var s = 0;
    var stringsearch = ["а", "a"];
    // var Row = prompt("Введите текст:");
    for (var i = 0; i < firstRow.length; i++){
        for (var j = 0; j < stringsearch.length; j++){
            if (firstRow[i] === stringsearch[j]) {
                ++k;
            }
        }
    }
    for (var i = 0; i < secondRow.length; i++){
        for (var j = 0; j < stringsearch.length; j++){
            if (secondRow[i] === stringsearch[j]) {
                ++s;
            }
        }
    }
    if (k > s){
        alert (firstRow);
    } else {
        alert (secondRow);
    }
    return k ? k : "нет совпадений";
}

console.log(getRow(firstRow, secondRow)); 
