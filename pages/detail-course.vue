<template>
<html lang="en"
      dir="ltr">
<body class=" fixed-layout">
  <div>
    <Header />
<div class="mdk-header-layout__content d-flex flex-column" style="background-color:#fff">
    <Header-v2 />
        <div class="page ">

                    <div class="container page__container">
                 
                        <div class="media mb-headings align-items-center">
                            <div class="media-body">
                                <h1 class="h2">{{$nuxt.$route.name}} course</h1>
                            </div>
                            <div class="media-right">
                                <nuxt-link to="/sign-up"
                                   class="btn btn-success">
                                    Free Demo
                                </nuxt-link>
                            </div>
                        </div>
                               <div class="row">
                           <div class="col-md-3">
                                                <nuxt-link :to="{name:'detail-about-course',params: {img:'vuejs.png'}}"
                                                   class="card my-3 text-body text-decoration-0">
                                                    <img src="assets/images/vuejs.png"
                                                         alt="image"
                                                         class="card-img-top">
                                                    <span class="card-footer d-flex flex-column">
                                                        <strong>Practical leadership skill</strong>
                                                        <span class="text-black-70">How to lead your business and your idea?.</span>
                                                        <span class="text-dark"><i class="fa fa-dollar-sign"></i> 10</span>
                                                    </span>
                                          </nuxt-link>

                                        <div class="d-flex align-items-center">
                                           <nuxt-link :to="{name:'detail-about-course',params: {img:'vuejs.png'}}"
                                               class="text-muted d-flex align-items-center text-decoration-0"><i class="material-icons mr-1"
                                                   style="font-size: inherit;">favorite_border</i> 156</nuxt-link>
                                            <nuxt-link :to="{name:'detail-about-course',params: {img:'vuejs.png'}}"
                                               class="text-muted d-flex align-items-center text-decoration-0 ml-3"><i class="material-icons mr-1"
                                                   style="font-size: inherit;">thumb_up</i> 351</nuxt-link>
                                        </div>
                                    </div>
                                     <div class="col-md-3">
                                          <nuxt-link :to="{name:'detail-about-course',params: {img:'vuejs.png'}}"
                                                   class="card my-3 text-body text-decoration-0">
                                                    <img src="assets/images/vuejs.png"
                                                         alt="image"
                                                         class="card-img-top">
                                                    <span class="card-footer d-flex flex-column">
                                                        <strong>Business intelegence analysis course</strong>
                                                        <span class="text-black-70">Excellent business course as..</span>
                                                        <span class="text-dark"><i class="fa fa-dollar-sign"></i> 15</span>
                                                    </span>
                                          </nuxt-link>

                                        <div class="d-flex align-items-center">
                                            <a href="#"
                                               class="text-muted d-flex align-items-center text-decoration-0"><i class="material-icons mr-1"
                                                   style="font-size: inherit;">favorite_border</i> 156</a>
                                            <a href="#"
                                               class="text-muted d-flex align-items-center text-decoration-0 ml-3"><i class="material-icons mr-1"
                                                   style="font-size: inherit;">thumb_up</i> 351</a>
                                        </div>
                                    </div>
                                     <div class="col-md-3">
                                         <a href="#"
                                                   class="card my-3 text-body text-decoration-0">
                                                    <img src="assets/images/vuejs.png"
                                                         alt="image"
                                                         class="card-img-top">
                                                    <span class="card-footer d-flex flex-column">
                                                        <strong>Business intelegence analysis course</strong>
                                                        <span class="text-black-70">Excellent business course as..</span>
                                                        <span class="text-dark"><i class="fa fa-dollar-sign"></i> 35</span>
                                                    </span>
                                                </a>

                                        <div class="d-flex align-items-center">
                                            <a href="#"
                                               class="text-muted d-flex align-items-center text-decoration-0"><i class="material-icons mr-1"
                                                   style="font-size: inherit;">favorite_border</i> 156</a>
                                            <a href="#"
                                               class="text-muted d-flex align-items-center text-decoration-0 ml-3"><i class="material-icons mr-1"
                                                   style="font-size: inherit;">thumb_up</i> 351</a>
                                        </div>
                                    </div>
                                     <div class="col-md-3">
                                          <a href="#"
                                                   class="card my-3 text-body text-decoration-0">
                                                    <img src="assets/images/vuejs.png"
                                                         alt="image"
                                                         class="card-img-top">
                                                    <span class="card-footer d-flex flex-column">
                                                        <strong>Learn How To Operate a JVC Camera</strong>
                                                        <span class="text-black-70">Lorem ipsum dolor adipisicing..</span>
                                                        <span class="text-dark"><i class="fa fa-dollar-sign"></i> 30</span>
                                                    </span>
                                                </a>

                                        <div class="d-flex align-items-center">
                                            <a href="#"
                                               class="text-muted d-flex align-items-center text-decoration-0"><i class="material-icons mr-1"
                                                   style="font-size: inherit;">favorite_border</i> 156</a>
                                            <a href="#"
                                               class="text-muted d-flex align-items-center text-decoration-0 ml-3"><i class="material-icons mr-1"
                                                   style="font-size: inherit;">thumb_up</i> 351</a>
                                        </div>
                                    </div>
                                </div>

                        
                           <div class="row">
                           <div class="col-md-3">
                                          <a href="#"
                                                   class="card my-3 text-body text-decoration-0">
                                                    <img src="assets/images/vuejs.png"
                                                         alt="image"
                                                         class="card-img-top">
                                                    <span class="card-footer d-flex flex-column">
                                                        <strong>Basic computer skil</strong>
                                                        <span class="text-black-70">The most important for the technology...</span>
                                                        <span class="text-dark"><i class="fa fa-dollar-sign"></i> 20</span>
                                                    </span>
                                                </a>

                                        <div class="d-flex align-items-center">
                                            <a href="#"
                                               class="text-muted d-flex align-items-center text-decoration-0"><i class="material-icons mr-1"
                                                   style="font-size: inherit;">favorite_border</i> 156</a>
                                            <a href="#"
                                               class="text-muted d-flex align-items-center text-decoration-0 ml-3"><i class="material-icons mr-1"
                                                   style="font-size: inherit;">thumb_up</i> 351</a>
                                        </div>
                                    </div>
                                     <div class="col-md-3">
                                          <a href="#"
                                                   class="card my-3 text-body text-decoration-0">
                                                    <img src="assets/images/vuejs.png"
                                                         alt="image"
                                                         class="card-img-top">
                                                    <span class="card-footer d-flex flex-column">
                                                        <strong>Mastesr linux command line</strong>
                                                        <span class="text-black-70">Linux is not like the window UI, try to take certificate.</span>
                                                        <span class="text-dark"><i class="fa fa-dollar-sign"></i> 15</span>
                                                    </span>
                                                </a>

                                        <div class="d-flex align-items-center">
                                            <a href="#"
                                               class="text-muted d-flex align-items-center text-decoration-0"><i class="material-icons mr-1"
                                                   style="font-size: inherit;">favorite_border</i> 156</a>
                                            <a href="#"
                                               class="text-muted d-flex align-items-center text-decoration-0 ml-3"><i class="material-icons mr-1"
                                                   style="font-size: inherit;">thumb_up</i> 351</a>
                                        </div>
                                    </div>
                                     <div class="col-md-3">
                                          <a href="#"
                                                   class="card my-3 text-body text-decoration-0">
                                                    <img src="assets/images/vuejs.png"
                                                         alt="image"
                                                         class="card-img-top">
                                                    <span class="card-footer d-flex flex-column">
                                                        <strong>Operating system for window</strong>
                                                        <span class="text-black-70">Operating system is the cumputer software which...</span>
                                                        <span class="text-dark"><i class="fa fa-dollar-sign"></i> 15</span>
                                                    </span>
                                                </a>

                                        <div class="d-flex align-items-center">
                                            <a href="#"
                                               class="text-muted d-flex align-items-center text-decoration-0"><i class="material-icons mr-1"
                                                   style="font-size: inherit;">favorite_border</i> 156</a>
                                            <a href="#"
                                               class="text-muted d-flex align-items-center text-decoration-0 ml-3"><i class="material-icons mr-1"
                                                   style="font-size: inherit;">thumb_up</i> 351</a>
                                        </div>
                                    </div>
                                     <div class="col-md-3">
                                          <a href="#"
                                                   class="card my-3 text-body text-decoration-0">
                                                    <img src="assets/images/vuejs.png"
                                                         alt="image"
                                                         class="card-img-top">
                                                    <span class="card-footer d-flex flex-column">
                                                        <strong>Marketing on social media</strong>
                                                        <span class="text-black-70">How many person using social media for business?.</span>
                                                        <span class="text-dark"><i class="fa fa-dollar-sign"></i> 25</span>
                                                    </span>
                                                </a>

                                        <div class="d-flex align-items-center">
                                            <a href="#"
                                               class="text-muted d-flex align-items-center text-decoration-0"><i class="material-icons mr-1"
                                                   style="font-size: inherit;">favorite_border</i> 156</a>
                                            <a href="#"
                                               class="text-muted d-flex align-items-center text-decoration-0 ml-3"><i class="material-icons mr-1"
                                                   style="font-size: inherit;">thumb_up</i> 351</a>
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