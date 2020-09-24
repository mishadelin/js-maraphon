function words() {
    var k = 0;
    var stringsearch = ["а", "a"];
    var Row = prompt("Введите текст:");
    for (var i = 0; i < Row.length; i++){
        for (var j = 0; j < stringsearch.length; j++){
            if (Row[i] === stringsearch[j]) {
                ++k;
            }
        }
    }
    return k ? k : "нет совпадений";
}

alert(words());