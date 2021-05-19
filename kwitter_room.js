
var firebaseConfig = {
    apiKey: "AIzaSyC0Cuvpj52kx6HUTMSeXtVPfcL7gAzFpH4",
    authDomain: "kwitter-933fd.firebaseapp.com",
    databaseURL: "https://kwitter-933fd-default-rtdb.firebaseio.com",
    projectId: "kwitter-933fd",
    storageBucket: "kwitter-933fd.appspot.com",
    messagingSenderId: "800586717795",
    appId: "1:800586717795:web:6ec4c55df77051d7b9f656"
  };
  firebase.initializeApp(firebaseConfig);

  document.getElementById("user_welcome").innerHTML="Welcome "+user_name;
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

console.log("room name-"+Room_names);
row="<div class='room_name'id="+Room_names+"onclick='redirectToRoomNames(this.id)'>#"+room_name+"</div><hr><hr>";
document.getElementById("output").innerHTML+=row

   //End code
  
  
   });});}
getData();
function addRoom(){
   document.getElementById("add_room").Value;
   firebase.database().ref("/").child(Room_names).update({
purpose:"adding rooms"
   });

}