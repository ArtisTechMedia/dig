import Ember from 'ember';
import Upload from 'dig/models/upload';

export default Ember.Service.extend({
  recommends: function(key, value) {
    if (arguments.length > 1) {return value;}
    return [];
  }.property(),

  _uploads: function() {return {};}.property(),

  _api: function() {return {};}.property(),

  request: function(args) {
    return Ember.RSVP.resolve(Ember.$.ajax(args));
  },

  recommendId: function(id) {
    var url = "http://ccmixter.org/rate/" + id + "/5?rmacro=recommends";
    var recommends = this.get('recommends');
    return this.request({
      url: url,
      method: 'POST',
      xhrFields: {withCredentials: true}
    }).then(function() {
      recommends.pushObject(id);
    });
  },

  getUploadForUrl: function(url) {
    var upload = this.get('_uploads')[url];
    if (upload) {return upload;}
    upload = Upload.create({container: this.get('container')});
    return upload;
  },

  loadUpload: function(upload) {
    var obj = this.getUploadForUrl(upload.file_page_url);
    obj.set('content', upload);
    return obj;
  },

  query: function(args) {
    var url = 'http://ccmixter.org/api/query?f=json&';
    var cache = this.get('_api');
    var queryParams = Ember.$.param(args);
    url = url + queryParams;
    if (cache[url]) {return Ember.RSVP.resolve(cache[url]);}
    return this.request({url: url, dataType: 'json'}).then(function(response) {
      response.args = queryParams;
      cache[url] = response;
      return response;
    });
  },

  queryUploads: function(args) {
    return this.query(args).then(function(result) {
      return result.map(function(item) {
        return this.loadUpload(item);
      }.bind(this));
    }.bind(this));
  }
});
