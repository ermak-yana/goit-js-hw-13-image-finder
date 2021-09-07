export default class ApiService {
    constructor () {
        this.searchQuery = "";
         this.page = 1; 
    }
    fetchArticles () { 
        return fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=23265358-c42edc99dfdc4b7aade5bc218`)
        .then(r => r.json()).then(data => { this.page +=1;          return data.hits;
        });
         }


    get query () {
        return this.searchQuery;
    }
    set query (newQuery) {
        this.searchQuery = newQuery;
    }
    incrementPage () {
        this.page +=1;   
    }
    resetPage () {
        this.page = 1;
    }
}