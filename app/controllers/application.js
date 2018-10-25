import Controller from '@ember/controller';
import moment from 'moment';


export default Controller.extend({
    name: 'The Ember Blog',
    postToDelete: null,
    editMode: false,
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
        },
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
            this.set('editMode', true);
        },

        updatePost(post){
            post.set('title', this.get('titleInput'));
            post.set('content', this.get('contentInput'));
            post.save();
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
