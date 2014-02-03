// Generated by CoffeeScript 1.6.3
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['text!templates/themes/item.html'], function(template) {
  var _ref;
  return Forum.Views.Themes.ItemView = (function(_super) {
    __extends(ItemView, _super);

    function ItemView() {
      _ref = ItemView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    ItemView.prototype.tagName = 'tr';

    ItemView.prototype.template = _.template(template);

    ItemView.prototype.ui = {
      trash: 'span[role=trash]',
      edit: 'span[role=edit]'
    };

    ItemView.prototype.events = {
      'click span[role=trash]': '_deleteThemeAndMessages'
    };

    ItemView.prototype._deleteThemeAndMessages = function(e) {
      return this.model.destroy();
    };

    return ItemView;

  })(Backbone.Marionette.ItemView);
});