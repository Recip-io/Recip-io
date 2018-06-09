import React from 'react';

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


const SearchYummly = (props) => (
  <div className="search-bar">

  </div>
);

window.searchYummly = searchYummly;

export default SearchYummly;

    // <form method="POST" onSubmit={}>
    //   <input type="text" placeholder="Search Yummly" id="searchyummly" name="recipeName" value={} onChange={}></input>
    // </form>