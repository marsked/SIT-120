<script setup>
import Welcome from '../components/Welcome.vue'
import Menu from '../components/Menu.vue'
</script>
    
<template>
    <div class="home">

        <header>
            <img alt="Vue logo" class="logo" src="/src\assets\chess_clock_large.png" width="125" height="125" />

            <div class="wrapper">
                <Welcome msg="Welcome To Timer Library!" />
            </div>
        </header>

        <main>
            <Menu />
        </main>
    </div>
</template>
    
<style scoped>
.home {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

header {
    text-align: center;
    width: auto;
    ;
}


main {
    margin-left: 100px;
}

.logo {
    margin: 0 auto 2rem;
    width: 155px;
    height: 155px;
}

/* medium screen */
@media (max-width: 1024px) {

    .home {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap
    }

    main {
        margin-left: 30px;
    }

    .logo {
        margin: 0 auto 2rem;
        width: 125px;
        height: 125px;
    }
}

/* small screen */
@media (max-width: 500px) {

    .logo {
        margin: 0 auto 0.5rem;
        width: 50px;
        height: 50px;
    }

}
</style>