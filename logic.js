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
        const draggable = document.querySelector('.dragging')
        container.appendChild(draggable)
    })
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