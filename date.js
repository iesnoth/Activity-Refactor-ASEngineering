// <!--script to return formatted current date-->
  let now = new Date();

  let days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');

  let months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');

  let date = ((now.getDate() < 10) ? "0" : "") + now.getDate();

  function getFourDigits(number) {
    return (number < 1000) ? number + 1900 : number;
  }
  today = days[now.getDay()] + ", " +
    months[now.getMonth()] + " " +
    date + ", " +
    (getFourDigits(now.getYear()));

  
