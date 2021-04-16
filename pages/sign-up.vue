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
            <div class="col-sm-8 col-md-6 col-lg-9 mx-auto"
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
                        <h4 class="card-title">Student Sign Up</h4>
                        <p class="card-subtitle">Create a new account</p>
                    </div>
                    <div class="card-body">


                        <form action="/"
                              novalidate
                              method="get">
                          <div class="row">                          
                            <div class="col-md-4">                          
                                 <div class="form-group">
                                <label class="form-label"
                                       for="name">First Name:</label>
                                <div class="input-group input-group-merge">
                                    <input id="name"
                                           type="text"
                                           required=""
                                           class="form-control form-control-prepended"
                                           placeholder="Your first">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <span class="far fa-user"></span>
                                        </div>
                                    </div>
                                </div>
                             </div>
                          </div>
                            <div class="col-md-4">                          
                                 <div class="form-group">
                                <label class="form-label"
                                       for="name">Middle Name:</label>
                                <div class="input-group input-group-merge">
                                    <input id="name"
                                           type="text"
                                           required=""
                                           class="form-control form-control-prepended"
                                           placeholder="Your middle name">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <span class="far fa-user"></span>
                                        </div>
                                    </div>
                                </div>
                             </div>
                          </div>
                            <div class="col-md-4">                          
                                 <div class="form-group">
                                <label class="form-label"
                                       for="name">Last Name:</label>
                                <div class="input-group input-group-merge">
                                    <input id="name"
                                           type="text"
                                           required=""
                                           class="form-control form-control-prepended"
                                           placeholder="Your last name">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <span class="far fa-user"></span>
                                        </div>
                                    </div>
                                </div>
                             </div>
                          </div>
                        </div>
                          <div class="row">                          
                            <div class="col-md-4">                          
                                 <div class="form-group">
                                <label class="form-label"
                                       for="name">Phone:</label>
                                <div class="input-group input-group-merge">
                                    <input id="name"
                                           type="text"
                                           required=""
                                           class="form-control form-control-prepended"
                                           placeholder="Your phone number">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <span class="fa fa-phone"></span>
                                        </div>
                                    </div>
                                </div>
                             </div>
                          </div>
                            <div class="col-md-4">                          
                                 <div class="form-group">
                                <label class="form-label"
                                       for="name">Gender:</label>
                                <div class="input-group input-group-merge">
                                    <select id="name"
                                           type="text"
                                           required=""
                                           class="form-control form-control-prepended">
                                           <option value="">Select Gender </option>
                                           <option value="Male">Male </option>
                                           <option value="Female">Female </option>
                                           </select>
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <span class="fa fa-transgender"></span>
                                        </div>
                                    </div>
                                </div>
                             </div>
                          </div>
                              <div class="col-md-4">                          
                                 <div class="form-group">
                                <label class="form-label"
                                       for="name">How old are you?</label>
                                <div class="input-group input-group-merge">
                                    <input id="name"
                                           type="text"
                                           required=""
                                           class="form-control form-control-prepended"
                                           placeholder="Your age">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <span class="fa fa-calendar"></span>
                                        </div>
                                    </div>
                                </div>
                             </div>
                          </div>
                          </div>
                          <div class="row">  
                                <div class="col-md-4">                          
                                 <div class="form-group">
                                <label class="form-label"
                                       for="name">Address:</label>
                                <div class="input-group input-group-merge">
                                    <input id="name"
                                           type="text"
                                           required=""
                                           class="form-control form-control-prepended"
                                           placeholder="Your address have been living">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <span class="fa fa-map-marker-alt"></span>
                                        </div>
                                    </div>
                                </div>
                             </div>
                          </div>                        
                            <div class="col-md-4">                          
                                 <div class="form-group">
                                <label class="form-label"
                                       for="name">Address:</label>
                                <div class="input-group input-group-merge">
                                      <select id="name"
                                           type="text"
                                           required=""
                                           class="form-control form-control-prepended">
                                           <option value="">Register as </option>
                                           <option value="Male">Student </option>
                                           <option value="Female">Instructor </option>
                                      </select>
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <span class="fa fa-map"></span>
                                        </div>
                                    </div>
                                </div>
                             </div>
                          </div>                        
                            <div class="col-md-4">                          
                               <div class="form-group">
                                <label class="form-label"
                                       for="email">Email address:</label>
                                <div class="input-group input-group-merge">
                                    <input id="email"
                                           type="email"
                                           required=""
                                           class="form-control form-control-prepended"
                                           placeholder="Your email address">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <span class="fa fa-envelope"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          </div>
                          
                        </div>
                          
                            <div class="form-group">
                                <label class="form-label"
                                       for="password">Password:</label>
                                <div class="input-group input-group-merge">
                                    <input id="password"
                                           type="password"
                                           required=""
                                           class="form-control form-control-prepended"
                                           placeholder="Choose a password">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <span class="fa fa-key"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="form-label"
                                       for="password2">Confirm password:</label>
                                <div class="input-group input-group-merge">
                                    <input id="password2"
                                           type="password"
                                           required=""
                                           class="form-control form-control-prepended"
                                           placeholder="Confirm password">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">
                                            <span class="fa fa-key"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="submit"
                                    class="btn btn-primary btn-block mb-3">Sign Up</button>
                            <div class="form-group text-center mb-0">
                                <div class="custom-control custom-checkbox">
                                    <input id="terms"
                                           type="checkbox"
                                           class="custom-control-input"
                                           checked
                                           required="">
                                    <label for="terms"
                                           class="custom-control-label text-black-70">I agree to the <a href="#"
                                           class="text-black-70"
                                           style="text-decoration: underline;">Terms of Use</a></label>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="card-footer text-center text-black-50">Already signed up? <nuxt-link to="/login">Login</nuxt-link></div>
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