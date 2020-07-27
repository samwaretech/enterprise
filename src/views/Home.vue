<template>
  <div class="m-5">
    <div class="p-2">
      <div class="row">
        <div class="col mt-5">
          <b>PT <span class="text-danger">.</span> SAM ENTERPRISE</b> <br>
          <div class="pt-2 text-secondary">
            <span>Selamat datang di layanan Enterprise Resource Planning (ERP) , Platform ini tidak untuk umum dan hanya berlaku bagi Internal SAM ENTERPRISE INDONESIA. 
            </span>
          </div>
        </div>
        <div class="col">
          <div class="px-3 py-5 m-1 bg-white rounded shadow">
            <div class="mb-4 text-secondary">Sign In</div>
            <form>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control form-control-sm"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Username"
                />
                <small
                  id="emailHelp"
                  class="form-text text-muted"
                >We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control form-control-sm"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div class="text-center">
                <button type="submit" class="btn btn-danger btn-block">Login</button>
              </div>
            </form>
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
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home"
  // components: {
  //   HelloWorld
  // }
};
</script>
