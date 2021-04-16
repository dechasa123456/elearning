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
                                <h1 class="h2">Top Course in business</h1>
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
                                                <nuxt-link :to="{name:'detail-about-course',params: {img:'stories/256_rsz_phil-hearing-769014-unsplash.jpg'}}"
                                                   class="card my-3 text-body text-decoration-0">
                                                    <img src="assets/images/stories/256_rsz_phil-hearing-769014-unsplash.jpg"
                                                         alt="image"
                                                         class="card-img-top">
                                                    <span class="card-footer d-flex flex-column">
                                                        <strong>Practical leadership skill</strong>
                                                        <span class="text-black-70">How to lead your business and your idea?.</span>
                                                        <span class="text-dark"><i class="fa fa-dollar-sign"></i> 10</span>
                                                    </span>
                                          </nuxt-link>

                                        <div class="d-flex align-items-center">
                                           <nuxt-link :to="{name:'detail-about-course',params: {img:'stories/256_rsz_phil-hearing-769014-unsplash.jpg'}}"
                                               class="text-muted d-flex align-items-center text-decoration-0"><i class="material-icons mr-1"
                                                   style="font-size: inherit;">favorite_border</i> 156</nuxt-link>
                                            <nuxt-link :to="{name:'detail-about-course',params: {img:'stories/256_rsz_phil-hearing-769014-unsplash.jpg'}}"
                                               class="text-muted d-flex align-items-center text-decoration-0 ml-3"><i class="material-icons mr-1"
                                                   style="font-size: inherit;">thumb_up</i> 351</nuxt-link>
                                        </div>
                                    </div>
                                     <div class="col-md-3">
                                          <nuxt-link :to="{name:'detail-about-course',params: {img:'stories/256_rsz_phil-hearing-769014-unsplash.jpg'}}"
                                                   class="card my-3 text-body text-decoration-0">
                                                    <img src="assets/images/stories/256_rsz_phil-hearing-769014-unsplash.jpg"
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
                                                    <img src="assets/images/stories/256_rsz_phil-hearing-769014-unsplash.jpg"
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
                                                    <img src="assets/images/stories/256_rsz_phil-hearing-769014-unsplash.jpg"
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

                        <div class="media mb-headings align-items-center">
                            <div class="media-body">
                                <h1 class="h2">Top Course in It and Software</h1>
                            </div>
                            
                        </div>
                           <div class="row">
                           <div class="col-md-3">
                                          <a href="#"
                                                   class="card my-3 text-body text-decoration-0">
                                                    <img src="assets/images/stories/256_rsz_phil-hearing-769014-unsplash.jpg"
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
                                                    <img src="assets/images/stories/256_rsz_phil-hearing-769014-unsplash.jpg"
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
                                                    <img src="assets/images/stories/256_rsz_phil-hearing-769014-unsplash.jpg"
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
                                                    <img src="assets/images/stories/256_rsz_phil-hearing-769014-unsplash.jpg"
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
                           <div class="media mb-headings align-items-center">
                            <div class="media-body">
                                <h1 class="h2">Most popular Instructor</h1>
                            </div>
                            
                        </div>
                                <div class="row">

                            <div class="col-md-6">
                                <div class="card">
                                    <div class="card-body">

                                        <div class="d-flex flex-column flex-sm-row">
                                            <nuxt-link to="/instructor"
                                               class="avatar avatar-lg avatar-4by3 mb-3 w-xs-plus-down-100 mr-sm-3">
                                                <img src="assets/images/people/110/guy-8.jpg"
                                                     alt="Card image cap"
                                                     class="avatar-img rounded">
                                            </nuxt-link>
                                            <div class="flex"
                                                 style="min-width: 200px;">
                                                 <h4 class="card-title mb-1"><nuxt-link to="/instructor">Dr.Stion Name</nuxt-link></h4> 
                                                <p class="text-black-70">Biograph about Dr. Stion.</p>
                                                <div class="d-flex align-items-end">
                                                    <div class="d-flex flex flex-column mr-3">
                                                        <div class="d-flex align-items-center py-1 border-bottom">
                                                            <small class="text-black-50">34 total course teach</small>
                                                        </div>
                                                      
                                                    </div>
                                                  
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                  
                                </div>
                            </div>
                              <div class="col-md-6">
                                <div class="card">
                                    <div class="card-body">

                                        <div class="d-flex flex-column flex-sm-row">
                                            <nuxt-link to="/instructor"
                                               class="avatar avatar-lg avatar-4by3 mb-3 w-xs-plus-down-100 mr-sm-3">
                                                <img src="assets/images/people/110/guy-8.jpg"
                                                     alt="Card image cap"
                                                     class="avatar-img rounded">
                                            </nuxt-link>
                                            <div class="flex"
                                                 style="min-width: 200px;">
                                                <!-- <h5 class="card-title text-base m-0"><a href="fixed-instructor-course-edit.html"><strong>Learn Vue.js</strong></a></h5> -->
                                                <h4 class="card-title mb-1"><nuxt-link to="/instructor">Dr.Stion Name</nuxt-link></h4> 
                                                <p class="text-black-70">Biograph about Dr. Stion.</p>
                                                <div class="d-flex align-items-end">
                                                    <div class="d-flex flex flex-column mr-3">
                                                        <div class="d-flex align-items-center py-1 border-bottom">
                                                            <small class="text-black-50">34 total course teach</small>
                                                        </div>
                                                      
                                                    </div>
                                                  
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                  
                                </div>
                            </div>
                             <div class="col-md-6">
                                <div class="card">
                                    <div class="card-body">

                                        <div class="d-flex flex-column flex-sm-row">
                                            <nuxt-link to="/instructor"
                                               class="avatar avatar-lg avatar-4by3 mb-3 w-xs-plus-down-100 mr-sm-3">
                                                <img src="assets/images/people/110/guy-8.jpg"
                                                     alt="Card image cap"
                                                     class="avatar-img rounded">
                                            </nuxt-link>
                                            <div class="flex"
                                                 style="min-width: 200px;">
                                                <!-- <h5 class="card-title text-base m-0"><a href="fixed-instructor-course-edit.html"><strong>Learn Vue.js</strong></a></h5> -->
                                               <h4 class="card-title mb-1"><nuxt-link to="/instructor">Dr.Stion Name</nuxt-link></h4>                                                <p class="text-black-70">Biograph about Dr. Stion.</p>
                                                <div class="d-flex align-items-end">
                                                    <div class="d-flex flex flex-column mr-3">
                                                        <div class="d-flex align-items-center py-1 border-bottom">
                                                            <small class="text-black-50">34 total course teach</small>
                                                        </div>
                                                      
                                                    </div>
                                                  
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                  
                                </div>
                            </div>
                             <div class="col-md-6">
                                <div class="card">
                                    <div class="card-body">

                                        <div class="d-flex flex-column flex-sm-row">
                                            <nuxt-link to="/instructor"
                                               class="avatar avatar-lg avatar-4by3 mb-3 w-xs-plus-down-100 mr-sm-3">
                                                <img src="assets/images/people/110/guy-8.jpg"
                                                     alt="Card image cap"
                                                     class="avatar-img rounded">
                                            </nuxt-link>
                                            <div class="flex"
                                                 style="min-width: 200px;">
                                                <!-- <h5 class="card-title text-base m-0"><a href="fixed-instructor-course-edit.html"><strong>Learn Vue.js</strong></a></h5> -->
                                                <h4 class="card-title mb-1"><nuxt-link to="/instructor">Dr.Stion Name</nuxt-link></h4>
                                                <p class="text-black-70">Biograph about Dr. Stion.</p>
                                                <div class="d-flex align-items-end">
                                                    <div class="d-flex flex flex-column mr-3">
                                                        <div class="d-flex align-items-center py-1 border-bottom">
                                                            <small class="text-black-50">34 total course teach</small>
                                                        </div>
                                                      
                                                    </div>
                                                  
                                                </div>
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
middleware:'test'
}
</script>

<style>

</style>