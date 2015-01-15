var items = document.getItems();
var firstItemLen = items[0].properties.length;
var itemVal = items[0].properties['name'][0].itemValue;


var el = $('p');
console.log('ID', typeof el.data('id'));
console.log('Name', typeof el.data('name'));

/*other form */

var el = document.querySelector('p');
console.log('The Id is', el.dataset['id']);
el.dataset['id'] = 100;
console.log('Now the Id is', el.dataset['id']);