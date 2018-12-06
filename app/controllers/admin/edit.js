import Controller from '@ember/controller';
import $ from 'jquery';

export default Controller.extend({

    actions:{
        updatePost(model){
            if(this.get('featured_post',true)){
              model.set('featured_post', true);
            }
            this.get('model').save();
            this.set('editMode', false);

            //destroy the Modal
            $("body").removeClass('modal-open');
            $(".modal-backdrop").remove();

            this.transitionToRoute('admin');
        },
        cancelEdit(){
            this.transitionToRoute('admin');
            this.set('editMode', false);
        }

    }
});
