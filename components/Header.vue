<template>
  <nav class="floating-bar navbar navbar-expand-lg navbar-light bg-beige navbar-static-top">
    <div class="container px-5 circle">
        <a class="logo-container logo" href="/" ></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 nav">
                <li class="nav-item">
                  <router-link to="/" class="nav-link"> 회사 소개 </router-link>
                </li>
                <li class='divider-vertical' aria-hidden='true'></li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdownBlog" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">솔루션</a>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
                        <li><router-link to="/solutions" class="nav-link"> 솔루션 </router-link></li>
                        <li><a class="dropdown-item" href="/solutions/AIGER">AIGER</a></li>
                        <li><a class="dropdown-item" href="/solutions/EOFFER">EOFFER</a></li>
                        <li><a class="dropdown-item" href="/solutions/EOSAM">EOSAM</a></li>
                    </ul>
                </li>
                <li class='divider-vertical' aria-hidden='true'></li>
                <li class="nav-item"><a class="nav-link" href="/customers">고객 사례</a></li>
                <!-- <li class='divider-vertical' aria-hidden='true'></li>
                <li class="nav-item"><a class="nav-link" href="/contact">Contact</a></li> -->
            </ul>
        </div>
    </div>
</nav>
</template>

<script>
export default {
  name: 'HeaderPage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
}
.logo {

  background-image: url(@/assets/img/EOgramLOGO.png);

  background-size: contain;
  background-repeat: no-repeat;
}
.divider-vertical {
    height: 21px;
    margin: auto 8px;
    border-right: 1px solid #fff;
    border-left: 1px solid #666;
}
.bg-beige {
    background-color: #ebeae4;
}
.floating-bar {
  position: fixed;
  width: 100%;
  z-index: 1;
  background: transparent;
}
.circle {
  background-color: #fff;
  border-radius: 2em;
}
</style>
