import soundManager from 'soundManager';

export default {
  name: 'soundmanager-config',
  initialize: function() {
    soundManager.setup({
      url: '/soundmanager/swf/',
      debugMode: false
    });
  }
};
