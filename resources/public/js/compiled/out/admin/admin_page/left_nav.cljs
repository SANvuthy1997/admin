(ns admin.admin-page.left-nav
    (:require [admin.admin-page.body :refer [admin-body!]]
              [re-frame.core :as rf]
              [admin.admin-page.all-posts :refer [all-posts!]]
              [admin.admin-page.new-post :refer [new-post!]]))

(rf/reg-sub
    :active-panel
    (fn [db _]
        (get db :active-panel)))


(defn left-nav! []
    (let [active-page (or @(rf/subscribe [:active-panel]))]
    [:div {:class "container-fluid page-body-wrapper"} 
        [:nav {:class "sidebar sidebar-offcanvas", :id "sidebar"}
        [:ul {:class "nav"}
        [:li {:class "nav-item nav-profile"}
        [:div {:class "nav-link"}
            [:div {:class "user-wrapper"}
            [:div {:class "profile-image"}
            [:img {:src "images/faces/face1.jpg", :alt "profile image"}]]
            [:div {:class "text-wrapper"}
            [:p {:class "profile-name"} "SAN Vuthy"]
            [:div  
            [:small {:class "designation text-muted"} "Admin"]
            [:span {:class "status-indicator online"}]]]]
            [:button {:class "btn btn-success btn-block"} "New Post" 
            [:i {:class "mdi mdi-plus"}]]]]
        [:li {:class "nav-item"}
        [:a {:class "nav-link", :href "/"}
            [:i {:class "menu-icon mdi mdi-television"}]
            [:span {:class "menu-title"} "Dashboard"]]]
        [:li {:class "nav-item"}
        [:a {:class "nav-link", :data-toggle "collapse", :href "#ui-basic", :aria-expanded "false", :aria-controls "ui-basic"}
            [:i {:class "menu-icon mdi mdi-content-copy"}]
            [:span {:class "menu-title"} "Posts"]
            [:i {:class "menu-arrow"}]]
        [:div {:class "collapse", :id "ui-basic"}
            [:ul {:class "nav flex-column sub-menu"}
            [:li {:class "nav-item"}
            [:a {:class "nav-link", :href "#/all-posts"} "All Posts"]]
            [:li {:class "nav-item"}
            [:a {:class "nav-link", :href "pages/ui-features/typography.html"} "Typography"]]]]]
        [:li {:class "nav-item"}
        [:a {:class "nav-link", :href "pages/forms/basic_elements.html"}
            [:i {:class "menu-icon mdi mdi-backup-restore"}]
            [:span {:class "menu-title"} "Form elements"]]]
        [:li {:class "nav-item"}
        [:a {:class "nav-link", :href "pages/charts/chartjs.html"}
            [:i {:class "menu-icon mdi mdi-chart-line"}]
            [:span {:class "menu-title"} "Charts"]]]
        [:li {:class "nav-item"}
        [:a {:class "nav-link", :href "pages/tables/basic-table.html"}
            [:i {:class "menu-icon mdi mdi-table"}]
            [:span {:class "menu-title"} "Tables"]]]
        [:li {:class "nav-item"}
        [:a {:class "nav-link", :href "pages/icons/font-awesome.html"}
            [:i {:class "menu-icon mdi mdi-sticker"}]
            [:span {:class "menu-title"} "Icons"]]]
        [:li {:class "nav-item"}
        [:a {:class "nav-link", :data-toggle "collapse", :href "#auth", :aria-expanded "false", :aria-controls "auth"}
            [:i {:class "menu-icon mdi mdi-restart"}]
            [:span {:class "menu-title"} "User Pages"]
            [:i {:class "menu-arrow"}]]
        [:div {:class "collapse", :id "auth"}
            [:ul {:class "nav flex-column sub-menu"}
            [:li {:class "nav-item"}
            [:a {:class "nav-link", :href "pages/samples/blank-page.html"} " Blank Page "]]
            [:li {:class "nav-item"}
            [:a {:class "nav-link", :href "pages/samples/login.html"} " Login "]]
            [:li {:class "nav-item"}
            [:a {:class "nav-link", :href "pages/samples/register.html"} " Register "]]
            [:li {:class "nav-item"}
            [:a {:class "nav-link", :href "pages/samples/error-404.html"} " 404 "]]
            [:li {:class "nav-item"}
            [:a {:class "nav-link", :href "pages/samples/error-500.html"} " 500 "]]]]]]]
            
            (cond  
                (= active-page :all-posts) (all-posts!) 
                (= active-page :new-post) (new-post!)
                :else (admin-body!) )]
    
    ))