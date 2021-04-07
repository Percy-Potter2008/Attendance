ARRAY1= [];
function Submit() {
    var A= document.getElementById("No.1").Value;
    var B= document.getElementById("No.2").Value;
    var C= document.getElementById("No.3").Value;
    var D= document.getElementById("No.4").Value;
    ARRAY1.push(A);
    ARRAY1.push(B);
    ARRAY1.push(C);
    ARRAY1.push(D);
    console.log(ARRAY1);
    document.getElementById("sorted_answers").innerHTML= ARRAY1;
}
function sorty() {
    ARRAY1.sort();
    console.log(ARRAY1);
    document.getElementById("sorted_answers").innerHTML= ARRAY1;
    document.getElementById("ans").value= ARRAY1;
}
