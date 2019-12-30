<template>
  <div>
    <div v-if="isLoading">
      <span>Loading ...</span>
    </div>
    <div v-else>
      <span>Todos: </span>
      <div><pre>{{todos}}</pre></div>
    </div>
  </div>
</template>

<script>
import TodoRepository from '../api/TodoRepository';

export default {
  name: "Grid",
  data: () => ({
    isLoading: true,
    todos: {}
  }),
  async mounted() {
    let repo = new TodoRepository();
    this.todos = await repo.getTodos();
    this.isLoading = false;
  }
};
</script>