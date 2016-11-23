var hotSpots = [
  {
    x: '57%',
    y: '7%',
    id: 'Graa_staer',
    name: 'Grå Stær',
    shortname: 'Grå stær',
    text: 'Grå stær eller katarakt er fordunklinger i øyets linse som gjør synet tåkete. Tilstanden behandles med å fjerne den dårlige, gamle linsen og erstatte den med en kunstig linse.',
    time: [
      {
        name: 'Ventetid til konsultasjon',
        med55: 10,
        uten55: 17
      },
      {
        name: 'Ventetid til operasjon',
        med55: 10,
        uten55: 15
      }
    ]
  },
  {
    x: '70%',
    y: '83%',
    id: 'Aareknuter',
    name: 'Åreknuter',
    shortname: 'Åreknuter',
    text: 'Åreknuter (varicer) er synlige, uregelmessige utvidelser i beinas overfladiske blodårer (vener). Kan være plagsomt og vondt.',
    time: [
      {
        name: 'Ventetid til konsultasjon',
        med55: 10,
        uten55: 25
      },
      {
        name: 'Ventetid til operasjon',
        med55: 10,
        uten55: 25
      }
    ]
  },
  {
    x: '47%',
    y: '45%',
    id: 'Gastroskopi',
    name: 'Gastroskopi, poliklinisk undersøkelse',
    shortname: 'Gastroskopi',
    text: 'Gastroskopi er en undersøkelse av spiserør, magesekk og tolvfingertarmen og foretas dersom legen mistenker sykdom i disse organer. Gastroskopi er aktuelt ved: sure oppstøt, kvalme, oppkast, måltidsrelaterte magesmerter/oppblåsthet, slapphet, lav blodprosent, vekttap og utredning av cøliaki og utredning for kreft i magesekk.',
    time: [
      {
        name: 'Ventetid',
        med55: 10,
        uten55: 15
      }
    ]
  },
  {
    x: '50%',
    y: '57%',
    id: 'Lyskebrokk',
    name: 'Lyskebrokk',
    shortname: 'Lyskebrokk',
    text: 'Lyskebrokk er en utposning av bukhulen. Brokket fremtrer som en kul når du står oppreist, hoster eller presser ut magen. Over tid kan brokket bli større og gi økende plager.',
    time: [
      {
        name: 'Ventetid til konsultasjon',
        med55: 10,
        uten55: 6
      },
      {
        name: 'Ventetid til operasjon',
        med55: 10,
        uten55: 13
      }
    ]
  },
  {
    x: '60%',
    y: '34%',
    id: 'Hoyt_blodtrykk',
    name: 'Høyt blodtrykk, hjerteutredning',
    shortname: 'Høyt blodtrykk',
    text: 'Høyt blodtrykk er ett av de største helseproblemene i den vestlige verden. Høyt blodtrykk er nært knyttet opp mot livsstilsykdommer som hjerte- og karsykdommer, diabetes og fedme.',
    time: [
      {
        name: 'Ventetid til konsultasjon',
        med55: 10,
        uten55: 9
      }
    ]
  },
  {
    x: '36%',
    y: '95%',
    id: 'Hallux_Valgus',
    name: 'Skjev Stortå/Hallux Valgus',
    shortname: 'Skjev Stortå',
    text: 'Hallux valgus er en feilstilling av stortåen slik at den dreier i retning av lilletåen. Samtidig er stortåens grunnledd forskjøvet innover i retning den andre foten.',
    time: [
      {
        name: 'Ventetid til konsultasjon',
        med55: 10,
        uten55: 14
      },
      {
        name: 'Ventetid til operasjon',
        med55: 10,
        uten55: 16
      }
    ]
  },
  {
    x: '30%',
    y: '73%',
    id: 'Kneplager',
    shortname: 'Meniskskade',
    name: 'Kneplager – meniskskade, kikkhullsoperasjon (artroskopi):',
    text: 'Rifter eller brudd i menisken på innsiden i kneet',
    time: [
      {
        name: 'Ventetid til konsultasjon',
        med55: 10,
        uten55: 12
      },
      {
        name: 'Ventetid til operasjon',
        med55: 10,
        uten55: 10
      }
    ]
  },
  {
    x: '35%',
    y: '24%',
    id: 'atroskopi',
    shortname: 'Atroskopi',
    name: 'Skulder, betennelser og forkalkninger, liten kikkhullsoperasjon (atroskopi):',
    text: 'Smerter i skulder, stivhet og andre skulderplager kan meget ofte behandles med hell, uansett om det skyldes mange års skulderbelastende arbeid, sportsskader, overbelastning, følger etter brudd eller andre skader.',
    time: [
      {
        name: 'Ventetid til konsultasjon',
        med55: 10,
        uten55: 25
      },
      {
        name: 'Ventetid til operasjon',
        med55: 10,
        uten55: 14
      }
    ]
  }
];
currentHotSpotId = null;

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
    $(child)
      .data('id', hotSpots[i].id)
      .on('click', function() {
        console.log(this)
        hotspotClick($(this).data('id'))
      });
    el.style.WebkitTransform = 'translate('+hotSpots[i].x+', '+hotSpots[i].y+')';
    el.style.msTransform = 'translate('+hotSpots[i].x+', '+hotSpots[i].y+')';
    el.style.transform = 'translate('+hotSpots[i].x+', '+hotSpots[i].y+')';
    el.appendChild(child);
    // add new Spot to container
    hotSpotContainer.appendChild(el);
    // calculate weeks into days for waiting times (used in Pie)
    for (var x in hotSpots[i].time){
      hotSpots[i].time[x].uten55_days = hotSpots[i].time[x].uten55 * 7;
    }
  }
  // fake trigger click on first element
  hotspotClick(hotSpots[0].id);
  // Actions for pressing next / prev on smaller screens.
  $('#hotspotControllerPrev').on('click', function(){
    hotSpotMove(-1);
  });
  $('#hotspotControllerNext').on('click', function(){
    hotSpotMove(1);
  })
}

