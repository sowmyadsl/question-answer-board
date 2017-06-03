import DS from 'ember-data';

export default DS.Model.extend({
content: DS.attr(),
author: DS.attr(),
upvotes: DS.attr(),
downvotes: DS.attr(),
question: DS.belongsTo('question', {async: true }),
});
