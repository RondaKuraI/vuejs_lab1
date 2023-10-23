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
    },
    mounted(){
        const scriptPaths = [
            '/finter/js/jquery-3.4.1.min.js',
            '/finter/js/bootstrap.js',
            '/finter/js/owl-carousel.min.js',
            '/finter/js/custom.js'
        ];

        const loadScript = (path) =>{
            return new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = path;
                script.onload = resolve;
                script.onerror = reject;
                document.body.appendChild(script);
            });
        };

        const loadScripts = async () =>{
            try{
                await loadScript(scriptPaths[0]); // load jQuuery first
                for(let i = 1; i < scriptPaths.length; i++){
                    await loadScript(scriptPaths[i]);
                }
            } catch (error){
                console.error('Failed to load scripts:', error);
            }
        };
        loadScripts();
    }
}
</script>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
    @import url('https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css');
    @import url('https://cdnjs.cloudflare.com/ajax/libs/jquery-nice-select/1.1.0/css/nice-select.min.css');
    @import '@/assets/finter/css/bootstrap.css';
    @import '@/assets/finter/css/style.css';
    @import '@/assets/finter/css/responsive.css';
</style>