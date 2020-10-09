<template>
  <div>
    <div class="m-2 p-3 bg-white shadow rounded">
      <i class="far fa-user"></i> MY ACCOUNT
    </div>
    <div class="m-2 p-3 bg-white shadow rounded">
      <div class="row my-2">
        <div class="col">
          <form>
            <div class="form-group">
              <label for="username">Username</label>
              <input
                type="text"
                class="form-control form-control-sm"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                v-bind:value='user.username'
                readonly
              />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control form-control-sm"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value="fazaio"
                readonly
              />
            </div>
          </form>
        </div>
        <div class="col">
          <form>
            <div class="form-group">
              <label for="usernmae">Email</label>
              <input
                type="text"
                class="form-control form-control-sm"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                v-bind:value='user.email'
                readonly
              />
            </div>
          </form>
          <div>
            Anak Perusahaan:
            <br />
            <button class="btn btn-danger">{{ user.unit }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { fetchUser } from '../store/action.type'

export default {
  computed: {
    ...mapState({
      user: state => state.user.data
    })
  },
  created(){
    this.$store.dispatch(fetchUser)
  },
  
}
</script>

<style>
</style>