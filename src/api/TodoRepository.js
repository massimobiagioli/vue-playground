const SERVER_URL = 'https://jsonplaceholder.typicode.com';

class TodoRepository {
  
  async getTodos(page, itemsPerPage) {
    let response = await fetch(`${SERVER_URL}/todos?_start=${(page - 1) * itemsPerPage}&_limit=${itemsPerPage}`);
    let data = await response.json();
    return data; 
  }

  async count() {
    let response = await fetch(`${SERVER_URL}/todos?_start=1&_limit=1`);   
    return response.headers.get('x-total-count');        
  }

}

export default TodoRepository;