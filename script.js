document.addEventListener('DOMContentLoaded', function () {
  // Function to get the value of a cookie by name
  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
  }

  // Function to set a cookie
  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie =
      name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
  }

  // Get the value of the 'count' cookie, default to 0 if not set
  let count = parseInt(getCookie('count')) || 0;

  // Increment the value
  count++;

  // Update the cookie with the new count, expires in 7 days
  setCookie('count', count, 7);

  // Display the updated count on the webpage
  const countDisplay = document.getElementById('countDisplay');
  if (countDisplay) {
    countDisplay.textContent = `You have visited this page ${count} times.`;
  }
});
