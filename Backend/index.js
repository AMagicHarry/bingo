require('dotenv/config');
const express = require('express');
const cors = require('cors');
const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./db/db');


const app = express();


const port = process.env.PORT || 4000;

const allowedOrigins = ['https://bingo-samp-2.vercel.app', `http://localhost:5173`];

const corsOptions = {
  origin: function (origin, callback) {
       console.log(origin)
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200,
  credentials: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
}


app.use(cors(corsOptions));

app.use(express.json());

const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');
const bingoRoutes = require('./routes/bingo')
const ticketRoutes = require('./routes/ticket')
// const paymentRoutes = require('./routes/payment')
const winnerRoutes = require('./routes/winner')



app.use('/api/user', userRoutes);
app.use('/api/bingo', bingoRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/ticket', ticketRoutes);
// app.use('/api/payment', paymentRoutes);
app.use('/api/winner',winnerRoutes)




app.use(errorHandler);

connectDB(process.env.MONGO_URL);

app.listen(port, (error) => {
  if(error) throw error
  console.log(`Server is running on port ${port}`);
});
