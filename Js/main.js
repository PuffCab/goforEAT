// key APi google maps AIzaSyAZKu0wgOwlzZDeS4KcPVis9wrwLw6Jips 

window.onload = function (){
 
  createFirstPage();

};

function createFirstPage() {

  console.log("cargada funcion")
  const firstList = `
                        <div class="homeIntro"><h1>ARE YOU HUNGRY??</h1>
                        <select id="selectCity" onchange="searchCity(value)">
                            <option selected="true" disabled="disabled">Select city</option>
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
  console.log("cargada lista ciudad");
 
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
      var restaurantImgContainer = document.createElement("div");
      restaurantImgContainer.setAttribute("class", "imgContainer" );
      restaurantImgContainer.setAttribute("id", "restListImgContainer" );

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
       

       //Added click event to Restaurant Card

        card.addEventListener('click', function() {
         
          var cardRestaurantId = event.currentTarget.id; //with event.target.id, we got info from the element on clicked , not from the "parent" with the event asssigned
          console.log(card);
          console.log(event.currentTarget.id);
          
          secondFetchFunction(cardRestaurantId);
        }) 

       
       

       //add created elements

       restaurantImgContainer.appendChild(restaurantImg);
       nameContainer.appendChild(spanName);
       cuisineContainer.appendChild(spanCuisine)
       addressContainer.appendChild(spanAddress)
       card.appendChild(restaurantImgContainer);
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
            console.log("cargado un restaurante");
            
        // var lat = allData.location.latitude;
        // var long = allData.location.longitude;
        // console.log(lat)
      


        const oneRestPage = `
                          <div id="orpCard" class="person">
                            <div id="orpImgContainer" class="orpImg">
                                <img class="img-thumbnail" alt="${allData.name}" src="${allData.featured_image}">
                            </div>
                            <div class="nameContainer">
                                <span id="orpName" class="name">${allData.name}</span>
                            </div>
                            <div class="orpCuisineContainer">
                                <span id="orpCuisine" class="cuisine">${allData.cuisines}</span>
                                <p class="price">Average price for two: ${allData.average_cost_for_two}$</p>
                            </div>
                            
                            <div class="orpAddressContainer">
                                <span id="orpAddress" class="address">${allData.location.address}</span>
                            </div>

                            <ul>
                                      <li><a class="#menu" href="${allData.menu_url}">Menu</a></li>
                                      <li><a href="#reviews">Reviews</a></li>
                                      <li><a onclick="initMap(${allData.location.latitude}, ${allData.location.longitude})">Take me there</a></li>
                              </ul>

                          </div>
                        `;
         
        document.getElementById("restaurantList").innerHTML = oneRestPage
        
  }


  // function createMap(lat, long) {
  //     var latitud = lat
  //     var longitud = long
  //   console.log("llega aqui")
  //   console.log(latitud, longitud)
    

  // }
  function initMap(lat, long) {

    const restMap =`
    <div id="map"></div>
    `
    document.getElementById("restaurantList").innerHTML = restMap


    console.log("funcion mapa")
    var latitud = lat
    var longitud = long
      // The location of Uluru
      var uluru = {lat: latitud, lng: longitud};
      // The map, centered at Uluru
      var map = new google.maps.Map(
          document.getElementById('map'), {zoom: 15, center: uluru});
      // The marker, positioned at Uluru
      var marker = new google.maps.Marker({position: uluru, map: map});

    }


    function goToChat () {

      document.getElementById("footerHome").style.display = "none"

      const chatPage = `
              <div id="posts">POSTS DEL CHAT</div>
              <footer>
                <div id="footerChat" class="container">
                <button id="logIn" type ="button" onclick="googleSignIn()">log In</button>
                <button id="homeBtn" type="button" onclick="goHome()">HOME</button>
                <input id="text" type="text">
                <button onclick="writeNewPost(); document.getElementById('text').value = ''">Send</button>
                </div>
              </footer>                
              `
          document.getElementById("restaurantList").innerHTML = chatPage


          

    }
  
  function goHome() {
    createFirstPage();
    document.getElementById("footerHome").style.display = "block";
  }

    let userName = "";
    let userMail = "";

    

    function googleSignIn () {
      console.log("googlesing in function")
      var provider = new firebase.auth.GoogleAuthProvider();

      firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log("logg in");
        console.log(user);
        getPosts();
        // ...
      }).catch(function(error) {
        
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        console.log(error)
      });

    }
  
    function writePost() {

      var database = firebase.database();
      let message = document.getElementById("text").value;
      let user= firebase.auth().currentUser.displayName;
      console.log(message)
      console.log(user)

       // A post entry.
       var postData = {
        author: username,
        body: userInput,
        date: new Date().toISOString()
         
      };

      // Get a Key for a new Post.
      var newPostKey = firebase
        .database()
        .ref()
        .child('posts')
        .push().key


      // Write the new post's data simultanously in the posts list and the user's post list.
      var updates = {};
      updates['/posts/' + newPostKey] = postData;

      firebase
        .database()
        .ref()
        .update(updates);

      
          
      // getPosts()
      firebase.database().ref().child('posts').push().key({
        user,
        message,
        date: new Date()
      });
      
    }

    function writeNewPost() {

      

      console.log(" write new post");
      const userInput = document.querySelector('input').value;
      let user= firebase.auth().currentUser.displayName;
      

       // A post entry.
       var postData = {
        author: user,
        body: userInput,
        date: new Date().toISOString()
         
      };
      console.log(postData);

      // Get a Key for a new Post.
      var newPostKey = firebase
        .database()
        .ref()
        .child('posts')
        .push().key


      // Write the new post's data simultanously in the posts list and the user's post list.
      var updates = {};
      updates['/posts/' + newPostKey] = postData;

      firebase
        .database()
        .ref()
        .update(updates);


        // getPosts()
    
    }

    function getPosts() {

      const postsDiv = document.querySelector('#posts');

      firebase
        .database()
        .ref('posts')
        .on('value', function(data) {
          console.log(data.val());

          const allPosts = data.val();

          let template = "";
          for (key in allPosts) {
            console.log(allPosts[key].author);
            template +=`
                
                  
                    <div class="msg_history">
                            <div class="incoming_msg">
                              <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>
                              <div class="received_msg">
                                <div class="received_withd_msg">
                                  <p>Text recieved msg</p>
                                  <span class="time_date"> Fecha recieved msg</span></div>
                              </div>
                            </div>
                            <div class="outgoing_msg">
                                <div class="sent_msg">
                                  <p>${allPosts[key].body}</p>
                                  <span class="time_date">${allPosts[key].date}   </span> </div>
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                        `;
          }

            postsDiv.innerHTML = template;


              
          });
          

    }




//Este es tu ID de cliente  292599392262-qk4t09d9so37h8vjhi9bqcpsusdaf6co.apps.googleusercontent.com
// Este es tu secreto de cliente o_KS-mDuh-l8ZVzZlCf1e43w
//refresh_token": "1/_kvqEeDxyfnv9IwwqvDlKF0raGex3RKweEU9RhsHQAHpcOU3EGrsmNgociXAdSds


// commented template,va dentro de los backticks
// <div id="${allPosts[key].author}">
//                 <p>Author: ${allPosts[key].author}</p>
//                 <p>Message: ${allPosts[key].body}</p>
//                 <p>Date : ${allPosts[key].date}</p>
//               </div>