<template>
  <div class="top-box">
    <!-- <Navbar></Navbar> -->
    <router-view></router-view>
    <Toaster></Toaster>
        <Footerbar></Footerbar>
  </div>
</template>

<script>
import store from 'store'
//my zone
import Footerbar from './Footer'

//import Navbar from './Navbar'
import Toaster from './Toaster'

export default {
  store,
 components:{ Footerbar,Toaster }
 //components:{ Navbar,Toaster }
}
</script>

<style>
.main-box {
    padding-left: 0;
    padding-bottom:50px;
}
</style>