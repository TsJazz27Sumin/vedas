const zeroPadding = (number, length) => {
  return ( Array(length).join('0') + number ).slice( -length );
}

const get = () => {

  const japanStandardTime = new Date().toLocaleString({ timeZone: 'Asia/Tokyo' });
  const today = new Date(japanStandardTime);
  const this_year = today.getFullYear();
  const this_month = today.getMonth();
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

  return {year_map, month_map, date_map, this_month, this_year}
}

const get_date_map = (year, month) => {
  
  let date = new Date(parseInt(year), parseInt(month-1), 1);
  date.setMonth(date.getMonth() + 1);
  date.setDate(date.getDate() - 1);

  let date_map = [];
  for (let d = 1; d <= date.getDate(); d++) {
    date_map.push({ label: zeroPadding(d.toString(), 2), value: d });
  }
  return date_map
}

export default { get, get_date_map }