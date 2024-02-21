function convertDistance(){
    console.log("clicked")
    const distance = parseFloat(document.getElementById("distance").value)
    if(distance){
        document.getElementById("meter").innerText = distance *1000
    document.getElementById("centimeter").innerText = distance *100000
    document.getElementById("inches").innerText = distance * 39370.1
    document.getElementById("feet").innerText = distance * 3280
    }
    if(!distance){
        alert("Please enter the distance in km")
    }
}
function convertGB(){
    console.log("clicked")
    const gb = parseFloat(document.getElementById("gb").value)
    console.log("clicked",gb)
    if(gb){
        document.getElementById("megabytes").value = gb *1024
    document.getElementById("kilobytes").value = gb *1048576
    document.getElementById("bytes").value = gb *1048576 *1024
    document.getElementById("bits").value = gb * 1048576 *1024 *8
    }
    if(!gb){
        alert("Please enter the capacity in gb")
    }
}