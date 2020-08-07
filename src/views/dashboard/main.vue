<template>
  <div>
    <!-- Side bar -->
    <div class="side">
      <div class="py-3">
        <button class="btn btn-md btn-danger btn-block">Samware.io</button>
      </div>

      <div class="mt-4">
        <span class="text-secondary" style="font-size:10px">Account</span>
        <button
          v-on:click="views(1)"
          class="text-left btn btn-sm btn-light btn-block"
          style="font-size:12px;"
        >
          <i class="mr-1 fas fa-user"></i> My Account
        </button>
        <span class="text-secondary" style="font-size:10px">Project</span>
        <button
          v-on:click="views(2)"
          class="text-left btn btn-sm btn-light btn-block"
          style="font-size:12px;"
        >
          <i class="mr-1 far fa-clone text-danger"></i> All Project
        </button>
        <button
          v-on:click="views(4)"
          class="text-left btn btn-sm btn-light btn-block"
          style="font-size:12px;"
        >
          <i class="mr-1 far fa-plus-square"></i> Add Project
        </button>
        <button v-on:click="views(5)" class="text-left btn btn-sm btn-light btn-block" style="font-size:12px;">
          <i class="mr-1 far fa-folder-open"></i>Documentation
        </button>
        <span class="text-secondary" style="font-size:10px">Marketing</span>
        <button
          v-on:click="views(3)"
          class="text-left btn btn-sm btn-light btn-block"
          style="font-size:12px;"
        >Customers</button>
      </div>
      <div class="py-3 mt-5">
        <button v-on:click="logout()" class="btn btn-sm border btn-block">
          <i class="far fa-arrow-alt-circle-left"></i> Sign Out
        </button>
      </div>
    </div>

    <div class="main-content">
      <myAccount v-if="view === 1" />
      <customer v-else-if="view === 3" />
      <allProject v-else-if="view === 2" />
      <addProject v-else-if="view === 4" />
      <documentation v-else-if="view === 5" />
    </div>
  </div>
</template>

<script>
import myAccount from "@/components/myAccount.vue";
import allProject from "@/components/allProject.vue";
import customer from "@/components/customer.vue";
import addProject from "@/components/addProject.vue";
import documentation from "@/components/documentation.vue";

export default {
  components: {
    myAccount,
    allProject,
    customer,
    addProject,
    documentation
  },
  data() {
    return {
      view: 1
    };
  },
  methods: {
    views(payload) {
      this.view = payload;
    },
    logout() {
      localStorage.removeItem("token");
      this.$router.replace({ name: 'Home' })
    }
  }
};
</script>

<style>
.side {
  background-color: #fff;
  position: fixed;
  height: 100%;
  width: 180px;
  padding: 10px;
}
.main-content {
  margin-left: 180px;
  padding: 10px 10px;
}
</style>