const get = () => {

  function zeroPadding(number, length){
    return ( Array(length).join('0') + number ).slice( -length );
  }

  const japanStandardTime = new Date().toLocaleString({ timeZone: 'Asia/Tokyo' });
  const today = new Date(japanStandardTime);
  const this_year = today.getFullYear();
  const prev_month = today.getMonth();
  let year_map = [];
  let month_map = [];
  let date_map = [];
  
  for (let year = 2016; year <= this_year; year++) {
    year_map.push({ label: year.toString(), value: year });
  }
  for (let month = 1; month <= 12; month++) {
    month_map.push({ label: zeroPadding(month.toString(), 2), value: month });
  }
  for (let date = 1; date <= 31; date++) {
    date_map.push({ label: zeroPadding(date.toString(), 2), value: date });
  }

  return {year_map, month_map, date_map, prev_month, this_year}
}

export default { get }