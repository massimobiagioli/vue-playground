<template>
  <div>
    <div v-if="isLoading">
      <span>Loading ...</span>
    </div>
    <div v-else>
      <v-data-table
        :headers="headers"
        :items="todos"
        :options.sync="options"
        :server-items-length="totalTodos"
        :loading="isLoading"
        class="elevation-1"
      ></v-data-table>
    </div>
  </div>
</template>

<script>
import TodoRepository from '../api/TodoRepository';

export default {
  name: "Grid",
  data: () => ({
    isLoading: true,
    todos: {},
    totalTodos: 1000,
    headers: [
      {
        text: 'Id',
        align: 'center',
        sortable: true,
        value: 'id',
      },
      { 
        text: 'Title', 
        align: 'left',
        sortable: true,
        value: 'title' 
      }
    ],
    options: {}
  }),
  watch: {
    options: {
      async handler () {
        //const { sortBy, sortDesc, page, itemsPerPage } = this.options;
        //let repo = new TodoRepository();
        //this.isLoading = true;
        //this.todos = await repo.getTodos();
        //this.isLoading = false;
      },
      deep: true,
    },
  },
  async mounted() {
    let repo = new TodoRepository();
    this.todos = await repo.getTodos();
    this.isLoading = false;
  }
};
</script>