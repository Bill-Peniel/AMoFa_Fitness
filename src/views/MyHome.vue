<template>
    <body data-spy="scroll" data-target=".navbar-default" data-offset="100">
        <!--Preloader-->
        <div id="preloader">
            <div id="pre-status">
                <div class="preload-placeholder"></div>
            </div>
        </div>

        <MyNav/>
            <SlidderStart/>
            <MyAbout/>
            <MyServices/>
            <MyFeature/>
            <MyPortfolio/>
            
            <MyTeam/>
            <MyTestimonial/>
            
            <MyClientSection/>
            <MyContact/>
            <MyFooter/>
            <BackToTop/>

    </body>
</template>

<script>
import BackToTop from '@/components/BackToTop.vue';
import MyAbout from '@/components/MyAbout.vue';
import MyClientSection from '@/components/MyClientSection.vue';
import MyContact from '@/components/MyContact.vue';
import MyFeature from '@/components/MyFeature.vue';
import MyFooter from '@/components/MyFooter.vue';
import MyNav from '@/components/MyNav.vue';
import MyPortfolio from '@/components/MyPortfolio.vue';
import MyServices from '@/components/MyServices.vue';
import MyTeam from '@/components/MyTeam.vue';
import MyTestimonial from '@/components/MyTestimonial.vue';
import SlidderStart from '@/components/SlidderStart.vue';


export default {
    name: 'MyHome',
    components: {
        MyNav,
        SlidderStart,
        MyAbout,
        MyClientSection,
        MyContact,
        MyFeature,
        MyFooter,
        MyPortfolio,
        MyServices,
        MyTeam,
        MyTestimonial,
        BackToTop
    }
}
</script>

<style >
</style>