<template>
  <section class="grid-articles-content">
    <div class="head-title">
      <h1>Articles</h1>
      <h4>Read our vision</h4>
    </div>
    <div class="grid-row">
      <article v-bind:class="['grid-article', article.gridClass]" v-for="(article, index) in articles">
        <div class="grid-article__content">
          <span>{{article.title}} </span>
          <h4>{{article.subtitle}}</h4>
        </div>
        <img class="grid-article__img" :src="article.imgSrc" alt="">
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'GridsArticlesContent',
  data() {
    return {
      articles: [
        { title: 'About Us1', subtitle: 'Interview with Sara', imgSrc: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', gridClass: 'grid-span-2' },
        { title: 'About Us2', subtitle: 'Interview with Sara', imgSrc: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', gridClass: 'grid-span-1' },
        { title: 'About Us3', subtitle: 'Interview with Sara', imgSrc: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', gridClass: 'grid-span-1' },
        { title: 'About Us3', subtitle: 'Interview with Sara', imgSrc: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', gridClass: 'grid-span-1' },
        { title: 'About Us3', subtitle: 'Interview with Sara', imgSrc: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', gridClass: 'grid-span-1' },
        { title: 'About Us3', subtitle: 'Interview with Sara', imgSrc: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', gridClass: 'grid-span-2' },

      ]
    }
  }
};
</script>
