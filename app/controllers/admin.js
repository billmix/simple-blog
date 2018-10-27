import Controller from '@ember/controller';
import moment from 'moment';

export default Controller.extend({
    postToDelete: null,
    postToEdit: null,
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
            this.set('postToEdit', post.get('id'));
            this.set('editMode', true);
        },

        updatePost(postToEdit){
            var contentInput = this.get('contentInput');
            var titleInput = this.get('titleInput')
            var post = this.store.find('post', postToEdit).then(function(post){
                post.set('title', titleInput);
                post.set('content', contentInput);
                post.save();
            });
            this.set('contentInput', '');
            this.set('titleInput', '');
            this.set('editMode', false);
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
