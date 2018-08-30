// Compiled by ClojureScript 1.10.238 {}
goog.provide('admin.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_com.core');
goog.require('admin.subs');
goog.require('admin.admin_page.left_nav');
goog.require('admin.admin_page.top_nav');
goog.require('admin.admin_page.all_posts');
admin.views.home_panel = (function admin$views$home_panel(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"container-scroller"], null),admin.admin_page.top_nav.top_nav_BANG_.call(null),admin.admin_page.left_nav.left_nav_BANG_.call(null)], null)], null);
});
admin.views.all_posts = (function admin$views$all_posts(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),admin.admin_page.top_nav.top_nav_BANG_.call(null),admin.admin_page.left_nav.left_nav_BANG_.call(null)], null);
});
admin.views.new_post = (function admin$views$new_post(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),admin.admin_page.top_nav.top_nav_BANG_.call(null),admin.admin_page.left_nav.left_nav_BANG_.call(null)], null);
});
admin.views.panels = (function admin$views$panels(panel_name){
var G__28414 = panel_name;
var G__28414__$1 = (((G__28414 instanceof cljs.core.Keyword))?G__28414.fqn:null);
switch (G__28414__$1) {
case "home-panel":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [admin.views.home_panel], null);

break;
case "all-posts":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [admin.views.all_posts], null);

break;
case "new-post":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [admin.views.new_post], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);

}
});
admin.views.show_panel = (function admin$views$show_panel(panel_name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [admin.views.panels,panel_name], null);
});
admin.views.main_panel = (function admin$views$main_panel(){
var active_panel = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("admin.subs","active-panel","admin.subs/active-panel",1259880200)], null));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [admin.views.panels,cljs.core.deref.call(null,active_panel)], null)], null)], null);
});

//# sourceMappingURL=views.js.map?rel=1535638898550
