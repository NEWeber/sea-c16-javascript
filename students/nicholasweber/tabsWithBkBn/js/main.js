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
  el:'.tabs-area',
  render: function () {
    var that = this;
    var tabs = new Tabs();
    tabs.fetch({
      success: function (tabs) {
        console.log("Got the data!")
        var template = _.template($('#tab-template').html(), {tabs: tabs.models});
        that.$el.html(template);
      }
    })
  
    //var attributes = this.model.toJSON();
    console.log("I ran the render!")
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