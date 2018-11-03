import Controller from '@ember/controller';
import { filterBy } from '@ember/object/computed'

export default Controller.extend({
  featuredPosts: filterBy('model', 'featured_post', true)
});
