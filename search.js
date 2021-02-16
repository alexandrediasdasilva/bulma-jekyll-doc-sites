(function () {

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');

      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }

  var searchTerm = getQueryVariable('query');

  function displaySearchResults(results, store) {
    var searchResults = document.getElementById('search-results');
    document.getElementById('search-count').innerHTML = results.length + ' résultats trouvés pour «&nbsp;' + searchTerm + '&nbsp;»';

    if (results.length) { // Are there any results?
      var appendString = '';

      for (var i = 0; i < results.length; i++) {  // Iterate over the results
        var item = store[results[i].ref];
        appendString += '<li class="mb-5"><a href="' + item.url + '">' + item.title + '</a>';
        appendString += '<p>' + item.content.substring(0, 150) + '...</p>';
        appendString += '<a href="' + item.collection_url + '" class="is-size-7 has-text-grey is-uppercase">' + item.collection + '</a></li>';
      }

      searchResults.innerHTML = appendString;
    } else {
      searchResults.innerHTML = '<div class="content"><p>Désolés ! Nous avons cherché partout, mais nous n’avons pas pu trouver <span class="has-text-weight-bold">' + searchTerm +'</span>. 💔 🔍 </p><p>Essayez une recherche différente ou parcourez nos rubriques d’aide.</p></div>';
    }
  }

  if (searchTerm) {
    document.getElementById('search-box').setAttribute("value", searchTerm);

    // Initalize lunr with the fields it will be searching on. I've given title
    // a boost of 10 to indicate matches on this field are more important.
    var idx = lunr(function () {
      this.field('id');
      this.field('title', { boost: 10 });
      this.field('collection');
      this.field('content');

      for (var key in window.store) { // Add the data to lunr
        this.add({
          'id': key,
          'title': window.store[key].title,
          'collection': window.store[key].collection,
          'content': window.store[key].content
        });
      }
    });
    var results = idx.search(searchTerm); // Get lunr to perform a search
    displaySearchResults(results, window.store); // We'll write this in the next section
  } else {
    location.replace("/")
  }
})();