import { initializeApp }  from "firebase/app"
import firebaseDb from "firebase/database";
import five from "johnny-five"

const firebaseConfig = {
  apiKey: "AIzaSyDtZIZUZ2zDTbOJBAnFRfCs6gAxYf0QXuo",
  authDomain: "aulaiot-e0c90.firebaseapp.com",
  databaseURL: "https://aulaiot-e0c90-default-rtdb.firebaseio.com/",
  projectId: "aulaiot-e0c90",
  storageBucket: "aulaiot-e0c90.appspot.com",
  messagingSenderId: "560068316386",
  appId: "1:560068316386:web:2b85179480c8418eaee2bb"
};


const app = initializeApp(firebaseConfig);
const db = firebaseDb.Database.getInstance(app);

var board = new five.Board();

board.on("ready", function() {
  var led = new five.Led(13);
  db.ref("light").on("value", data =>{
    if(data.val()){
      led.on();
    } else {
      led.off()
    }
  }, errorObject => {})
});