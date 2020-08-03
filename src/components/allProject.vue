<template>
  <div>
    <div class="m-2 p-3 bg-white shadow rounded">
      <i class="far far fa-folder-open"></i> PROJECT LIST
    </div>
    <div class="m-2 p-4 bg-white shadow rounded">
      <div class="row">
        <div class="col">
          <div class="input-group input-group-sm flex-nowrap">
            <div class="input-group-prepend">
              <span class="input-group-text" id="addon-wrapping">Find</span>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />
          </div>
        </div>
        <div class="col">
            <button class="btn btn-secondary btn-sm">Latest</button>
        </div>
        <div class="col"></div>
      </div>
      <div class="my-3">
        <table class="table" style="font-size:12px;">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Tittle</th>
              <th scope="col">Service</th>
              <th scope="col">Developer</th>
              <th scope="col">Cost</th>
              <th scope="col">Status</th>
              <th scope="col">Note</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Website sambeer.co</td>
              <td>Web app</td>
              <td>Faza</td>
              <td>Rp 500.000</td>
              <td>in process</td>
              <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla velit blanditiis deserunt magnam, voluptates fugit! Explicabo omnis possimus laudantium illo debitis facere soluta, dicta rem facilis quod voluptates cupiditate eligendi.</td>
              <td>
                <button class="m-1 btn btn-sm border"><i class="fas fa-pencil-alt"></i></button>
                <button class="m-1  btn btn-sm border"><i class="far fa-trash-alt"></i></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>