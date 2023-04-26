const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
require('./users');
const User = mongoose.model('Users');
require('./job');
const Job = mongoose.model('JobPosting');
require('./feedback');
const Feedback = mongoose.model('Feedback');
const JWT_SECRET_KEY = 'kjhagdjhasgdibadkj%%*&^&^%ajhsdbajhds';

const password = 'gxjiuvwZdPnhrrYg';
// Connect to MongoDB
const url = `mongodb+srv://Tejaswini:${password}@cluster0.n6wnpht.mongodb.net/jobboard`;

app.use(express.json());

// Mongo Db Connect
mongoose
  .connect(url, {
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(5001, () => {
      console.log('Server started at 5001 & Connected to DB');
    });
  })
  .catch((e) => {
    console.log(e);
  });

app.post('/register', async (req, res) => {
  const { fname, lname, email, password } = req.body;

  const checkUser = await User.findOne({ email });
  const encPass = await bcrypt.hash(password, 10);
  if (checkUser) {
    return res.send({ status: 'User exist' });
  }
  try {
    await User.create({
      fname,
      lname,
      email,
      password: encPass,
    });
    res.send({ status: 'Registration Successful Please login !' });
  } catch (err) {
    console.log(err);
    res.send({ status: 'error' });
  }
});
app.post('/feedback', async (req, res) => {
  const { name, email, message } = req.body;
  try {
    await Feedback.create({
      name,
      email,
      message,
    });
    res.send({ status: 'Thank you for you Feedback' });
  } catch (err) {
    console.log(err);
    res.send({ status: 'error' });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const checkUser = await User.findOne({ email });
  if (!checkUser) {
    return res.send({ error: 'User not exist' });
  }
  if (await bcrypt.compare(password, checkUser.password)) {
    const token = jwt.sign({ email: checkUser.email }, JWT_SECRET_KEY);
    if (res.status(201)) {
      return res.json({ status: 'ok', data: token, admin: checkUser.admin });
    } else {
      return res.json({ error: 'error' });
    }
  }
  res.json({ status: 'error', error: 'Password not correct' });
});

// user details after login

app.post('/user-details', (req, res) => {
  const { token } = req.body;

  try {
    const user = jwt.verify(token, JWT_SECRET_KEY, (err, res) => {
      if (err) {
        return 'Token Expired';
      }
      return res;
    });

    const userEmail = user.email;
    User.findOne({
      email: userEmail,
    }).then((data) => {
      res.send({ data: data, status: 'ok' });
    });
  } catch (err) {
    console.log(err);
  }
});

// forget password

app.post('/forgot-password', async (req, res) => {
  const { email } = req.body;

  try {
    const oldUser = await User.findOne({ email });
    if (!oldUser) {
      return res.json({ status: 'User not exist' });
    }
    const secret = JWT_SECRET_KEY + oldUser.password;
    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
      expiresIn: '5m',
    });
    const link = `http://localhost:5001/reset-password/${oldUser._id}/${token}`;

    // sent email
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'toshar109@gmail.com',
        pass: 'dzzwiywmxbbmxvwq',
      },
    });

    var mailOptions = {
      from: 'youremail@gmail.com',
      to: `${oldUser.email}`,
      subject: 'Password Reset',
      text: link,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        res.json({ status: 'Email sent please check your email' });
      }
    });

    console.log(link);
  } catch (err) {
    console.log(err);
  }
});

app.get('/reset-password/:id/:token', async (req, res) => {
  const { id, token } = req.params;
  console.log(req.params);
  const oldUser = await User.findOne({ _id: id });
  if (!oldUser) {
    return res.json({ status: 'User not exist' });
  }
  const secret = JWT_SECRET_KEY + oldUser.password;
  try {
    const verify = jwt.verify(token, secret);
    res.render('index', { email: verify.email, status: 'Not verifeid' });
  } catch (err) {
    res.send('Not verified');
  }
});

app.post('/reset-password/:id/:token', async (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;
  const oldUser = await User.findOne({ _id: id });
  if (!oldUser) {
    return res.json({ status: 'User not exist' });
  }
  const secret = JWT_SECRET_KEY + oldUser.password;
  try {
    const verify = jwt.verify(token, secret);
    const encpass = await bcrypt.hash(password, 10);
    await User.updateOne({ _id: id }, { $set: { password: encpass } });
    // res.send({status:"Password Updated"});
    res.render('index', { email: verify.email, status: 'verified' });
  } catch (err) {
    res.send('Not verified');
  }
});

/**** POST JOB FROM ADMIN */

// add post
app.post('/add-job', async (req, res) => {
  const { title, description, location, datePosted } = req.body;

  try {
    await Job.create({
      title,
      description,
      location,
      datePosted,
    });
    res.send({ status: 'Job Added' });
  } catch (err) {
    console.log(err);
    res.send({ status: 'error' });
  }
});

// read post

app.get('/all-job', async (req, res) => {
  try {
    const jobs = await Job.find({}, { __v: 0 });
    res.send({ status: 'All post found', jobs: jobs });
  } catch (err) {
    console.log(err);
    res.send({ status: 'error' });
  }
});
app.get('/all-feedback', async (req, res) => {
  try {
    const feedbacks = await Feedback.find({}, { __v: 0 });
    res.send({ status: 'All post found', feedbacks: feedbacks });
  } catch (err) {
    console.log(err);
    res.send({ status: 'error' });
  }
});

app.get('/job/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const jobs = await Job.findOne({ _id: id }, { __v: 0 });
    res.send({ status: 'job found', jobs: jobs });
  } catch (err) {
    console.log(err);
    res.send({ status: 'error' });
  }
});

// Post delete

app.get('/job-delete/:id', async (req, res) => {
  const id = req.params.id;

  try {
    await Job.deleteOne({ _id: id });
    res.json({ status: 'Job Deleted' });
  } catch (err) {
    console.log(err);
    res.send({ status: 'error' });
  }
});

app.put('/edit/:id', async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const { title, description, location, datePosted } = req.body;
  console.log(title, description, location, datePosted);
  try {
    const jobs = await Job.findByIdAndUpdate(
      { _id: id },
      { title, description, location, datePosted }
    );
    console.log(jobs);
    res.json({ status: 'Job updated', jobs: jobs });
  } catch (err) {
    console.log(err);
    res.send({ status: 'error' });
  }
});

app.get('/single-job/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const jobs = await Job.findOne({ _id: id }, { __v: 0 });
    res.send({ status: 'Job found', jobs: jobs });
  } catch (err) {
    console.log(err);
    res.send({ status: 'error' });
  }
});

app.post('/send-email', async (req, res) => {
  const { senderName, senderEmail, message, recipientEmail } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'toshar109@gmail.com',
      pass: 'dzzwiywmxbbmxvwq',
    },
  });

  try {
    const info = await transporter.sendMail({
      from: ` ${senderEmail}`,
      to: 'tejaswininallapaneni26@gmail.com',
      subject: 'New Message',
      text: message,
    });

    console.log(`Email sent: ${info.messageId}`);
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
