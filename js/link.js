$(function () {
  var domains = [
    "https://i9701.com",
    "https://i9702.com",
    "https://i9703.com",
    "https://i9704.com",
    "https://i9705.com",
    "https://i9706.com",
    "https://i9707.com"
  ];

  // Function to shuffle an array
  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  // Shuffle the domains array
  var shuffledDomains = shuffle(domains);

  $(".itemw .item a").each(function (index) {
    if (index < shuffledDomains.length) {
      var domain = shuffledDomains[index];
      $(this).attr("href", domain);
      $(this).find(".wurl").text(domain.replace(/http:\/\/|https:\/\/|www\./g, ''));
    }
  });

    $(".item .ms").each(function () {
      var randomNum = Math.floor(Math.random() * 20) + 10; // generates a random number between 1 and 30
      $(this).text(randomNum + "ms"); // sets the text of the .ms element to the random number followed by "ms"
    });

    $('.cont-2.pc .item').hover(function () {
      $(this).find(".bimg img").toggle();
    })
});
