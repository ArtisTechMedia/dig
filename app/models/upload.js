import Ember from 'ember';

export default Ember.Object.extend({
  ccc: Ember.inject.service(),
  player: Ember.inject.service(),

  id: Ember.computed.alias('content.upload_id'),
  title: Ember.computed.alias('content.upload_name'),
  uploader: Ember.computed.alias('content.user_name'),
  licenseName: Ember.computed.alias('content.license_name'),
  tags: Ember.computed.alias('content.upload_tags'),
  isPlaying: Ember.computed.alias('media.isPlaying'),

  streamUrl: function() {
    var files = this.get('content.files');
    if (Ember.isArray(files)) {
      // TODO: Search list and make sure we try to get a streamable file instead of zip
      return files.get('firstObject.download_url');
    }
  }.property('content.files'),

  isLicenseReady: function() {
    return ((this.get('content.upload_tags') || '').indexOf('ccplus') !== -1);
  }.property('content.upload_tags'),

  licenseLogoUrl: function() {
    // TODO: Make this work to pull correct images from CCC
    return "images/" + this.get('content.license_name').dasherize() + '.png';
  }.property('content.license_name'),

  purchaseLicenseUrl: function() {
    var baseUrl = 'http://tunetrack.net/license/';
    return baseUrl + this.get('content.file_page_url').replace('http://', '');
  }.property('content.file_page_url'),

  isRecommended: function() {
    return (this.get('ccc.recommends') || []).contains(this.get('content.upload_id'));
  }.property('ccc.recommends.@each', 'content.upload_id'),

  media: function() {
    return this.get('player').media({
      track:            this,
      artistBinding:    'track.user_name',
      titleBinding:     'track.upload_name',
      mp3UrlBinding:    'track.streamUrl'
    });
  }.property(),

  isOwnUpload: function() {
    return (this.get('content.user_name') === this.get('ccc.username'));
  }.property('ccc.username', 'content.user_name')
});
