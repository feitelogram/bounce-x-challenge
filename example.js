
function myOwnIndexOf(array, element){
    var len = array.length
    for(var i = 0; i<len ; i++){
        if(element === array[i]) return i;
    }
    return -1;
}

var arr = [1,2, "cat", "dog"]

myOwnIndexOf(arr, "cat")
myOwnIndexOf([1,2,"cat","dog"], "cat")

(function(){
    return "Hello World"
})()

var st = parseInt(document.querySelector("#modalWindow > div.insitu-modal__footer > div.insitu-modal__bag-info > div.insitu-modal__subtotal").innerText.split(" ")[1])