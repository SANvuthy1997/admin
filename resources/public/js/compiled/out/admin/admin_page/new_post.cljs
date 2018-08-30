(ns admin.admin-page.new-post)
(defn new-post! []
    [:div {:class "main-panel"}
    [:div {:class "content-wrapper"}
        [:div {:class "row"}
        [:div {:class "col-12 stretch-card"}
            [:div {:class "card"}
                [:div {:class "card-body"}
                    [:form {:class "forms-sample" :style {:padding "0px 10%"}}
                        [:h4 {:class "card-title"} "Complete the form below"]
                        [:div {:class "form-group row"}
                            [:div {:class "col-sm-6"}
                                [:div {:class "form-group row"}
                                    [:label {:for "exampleInputEmail2", :class "col-sm-3 col-form-label"} "Title"]
                                    [:div {:class "col-sm-12"}
                                    [:input {:type "text", :class "form-control", :id "exampleInputEmail2", :placeholder "Title*"}]]]]
                        [:div {:class "col-sm-6"}
                                [:div {:class "form-group row"}
                                    [:label {:for "exampleInputEmail2", :class "col-sm-3 col-form-label"} "Date"]
                                    [:div {:class "col-sm-12"}
                                    [:input {:type "text", :class "form-control", :id "exampleInputEmail2", :placeholder "Date*"}]]]]]
                        
                        [:div {:class "form-group row"}
                            [:div {:class "col-sm-6"}
                                [:div {:class "form-group row"}
                                    [:label {:for "exampleInputEmail2", :class "col-sm-3 col-form-label"} "Participants"]
                                    [:div {:class "col-sm-12"}
                                    [:input {:type "text", :class "form-control", :id "exampleInputEmail2", :placeholder "Participants"}]]]]
                        [:div {:class "col-sm-6"}
                                [:div {:class "form-group row"}
                                    [:label {:for "exampleInputEmail2", :class "col-sm-3 col-form-label"} "Price"]
                                    [:div {:class "col-sm-12"}
                                    [:input {:type "text", :class "form-control", :id "exampleInputEmail2", :placeholder "Pirce"}]]]]]

                        [:div {:class "form-group row"}
                            [:div {:class "col-sm-6"} 
                                [:div {:class "form-group"}                             
                                [:label "Category"]
                                [:select {:class "form-control form-control-md", :id "exampleFormControlSelect3"}
                                    [:option "1"]
                                    [:option "2"]
                                    [:option "3"]
                                    [:option "4"]
                                    [:option "5"]]]]
                            [:div {:class "col-sm-6"}
                                [:div {:class "form-group"}
                                    [:label "Image upload"]
                                    [:input {:type "file", :name "img[]", :class "file-upload-default"}]
                                    [:div {:class "input-group col-xs-12"}
                                    [:input {:type "file", :class "form-control file-upload-info" , :placeholder "Upload Image"}]]]]]
                        
                        [:textarea {:name "content" :id "editor"}]
                        
                        [:button {:type "submit", :class "btn btn-success mr-2"} "Submit"]
                        [:button {:class "btn btn-light" :type "reset"} "Cancel"]]]]]]]])