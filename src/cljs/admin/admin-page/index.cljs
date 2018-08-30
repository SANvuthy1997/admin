(ns admin.admin-page.index)

(defn users []
    [:div {:class "col-lg-7 grid-margin stretch-card"}
        [:div {:class "card"}
            [:div {:class "card-body"}
                [:h4 {:class "card-title"} "All the users"]
                [:div {:class "table-responsive"}
                    [:table {:class "table table-striped"}
                        [:thead  
                        [:tr 
                            [:th "Full Name"]
                            [:th "Email"]
                            [:th "Status"]
                            [:th "Created"]
                            [:th "Action"]]]
                        [:tbody  
                            [:tr 
                                [:td "SAN Vuthy"]
                                [:td "san.vuthy08@gmail.com"]
                                [:td [:label {:class "badge badge-info"} "User"]]
                                [:td "12 May 2017"]
                                [:td 
                                    [:button {:type "button", :class "btn btn-inverse-success btn-rounded btn-fw"} "Edit"]
                                    [:button {:type "button", :class "btn btn-inverse-danger btn-rounded btn-fw"} "Delete"]]]
                                    [:tr 
                                    [:td "SAN Vuthy"]
                                    [:td "san.vuthy08@gmail.com"]
                                    [:td [:label {:class "badge badge-success"} "Admin"]]
                                    [:td "12 May 2017"]
                                    [:td 
                                        [:button {:type "button", :class "btn btn-inverse-success btn-rounded btn-fw"} "Edit"]
                                        [:button {:type "button", :class "btn btn-inverse-danger btn-rounded btn-fw"} "Delete"]]]
                                ]]]]]])

(defn weather []
    [:div.row
        [:div {:class "col-lg-5 grid-margin stretch-card"}
            [:div {:class "card card-weather"}
            [:div {:class "card-body"}
                [:div {:class "weather-date-location"}
                    [:h3 "Monday"]
                    [:p {:class "text-gray"}
                    [:span {:class "weather-date"} "25 October, 2016"]
                    [:span {:class "weather-location"} "London, UK"]]]
                [:div {:class "weather-data d-flex"}
                    [:div {:class "mr-auto"}
                    [:h4 {:class "display-3"} "21" 
                    [:span {:class "symbol"} "°"]"C"]
                    [:p "Mostly Cloudy"]]]]
            [:div {:class "card-body p-0"}
                [:div {:class "d-flex weakly-weather"}
                    [:div {:class "weakly-weather-item"}
                        [:p {:class "mb-0"} ]
                        [:i {:class "mdi mdi-weather-cloudy"}]
                        [:p {:class "mb-0"} "30°"]]
                    [:div {:class "weakly-weather-item"}
                        [:p {:class "mb-1"} ]
                        [:i {:class "mdi mdi-weather-hail"}]
                        [:p {:class "mb-0"} "31°"]]
                    [:div {:class "weakly-weather-item"}
                        [:p {:class "mb-1"} ]
                        [:i {:class "mdi mdi-weather-partlycloudy"}]
                        [:p {:class "mb-0"} "28°"]]
                    [:div {:class "weakly-weather-item"}
                        [:p {:class "mb-1"} ]
                        [:i {:class "mdi mdi-weather-pouring"}]
                        [:p {:class "mb-0"} "30°"]]
                    [:div {:class "weakly-weather-item"}
                        [:p {:class "mb-1"} ]
                        [:i {:class "mdi mdi-weather-pouring"}]
                        [:p {:class "mb-0"} "29°"]]
                    [:div {:class "weakly-weather-item"}
                        [:p {:class "mb-1"} ]
                        [:i {:class "mdi mdi-weather-snowy-rainy"}]
                        [:p {:class "mb-0"} "31°"]]
                    [:div {:class "weakly-weather-item"}
                        [:p {:class "mb-1"} ]
                        [:i {:class "mdi mdi-weather-snowy"}]
                        [:p {:class "mb-0"} "32°"]]]]]]
                (users)      
                ])

