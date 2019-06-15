// window.onload = function (){
 
//   createFirstPage();

// };

function createFirstPage() {

  console.log("cargada funcion")
  const firstList = `
                        <div>ARE YOU HUNGRY??
                        <select id="selectCity" onchange="searchCity(value)">
                            <option>Selec city</option>
                            <option value="280">New York City</option>
                            <option value="82">Lisbon</option>
                            <option value="311">Porto</option>
                            <option value="91">Dublin</option>
                            <option value="61">London</option>
                            <option value="258">Milan</option>
                            
                        </select>
                      </div>
                    `
document.getElementById("restaurantList").innerHTML = firstList

}

var cityId;
function searchCity(cityId) {
 
 var url = "https://developers.zomato.com/api/v2.1/search?entity_id=" + cityId + "&entity_type=city";
 console.log(url);

 fetch(url, {
     method: "GET",
     headers: {
         "user-key": "761f6ca627cd39bc1f417f361a422990"
     }
 
 })
 .then(function (res) {
     return res.json();
 })
 .then(function (data) {
   var allData = data.restaurants;
   
   getRestaurans(allData);
   
   console.log(allData[0].restaurant.location.address);
     
 })
 .catch(function (error) {
     console.log(error)
 });
};
console.log(cityId);

// var data = {
//     "results_found": 42764,
//     "results_start": 0,
//     "results_shown": 3,
//     "restaurants": [
//       {
//         "restaurant": {
//           "R": {
//             "res_id": 16770626
//           },
//           "apikey": "761f6ca627cd39bc1f417f361a422990",
//           "id": "16770626",
//           "name": "Le Bernardin",
//           "url": "https://www.zomato.com/new-york-city/le-bernardin-gramercy?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
//           "location": {
//             "address": "155 W 51st Street, New York 10019",
//             "locality": "Gramercy",
//             "city": "New York City",
//             "city_id": 280,
//             "latitude": "40.7608027778",
//             "longitude": "-73.9819194444",
//             "zipcode": "10019",
//             "country_id": 216,
//             "locality_verbose": "Gramercy"
//           },
//           "switch_to_order_menu": 0,
//           "cuisines": "French, Seafood",
//           "average_cost_for_two": 500,
//           "price_range": 4,
//           "currency": "$",
//           "offers": [],
//           "opentable_support": 0,
//           "is_zomato_book_res": 0,
//           "mezzo_provider": "OTHER",
//           "is_book_form_web_view": 0,
//           "book_form_web_view_url": "",
//           "book_again_url": "",
//           "thumb": "https://b.zmtcdn.com/data/pictures/6/16770626/a88c9e45fa431feacbd60f19a494165e.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
//           "user_rating": {
//             "aggregate_rating": "4.8",
//             "rating_text": "Excellent",
//             "rating_color": "3F7E00",
//             "votes": "694"
//           },
//           "photos_url": "https://www.zomato.com/new-york-city/le-bernardin-gramercy/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
//           "menu_url": "https://www.zomato.com/new-york-city/le-bernardin-gramercy/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
//           "featured_image": "https://b.zmtcdn.com/data/pictures/6/16770626/a88c9e45fa431feacbd60f19a494165e.jpg",
//           "has_online_delivery": 0,
//           "is_delivering_now": 0,
//           "include_bogo_offers": true,
//           "deeplink": "zomato://restaurant/16770626",
//           "is_table_reservation_supported": 0,
//           "has_table_booking": 0,
//           "events_url": "https://www.zomato.com/new-york-city/le-bernardin-gramercy/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
//           "establishment_types": []
//         }
//       },
//       {
//         "restaurant": {
//           "R": {
//             "res_id": 16762160
//           },
//           "apikey": "761f6ca627cd39bc1f417f361a422990",
//           "id": "16762160",
//           "name": "Carmine's Italian Restaurant",
//           "url": "https://www.zomato.com/new-york-city/carmines-italian-restaurant-gramercy?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
//           "location": {
//             "address": "200 West 44th Street, btwn Broadway & 8th Avenue 10036",
//             "locality": "West 44th Street, Gramercy",
//             "city": "New York City",
//             "city_id": 280,
//             "latitude": "40.7579000000",
//             "longitude": "-73.9875700000",
//             "zipcode": "10036",
//             "country_id": 216,
//             "locality_verbose": "West 44th Street, Gramercy, New York City"
//           },
//           "switch_to_order_menu": 0,
//           "cuisines": "Italian, Southern",
//           "average_cost_for_two": 100,
//           "price_range": 4,
//           "currency": "$",
//           "offers": [],
//           "opentable_support": 0,
//           "is_zomato_book_res": 0,
//           "mezzo_provider": "OTHER",
//           "is_book_form_web_view": 0,
//           "book_form_web_view_url": "",
//           "book_again_url": "",
//           "thumb": "https://b.zmtcdn.com/data/pictures/0/16762160/7f5654c601548a24af81beb345d99f1b.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
//           "user_rating": {
//             "aggregate_rating": "4.8",
//             "rating_text": "Excellent",
//             "rating_color": "3F7E00",
//             "votes": "1032"
//           },
//           "photos_url": "https://www.zomato.com/new-york-city/carmines-italian-restaurant-gramercy/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
//           "menu_url": "https://www.zomato.com/new-york-city/carmines-italian-restaurant-gramercy/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
//           "featured_image": "https://b.zmtcdn.com/data/pictures/0/16762160/7f5654c601548a24af81beb345d99f1b.jpg",
//           "has_online_delivery": 0,
//           "is_delivering_now": 0,
//           "include_bogo_offers": true,
//           "deeplink": "zomato://restaurant/16762160",
//           "is_table_reservation_supported": 0,
//           "has_table_booking": 0,
//           "events_url": "https://www.zomato.com/new-york-city/carmines-italian-restaurant-gramercy/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
//           "establishment_types": []
//         }
//       },
//       {
//         "restaurant": {
//           "R": {
//             "res_id": 16769241
//           },
//           "apikey": "761f6ca627cd39bc1f417f361a422990",
//           "id": "16769241",
//           "name": "Junior's Restaurant",
//           "url": "https://www.zomato.com/new-york-city/juniors-restaurant-theater-district?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
//           "location": {
//             "address": "1515 Broadway--Between Broadway and 8th Avenue, Midtown - Times Square 10019",
//             "locality": "Theater District",
//             "city": "New York City",
//             "city_id": 280,
//             "latitude": "40.7579300000",
//             "longitude": "-73.9864000000",
//             "zipcode": "10019",
//             "country_id": 216,
//             "locality_verbose": "Theater District"
//           },
//           "switch_to_order_menu": 0,
//           "cuisines": "American, Desserts",
//           "average_cost_for_two": 45,
//           "price_range": 3,
//           "currency": "$",
//           "offers": [],
//           "opentable_support": 0,
//           "is_zomato_book_res": 0,
//           "mezzo_provider": "OTHER",
//           "is_book_form_web_view": 0,
//           "book_form_web_view_url": "",
//           "book_again_url": "",
//           "thumb": "https://b.zmtcdn.com/data/pictures/1/16769241/050188249f15bdaa4c1e32b0fdc2cbe9.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
//           "user_rating": {
//             "aggregate_rating": "4.7",
//             "rating_text": "Excellent",
//             "rating_color": "3F7E00",
//             "votes": "533"
//           },
//           "photos_url": "https://www.zomato.com/new-york-city/juniors-restaurant-theater-district/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
//           "menu_url": "https://www.zomato.com/new-york-city/juniors-restaurant-theater-district/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
//           "featured_image": "https://b.zmtcdn.com/data/pictures/1/16769241/050188249f15bdaa4c1e32b0fdc2cbe9.jpg",
//           "has_online_delivery": 0,
//           "is_delivering_now": 0,
//           "include_bogo_offers": true,
//           "deeplink": "zomato://restaurant/16769241",
//           "is_table_reservation_supported": 0,
//           "has_table_booking": 0,
//           "events_url": "https://www.zomato.com/new-york-city/juniors-restaurant-theater-district/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
//           "establishment_types": []
//         }
//       }
//     ]
//   }
//   console.log(data.restaurants[0].restaurant)
// console.log("1")

