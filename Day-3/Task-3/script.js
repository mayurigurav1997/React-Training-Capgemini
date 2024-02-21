

function select_technology(target)
{
    console.log(target)
    document.getElementById("selected-tech").innerHTML=target.value;
}


//only store unique values
var all_selected = new Set()

function select_technology2(target)
{
    if(target.checked)
        all_selected.add(target.value)
    else
        all_selected.delete(target.value);
    console.log(all_selected,"all_selected")

    document.getElementById("selected").innerHTML = Array.from(all_selected);
}
var menus = new Set()
var menuArray =[]
function selectMenu(target)
{  
    const select = document.getElementById("menu-options")
    console.log(select)
    if(target.checked){
        // menus.add(target.value)      
    menuArray.push(target.value)
    }
    else{
        // menus.delete(target.value);
        console.log(target.value,"value")
        const index = menuArray.indexOf(target.value)
        menuArray.splice(index,1)
    }
    // const menuArray = Array.from(menus);
    console.log(menuArray,"menuArray")
    select.innerHTML = null;
    const optionsHTML = menuArray.map(menu => `<option value="${menu}">${menu}</option>`).join('');
    // join return string
     console.log(optionsHTML,"OT")
    // Set the innerHTML of the select element
    select.innerHTML = optionsHTML;
   
    // menuArray.forEach(menu =>{
    //     // var option = document.createElement("option");
    //     // option.value = menu;
    //     // option.text = menu;
    // })
}