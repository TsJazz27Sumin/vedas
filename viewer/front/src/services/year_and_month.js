const get = () => {

  const today = new Date();
  const this_year = today.getFullYear();
  const this_month = today.getMonth() + 1;

  const year_and_month = [];

  for(let month = 1; month <= 12; month++){
    year_and_month.push('2016/' + month);
  }
  for(let year = 2017; year < this_year; year++){
    for(let month = 1; month <= 12; month++){
      year_and_month.push(year + '/' + month);
    }
  }
  for(let month = 1; month <= this_month; month++){
    year_and_month.push(this_year + '/' + month);
  }

  return year_and_month
}

export default { get }