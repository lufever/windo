<template>
  <div class="article-container">    
    <h1 class="title" hidden>{{ articleDetail.reports_id }}</h1>
    <!-- <div class="counts">
      <span class="views-count">阅读{{articleDetail.visit_count}}</span>
      <span class="comments-count">评论{{articleDetail.comment_count}}</span>
      <span class="likes-count">喜欢{{articleDetail.like_count}}</span>
    </div>  -->
  <textarea v-html="articleDetail.reports"> </div>
   </textarea>
  </div>
</template>
<script>
export default {
  props:['articleDetail']

}
</script>