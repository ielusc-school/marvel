<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1>Soldadinho de Chumbo</h1>
          <p> Alguns dadosss </p>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <form class="navbar-form navbar-left"
            v-on:submit.prevent>
            <div class="form-group">
              <label for="">Nome</label>
              <input
                v-model="name"
                type="text"
                class="form-control"
                placeholder="name">
            </div>

            <div class="form-group">
              <label for="">Email</label>
              <input
                v-model="email"
                type="email"
                class="form-control"
                placeholder="name">
            </div>

            <div class="form-group">
              <label for="">Idade</label>
              <input
                v-model="age"
                type="number"
                class="form-control"
                placeholder="idade">
            </div>

            <div class="form-group col-md-12">
              <label for="">Status</label>
                <div class="input-group">
                  <span class="input-group-addon">
                    <input type="radio" v-bind:value="statusAtivo" v-model="status">Ativo
                  </span>
                  <span class="input-group-addon ">
                    <input type="radio" v-bind:value="statusInativo" v-model="status"> Inativo
                  </span>
                </div>
              </div>

            <div class="col-md-12">
              <button
                @click="savePerson"
                class="btn btn-primary">Adicionar Pessoa
              </button>

            </div>

          </form>
        </div>
      <div class="col-md-8">
        <table class="table">
          <thead>
            <tr>
              <th>
                'nome'
              </th>
              <th>
                'email'
              </th>
              <th>
                'idade'
              </th>
              <th>
                status
              </th>
            <th>
              ações
            </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="usuario in usuarios" :key="usuario.id">
              <td> {{ usuario.name }}</td>
              <td> {{ usuario.email }}</td>
              <td> {{ usuario.age }}</td>
              <td> {{ usuario.status }}</td>
              <td>
                <button
                  class="btn btn-warning space-margin"
                  @click="removePerson(usuario.id)">
                  Editar
                </button>
                <button
                  class="btn btn-danger space-margin"
                  @click="removePerson(usuario.id)">
                  Remover
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      fields: ['nome', 'email', 'idade', 'status', 'ações'],
      usuarios: [],
      name: '',
      age: '',
      email: '',
      statusAtivo: true,
      statusInativo: false,
      status: false,
    };
  },
  components: {
  },
  created() {
    // this.savePerson();
    this.getPersons();
  },
  methods: {
    getPersons() {
      const url = '/usuarios.json';
      this.$http.get(url)
        .then((response) => {
          this.usuarios = response.data;
          console.log(response.data);
        });
    },
    cleanForm() {
      this.name = '';
      this.age = '';
      this.email = '';
      this.status = false;
    },
    savePerson() {
      const url = '/usuarios.json';
      const person = {
        name: this.name,
        age: this.age,
        email: this.email,
        status: this.status,
      };
      console.log(person);
      this.$http.post(url, person)
        .then((response) => {
          this.cleanForm();
          this.getPersons();
          console.log(response.data);
        }).catch((error) => {
          console.log(error);
        });
    },
    removePerson(id) {
      console.log(id);
      // ...
    },
    updatePerson(id) {
      console.log(id);
      // ...
    },
  },
};
</script>
<style>
 .space-margin {
   margin-left: 10px;
 }

</style>
