const express = require('express');
const app = express();
const path = require('path');
const connectDB = require('./config/database.configuration');
connectDB(); // Connect to the database
const userRoutes = require("./routes/user.routes");
const productRoutes = require("./routes/product.routes");
const orderRoutes = require("./routes/order.routes")
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const morgan = require('morgan');
// Middleware to serve static files
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get('/' , (req , res)=>{
    res.json({
        message: 'Welcome to the Ecommerce API'
    })
})

app.use("/api" , userRoutes);
app.use("/api" , productRoutes);
app.use("/api" , orderRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

