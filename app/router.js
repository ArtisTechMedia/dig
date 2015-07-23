import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource('about');
  this.resource('keep-ccmixter-open-and-free');
  this.resource('hot');
  this.resource('top');
  this.resource('recommended');
  this.resource('editorialPicks');
  this.resource('licenseReady', {path: '/ccplus'});
  this.resource('free');
  this.resource('new');
  this.resource('pells');
  this.resource('samples');
  this.resource('freeMusicForYoutube', {path: '/free-music-for-youtube'});
  this.resource('freeMusicToRemix', {path: '/free-music-to-remix'});
  this.resource('safeForCommercialLicensing', {path: '/safe-for-commercial-licensing'});
  this.resource('file', {path: '/files/:username/:file_id'});
  this.resource('user', {path: '/people/:username'}, function() {
    this.route('profile');
  });
  this.resource('tags', {path: '/tags/:tags'});
  this.resource('userRedirect', {path: '/user/:username'});
  this.resource('dig', {path: '/dig'});
  this.resource('uploads', {path: '/dig/*args'});
});
