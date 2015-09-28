import Ember from 'ember';

export default Ember.Component.extend({
  addNewListing: false,
  actions: {
    listingFormShow() {
      this.set('addNewListing', true);
    },
    saveListing() {
      var params = {
        title: this.get('title'),
        seller: this.get('seller'),
        price: this.get('price'),
        description: this.get('description'),
        image: this.get('image'),
        category: this.get('category')
      };
      this.set('addNewListing', false);
      this.sendAction('saveListing', params);
    }
  }
});
