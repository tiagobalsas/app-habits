import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.DATABASE_API_URL || 'http://localhost:3333',
});
