import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    content: DS.attr('string'),
    post_published: DS.attr('boolean'),
    created_at: DS.attr('number'),
    updated_at: DS.attr('number'),
    featured_image: DS.attr('string', {defaultValue: 'https://picsum.photos/200/150/?random'})
});