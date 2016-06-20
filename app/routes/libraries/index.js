/**
 * Created by jbaik on 6/20/2016.
 */
import Ember from 'ember';

export default Ember.Route.extend({

    model() {
        return this.store.findAll('library');
    }

});