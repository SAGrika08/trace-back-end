const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const logger = require('morgan');

const authRouter = require('./controllers/auth');
const testJwtRouter = require('./controllers/test-jwt');
const applicationRouter = require('./controllers/applications.js');

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(cors());
app.use(express.json());
app.use(logger('dev'));

<<<<<<< HEAD
// Routes
const authController = require('./controllers/auth.js');
app.use('/auth', authController);
=======
// Routes go here
app.use('/auth', authRouter);
app.use('/test-jwt', testJwtRouter);
app.use('/applications', applicationRouter);
>>>>>>> 04d633719a93ee0015f23560a07b6ec3281fcda2

app.listen(3000, () => {
  console.log('The express app is ready!');
});
