// Generated by CoffeeScript 1.6.3
var startForumApp;

startForumApp = function() {
  var App;
  window.Forum = Forum;
  App = new Backbone.Marionette.Application();
  Forum.mainLayout = new Forum.Layouts.MainLayout();
  Forum.router = new Forum.Router();
  App.on("initialize:before", function() {
    Forum.mainLayout.render();
    return $('.container').html(Forum.mainLayout.$el);
  });
  App.addInitializer(function() {
    return Backbone.history.start();
  });
  return App.start();
};
