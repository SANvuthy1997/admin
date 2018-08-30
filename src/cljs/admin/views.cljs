(ns admin.views
  (:require
   [re-frame.core :as re-frame]
   [re-com.core :as re-com]
   [admin.subs :as subs]
   [admin.admin-page.left-nav :refer [left-nav!]]
   [admin.admin-page.top-nav :refer [top-nav!]]
   [admin.admin-page.all-posts :refer [all-posts!]]))


;; home

(defn home-panel []
  [:div
    [:div {:class "container-scroller"}  
        (top-nav!)
        (left-nav!)]])


(defn all-posts []
  [:div 
    (top-nav!)
    (left-nav!)])

(defn new-post []
  [:div 
    (top-nav!)
    (left-nav!)])


;; main

(defn- panels [panel-name]
  (case panel-name
    :home-panel [home-panel]
    :all-posts [all-posts]
    :new-post [new-post]
    [:div]))

(defn show-panel [panel-name]
  [panels panel-name])

(defn main-panel []
  (let [active-panel (re-frame/subscribe [::subs/active-panel])]
    [re-com/v-box
     :height "100%"
     :children [[panels @active-panel]]]))
