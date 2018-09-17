$(document).ready(function () {
// ------------------------CALL FIREBASE------------------------

var config = {
    apiKey: "AIzaSyDGxJHWAJ-auxjUgZ5tHJzuLMBIIgP5sY4",
    authDomain: "theinfamousak-00.firebaseapp.com",
    databaseURL: "https://theinfamousak-00.firebaseio.com",
    storageBucket: "theinfamousak-00.appspot.com",
    messagingSenderId: "591987588172"
};

firebase.initializeApp(config);

var database = firebase.database();

var name;
var destination;
var time;
var frequency;

// ------------------------INPUT INFORMATION ON SUBMIT------------------------
$(".btn").on("click", function (event) {
    event.preventDefault();

    var name = $("#name-input").val().trim();
    var destination = $("#dest-input").val().trim();
    var time = $("#time-input").val().trim();
    var frequency = $("#freq-input").val().trim();

    database.ref().set({
        fireName: name,
        fireDest: destination,
        fireTime: time,
        fireFreq: frequency
    })
});

// ------------------------------------------------
});