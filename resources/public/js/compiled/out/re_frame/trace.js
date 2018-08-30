// Compiled by ClojureScript 1.10.238 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if(typeof re_frame.trace.traces !== 'undefined'){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if(typeof re_frame.trace.next_delivery !== 'undefined'){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-trace#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__22893){
var map__22894 = p__22893;
var map__22894__$1 = ((((!((map__22894 == null)))?(((((map__22894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22894):map__22894);
var operation = cljs.core.get.call(null,map__22894__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__22894__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__22894__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__22894__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__3922__auto__ = child_of;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__22896_22908 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__22897_22909 = null;
var count__22898_22910 = (0);
var i__22899_22911 = (0);
while(true){
if((i__22899_22911 < count__22898_22910)){
var vec__22900_22912 = cljs.core._nth.call(null,chunk__22897_22909,i__22899_22911);
var k_22913 = cljs.core.nth.call(null,vec__22900_22912,(0),null);
var cb_22914 = cljs.core.nth.call(null,vec__22900_22912,(1),null);
try{cb_22914.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e22903){var e_22915 = e22903;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_22913,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_22915);
}

var G__22916 = seq__22896_22908;
var G__22917 = chunk__22897_22909;
var G__22918 = count__22898_22910;
var G__22919 = (i__22899_22911 + (1));
seq__22896_22908 = G__22916;
chunk__22897_22909 = G__22917;
count__22898_22910 = G__22918;
i__22899_22911 = G__22919;
continue;
} else {
var temp__4657__auto___22920 = cljs.core.seq.call(null,seq__22896_22908);
if(temp__4657__auto___22920){
var seq__22896_22921__$1 = temp__4657__auto___22920;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22896_22921__$1)){
var c__4319__auto___22922 = cljs.core.chunk_first.call(null,seq__22896_22921__$1);
var G__22923 = cljs.core.chunk_rest.call(null,seq__22896_22921__$1);
var G__22924 = c__4319__auto___22922;
var G__22925 = cljs.core.count.call(null,c__4319__auto___22922);
var G__22926 = (0);
seq__22896_22908 = G__22923;
chunk__22897_22909 = G__22924;
count__22898_22910 = G__22925;
i__22899_22911 = G__22926;
continue;
} else {
var vec__22904_22927 = cljs.core.first.call(null,seq__22896_22921__$1);
var k_22928 = cljs.core.nth.call(null,vec__22904_22927,(0),null);
var cb_22929 = cljs.core.nth.call(null,vec__22904_22927,(1),null);
try{cb_22929.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e22907){var e_22930 = e22907;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_22928,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_22930);
}

var G__22931 = cljs.core.next.call(null,seq__22896_22921__$1);
var G__22932 = null;
var G__22933 = (0);
var G__22934 = (0);
seq__22896_22908 = G__22931;
chunk__22897_22909 = G__22932;
count__22898_22910 = G__22933;
i__22899_22911 = G__22934;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (10)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map?rel=1535633068321
