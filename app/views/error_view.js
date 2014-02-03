// Generated by CoffeeScript 1.6.3
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['text!templates/error.html'], function(template) {
  var _ref;
  return Forum.Views.ErrorView = (function(_super) {
    __extends(ErrorView, _super);

    function ErrorView() {
      _ref = ErrorView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    ErrorView.prototype.className = 'alert alert-danger fade in';

    ErrorView.prototype.template = _.template(template);

    ErrorView.prototype.onRender = function() {
      return $(".alert").alert();
    };

    ErrorView.prototype.serializeData = function() {
      var data;
      data = ErrorView.__super__.serializeData.call(this);
      data.message = this.options.message;
      return data;
    };

    return ErrorView;

  })(Backbone.Marionette.ItemView);
});
