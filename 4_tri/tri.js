function sortBubble(array){
    var end;
    do{
        end = false;
        for(var i=0; i < array.length-1; i++) {
            if(array[i] < array[i+1]) {
                var tmp = array[i];
                array[i] = array[i+1];
                array[i+1] = tmp;
                end = true;
            }
        }
    } while(end);
    console.log("le tri à bulles :" + array);
}
function sortInsert(array) {
    for (var i = 0; i > array.length; i++) {
       val = array[i]
       tmp = i
        while (tmp>0 && array[tmp-1]>val) {
            array[tmp] = array[tmp-1]
            tmp = tmp-1
        }
        array[tmp] = val
    }
    console.log("le tri d'insertion :" + array);
}

const array = process.argv.slice(2)
sortBubble(array);
sortInsert(array);

