// Compiled by ClojureScript 1.10.238 {}
goog.provide('re_frisk.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.ratom');
goog.require('re_frame.core');
goog.require('re_frame.db');
goog.require('re_frame.subs');
goog.require('re_frisk.data');
goog.require('re_frisk.devtool');
goog.require('re_frisk.diff');
re_frisk.core.app_db_diff = (function re_frisk$core$app_db_diff(){
return re_frisk.diff.diff.call(null,cljs.core.deref.call(null,re_frisk.data.app_db_prev_event),cljs.core.deref.call(null,new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.re_frame_data))));
});
re_frisk.core.post_event_callback = (function re_frisk$core$post_event_callback(value){
var cntx = cljs.core.get.call(null,new cljs.core.Keyword(null,"contexts","contexts",4351546).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.deb_data)),cljs.core.first.call(null,value));
var indx = cljs.core.count.call(null,cljs.core.deref.call(null,re_frisk.data.re_frame_events));
var diff = re_frisk.core.app_db_diff.call(null);
cljs.core.reset_BANG_.call(null,re_frisk.data.app_db_prev_event,cljs.core.deref.call(null,new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.re_frame_data))));

return cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_events,cljs.core.conj,cljs.core.assoc.call(null,(function (){var or__3922__auto__ = cntx;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.Keyword(null,"event","event",301435442),value,new cljs.core.Keyword(null,"app-db-diff","app-db-diff",709588713),diff,new cljs.core.Keyword(null,"indx","indx",1571035590),indx));
});
re_frisk.core.re_frame_sub = (function re_frisk$core$re_frame_sub(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31023 = arguments.length;
var i__4500__auto___31024 = (0);
while(true){
if((i__4500__auto___31024 < len__4499__auto___31023)){
args__4502__auto__.push((arguments[i__4500__auto___31024]));

var G__31025 = (i__4500__auto___31024 + (1));
i__4500__auto___31024 = G__31025;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_frisk.core.re_frame_sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_frisk.core.re_frame_sub.cljs$core$IFn$_invoke$arity$variadic = (function (rest){
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"id-handler","id-handler",1013135509).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.re_frame_data)),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__31020_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.first.call(null,p1__31020_SHARP_)],[cljs.core.deref.call(null,cljs.core.second.call(null,p1__31020_SHARP_))]);
}),cljs.core.remove.call(null,(function (p1__31021_SHARP_){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.ffirst.call(null,p1__31021_SHARP_)),new cljs.core.Keyword("re-frisk.core","db","re-frisk.core/db",447694709))) || ((cljs.core.second.call(null,p1__31021_SHARP_) == null)));
}),cljs.core.deref.call(null,re_frame.subs.query__GT_reaction)))));
});

re_frisk.core.re_frame_sub.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_frisk.core.re_frame_sub.cljs$lang$applyTo = (function (seq31022){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31022));
});

re_frisk.core.render_re_frisk = (function re_frisk$core$render_re_frisk(params){
var div = document.createElement("div");
document.body.appendChild(div);

onbeforeunload = ((function (div){
return (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"win","win",-1624642689).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.deb_data)))){
return new cljs.core.Keyword(null,"win","win",-1624642689).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.deb_data)).alert("Application has been closed or refreshed. Debugger has been stopped!");
} else {
return null;
}
});})(div))
;

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.devtool.re_frisk_shell,params], null),div);
});
re_frisk.core.enable_re_frisk_BANG_ = (function re_frisk$core$enable_re_frisk_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31031 = arguments.length;
var i__4500__auto___31032 = (0);
while(true){
if((i__4500__auto___31032 < len__4499__auto___31031)){
args__4502__auto__.push((arguments[i__4500__auto___31032]));

var G__31033 = (i__4500__auto___31032 + (1));
i__4500__auto___31032 = G__31033;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_frisk.core.enable_re_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_frisk.core.enable_re_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__31027){
var vec__31028 = p__31027;
var opts = cljs.core.nth.call(null,vec__31028,(0),null);
if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.data.initialized))){
return null;
} else {
cljs.core.reset_BANG_.call(null,re_frisk.data.initialized,true);

if(cljs.core.truth_(re_frame.core.reg_sub)){
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("re-frisk.core","db","re-frisk.core/db",447694709),((function (vec__31028,opts){
return (function (db,_){
return db;
});})(vec__31028,opts))
);
} else {
re_frame.core.register_sub.call(null,new cljs.core.Keyword("re-frisk.core","db","re-frisk.core/db",447694709),((function (vec__31028,opts){
return (function (db,_){
return reagent.ratom.make_reaction.call(null,((function (vec__31028,opts){
return (function (){
return cljs.core.deref.call(null,db);
});})(vec__31028,opts))
);
});})(vec__31028,opts))
);
}

cljs.core.reset_BANG_.call(null,re_frisk.data.re_frame_data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"app-db","app-db",865606302),re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-frisk.core","db","re-frisk.core/db",447694709)], null)),new cljs.core.Keyword(null,"id-handler","id-handler",1013135509),reagent.core.atom.call(null,"not connected")], null));

