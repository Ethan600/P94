function dark_page_theme(){
    window.location = "lets_chat_room2.html";
}

function light_page_theme(){
    window.location = "lets_chat_room.html"
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
    }

    function logout2() {
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location.replace("index2.html");
        }


        firebaseConfig = {
            apiKey: "AIzaSyBLqXO0kj-v0Hgf77XgoGrF-KNFboy5w6g",
            authDomain: "let-s-chat-414dd.firebaseapp.com",
            databaseURL: "https://let-s-chat-414dd-default-rtdb.firebaseio.com",
            projectId: "let-s-chat-414dd",
            storageBucket: "let-s-chat-414dd.appspot.com",
            messagingSenderId: "513640196977",
            appId: "1:513640196977:web:574029c07f4d12ff8e64d0",
            measurementId: "G-YG2KL2RKDG"
          };
          
          // Initialize Firebase
         firebase.initializeApp(firebaseConfig);

         user_name = localStorage.getItem("user_name");

        document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

        function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "let's_chat_page.html";
