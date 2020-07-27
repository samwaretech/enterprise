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
              <label for="usernmae">Usernmae</label>
              <input
                type="text"
                class="form-control form-control-sm"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value="fazaio"
                readonly
              />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control form-control-sm"
                id="exampleInputPassword1"
                placeholder="Password"
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
                value="faza6028@gmail.com"
                readonly
              />
            </div>
          </form>
          <div>
            Anak Perusahaan:
            <br />
            <button class="btn btn-danger">Samware Tech</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>