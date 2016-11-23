$(function() {
  $('#survey-form').on('submit', function(e) {
    console.log('submit');
    e.preventDefault();
    return false;
  });
  console.log($('#survey-form')[0]);
  // Answers
  $('.answer-btn').on('click', function(){
    var $this = $(this);
    $this.addClass('selected');
    $this.prev().removeClass('selected');
    $this.next().removeClass('selected');
  });
});
