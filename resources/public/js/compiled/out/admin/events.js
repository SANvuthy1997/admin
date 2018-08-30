// Compiled by ClojureScript 1.10.238 {}
goog.provide('admin.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('admin.db');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("admin.events","initialize-db","admin.events/initialize-db",1272501304),(function (_,___$1){
return admin.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("admin.events","set-active-panel","admin.events/set-active-panel",-1802893756),(function (db,p__27485){
var vec__27486 = p__27485;
var _ = cljs.core.nth.call(null,vec__27486,(0),null);
var active_panel = cljs.core.nth.call(null,vec__27486,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel);
}));

//# sourceMappingURL=events.js.map?rel=1535633082241