function bakePie (canvas, val, color) {
  var ctx = canvas.getContext("2d");
  // add bg first
  ctx.fillStyle = '#dddddd';
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, canvas.height / 2);
  ctx.arc(canvas.width / 2, canvas.height / 2, canvas.height / 2, 0, (Math.PI * 2), false);
  ctx.lineTo(canvas.width / 2, canvas.height / 2);
  ctx.fill();
  // add colour pie
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, canvas.height / 2);
  ctx.arc(canvas.width / 2, canvas.height / 2, canvas.height / 2, 0, (Math.PI * 2 * (val)), false);
  ctx.lineTo(canvas.width / 2, canvas.height / 2);
  ctx.fill();
  // add white circle in middle of pie
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, canvas.height / 2);
  ctx.arc(canvas.width / 2, canvas.height / 2, canvas.height / 4, 0, (Math.PI * 2), false);
  ctx.lineTo(canvas.width / 2, canvas.height / 2);
  ctx.fill();
}

function hotSpotMove(addVal) {
  for (var i = 0; i < hotSpots.length; i++) {
    if (currentHotSpotId === hotSpots[i].id) {
      break;
    }
  }
  if (i === 0 && addVal === -1) {
    i = hotSpots.length-1;
  } else if (i === hotSpots.length -1 && addVal === 1) {
    i = 0;
  } else {
    i += addVal;
  }
  hotspotClick(hotSpots[i].id)
}

