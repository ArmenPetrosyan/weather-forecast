const detectIconByWeatherType = (weatherType) => {
  switch (weatherType) {
    case 'Clouds':
      return 'broken-clouds-day';
    case 'Snow':
      return 'snow-day';
    case 'Clear':
      return 'clear-sky-day';
    case 'Rain':
      return 'rain-day';
    default:
      return 'clear-sky-day';
  }
};

export default detectIconByWeatherType;
