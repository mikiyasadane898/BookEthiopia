
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Import routes
const hotelRoutes = require("./routes/Hotels");
const carsRoutes = require("./routes/Cars")
const tourGuidesRoutes = require("./routes/TourGuides")
const destinations = require("./routes/Destinations")
const users = require("./routes/Users")
const signin = require("./routes/Signin")
const bookhotel = require("./routes/BookHotel")

app.use("/api/hotels", hotelRoutes);
app.use("/api/cars", carsRoutes)
app.use("/api/tourguides", tourGuidesRoutes)
app.use("/api/destinations", destinations)
app.use("/api/users", users)
app.use("/api/signin", signin)
app.use("/api/bookhotel", bookhotel )

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



















