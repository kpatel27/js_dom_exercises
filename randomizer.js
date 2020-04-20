/*
Write a randomizer function that accepts n callbacks and calls each callback at
some random point in time between now and 2 * n seconds from now. For instance,
if the caller provides 5 callbacks, the function should run them all sometime
within 10 seconds.
*/

function randomizer(...args) {
  if (args.length < 1) {
    return;
  }

  var timer = args.length * 2;
  var timePassed = 0;

  var timeLogger = setInterval(function() {
    timePassed += 1;
    console.log(timePassed)

    if (timePassed >= timer) {
      clearInterval(timeLogger);
    }
  }, 1000);

  var i;
  for (i = 0; i < args.length; i += 1) {
    var executeTime = Math.floor(Math.random() * timer * 1000);
    setTimeout(args[i], executeTime);
  }
}
