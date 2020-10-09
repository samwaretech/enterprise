<template>
  <div>
    <navmenu />
    <div class="main-content">
      <div class="m-2 p-3 bg-white shadow rounded">
      <i class="far far fa-folder-open"></i> PROJECT LIST
    </div>
    <div class="m-2 p-4 bg-white shadow rounded">
      <div id="alldata" v-if="!editData.tittle && !editData.cost">
        <div v-if="errors" class="alert alert-danger">{{ errors }}</div>
        <div v-if="response" class="alert alert-success">{{ response }}</div>
        <div class="row">
          <div class="col">
            <div class="input-group input-group-sm flex-nowrap">
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
          <div class="col">
            <!-- <button class="btn btn-secondary btn-sm">Latest</button> -->
          </div>
          <div class="col"></div>
        </div>
        <div class="my-3">
          <table class="table" style="font-size:12px;">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Tittle</th>
                <th scope="col">Service</th>
                <th scope="col">Developer</th>
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
                <td>{{ data.cost }}</td>
                <td>{{ data.status }}</td>
                <td>{{ data.note }}</td>
                <td>
                  <button v-on:click="edit(data)" class="m-1 btn btn-sm border">
                    <i class="fas fa-pencil-alt"></i>
                  </button>
                  <button v-on:click="hapus(data.id_project)" class="m-1 btn btn-sm border">
                    <i class="far fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div id="editData" v-else>
        <form @submit.prevent="doEdit">
          <div class="row my-3">
            <div class="col">
              <div class="form-group">
                <label for="usernmae">Project Tittle</label>
                <input
                  v-model="editData.tittle"
                  type="text"
                  class="form-control form-control-sm"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="New project"
                />
              </div>
              <div class="input-group input-group-sm">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="inputGroupSelect01">Service</label>
                </div>
                <select v-model="editData.service" class="custom-select" id="inputGroupSelect01">
                  <option selected>Choose...</option>
                  <option value="WEB APP">WEB APP</option>
                  <option value="APK">APK</option>
                  <option value="ERP">ERP</option>
                </select>
              </div>
              <div class="input-group input-group-sm mt-3">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="inputGroupSelect01">Status</label>
                </div>
                <select v-model="editData.status" class="custom-select" id="inputGroupSelect01">
                  <option selected>In process</option>
                  <option value="done">Done</option>
                  <option value="bug">Bug</option>
                  <option value="refund">Refund</option>
                </select>
              </div>
            </div>
            <div class="col">
              <div class="form-group">
                <label for="developer">Developer</label>
                <input
                  v-model="editData.developer"
                  type="text"
                  class="form-control form-control-sm"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="form-group">
                <label for="cost">Cost</label>
                <input
                  v-model="editData.cost"
                  type="text"
                  class="form-control form-control-sm"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Note</span>
                </div>
                <textarea v-model="editData.note" class="form-control" aria-label="With textarea"></textarea>
              </div>
            </div>
          </div>
          <div class="p-2 my-3 text-center">
            <button type="submit" class="btn btn-danger">Save</button>
          </div>
        </form>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import navmenu from '@/components/navmenu.vue'
import { mapState } from "vuex";
import { allProject, deleteProject, editProject } from "@/store/action.type";
export default {
  components: {
    navmenu
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
        note: ""
      }
    };
  },
  computed: {
    ...mapState({
      dataAllProject: state => state.data.data.allProject,
      response: state => state.data.response
    })
  },
  created() {
    this.$store.dispatch(allProject);
  },
  methods: {
    hapus(payload) {
      this.$store.dispatch(deleteProject, payload);
    },
    edit(payload) {
      this.editData.id_project = payload.id_project;
      this.editData.tittle = payload.tittle;
      this.editData.service = payload.service;
      this.editData.status = payload.status;
      this.editData.developer = payload.developer;
      this.editData.cost = payload.cost;
      this.editData.note = payload.note;
    },
    doEdit() {
      if (
        !this.editData.tittle ||
        !this.editData.service ||
        !this.editData.status ||
        !this.editData.developer ||
        !this.editData.cost ||
        !this.editData.note
      ) {
        this.errors = "Check your data!";
      } else {
        this.$store.dispatch(editProject, this.editData);
        this.editData = false
      }
    }
  }
};
</script>

<style>
</style>