import Ember from 'ember';

export default Ember.Route.extend({
  ccc: Ember.inject.service(),

  templateName: 'dig',

  queryParams: {
    offset: {refreshModel: true},
    limit: {refreshModel: true},
    ord: {refreshModel: true},
    sort: {refreshModel: true},
    lic: {refreshModel: true},
    tags: {refreshModel: true},
    sinced: {refreshModel: true},
    stype: {refreshModel: true}
  },

  model: function(args) {
    return this.get('ccc').queryUploads(Ember.$.extend(true, {}, args));
  },

  renderTemplate: function() {
    this.render(this.get('templateName'), {
      controller: this.controller
    });
  }
});
