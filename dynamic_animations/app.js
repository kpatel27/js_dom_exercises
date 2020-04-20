$(function() {
  var $canvas = $('#canvas');

  function getFormObject($form) {
    var object = {};

    $form.serializeArray().forEach(function(data) {
      object[data.name] = data.value;
    });

    return object;
  }

  function createElement(data) {
    var $div = $('<div />', {
      "class": data.shape,
      data: data,
    });

    resetElement($div);

    return $div;
  }

  function animateElement() {
    var $e = $(this);
    var data = $e.data();

    resetElement($e);
    $e.animate({
      left: +data.end_x,
      top: +data.end_y,
    }, 1000);
  }

  function resetElement($e) {
    var data = $e.data();

    $e.css({
      left: +data.start_x,
      top: +data.start_y,
    })
  }

  function stopAnimations() {
    $canvas.find('div').stop();
  }

  $('form').on('submit', function(e) {
    e.preventDefault();

    var $form = $(this);
    var data = getFormObject($form);

    $canvas.append(createElement(data));
  });

  $('#animate').on('click', function(e) {
    e.preventDefault();

    $canvas.find('div').each(animateElement);
  });

  $('#stop').on('click', function(e) {
    e.preventDefault();

    stopAnimations();
  });
});
