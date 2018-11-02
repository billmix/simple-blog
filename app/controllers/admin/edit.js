import Controller from '@ember/controller';
import moment from 'moment';
import { set } from '@ember/object';

export default Controller.extend({

    actions:{
        updatePost(){
            this.get('model').save();
            this.set('editMode', false);
            this.transitionToRoute('admin');
        },
        cancelEdit(model){
            this.transitionToRoute('admin');
            this.set('editMode', false);
        }

    }
});
