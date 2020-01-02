<template>
  <div>    
    <v-data-table
      :headers="headers"
      :items="todos"
      :options.sync="options"
      :server-items-length="totalTodos"
      :loading="loading"
      class="elevation-1"
    ></v-data-table>    
  </div>
</template>

<script>
import TodoRepository from '../api/TodoRepository';

export default {
  name: "Grid",
  data: () => ({
    loading: true,    
    todos: [],
    totalTodos: 0,
    headers: [
      {
        text: 'Id',
        align: 'center',
        sortable: false,
        value: 'id',
      },
      { 
        text: 'Title', 
        align: 'left',
        sortable: false,
        value: 'title' 
      }
    ],
    options: {}
  }),
  methods: {
    async loadGrid(page, itemsPerPage) {            
      this.loading = true;
      let repo = new TodoRepository();
      this.totalTodos = await repo.count();  
      this.todos = await repo.getTodos(page, itemsPerPage);                
      this.loading = false;     
    }
  },
  watch: {
    options: {
      async handler () {        
        const { page, itemsPerPage } = this.options;                        
        await this.loadGrid(page, itemsPerPage);                     
      },
      deep: true,
    },
  },
  async mounted() {        
    await this.loadGrid(1, 10);    
  }
};
</script>