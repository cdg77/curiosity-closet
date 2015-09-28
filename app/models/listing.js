import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  seller: DS.attr(),
  price: DS.attr(),
  description: DS.attr(),
  image: DS.attr(),
  category: DS.belongsTo('category', { async: true}),
  date_added: DS.attr()
});
