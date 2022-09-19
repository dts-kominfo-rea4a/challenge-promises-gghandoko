const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
// const promiseOutput = ;

const promiseOutput = (dataMovie) => {
  // console.log(dataMovie);

  return new Promise((resolve) => {
    (async () => {
      var hasil1 = await promiseTheaterIXX();
      var hasil2 = await promiseTheaterVGC();

      // console.log(hasil1);
      // console.log(hasil2);
      calculate = 0;

      for (tempCal of hasil1) {
        // console.log(tempCal);
        if (tempCal['hasil'] == dataMovie) {
          calculate++;
        }
      }

      for (tempCal2 of hasil2) {
        if (tempCal2['hasil'] == dataMovie) {
          calculate++;
        }
      }
      resolve(calculate);
    })();
    
  });
}


module.exports = {
  promiseOutput,
};
