/* For when I add _.template
var _ = require('lodash');
var hashComp = _.template()
*/
$(document).ready;

var populateTabs = function() {
  $.getJSON('http://rs.hankyates.com:3000/content', function(data) {
    var i = 0
    data.forEach(function (tab, index) {
      console.log(tab);
      //FIXTHIS: check out _.template in lodash to do this
      $('ul').append('<li><a href="#' + tab.name + '">' + tab.name +'</a></li>');
      if(i==0) $("ul li a:first-child").attr('id', 'active-section');
      $('#article-area').append('<div style="display: none;" id="' + tab.name +'">' + tab.content + '</div>')
      if(i==0) $('section').html(tab.content);
      i++
      $('a').on('click', function (e) {
        $('#active-section').removeAttr('id', 'active-section');
        $(this).attr('id', 'active-section');
      });
    });
  });
};

populateTabs();

$(window).on('hashchange', function (e) {
  var content = $(location.hash).html();
  $('section').html(content);
});

$(".refresh").on('click', function() {
  $('ul').empty();
  $('#article-area').empty();
  populateTabs();
});
