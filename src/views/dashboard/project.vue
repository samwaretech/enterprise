<template>
  <div>
    <navmenu />
    <div class="main-content">
      <div class="m-2 p-3 bg-white shadow rounded" style="overflow:auto;">
        <div class="float-left">
          <i class="far far fa-folder-open"></i> PROJECT LIST
        </div>
        <div class="float-right">
          <div v-on:click="show_form_add = true" class="btn btn-danger btn-sm">
            <i class="fas fa-plus"></i> New Project
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
          <form @submit.prevent="doAddProject">
            <div class="py-2 px-0 row">
              <div class="col">
                <div class="form-group">
                  <label for="tittle">Tittle</label>
                  <input
                    v-model="data.tittle"
                    type="text"
                    class="form-control form-control-sm"
                    id="tittle"
                  />
                </div>
                <div class="form-group">
                  <label for="service">Service</label>
                  <input
                    v-model="data.service"
                    type="text"
                    class="form-control form-control-sm"
                    id="service"
                  />
                </div>
                <div class="form-group">
                  <label for="developer">Developer</label>
                  <input
                    v-model="data.developer"
                    type="text"
                    class="form-control form-control-sm"
                    id="developer"
                  />
                </div>
                <div class="form-group">
                  <label for="project_manage">Project Manager</label>
                  <input
                    v-model="data.project_manager"
                    type="text"
                    class="form-control form-control-sm"
                    id="project_manage"
                  />
                </div>
              </div>
              <div class="col">
                <div class="form-group">
                  <label for="cost">Cost</label>
                  <input
                    v-model="data.cost"
                    type="text"
                    class="form-control form-control-sm"
                    id="cost"
                  />
                </div>
                <div class="form-group">
                  <label for="status">Status</label>
                  <input
                    v-model="data.status"
                    type="text"
                    class="form-control form-control-sm"
                    id="status"
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
      <div v-else-if="show_form_edit" id="editData" class="m-2 p-4 bg-white shadow rounded">
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
                  <label for="tittle">Tittle</label>
                  <input
                    v-model="data.tittle"
                    type="text"
                    class="form-control form-control-sm"
                    id="tittle"
                  />
                </div>
                <div class="form-group">
                  <label for="service">Service</label>
                  <input
                    v-model="data.service"
                    type="text"
                    class="form-control form-control-sm"
                    id="service"
                  />
                </div>
                <div class="form-group">
                  <label for="developer">Developer</label>
                  <input
                    v-model="data.developer"
                    type="text"
                    class="form-control form-control-sm"
                    id="developer"
                  />
                </div>
                <div class="form-group">
                  <label for="project_manage">Project Manager</label>
                  <input
                    v-model="data.project_manager"
                    type="text"
                    class="form-control form-control-sm"
                    id="project_manage"
                  />
                </div>
              </div>
              <div class="col">
                <div class="form-group">
                  <label for="cost">Cost</label>
                  <input
                    v-model="data.cost"
                    type="text"
                    class="form-control form-control-sm"
                    id="cost"
                  />
                </div>
                <div class="form-group">
                  <label for="status">Status</label>
                  <input
                    v-model="data.status"
                    type="text"
                    class="form-control form-control-sm"
                    id="status"
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
                  <th scope="col">Tittle</th>
                  <th scope="col">Service</th>
                  <th scope="col">Developer</th>
                  <th scope="col">Project manager</th>
                  <th scope="col">Cost</th>
                  <th scope="col">Status</th>
                  <th scope="col">Note</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="data in dataAllProject" :key="data.id_project">
                  <th>{{ data.id_project }}</th>
                  <td>{{ data.tittle }}</td>
                  <td>{{ data.service }}</td>
                  <td>{{ data.developer }}</td>
                  <td>{{ data.project_manager }}</td>
                  <td>{{ data.cost }}</td>
                  <td>{{ data.status }}</td>
                  <td>{{ data.note }}</td>
                  <td>
                    <button
                      v-on:click="edit(data)"
                      class="m-1 btn btn-sm border"
                    >
                      <i class="fas fa-pencil-alt"></i>
                    </button>
                    <button
                      v-on:click="hapus(data.id_project)"
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
import {
  allProject,
  deleteProject,
  editProject,
  addProject,
} from "@/store/action.type";
export default {
  components: {
    navmenu,
  },
  data() {
    return {
      find: "",
      errors: false,
      editData: {
        tittle: "",
        service: "",
        status: "",
        developer: "",
        cost: "",
        note: "",
      },
      data: {
        tittle: "",
        service: "",
        status: "",
        project_manager: "",
        cost: "",
        note: "",
        developer: ""
      },
      show_form_add: false,
      show_form_edit: false
    };
  },
  computed: {
    ...mapState({
      dataAllProject: (state) => state.data.data.allProject,
      response: (state) => state.data.response,
    }),
  },
  created() {
    this.$store.dispatch(allProject);
  },
  methods: {
    close(){
      this.show_form_edit = false,
      this.show_form_add = false,
      this.data = ''
    },
    hapus(payload) {
      this.$store.dispatch(deleteProject, payload);
    },
    edit(payload) {
      this.show_form_edit = true
      this.data = payload
    },
    doEdit() {
      if (!this.data) {
        this.errors = "Check your data!!";
      } else {
        this.$store.dispatch(editProject, this.data);
        this.data = ''
        this.show_form_edit = false
      }
    },
    doAddProject() {
      if (
        !this.data.tittle ||
        !this.data.service ||
        !this.data.status ||
        !this.data.developer ||
        !this.data.project_manager ||
        !this.data.cost ||
        !this.data.note
      ) {
        this.errors = "Check your data!";
      } else {
        this.errors = false;
        this.$store.dispatch(addProject, this.data);
      }
    },
  },
};
</script>

<style></style>
