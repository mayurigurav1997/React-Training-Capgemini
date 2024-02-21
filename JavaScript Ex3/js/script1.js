
var arr = [14,36,25,75,64];


function add_number()
{
    var v = Number(document.getElementById("txt-number").value);
    arr.push(v);

    console.log(arr);
}


function search_number()
{
    var user_input = Number(document.getElementById("txt-search").value);

    var pos = arr.indexOf(user_input);
    console.log("pos = " + pos);
    if(pos==-1)
        console.log("Not Found!");
    else
        console.log("Value Found.");
}

function sort_asc()
{
    //callback function is supply to quick sort algorithm to array array values in a special sequence
    arr.sort(function(a, b){return a - b});
    console.log(arr);
}

function sort_desc()
{
    //callback function is supply to quick sort algorithm to array array values in a special sequence
    arr.sort(function(a, b){return b - a});
    console.log(arr);
}