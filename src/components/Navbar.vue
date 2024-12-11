<template>
    <b-navbar class="grademate-navbar" toggleable="lg" type="dark" variant="white">
        <b-navbar-brand class="logo-text" href="/">
            GradeMate 
            <b class="grademate-pop">
                MATH
                <em class="logo-icon mathematics" v-html="mathematicsIcon"></em>
                <em class="logo-icon xRuler" v-html="xRulerIcon"></em>
            </b>
        </b-navbar-brand>
        <b-navbar-nav>
            <b-nav-item class="grademate-nav-link" href="/problems"># Let's do Math</b-nav-item>
        </b-navbar-nav>
    </b-navbar>
</template>

<script>
import xRulerIcon from '@/assets/icons/svg/school-material-ruler.svg'
import mathematicsIcon from '@/assets/icons/svg/mathematics.svg'
export default {
    name: 'Navbar',
    data() {
        return {
            counter: 0,
            xRulerIcon: '',
            mathematicsIcon: ''
        }
    },
    created() {
        this.fetchSvgIcon()
    },
    methods: {
        async fetchSvgIcon() {
            try {
                const xRulerIconResponse = await fetch(xRulerIcon);
                this.xRulerIcon = await xRulerIconResponse.text();
                const mathematicsIconResponse = await fetch(mathematicsIcon);
                this.mathematicsIcon = await mathematicsIconResponse.text();
            } catch (error) {
                console.error('Failed to fetch SVG icon:', error)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/styles/global.scss';

.grademate-navbar {
    border-bottom: 1px solid #1f202420;
    box-shadow: 0 7px 16px #1f202410;
    padding: 1.6rem 1.2rem;
}

.logo-text {
    font: normal normal 700 45px/40px Jua, sans-serif;
    text-shadow: -3px 1px 0 #1f2024;
    -webkit-text-stroke: 1px #1f2024;
    letter-spacing: 0px;
    display: flex;
    gap: 10px;
    align-items: center;

}
.logo-text .grademate-pop {
    font: normal normal bold 30px/40px "Slackey", serif;
    letter-spacing: 0;
    -webkit-text-stroke: 0px;
    text-shadow: none;
    background-color: $secondary-color;
    padding: 10px 15px;
    border-radius: 25px;
    color: #ffffff;
    font-weight: 400;
    transition: all 0.25s ease-in-out;
}
.grademate-pop:hover{
    transform: rotate(-8deg);
}
.grademate-pop .logo-icon{
    position: absolute;
    width: 30px;
    height: 30px;
    transform: translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg);
    transform-style: preserve-3d;
    transition: all 0.1s ease-in-out;
}
.grademate-pop:hover .logo-icon{
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg);
}
.logo-icon.xRuler {
    top: -16px;
    right: -15px;
    width: 28px;
    height: auto;
    rotate: -8deg;
}
.logo-icon.mathematics {
    bottom: -19px;
    width: 32px;
    height: auto;
    left: -9px;
    rotate: 32deg;
}
</style>