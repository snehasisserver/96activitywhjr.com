var firebaseConfig = {
      apiKey: "AIzaSyAGtYjlNKXdLVVB7uv-g1_trAJPFwphpmQ",
      authDomain: "socialdatabase-b9f43.firebaseapp.com",
      databaseURL: "https://socialdatabase-b9f43-default-rtdb.firebaseio.com",
      projectId: "socialdatabase-b9f43",
      storageBucket: "socialdatabase-b9f43.appspot.com",
      messagingSenderId: "516977061878",
      appId: "1:516977061878:web:631085326b6d5d76e721d7"
    };


firebase.initializeApp(firebaseConfig);
var user_name = localStorage.getItem("username");
var room_name = localStorage.getItem("room_name");

function send(){

      var msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
             name : user_name,
            message : msg,
             like :0
      });
           document.getElementById("msg").value="";
      
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
     
//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
