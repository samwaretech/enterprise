<template>
  <div>
    <div class="m-2 p-3 bg-white shadow rounded">
      <i class="far fa-folder"></i> ADD NEW PROJECT
    </div>
    <div class="m-2 p-3 bg-white shadow rounded">
      <div v-if="errors" class="alert alert-danger">
        {{ errors }}
      </div>
      <div v-if="response" class="alert alert-success">
        {{ response }}
      </div>
      
      <form @submit.prevent="doAddProject">
        <div class="row my-3">
          <div class="col">
            <div class="form-group">
              <label for="usernmae">Project Tittle</label>
              <input
                v-model="data.tittle"
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
              <select v-model="data.service" class="custom-select" id="inputGroupSelect01">
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
              <select v-model="data.status" class="custom-select" id="inputGroupSelect01">
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
                v-model="data.developer"
                type="text"
                class="form-control form-control-sm"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="form-group">
              <label for="cost">Cost</label>
              <input
                v-model="data.cost"
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
              <textarea v-model="data.note" class="form-control" aria-label="With textarea"></textarea>
            </div>
          </div>
        </div>
        <div class="p-2 my-3 text-center">
          <button type="submit" class="btn btn-danger">Save</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { addProject } from '../store/action.type'

export default {
  data() {
    return {
      data: {
        tittle: "",
        service: "",
        status: "",
        developer: "",
        cost: "",
        note: ""
      },
      errors: false
    }
  },
  computed: {
    ...mapState({
      response: state => state.data.response
    })
  },
  methods: {
    doAddProject() {
      if (!this.data.tittle || !this.data.service || !this.data.status || !this.data.developer || !this.data.cost || !this.data.note) {
        this.errors = 'Check your data!'
      }else{
        this.errors = false
        this.$store.dispatch(addProject, this.data);
      }
    }
  }
};
</script>

<style>
</style>