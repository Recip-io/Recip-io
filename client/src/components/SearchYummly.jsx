
var searchYummly = ({key, query, max = 5}, callback) => {
  $.get('https://api.yummly.com/v1/api/recipes', {
    part: 'snippet',
    key: key,
    q: query,
    requirePictures: true,
    maxResult: 10,
    // type: 'video',
    // videoEmbeddable: 'true'
  })
  .done(({items}) => {
    if (callback) {
      callback(items);
    }
  })
  .fail(({responseJSON}) => {
    responseJSON.error.errors.forEach((err) =>
      console.error(err)
    );
  });
};


window.searchYummly = searchYummly;
