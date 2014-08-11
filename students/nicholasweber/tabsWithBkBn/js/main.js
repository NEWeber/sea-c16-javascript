/* For when I add _.template
var _ = require('lodash');
var hashComp = _.template()
*/


var Tab = Backbone.Model.extend({});

var Tabs = Backbone.Collection.extend({
  url: 'http://rs.hankyates.com:3000/content',
  model: Tab
});


var TabsView = Backbone.View.extend({
  //tagName: 'li',
  el:'.main-area',

  render: function () {
    var that = this;
    var tabs = new Tabs();
    tabs.fetch({
      success: function (tabs) {
        console.log("Got the data!")
        var template = _.template($('#tab-template').html(), {tabs: tabs.models});
        that.$el.html(template);

          console.log($("li:first a").html());
          $("li:first a").attr('id', 'active-section');

      }
    })

    console.log("I ran the render!")
  },

  events: {
    "click a" : "changeArticle"
  },
  changeArticle: function(e){
    console.log(e);
    //hash gets the id of the article that the user clicked on
    var hash = e.currentTarget.hash;
    console.log("Trying to change the article.")
    console.log(hash);
    var content = $(hash).html();
    $('section').html(content);
    $('#active-section').removeAttr('id', 'active-section');
    //e.currentTarget targets the tab that the user clicked on to give it the active highlighting.
    $(e.currentTarget).attr('id', 'active-section');
  }
}); 

var tabsView = new TabsView();

tabsView.render();


/*
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
*/