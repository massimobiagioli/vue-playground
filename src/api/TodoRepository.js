const SERVER_URL = 'https://jsonplaceholder.typicode.com';

class TodoRepository {
  async getTodos() {
    let response = await fetch(`${SERVER_URL}/todos`);
    let data = await response.json();
    return data; 
  }
}

export default TodoRepository;