import Ember from 'ember';

export default Ember.Mixin.create({
  queryParams: ['offset', 'limit'],

  offset: 0,
  limit: 10,
  ord: 'desc',
  sort: 'rank',
  lic: '',
  tags: '',
  sinced: '',
  stype: 'all',
  datasource: 'uploads',

  nextOffset: function() {
    if (this.get('model.length') < this.get('limit')) {return;}
    return this.get('limit') + this.get('offset');
  }.property('offset', 'limit'),

  previousOffset: function() {
    var offset = this.get('offset') - this.get('limit');
    if (offset < 0) {offset = 0;}
    return offset;
  }.property('offset', 'limit')
});
