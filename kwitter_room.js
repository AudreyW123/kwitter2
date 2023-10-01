function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCcDrunjOKrMeTZIJHzMj0F_Qfx0TQgxEU",
    authDomain: "kwitter2-10a10.firebaseapp.com",
    projectId: "kwitter2-10a10",
    storageBucket: "kwitter2-10a10.appspot.com",
    messagingSenderId: "39760140772",
    appId: "1:39760140772:web:afc85407c57ce0d3784ff1"
  };
   //Start code

   //End code
   });});}
getData();
