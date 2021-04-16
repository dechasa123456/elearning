<template >
    <html lang="en"
      dir="ltr">
       <body class=" fixed-layout">
  <div>
    <Header />
<div class="mdk-header-layout__content d-flex flex-column" style="background-color:#fff">
    <Header-v2 />
       <div class="page ">

    <div class="container page__container">
   
        <div class="text-center">
            <a href="#"><img src="assets/images/people/110/guy-8.jpg"
                     alt=""
                     class="rounded-circle"></a>
            <h1 class="h2 mb-0 mt-1">Dr.Stion Name</h1>
            <p class="lead text-muted mb-0">35 years old</p>
            <div class="badge badge-primary ">INSTRUCTOR</div>
            <hr>
            <h5 class="text-muted mb-1">Instructor Rating</h5>
            <div class="rating">
                <i class="material-icons text-success">star</i>
                <i class="material-icons text-success">star</i>
                <i class="material-icons text-success">star</i>
                <i class="material-icons text-muted-light">star_border</i>
                <i class="material-icons text-muted-light">star_border</i>
            </div>
        </div>
        <hr>
        <h4>Courses by Dr.Stion</h4>
        <div class="card-columns">
            <div class="card">
                <div class="card-header">
                    <div class="media align-items-center">
                        <div class="media-left">
                            <nuxt-link to="/detail-about-course">
                                <img src="assets/images/vuejs.png"
                                     alt="Card image cap"
                                     width="100"
                                     class="rounded">
                            </nuxt-link>
                        </div>
                        <div class="media-body">
                            <h4 class="card-title mb-0"><nuxt-link to="/detail-about-course">Learn VueJs</nuxt-link></h4>
                            <div class="rating">
                                <i class="material-icons">star</i>
                                <i class="material-icons">star</i>
                                <i class="material-icons">star</i>
                                <i class="material-icons">star</i>
                                <i class="material-icons">star_border</i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header">
                    <div class="media align-items-center">
                        <div class="media-left">
                            <nuxt-link to="/detail-about-course">
                                <img src="assets/images/nodejs.png"
                                     alt="Card image cap"
                                     width="100"
                                     class="rounded">
                            </nuxt-link>
                        </div>
                        <div class="media-body">
                            <h4 class="card-title mb-0"><nuxt-link to="/detail-about-course">Learn VueJsNpm &amp; Gulp Advanced Workflow</nuxt-link></h4>
                            <div class="rating">
                                <i class="material-icons">star</i>
                                <i class="material-icons">star</i>
                                <i class="material-icons">star</i>
                                <i class="material-icons">star</i>
                                <i class="material-icons">star_border</i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <div class="media align-items-center">
                        <div class="media-left">
                            <nuxt-link to="/detail-about-course">
                                <img src="assets/images/github.png"
                                     alt="Card image cap"
                                     width="100"
                                     class="rounded">
                            </nuxt-link>
                        </div>
                        <div class="media-body">
                            <h4 class="card-title mb-0"><nuxt-link to="/detail-about-course">Github Webhooks for Beginners</nuxt-link></h4>
                            <div class="rating">
                                <i class="material-icons">star</i>
                                <i class="material-icons">star</i>
                                <i class="material-icons">star</i>
                                <i class="material-icons">star</i>
                                <i class="material-icons">star_border</i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header">
                    <div class="media align-items-center">
                        <div class="media-left">
                            <nuxt-link to="/detail-about-course">
                                <img src="assets/images/gulp.png"
                                     alt="Card image cap"
                                     width="100"
                                     class="rounded">
                            </nuxt-link>
                        </div>
                        <div class="media-body">
                            <h4 class="card-title mb-0"><nuxt-link to="/detail-about-course">Gulp &amp; Slush Workflows</nuxt-link></h4>
                            <div class="rating">
                                <i class="material-icons">star</i>
                                <i class="material-icons">star</i>
                                <i class="material-icons">star</i>
                                <i class="material-icons">star</i>
                                <i class="material-icons">star_border</i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container page__container">
        <div class="footer">
            Copyright &copy; 2016 - <a href="http://themeforest.net/item/learnplus-learning-management-application/15287372?ref=mosaicpro">Purchase LearnPlus</a>
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