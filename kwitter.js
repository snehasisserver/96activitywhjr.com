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
function login(){
    username = document.getElementById("user_name").value;
    
    localStorage.setItem("username",username);

    
    

    window.location="kwitter_room.html";
    
    
}