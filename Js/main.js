
window.onload = function () {
  loading()
  createFirstPage();

};


function loading() {
  
  document.getElementById("loader").style.display = "none"
}

function createFirstPage() {

  
  const firstList = `
                      <div class="homeIntro"><img src="pictures/go4eatLogo.png" alt="Go for Eat" id="mainIcon"><h2>ARE YOU HUNGRY?</h2>
                      <select id="selectCity" onchange="searchCity(value)">
                          <option selected="true" disabled="disabled">Select City</option>
                          <option value="88">Kuala Lumpur</option>
                          <option value="280">New York City</option>
                          <option value="82">Lisbon</option>
                          <option value="311">Porto</option>
                          <option value="91">Dublin</option>
                          <option value="61">London</option>
                          <option value="258">Milan</option>
                          <
                          
                          
                      </select>
                    </div>
                  `
  document.getElementById("restaurantList").innerHTML = firstList

}



//Global variables to be accesible from other functions
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
          

          getRestaurans(allData, cityId);

          

      })
      .catch(function (error) {
          console.log(error)
      });
};



function getRestaurans(allData) {
  


  var restaurantList = document.getElementById("restaurantList");
  restaurantList.innerHTML = ""; // to empty search and allow new search

  for (var i = 0; i < allData.length; i++) {

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

      

      //add restaurant name 


      var nameContainer = document.createElement("div");
      nameContainer.setAttribute("class", "nameContainer");
      nameContainer.setAttribute("id", "nameDiv" + i);
      var spanName = document.createElement("span");
      spanName.setAttribute("class", "name");
      spanName.setAttribute("id", allData[i].restaurant.id);
      var restaurantName = allData[i].restaurant.name
      spanName.innerHTML = restaurantName

     

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
          
          // console.log(event.currentTarget.id);

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
          // console.log(orpAllData.location);
          getOneRestPage(orpAllData);

          
      })
      .catch(function (error) {
          console.log(error);
      })

}

function getOneRestPage(orpAllData) {


  // console.log("cargado un restaurante");


  const oneRestPage = `

                        <div id="orpCard" class="person">
                          
                          <div id="orpImgContainer" class="orpImg">
                              <img class="img-thumbnail" alt="${orpAllData.name}" src="${orpAllData.featured_image}">
<div class="nameContainer">
                              <span id="orpName" class="name>${orpAllData.name}</span>
                          </div>
                          <div class="orpCuisineContainer">
                              <span id="orpCuisine" class="cuisine">${orpAllData.cuisines}</span>
                              <p class="price">Average price for two: ${orpAllData.average_cost_for_two}$</p>
                          </div>
                          
                          <div class="orpAddressContainer">
                              <span id="orpAddress" class="address">${orpAllData.location.address}</span>
                          </div>

                          </div>
                          <div class="cardButtons">
                          <ul >
                                    <li><a onclick="initMap(${orpAllData.location.latitude}, ${orpAllData.location.longitude})">Map</a></li>
                                    <li><a onclick="getReviews(orpAllData)" href="#reviews">Reviews</a></li>
                                    <li><a class="#menu" href="${orpAllData.menu_url}">Menu</a></li>
                            </ul>
                          </div>
                        </div>
                      `;

  document.getElementById("restaurantList").innerHTML = oneRestPage

  
}

function getReviews(orpAllData) {
  
  
  console.log(orpAllData.all_reviews.reviews[2].review.review_text)

  // for (i = 0; i < orpAllDat.length; i++) {
  //     const reviews = `
  // <div class="nameContainer">
  //     <span id="orpName" class="name>${orpAllData.all_reviews.reviews[i].review.review_text}"</span>
  // </div>

  // `
  //     document.getElementById("restaurantList").innerHTML = reviews
  //     console.log(orpAllData.all_reviews.reviews[3].review.review_text)

  // }




}



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



// GO BACK BUTTON FUNCTIONS //

function goBack() {
  console.log(orpAllData);

  // console.log(allDataBackBtn);
  var div = true

  if (document.getElementById("restaurantList").contains(document.getElementById("restListImgContainer"))) {
      createFirstPage();
      console.log("go to Home page");
  } else
  if (document.getElementById("restaurantList").contains(document.getElementById("orpCard"))) {
      getRestaurans(allData);
      console.log("go to lista de restaurantes")


  } else if (document.getElementById("restaurantList").contains(document.getElementById("map"))) {
      getOneRestPage(orpAllData);
      console.log("vete a ORP REST")
  } else {
      createFirstPage();
      console.log("go to home again")
  }


}



// CHAT FUNCTIONS ///////////

function goToChat() {

  document.getElementById("footerHome").style.display = "none"

  const chatPage = `
            <div id="posts">PLEASE LOG IN FIRST</div>
            <footer>
              <div id="footerChat" class="container">
              <button id="btnLogIn" type ="button" onclick="googleSignIn()">log In</button>
              <button id="btnlogOut" type ="button" onclick="logOut()">logOut</button>
              <button id="homeBtn" type="button" onclick="goHome()">HOME</button>
              <input id="text" type="text">
              <button onclick="writeNewPost(); document.getElementById('text').value = ''"><i class="fa fa-send" style="font-size:24px"></i></button>
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
      var profilePic = result.user.photoURL;
      var userId = result.user.uid;
      console.log("logg in");
      console.log(user);
      console.log(userId);

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

  // var database = firebase.database();
  // let message = document.getElementById("text").value;
  // let user = firebase.auth().currentUser.displayName;
  // console.log(profilePic)
  // console.log(message)
  // console.log(user)  //he comentado esto y todo parece  funcionar...no se muy bien la utilidad.

  // A post entry.
  var postData = {
      author: username,
      body: userInput,
      date: new Date().toISOString(),
      profilePic: profilePic,
      userId: userId

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
  firebase.database().ref().child('posts').push().key({
      user,
      message,
      profilePic,
      userId
      // date: new Date() commented out porque segun Lucas no se esta utilizando para nada.
  });

}

function writeNewPost() {



  console.log(" write new post");
  const userInput = document.querySelector('input').value;
  let user = firebase.auth().currentUser.displayName;
  let profilePic = firebase.auth().currentUser.photoURL;
  let userId = firebase.auth().currentUser.uid
  console.log(userId);


  // A post entry.
  var postData = {
      author: user,
      body: userInput,
      date: new Date().toISOString(),
      profilePic: profilePic,
      userId: userId

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

function scrollDown() {
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
              console.log(allPosts[key].profilePic);

              template += `
              
                
                  <div class="msg_history">
                          <div class="incoming_msg">
                            <div class="incoming_msg_img"> <img src="${allPosts[key].profilePic}" alt="any user"> </div>
                            <div class="received_msg">
                              <div class="received_withd_msg">
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

  firebase.auth().signOut().then(function () {
      // Sign-out successful.
  }, function (error) {
      // An error happened.
  });

  const logOutScreen = `
          <div>
            <div> dafuq outta here!</div>
          </div>
`
  document.getElementById("posts").innerHTML = logOutScreen;
}
