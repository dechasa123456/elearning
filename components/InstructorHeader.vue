<template>
              <div id="header"
                 data-fixed
                 class="mdk-header js-mdk-header mb-0">
                <div class="mdk-header__content">
                    <nav id="default-navbar"
                         class="navbar navbar-expand navbar-dark bg-primary m-0">
                        <div class="container-fluid">
                            <button class="navbar-toggler d-block"
                                    data-toggle="sidebar"
                                    type="button">
                                <span class="material-icons">menu</span>
                            </button>

                            <a href="instructor-dashboard.html"
                               class="navbar-brand">
                                <img src="assets/images/logo/white.svg"
                                     class="mr-2"
                                     alt="LearnPlus" />
                                <span class="d-none d-xs-md-block">LearnPlus</span>
                            </a>

                            <ul class="nav navbar-nav navbar-nav-stats d-none d-md-flex flex-nowrap">
                                <li class="nav-item">
                                    <div class="nav-stats">$591 <small>GROSS</small></div>
                                </li>
                                <li class="nav-item">
                                    <div class="nav-stats">$31 <small>TAXES</small></div>
                                </li>
                                <li class="nav-item mr-3">
                                    <div class="nav-stats">$560 <small>NET</small></div>
                                </li>
                            </ul>
                            <form class="search-form d-none d-md-flex">
                                <input type="text"
                                       class="form-control"
                                       placeholder="Search">
                                <button class="btn"
                                        type="button"><i class="material-icons font-size-24pt">search</i></button>
                            </form>
                            <div class="flex"></div>
                            <ul class="nav navbar-nav flex-nowrap d-none d-lg-flex">
                                <li class="nav-item">
                                    <a class="nav-link"
                                       href="instructor-forum.html">Forum</a>
                                </li>
                            </ul>
                            <ul class="nav navbar-nav flex-nowrap">
                                <li class="nav-item dropdown dropdown-notifications dropdown-menu-sm-full">
                                    <button class="nav-link btn-flush dropdown-toggle"
                                            type="button"
                                            data-toggle="dropdown"
                                            data-dropdown-disable-document-scroll
                                            data-caret="false">
                                        <i class="material-icons">notifications</i>
                                        <span class="badge badge-notifications badge-danger">2</span>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <div data-perfect-scrollbar
                                             class="position-relative">
                                            <div class="dropdown-header"><strong>Messages</strong></div>
                                            <div class="list-group list-group-flush mb-0">

                                                <a href="instructor-messages.html"
                                                   class="list-group-item list-group-item-action unread">
                                                    <span class="d-flex align-items-center mb-1">
                                                        <small class="text-muted">5 minutes ago</small>

                                                        <span class="ml-auto unread-indicator bg-primary"></span>

                                                    </span>
                                                    <span class="d-flex">
                                                        <span class="avatar avatar-xs mr-2">
                                                            <img src="assets/images/people/110/woman-5.jpg"
                                                                 alt="people"
                                                                 class="avatar-img rounded-circle">
                                                        </span>
                                                        <span class="flex d-flex flex-column">
                                                            <strong>Michelle</strong>
                                                            <span class="text-black-70">Clients loved the new design.</span>
                                                        </span>
                                                    </span>
                                                </a>

                                                <a href="instructor-messages.html"
                                                   class="list-group-item list-group-item-action unread">
                                                    <span class="d-flex align-items-center mb-1">
                                                        <small class="text-muted">5 minutes ago</small>

                                                        <span class="ml-auto unread-indicator bg-primary"></span>

                                                    </span>
                                                    <span class="d-flex">
                                                        <span class="avatar avatar-xs mr-2">
                                                            <img src="assets/images/people/110/woman-5.jpg"
                                                                 alt="people"
                                                                 class="avatar-img rounded-circle">
                                                        </span>
                                                        <span class="flex d-flex flex-column">
                                                            <strong>Michelle</strong>
                                                            <span class="text-black-70">🔥 Superb job..</span>
                                                        </span>
                                                    </span>
                                                </a>

                                            </div>

                                            <div class="dropdown-header"><strong>System notifications</strong></div>
                                            <div class="list-group list-group-flush mb-0">

                                                <a href="instructor-messages.html"
                                                   class="list-group-item list-group-item-action border-left-3 border-left-danger">
                                                    <span class="d-flex align-items-center mb-1">
                                                        <small class="text-muted">3 minutes ago</small>

                                                    </span>
                                                    <span class="d-flex">
                                                        <span class="avatar avatar-xs mr-2">
                                                            <span class="avatar-title rounded-circle bg-light">
                                                                <i class="material-icons font-size-16pt text-danger">account_circle</i>
                                                            </span>
                                                        </span>
                                                        <span class="flex d-flex flex-column">

                                                            <span class="text-black-70">Your profile information has not been synced correctly.</span>
                                                        </span>
                                                    </span>
                                                </a>

                                                <a href="instructor-messages.html"
                                                   class="list-group-item list-group-item-action">
                                                    <span class="d-flex align-items-center mb-1">
                                                        <small class="text-muted">5 hours ago</small>

                                                    </span>
                                                    <span class="d-flex">
                                                        <span class="avatar avatar-xs mr-2">
                                                            <span class="avatar-title rounded-circle bg-light">
                                                                <i class="material-icons font-size-16pt text-success">group_add</i>
                                                            </span>
                                                        </span>
                                                        <span class="flex d-flex flex-column">
                                                            <strong>Adrian. D</strong>
                                                            <span class="text-black-70">Wants to join your private group.</span>
                                                        </span>
                                                    </span>
                                                </a>

                                                <a href="instructor-messages.html"
                                                   class="list-group-item list-group-item-action">
                                                    <span class="d-flex align-items-center mb-1">
                                                        <small class="text-muted">1 day ago</small>

                                                    </span>
                                                    <span class="d-flex">
                                                        <span class="avatar avatar-xs mr-2">
                                                            <span class="avatar-title rounded-circle bg-light">
                                                                <i class="material-icons font-size-16pt text-warning">storage</i>
                                                            </span>
                                                        </span>
                                                        <span class="flex d-flex flex-column">

                                                            <span class="text-black-70">Your deploy was successful.</span>
                                                        </span>
                                                    </span>
                                                </a>

                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="nav-item dropdown ml-1 ml-md-3">
                                    <a class="nav-link dropdown-toggle"
                                       data-toggle="dropdown"
                                       href="#"
                                       role="button"><img src="assets/images/people/50/guy-6.jpg"
                                             alt="Avatar"
                                             class="rounded-circle"
                                             width="40"></a>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a class="dropdown-item"
                                           href="instructor-account-edit.html">
                                            <i class="material-icons">edit</i> Edit Account
                                        </a>
                                        <a class="dropdown-item"
                                           href="instructor-profile.html">
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