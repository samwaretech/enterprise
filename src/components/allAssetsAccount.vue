<template>
  <div>
    <div class="m-2 p-3 bg-white shadow rounded">
      <i class="far far fa-folder-open"></i> PROJECT LIST
    </div>
    <div class="m-2 p-4 bg-white shadow rounded">
      <div id="alldata" v-if="true">
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
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Site Register</th>
                <th scope="col">Note</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="data in dataAllAccount" :key="data.id_project">
                <th>{{ data.id_assets_account }}</th>
                <td>{{ data.email_register }}</td>
                <td>{{ data.password_register }}</td>
                <td>{{ data.sites }}</td>
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
</template>

<script>
import { mapState } from "vuex";
import { all_assets_account } from "../store/action.type";
export default {
  data() {
    return {
      find: "",
      errors: false,
      editData: {
          username_register: '',
          password_register: '',
          sites: '',
          note: ''
      },
    };
  },
  computed: {
    ...mapState({
      dataAllAccount: (state) => state.data.data.allAssetsAccount,
      response: (state) => state.data.response,
    }),
  },
  created() {
    this.$store.dispatch(all_assets_account);
  },
};
</script>

<style>
</style>