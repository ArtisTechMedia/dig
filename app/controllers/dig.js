import Ember from 'ember';
import DigControllerMixin from 'dig/mixins/dig-controller';

export default Ember.Controller.extend(DigControllerMixin, {
  queryParams: ['order', 'sort', 'stype', 'sinced', 'lic', 'tags', 'datasource']
});
