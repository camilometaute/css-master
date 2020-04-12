<template>
  <div class="content-cards-stripe">
    <section class="cards-stripe">
      <ul class="cards-stripe__head">
        <li class="cards-stripe__head__item" @click.prevent="setActive('html')" :class="{ active: isActive('html')}">HTML 5 <i @click="showAlert()">&#10005;</i></li>
        <li class="cards-stripe__head__item" @click.prevent="setActive('css')" :class="{ active: isActive('css')}">CSS 3 <i @click="showAlert()">&#10005;</i></li>
        <li class="cards-stripe__head__item" @click.prevent="setActive('vuejs')" :class="{ active: isActive('vuejs')}">VueJS <i @click="showAlert()">&#10005;</i></li>
        <li class="cards-stripe__head__item" @click.prevent="setActive('js')" :class="{ active: isActive('js')}">JS <i @click="showAlert()">&#10005;</i></li>
      </ul>
      <div class="cards-stripe__body">
        <div class="cards-stripe__body__code" :class="{'show': isActive('html')}">
<pre><code><span class="neutral-etiquete">&lt</span><span class="html-etiquete">ul</span> <span class="class-etiquete">class</span><span class="neutral-etiquete">=</span><span class="class-names">"here-class-for-ul-element"</span><span class="neutral-etiquete">></span>
<span class="neutral-etiquete">&lt/</span><span class="html-etiquete">ul</span><span class="neutral-etiquete">></span>
</code></pre>
        </div>

        <div class="cards-stripe__body__code" :class="{'show': isActive('css')}">
<pre><code><span class="neutral-etiquete">&lt</span><span class="html-etiquete">li</span> <span class="class-etiquete">class</span><span class="neutral-etiquete">=</span><span class="class-names">"li-element-here"</span><span class="neutral-etiquete">></span>
<span class="neutral-etiquete">&lt/</span><span class="html-etiquete">li</span><span class="neutral-etiquete">></span>
</code></pre>
        </div>

        <div class="cards-stripe__body__code" :class="{'show': isActive('vuejs')}">
<pre><code><span class="neutral-etiquete">&lt</span><span class="html-etiquete">a</span> <span class="class-etiquete">class</span><span class="neutral-etiquete">=</span><span class="class-names">"here-head-class-style"</span><span class="neutral-etiquete">></span>
<span class="neutral-etiquete">&lt/</span><span class="html-etiquete">a</span><span class="neutral-etiquete">></span>
</code></pre>
        </div>

        <div class="cards-stripe__body__code" :class="{'show': isActive('js')}">
<pre><code><span class="neutral-etiquete">&lt</span><span class="html-etiquete">p</span> <span class="class-etiquete">class</span><span class="neutral-etiquete">=</span><span class="class-names">"here-body-class-style"</span><span class="neutral-etiquete">></span>
<span class="neutral-etiquete">&lt/</span><span class="html-etiquete">p</span><span class="neutral-etiquete">></span>
</code></pre>
        </div>
      </div>
      <div class="cards-stripe__alert" :class="{'cards-stripe__alert__active' : showMeAlert}">
        Please don't close my skills Bro!
      </div>
    </section>
  </div>

</template>

<script>
export default {
  name: 'TabsStripe',
  data() {
    return {
      activeTab: 'html',
      showMeAlert: false
    }
  },
  methods: {
    isActive(menuItem) {
      return this.activeTab === menuItem
    },
    setActive(menuItem) {
      this.activeTab = menuItem
      console.log(menuItem);
    },
    showAlert() {
      this.showMeAlert = true;
      setTimeout(() => {
        console.log('remove the class');
        this.showMeAlert = false;
      }, 3000)
    }
  }
};
</script>
