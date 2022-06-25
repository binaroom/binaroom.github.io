<template>
  <section class="binaroom">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="mt-5 mb-5" data-aos="fade-up">
            <h1>Size Chart.</h1>
            <div class="mb-3 mt-3">
              <table class="table table-bordered table-striped text-center">
                <thead>
                  <tr>
                    <th></th>
                    <th>S</th>
                    <th>M</th>
                    <th>L</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>LD</th>
                    <th>95</th>
                    <th>97</th>
                    <th>100</th>
                  </tr>
                  <tr>
                    <th>PB</th>
                    <th>125</th>
                    <th>130</th>
                    <th>135</th>
                  </tr>
                </tbody>
              </table>
              <em>*dalam satuan centimeter (cm)</em>
              <!-- <img src="https://dsryzuznqufyhlnodxyi.supabase.co/storage/v1/object/sign/binarry/gamis/size-gamis?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJiaW5hcnJ5L2dhbWlzL3NpemUtZ2FtaXMiLCJpYXQiOjE2NTU0MzAxNzcsImV4cCI6MTk3MDc5MDE3N30.Y4mLJDdhXdn19whf6GBFL_axHAgiVsy2NjFUaQHdhdo" alt="size" class="size" data-aos="zoom-in" data-aos-duration="800" /> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      text: ``
    }
  }
}
</script>

<style scoped>
table {
  font-size: 3vh;
}
.binaroom {
  width: 100%;
  height: auto;
}
.binaroom .size {
  width: 37vh;
}
.binaroom .logo2 {
  width: 30vmax;
}
.strong {
  font-weight: bold;
  border-bottom: 2px dotted #515151;
}
</style>
