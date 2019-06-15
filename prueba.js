


// var user;
// function choose(choice){
//     user = choice;
// }

// function second(number){
//     console.log(number);
// }

// function test(click){
//     console.log("You chossed " + user);
// }



// <script>
// var buttonValue
// document.getElementById("myBtn1").addEventListener("click", function(){
//   //document.getElementById("demo").innerHTML = 3;
//   var buttonValue = 3
// });
// document.getElementById("myBtn2").addEventListener("click", function(){
//   //document.getElementById("demo").buttonValue = 4;
//   var buttonValue = 6
// })
// var result = buttonValue + 5
// console.log(result)
// </script>

const myListOfElements = [
    {
     id: 1,
     name: "Elemento 1",
     img: "https://placehold.it/300?text=Elemento%201"
    },
    {
     id: 2,
     name: "Elemento 2",
     img: "https://placehold.it/300?text=Elemento%202"
    },
    {
     id: 3,
     name: "Elemento 3",
     img: "https://placehold.it/300?text=Elemento%203"
    }
   ];
   
   const createElements = (elementsArray) => {
     const container = document.querySelector('#container');
     
     elementsArray.forEach(({id, name, img}) => {
        const element = document.createElement('div');
        
        // creamos el span y lo añadimos al elemento padre
        const elementSpan = document.createElement('span');
        elementSpan.innerText = name;
        element.appendChild(elementSpan);
        
        // creamos la imagen y la añadimos al elemento padre
        const elementImg = document.createElement('img');
        elementImg.setAttribute('src', img);
        elementImg.setAttribute('alt', name);
        element.appendChild(elementImg);
        
        // añadimos el eventListenet
        element.addEventListener('click', () => {
          const targetElement = document.querySelector('#oneText');
          targetElement.innerText = name;
        });
        
        // añadimos el elemento al nodo contenedor
        container.appendChild(element);
     }) 
   }
   
   createElements(myListOfElements);