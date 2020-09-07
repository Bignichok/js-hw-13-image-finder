const apiKey = '18172942-eab38dca32c93699ea5d62826';

export default {
  searchQuery: '',
  page: 1,
  fetchImages() {
    const baseUrl =
      'https://pixabay.com/api/?image_type=photo&orientation=horizontal&';
    const url = `${baseUrl}q=${this.searchQuery}&page=${this.page}&per_page=12&key=${apiKey}`;

    return fetch(url)
      .then(resp => resp.json())
      .then(({ hits }) => {
        this.incremetPage();
        return hits;
      })
      .catch(error => console.log(error));
  },

  incremetPage() {
    this.page += 1;
  },
  resetPage() {
    this.page = 1;
  },
  get query() {
    return this.searchQuery;
  },
  set setQuery(newQuery) {
    this.searchQuery = newQuery;
  },
};
