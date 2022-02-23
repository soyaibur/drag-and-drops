// ....Univesal declaration and others......
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::



// .....All Element Selection will be undernith here.......
const draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.container')
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::

 

// .....All EventListener go undernith here...........
draggables.forEach(draggable=>{
    
    draggable.addEventListener("dragstart",()=>{
        draggable.classList.add('dragging')
    })
    draggable.addEventListener("dragend",()=>{
     draggable.classList.remove('dragging')
    })
 
})




for(let container of containers){

    container.addEventListener("dragover",(e)=>{
        e.preventDefault()
        const afterElement = getDragAfterElement(container, e.clientY)
        const draggable = document.querySelector('.dragging')

        if( afterElement == null) {
            container.appendChild(draggable)
        } else{
          container.insertBefore(draggable, afterElement)
        }

    })
    }

function getDragAfterElement(container, y){
    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]
    
   return draggableElements.reduce((closest, child)=>{
       const box = child.getBoundingClientRect()
       const  offset = y - box.top - box.height / 2
       
      if(offset < 0 && offset > closest.offset){
          return {offset: offset, element: child}
      } else{
          return closest
      }

    },{offset: Number.NEGATIVE_INFINITY} ).element
}
   











   let str = "hi may name is khan"

    let newStr='';
    for(let char of str){
        if(char >= 'A' && char <= 'Z'){
            newStr+= char.toLowerCase();

        }else{
            newStr+= char.toUpperCase();
        }
    }
    






// :::::::::::::::::::::::::::::::::::::::::::::::::::



// ......All Function will go here undernith..........
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//All code will be deleted here.............
function printOut(text){
    const div = document.createElement('div')
    div.innerHTML = text
    document.body.appendChild(div)
}
// containers.forEach(draggable =>{
//     draggable.addEventListener('click',()=>{
//         alert("this is working")
//     })
// })

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// const draggables = document.querySelectorAll('.draggable')
// const containers = document.querySelectorAll('.container')

// draggables.forEach(draggable => {
//     draggable.addEventListener('dragstart',()=>{
//         draggable.classList.add('dragging')
//     })
//     draggable.addEventListener('dragend',()=>{
//         draggable.classList.remove('dragging')
//     })
// });

// containers.forEach(container =>{
//     container.addEventListener('dragover',(e)=>{
//         e.preventDefault()
//         const draggable = document.querySelector('.dragging')
//         container.appendChild(draggable)
//     })
// })