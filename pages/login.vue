<template >
    <html lang="en"
      dir="ltr">
<body class=" fixed-layout">
    <div>
    <Header />
    <div class="mdk-header-layout__content d-flex flex-column" style="background-color:#fff">
    <Header-v2 />
        <div class="d-flex align-items-center"
             style="min-height: 100vh">
            <div class="col-sm-8 col-md-6 col-lg-4 mx-auto"
                 style="min-width: 300px;">
                <div class="text-center mt-5 mb-1">
                    <div class="avatar avatar-lg">
                        <img src="assets/images/logo/primary.svg"
                             class="avatar-img rounded-circle"
                             alt="LearnPlus" />
                    </div>
                </div>
                <div class="d-flex justify-content-center mb-5 navbar-light">
                    <a href="student-dashboard.html"
                       class="navbar-brand m-0">LearnPlus</a>
                </div>
                <div class="card navbar-shadow">
                    <div class="card-header text-center">
                        <h4 class="card-title">Login</h4>
                        <p class="card-subtitle">Access your account</p>
                    </div>
                    <div class="card-body">

                        <form action="#"
                              novalidate
                              method="get">
                            <div class="form-group">
                                <label class="form-label"
                                       for="email">Your email address:</label>
                                <div class="input-group input-group-merge">
                                    <input id="email"
                                           type="email"
                                           required=""
                                           class="form-control form-control-prepended"
                                           placeholder="Your email address">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <span class="far fa-envelope"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="form-label"
                                       for="password">Your password:</label>
                                <div class="input-group input-group-merge">
                                    <input id="password"
                                           type="password"
                                           required=""
                                           class="form-control form-control-prepended"
                                           placeholder="Your password">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <span class="fa fa-key"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group ">
                                <button type="submit"
                                        class="btn btn-primary btn-block">Login</button>
                            </div>
                            <div class="text-center">
                                <nuxt-link to="/forgot-login"
                                   class="text-black-70"
                                   style="text-decoration: underline;">Forgot Password?</nuxt-link>
                            </div>
                        </form>
                    </div>
                    <div class="card-footer text-center text-black-50">
                        Not yet a student? <nuxt-link to="/sign-up">Sign Up</nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </div>
</body>
    </html>
</template>

<script>
export default {

}
</script>

<style>

</style>