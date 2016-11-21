/*
const hotSpots = [
  {
    x: '83%',
    y: '53%',
    id: 'Graa_staer',
    name: 'Grå Stær'
  },
  {
    x: '55%',
    y: '83%',
    id: 'Benskjorhet',
    name: 'Benskjørhet'
  },
  {
    x: '23%',
    y: '33%',
    id: 'Sukkersyke',
    name: 'Sukkersyke'
  }
];

// place hotSpots
function initHotSpots () {
  let hotSpotContainer = document.getElementById('hotspotImage')
  for (let i = 0; i < hotSpots.length; i++) {
    // spotWrapper
    let el = document.createElement('DIV');
    el.className = 'spotWrapper';
    hotSpots[i].el = el;
    // spotDot
    let child = document.createElement('SPAN');
    child.className = 'spotDot';
    child.style.WebkitTransform = 'translate('+hotSpots[i].x+', '+hotSpots[i].y+')';
    child.style.msTransform = 'translate('+hotSpots[i].x+', '+hotSpots[i].y+')';
    child.style.transform = 'translate('+hotSpots[i].x+', '+hotSpots[i].y+')';
    el.appendChild(child);
    // add new Spot to container
    hotSpotContainer.appendChild(el);
  }
}

initHotSpots();
*/
//
$(function() {
  var openSubpage = false;
  $('#morecontentbtn').on('click', function(){
    $(this).hide();
    openSubpage = true;
    $('#morecontent').fadeIn(200);
  });
  $('.scrollDown').on('click', function(){
    $("html, body").stop().animate({scrollTop: openSubpage ? 4040 + (625 - 44) : 4040}, '700', 'swing', function() {
       console.log('scrolled...')
    });
  });
  $('.scrollTop').on('click', function(){
    $("html, body").stop().animate({scrollTop: 0}, '700', 'swing', function() {
       console.log('scrolled...')
    });
  });
});
