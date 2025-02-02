/* 
*JavaScript chapter 11 (Mini Project): 

*1 : Event Bubbling : 
    - in HTML for the diff-different element we create multiple events that called event Bubbling.

    *examle: 
        let div = document.querySelector("div"); 
        let ul = document.querySelector("ul"); 
        let lis = document.querySelectorAll("li"); 

        div.addEventListener("click", function(){
            console.log("div was clicked"); 
        });

        ul.addEventListener("click", function(event){
            event.stopPropagation(); 
            console.log("ul was clicked"); 
        });

        for(li of lis){
            li.addEventListener("click", function(event){
                event.stopPropagation(); 
                console.log("li as clicked"); 
            });
        }

*2: Building Todo with DOM :

    *i: using this just remove existing elements not new
        let delBtns = document.querySelectorAll(".delete"); 
        for(delBtn of delBtns){
            delBtn.addEventListener("click", function(){
                let par = this.parentElement; 
                console.log(par); 
                // this not work for new element to delete just e
                par.remove();
            });
        }

    *ii : Event Delegation : 
        - this use to delete new elements and existing elements remove  
        - using bubbling phenomena we do Event Deligation.

*/ 
// building to do with dom 

let btn = document.querySelector("button"); 
let ul = document.querySelector("ul"); 
let input = document.querySelector("input"); 

btn.addEventListener("click", function(){
    let item = document.createElement("li"); 
    item.innerText = input.value; 
    
    let delBtn = document.createElement("button"); 
    delBtn.innerText = "delete"; 
    delBtn.classList.add("delete"); 

    item.appendChild(delBtn); 
    ul.appendChild(item); 
    input.value = ""; 
});

ul.addEventListener("click", function(event){
    // console.dir(event.target.nodeName); 
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement; 
        listItem.remove(); 
        console.log("deleted"); 
    }
});
/* //*this not work for new element to delete.

let delBtns = document.querySelectorAll(".delete"); 
for(delBtn of delBtns){
    delBtn.addEventListener("click", function(){
        let par = this.parentElement; 
        console.log(par);

        par.remove();
    });
}
*/

