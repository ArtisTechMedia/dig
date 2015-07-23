import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'section',
  classNames: 'dig-bar'.w(),
  showAdvanced: false,
  action: 'dig',

  resultsOptions: [
    '10',
    '15',
    '25',
    '50'
  ],

  sincedOptions: [
    {
      label: 'Forever',
      value: ''
    }, {
      label: 'Yesterday',
      value: 'Yesterday'
    }, {
      label: '1 week ago',
      value: '1 week ago'
    }, {
      label: '2 weeks ago',
      value: '2 weeks ago'
    }, {
      label: '3 months ago',
      value: '3 months ago'
    }
  ],

  sortOptions: [
    {
      label: 'Popularity',
      value: 'rank'
    }, {
      label: 'Recommends',
      value: 'score'
    }, {
      label: 'Date',
      value: 'date'
    }
  ],

  licOptions: [
    {
      label: 'All Licenses',
      value: ''
    }, {
      label: 'Free for Commercial Use',
      value: 'open'
    }
  ],

  ordOptions: [
    {
      label: 'Descending',
      value: 'desc'
    }, {
      label: 'Ascending',
      value: 'asc'
    }
  ],

  stypeOptions: [
    {
      label: 'Any word',
      value: 'any'
    }, {
      label: 'All words',
      value: 'all'
    }, {
      label: 'Exact phrase',
      value: 'match'
    }
  ],

  params: function(key, value) {
    if (arguments.length > 1) {return value;}
    return {};
  }.property(),

  tags: function() {
    return (this.get('params.tags') || '').split(',').map(function(tag) {
      return (tag || '').trim();
    }).filter(function(tag) {return !!tag;});
  }.property('params.tags'),

  actions: {
    dig: function() {
      this.sendAction('action', this.get('params'));
    },
    toggleAdvanced: function() {
      this.toggleProperty('showAdvanced');
    },

    clearTags: function() {
      this.set('params.tags', '');
      this.change();
    },

    clearTag: function(tag) {
      var tags = this.get('tags') || [];
      if (tag) {tag = tag.toString();}
      tags.removeObject(tag);
      this.set('params.tags', tags.join(','));
      this.change();
    }
  }
});
