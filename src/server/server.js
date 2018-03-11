import express from 'express';
import middleware from './middleware';
import api from './api';

//determine environment
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
//Environment
const port = process.env.PORT || 3000;

//Instantiate web app
export const app = express();

app.use(middleware);
app.use('/api', api);

//Set Port
export const server = app.listen(port);



console.log(process.env.NODE_ENV + ' server running at: ' + port);