// var allData = data.restaurants
  function getRestaurans(allData) {
     var restaurantList = document.getElementById("restaurantList");
     restaurantList.innerHTML = ""; // to empty search and allow new search
      // console.log("2")
     for (var i = 0; i < allData.length; i++) {
      //  console.log("3")
      var card = document.createElement("div");
      card.setAttribute("class", "card")
      card.setAttribute('id', allData[i].restaurant.id);

      

      //add rest. Image
      var restaurantImg = document.createElement("img");
      restaurantImg.setAttribute("src", allData[i].restaurant.featured_image);
      restaurantImg.setAttribute("alt", allData[i].restaurant.name);
      restaurantImg.setAttribute("class", "img-thumbnail");

// console.log(allData[i])

      //add restaurant name 

      
      var nameContainer = document.createElement("div");
      nameContainer.setAttribute("class", "nameContainer");
      nameContainer.setAttribute("id", "nameDiv" + i);
      var spanName = document.createElement("span");
      spanName.setAttribute("class", "name");
      spanName.setAttribute("id", allData[i].restaurant.id);
      var restaurantName = allData[i].restaurant.name
      spanName.innerHTML = restaurantName

      //add eventlistener to name container. to get name in One Restaurant Page (Orp)
      // nameContainer.addEventListener('click', () => { //study callback functions
      //   // console.log(i)
      //   var targetElement = document.getElementById('oneName');
      //   console.log(targetElement);
      //   changeName(targetElement, event)
        
      // })

       //add cuisine type

       var cuisineContainer = document.createElement("div");
       cuisineContainer.setAttribute("class", "cuisineContainer");
       var spanCuisine = document.createElement("span");
       spanCuisine.setAttribute("class", "cuisine");
       var cuisineType = allData[i].restaurant.cuisines;
       spanCuisine.innerHTML = cuisineType; 


       //add restaurant address

       var addressContainer = document.createElement("div");
       addressContainer.setAttribute("class", "addressContainer");
       var spanAddress = document.createElement("span");
       spanAddress.setAttribute("class", "address");
       var restaurantAddress = allData[i].restaurant.location.address;
       spanAddress.innerHTML = restaurantAddress;

      //  //add eventlistener to address container. to get address in orp

      //  addressContainer.addEventListener('click', ()=>{
      //    var targetElement = document.getElementById("ondeAddress");
      //    console.log(targetElement);
      //    changeAddress(targetElement, event);
      //  })

        // intento de anhadir el event a toda la card para cambiar al mismo tiempo nombre y direccion (editado lo anterior por si no funciona esto)
        //como no funciona lo de la linea anterior. Edito e intento con un loop
       
        card.addEventListener('click', function() {
         
          // var cardRestaurantId = card.getAttribute("id");
          var cardRestaurantId = event.currentTarget.id;
          console.log(card);
          console.log(event.currentTarget.id);
          
          secondFetchFunction(cardRestaurantId);
        }) 

       
       

       //add created elements

       
       nameContainer.appendChild(spanName);
       cuisineContainer.appendChild(spanCuisine)
       addressContainer.appendChild(spanAddress)
       card.appendChild(restaurantImg);
       card.appendChild(nameContainer);
       card.appendChild(cuisineContainer);
       card.appendChild(addressContainer)

       restaurantList.appendChild(card);
       //  console.log("4")
    
     }
     

  }

  

