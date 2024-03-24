require('dotenv/config');
const express = require('express');
const cors = require('cors');
const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./db/db');


const app = express();

const port = process.env.PORT || 3000;

// const allowedOrigins = [`http://localhost:5173`];

// const corsOptions = {
//   origin: function (origin, callback) {
//     if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
//   optionsSuccessStatus: 200,
//   credentials: true,
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
// }


app.use(cors());

app.use(express.json());

const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');
const bingoRoutes = require('./routes/bingo')

app.use('/api/user', userRoutes);
app.use('/api/bingo', bingoRoutes);
app.use('/api/auth', authRoutes);


app.use(errorHandler);

connectDB(process.env.MONGO_URL);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
