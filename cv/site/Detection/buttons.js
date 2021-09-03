function readURL(event) {

  var getImagePath = URL.createObjectURL(event.target.files[0]);
  document.getElementById('fond').src = getImagePath;
  respondCanvas();
  fileLoad();
  dispose();
  cross();
  clear();
}

function clearimg() {
  $('#fond').removeAttr('src');
  $('#backfond').css('visibility', 'visible');
  $('.clear').css('visibility', 'hidden');
}

function changeBg1(event) {

  var getImagePath = document.getElementById('minimg1').src;
  document.getElementById('fond').src = getImagePath;
  $('#blocs').css('visibility', 'hidden');
  blocToggle = true;
  cross();
  clear();
  respondCanvas();
  fileLoad();
  dispose();

}

function changeBg2(event) {

  var getImagePath = document.getElementById('minimg2').src;
  document.getElementById('fond').src = getImagePath;
  $('#blocs').css('visibility', 'hidden');
  blocToggle = true;
  cross();
  clear();
  respondCanvas();
  fileLoad();
  dispose();
}

function changeBg3(event) {

  var getImagePath = document.getElementById('minimg3').src;
  document.getElementById('fond').src = getImagePath;
  $('#blocs').css('visibility', 'hidden');
  blocToggle = true;
  cross();
  clear();
  respondCanvas();
  fileLoad();
  dispose();
}

function changeBg4(event) {

  var getImagePath = document.getElementById('minimg4').src;
  document.getElementById('fond').src = getImagePath;
  $('#blocs').css('visibility', 'hidden');
  blocToggle = true;
  cross();
  clear();
  respondCanvas();
  fileLoad();
  dispose();
}

function changeBg5(event) {

  var getImagePath = document.getElementById('minimg5').src;
  document.getElementById('fond').src = getImagePath;
  $('#blocs').css('visibility', 'hidden');
  blocToggle = true;
  cross();
  clear();
  respondCanvas();
  fileLoad();
  dispose();
}

function changeBg6(event) {

  var getImagePath = document.getElementById('minimg6').src;
  document.getElementById('fond').src = getImagePath;
  $('#blocs').css('visibility', 'hidden');
  blocToggle = true;
  cross();
  clear();
  respondCanvas();
  fileLoad();
  dispose();
}

function changeBg7(event) {

  var getImagePath = document.getElementById('minimg7').src;
  document.getElementById('fond').src = getImagePath;
  $('#blocs').css('visibility', 'hidden');
  blocToggle = true;
  cross();
  clear();
  respondCanvas();
  fileLoad();
  dispose();
}

function changeBg8(event) {

  var getImagePath = document.getElementById('minimg8').src;
  document.getElementById('fond').src = getImagePath;
  $('#blocs').css('visibility', 'hidden');
  blocToggle = true;
  cross();
  clear();
  respondCanvas();
  fileLoad();
  dispose();
}

function changeBg9(event) {

  var getImagePath = document.getElementById('minimg9').src;
  document.getElementById('fond').src = getImagePath;
  $('#blocs').css('visibility', 'hidden');
  blocToggle = true;
  cross();
  clear();
  respondCanvas();
  fileLoad();
  dispose();
}

function changeBg10(event) {

  var getImagePath = document.getElementById('minimg10').src;
  document.getElementById('fond').src = getImagePath;
  $('#blocs').css('visibility', 'hidden');
  blocToggle = true;
  cross();
  clear();
  respondCanvas();
  fileLoad();
  dispose();
}

function changeBg11(event) {

  var getImagePath = document.getElementById('minimg11').src;
  document.getElementById('fond').src = getImagePath;
  $('#blocs').css('visibility', 'hidden');
  blocToggle = true;
  cross();
  clear();
  respondCanvas();
  fileLoad();
  dispose();
}

function changeBg12(event) {

  var getImagePath = document.getElementById('minimg12').src;
  document.getElementById('fond').src = getImagePath;
  $('#blocs').css('visibility', 'hidden');
  blocToggle = true;
  cross();
  clear();
  respondCanvas();
  fileLoad();
  dispose();
}

function init() {
  respondCanvas();
  fileLoad();
  dispose();
  reset();
  //cancelAnimationFrame(animate2);
  document.getElementById("area2").innerHTML = "";
}