function secondFetchFunction(cardRestaurantId) {

  fetch("https://developers.zomato.com/api/v2.1/restaurant?res_id=" + cardRestaurantId
    , {
    method: "GET",
    headers: {
      "user-key" : "761f6ca627cd39bc1f417f361a422990"
    }
  })
  .then(function(res){
    return res.json();
  })
  .then(function(data) {
    var allData = data;
    console.log(allData.location);
    getOneRestPage(allData);

    // console.log(allData);
  })
  .catch(function(error) {
    console.log(error);
  })

}
    function getOneRestPage (allData) {
      console.log(allData);
      
      // var orpDiv = document.getElementById('orpDiv')
      // var orpCard = document.createElement("div");
      //   orpCard.setAttribute('class', 'orpCard');
      //   orpCard.innerHTML = 'PRUEBA'

      //   orpDiv.appendChild(orpCard);


        const oneRestPage = `
                          <div id="orpCard" class="person">
                            <div id="orpImgContainer" class="orpImg">
                                <img class="img-thumbnail" alt="${allData.name}" src="${allData.featured_image}">
                            </div>
                            <div class="nameContainer">
                                <span id="orpName">${allData.name}</span>
                            </div>
                            <div class="orpAddressContainer">
                                <span id="orpCuisineContainer">${allData.cuisines}</span>
                            </div>

                            <p class="bio">${allData.average_cost_for_two}</p>

                            <ul>
                                      <li><a class="#menu" href="#home">Menu</a></li>
                                      <li><a href="#reviews">Reviews</a></li>
                                      <li><a href="#takeme">Take me there</a></li>
                              </ul>

                          </div>
                        `;
         
        document.getElementById("restaurantList").innerHTML = oneRestPage
        


        // var orpNameContainer = document.createElement("div");
        // orpNameContainer.setAttribute('class', 'orpNameContainer');

        // var orpSpanName = document.createElement("span");
        // orpSpanName.setAttribute('class', 'orpSpanName');
      
      // for (var i = 0; i < allData; i++) {
      //   console.log('algo');
      // }  // creo que el loop no es necesario (solo hay propiedades de un objeto). Pero no se xq no entra en el loop
  }
  






