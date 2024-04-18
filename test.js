// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://irctc1.p.rapidapi.com/api/v3/trainBetweenStations',
//   params: {
//     fromStationCode: 'DHN',
//     toStationCode: 'PRYJ',
//     dateOfJourney: '2024-04-23'
//   },
//   headers: {
//     'X-RapidAPI-Key': '234ddbe213msh189cfc1ed0d3f2dp15c962jsnc7add5265adc',
//     'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
//   }
// };

// const test = async () => {
//     try {
//         const response = await axios.request(options);
//         console.log(response.data.data);
//     } catch (error) {
//         console.error(error);
//     }
// }

// test();


// mongo connect
const mongoose = require("mongoose");

const db_url = 'mongodb://127.0.0.1:27017/train_booking';

main()
    .then(
        console.log("successfull")
    )
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect(db_url);
}

const Train = require("./models/train");

// const rail = require("indian-rail-api");

// // rail.getTrainOnDate(from , to , date ,callback(response));

// //example
// rail.getTrainOnDate("ST", "ANND" , 7-11-2024 ,(r) => {
//     const json = JSON.parse(r);
//     console.log(json);
// });






let data = [
  {
    train_number: '12301',
    train_name: 'Rajdhani Express',
    run_days: [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ],
    train_src: 'HWH',
    train_dstn: 'NDLS',
    from_std: '20:00',
    from_sta: '19:55',
    local_train_from_sta: 1195,
    to_sta: '02:43',
    to_std: '02:45',
    from_day: 0,
    to_day: 1,
    d_day: 0,
    from: 'DHN',
    to: 'PRYJ',
    from_station_name: 'DHANBAD JN',
    halt_stn: 3,
    distance: 554,
    to_station_name: 'PRAYAGRAJ JN',
    duration: '6:43',
    special_train: false,
    train_type: 'MAIL EXPRESS',
    score: 25,
    score_train_type: 5,
    score_booking_requency: 0,
    frequency_perc: 0,
    from_distance_text: '',
    to_distance_text: '',
    duration_rating: 1,
    score_duration: 10,
    score_std: 10,
    score_user_preferred: 0,
    train_date: '23-04-2024',
    class_type: [ '3A', '2A', '1A' ]
  },
  {
    train_number: '12323',
    train_name: 'Howrah - Barmer SF Express',
    run_days: [ 'Tue', 'Fri' ],
    train_src: 'HWH',
    train_dstn: 'BME',
    from_std: '22:40',
    from_sta: '22:35',
    local_train_from_sta: 1355,
    to_sta: '06:45',
    to_std: '06:50',
    from_day: 0,
    to_day: 1,
    d_day: 0,
    from: 'DHN',
    to: 'PRYJ',
    from_station_name: 'DHANBAD JN',
    halt_stn: 4,
    distance: 543,
    to_station_name: 'PRAYAGRAJ JN',
    duration: '8:5',
    special_train: false,
    train_type: 'SUF',
    score: 25,
    score_train_type: 5,
    score_booking_requency: 0,
    frequency_perc: 0,
    from_distance_text: '',
    to_distance_text: '',
    duration_rating: 2,
    score_duration: 10,
    score_std: 10,
    score_user_preferred: 0,
    train_date: '23-04-2024',
    class_type: [ 'SL', '3A', '2A', '1A' ]
  },
  {
    train_number: '12938',
    train_name: 'Garba SF Express',
    run_days: [ 'Tue' ],
    train_src: 'HWH',
    train_dstn: 'GIMB',
    from_std: '02:55',
    from_sta: '02:50',
    local_train_from_sta: 1610,
    to_sta: '11:30',
    to_std: '11:35',
    from_day: 1,
    to_day: 1,
    d_day: 1,
    from: 'DHN',
    to: 'PRYJ',
    from_station_name: 'DHANBAD JN',
    halt_stn: 5,
    distance: 554,
    to_station_name: 'PRAYAGRAJ JN',
    duration: '8:35',
    special_train: false,
    train_type: 'SUF',
    score: 25,
    score_train_type: 5,
    score_booking_requency: 0,
    frequency_perc: 0,
    from_distance_text: '',
    to_distance_text: '',
    duration_rating: 3,
    score_duration: 10,
    score_std: 10,
    score_user_preferred: 0,
    train_date: '23-04-2024',
    class_type: [ 'SL', '3A', '2A' ]
  },
  {
    train_number: '12987',
    train_name: 'Sealdah - Ajmer SF Express',
    run_days: [
      'Mon', 'Tue',
      'Wed', 'Thu',
      'Fri', 'Sat',
      'Sun'
    ],
    train_src: 'SDAH',
    train_dstn: 'AII',
    from_std: '03:12',
    from_sta: '03:07',
    local_train_from_sta: 1627,
    to_sta: '11:50',
    to_std: '11:55',
    from_day: 1,
    to_day: 1,
    d_day: 1,
    from: 'DHN',
    to: 'PRYJ',
    from_station_name: 'DHANBAD JN',
    halt_stn: 8,
    distance: 554,
    to_station_name: 'PRAYAGRAJ JN',
    duration: '8:38',
    special_train: false,
    train_type: 'SUF',
    score: 23,
    score_train_type: 5,
    score_booking_requency: 0,
    frequency_perc: 0,
    from_distance_text: '',
    to_distance_text: '',
    duration_rating: 3,
    score_duration: 8,
    score_std: 10,
    score_user_preferred: 0,
    train_date: '23-04-2024',
    class_type: [ 'SL', '3A', '2A', '3E' ]
  },
  {
    train_number: '12311',
    train_name: 'Netaji SF Express',
    run_days: [
      'Mon', 'Tue',
      'Wed', 'Thu',
      'Fri', 'Sat',
      'Sun'
    ],
    train_src: 'HWH',
    train_dstn: 'KLK',
    from_std: '01:50',
    from_sta: '01:45',
    local_train_from_sta: 1545,
    to_sta: '10:40',
    to_std: '10:50',
    from_day: 1,
    to_day: 1,
    d_day: 1,
    from: 'DHN',
    to: 'PRYJ',
    from_station_name: 'DHANBAD JN',
    halt_stn: 11,
    distance: 554,
    to_station_name: 'PRAYAGRAJ JN',
    duration: '8:50',
    special_train: false,
    train_type: 'MAIL EXPRESS',
    score: 21,
    score_train_type: 5,
    score_booking_requency: 0,
    frequency_perc: 0,
    from_distance_text: '',
    to_distance_text: '',
    duration_rating: 3,
    score_duration: 6,
    score_std: 10,
    score_user_preferred: 0,
    train_date: '23-04-2024',
    class_type: [ 'SL', '3A', '2A', '1A' ]
  },
  {
    train_number: '22307',
    train_name: 'Howrah - Bikaner SF Express',
    run_days: [ 'Tue', 'Fri', 'Sat' ],
    train_src: 'HWH',
    train_dstn: 'BKN',
    from_std: '03:25',
    from_sta: '03:20',
    local_train_from_sta: 1640,
    to_sta: '12:15',
    to_std: '12:20',
    from_day: 1,
    to_day: 1,
    d_day: 1,
    from: 'DHN',
    to: 'PRYJ',
    from_station_name: 'DHANBAD JN',
    halt_stn: 9,
    distance: 554,
    to_station_name: 'PRAYAGRAJ JN',
    duration: '8:50',
    special_train: false,
    train_type: 'SUF',
    score: 21,
    score_train_type: 5,
    score_booking_requency: 0,
    frequency_perc: 0,
    from_distance_text: '',
    to_distance_text: '',
    duration_rating: 3,
    score_duration: 6,
    score_std: 10,
    score_user_preferred: 0,
    train_date: '23-04-2024',
    class_type: [ 'SL', '3A', '2A', '1A', '3E' ]
  },
  {
    train_number: '20975',
    train_name: 'Chambal Express',
    run_days: [ 'Tue' ],
    train_src: 'HWH',
    train_dstn: 'AGC',
    from_std: '22:20',
    from_sta: '22:15',
    local_train_from_sta: 1335,
    to_sta: '07:35',
    to_std: '07:40',
    from_day: 0,
    to_day: 1,
    d_day: 0,
    from: 'DHN',
    to: 'PCOI',
    from_station_name: 'DHANBAD JN',
    halt_stn: 11,
    distance: 545,
    to_station_name: 'PRAYAGRAJ CHHEOKI JN',
    duration: '9:15',
    special_train: false,
    train_type: 'MEX',
    score: 21,
    score_train_type: 5,
    score_booking_requency: 0,
    frequency_perc: 0,
    from_distance_text: '',
    to_distance_text: '8 Kms from PRYJ',
    duration_rating: 4,
    score_duration: 6,
    score_std: 10,
    score_user_preferred: 0,
    train_date: '23-04-2024',
    class_type: [ 'SL', '3A', '2A', '3E' ]
  },
  {
    train_number: '12321',
    train_name: 'Howrah - Mumbai CSMT SF Mail',
    run_days: [
      'Mon', 'Tue',
      'Wed', 'Thu',
      'Fri', 'Sat',
      'Sun'
    ],
    train_src: 'HWH',
    train_dstn: 'CSMT',
    from_std: '03:45',
    from_sta: '03:40',
    local_train_from_sta: 1660,
    to_sta: '13:15',
    to_std: '13:20',
    from_day: 1,
    to_day: 1,
    d_day: 1,
    from: 'DHN',
    to: 'PCOI',
    from_station_name: 'DHANBAD JN',
    halt_stn: 14,
    distance: 545,
    to_station_name: 'PRAYAGRAJ CHHEOKI JN',
    duration: '9:30',
    special_train: false,
    train_type: 'SUF',
    score: 19,
    score_train_type: 5,
    score_booking_requency: 0,
    frequency_perc: 0,
    from_distance_text: '',
    to_distance_text: '8 Kms from PRYJ',
    duration_rating: 4,
    score_duration: 4,
    score_std: 10,
    score_user_preferred: 0,
    train_date: '23-04-2024',
    class_type: [ 'SL', '3A', '2A', '1A', '3E' ]
  },
  {
    train_number: '09610',
    train_name: 'Howrah - Madar Special',
    run_days: [ 'Tue' ],
    train_src: 'HWH',
    train_dstn: 'MDJN',
    from_std: '20:55',
    from_sta: '20:50',
    local_train_from_sta: 1250,
    to_sta: '07:30',
    to_std: '07:35',
    from_day: 0,
    to_day: 1,
    d_day: 0,
    from: 'DHN',
    to: 'PRYJ',
    from_station_name: 'DHANBAD JN',
    halt_stn: 5,
    distance: 554,
    to_station_name: 'PRAYAGRAJ JN',
    duration: '10:35',
    special_valid_to: '2024-04-24',
    special_train: true,
    train_type: 'MEX',
    score: 19,
    score_train_type: 5,
    score_booking_requency: 0,
    frequency_perc: 0,
    from_distance_text: '',
    to_distance_text: '',
    duration_rating: 5,
    score_duration: 4,
    score_std: 10,
    score_user_preferred: 0,
    train_date: '23-04-2024',
    class_type: [ 'SL', '3A' ]
  }
]



const insert = async () => {
  for (let train of data){
    await Train.insertMany(train);
  }
  // await Train.insertMany(data);

  // let trains = await Train.find();
  // console.log(trains[1].train_number);
}

insert();




// train irctc api call


    // const options = {
    //   method: 'GET',
    //   url: 'https://irctc1.p.rapidapi.com/api/v3/trainBetweenStations',
    //   params: {
    //     fromStationCode: startStation,
    //     toStationCode: endStation,
    //     dateOfJourney: date
    //   },
    //   headers: {
    //     'X-RapidAPI-Key': '234ddbe213msh189cfc1ed0d3f2dp15c962jsnc7add5265adc',
    //     'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
    //   }
    // };

    // try {
    //     const response = await axios.request(options);
    //     console.log(response);
    //     trains.push(response.data.data);
    // } catch (error) {
    //     console.error(error);
    // }
    // trains = trains[0];


    // 