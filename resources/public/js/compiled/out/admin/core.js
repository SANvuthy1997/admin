// Compiled by ClojureScript 1.10.238 {}
goog.provide('admin.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('admin.events');
goog.require('admin.routes');
goog.require('admin.views');
goog.require('admin.config');
admin.core.dev_setup = (function admin$core$dev_setup(){
if(admin.config.debug_QMARK_){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
admin.core.mount_root = (function admin$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [admin.views.main_panel], null),document.getElementById("app"));
});
admin.core.init = (function admin$core$init(){
admin.routes.app_routes.call(null);

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("admin.events","initialize-db","admin.events/initialize-db",1272501304)], null));

admin.core.dev_setup.call(null);

return admin.core.mount_root.call(null);
});
goog.exportSymbol('admin.core.init', admin.core.init);

//# sourceMappingURL=core.js.map?rel=1535638898577
