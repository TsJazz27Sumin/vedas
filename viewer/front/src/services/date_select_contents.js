const get = () => {

  const today = new Date();
  const this_year = today.getFullYear();
  const prev_month = today.getMonth();
  let year_map = [];
  let month_map = [];
  let date_map = [];
  
  for (let year = 2016; year <= this_year; year++) {
    year_map.push({ label: year, value: year });
  }
  for (let month = 1; month <= 12; month++) {
    month_map.push({ label: month, value: month });
  }
  for (let date = 1; date <= 31; date++) {
    date_map.push({ label: date, value: date });
  }

  return {year_map, month_map, date_map, prev_month, this_year}
}

export default { get }