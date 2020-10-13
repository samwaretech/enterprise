<template>
  <div>
    <navmenu />
    <div class="main-content">
      <div class="m-2 p-3 bg-white shadow rounded" style="overflow:auto;">
        <div class="float-left">
          <i class="far far fa-folder-open"></i> ASSETS DIGITAL ACCOUNT
        </div>
        <div class="float-right">
          <div v-on:click="show_form_add = true" class="btn btn-danger btn-sm">
            <i class="fas fa-plus"></i> New Assets
          </div>
        </div>
      </div>
      <div v-if="show_form_add" id="addData" class="m-2 p-4 bg-white shadow rounded">
        <div v-if="errors" class="alert alert-danger">{{ errors }}</div>
        <div v-if="response" class="alert alert-success">{{ response }}</div>
        <div class="text-right">
          <div v-on:click="close" class="btn btn-dark btn-sm">
            x
          </div>
        </div>
        <div>
          <form @submit.prevent="doAddAssetsAccount">
            <div class="py-2 px-0 row">
              <div class="col">
                <div class="form-group">
                  <label for="email_register">Email Register</label>
                  <input
                    v-model="data.email_register"
                    type="text"
                    class="form-control form-control-sm"
                    id="email_register"
                  />
                </div>
                <div class="form-group">
                  <label for="password_register">Password Register</label>
                  <input
                    v-model="data.password_register"
                    type="text"
                    class="form-control form-control-sm"
                    id="password_register"
                  />
                </div>
                <div class="form-group">
                  <label for="sites">Sites</label>
                  <input
                    v-model="data.sites"
                    type="text"
                    class="form-control form-control-sm"
                    id="sites"
                  />
                </div>
                <div class="form-group">
                  <label for="note">Note</label>
                  <input
                    v-model="data.note"
                    type="text"
                    class="form-control form-control-sm"
                    id="note"
                  />
                </div>
              </div>
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-danger">Add</button>
            </div>
          </form>
        </div>
      </div>
      <div v-if="show_form_edit" id="edit" class="m-2 p-4 bg-white shadow rounded">
        <div v-if="errors" class="alert alert-danger">{{ errors }}</div>
        <div v-if="response" class="alert alert-success">{{ response }}</div>
        <div class="text-right">
          <div v-on:click="close" class="btn btn-dark btn-sm">
            x
          </div>
        </div>
        <div>
          <form @submit.prevent="doEdit">
            <div class="py-2 px-0 row">
              <div class="col">
                <div class="form-group">
                  <label for="email_register">Email Register</label>
                  <input
                    v-model="data.email_register"
                    type="text"
                    class="form-control form-control-sm"
                    id="email_register"
                  />
                </div>
                <div class="form-group">
                  <label for="password_register">Password Register</label>
                  <input
                    v-model="data.password_register"
                    type="text"
                    class="form-control form-control-sm"
                    id="password_register"
                  />
                </div>
                <div class="form-group">
                  <label for="sites">Sites</label>
                  <input
                    v-model="data.sites"
                    type="text"
                    class="form-control form-control-sm"
                    id="sites"
                  />
                </div>
                <div class="form-group">
                  <label for="note">Note</label>
                  <input
                    v-model="data.note"
                    type="text"
                    class="form-control form-control-sm"
                    id="note"
                  />
                </div>
              </div>
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-danger">Save</button>
            </div>
          </form>
        </div>
      </div>
      <div id="alldata" class="m-2 p-4 bg-white shadow rounded" v-else>
        <div id="alldata">
          <div v-if="response" class="alert alert-success">{{ response }}</div>
          <div>
            <div class="input-group input-group-md flex-nowrap">
              <div class="input-group-prepend">
                <span class="input-group-text" id="addon-wrapping">
                  <i class="fas fa-search"></i>
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                placeholder="Project"
                aria-label="Username"
                aria-describedby="addon-wrapping"
                v-model="find"
              />
            </div>
          </div>
          <div class="my-3">
            <table class="table" style="font-size:12px;">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Email Register</th>
                  <th scope="col">Password</th>
                  <th scope="col">Sites</th>
                  <th scope="col">Note</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="data in datas" :key="data.id_assets_account">
                  <th>{{ data.id_assets_account }}</th>
                  <td>{{ data.email_register }}</td>
                  <td>{{ data.password_register }}</td>
                  <td>{{ data.sites }}</td>
                  <td>{{ data.note }}</td>
                  <td>
                    <button
                      v-on:click="edit(data)"
                      class="m-1 btn btn-sm border"
                    >
                      <i class="fas fa-pencil-alt"></i>
                    </button>
                    <button
                      v-on:click="del(data.id_assets_account)"
                      class="m-1 btn btn-sm border"
                    >
                      <i class="far fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navmenu from "@/components/navmenu.vue";
import { mapState } from "vuex";
export default {
  components: {
    navmenu,
  },
  data() {
    return {
      find: "",
      errors: false,
      data: {
        email_register: '',
        password_register: '',
        sites: '',
        note: ''
      },
      show_form_add: false,
      show_form_edit: false
    };
  },
  computed: {
    ...mapState({
      datas: (state) => state.assets.data,
      response: (state) => state.assets.response,
    }),
  },
  created() {
    this.$store.dispatch('assets/fetch');
  },
  methods: {
    close(){
      this.show_form_edit = false,
      this.show_form_add = false,
      this.data = ''
    },
    del(payload) {
      this.$store.dispatch('assets/del', payload);
    },
    edit(payload) {
      this.show_form_add = false,
      this.show_form_edit = true
      this.data = payload
    },
    doEdit() {
      if (!this.data) {
        this.errors = "Check your data!!";
      } else {
        this.$store.dispatch('assets/update', this.data);
        this.data = ''
        this.show_form_edit = false
      }
    },
    doAddAssetsAccount() {
      if (
        !this.data.email_register ||
        !this.data.password_register ||
        !this.data.sites ||
        !this.data.note
      ) {
        this.errors = "Check your data!";
      } else {
        this.errors = false;
        console.log(this.data)
        this.$store.dispatch('assets/add', this.data)
      }
    },
  },
};
</script>

<style></style>
