<template>
  <div>
    <navmenu />
    <div class="main-content">
      <div class="m-2 p-3 bg-white shadow rounded" style="overflow:auto;">
        <div class="float-left">
          <i class="far far fa-folder-open"></i> OCR | .img to .txt
        </div>
        <div class="float-right">
          <div v-on:click="show_form_add = true" class="btn btn-danger btn-sm">
            <i class="fas fa-plus"></i> New Assets
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navmenu from "@/components/navmenu.vue";

export default {
  components: {
    navmenu,
  },
};
</script>

<style></style>
