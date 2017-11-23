// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
//
//
$(document).ready(function () {
  //Initialize tooltips
  $('.nav-tabs > li a[title]').tooltip();

  //Wizard
  $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {

    var $target = $(e.target);

    if ($target.parent().hasClass('disabled')) {
      return false;
    }
  });

  $(".next-step").click(function (e) {
    var $active = $('.wizard .nav-tabs li.active');
    $active.next().removeClass('disabled');
    nextTab($active);
  });
  $(".prev-step").click(function (e) {
    var $active = $('.wizard .nav-tabs li.active');
    prevTab($active);

  });
});

function nextTab(elem) {
  $(elem).next().find('a[data-toggle="tab"]').click();
}
function prevTab(elem) {
  $(elem).prev().find('a[data-toggle="tab"]').click();
}

$(document).ready(function(){
  if (navigator){
    navigator.geolocation.getCurrentPosition(function(position){
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      //        $("#location").append("<p> LATITUDE:" + latitude + "</p><p>LONGITUDE:" + longitude + "</p>")
      //        $("#location").append("<a href='http://maps.google.com/?q=" + latitude + "," + longitude + "'>View Location</a>")
      var image = '<img src="https://maps.googleapis.com/maps/api/staticmap?center=' + latitude + ',' + longitude + '&zoom=18&size=800x600&key=AIzaSyA4BHW3txEdqfxzdTlPwaHsYRSZbfeIcd8&markers=color:red%7Clabel:C%7C' + latitude + ',' + longitude + '"/>';
      $(".location").append(image);
      document.getElementById("lat").value = latitude;
      document.getElementById("lon").value = longitude;
      console.log(latitude);
      console.log(longitude);
    });
  }else{
    var latitude = '';
    var longitude = '';
  }
});
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $('.blah').removeClass("hidden");
      $('.blah')
        .attr('src', e.target.result)
        .width(150)
        .height(200);
    };
    reader.readAsDataURL(input.files[0]);
  }
}
$(function(){
  $('input:radio').change(
    function(){
      $("#stock").html($("input[name='stock']:checked").val());
      $("#add").html($("input[name='add']:checked").val());
      $("#comment").html($("textarea[name='comment']").val());
    }
);          
});
