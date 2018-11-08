import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';
import { mapBy } from '@ember/object/computed';
import { sum } from '@ember/object/computed';

export default Controller.extend({
  postCount: alias('publishedPosts.length')
});
