export const convertDate = (date) => {
  var date = new Date(date);
  var tahun = date.getFullYear();
  var bulan = date.getMonth();
  var tanggal = date.getDate();
  var hari = date.getDay();
  var jam = date.getHours();
  var menit = date.getMinutes();
  var detik = date.getSeconds();
  switch (hari) {
    case 0:
      hari = "Sunday";
      break;
    case 1:
      hari = "Monday";
      break;
    case 2:
      hari = "Tuesday";
      break;
    case 3:
      hari = "Wednesday";
      break;
    case 4:
      hari = "Thursday";
      break;
    case 5:
      hari = "Friday";
      break;
    case 6:
      hari = "Saturday";
      break;
  }
  switch (bulan) {
    case 0:
      bulan = "January";
      break;
    case 1:
      bulan = "February";
      break;
    case 2:
      bulan = "March";
      break;
    case 3:
      bulan = "April";
      break;
    case 4:
      bulan = "May";
      break;
    case 5:
      bulan = "June";
      break;
    case 6:
      bulan = "July";
      break;
    case 7:
      bulan = "August";
      break;
    case 8:
      bulan = "September";
      break;
    case 9:
      bulan = "October";
      break;
    case 10:
      bulan = "November";
      break;
    case 11:
      bulan = "December";
      break;
  }
  var tampilTanggal = `${hari}, ${tanggal} ${bulan} ${tahun}`;
  return tampilTanggal;
};
