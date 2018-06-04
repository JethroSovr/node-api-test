/* eslint-disable */

import express from 'express';

import constants from './config/constants'
import './config/database'
import middlewaresConfig from './config/middlewares'
import middlewares from './config/middlewares';
import apiRoutes from './modules';

console.log('==============1');
console.log(constants);
console.log('==============');

const app = express();

middlewares(app);

app.get('/', (req, res) => {
  res.send('hello get ok!11');
});

app.get('/f', (req, res) => {
  res.send('hello ffff');
});

apiRoutes(app);
// const PORT = process.env.PORT || 3000;

app.listen(constants.PORT, err => {
    if(err){
        throw err;
    }else{
        console.log(`
        Server running on port: ${constants.PORT}
        ------
        Running on ${process.env.NODE_ENV}
        ----
        Make something great
        `)
    }
});