(defn booking-tours []
[:div.row
    [:div {:class "col-lg-12 grid-margin"}
        [:div {:class "card"}
        [:div {:class "card-body"}
        [:h4 {:class "card-title"} "Total of Customer Order"]
        [:div {:class "table-responsive"}
            [:table {:class "table table-bordered"}
            [:thead  
            [:tr  
            [:th "Title"]
            [:th "Full Name"]
            [:th "Email"]
            [:th "People"]
            [:th "Price"]
            [:th "Date"]]]
            [:tbody  
            [:tr  
            [:td {:class "font-weight-medium"} "ISLANDS OF THE MEKONG" ]
            [:td "Herman Beck"]
            [:td "san.vuthy08@gmail.com"]  
            [:td "2"]
            [:td "$80"]
            [:td "May 15, 2015"]]]]]]]]])

(defn statistics []
    [:div {:class "row"}
        [:div {:class "col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card"}
            [:div {:class "card card-statistics"}
            [:div {:class "card-body"}
                [:div {:class "clearfix"}
                    [:div {:class "float-left"}
                        [:i {:class "mdi mdi-cube text-danger icon-lg"}]]
                    [:div {:class "float-right"}
                        [:p {:class "mb-0 text-right"} "Total Revenue"]
                        [:div {:class "fluid-container"}
                        [:h3 {:class "font-weight-medium text-right mb-0"} "$65,650"]]]]
                [:p {:class "text-muted mt-3 mb-0"}
                    [:i {:class "mdi mdi-alert-octagon mr-1", :aria-hidden "true"}]" 65% lower growth"]]]]
        [:div {:class "col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card"}
            [:div {:class "card card-statistics"}
                [:div {:class "card-body"}
                    [:div {:class "clearfix"}
                        [:div {:class "float-left"}
                            [:i {:class "mdi mdi-receipt text-warning icon-lg"}]]
                        [:div {:class "float-right"}
                            [:p {:class "mb-0 text-right"} "Orders"]
                            [:div {:class "fluid-container"}
                        [:h3 {:class "font-weight-medium text-right mb-0"} "3455"]]]]
                [:p {:class "text-muted mt-3 mb-0"}
                [:i {:class "mdi mdi-bookmark-outline mr-1", :aria-hidden "true"}]" Product-wise sales"]]]]
        [:div {:class "col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card"}
            [:div {:class "card card-statistics"}
                [:div {:class "card-body"}
                    [:div {:class "clearfix"}
                        [:div {:class "float-left"}
                            [:i {:class "mdi mdi-poll-box text-success icon-lg"}]]
                        [:div {:class "float-right"}
                            [:p {:class "mb-0 text-right"} "Sales"]
                            [:div {:class "fluid-container"}
                        [:h3 {:class "font-weight-medium text-right mb-0"} "5693"]]]]
                    [:p {:class "text-muted mt-3 mb-0"}
                        [:i {:class "mdi mdi-calendar mr-1", :aria-hidden "true"}]" Weekly Sales"]]]]
        [:div {:class "col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card"}
            [:div {:class "card card-statistics"}
                [:div {:class "card-body"}
                    [:div {:class "clearfix"}
                        [:div {:class "float-left"}
                        [:i {:class "mdi mdi-account-location text-info icon-lg"}]]
                        [:div {:class "float-right"}
                        [:p {:class "mb-0 text-right"} "Users"]
                        [:div {:class "fluid-container"}
                        [:h3 {:class "font-weight-medium text-right mb-0"} "246"]]]]
                    [:p {:class "text-muted mt-3 mb-0"}
                        [:i {:class "mdi mdi-reload mr-1", :aria-hidden "true"}]" Product-wise sales"]]]]]
    
    )



(defn index []
    [:div {:class "main-panel"}
        [:div {:class "content-wrapper"}
                [statistics]
                [weather]
                [booking-tours]]])


                ; [:footer {:class "footer"}
                ; [:div {:class "container-fluid clearfix"}
                ;     [:span {:class "text-muted d-block text-center text-sm-left d-sm-inline-block"} "Copyright © 2018" 
                ;         [:a {:href "http://www.bootstrapdash.com/", :target "_blank"} "Bootstrapdash"]". All rights reserved."]
                ;     [:span {:class "float-none float-sm-right d-block mt-1 mt-sm-0 text-center"} "Hand-crafted &amp; made with" 
                ;         [:i {:class "mdi mdi-heart text-danger"}]]]]