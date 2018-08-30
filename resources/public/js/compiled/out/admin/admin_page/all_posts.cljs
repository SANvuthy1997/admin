(ns admin.admin-page.all-posts)
(defn all-posts! []
    [:div {:class "main-panel"}
        [:div {:class "content-wrapper"}
            [:div {:class "row"}
                [:div {:class "col-lg-12 grid-margin stretch-card"}
                    [:div {:class "card"}
                        [:div {:class "card-body"}
                        [:h4 {:class "card-title"} "All posts of Toursanak"]
                        [:div {:class "table-responsive"}
                            [:table {:class "table table-striped"}
                                [:thead  
                                [:tr 
                                    [:th "Title"]
                                    [:th "Category"]
                                    [:th "Created"]
                                    [:th "Status"]
                                    [:th "User"]
                                    [:th "Action"]]]
                                [:tbody  
                                    [:tr 
                                        [:td "This test for toursanak..."]
                                        [:td "Test"]
                                        [:td "12 May 2017"]
                                        [:td [:label {:class "badge badge-danger"} "Pending"]]
                                        [:td "SAN Vuthy"]
                                        [:td 
                                            [:button {:type "button", :class "btn btn-inverse-success btn-rounded btn-fw"} "Edit"]
                                            [:button {:type "button", :class "btn btn-inverse-danger btn-rounded btn-fw"} "Delete"]]]
                                    [:tr 
                                        [:td "This test for toursanak..."]
                                        [:td "Test"]
                                        [:td "12 May 2017"]
                                        [:td [:label {:class "badge badge-success"} "Completed"]]
                                        [:td "SAN Vuthy"]
                                        [:td 
                                            [:button {:type "button", :class "btn btn-inverse-success btn-rounded btn-fw"} "Edit"]
                                            [:button {:type "button", :class "btn btn-inverse-danger btn-rounded btn-fw"} "Delete"]]]]]]]]]]
    
        ]])