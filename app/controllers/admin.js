import Controller from '@ember/controller';
import moment from 'moment';

export default Controller.extend({
    postToDelete: null,
    postToEdit: null,
    editMode: false,
    actions:{
        postToDraft(post){
            post.set('post_published', false);
            post.save();
        },
        postToPublished(post){
            post.set('post_published', true);
            post.save();
        },

        editPost(post){
            this.set('titleInput', post.get('title'));
            this.set('contentInput', post.get('content'));
            this.set('postToEdit', post.get('id'));
            this.set('editMode', true);
        },       

        setDeletePost(post){
            post.set('postToDelete', post);
        },
        cancelDeletePost(post){
            post.set('postToDelete', null);
        },
        deletePost(post){
            return post.destroyRecord('postToDelete', post);
            this.set('postToDelete', null);
        }
    }
});
