var firebaseConfig = {
    apiKey: "AIzaSyDvMM3Lr3eixKy6JujxsLEFNElPyNXJ-9E",
    authDomain: "kwitter-c-93-project-database.firebaseapp.com",
    projectId: "kwitter-c-93-project-database",
    storageBucket: "kwitter-c-93-project-database.appspot.com",
    messagingSenderId: "945123851318",
    appId: "1:945123851318:web:c1b843b2522219dc66ac97"
  };
  // Initialize Firebase

  function addRoom()
  {
    room_name = document.getElementById("room_name").nodeValue;

    firebaseConfig.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
  }

  function getData() {firebaseConfig.database().ref("/").on('value', function(snapshot) {document.getElementById("output".innerHTML
  
       Room_names = childKey;
       //Start code
       console.log("Room name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>&"+ Room_names +"</div><hr>";
       //End code
       );};);
  getData();

  function redictToRoomName(name)
  {
    console.log(name);
    localStorage.SetItem("room_name", name);
      window.location = "kwitter_page.html";
  }