import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('admin', function(){
    this.route('edit', {path: ':id'});
    this.route('create');
  });
  this.route('posts', {path: '/'});
  this.route('featured');
  this.route('post', {path: '/posts/post/:id'});
});

export default Router;
