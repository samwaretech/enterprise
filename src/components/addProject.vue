<template>
  <div>
    <div class="m-2 p-3 bg-white shadow rounded">
      <i class="far fa-folder"></i> ADD NEW PROJECT
    </div>
    <div class="m-2 p-3 bg-white shadow rounded">
      <div class="row my-3">
        <div class="col">
          <form>
            <div class="form-group">
              <label for="usernmae">Project Tittle</label>
              <input
                type="text"
                class="form-control form-control-sm"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value="fazaio"
              />
            </div>
            <div class="input-group input-group-sm">
              <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">Service</label>
              </div>
              <select class="custom-select" id="inputGroupSelect01">
                <option selected>Choose...</option>
                <option value="1">WEB APP</option>
                <option value="2">APK</option>
                <option value="3">ERP</option>
              </select>
            </div>
            <div class="input-group input-group-sm mt-3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">Status</label>
              </div>
              <select class="custom-select" id="inputGroupSelect01">
                <option selected>In process</option>
                <option value="1">Done</option>
                <option value="2">Bug</option>
                <option value="3">Refund</option>
              </select>
            </div>
          </form>
        </div>
        <div class="col">
          <form>
            <div class="form-group">
              <label for="developer">Developer</label>
              <input
                type="text"
                class="form-control form-control-sm"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="form-group">
              <label for="cost">Cost</label>
              <input
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
              <textarea class="form-control" aria-label="With textarea"></textarea>
            </div>
          </form>
        </div>
      </div>
      <div class="p-2 my-3 text-center">
        <button type="submit" class="btn btn-danger">Save</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>