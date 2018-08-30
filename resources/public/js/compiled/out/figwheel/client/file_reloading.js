// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3922__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3922__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__31380_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__31380_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__31381 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__31382 = null;
var count__31383 = (0);
var i__31384 = (0);
while(true){
if((i__31384 < count__31383)){
var n = cljs.core._nth.call(null,chunk__31382,i__31384);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__31385 = seq__31381;
var G__31386 = chunk__31382;
var G__31387 = count__31383;
var G__31388 = (i__31384 + (1));
seq__31381 = G__31385;
chunk__31382 = G__31386;
count__31383 = G__31387;
i__31384 = G__31388;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31381);
if(temp__4657__auto__){
var seq__31381__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31381__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__31381__$1);
var G__31389 = cljs.core.chunk_rest.call(null,seq__31381__$1);
var G__31390 = c__4319__auto__;
var G__31391 = cljs.core.count.call(null,c__4319__auto__);
var G__31392 = (0);
seq__31381 = G__31389;
chunk__31382 = G__31390;
count__31383 = G__31391;
i__31384 = G__31392;
continue;
} else {
var n = cljs.core.first.call(null,seq__31381__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__31393 = cljs.core.next.call(null,seq__31381__$1);
var G__31394 = null;
var G__31395 = (0);
var G__31396 = (0);
seq__31381 = G__31393;
chunk__31382 = G__31394;
count__31383 = G__31395;
i__31384 = G__31396;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__31397){
var vec__31398 = p__31397;
var _ = cljs.core.nth.call(null,vec__31398,(0),null);
var v = cljs.core.nth.call(null,vec__31398,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__31401){
var vec__31402 = p__31401;
var k = cljs.core.nth.call(null,vec__31402,(0),null);
var v = cljs.core.nth.call(null,vec__31402,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__31414_31422 = cljs.core.seq.call(null,deps);
var chunk__31415_31423 = null;
var count__31416_31424 = (0);
var i__31417_31425 = (0);
while(true){
if((i__31417_31425 < count__31416_31424)){
var dep_31426 = cljs.core._nth.call(null,chunk__31415_31423,i__31417_31425);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_31426;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_31426));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_31426,(depth + (1)),state);
} else {
}


var G__31427 = seq__31414_31422;
var G__31428 = chunk__31415_31423;
var G__31429 = count__31416_31424;
var G__31430 = (i__31417_31425 + (1));
seq__31414_31422 = G__31427;
chunk__31415_31423 = G__31428;
count__31416_31424 = G__31429;
i__31417_31425 = G__31430;
continue;
} else {
var temp__4657__auto___31431 = cljs.core.seq.call(null,seq__31414_31422);
if(temp__4657__auto___31431){
var seq__31414_31432__$1 = temp__4657__auto___31431;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31414_31432__$1)){
var c__4319__auto___31433 = cljs.core.chunk_first.call(null,seq__31414_31432__$1);
var G__31434 = cljs.core.chunk_rest.call(null,seq__31414_31432__$1);
var G__31435 = c__4319__auto___31433;
var G__31436 = cljs.core.count.call(null,c__4319__auto___31433);
var G__31437 = (0);
seq__31414_31422 = G__31434;
chunk__31415_31423 = G__31435;
count__31416_31424 = G__31436;
i__31417_31425 = G__31437;
continue;
} else {
var dep_31438 = cljs.core.first.call(null,seq__31414_31432__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_31438;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_31438));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_31438,(depth + (1)),state);
} else {
}


var G__31439 = cljs.core.next.call(null,seq__31414_31432__$1);
var G__31440 = null;
var G__31441 = (0);
var G__31442 = (0);
seq__31414_31422 = G__31439;
chunk__31415_31423 = G__31440;
count__31416_31424 = G__31441;
i__31417_31425 = G__31442;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__31418){
var vec__31419 = p__31418;
var seq__31420 = cljs.core.seq.call(null,vec__31419);
var first__31421 = cljs.core.first.call(null,seq__31420);
var seq__31420__$1 = cljs.core.next.call(null,seq__31420);
var x = first__31421;
var xs = seq__31420__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__31419,seq__31420,first__31421,seq__31420__$1,x,xs,get_deps__$1){
return (function (p1__31405_SHARP_){
return clojure.set.difference.call(null,p1__31405_SHARP_,x);
});})(vec__31419,seq__31420,first__31421,seq__31420__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__31443 = cljs.core.seq.call(null,provides);
var chunk__31444 = null;
var count__31445 = (0);
var i__31446 = (0);
while(true){
if((i__31446 < count__31445)){
var prov = cljs.core._nth.call(null,chunk__31444,i__31446);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31447_31455 = cljs.core.seq.call(null,requires);
var chunk__31448_31456 = null;
var count__31449_31457 = (0);
var i__31450_31458 = (0);
while(true){
if((i__31450_31458 < count__31449_31457)){
var req_31459 = cljs.core._nth.call(null,chunk__31448_31456,i__31450_31458);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31459,prov);


var G__31460 = seq__31447_31455;
var G__31461 = chunk__31448_31456;
var G__31462 = count__31449_31457;
var G__31463 = (i__31450_31458 + (1));
seq__31447_31455 = G__31460;
chunk__31448_31456 = G__31461;
count__31449_31457 = G__31462;
i__31450_31458 = G__31463;
continue;
} else {
var temp__4657__auto___31464 = cljs.core.seq.call(null,seq__31447_31455);
if(temp__4657__auto___31464){
var seq__31447_31465__$1 = temp__4657__auto___31464;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31447_31465__$1)){
var c__4319__auto___31466 = cljs.core.chunk_first.call(null,seq__31447_31465__$1);
var G__31467 = cljs.core.chunk_rest.call(null,seq__31447_31465__$1);
var G__31468 = c__4319__auto___31466;
var G__31469 = cljs.core.count.call(null,c__4319__auto___31466);
var G__31470 = (0);
seq__31447_31455 = G__31467;
chunk__31448_31456 = G__31468;
count__31449_31457 = G__31469;
i__31450_31458 = G__31470;
continue;
} else {
var req_31471 = cljs.core.first.call(null,seq__31447_31465__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31471,prov);


var G__31472 = cljs.core.next.call(null,seq__31447_31465__$1);
var G__31473 = null;
var G__31474 = (0);
var G__31475 = (0);
seq__31447_31455 = G__31472;
chunk__31448_31456 = G__31473;
count__31449_31457 = G__31474;
i__31450_31458 = G__31475;
continue;
}
} else {
}
}
break;
}


