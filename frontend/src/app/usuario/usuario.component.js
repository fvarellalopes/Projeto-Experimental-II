
// $('.js-data-example-ajax').select2({
//   ajax: {
//   url: 'https://chamadin.herokuapp.com/rest/clientes/',
//     data: function (nome) {
//       var query = {
//         search: params.term,
//         type: 'public'
//       }
//
//       // Query parameters will be ?search=[term]&type=public
//       return query;
//     }
//   }
// });
//


$('#cliente').selectize({
  valueField: 'idCliente', labelField: 'nome', searchField: ['nome'], maxOptions: 10,
  $.ajax({
          url: 'https://chamadin.herokuapp.com/clientes/search/', type: 'POST', dataType: 'json',
          data: { maxresults: 10, "query": query},
          error: function () { callback(); },
          success: function (res) { callback(res); }
        });
});
