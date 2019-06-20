// key APi google maps AIzaSyAZKu0wgOwlzZDeS4KcPVis9wrwLw6Jips 


window.onload = function () {

  createFirstPage();

};




function createFirstPage() {

  console.log("cargada funcion")
  const firstList = `
                        <div class="homeIntro"><h1>ARE YOU HUNGRY?</h1>
                        <select id="selectCity" onchange="searchCity(value)">
                            <option selected="true" disabled="disabled">go for EAT</option>
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

let allData;
let orpAllData;


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
       allData = data.restaurants;
      // globalAllData = allData;
      // console.log(globalAllData);

      getRestaurans(allData, cityId);

      // console.log(allData[0].restaurant.location.address);

    })
    .catch(function (error) {
      console.log(error)
    });
};


// var allData = data.restaurants
function getRestaurans(allData) {
  console.log(allData)
  
  
  var restaurantList = document.getElementById("restaurantList");
  restaurantList.innerHTML = ""; // to empty search and allow new search
  
  for (var i = 0; i < allData.length; i++) {
    //  console.log("3")
    var card = document.createElement("div");
    card.setAttribute("class", "card")
    card.setAttribute('id', allData[i].restaurant.id);



    //add rest. Image
    var restaurantImgContainer = document.createElement("div");
    restaurantImgContainer.setAttribute("class", "imgContainer");
    restaurantImgContainer.setAttribute("id", "restListImgContainer");

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

    card.addEventListener('click', function () {

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
    

  }

  // var guardaAlldata = allData;
  // console.log(guardaAlldata);
  // // getAllData (allData);

}



function secondFetchFunction(cardRestaurantId) {
  

  fetch("https://developers.zomato.com/api/v2.1/restaurant?res_id=" + cardRestaurantId, {
      method: "GET",
      headers: {
        "user-key": "761f6ca627cd39bc1f417f361a422990"
      }
    })
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      orpAllData = data;
      console.log(orpAllData.location);
      getOneRestPage(orpAllData);

      // console.log(allData);
    })
    .catch(function (error) {
      console.log(error);
    })

}

function getOneRestPage(orpAllData) {


  console.log("cargado un restaurante");
  

  const oneRestPage = `
                          <div id="orpCard" class="person">
                            <div id="orpImgContainer" class="orpImg">
                                <img class="img-thumbnail" alt="${orpAllData.name}" src="${orpAllData.featured_image}">
                            </div>
                            <div class="nameContainer">
                                <span id="orpName" class="name">${orpAllData.name}</span>
                            </div>
                            <div class="orpCuisineContainer">
                                <span id="orpCuisine" class="cuisine">${orpAllData.cuisines}</span>
                                <p class="price">Average price for two: ${orpAllData.average_cost_for_two}$</p>
                            </div>
                            
                            <div class="orpAddressContainer">
                                <span id="orpAddress" class="address">${orpAllData.location.address}</span>
                            </div>

                            <ul>
                                      <li><a class="#menu" href="${orpAllData.menu_url}">Menu</a></li>
                                      <li><a href="#reviews">Reviews</a></li>
                                      <li><a onclick="initMap(${orpAllData.location.latitude}, ${orpAllData.location.longitude})">Take me there</a></li>
                              </ul>

                          </div>
                        `;

  document.getElementById("restaurantList").innerHTML = oneRestPage
   
  
}


// function foo(anId){
//     myId.id = anId;
//     console.log(myId.id)
// }
// console.log(myId.id)

// function bar(){
//   myId.id;
//   console.log(myId.id)
// } 
// bar()

// function createMap(lat, long) {
//     var latitud = lat
//     var longitud = long
//   console.log("llega aqui")
//   console.log(latitud, longitud)


// }
function initMap(lat, long) {
  
  const restMap = `
    <div id="map"></div>
    `
  document.getElementById("restaurantList").innerHTML = restMap


  var latitud = lat
  var longitud = long
  // The location of Uluru
  var uluru = {
    lat: latitud,
    lng: longitud
  };
  // The map, centered at Uluru
  var map = new google.maps.Map(
    document.getElementById('map'), {
      zoom: 15,
      center: uluru
    });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });

}

// var allDataBackBtn = {}

// function getAllData (allData) {

//   var allDataBackBtn = allData;
//   console.log(allDataBackBtn);
//   goBack(allDataBackBtn)
// }

// GO BACK BUTTON FUNCTIONS //

function goBack() {
  console.log(orpAllData);
  
  // console.log(allDataBackBtn);
  var div = true
  
    if (document.getElementById("restaurantList").contains(document.getElementById("restListImgContainer"))) 
      {
        createFirstPage();    
        console.log("go to Home page");
      } else 
      if (document.getElementById("restaurantList").contains(document.getElementById("orpCard"))) 
      {
        getRestaurans(allData);    
        console.log("go to lista de restaurantes")
        

      } else if (document.getElementById("restaurantList").contains(document.getElementById("map")))
        {
          getOneRestPage(orpAllData);
          console.log("vete a ORP REST")
        }
      
      else {
        createFirstPage();
        console.log("go to home again")
      }


}







// CHAT FUNCTIONS ///////////

function goToChat() {

  document.getElementById("footerHome").style.display = "none"

  const chatPage = `
              <div id="posts">POSTS DEL CHAT</div>
              <footer>
                <div id="footerChat" class="container">
                <button id="logIn" type ="button" onclick="googleSignIn()">log In</button>
                <button id="logIn" type ="button" onclick="logOut()">logOut</button>
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



function googleSignIn() {
  console.log("googlesing in function")
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then(function (result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log("logg in");
    console.log(user);
    getPosts();
    // ...
  }).catch(function (error) {

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
  let user = firebase.auth().currentUser.displayName;
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
  let user = firebase.auth().currentUser.displayName;


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

function scrollDown(){
  var element = document.getElementById("posts");
  element.scrollIntoView(false)
}

function getPosts() {

  const postsDiv = document.querySelector('#posts');

  firebase
    .database()
    .ref('posts')
    .on('value', function (data) {
      console.log(data.val());

      const allPosts = data.val();

      let template = "";
      for (key in allPosts) {
        console.log(allPosts[key].author);
        template += `
                
                  
                    <div class="msg_history">
                            <div class="incoming_msg">
                              <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="any user"> </div>
                              <div class="received_msg">
                                <div class="received_withd_msg">
                                  <p>Text recieved msg</p>
                                  <span class="time_date"> Fecha recieved msg</span></div>
                              </div>
                            </div>
                            <div class="outgoing_msg">
                                <div class="sent_msg">
                                  <p>${allPosts[key].author}</p>
                                  <p>${allPosts[key].body}</p>
                                  <span class="time_date">${allPosts[key].date}</span> </div>
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                        `;
      }

      postsDiv.innerHTML = template;
      scrollDown();



    });


}

function logOut() {
  console.log("reaching logOut")

  firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }, function(error) {
    // An error happened.
  });

  const logOutScreen = `
            <div>
              <div> dafuq outta here!</div>
            </div>
  `
 document.getElementById("posts").innerHTML = logOutScreen;
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