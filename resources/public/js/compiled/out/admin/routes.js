// Compiled by ClojureScript 1.10.238 {}
goog.provide('admin.routes');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('re_frame.core');
goog.require('admin.events');
admin.routes.hook_browser_navigation_BANG_ = (function admin$routes$hook_browser_navigation_BANG_(){
var G__27639 = (new goog.History());
goog.events.listen(G__27639,goog.history.EventType.NAVIGATE,((function (G__27639){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__27639))
);

G__27639.setEnabled(true);

return G__27639;
});
admin.routes.app_routes = (function admin$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__27508__auto___27655 = (function (params__27509__auto__){
if(cljs.core.map_QMARK_.call(null,params__27509__auto__)){
var map__27640 = params__27509__auto__;
var map__27640__$1 = ((((!((map__27640 == null)))?(((((map__27640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27640.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27640):map__27640);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("admin.events","set-active-panel","admin.events/set-active-panel",-1802893756),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__27509__auto__)){
var vec__27642 = params__27509__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("admin.events","set-active-panel","admin.events/set-active-panel",-1802893756),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__27508__auto___27655);


var action__27508__auto___27656 = (function (params__27509__auto__){
if(cljs.core.map_QMARK_.call(null,params__27509__auto__)){
var map__27645 = params__27509__auto__;
var map__27645__$1 = ((((!((map__27645 == null)))?(((((map__27645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27645):map__27645);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("admin.events","set-active-panel","admin.events/set-active-panel",-1802893756),new cljs.core.Keyword(null,"all-posts","all-posts",-1285476533)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__27509__auto__)){
var vec__27647 = params__27509__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("admin.events","set-active-panel","admin.events/set-active-panel",-1802893756),new cljs.core.Keyword(null,"all-posts","all-posts",-1285476533)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/all-posts",action__27508__auto___27656);


var action__27508__auto___27657 = (function (params__27509__auto__){
if(cljs.core.map_QMARK_.call(null,params__27509__auto__)){
var map__27650 = params__27509__auto__;
var map__27650__$1 = ((((!((map__27650 == null)))?(((((map__27650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27650):map__27650);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("admin.events","set-active-panel","admin.events/set-active-panel",-1802893756),new cljs.core.Keyword(null,"new-post","new-post",-1808203791)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__27509__auto__)){
var vec__27652 = params__27509__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("admin.events","set-active-panel","admin.events/set-active-panel",-1802893756),new cljs.core.Keyword(null,"new-post","new-post",-1808203791)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/new-post",action__27508__auto___27657);


return admin.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1535633082930
