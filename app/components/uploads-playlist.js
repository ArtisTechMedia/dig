import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: 'api uploads media-list'.w(),
  recommend: 'recommend',

  playlist: Ember.computed.mapBy('uploads', 'media'),

  actions: {
    recommend: function(id) {
      this.sendAction('recommend', id);
    }
  }
});
