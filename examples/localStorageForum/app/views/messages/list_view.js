// Generated by CoffeeScript 1.6.3
var _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Forum.Views.Messages.ListView = (function(_super) {
  __extends(ListView, _super);

  function ListView() {
    _ref = ListView.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  ListView.prototype.itemView = Forum.Views.Messages.ItemView;

  ListView.prototype.emptyView = Forum.Views.Messages.EmptyView;

  ListView.prototype.className = 'messages-list';

  return ListView;

})(Backbone.Marionette.CollectionView);
