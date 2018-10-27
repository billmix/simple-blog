import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('admin');
  this.route('posts');
  this.route('post', {path: '/post/:id'});
});

export default Router;
