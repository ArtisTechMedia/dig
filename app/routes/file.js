import Ember from 'ember';

export default Ember.Route.extend({
  ccc: Ember.inject.service(),

  model: function(params) {
    return this.get('ccc').queryUploads({
      dataview: 'upload_page',
      ids: params.file_id
    }).then(function(uploads) {return uploads[0];});
  },

  afterModel: function(model) {
    if (!model) {return;}
    return this.get('ccc').query({
      datasource: 'topics',
      type: 'review',
      dataview: 'rss_20_topics',
      upload: model.get('id')
    }).then(function(reviews) {
      model.set('reviews', reviews);
    });
  },

  serialize: function(model) {
    if (model) {
      return {
        username: model.get('uploader'),
        file_id: model.get('id')
      };
    }
  },

  redirect: function(model) {
    if (!model) {this.transitionTo('index');}
  }
});
