import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
  delete(question){
    if(confirm('Are you sure you want to delete this question?')){
      this.sendAction('destroyQuestion', question);
    }
  },
  update(question, params){
    this.sendAction('update', question, params);
  },
  destroyAnswer(answer){
    this.sendAction('destroyAnswer', answer);
  },
  upvoteAnswer(answer){
    this.sendAction('upvoteAnswer',answer);
  },
  downvoteAnswer(answer){
    this.sendAction('downvoteAnswer',answer);
  }
}
});
