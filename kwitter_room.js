// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDazGMrWMa6gHd_2Aq-DfM0Gh9D-WIk9Wg",
      authDomain: "post-me-c0da6.firebaseapp.com",
      databaseURL: "https://post-me-c0da6-default-rtdb.firebaseio.com",
      projectId: "post-me-c0da6",
      storageBucket: "post-me-c0da6.appspot.com",
      messagingSenderId: "793031829586",
      appId: "1:793031829586:web:3f53cee0060fc3396ed78b"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code
            console.log("Room name - "+Room_names);
            row="<div class = 'room_name' id="+Room_names+" onclick = 'redirectToRoomName(this.id)' >#"+Room_names + "</div><hr>";
      document.getElementById("output").innerHTML+=row;

     //End code
     });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location= "kwitter.html";
}