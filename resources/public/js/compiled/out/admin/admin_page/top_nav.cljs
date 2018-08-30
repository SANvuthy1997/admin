(ns admin.admin-page.top-nav)

(defn top-nav! []
    [:nav {:class "navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row"}
      [:div {:class "text-center navbar-brand-wrapper d-flex align-items-top justify-content-center"}
      [:a {:class "navbar-brand brand-logo", :href "index.html"}
        [:h4 "SAN Vuthy"]]
      [:a {:class "navbar-brand brand-logo-mini", :href "index.html"}
        [:img {:src "images/logo-mini.svg", :alt "logo"}]]]
      [:div {:class "navbar-menu-wrapper d-flex align-items-center"}
      
      [:ul {:class "navbar-nav navbar-nav-right"}
        [:li {:class "nav-item dropdown d-none d-xl-inline-block"}
            [:a {:class "nav-link dropdown-toggle", :id "UserDropdown", :href "#", :data-toggle "dropdown", :aria-expanded "false"}
                [:span {:class "profile-text"} "Hello, SAN Vuthy !"]
                [:img {:class "img-xs rounded-circle", :src "images/faces/face1.jpg", :alt "Profile image"}]]
                [:div {:class "dropdown-menu dropdown-menu-right navbar-dropdown", :aria-labelledby "UserDropdown"}
            [:a {:class "dropdown-item p-0"}
                [:div {:class "d-flex border-bottom"}
                    [:div {:class "py-3 px-4 d-flex align-items-center justify-content-center"}
                    [:i {:class "mdi mdi-bookmark-plus-outline mr-0 text-gray"}]]
                    [:div {:class "py-3 px-4 d-flex align-items-center justify-content-center border-left border-right"}
                    [:i {:class "mdi mdi-account-outline mr-0 text-gray"}]]
                    [:div {:class "py-3 px-4 d-flex align-items-center justify-content-center"}
                    [:i {:class "mdi mdi-alarm-check mr-0 text-gray"}]]]]
            [:a {:class "dropdown-item mt-2"} "Manage Accounts"]
            [:a {:class "dropdown-item"} "Change Password"]
            [:a {:class "dropdown-item"} "Check Inbox"]
            [:a {:class "dropdown-item"} "Sign Out"]]]]
        [:button {:class "navbar-toggler navbar-toggler-right d-lg-none align-self-center", :type "button", :data-toggle "offcanvas"}
            [:span {:class "mdi mdi-menu"}]]]]
    
    )