cljs.core.swap_BANG_.call(null,re_frisk.data.deb_data,cljs.core.assoc,new cljs.core.Keyword(null,"prefs","prefs",-1818938470),opts);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"events?","events?",-780512682).cljs$core$IFn$_invoke$arity$1(opts),false)){
} else {
re_frame.core.add_post_event_callback.call(null,re_frisk.core.post_event_callback);
}

if(cljs.core.truth_(re_frame.subs.query__GT_reaction)){
cljs.core.add_watch.call(null,re_frame.db.app_db,new cljs.core.Keyword(null,"re-frisk-watcher","re-frisk-watcher",1126824275),re_frisk.core.re_frame_sub);

re_frisk.core.re_frame_sub.call(null);
} else {
}

return setTimeout(re_frisk.core.render_re_frisk,(100),opts);
}
});

re_frisk.core.enable_re_frisk_BANG_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_frisk.core.enable_re_frisk_BANG_.cljs$lang$applyTo = (function (seq31026){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31026));
});

re_frisk.core.enable_frisk_BANG_ = (function re_frisk$core$enable_frisk_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31035 = arguments.length;
var i__4500__auto___31036 = (0);
while(true){
if((i__4500__auto___31036 < len__4499__auto___31035)){
args__4502__auto__.push((arguments[i__4500__auto___31036]));

var G__31037 = (i__4500__auto___31036 + (1));
i__4500__auto___31036 = G__31037;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_frisk.core.enable_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_frisk.core.enable_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (params){
if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.data.initialized))){
return null;
} else {
cljs.core.reset_BANG_.call(null,re_frisk.data.initialized,true);

return setTimeout(re_frisk.core.render_re_frisk,(100),cljs.core.first.call(null,params));
}
});

re_frisk.core.enable_frisk_BANG_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_frisk.core.enable_frisk_BANG_.cljs$lang$applyTo = (function (seq31034){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31034));
});

re_frisk.core.add_data = (function re_frisk$core$add_data(key,data){
return cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.assoc,key,data);
});
re_frisk.core.add_in_data = (function re_frisk$core$add_in_data(keys,data){
return cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.assoc_in,keys,data);
});
re_frisk.core.watch_context = re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"re-frisk-watch-context","re-frisk-watch-context",1102368726),new cljs.core.Keyword(null,"before","before",-1633692388),(function (context){
cljs.core.swap_BANG_.call(null,re_frisk.data.deb_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contexts","contexts",4351546),cljs.core.first.call(null,new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context))),new cljs.core.Keyword(null,"before","before",-1633692388)], null),context);

return context;
}));
re_frisk.core.reg_view = (function re_frisk$core$reg_view(view,subs,events){
if(cljs.core.truth_(new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.re_frame_data)))){
cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view,new cljs.core.Keyword(null,"events","events",1792552201)], null),cljs.core.set.call(null,events));

cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view,new cljs.core.Keyword(null,"subs","subs",-186681991)], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__31038_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([p1__31038_SHARP_],[re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31038_SHARP_], null))]);
}),subs)));

var seq__31039 = cljs.core.seq.call(null,subs);
var chunk__31040 = null;
var count__31041 = (0);
var i__31042 = (0);
while(true){
if((i__31042 < count__31041)){
var s = cljs.core._nth.call(null,chunk__31040,i__31042);
cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subs","subs",-186681991),s], null),re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null)));


var G__31043 = seq__31039;
var G__31044 = chunk__31040;
var G__31045 = count__31041;
var G__31046 = (i__31042 + (1));
seq__31039 = G__31043;
chunk__31040 = G__31044;
count__31041 = G__31045;
i__31042 = G__31046;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31039);
if(temp__4657__auto__){
var seq__31039__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31039__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__31039__$1);
var G__31047 = cljs.core.chunk_rest.call(null,seq__31039__$1);
var G__31048 = c__4319__auto__;
var G__31049 = cljs.core.count.call(null,c__4319__auto__);
var G__31050 = (0);
seq__31039 = G__31047;
chunk__31040 = G__31048;
count__31041 = G__31049;
i__31042 = G__31050;
continue;
} else {
var s = cljs.core.first.call(null,seq__31039__$1);
cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subs","subs",-186681991),s], null),re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null)));


var G__31051 = cljs.core.next.call(null,seq__31039__$1);
var G__31052 = null;
var G__31053 = (0);
var G__31054 = (0);
seq__31039 = G__31051;
chunk__31040 = G__31052;
count__31041 = G__31053;
i__31042 = G__31054;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
re_frisk.core.unmount_view = (function re_frisk$core$unmount_view(view){
if(cljs.core.truth_(new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.re_frame_data)))){
return cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487)], null),cljs.core.dissoc,view);
} else {
return null;
}
});
(function (){var or__3922__auto__ = re_frame.core.reg_event_db;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return re_frame.core.register_handler;
}
})().call(null,new cljs.core.Keyword("re-frisk","update-db","re-frisk/update-db",-658524246),(function (_,p__31055){
var vec__31056 = p__31055;
var ___$1 = cljs.core.nth.call(null,vec__31056,(0),null);
var value = cljs.core.nth.call(null,vec__31056,(1),null);
return value;
}));

//# sourceMappingURL=core.js.map?rel=1535633095673
