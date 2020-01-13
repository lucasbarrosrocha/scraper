import { request } from './request.js';
const { HorsesRace, GalgosRace } = require('./models');


const URL_DAY = 'https://www.sportinglife.com/api/horse-racing/racing/racecards/';
const URL_RACE = 'https://www.sportinglife.com/api/horse-racing/race/';

const URL_DAY_GALGOS = 'https://www.sportinglife.com/api/greyhound-racing/racing/racecards/'
const URL_RACE_GALGOS = 'https://www.sportinglife.com/api/greyhound-racing/race/'
//const URL_RACE_GALGOS = 'https://www.sportinglife.com/api/greyhound-racing/race/183070'

function dateGenerator(amountDays, startDate) {
    const dates = [];
    let day = startDate ? new Date(startDate) : new Date();
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

function getRacesToDayGalgos(date) {
    return request({
        url: `${URL_DAY_GALGOS}` + date,
        method: 'GET',
    });
}

function getRaceInfoGalgos(id) {
    return request({
        url: `${URL_RACE_GALGOS}` + id,
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

async function filtraIdsRacesGalgos(date) {
    try {
        const result = await getRacesToDayGalgos(date);
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
    const number = odd ? odd.split('/') : odd;
    return number ? ((parseFloat(number[0]) / parseFloat(number[1])) + 1).toFixed(2) : -1.0;
}

function extractInfoRace(result) {

    const data = {
        idSportinglife: result.race_summary.race_summary_reference.id,
        date: result.race_summary.date,
        hour: result.race_summary.time,
        time: new Date(`${result.race_summary.date}T${result.race_summary.time}`).getTime(),
        name: result.race_summary.name,
        place: result.race_summary.course_name,
        track: result.race_summary.course_surface.surface,
        age: result.race_summary.age ? result.race_summary.age : null,
        amountRunners: result.race_summary.ride_count,
        description: result.betting_forecast ? String(result.betting_forecast) : null,
        oddP1: result.rides[0] ? (result.rides[0].finish_position != 0 ? formatOdd(result.rides[0].betting.current_odds) : 0.0) : null,
        oddP2: result.rides[1] ? (result.rides[1].finish_position != 0 ? formatOdd(result.rides[1].betting.current_odds) : 0.0) : null,
        oddP3: result.rides[2] ? (result.rides[2].finish_position != 0 ? formatOdd(result.rides[2].betting.current_odds) : 0.0) : null,
        oddP4: result.rides[3] ? (result.rides[3].finish_position != 0 ? formatOdd(result.rides[3].betting.current_odds) : 0.0) : null,
        oddP5: result.rides[4] ? (result.rides[4].finish_position != 0 ? formatOdd(result.rides[4].betting.current_odds) : 0.0) : null,
        oddP6: result.rides[5] ? (result.rides[5].finish_position != 0 ? formatOdd(result.rides[5].betting.current_odds) : 0.0) : null,
        oddP7: result.rides[6] ? (result.rides[6].finish_position != 0 ? formatOdd(result.rides[6].betting.current_odds) : 0.0) : null,
        oddP8: result.rides[7] ? (result.rides[7].finish_position != 0 ? formatOdd(result.rides[7].betting.current_odds) : 0.0) : null,
        oddP9: result.rides[8] ? (result.rides[8].finish_position != 0 ? formatOdd(result.rides[8].betting.current_odds) : 0.0) : null,
        oddP10: result.rides[9] ? (result.rides[9].finish_position != 0 ? formatOdd(result.rides[9].betting.current_odds) : 0.0) : null,
        oddP11: result.rides[10] ? (result.rides[10].finish_position != 0 ? formatOdd(result.rides[10].betting.current_odds) : 0.0) : null,
        oddP12: result.rides[11] ? (result.rides[11].finish_position != 0 ? formatOdd(result.rides[11].betting.current_odds) : 0.0) : null,
        oddP13: result.rides[12] ? (result.rides[12].finish_position != 0 ? formatOdd(result.rides[12].betting.current_odds) : 0.0) : null,
        oddP14: result.rides[13] ? (result.rides[13].finish_position != 0 ? formatOdd(result.rides[13].betting.current_odds) : 0.0) : null,
        oddP15: result.rides[14] ? (result.rides[14].finish_position != 0 ? formatOdd(result.rides[14].betting.current_odds) : 0.0) : null,
        oddP16: result.rides[15] ? (result.rides[15].finish_position != 0 ? formatOdd(result.rides[15].betting.current_odds) : 0.0) : null,
        oddP17: result.rides[16] ? (result.rides[16].finish_position != 0 ? formatOdd(result.rides[16].betting.current_odds) : 0.0) : null,
        oddP18: result.rides[17] ? (result.rides[17].finish_position != 0 ? formatOdd(result.rides[17].betting.current_odds) : 0.0) : null,
        oddP19: result.rides[18] ? (result.rides[18].finish_position != 0 ? formatOdd(result.rides[18].betting.current_odds) : 0.0) : null,
        oddP20: result.rides[19] ? (result.rides[19].finish_position != 0 ? formatOdd(result.rides[19].betting.current_odds) : 0.0) : null,
        oddP21: result.rides[20] ? (result.rides[20].finish_position != 0 ? formatOdd(result.rides[20].betting.current_odds) : 0.0) : null,
        oddP1Dec: result.rides[0] ? result.rides[0].betting.current_odds : null,
        oddP2Dec: result.rides[1] ? result.rides[1].betting.current_odds : null,
        oddP3Dec: result.rides[2] ? result.rides[2].betting.current_odds : null,
        oddP4Dec: result.rides[3] ? result.rides[3].betting.current_odds : null,
        oddP5Dec: result.rides[4] ? result.rides[4].betting.current_odds : null,
        oddP6Dec: result.rides[5] ? result.rides[5].betting.current_odds : null,
        oddP7Dec: result.rides[6] ? result.rides[6].betting.current_odds : null,
        oddP8Dec: result.rides[7] ? result.rides[7].betting.current_odds : null,
        oddP9Dec: result.rides[8] ? result.rides[8].betting.current_odds : null,
        oddP10Dec: result.rides[9] ? result.rides[9].betting.current_odds : null,
        oddP11Dec: result.rides[10] ? result.rides[10].betting.current_odds : null,
        oddP12Dec: result.rides[11] ? result.rides[11].betting.current_odds : null,
        oddP13Dec: result.rides[12] ? result.rides[12].betting.current_odds : null,
        oddP14Dec: result.rides[13] ? result.rides[13].betting.current_odds : null,
        oddP15Dec: result.rides[14] ? result.rides[14].betting.current_odds : null,
        oddP16Dec: result.rides[15] ? result.rides[15].betting.current_odds : null,
        oddP17Dec: result.rides[16] ? result.rides[16].betting.current_odds : null,
        oddP18Dec: result.rides[17] ? result.rides[17].betting.current_odds : null,
        oddP19Dec: result.rides[18] ? result.rides[18].betting.current_odds : null,
        oddP20Dec: result.rides[19] ? result.rides[19].betting.current_odds : null,
        oddP21Dec: result.rides[20] ? result.rides[20].betting.current_odds : null,
        premiumP1: result.prizes.prize[0] ? result.prizes.prize[0].prize : null,
        premiumP2: result.prizes.prize[1] ? result.prizes.prize[1].prize : null,
        premiumP3: result.prizes.prize[2] ? result.prizes.prize[2].prize : null,
        premiumP4: result.prizes.prize[3] ? result.prizes.prize[3].prize : null,
        premiumP5: result.prizes.prize[4] ? result.prizes.prize[4].prize : null,
        premiumP6: result.prizes.prize[5] ? result.prizes.prize[5].prize : null,
        premiumP7: result.prizes.prize[6] ? result.prizes.prize[6].prize : null,
        premiumP8: result.prizes.prize[7] ? result.prizes.prize[7].prize : null,
        rideToFinish1: result.rides[0] ? (result.rides[0].finish_position != 0 ? result.rides[0].cloth_number : 0) : null,
        rideToFinish2: result.rides[1] ? (result.rides[1].finish_position != 0 ? result.rides[1].cloth_number : 0) : null,
        rideToFinish3: result.rides[2] ? (result.rides[2].finish_position != 0 ? result.rides[2].cloth_number : 0) : null,
        rideToFinish4: result.rides[3] ? (result.rides[3].finish_position != 0 ? result.rides[3].cloth_number : 0) : null,
        rideToFinish5: result.rides[4] ? (result.rides[4].finish_position != 0 ? result.rides[4].cloth_number : 0) : null,
        rideToFinish6: result.rides[5] ? (result.rides[5].finish_position != 0 ? result.rides[5].cloth_number : 0) : null,
        rideToFinish7: result.rides[6] ? (result.rides[6].finish_position != 0 ? result.rides[6].cloth_number : 0) : null,
        rideToFinish8: result.rides[7] ? (result.rides[7].finish_position != 0 ? result.rides[7].cloth_number : 0) : null,
        rideToFinish9: result.rides[8] ? (result.rides[8].finish_position != 0 ? result.rides[8].cloth_number : 0) : null,
        rideToFinish10: result.rides[9] ? (result.rides[9].finish_position != 0 ? result.rides[9].cloth_number : 0) : null,
        rideToFinish11: result.rides[10] ? (result.rides[10].finish_position != 0 ? result.rides[10].cloth_number : 0) : null,
        rideToFinish12: result.rides[11] ? (result.rides[11].finish_position != 0 ? result.rides[11].cloth_number : 0) : null,
        rideToFinish13: result.rides[12] ? (result.rides[12].finish_position != 0 ? result.rides[12].cloth_number : 0) : null,
        rideToFinish14: result.rides[13] ? (result.rides[13].finish_position != 0 ? result.rides[13].cloth_number : 0) : null,
        rideToFinish15: result.rides[14] ? (result.rides[14].finish_position != 0 ? result.rides[14].cloth_number : 0) : null,
        rideToFinish16: result.rides[15] ? (result.rides[15].finish_position != 0 ? result.rides[15].cloth_number : 0) : null,
        rideToFinish17: result.rides[16] ? (result.rides[16].finish_position != 0 ? result.rides[16].cloth_number : 0) : null,
        rideToFinish18: result.rides[17] ? (result.rides[17].finish_position != 0 ? result.rides[17].cloth_number : 0) : null,
        rideToFinish19: result.rides[18] ? (result.rides[18].finish_position != 0 ? result.rides[18].cloth_number : 0) : null,
        rideToFinish20: result.rides[19] ? (result.rides[19].finish_position != 0 ? result.rides[19].cloth_number : 0) : null,
        rideToFinish21: result.rides[20] ? (result.rides[20].finish_position != 0 ? result.rides[20].cloth_number : 0) : null,

    }
    return data;
}

function saveDB(data) {
    HorsesRace.create(data);
}

function extractInfoRaceGalgos(result) {

    const data = {
        idSportinglife: result.race_summary.race_summary_reference.id,
        date: result.race_summary.date,
        hour: result.race_summary.time,
        time: new Date(`${result.race_summary.date}T${result.race_summary.time}`).getTime(),
        name: result.race_summary.course_name,
        classe: result.race_summary.race_class ? result.race_summary.race_class : null,
        amountRunners: result.betting_forecast ? (result.betting_forecast).split(',').length : -1,
        prizes: result.race_summary.prizes ? result.race_summary.prizes : null,
        description: result.betting_forecast ? String(result.betting_forecast) : null,
        oddP1: result.runs[0] ? (result.runs[0].finish_position != 0 ? formatOdd(result.runs[0].betting.current_odds) : 0.0) : null,
        oddP2: result.runs[1] ? (result.runs[1].finish_position != 0 ? formatOdd(result.runs[1].betting.current_odds) : 0.0) : null,
        oddP3: result.runs[2] ? (result.runs[2].finish_position != 0 ? formatOdd(result.runs[2].betting.current_odds) : 0.0) : null,
        oddP4: result.runs[3] ? (result.runs[3].finish_position != 0 ? formatOdd(result.runs[3].betting.current_odds) : 0.0) : null,
        oddP5: result.runs[4] ? (result.runs[4].finish_position != 0 ? formatOdd(result.runs[4].betting.current_odds) : 0.0) : null,
        oddP6: result.runs[5] ? (result.runs[5].finish_position != 0 ? formatOdd(result.runs[5].betting.current_odds) : 0.0) : null,
        oddP7: result.runs[6] ? (result.runs[6].finish_position != 0 ? formatOdd(result.runs[6].betting.current_odds) : 0.0) : null,
        oddP8: result.runs[7] ? (result.runs[7].finish_position != 0 ? formatOdd(result.runs[7].betting.current_odds) : 0.0) : null,
        oddP1Dec: result.runs[0] ? result.runs[0].betting.current_odds : null,
        oddP2Dec: result.runs[1] ? result.runs[1].betting.current_odds : null,
        oddP3Dec: result.runs[2] ? result.runs[2].betting.current_odds : null,
        oddP4Dec: result.runs[3] ? result.runs[3].betting.current_odds : null,
        oddP5Dec: result.runs[4] ? result.runs[4].betting.current_odds : null,
        oddP6Dec: result.runs[5] ? result.runs[5].betting.current_odds : null,
        oddP7Dec: result.runs[6] ? result.runs[6].betting.current_odds : null,
        oddP8Dec: result.runs[7] ? result.runs[7].betting.current_odds : null,
        rideToFinish1: result.runs[0] ? (result.runs[0].finish_position != 0 ? result.runs[0].cloth_number : 0) : null,
        rideToFinish2: result.runs[1] ? (result.runs[1].finish_position != 0 ? result.runs[1].cloth_number : 0) : null,
        rideToFinish3: result.runs[2] ? (result.runs[2].finish_position != 0 ? result.runs[2].cloth_number : 0) : null,
        rideToFinish4: result.runs[3] ? (result.runs[3].finish_position != 0 ? result.runs[3].cloth_number : 0) : null,
        rideToFinish5: result.runs[4] ? (result.runs[4].finish_position != 0 ? result.runs[4].cloth_number : 0) : null,
        rideToFinish6: result.runs[5] ? (result.runs[5].finish_position != 0 ? result.runs[5].cloth_number : 0) : null,
        rideToFinish7: result.runs[6] ? (result.runs[6].finish_position != 0 ? result.runs[6].cloth_number : 0) : null,
        rideToFinish8: result.runs[7] ? (result.runs[7].finish_position != 0 ? result.runs[7].cloth_number : 0) : null,
    }
    return data;
}

function saveDBGalgos(data) {
    GalgosRace.create(data);
}

async function runScraperHorses(dates) {
    for (const date of dates) {
        const ids = await filtraIdsRaces(date)
        for (const id of ids) {
            console.log('ID HORSES -----------------------------------> ', id)
            const data = extractInfoRace(await getRaceInfo(id));
            // console.log(data);
            saveDB(data);
        }
    }
}

async function runScraperGalgos(dates) {
    for (const date of dates) {
        const ids = await filtraIdsRacesGalgos(date)
        for (const id of ids) {
            console.log('ID GALGOS -----------------------------------> ', id)
            const data = extractInfoRaceGalgos(await getRaceInfoGalgos(id));
            // console.log(data);
            saveDBGalgos(data);
        }
    }
}

(async () => {

    const dates = dateGenerator(365);
    //const dates = dateGenerator(365, '2019-10-12');

    runScraperGalgos(dates);
    runScraperHorses(dates);

})();