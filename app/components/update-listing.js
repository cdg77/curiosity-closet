import Ember from 'ember';

export default Ember.Component.extend({
  updateListingForm: false,

  actions: {
    updateListingForm(){
      this.set('updateListingForm', true);
    },
    update(listing) {
      var params= {
        title: this.get('title'),
        seller: this.get('seller'),
        price: this.get('price'),
        description: this.get('description'),
        image: this.get('image'),
        category: this.get('category')
      };
      this.set('updateListingForm', false),
      this.sendAction('update', listing, params)
    }
  }
});
