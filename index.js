// server.js
const express = require("express");
const cors = require("cors");
const connectToDatabase = require("./config/database");
const axios = require("axios");
const PORT = process.env.PORT || 1000;

const app = express();
app.use(cors());
app.use(express.json());
connectToDatabase();
const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
  cloud_name: 'diffu1623', 
  api_key: '921357913348148', 
  api_secret: '_GEunOyK6M7pUkiAFu5fdku2rLg' 
});


const errorHandler = require("./middlewares/errorHandlers");

const userRoutes = require('./Router/userRoutes');
const ProviderRoutes = require('./Router/ProviderRoutes');



app.use('/api/user', userRoutes);
app.use('/api/provider',ProviderRoutes );

app.use(errorHandler);
// cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
//   { folder: 'machines', public_id: "ravana" }, 
//   function(error, result) {console.log(result); });
app.listen(PORT, () => {
  
  console.log(`Server Running on http://localhost:${PORT}/api/user/machines`);
  // axios.post(`http://api.textmebot.com/send.php?recipient=+916374380946&apikey=Hwd2BzkcxSY4&text=testing`)
});
