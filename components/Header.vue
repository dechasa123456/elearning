<template>
            <div id="header"
                 class="mdk-header bg-dark js-mdk-header m-0"
                 data-fixed
                 data-effects="waterfall">
                <div class="mdk-header__content">
                    <nav id="default-navbar"
                         class="navbar navbar-expand navbar-dark bg-primary m-0">
                        <div class="container">
                            <nuxt-link to="/"
                               class="navbar-brand">
                                <img src="assets/images/logo/white.svg"
                                     class="mr-2"
                                     alt="LearnPlus" />
                                <span class="d-none d-xs-md-block">LearnPlus</span>
                            </nuxt-link>
                                    <form class="search-form d-none d-md-flex">
                                <input type="text" style="padding:0.5rem 7.75rem;"
                                       class="form-control"
                                       placeholder="What you learn? eg. business">
                                <button class="btn"
                                        type="button"><i class="material-icons font-size-24pt">search</i></button>
                            </form>
                            <div class="flex"></div>
                            <ul class="nav navbar-nav flex-nowrap d-none d-lg-flex">
                               
                                <li class="nav-item">
                                    <nuxt-link class="nav-link"
                                       to="/login">Login</nuxt-link>
                                </li>
                                <li class="nav-item">
                                    <nuxt-link class="nav-link"
                                       to="/sign-up">Sign Up</nuxt-link>
                                </li>
                                <li class="nav-item" style="color:#fff">
                                  <i class="fa fa-cart-plus"></i>
                                </li>
                            </ul>
                            <ul class="nav navbar-nav flex-nowrap">

                                <li class="nav-item dropdown ml-1 ml-md-3">
                                    <a class="nav-link dropdown-toggle"
                                       data-toggle="dropdown"
                                       href="#"
                                       role="button">
                                       <!-- <img src="assets/images/people/50/guy-6.jpg"
                                             alt="Avatar"
                                             class="rounded-circle"
                                             width="40"> -->
                                             </a>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a class="dropdown-item"
                                           href="fixed-student-account-edit.html">
                                            <i class="material-icons">book</i> My Learning
                                        </a>
                                        <a class="dropdown-item"
                                           href="fixed-student-account-edit.html">
                                            <i class="material-icons">edit</i> Edit Account
                                        </a>
                                        <a class="dropdown-item"
                                           href="fixed-student-profile.html">
                                            <i class="material-icons">person</i> Public Profile
                                        </a>
                                        <a class="dropdown-item"
                                           href="guest-login.html">
                                            <i class="material-icons">lock</i> Logout
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
</template>

<script>
export default {

}
</script>

<style>

</style>