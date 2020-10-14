<template>
  <div class="m-5">
    <div class="p-2">
      <div class="row">
        <div class="col mt-5">
          <b>
            PT
            <span class="text-danger">.</span> SAM ENTERPRISE
          </b>
          <br />
          <div class="pt-2 text-secondary">
            <span
              ><b>Welcome!</b> Enterprise Resource Planning (ERP) , This
              platform is not for the public and for internal SAM ENTERPRISE
              INDONESIA only.</span
            >
          </div>
        </div>
        <div class="col">
          <div v-if="!register" id="login">
            <div class="px-3 py-5 m-1 bg-white rounded shadow">
              <div class="mb-4 text-secondary text-center">
                <h1>Hello</h1>
                <span>Come on, I know you can do it!</span>
              </div>
              <form id="doSignIn" @submit.prevent="doSignIn">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                    v-model="login.email"
                  />
                  <small id="emailHelp" class="form-text text-muted"
                    >We'll never share your email with anyone else.</small
                  >
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control form-control-sm"
                    id="exampleInputPassword"
                    placeholder="Password"
                    autocomplete="current-pasword"
                    v-model="login.password"
                  />
                  <span class="text-danger" style="font-size:12px">{{
                    response
                  }}</span>
                </div>
                <div class="text-center">
                  <button type="submit" class="btn btn-danger btn-block">
                    Sign In
                  </button>
                </div>
              </form>
            </div>
            <div
              class="text-secondary text-center p-2"
              style="font-size: 12px;"
            >
              Don't have an account? Register
              <a href="#" v-on:click="register = true"
                ><u><i>Here</i></u></a
              >
            </div>
          </div>
          <div v-else id="register">
            <div class="px-3 py-5 m-1 bg-white rounded shadow">
              <form id="signup" @submit.prevent="doSignUp">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    id="email"
                    placeholder="email"
                    v-model="data.email"
                  />
                  <small id="emailHelp" class="form-text text-muted"
                    >We'll never share your email with anyone else.</small
                  >
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    id="username"
                    placeholder="username"
                    v-model="data.username"
                  />
                  <small id="username" class="form-text text-muted"
                    >Please keep remember your username.</small
                  >
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control form-control-sm"
                    id="exampleInputPassword"
                    placeholder="Password"
                    autocomplete="current-pasword"
                    v-model="data.password"
                  />
                  <span class="text-danger" style="font-size:12px">{{
                    response
                  }}</span>
                </div>
                <div class="input-group input-group-sm">
                  <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01"
                      >Part of</label
                    >
                  </div>
                  <select
                    v-model="data.unit"
                    class="custom-select"
                    id="inputGroupSelect01"
                  >
                    <option selected>Choose...</option>
                    <option value="samware">Samware</option>
                    <option value="sambooks">Sambooks</option>
                    <option value="sambeer">Sambeer</option>
                  </select>
                </div>
                <div class="text-center py-2 mt-3">
                  <button type="submit" class="btn btn-danger btn-block">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
            <div
              class="text-secondary text-center p-2"
              style="font-size: 12px;"
            >
              You Have an account? Sign In
              <a href="#" v-on:click.stop="register = false"
                ><i><u>Here</u></i></a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="p-5 text-center text-secondary" style="font-size:12px">
        Powered by Samware.io | 2020
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { signIn } from "../store/action.type";

export default {
  data() {
    return {
      data: {
        email: '',
        username: '',
        password: '',
        unit: ''
      },
      login: {
        email: "",
        password: "",
      },
      register: false
    };
  },
  computed: {
    ...mapState({
      response: (state) => state.user.response,
    }),
  },
  methods: {
    doSignIn: function() {
      if (
        !this.login.email ||
        !this.login.password ||
        !this.validEmail(this.login.email)
      ) {
        console.log("cek data");
      } else {
        this.$store.dispatch(signIn, this.login);
      }
    },
    doSignUp() {
      if (
        !this.data.email ||
        !this.data.username ||
        !this.data.password ||
        !this.data.unit
      ) {
        console.log('cek data')
      }else{
        this.$store.dispatch('signUp', this.data).then(() =>{
          this.register = false
          this.data = ''
        }).catch(err => {
          this.response = err
        })
      }
    },
    validEmail: function(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
};
</script>
