// signup.js

import express from 'express';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

const Register = express.Router();

const users = []; // In-memory storage for users

app.post('/register', async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Check if the email is already registered
    if (users.some((user) => user.email === email)) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = {
      id: uuidv4(),
      firstName,
      lastName,
      email,
      password: hashedPassword,
    };

    // Store the user in your database or in-memory array
    users.push(newUser);

    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


export { Register };
