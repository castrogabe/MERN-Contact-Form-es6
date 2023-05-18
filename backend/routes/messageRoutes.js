import express from 'express';
import Message from '../models/messageModel.js';

const router = express.Router();

router.route('/contact').post((req, res) => {
  const { fullName, email, subject, message } = req.body;
  const newMessage = new Message({
    fullName,
    email,
    subject,
    message,
  });
  newMessage.save();
});

router.route('/messages').get((req, res) => {
  Message.find().then((foundMessages) => res.json(foundMessages));
});

export default router;
