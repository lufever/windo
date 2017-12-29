<template>
<div>
 <router-view></router-view>
 <Footerbar></Footerbar>
</div>
</template>

<script>

import Footerbar from './Footer'


export default { 
 components:{ Footerbar },
}
</script>