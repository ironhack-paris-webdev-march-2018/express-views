const express = require("express");

const app = express();

// configure our static files in the "public/" folder
app.use(express.static(__dirname + "/public"));

// our template files are in the "views/" folder
app.set("views", __dirname + "/views");
// we are using the "hbs" package from npm for our view engine
app.set("view engine", "hbs");

const billysSongs = [
  {
    title: "Baby",
    artist: "Justin Bieber",
    description: "Best <b>non-Celine</b> song from Canada.",
    review: "I've been in love with Justin since 1990. *****",
    photoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Babycoverart.jpg/220px-Babycoverart.jpg"
  },
  {
    title: "Africa",
    artist: "Toto",
    description: "People in their 60s <i>also</i> enjoy it.",
    photoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Toto_Toto_IV.jpg/220px-Toto_Toto_IV.jpg"
  },
  {
    title: "Don't Stop Believing",
    artist: "Journey",
    description: "...",
    photoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/Don%27t_Stop_Believin%27.jpg/220px-Don%27t_Stop_Believin%27.jpg"
  },
  {
    title: "I Can See Clearly Now",
    artist: "Jimmy Cliff",
    description: "...",
    photoUrl: "https://images-na.ssl-images-amazon.com/images/I/41FJopd3lWL.jpg"
  },
  {
    title: "I Was Made For Loving You",
    artist: "KISS",
    description: "...",
    photoUrl: "https://static.hotmixradio.fr/wp-content/uploads/kiss-i-was-made-for-lovin-you-460x460.jpg"
  }
];

// Routes
// -----------------------------------------------------------------------------
app.get("/", (request, response, next) => {
  const index = Math.floor(Math.random() * 2);
  const chosenSong = billysSongs[index];

  // "locals" meaning the local variables INSIDE YOUR VIEWS
  // response.locals.song = chosenSong;
  // response.render("home-page.hbs");

  // render the view with the "song" local variable
  response.render("home-page.hbs", {
    song: chosenSong
  });
});

app.get("/playlist", (request, response, next) => {
  // "locals" meaning the local variables INSIDE YOUR VIEWS
  response.locals.songList = billysSongs;
  response.render("playlist-page.hbs");

  // render the view with the "songList" local variable
  // response.render("playlist-page.hbs", {
  //   songList: billysSongs
  // });
});
// -----------------------------------------------------------------------------

app.listen(3000, () => {
  console.log("Server online!");
});
