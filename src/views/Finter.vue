<template>
    <div>
        <Hero/>
        <Section/>
    </div>
</template>

<script>
import Hero from '@/Finter/Hero.vue';
import Section from '@/Finter/Section.vue';

export default {
    name: 'Finter',
    components: {
        Hero,
        Section
    }
}
</script>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
    @import url('https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css');
    @import url('https://cdnjs.cloudflare.com/ajax/libs/jquery-nice-select/1.1.0/css/nice-select.min.css');
    @import '@/assets/finter/css/style.css';
    @import '@/assets/finter/css/responsive.css';
</style>