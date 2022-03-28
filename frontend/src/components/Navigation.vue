<template>
    <header :class="{'scrolled-nav': scrolledNav}">
        <nav>
            <div class="branding">
                <img src="@/assets/logo.png" alt="">
            </div>
            <ul v-show="!mobile" class="navigation">
                <li><router-link class="link" :to="{ name: ''}">Accueil</router-link></li>
                <li><router-link class="link" :to="{ name: ''}">Activités</router-link></li>
                <li><router-link class="link" :to="{ name: ''}">Profil</router-link></li>
                <li><router-link class="link" :to="{ name: ''}">Dons</router-link></li>
                <li><router-link class="link" :to="{ name: ''}">Contact</router-link></li>
            </ul>
            <div class="icon">
                <i @click="toggleMobileNav" v-show="mobile" class="fa-solid fa-bars" :class="{'icon-active': mobileNav}"></i>
            </div>
            <transition name="mobile-nav">
                <ul v-show="mobileNav" class="dropdown-nav">
                    <li><router-link class="link" :to="{ name: ''}">Accueil</router-link></li>
                    <li><router-link class="link" :to="{ name: ''}">Activités</router-link></li>
                    <li><router-link class="link" :to="{ name: ''}">Profil</router-link></li>
                    <li><router-link class="link" :to="{ name: ''}">Dons</router-link></li>
                    <li><router-link class="link" :to="{ name: ''}">Contact</router-link></li>
                </ul>
            </transition>
        </nav>
    </header>
</template>

<script>
export default {
    name: "navigation",
    data() {
        return {
            scrolledNav: null,
            mobile: null,
            mobileNav: null,
            windowWidth: null,
        };
    },
    created() {
        window.addEventListener("resize", this.checkScreen);
        this.checkScreen
    },
    mounted() {
        window.addEventListener("scroll", this.updateScroll);
    },
    methods: {
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav;
        },

        updateScroll() {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 50) {
                this.scrolledNav = true;
                return;
            }
            this.scrolledNav = false;
        },

        checkScreen() {
            this.windowWidth = window.innerWidth;
            if (this.windowWidth <= 750) {
                this.mobile = true;
                return;
            }
            this.mobile = false;
            this.mobileNav = false;
            return; 
        }
    }
};
</script>

<style lang="scss" scoped>

    header {
        background-color: rgba(0,0,0,0.8);
        z-index: 99;
        width: 100%;
        position: fixed;
        transition: 0.5s ease all;
        color: #fff;

        nav {
            position: relative;
            display: flex;
            flex-direction: row;
            padding: 12px 0;
            transition: 0.5s ease all;
            width: 90%;
            margin: 0 auto;
            @media (min-width: 1140px) {
                max-width: 1140px;
            }

            ul,
            .link {
                font-weight: 500;
                color: #fff;
                list-style: none;
                text-decoration: none;
            }

            li {
                text-transform: uppercase;
                padding: 16px;
                margin-left: 16px;
            }

            .link {
                font-size: 14px;
                transition: 0.5s ease all;
                padding-bottom: 4px;
                border-bottom: 1px solid transparent;

                &:hover {
                    color: #09e669;
                    border-color: #09e669;
                }
            }

            .branding {
                display: flex;
                align-items: center;

                img {
                    width: 50px;
                    transition: 0.5s ease all;
                }
            }

            .navigation {
                display: flex;
                align-items: center;
                flex: 1;
                justify-content: flex-end;
            }
            
            .icon {
                display: flex;
                align-items: center;
                position: absolute;
                top: 0;
                right: 24px;
                height: 100%;

                i {
                    cursor: pointer;
                    font-size: 24px;
                    transition: 0.8s ease all;
                }
            }

            .icon-active {
                transform: rotate(180deg);
            }

            .dropdown-nav {
                display: flex;
                flex-direction: column;
                position: fixed;
                width: 100%;
                max-width: 250px;
                height: 100%;
                background-color: #fff;
                top: 0;
                left: 0;

                li {
                    margin-left: 0;
                    
                    .link {
                        color: #000;

                        &:hover {
                            border-color: #000;
                        }
                    }
                }
            }

            .mobile-nav-enter-active,
            .mobile-nav-leave-active {
                transition: 1s ease all;
            }

            .mobile-nav-enter-from,
            .mobile-nav-leave-to {
                transform: translateX(-250px);
            }

            .mobile-nav-enter-to {
                transform: translateX(0);
            }
        }
    }
    
    .scrolled-nav {
        background-color: #000;
        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.05);

        nav {
            padding: 8px 0;

            .branding {
                img {
                    width: 40px;
                    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.05);
                }
            }
        }
    }

</style>