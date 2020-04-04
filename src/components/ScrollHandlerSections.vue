<template>
    <section class="scroll-hadler-sections">
      <div id="section_1" class="scroll-hadler-sections__container">
        {{scrollPosition}}
      </div>
      <div id="section_2" class="scroll-hadler-sections__container">

      </div>
      <div id="section_3" class="scroll-hadler-sections__container">

      </div>
      <div id="section_4" class="scroll-hadler-sections__container">

      </div>
      <div id="section_5" class="scroll-hadler-sections__container">

      </div>
      <div id="section_6" class="scroll-hadler-sections__container">

      </div>
      <div id="section_7" class="scroll-hadler-sections__container">

      </div>
    </section>
</template>

<script>
export default {
  name: 'ScrollHandlerSections',
  data() {
    return {
      scrollPosition: 'Scroll is in position 1'
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll (e) {
      const fromTop = window.scrollY + 220
      const navItems = document.querySelectorAll('.scroll-hadler-sections__container')
      console.log('fromTop AFUERA <<<<<<<<<<<:', fromTop);
      
      navItems.forEach(link => {
        let section = document.getElementById(`${link.id}`);
        // console.log('______________', `${link.id}`, '______________');
        //
        console.log('section.offsetTop ///////////', section.offsetTop);
        // console.log('fromTop -----:', section.offsetTop);
        console.log('section offset Height |||||||||||', section.offsetHeight);
        if (section) {
          if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
          ) {
            link.classList.add('scroll-hadler-sections__container__orange')
            // link.classList.add("active")
          } else {
            link.classList.remove('scroll-hadler-sections__container__orange')
          }
        }
      })
    }
  }
};
</script>