var G__31476 = seq__31443;
var G__31477 = chunk__31444;
var G__31478 = count__31445;
var G__31479 = (i__31446 + (1));
seq__31443 = G__31476;
chunk__31444 = G__31477;
count__31445 = G__31478;
i__31446 = G__31479;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31443);
if(temp__4657__auto__){
var seq__31443__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31443__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__31443__$1);
var G__31480 = cljs.core.chunk_rest.call(null,seq__31443__$1);
var G__31481 = c__4319__auto__;
var G__31482 = cljs.core.count.call(null,c__4319__auto__);
var G__31483 = (0);
seq__31443 = G__31480;
chunk__31444 = G__31481;
count__31445 = G__31482;
i__31446 = G__31483;
continue;
} else {
var prov = cljs.core.first.call(null,seq__31443__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31451_31484 = cljs.core.seq.call(null,requires);
var chunk__31452_31485 = null;
var count__31453_31486 = (0);
var i__31454_31487 = (0);
while(true){
if((i__31454_31487 < count__31453_31486)){
var req_31488 = cljs.core._nth.call(null,chunk__31452_31485,i__31454_31487);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31488,prov);


var G__31489 = seq__31451_31484;
var G__31490 = chunk__31452_31485;
var G__31491 = count__31453_31486;
var G__31492 = (i__31454_31487 + (1));
seq__31451_31484 = G__31489;
chunk__31452_31485 = G__31490;
count__31453_31486 = G__31491;
i__31454_31487 = G__31492;
continue;
} else {
var temp__4657__auto___31493__$1 = cljs.core.seq.call(null,seq__31451_31484);
if(temp__4657__auto___31493__$1){
var seq__31451_31494__$1 = temp__4657__auto___31493__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31451_31494__$1)){
var c__4319__auto___31495 = cljs.core.chunk_first.call(null,seq__31451_31494__$1);
var G__31496 = cljs.core.chunk_rest.call(null,seq__31451_31494__$1);
var G__31497 = c__4319__auto___31495;
var G__31498 = cljs.core.count.call(null,c__4319__auto___31495);
var G__31499 = (0);
seq__31451_31484 = G__31496;
chunk__31452_31485 = G__31497;
count__31453_31486 = G__31498;
i__31454_31487 = G__31499;
continue;
} else {
var req_31500 = cljs.core.first.call(null,seq__31451_31494__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31500,prov);


var G__31501 = cljs.core.next.call(null,seq__31451_31494__$1);
var G__31502 = null;
var G__31503 = (0);
var G__31504 = (0);
seq__31451_31484 = G__31501;
chunk__31452_31485 = G__31502;
count__31453_31486 = G__31503;
i__31454_31487 = G__31504;
continue;
}
} else {
}
}
break;
}


