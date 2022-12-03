var arrayTodos = [];

const todoApp = {
  data() {
    return {
      todos: window.arrayTodos,
      newTodo: {
        nome: null,
        active: false,
      },
    };
  },
  methods: {
    addTodo: function () {
      if (this.newTodo.nome) {
        this.todos.push(this.newTodo);
        this.newTodo = {};
        localStorage.setItem("todos", JSON.stringify(this.todos));
      } else {
        alert("prencha o campo para adicionar algo");
      }
    },
    removeAllTodos: function () {
      this.todos = [];
    },
    storeTodos: function () {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
  },
  created() {
    this.todos = localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : this.todos;
  },
};

Vue.createApp(todoApp).mount("#app");
