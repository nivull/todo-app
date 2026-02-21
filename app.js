const item1 = document.getElementById("todo-1");
const item2 = document.getElementById("todo-2");
const trashCan = document.querySelectorAll(".trash");

let items = [];
items.push(item1, item2);

updateItems();

function clickedTrash() {
    trashCan.forEach((element, i)=> {
        element.addEventListener('click', ()=>{

            items = items.filter((_, j)=>{

                if(i === j){
                    console.log(`removed ${j}`)
                    return false;
                } else{
                    return true;
                }
            }); 
        updateItems();    
        });
    });

    
}

function updateItems() {

    console.log(items.length);

}
clickedTrash();
