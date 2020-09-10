class ApiService {
  constructor(searchQuery = '', page = 1) {
    this.searchQuery = searchQuery;
    this.page = page;
  }

  fetchImages() {
    const apiKey = '18172942-eab38dca32c93699ea5d62826';
    const baseUrl =
      'https://pixabay.com/api/?image_type=photo&orientation=horizontal&';
    const url = `${baseUrl}q=${this.searchQuery}&page=${this.page}&per_page=12&key=${apiKey}`;

    return fetch(url)
      .then(resp => resp.json())
      .then(({ hits }) => {
        this._incremetPage();
        return hits;
      })
      .catch(error => console.log(error));
  }

  _incremetPage() {
    this.page += 1; // вот тут работаю с номером страницы
  }
  resetPage() {
    this.page = 1;
  }
  get query() {
    return this.searchQuery;
  }
  set setQuery(newQuery) {
    this.searchQuery = newQuery; //Вот тут я передаю запрос его из инпута
  }
}

const apiService = new ApiService();
export default apiService;
