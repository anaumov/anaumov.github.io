// Generated by CoffeeScript 1.6.3
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['text!templates/messages/new.html'], function(template) {
  var _ref;
  return Forum.Views.Messages.NewView = (function(_super) {
    __extends(NewView, _super);

    function NewView() {
      _ref = NewView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    NewView.prototype.template = _.template(template);

    NewView.prototype.ui = {
      form: 'form',
      inputUser: 'input[name=username]',
      inputBody: 'textarea[name=body]'
    };

    NewView.prototype.events = {
      'click button': '_createMessage'
    };

    NewView.prototype.initialize = function(options) {
      return this.themeId = options.themeId;
    };

    NewView.prototype._createMessage = function(e) {
      if (this.ui.form[0].checkValidity()) {
        e.preventDefault();
        this.collection.create({
          username: this.ui.inputUser.val(),
          body: this.ui.inputBody.val(),
          themeId: this.themeId
        });
        return this._clearForm();
      }
    };

    NewView.prototype._clearForm = function() {
      this.ui.inputUser.val('');
      return this.ui.inputBody.val('');
    };

    return NewView;

  })(Backbone.Marionette.ItemView);
});
