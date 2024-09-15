let addtask=document.querySelector(".addedtask")
let submit_buttton=document.querySelector(".btn")
let all_list=document.querySelector(".lst")



submit_buttton.addEventListener("click",()=>{

    value=addtask.value
    console.log(value)
    list=document.createElement("li")
    list.innerText=value
    all_list.appendChild(list)
    addtask.value=" "
})