function hotSpotContent (obj) {
  var $hotspotContent = $('#hotspotContent').empty();
  $('<h1 />').text(obj.name).appendTo($hotspotContent);
  $('<p />').text(obj.text).appendTo($hotspotContent);
  // add table with piecharts for waiting time //
  if (obj.time.length) {
    var $table = $('<table>').appendTo($hotspotContent);
    // ADD THEAD
    var $thead = $('<thead>').html('<tr><th></th><th>Uten 55+</th><th>Med 55+</th></tr>').appendTo($table)
    for (x in obj.time) {
      var $tr = $('<tr>');
      // TD1
      var $td1 = $('<td>').html(obj.time[x].name).appendTo($tr);
      // TD2
      var $td2 = $('<td>').appendTo($tr);
      var $td2_div = $('<div>', {
        class: 'pies'
      }).html('<canvas width="30" height="30">');
      $td2_div.appendTo($td2);
      // add text
      $('<div>').html(obj.time[x].uten55+' uker<br />(gj.snitt)').appendTo($td2);
      // TD3
      var $td3 = $('<td>').appendTo($tr);
      var $td3_div = $('<div>', {
        class: 'pies'
      }).html('<canvas width="30" height="30">');
      $td3_div.appendTo($td3);
      // add text
      $('<div>').html(obj.time[x].med55+' dager<br />(maks)').appendTo($td3);
      // append <tr> to <table>
      $tr.appendTo($table);
      // bake me some pies!
      bakePie($td2_div.find('canvas')[0], (obj.time[x].uten55_days > obj.time[x].med55 ? 1 : obj.time[x].med55 / obj.time[x].uten55_days), '#ED1C23');
      bakePie($td3_div.find('canvas')[0], (obj.time[x].uten55_days < obj.time[x].med55 ? 1 : obj.time[x].med55 / obj.time[x].uten55_days), '#1EA239');
    }
  }
  $hotspotContent.hide().fadeIn(400);
}

function drawHotSpotControllers () {
  for (var i = 0; i < hotSpots.length; i++) {
    if (currentHotSpotId === hotSpots[i].id) {
      break;
    }
  }
  $('#hotspotControllerTextPrev').text(i === 0 ? hotSpots[hotSpots.length - 1].shortname : hotSpots[i - 1].shortname);
  $('#hotspotControllerTextNext').text(i === hotSpots.length - 1 ? hotSpots[0].shortname : hotSpots[i + 1].shortname);
}

function hotspotClick (id) {
  currentHotSpotId = id;
  for (let x in hotSpots) {
    if (hotSpots[x].id === id) {
      $(hotSpots[x].el).addClass('selected')
      hotSpotContent(hotSpots[x])
    } else {
      $(hotSpots[x].el).removeClass('selected')
    }
  }
  drawHotSpotControllers();
}

$(function() {

  initHotSpots();

  var scrollPage = function (scrollTo) {
    $("html, body").stop().animate({
      scrollTop: scrollTo
    }, 1200);
  }

  // Salespoints toggler //
  $('.btn-toggleMore').on('click', function(){
    var $this = $(this);
    if ($this.hasClass('show-less')) {
      $this.next().stop().slideUp(200);
    } else {
      $this.next().stop().slideDown(200);
      // scroll page
      scrollPage($this.closest('.salespoint').offset().top);
      // GA
      ga('send','event','openview', $this.data('linktext'));
    }
    $this.toggleClass('show-less');
  });
  $('#scrollToSurvey').on('click', function() {
    $('.floater').addClass('fadeOut').fadeOut(200, function() {
      $(this).remove();
    });
    // GA
    ga('send','event','buttonToSurvey','clicked button');
  })

  // Hide salespoints as start //
  $('.sales-content').stop().slideUp(0).hide();

  $('[data-scroller]').on('click', function(){
    var scrollDown = $($(this).data('scroller'));
    scrollPage(scrollDown.offset().top);
  });

  // Answers
  $('.answer-btn > label').on('click', function(){
    var $this = $(this);
    $this.parent().addClass('selected');
    $this.parent().prev().removeClass('selected');
    $this.parent().next().removeClass('selected');
  });

});
