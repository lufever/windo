<template>
	<footer>
			<div class="footer-container">
				<ul>
					<li><router-link  :to="{path: '/project' }"  class="link-title"><i class="fa fa-qq"></i></router-link> </li>
					<li><router-link  :to="{path: '/department' }"  class="link-title"><i class="fa fa-github"></i></router-link></li>
					<li><router-link  :to="{path: '/dayreport' }"  class="link-title"><i class="fa fa-weixin"></i></router-link> </li>
				</ul>
			</div>
			</footer>
</template>

<script>
	export default {
		
	}
</script>

<style>
footer {
		width:100%;
    display: block !important;
    position: fixed;
		bottom:0;
		    background-color: white;
		border: none;
    box-shadow: 4px 0 4px #eee;

}
</style>