var G__31505 = cljs.core.next.call(null,seq__31443__$1);
var G__31506 = null;
var G__31507 = (0);
var G__31508 = (0);
seq__31443 = G__31505;
chunk__31444 = G__31506;
count__31445 = G__31507;
i__31446 = G__31508;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__31509_31513 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__31510_31514 = null;
var count__31511_31515 = (0);
var i__31512_31516 = (0);
while(true){
if((i__31512_31516 < count__31511_31515)){
var ns_31517 = cljs.core._nth.call(null,chunk__31510_31514,i__31512_31516);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31517);


var G__31518 = seq__31509_31513;
var G__31519 = chunk__31510_31514;
var G__31520 = count__31511_31515;
var G__31521 = (i__31512_31516 + (1));
seq__31509_31513 = G__31518;
chunk__31510_31514 = G__31519;
count__31511_31515 = G__31520;
i__31512_31516 = G__31521;
continue;
} else {
var temp__4657__auto___31522 = cljs.core.seq.call(null,seq__31509_31513);
if(temp__4657__auto___31522){
var seq__31509_31523__$1 = temp__4657__auto___31522;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31509_31523__$1)){
var c__4319__auto___31524 = cljs.core.chunk_first.call(null,seq__31509_31523__$1);
var G__31525 = cljs.core.chunk_rest.call(null,seq__31509_31523__$1);
var G__31526 = c__4319__auto___31524;
var G__31527 = cljs.core.count.call(null,c__4319__auto___31524);
var G__31528 = (0);
seq__31509_31513 = G__31525;
chunk__31510_31514 = G__31526;
count__31511_31515 = G__31527;
i__31512_31516 = G__31528;
continue;
} else {
var ns_31529 = cljs.core.first.call(null,seq__31509_31523__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31529);


var G__31530 = cljs.core.next.call(null,seq__31509_31523__$1);
var G__31531 = null;
var G__31532 = (0);
var G__31533 = (0);
seq__31509_31513 = G__31530;
chunk__31510_31514 = G__31531;
count__31511_31515 = G__31532;
i__31512_31516 = G__31533;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3922__auto__ = goog.require__;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__31534__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__31534 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31535__i = 0, G__31535__a = new Array(arguments.length -  0);
while (G__31535__i < G__31535__a.length) {G__31535__a[G__31535__i] = arguments[G__31535__i + 0]; ++G__31535__i;}
  args = new cljs.core.IndexedSeq(G__31535__a,0,null);
} 
return G__31534__delegate.call(this,args);};
G__31534.cljs$lang$maxFixedArity = 0;
G__31534.cljs$lang$applyTo = (function (arglist__31536){
var args = cljs.core.seq(arglist__31536);
return G__31534__delegate(args);
});
G__31534.cljs$core$IFn$_invoke$arity$variadic = G__31534__delegate;
return G__31534;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__31537_SHARP_,p2__31538_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31537_SHARP_)].join('')),p2__31538_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__31539_SHARP_,p2__31540_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31539_SHARP_)].join(''),p2__31540_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__31541 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__31541.addCallback(((function (G__31541){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__31541))
);

G__31541.addErrback(((function (G__31541){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__31541))
);

return G__31541;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e31542){if((e31542 instanceof Error)){
var e = e31542;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31542;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e31543){if((e31543 instanceof Error)){
var e = e31543;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31543;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__31544 = cljs.core._EQ_;
var expr__31545 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__31544.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__31545))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__31544.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__31545))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__31544.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__31545))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__31544,expr__31545){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__31544,expr__31545))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__31547,callback){
var map__31548 = p__31547;
var map__31548__$1 = ((((!((map__31548 == null)))?(((((map__31548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31548):map__31548);
var file_msg = map__31548__$1;
var request_url = cljs.core.get.call(null,map__31548__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__31548,map__31548__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__31548,map__31548__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__24184__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24184__auto__){
return (function (){
var f__24185__auto__ = (function (){var switch__24096__auto__ = ((function (c__24184__auto__){
return (function (state_31586){
var state_val_31587 = (state_31586[(1)]);
if((state_val_31587 === (7))){
var inst_31582 = (state_31586[(2)]);
var state_31586__$1 = state_31586;
var statearr_31588_31614 = state_31586__$1;
(statearr_31588_31614[(2)] = inst_31582);

(statearr_31588_31614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31587 === (1))){
var state_31586__$1 = state_31586;
var statearr_31589_31615 = state_31586__$1;
(statearr_31589_31615[(2)] = null);

(statearr_31589_31615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31587 === (4))){
var inst_31552 = (state_31586[(7)]);
var inst_31552__$1 = (state_31586[(2)]);
var state_31586__$1 = (function (){var statearr_31590 = state_31586;
(statearr_31590[(7)] = inst_31552__$1);

return statearr_31590;
})();
if(cljs.core.truth_(inst_31552__$1)){
var statearr_31591_31616 = state_31586__$1;
(statearr_31591_31616[(1)] = (5));

} else {
var statearr_31592_31617 = state_31586__$1;
(statearr_31592_31617[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31587 === (15))){
var inst_31567 = (state_31586[(8)]);
var inst_31565 = (state_31586[(9)]);
var inst_31569 = inst_31567.call(null,inst_31565);
var state_31586__$1 = state_31586;
var statearr_31593_31618 = state_31586__$1;
(statearr_31593_31618[(2)] = inst_31569);

(statearr_31593_31618[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31587 === (13))){
var inst_31576 = (state_31586[(2)]);
var state_31586__$1 = state_31586;
var statearr_31594_31619 = state_31586__$1;
(statearr_31594_31619[(2)] = inst_31576);

(statearr_31594_31619[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31587 === (6))){
var state_31586__$1 = state_31586;
var statearr_31595_31620 = state_31586__$1;
(statearr_31595_31620[(2)] = null);

(statearr_31595_31620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31587 === (17))){
var inst_31573 = (state_31586[(2)]);
var state_31586__$1 = state_31586;
var statearr_31596_31621 = state_31586__$1;
(statearr_31596_31621[(2)] = inst_31573);

(statearr_31596_31621[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31587 === (3))){
var inst_31584 = (state_31586[(2)]);
var state_31586__$1 = state_31586;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31586__$1,inst_31584);
} else {
if((state_val_31587 === (12))){
var state_31586__$1 = state_31586;
var statearr_31597_31622 = state_31586__$1;
(statearr_31597_31622[(2)] = null);

(statearr_31597_31622[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31587 === (2))){
var state_31586__$1 = state_31586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31586__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_31587 === (11))){
var inst_31557 = (state_31586[(10)]);
var inst_31563 = figwheel.client.file_reloading.blocking_load.call(null,inst_31557);
var state_31586__$1 = state_31586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31586__$1,(14),inst_31563);
} else {
if((state_val_31587 === (9))){
var inst_31557 = (state_31586[(10)]);
var state_31586__$1 = state_31586;
if(cljs.core.truth_(inst_31557)){
var statearr_31598_31623 = state_31586__$1;
(statearr_31598_31623[(1)] = (11));

} else {
var statearr_31599_31624 = state_31586__$1;
(statearr_31599_31624[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31587 === (5))){
var inst_31552 = (state_31586[(7)]);
var inst_31558 = (state_31586[(11)]);
var inst_31557 = cljs.core.nth.call(null,inst_31552,(0),null);
var inst_31558__$1 = cljs.core.nth.call(null,inst_31552,(1),null);
var state_31586__$1 = (function (){var statearr_31600 = state_31586;
(statearr_31600[(10)] = inst_31557);

(statearr_31600[(11)] = inst_31558__$1);

return statearr_31600;
})();
if(cljs.core.truth_(inst_31558__$1)){
var statearr_31601_31625 = state_31586__$1;
(statearr_31601_31625[(1)] = (8));

} else {
var statearr_31602_31626 = state_31586__$1;
(statearr_31602_31626[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31587 === (14))){
var inst_31557 = (state_31586[(10)]);
var inst_31567 = (state_31586[(8)]);
var inst_31565 = (state_31586[(2)]);
var inst_31566 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_31567__$1 = cljs.core.get.call(null,inst_31566,inst_31557);
var state_31586__$1 = (function (){var statearr_31603 = state_31586;
(statearr_31603[(8)] = inst_31567__$1);

(statearr_31603[(9)] = inst_31565);

return statearr_31603;
})();
if(cljs.core.truth_(inst_31567__$1)){
var statearr_31604_31627 = state_31586__$1;
(statearr_31604_31627[(1)] = (15));

} else {
var statearr_31605_31628 = state_31586__$1;
(statearr_31605_31628[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31587 === (16))){
var inst_31565 = (state_31586[(9)]);
var inst_31571 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_31565);
var state_31586__$1 = state_31586;
var statearr_31606_31629 = state_31586__$1;
(statearr_31606_31629[(2)] = inst_31571);

(statearr_31606_31629[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31587 === (10))){
var inst_31578 = (state_31586[(2)]);
var state_31586__$1 = (function (){var statearr_31607 = state_31586;
(statearr_31607[(12)] = inst_31578);

return statearr_31607;
})();
var statearr_31608_31630 = state_31586__$1;
(statearr_31608_31630[(2)] = null);

(statearr_31608_31630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31587 === (8))){
var inst_31558 = (state_31586[(11)]);
var inst_31560 = eval(inst_31558);
var state_31586__$1 = state_31586;
var statearr_31609_31631 = state_31586__$1;
(statearr_31609_31631[(2)] = inst_31560);

(statearr_31609_31631[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24184__auto__))
;
return ((function (switch__24096__auto__,c__24184__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__24097__auto__ = null;
var figwheel$client$file_reloading$state_machine__24097__auto____0 = (function (){
var statearr_31610 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31610[(0)] = figwheel$client$file_reloading$state_machine__24097__auto__);

(statearr_31610[(1)] = (1));

return statearr_31610;
});
var figwheel$client$file_reloading$state_machine__24097__auto____1 = (function (state_31586){
while(true){
var ret_value__24098__auto__ = (function (){try{while(true){
var result__24099__auto__ = switch__24096__auto__.call(null,state_31586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24099__auto__;
}
break;
}
}catch (e31611){if((e31611 instanceof Object)){
var ex__24100__auto__ = e31611;
var statearr_31612_31632 = state_31586;
(statearr_31612_31632[(5)] = ex__24100__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31633 = state_31586;
state_31586 = G__31633;
continue;
} else {
return ret_value__24098__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24097__auto__ = function(state_31586){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24097__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24097__auto____1.call(this,state_31586);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24097__auto____0;
figwheel$client$file_reloading$state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24097__auto____1;
return figwheel$client$file_reloading$state_machine__24097__auto__;
})()
;})(switch__24096__auto__,c__24184__auto__))
})();
var state__24186__auto__ = (function (){var statearr_31613 = f__24185__auto__.call(null);
(statearr_31613[(6)] = c__24184__auto__);

return statearr_31613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24186__auto__);
});})(c__24184__auto__))
);

return c__24184__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__31635 = arguments.length;
switch (G__31635) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__31637,callback){
var map__31638 = p__31637;
var map__31638__$1 = ((((!((map__31638 == null)))?(((((map__31638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31638):map__31638);
var file_msg = map__31638__$1;
var namespace = cljs.core.get.call(null,map__31638__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__31638,map__31638__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__31638,map__31638__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__31640){
var map__31641 = p__31640;
var map__31641__$1 = ((((!((map__31641 == null)))?(((((map__31641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31641.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31641):map__31641);
var file_msg = map__31641__$1;
var namespace = cljs.core.get.call(null,map__31641__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__31643){
var map__31644 = p__31643;
var map__31644__$1 = ((((!((map__31644 == null)))?(((((map__31644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31644.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31644):map__31644);
var file_msg = map__31644__$1;
var namespace = cljs.core.get.call(null,map__31644__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3911__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3911__auto__){
var or__3922__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3911__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__31646,callback){
var map__31647 = p__31646;
var map__31647__$1 = ((((!((map__31647 == null)))?(((((map__31647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31647):map__31647);
var file_msg = map__31647__$1;
var request_url = cljs.core.get.call(null,map__31647__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__31647__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__24184__auto___31697 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24184__auto___31697,out){
return (function (){
var f__24185__auto__ = (function (){var switch__24096__auto__ = ((function (c__24184__auto___31697,out){
return (function (state_31682){
var state_val_31683 = (state_31682[(1)]);
if((state_val_31683 === (1))){
var inst_31656 = cljs.core.seq.call(null,files);
var inst_31657 = cljs.core.first.call(null,inst_31656);
var inst_31658 = cljs.core.next.call(null,inst_31656);
var inst_31659 = files;
var state_31682__$1 = (function (){var statearr_31684 = state_31682;
(statearr_31684[(7)] = inst_31657);

(statearr_31684[(8)] = inst_31659);

(statearr_31684[(9)] = inst_31658);

return statearr_31684;
})();
var statearr_31685_31698 = state_31682__$1;
(statearr_31685_31698[(2)] = null);

(statearr_31685_31698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31683 === (2))){
var inst_31665 = (state_31682[(10)]);
var inst_31659 = (state_31682[(8)]);
var inst_31664 = cljs.core.seq.call(null,inst_31659);
var inst_31665__$1 = cljs.core.first.call(null,inst_31664);
var inst_31666 = cljs.core.next.call(null,inst_31664);
var inst_31667 = (inst_31665__$1 == null);
var inst_31668 = cljs.core.not.call(null,inst_31667);
var state_31682__$1 = (function (){var statearr_31686 = state_31682;
(statearr_31686[(10)] = inst_31665__$1);

(statearr_31686[(11)] = inst_31666);

return statearr_31686;
})();
if(inst_31668){
var statearr_31687_31699 = state_31682__$1;
(statearr_31687_31699[(1)] = (4));

} else {
var statearr_31688_31700 = state_31682__$1;
(statearr_31688_31700[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31683 === (3))){
var inst_31680 = (state_31682[(2)]);
var state_31682__$1 = state_31682;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31682__$1,inst_31680);
} else {
if((state_val_31683 === (4))){
var inst_31665 = (state_31682[(10)]);
var inst_31670 = figwheel.client.file_reloading.reload_js_file.call(null,inst_31665);
var state_31682__$1 = state_31682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31682__$1,(7),inst_31670);
} else {
if((state_val_31683 === (5))){
var inst_31676 = cljs.core.async.close_BANG_.call(null,out);
var state_31682__$1 = state_31682;
var statearr_31689_31701 = state_31682__$1;
(statearr_31689_31701[(2)] = inst_31676);

(statearr_31689_31701[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31683 === (6))){
var inst_31678 = (state_31682[(2)]);
var state_31682__$1 = state_31682;
var statearr_31690_31702 = state_31682__$1;
(statearr_31690_31702[(2)] = inst_31678);

(statearr_31690_31702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31683 === (7))){
var inst_31666 = (state_31682[(11)]);
var inst_31672 = (state_31682[(2)]);
var inst_31673 = cljs.core.async.put_BANG_.call(null,out,inst_31672);
var inst_31659 = inst_31666;
var state_31682__$1 = (function (){var statearr_31691 = state_31682;
(statearr_31691[(8)] = inst_31659);

(statearr_31691[(12)] = inst_31673);

return statearr_31691;
})();
var statearr_31692_31703 = state_31682__$1;
(statearr_31692_31703[(2)] = null);

(statearr_31692_31703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__24184__auto___31697,out))
;
return ((function (switch__24096__auto__,c__24184__auto___31697,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24097__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24097__auto____0 = (function (){
var statearr_31693 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31693[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24097__auto__);

(statearr_31693[(1)] = (1));

return statearr_31693;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24097__auto____1 = (function (state_31682){
while(true){
var ret_value__24098__auto__ = (function (){try{while(true){
var result__24099__auto__ = switch__24096__auto__.call(null,state_31682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24099__auto__;
}
break;
}
}catch (e31694){if((e31694 instanceof Object)){
var ex__24100__auto__ = e31694;
var statearr_31695_31704 = state_31682;
(statearr_31695_31704[(5)] = ex__24100__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31705 = state_31682;
state_31682 = G__31705;
continue;
} else {
return ret_value__24098__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24097__auto__ = function(state_31682){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24097__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24097__auto____1.call(this,state_31682);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24097__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24097__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24097__auto__;
})()
;})(switch__24096__auto__,c__24184__auto___31697,out))
})();
var state__24186__auto__ = (function (){var statearr_31696 = f__24185__auto__.call(null);
(statearr_31696[(6)] = c__24184__auto___31697);

return statearr_31696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24186__auto__);
});})(c__24184__auto___31697,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__31706,opts){
var map__31707 = p__31706;
var map__31707__$1 = ((((!((map__31707 == null)))?(((((map__31707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31707):map__31707);
var eval_body = cljs.core.get.call(null,map__31707__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__31707__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3911__auto__ = eval_body;
if(cljs.core.truth_(and__3911__auto__)){
return typeof eval_body === 'string';
} else {
return and__3911__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e31709){var e = e31709;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__31710_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31710_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__31711){
var vec__31712 = p__31711;
var k = cljs.core.nth.call(null,vec__31712,(0),null);
var v = cljs.core.nth.call(null,vec__31712,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__31715){
var vec__31716 = p__31715;
var k = cljs.core.nth.call(null,vec__31716,(0),null);
var v = cljs.core.nth.call(null,vec__31716,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__31722,p__31723){
var map__31724 = p__31722;
var map__31724__$1 = ((((!((map__31724 == null)))?(((((map__31724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31724):map__31724);
var opts = map__31724__$1;
var before_jsload = cljs.core.get.call(null,map__31724__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__31724__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__31724__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__31725 = p__31723;
var map__31725__$1 = ((((!((map__31725 == null)))?(((((map__31725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31725.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31725):map__31725);
var msg = map__31725__$1;
var files = cljs.core.get.call(null,map__31725__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__31725__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__31725__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24184__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24184__auto__,map__31724,map__31724__$1,opts,before_jsload,on_jsload,reload_dependents,map__31725,map__31725__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__24185__auto__ = (function (){var switch__24096__auto__ = ((function (c__24184__auto__,map__31724,map__31724__$1,opts,before_jsload,on_jsload,reload_dependents,map__31725,map__31725__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_31879){
var state_val_31880 = (state_31879[(1)]);
if((state_val_31880 === (7))){
var inst_31741 = (state_31879[(7)]);
var inst_31742 = (state_31879[(8)]);
var inst_31739 = (state_31879[(9)]);
var inst_31740 = (state_31879[(10)]);
var inst_31747 = cljs.core._nth.call(null,inst_31740,inst_31742);
var inst_31748 = figwheel.client.file_reloading.eval_body.call(null,inst_31747,opts);
var inst_31749 = (inst_31742 + (1));
var tmp31881 = inst_31741;
var tmp31882 = inst_31739;
var tmp31883 = inst_31740;
var inst_31739__$1 = tmp31882;
var inst_31740__$1 = tmp31883;
var inst_31741__$1 = tmp31881;
var inst_31742__$1 = inst_31749;
var state_31879__$1 = (function (){var statearr_31884 = state_31879;
(statearr_31884[(7)] = inst_31741__$1);

(statearr_31884[(8)] = inst_31742__$1);

(statearr_31884[(11)] = inst_31748);

(statearr_31884[(9)] = inst_31739__$1);

(statearr_31884[(10)] = inst_31740__$1);

return statearr_31884;
})();
var statearr_31885_31968 = state_31879__$1;
(statearr_31885_31968[(2)] = null);

(statearr_31885_31968[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (20))){
var inst_31782 = (state_31879[(12)]);
var inst_31790 = figwheel.client.file_reloading.sort_files.call(null,inst_31782);
var state_31879__$1 = state_31879;
var statearr_31886_31969 = state_31879__$1;
(statearr_31886_31969[(2)] = inst_31790);

(statearr_31886_31969[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (27))){
var state_31879__$1 = state_31879;
var statearr_31887_31970 = state_31879__$1;
(statearr_31887_31970[(2)] = null);

(statearr_31887_31970[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (1))){
var inst_31731 = (state_31879[(13)]);
var inst_31728 = before_jsload.call(null,files);
var inst_31729 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_31730 = (function (){return ((function (inst_31731,inst_31728,inst_31729,state_val_31880,c__24184__auto__,map__31724,map__31724__$1,opts,before_jsload,on_jsload,reload_dependents,map__31725,map__31725__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31719_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31719_SHARP_);
});
;})(inst_31731,inst_31728,inst_31729,state_val_31880,c__24184__auto__,map__31724,map__31724__$1,opts,before_jsload,on_jsload,reload_dependents,map__31725,map__31725__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31731__$1 = cljs.core.filter.call(null,inst_31730,files);
var inst_31732 = cljs.core.not_empty.call(null,inst_31731__$1);
var state_31879__$1 = (function (){var statearr_31888 = state_31879;
(statearr_31888[(13)] = inst_31731__$1);

(statearr_31888[(14)] = inst_31729);

(statearr_31888[(15)] = inst_31728);

return statearr_31888;
})();
if(cljs.core.truth_(inst_31732)){
var statearr_31889_31971 = state_31879__$1;
(statearr_31889_31971[(1)] = (2));

} else {
var statearr_31890_31972 = state_31879__$1;
(statearr_31890_31972[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (24))){
var state_31879__$1 = state_31879;
var statearr_31891_31973 = state_31879__$1;
(statearr_31891_31973[(2)] = null);

(statearr_31891_31973[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (39))){
var inst_31832 = (state_31879[(16)]);
var state_31879__$1 = state_31879;
var statearr_31892_31974 = state_31879__$1;
(statearr_31892_31974[(2)] = inst_31832);

(statearr_31892_31974[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (46))){
var inst_31874 = (state_31879[(2)]);
var state_31879__$1 = state_31879;
var statearr_31893_31975 = state_31879__$1;
(statearr_31893_31975[(2)] = inst_31874);

(statearr_31893_31975[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (4))){
var inst_31776 = (state_31879[(2)]);
var inst_31777 = cljs.core.List.EMPTY;
var inst_31778 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_31777);
var inst_31779 = (function (){return ((function (inst_31776,inst_31777,inst_31778,state_val_31880,c__24184__auto__,map__31724,map__31724__$1,opts,before_jsload,on_jsload,reload_dependents,map__31725,map__31725__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31720_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31720_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31720_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__31720_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_31776,inst_31777,inst_31778,state_val_31880,c__24184__auto__,map__31724,map__31724__$1,opts,before_jsload,on_jsload,reload_dependents,map__31725,map__31725__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31780 = cljs.core.filter.call(null,inst_31779,files);
var inst_31781 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_31782 = cljs.core.concat.call(null,inst_31780,inst_31781);
var state_31879__$1 = (function (){var statearr_31894 = state_31879;
(statearr_31894[(12)] = inst_31782);

(statearr_31894[(17)] = inst_31778);

(statearr_31894[(18)] = inst_31776);

return statearr_31894;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_31895_31976 = state_31879__$1;
(statearr_31895_31976[(1)] = (16));

} else {
var statearr_31896_31977 = state_31879__$1;
(statearr_31896_31977[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (15))){
var inst_31766 = (state_31879[(2)]);
var state_31879__$1 = state_31879;
var statearr_31897_31978 = state_31879__$1;
(statearr_31897_31978[(2)] = inst_31766);

(statearr_31897_31978[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (21))){
var inst_31792 = (state_31879[(19)]);
var inst_31792__$1 = (state_31879[(2)]);
var inst_31793 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31792__$1);
var state_31879__$1 = (function (){var statearr_31898 = state_31879;
(statearr_31898[(19)] = inst_31792__$1);

return statearr_31898;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31879__$1,(22),inst_31793);
} else {
if((state_val_31880 === (31))){
var inst_31877 = (state_31879[(2)]);
var state_31879__$1 = state_31879;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31879__$1,inst_31877);
} else {
if((state_val_31880 === (32))){
var inst_31832 = (state_31879[(16)]);
var inst_31837 = inst_31832.cljs$lang$protocol_mask$partition0$;
var inst_31838 = (inst_31837 & (64));
var inst_31839 = inst_31832.cljs$core$ISeq$;
var inst_31840 = (cljs.core.PROTOCOL_SENTINEL === inst_31839);
var inst_31841 = ((inst_31838) || (inst_31840));
var state_31879__$1 = state_31879;
if(cljs.core.truth_(inst_31841)){
var statearr_31899_31979 = state_31879__$1;
(statearr_31899_31979[(1)] = (35));

} else {
var statearr_31900_31980 = state_31879__$1;
(statearr_31900_31980[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (40))){
var inst_31854 = (state_31879[(20)]);
var inst_31853 = (state_31879[(2)]);
var inst_31854__$1 = cljs.core.get.call(null,inst_31853,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_31855 = cljs.core.get.call(null,inst_31853,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_31856 = cljs.core.not_empty.call(null,inst_31854__$1);
var state_31879__$1 = (function (){var statearr_31901 = state_31879;
(statearr_31901[(21)] = inst_31855);

(statearr_31901[(20)] = inst_31854__$1);

return statearr_31901;
})();
if(cljs.core.truth_(inst_31856)){
var statearr_31902_31981 = state_31879__$1;
(statearr_31902_31981[(1)] = (41));

} else {
var statearr_31903_31982 = state_31879__$1;
(statearr_31903_31982[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (33))){
var state_31879__$1 = state_31879;
var statearr_31904_31983 = state_31879__$1;
(statearr_31904_31983[(2)] = false);

(statearr_31904_31983[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (13))){
var inst_31752 = (state_31879[(22)]);
var inst_31756 = cljs.core.chunk_first.call(null,inst_31752);
var inst_31757 = cljs.core.chunk_rest.call(null,inst_31752);
var inst_31758 = cljs.core.count.call(null,inst_31756);
var inst_31739 = inst_31757;
var inst_31740 = inst_31756;
var inst_31741 = inst_31758;
var inst_31742 = (0);
var state_31879__$1 = (function (){var statearr_31905 = state_31879;
(statearr_31905[(7)] = inst_31741);

(statearr_31905[(8)] = inst_31742);

(statearr_31905[(9)] = inst_31739);

(statearr_31905[(10)] = inst_31740);

return statearr_31905;
})();
var statearr_31906_31984 = state_31879__$1;
(statearr_31906_31984[(2)] = null);

(statearr_31906_31984[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (22))){
var inst_31800 = (state_31879[(23)]);
var inst_31792 = (state_31879[(19)]);
var inst_31795 = (state_31879[(24)]);
var inst_31796 = (state_31879[(25)]);
var inst_31795__$1 = (state_31879[(2)]);
var inst_31796__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31795__$1);
var inst_31797 = (function (){var all_files = inst_31792;
var res_SINGLEQUOTE_ = inst_31795__$1;
var res = inst_31796__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_31800,inst_31792,inst_31795,inst_31796,inst_31795__$1,inst_31796__$1,state_val_31880,c__24184__auto__,map__31724,map__31724__$1,opts,before_jsload,on_jsload,reload_dependents,map__31725,map__31725__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31721_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__31721_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_31800,inst_31792,inst_31795,inst_31796,inst_31795__$1,inst_31796__$1,state_val_31880,c__24184__auto__,map__31724,map__31724__$1,opts,before_jsload,on_jsload,reload_dependents,map__31725,map__31725__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31798 = cljs.core.filter.call(null,inst_31797,inst_31795__$1);
var inst_31799 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_31800__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31799);
var inst_31801 = cljs.core.not_empty.call(null,inst_31800__$1);
var state_31879__$1 = (function (){var statearr_31907 = state_31879;
(statearr_31907[(23)] = inst_31800__$1);

(statearr_31907[(26)] = inst_31798);

(statearr_31907[(24)] = inst_31795__$1);

(statearr_31907[(25)] = inst_31796__$1);

return statearr_31907;
})();
if(cljs.core.truth_(inst_31801)){
var statearr_31908_31985 = state_31879__$1;
(statearr_31908_31985[(1)] = (23));

} else {
var statearr_31909_31986 = state_31879__$1;
(statearr_31909_31986[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (36))){
var state_31879__$1 = state_31879;
var statearr_31910_31987 = state_31879__$1;
(statearr_31910_31987[(2)] = false);

(statearr_31910_31987[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (41))){
var inst_31854 = (state_31879[(20)]);
var inst_31858 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_31859 = cljs.core.map.call(null,inst_31858,inst_31854);
var inst_31860 = cljs.core.pr_str.call(null,inst_31859);
var inst_31861 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31860)].join('');
var inst_31862 = figwheel.client.utils.log.call(null,inst_31861);
var state_31879__$1 = state_31879;
var statearr_31911_31988 = state_31879__$1;
(statearr_31911_31988[(2)] = inst_31862);

(statearr_31911_31988[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (43))){
var inst_31855 = (state_31879[(21)]);
var inst_31865 = (state_31879[(2)]);
var inst_31866 = cljs.core.not_empty.call(null,inst_31855);
var state_31879__$1 = (function (){var statearr_31912 = state_31879;
(statearr_31912[(27)] = inst_31865);

return statearr_31912;
})();
if(cljs.core.truth_(inst_31866)){
var statearr_31913_31989 = state_31879__$1;
(statearr_31913_31989[(1)] = (44));

} else {
var statearr_31914_31990 = state_31879__$1;
(statearr_31914_31990[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (29))){
var inst_31832 = (state_31879[(16)]);
var inst_31800 = (state_31879[(23)]);
var inst_31798 = (state_31879[(26)]);
var inst_31792 = (state_31879[(19)]);
var inst_31795 = (state_31879[(24)]);
var inst_31796 = (state_31879[(25)]);
var inst_31828 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_31831 = (function (){var all_files = inst_31792;
var res_SINGLEQUOTE_ = inst_31795;
var res = inst_31796;
var files_not_loaded = inst_31798;
var dependencies_that_loaded = inst_31800;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31832,inst_31800,inst_31798,inst_31792,inst_31795,inst_31796,inst_31828,state_val_31880,c__24184__auto__,map__31724,map__31724__$1,opts,before_jsload,on_jsload,reload_dependents,map__31725,map__31725__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31830){
var map__31915 = p__31830;
var map__31915__$1 = ((((!((map__31915 == null)))?(((((map__31915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31915):map__31915);
var namespace = cljs.core.get.call(null,map__31915__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31832,inst_31800,inst_31798,inst_31792,inst_31795,inst_31796,inst_31828,state_val_31880,c__24184__auto__,map__31724,map__31724__$1,opts,before_jsload,on_jsload,reload_dependents,map__31725,map__31725__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31832__$1 = cljs.core.group_by.call(null,inst_31831,inst_31798);
var inst_31834 = (inst_31832__$1 == null);
var inst_31835 = cljs.core.not.call(null,inst_31834);
var state_31879__$1 = (function (){var statearr_31917 = state_31879;
(statearr_31917[(28)] = inst_31828);

(statearr_31917[(16)] = inst_31832__$1);

return statearr_31917;
})();
if(inst_31835){
var statearr_31918_31991 = state_31879__$1;
(statearr_31918_31991[(1)] = (32));

} else {
var statearr_31919_31992 = state_31879__$1;
(statearr_31919_31992[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (44))){
var inst_31855 = (state_31879[(21)]);
var inst_31868 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31855);
var inst_31869 = cljs.core.pr_str.call(null,inst_31868);
var inst_31870 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31869)].join('');
var inst_31871 = figwheel.client.utils.log.call(null,inst_31870);
var state_31879__$1 = state_31879;
var statearr_31920_31993 = state_31879__$1;
(statearr_31920_31993[(2)] = inst_31871);

(statearr_31920_31993[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (6))){
var inst_31773 = (state_31879[(2)]);
var state_31879__$1 = state_31879;
var statearr_31921_31994 = state_31879__$1;
(statearr_31921_31994[(2)] = inst_31773);

(statearr_31921_31994[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (28))){
var inst_31798 = (state_31879[(26)]);
var inst_31825 = (state_31879[(2)]);
var inst_31826 = cljs.core.not_empty.call(null,inst_31798);
var state_31879__$1 = (function (){var statearr_31922 = state_31879;
(statearr_31922[(29)] = inst_31825);

return statearr_31922;
})();
if(cljs.core.truth_(inst_31826)){
var statearr_31923_31995 = state_31879__$1;
(statearr_31923_31995[(1)] = (29));

} else {
var statearr_31924_31996 = state_31879__$1;
(statearr_31924_31996[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (25))){
var inst_31796 = (state_31879[(25)]);
var inst_31812 = (state_31879[(2)]);
var inst_31813 = cljs.core.not_empty.call(null,inst_31796);
var state_31879__$1 = (function (){var statearr_31925 = state_31879;
(statearr_31925[(30)] = inst_31812);

return statearr_31925;
})();
if(cljs.core.truth_(inst_31813)){
var statearr_31926_31997 = state_31879__$1;
(statearr_31926_31997[(1)] = (26));

} else {
var statearr_31927_31998 = state_31879__$1;
(statearr_31927_31998[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (34))){
var inst_31848 = (state_31879[(2)]);
var state_31879__$1 = state_31879;
if(cljs.core.truth_(inst_31848)){
var statearr_31928_31999 = state_31879__$1;
(statearr_31928_31999[(1)] = (38));

} else {
var statearr_31929_32000 = state_31879__$1;
(statearr_31929_32000[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (17))){
var state_31879__$1 = state_31879;
var statearr_31930_32001 = state_31879__$1;
(statearr_31930_32001[(2)] = recompile_dependents);

(statearr_31930_32001[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (3))){
var state_31879__$1 = state_31879;
var statearr_31931_32002 = state_31879__$1;
(statearr_31931_32002[(2)] = null);

(statearr_31931_32002[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (12))){
var inst_31769 = (state_31879[(2)]);
var state_31879__$1 = state_31879;
var statearr_31932_32003 = state_31879__$1;
(statearr_31932_32003[(2)] = inst_31769);

(statearr_31932_32003[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (2))){
var inst_31731 = (state_31879[(13)]);
var inst_31738 = cljs.core.seq.call(null,inst_31731);
var inst_31739 = inst_31738;
var inst_31740 = null;
var inst_31741 = (0);
var inst_31742 = (0);
var state_31879__$1 = (function (){var statearr_31933 = state_31879;
(statearr_31933[(7)] = inst_31741);

(statearr_31933[(8)] = inst_31742);

(statearr_31933[(9)] = inst_31739);

(statearr_31933[(10)] = inst_31740);

return statearr_31933;
})();
var statearr_31934_32004 = state_31879__$1;
(statearr_31934_32004[(2)] = null);

(statearr_31934_32004[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (23))){
var inst_31800 = (state_31879[(23)]);
var inst_31798 = (state_31879[(26)]);
var inst_31792 = (state_31879[(19)]);
var inst_31795 = (state_31879[(24)]);
var inst_31796 = (state_31879[(25)]);
var inst_31803 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_31805 = (function (){var all_files = inst_31792;
var res_SINGLEQUOTE_ = inst_31795;
var res = inst_31796;
var files_not_loaded = inst_31798;
var dependencies_that_loaded = inst_31800;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31800,inst_31798,inst_31792,inst_31795,inst_31796,inst_31803,state_val_31880,c__24184__auto__,map__31724,map__31724__$1,opts,before_jsload,on_jsload,reload_dependents,map__31725,map__31725__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31804){
var map__31935 = p__31804;
var map__31935__$1 = ((((!((map__31935 == null)))?(((((map__31935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31935):map__31935);
var request_url = cljs.core.get.call(null,map__31935__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31800,inst_31798,inst_31792,inst_31795,inst_31796,inst_31803,state_val_31880,c__24184__auto__,map__31724,map__31724__$1,opts,before_jsload,on_jsload,reload_dependents,map__31725,map__31725__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31806 = cljs.core.reverse.call(null,inst_31800);
var inst_31807 = cljs.core.map.call(null,inst_31805,inst_31806);
var inst_31808 = cljs.core.pr_str.call(null,inst_31807);
var inst_31809 = figwheel.client.utils.log.call(null,inst_31808);
var state_31879__$1 = (function (){var statearr_31937 = state_31879;
(statearr_31937[(31)] = inst_31803);

return statearr_31937;
})();
var statearr_31938_32005 = state_31879__$1;
(statearr_31938_32005[(2)] = inst_31809);

(statearr_31938_32005[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (35))){
var state_31879__$1 = state_31879;
var statearr_31939_32006 = state_31879__$1;
(statearr_31939_32006[(2)] = true);

(statearr_31939_32006[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (19))){
var inst_31782 = (state_31879[(12)]);
var inst_31788 = figwheel.client.file_reloading.expand_files.call(null,inst_31782);
var state_31879__$1 = state_31879;
var statearr_31940_32007 = state_31879__$1;
(statearr_31940_32007[(2)] = inst_31788);

(statearr_31940_32007[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (11))){
var state_31879__$1 = state_31879;
var statearr_31941_32008 = state_31879__$1;
(statearr_31941_32008[(2)] = null);

(statearr_31941_32008[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (9))){
var inst_31771 = (state_31879[(2)]);
var state_31879__$1 = state_31879;
var statearr_31942_32009 = state_31879__$1;
(statearr_31942_32009[(2)] = inst_31771);

(statearr_31942_32009[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (5))){
var inst_31741 = (state_31879[(7)]);
var inst_31742 = (state_31879[(8)]);
var inst_31744 = (inst_31742 < inst_31741);
var inst_31745 = inst_31744;
var state_31879__$1 = state_31879;
if(cljs.core.truth_(inst_31745)){
var statearr_31943_32010 = state_31879__$1;
(statearr_31943_32010[(1)] = (7));

} else {
var statearr_31944_32011 = state_31879__$1;
(statearr_31944_32011[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (14))){
var inst_31752 = (state_31879[(22)]);
var inst_31761 = cljs.core.first.call(null,inst_31752);
var inst_31762 = figwheel.client.file_reloading.eval_body.call(null,inst_31761,opts);
var inst_31763 = cljs.core.next.call(null,inst_31752);
var inst_31739 = inst_31763;
var inst_31740 = null;
var inst_31741 = (0);
var inst_31742 = (0);
var state_31879__$1 = (function (){var statearr_31945 = state_31879;
(statearr_31945[(7)] = inst_31741);

(statearr_31945[(8)] = inst_31742);

(statearr_31945[(9)] = inst_31739);

(statearr_31945[(32)] = inst_31762);

(statearr_31945[(10)] = inst_31740);

return statearr_31945;
})();
var statearr_31946_32012 = state_31879__$1;
(statearr_31946_32012[(2)] = null);

(statearr_31946_32012[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (45))){
var state_31879__$1 = state_31879;
var statearr_31947_32013 = state_31879__$1;
(statearr_31947_32013[(2)] = null);

(statearr_31947_32013[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (26))){
var inst_31800 = (state_31879[(23)]);
var inst_31798 = (state_31879[(26)]);
var inst_31792 = (state_31879[(19)]);
var inst_31795 = (state_31879[(24)]);
var inst_31796 = (state_31879[(25)]);
var inst_31815 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_31817 = (function (){var all_files = inst_31792;
var res_SINGLEQUOTE_ = inst_31795;
var res = inst_31796;
var files_not_loaded = inst_31798;
var dependencies_that_loaded = inst_31800;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31800,inst_31798,inst_31792,inst_31795,inst_31796,inst_31815,state_val_31880,c__24184__auto__,map__31724,map__31724__$1,opts,before_jsload,on_jsload,reload_dependents,map__31725,map__31725__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31816){
var map__31948 = p__31816;
var map__31948__$1 = ((((!((map__31948 == null)))?(((((map__31948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31948):map__31948);
var namespace = cljs.core.get.call(null,map__31948__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__31948__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31800,inst_31798,inst_31792,inst_31795,inst_31796,inst_31815,state_val_31880,c__24184__auto__,map__31724,map__31724__$1,opts,before_jsload,on_jsload,reload_dependents,map__31725,map__31725__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31818 = cljs.core.map.call(null,inst_31817,inst_31796);
var inst_31819 = cljs.core.pr_str.call(null,inst_31818);
var inst_31820 = figwheel.client.utils.log.call(null,inst_31819);
var inst_31821 = (function (){var all_files = inst_31792;
var res_SINGLEQUOTE_ = inst_31795;
var res = inst_31796;
var files_not_loaded = inst_31798;
var dependencies_that_loaded = inst_31800;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31800,inst_31798,inst_31792,inst_31795,inst_31796,inst_31815,inst_31817,inst_31818,inst_31819,inst_31820,state_val_31880,c__24184__auto__,map__31724,map__31724__$1,opts,before_jsload,on_jsload,reload_dependents,map__31725,map__31725__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31800,inst_31798,inst_31792,inst_31795,inst_31796,inst_31815,inst_31817,inst_31818,inst_31819,inst_31820,state_val_31880,c__24184__auto__,map__31724,map__31724__$1,opts,before_jsload,on_jsload,reload_dependents,map__31725,map__31725__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31822 = setTimeout(inst_31821,(10));
var state_31879__$1 = (function (){var statearr_31950 = state_31879;
(statearr_31950[(33)] = inst_31815);

(statearr_31950[(34)] = inst_31820);

return statearr_31950;
})();
var statearr_31951_32014 = state_31879__$1;
(statearr_31951_32014[(2)] = inst_31822);

(statearr_31951_32014[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (16))){
var state_31879__$1 = state_31879;
var statearr_31952_32015 = state_31879__$1;
(statearr_31952_32015[(2)] = reload_dependents);

(statearr_31952_32015[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (38))){
var inst_31832 = (state_31879[(16)]);
var inst_31850 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31832);
var state_31879__$1 = state_31879;
var statearr_31953_32016 = state_31879__$1;
(statearr_31953_32016[(2)] = inst_31850);

(statearr_31953_32016[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (30))){
var state_31879__$1 = state_31879;
var statearr_31954_32017 = state_31879__$1;
(statearr_31954_32017[(2)] = null);

(statearr_31954_32017[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (10))){
var inst_31752 = (state_31879[(22)]);
var inst_31754 = cljs.core.chunked_seq_QMARK_.call(null,inst_31752);
var state_31879__$1 = state_31879;
if(inst_31754){
var statearr_31955_32018 = state_31879__$1;
(statearr_31955_32018[(1)] = (13));

} else {
var statearr_31956_32019 = state_31879__$1;
(statearr_31956_32019[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (18))){
var inst_31786 = (state_31879[(2)]);
var state_31879__$1 = state_31879;
if(cljs.core.truth_(inst_31786)){
var statearr_31957_32020 = state_31879__$1;
(statearr_31957_32020[(1)] = (19));

} else {
var statearr_31958_32021 = state_31879__$1;
(statearr_31958_32021[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (42))){
var state_31879__$1 = state_31879;
var statearr_31959_32022 = state_31879__$1;
(statearr_31959_32022[(2)] = null);

(statearr_31959_32022[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (37))){
var inst_31845 = (state_31879[(2)]);
var state_31879__$1 = state_31879;
var statearr_31960_32023 = state_31879__$1;
(statearr_31960_32023[(2)] = inst_31845);

(statearr_31960_32023[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31880 === (8))){
var inst_31752 = (state_31879[(22)]);
var inst_31739 = (state_31879[(9)]);
var inst_31752__$1 = cljs.core.seq.call(null,inst_31739);
var state_31879__$1 = (function (){var statearr_31961 = state_31879;
(statearr_31961[(22)] = inst_31752__$1);

return statearr_31961;
})();
if(inst_31752__$1){
var statearr_31962_32024 = state_31879__$1;
(statearr_31962_32024[(1)] = (10));

} else {
var statearr_31963_32025 = state_31879__$1;
(statearr_31963_32025[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24184__auto__,map__31724,map__31724__$1,opts,before_jsload,on_jsload,reload_dependents,map__31725,map__31725__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__24096__auto__,c__24184__auto__,map__31724,map__31724__$1,opts,before_jsload,on_jsload,reload_dependents,map__31725,map__31725__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24097__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24097__auto____0 = (function (){
var statearr_31964 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31964[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24097__auto__);

(statearr_31964[(1)] = (1));

return statearr_31964;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24097__auto____1 = (function (state_31879){
while(true){
var ret_value__24098__auto__ = (function (){try{while(true){
var result__24099__auto__ = switch__24096__auto__.call(null,state_31879);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24099__auto__;
}
break;
}
}catch (e31965){if((e31965 instanceof Object)){
var ex__24100__auto__ = e31965;
var statearr_31966_32026 = state_31879;
(statearr_31966_32026[(5)] = ex__24100__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31879);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31965;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32027 = state_31879;
state_31879 = G__32027;
continue;
} else {
return ret_value__24098__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24097__auto__ = function(state_31879){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24097__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24097__auto____1.call(this,state_31879);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24097__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24097__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24097__auto__;
})()
;})(switch__24096__auto__,c__24184__auto__,map__31724,map__31724__$1,opts,before_jsload,on_jsload,reload_dependents,map__31725,map__31725__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__24186__auto__ = (function (){var statearr_31967 = f__24185__auto__.call(null);
(statearr_31967[(6)] = c__24184__auto__);

return statearr_31967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24186__auto__);
});})(c__24184__auto__,map__31724,map__31724__$1,opts,before_jsload,on_jsload,reload_dependents,map__31725,map__31725__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__24184__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__32030,link){
var map__32031 = p__32030;
var map__32031__$1 = ((((!((map__32031 == null)))?(((((map__32031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32031.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32031):map__32031);
var file = cljs.core.get.call(null,map__32031__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__32031,map__32031__$1,file){
return (function (p1__32028_SHARP_,p2__32029_SHARP_){
if(cljs.core._EQ_.call(null,p1__32028_SHARP_,p2__32029_SHARP_)){
return p1__32028_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__32031,map__32031__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__32034){
var map__32035 = p__32034;
var map__32035__$1 = ((((!((map__32035 == null)))?(((((map__32035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32035):map__32035);
var match_length = cljs.core.get.call(null,map__32035__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__32035__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__32033_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__32033_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__32037_SHARP_,p2__32038_SHARP_){
return cljs.core.assoc.call(null,p1__32037_SHARP_,cljs.core.get.call(null,p2__32038_SHARP_,key),p2__32038_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_32039 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_32039);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_32039);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__32040,p__32041){
var map__32042 = p__32040;
var map__32042__$1 = ((((!((map__32042 == null)))?(((((map__32042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32042):map__32042);
var on_cssload = cljs.core.get.call(null,map__32042__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__32043 = p__32041;
var map__32043__$1 = ((((!((map__32043 == null)))?(((((map__32043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32043):map__32043);
var files_msg = map__32043__$1;
var files = cljs.core.get.call(null,map__32043__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1535633097825
