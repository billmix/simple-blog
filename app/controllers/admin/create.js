import Controller from '@ember/controller';
import moment from 'moment';

export default Controller.extend({
    actions:{
        saveNewPost(post){
            this.store.createRecord('post',{
                title: this.get('titleInput'),
                content: this.get('contentInput'),
                updated_at: moment().unix(),
                created_at: moment().unix() 
            }).save();
            this.set('titleInput', '');
            this.set('contentInput', '');
            this.transitionToRoute('admin');
        },
        cancelNewPost(){
            this.transitionToRoute('admin');
            this.set('titleInput', '');
            this.set('contentInput', '');
        }
    }
});
