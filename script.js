const input = document.getElementById("header-input");
const nav = document.getElementById("header-nav");


input.addEventListener("click", () => {
    if(nav.classList.contains("close")){
        nav.classList.replace("close", "show")
        console.log('works')
    }else{
        nav.classList.replace("show","close")
    };
})



// import react from 'react'

// const description = () => {

//     const
//     return (
//         <div>
//             hola mundo
//             dfsd
//         </div>
//     )

// }



// html 
//     body
//         <description />
//         description />
//         description />
//         description />
  


