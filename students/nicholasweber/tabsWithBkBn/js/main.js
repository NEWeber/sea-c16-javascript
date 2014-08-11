var Tab = Backbone.Model.extend({});

var Tabs = Backbone.Collection.extend({
  url: 'http://rs.hankyates.com:3000/content',
  model: Tab
});


var TabsView = Backbone.View.extend({
  el:'.main-area',

  render: function () {
    var that = this;
    var tabs = new Tabs();
    tabs.fetch({
      success: function (tabs) {
        var template = _.template($('#tab-template').html(), {tabs: tabs.models});
        that.$el.html(template);
        //give the first tab highlighting
        $("li:first a").attr('id', 'active-section');
        //populate the display area with the first article.
        var getThisArt = $("li:first a").attr('href');
        var content = $(getThisArt).html();
        $('section').html(content);
      }
    })
  },

  events: {
    "click a" : "changeArticle",
    "click .refresh" : "reloadAll"
  },
  changeArticle: function(e){
    //hash gets the id of the article that the user clicked on
    var hash = e.currentTarget.hash;
    var content = $(hash).html();
    $('section').html(content);
    $('#active-section').removeAttr('id', 'active-section');
    //e.currentTarget targets the tab that the user clicked on to give it the active highlighting.
    $(e.currentTarget).attr('id', 'active-section');
  },
  reloadAll: function(e) {
    $('.main-area').empty();
    tabsView.render();
  }
}); 

var tabsView = new TabsView();

tabsView.render();
