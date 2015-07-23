import Ember from 'ember';

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-2878955-3']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' === document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

export default Ember.Route.extend({
  didTransition: function(){
    var router = this.router;
    Ember.run.once(function(){
      // Track this pageview with Google analytics
      _gaq.push(['_trackPageview', router.get('url')]);
    });
  },

  actions: {
    togglePlay: function(item) {
      if (!item) {return;}
      item.get('media').togglePlay();
    },

    dig: function(params) {
      this.transitionTo('dig', {queryParams: params});
    }
  }
});
