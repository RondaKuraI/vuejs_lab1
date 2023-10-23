<template>
    <Main/>
    <Footer/>
</template>

<script>
import Main from '@/Fashion/Main.vue';
import Footer from '@/Fashion/Footer.vue';

export default {
    name: 'Fashion',
    components:{
        Main,
        Footer
    },
    mounted(){
        const scriptPaths = [
            '/fashion/js/jquery.min.js',
            '/fashion/js/bootstrap.bundle.min.js',
            '/fashion/js/Headroom.js',
            '/fashion/js/jQuery.headroom.js',
            '/fashion/js/slick.min.js',
            '/fashion/js/custom.js'
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
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;700;900&display=swap');
    @import '@/assets/fashion/css/bootstrap.min.css';
    @import '@/assets/fashion/css/bootstrap-icons.css';
    @import '@/assets/fashion/css/slick.css';
    @import '@/assets/fashion/css/tooplate-little-fashion.css';
</style>