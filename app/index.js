// const express = require('express');

// const { HorsesRace } = require('./models');
// const app = express();

// app.use(express.urlencoded({ extended: false }));

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// HorsesRace.create({

//     idSportinglife: 54654,
//     date: new Date('2019-10-13'),
//     hour: '20:00',
//     name: 'Corrida teste',
//     place: 'Campina grande',
//     track: 'Amigão',
//     age: '6546',
//     amountRunners: 6,
//     precision: 'aqui nao sei',
//     oddP1: 1.58,
//     oddP2: 1.58,
//     oddP3: 1.58,
//     oddP4: 1.58,
//     oddP5: 1.58,
//     oddP6: 1.58,
//     oddP7: 1.58,
//     oddP8: 1.58,
//     oddP9: 1.58,
//     oddP10: 1.58,
//     oddP11: 1.58,
//     oddP12: 1.58,
//     oddP1Dec: '5/7',
//     oddP2Dec: '5/7',
//     oddP3Dec: '5/7',
//     oddP4Dec: '5/7',
//     oddP5Dec: '5/7',
//     oddP6Dec: '5/7',
//     oddP7Dec: '5/7',
//     oddP8Dec: '5/7',
//     oddP9Dec: '5/7',
//     oddP10Dec: '5/7',
//     oddP11Dec: '5/7',
//     oddP12Dec: '5/7',
//     premiumP1: '100050',
//     premiumP2: '100050',
//     premiumP3: '100050',
//     premiumP4: '100050',
//     premiumP5: '100050',
//     premiumP6: '100050',
//     premiumP7: '100050',
//     premiumP8: '100050',
//     premiumP9: '100050',
//     premiumP10: '100050',

// });

// app.listen(3000);

import {request} from './request.js';

( async () => {console.log( await request({
    url: `https://www.sportinglife.com/api/horse-racing/racing/racecards/2019-11-13`,
    method: 'GET',
}))})();