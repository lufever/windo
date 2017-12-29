<template>
 <div>
    <router-view></router-view> 
    <Toaster></Toaster>
</div>
</template>

<script>
import Toaster from '@/components/Toaster'
export default {
 components:{ Toaster },
}
</script>

 

 
