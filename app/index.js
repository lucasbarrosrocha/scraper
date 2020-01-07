// const express = require('express');

// const { HorsesRace } = require('./models');
// const app = express();

// app.use(express.urlencoded({ extended: false }));

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// HorsesRace.create({

//     idSportinglife: 54654,  race_summary.race_summary_reference.id
//     date: new Date('2019-10-13'),
//     hour: '20:00', race_summary.time
//     name: 'Corrida teste',  race_summary.name
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

import { request } from './request.js';

const URL_DAY = 'https://www.sportinglife.com/api/horse-racing/racing/racecards/';
const URL_RACE = 'https://www.sportinglife.com/api/horse-racing/race/';


function dateGenerator(amountDays) {
    const dates = [];
    let day = new Date();
    for (let i = 0; i < amountDays; i++) {
        day.setDate(day.getDate() - 1);
        dates.push(`${day.getFullYear()}-${('0' + (day.getMonth() + 1)).slice(-2)}-${('0' + day.getDate()).slice(-2)}`)
        // console.log(`${day.getFullYear()}-${ ('0'+(day.getMonth()+1)).slice(-2)}-${('0'+day.getDate()).slice(-2)}`, day);
    }
    return dates;
}

function getRacesToDay(date) {
    return request({
        url: `${URL_DAY}` + date,
        method: 'GET',
    });
}

function getRaceInfo(id) {
    return request({
        url: `${URL_RACE}` + id,
        method: 'GET',
    });
}

async function filtraIdsRaces(date) {
    try {
        const result = await getRacesToDay(date);
        let idCorridas = [];

        for (let i = 0; i < result.length; i++) {
            idCorridas = [...idCorridas, ...filtraIds(result[i].races)];
        }

        return idCorridas;

    } catch (err) {
        console.log('erro: ', err);
    }
}

function filtraIds(lista) {
    const ids = lista.map(e => e.race_summary_reference.id);
    return ids;
}

function formatOdd(odd) {
    const number = odd.split('/');
    return ((parseFloat(number[0]) / parseFloat(number[1])) + 1).toFixed(2)
}



(async () => {
    // console.log(await request({
    //     url: `https://www.sportinglife.com/api/horse-racing/racing/racecards/2019-11-13`,
    //     method: 'GET',
    // }))

    // console.log(await getRacesToDay('2019-11-20'))

    // const dates = dateGenerator(30);

    // for (const date of dates) {
    //     await filtraIdsRaces(date)
    // }

    const result = await getRaceInfo('559122');

    const data = {
        idSportinglife: result.race_summary.race_summary_reference.id,
        date: new Date(result.race_summary.date),
        hour: result.race_summary.time,
        name: result.race_summary.name,
        place: result.race_summary.course_name,
        track: result.race_summary.course_surface.surface,
        age: result.race_summary.age,
        amountRunners: result.race_summary.ride_count,
        precision: result.betting_forecast,
        oddP1: result.rides[0] ? formatOdd(result.rides[0].betting.current_odds) : 'NaN',
        oddP2: result.rides[1] ? formatOdd(result.rides[1].betting.current_odds) : 'NaN',
        oddP3: result.rides[2] ? formatOdd(result.rides[2].betting.current_odds) : 'NaN',
        oddP4: result.rides[3] ? formatOdd(result.rides[3].betting.current_odds) : 'NaN',
        oddP5: result.rides[4] ? formatOdd(result.rides[4].betting.current_odds) : 'NaN',
        oddP6: result.rides[5] ? formatOdd(result.rides[5].betting.current_odds) : 'NaN',
        oddP7: result.rides[6] ? formatOdd(result.rides[6].betting.current_odds) : 'NaN',
        oddP8: result.rides[7] ? formatOdd(result.rides[7].betting.current_odds) : 'NaN',
        oddP9: result.rides[8] ? formatOdd(result.rides[8].betting.current_odds) : 'NaN',
        oddP10: result.rides[9] ? formatOdd(result.rides[9].betting.current_odds) : 'NaN',
        oddP11: result.rides[10] ? formatOdd(result.rides[10].betting.current_odds) : 'NaN',
        oddP12: result.rides[11] ? formatOdd(result.rides[11].betting.current_odds) : 'NaN',
        oddP1Dec: result.rides[0] ? result.rides[0].betting.current_odds : 'NaN',
        oddP2Dec: result.rides[1] ? result.rides[1].betting.current_odds : 'NaN',
        oddP3Dec: result.rides[2] ? result.rides[2].betting.current_odds : 'NaN',
        oddP4Dec: result.rides[3] ? result.rides[3].betting.current_odds : 'NaN',
        oddP5Dec: result.rides[4] ? result.rides[4].betting.current_odds : 'NaN',
        oddP6Dec: result.rides[5] ? result.rides[5].betting.current_odds : 'NaN',
        oddP7Dec: result.rides[6] ? result.rides[6].betting.current_odds : 'NaN',
        oddP8Dec: result.rides[7] ? result.rides[7].betting.current_odds : 'NaN',
        oddP9Dec: result.rides[8] ? result.rides[8].betting.current_odds : 'NaN',
        oddP10Dec: result.rides[9] ? result.rides[9].betting.current_odds : 'NaN',
        oddP11Dec: result.rides[10] ? result.rides[10].betting.current_odds : 'NaN',
        oddP12Dec: result.rides[11] ? result.rides[11].betting.current_odds : 'NaN',
    }

    // console.log(result.rides[0].betting.current_odds);
    console.log(data);

    // filtraIdsRaces('2019-11-20')
    // console.log( await filtraIdsRaces('2019-11-20'));
    // console.log(dates);

})();