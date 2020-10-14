<template>
  <div>
    <!-- Side bar -->
    <div class="side">
      <div class="py-3">
        <button class="btn btn-md btn-danger btn-block">Samware.io</button>
      </div>

      <div class="mt-4">
        <div class="my-2 text-secondary" style="font-size:10px">Account</div>
        <router-link to="/dashboard"
          class="text-left btn btn-sm btn-light btn-block"
          style="font-size:12px;"
        >
          <i class="mr-1 fas fa-user"></i> My Account
        </router-link>
        <div class="mt-3 mb-2 text-secondary" style="font-size:10px">Project</div>
        <router-link to="/dashboard/project"
          class="text-left btn btn-sm btn-light btn-block"
          style="font-size:12px;"
        >
          <i class="mr-1 fas fa-cubes text-danger"></i> All Project
        </router-link>
        <router-link to="/dashboard/assets"
          class="text-left btn btn-sm btn-light btn-block"
          style="font-size:12px;"
        >
          <i class="mr-1 fas fa-briefcase"></i> Assets Digital
        </router-link>
        <div class="mt-3 mb-2 text-secondary" style="font-size:10px">Tools</div>
        <router-link to="/dashboard/tools/ocr"
          class="text-left btn btn-sm btn-light btn-block"
          style="font-size:12px;"
        >
          <i class="mr-1 far fa-file-alt"></i> Ocr Covert
        </router-link>
        <router-link to="/dashboard/tools/mailer"
          class="text-left btn btn-sm btn-light btn-block"
          style="font-size:12px;"
        >
          <i class="mr-1 fas fa-envelope"></i> Bulk mailer
        </router-link>
      </div>
      <div class="py-3 mt-5">
        <button v-on:click="logout()" class="btn btn-sm border btn-block">
          <i class="far fa-arrow-alt-circle-left"></i> Sign Out
        </button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
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
</style>