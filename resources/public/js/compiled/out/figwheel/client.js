// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = ((((typeof JSON !== 'undefined') && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e33131){if((e33131 instanceof Error)){
var e = e33131;
return "Error: Unable to stringify";
} else {
throw e33131;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__33134 = arguments.length;
switch (G__33134) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__33132_SHARP_){
if(typeof p1__33132_SHARP_ === 'string'){
return p1__33132_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__33132_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___33137 = arguments.length;
var i__4500__auto___33138 = (0);
while(true){
if((i__4500__auto___33138 < len__4499__auto___33137)){
args__4502__auto__.push((arguments[i__4500__auto___33138]));

var G__33139 = (i__4500__auto___33138 + (1));
i__4500__auto___33138 = G__33139;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq33136){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33136));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___33141 = arguments.length;
var i__4500__auto___33142 = (0);
while(true){
if((i__4500__auto___33142 < len__4499__auto___33141)){
args__4502__auto__.push((arguments[i__4500__auto___33142]));

var G__33143 = (i__4500__auto___33142 + (1));
i__4500__auto___33142 = G__33143;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq33140){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33140));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__33144){
var map__33145 = p__33144;
var map__33145__$1 = ((((!((map__33145 == null)))?(((((map__33145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33145):map__33145);
var message = cljs.core.get.call(null,map__33145__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__33145__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3922__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3911__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3911__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3911__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__24184__auto___33224 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24184__auto___33224,ch){
return (function (){
var f__24185__auto__ = (function (){var switch__24096__auto__ = ((function (c__24184__auto___33224,ch){
return (function (state_33196){
var state_val_33197 = (state_33196[(1)]);
if((state_val_33197 === (7))){
var inst_33192 = (state_33196[(2)]);
var state_33196__$1 = state_33196;
var statearr_33198_33225 = state_33196__$1;
(statearr_33198_33225[(2)] = inst_33192);

(statearr_33198_33225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33197 === (1))){
var state_33196__$1 = state_33196;
var statearr_33199_33226 = state_33196__$1;
(statearr_33199_33226[(2)] = null);

(statearr_33199_33226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33197 === (4))){
var inst_33149 = (state_33196[(7)]);
var inst_33149__$1 = (state_33196[(2)]);
var state_33196__$1 = (function (){var statearr_33200 = state_33196;
(statearr_33200[(7)] = inst_33149__$1);

return statearr_33200;
})();
if(cljs.core.truth_(inst_33149__$1)){
var statearr_33201_33227 = state_33196__$1;
(statearr_33201_33227[(1)] = (5));

} else {
var statearr_33202_33228 = state_33196__$1;
(statearr_33202_33228[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33197 === (15))){
var inst_33156 = (state_33196[(8)]);
var inst_33171 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_33156);
var inst_33172 = cljs.core.first.call(null,inst_33171);
var inst_33173 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_33172);
var inst_33174 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33173)].join('');
var inst_33175 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_33174);
var state_33196__$1 = state_33196;
var statearr_33203_33229 = state_33196__$1;
(statearr_33203_33229[(2)] = inst_33175);

(statearr_33203_33229[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33197 === (13))){
var inst_33180 = (state_33196[(2)]);
var state_33196__$1 = state_33196;
var statearr_33204_33230 = state_33196__$1;
(statearr_33204_33230[(2)] = inst_33180);

(statearr_33204_33230[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33197 === (6))){
var state_33196__$1 = state_33196;
var statearr_33205_33231 = state_33196__$1;
(statearr_33205_33231[(2)] = null);

(statearr_33205_33231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33197 === (17))){
var inst_33178 = (state_33196[(2)]);
var state_33196__$1 = state_33196;
var statearr_33206_33232 = state_33196__$1;
(statearr_33206_33232[(2)] = inst_33178);

(statearr_33206_33232[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33197 === (3))){
var inst_33194 = (state_33196[(2)]);
var state_33196__$1 = state_33196;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33196__$1,inst_33194);
} else {
if((state_val_33197 === (12))){
var inst_33155 = (state_33196[(9)]);
var inst_33169 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_33155,opts);
var state_33196__$1 = state_33196;
if(cljs.core.truth_(inst_33169)){
var statearr_33207_33233 = state_33196__$1;
(statearr_33207_33233[(1)] = (15));

} else {
var statearr_33208_33234 = state_33196__$1;
(statearr_33208_33234[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33197 === (2))){
var state_33196__$1 = state_33196;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33196__$1,(4),ch);
} else {
if((state_val_33197 === (11))){
var inst_33156 = (state_33196[(8)]);
var inst_33161 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33162 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_33156);
var inst_33163 = cljs.core.async.timeout.call(null,(1000));
var inst_33164 = [inst_33162,inst_33163];
var inst_33165 = (new cljs.core.PersistentVector(null,2,(5),inst_33161,inst_33164,null));
var state_33196__$1 = state_33196;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33196__$1,(14),inst_33165);
} else {
if((state_val_33197 === (9))){
var inst_33156 = (state_33196[(8)]);
var inst_33182 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_33183 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_33156);
var inst_33184 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33183);
var inst_33185 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33184)].join('');
var inst_33186 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_33185);
var state_33196__$1 = (function (){var statearr_33209 = state_33196;
(statearr_33209[(10)] = inst_33182);

return statearr_33209;
})();
var statearr_33210_33235 = state_33196__$1;
(statearr_33210_33235[(2)] = inst_33186);

(statearr_33210_33235[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33197 === (5))){
var inst_33149 = (state_33196[(7)]);
var inst_33151 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_33152 = (new cljs.core.PersistentArrayMap(null,2,inst_33151,null));
var inst_33153 = (new cljs.core.PersistentHashSet(null,inst_33152,null));
var inst_33154 = figwheel.client.focus_msgs.call(null,inst_33153,inst_33149);
var inst_33155 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_33154);
var inst_33156 = cljs.core.first.call(null,inst_33154);
var inst_33157 = figwheel.client.autoload_QMARK_.call(null);
var state_33196__$1 = (function (){var statearr_33211 = state_33196;
(statearr_33211[(9)] = inst_33155);

(statearr_33211[(8)] = inst_33156);

return statearr_33211;
})();
if(cljs.core.truth_(inst_33157)){
var statearr_33212_33236 = state_33196__$1;
(statearr_33212_33236[(1)] = (8));

} else {
var statearr_33213_33237 = state_33196__$1;
(statearr_33213_33237[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33197 === (14))){
var inst_33167 = (state_33196[(2)]);
var state_33196__$1 = state_33196;
var statearr_33214_33238 = state_33196__$1;
(statearr_33214_33238[(2)] = inst_33167);

(statearr_33214_33238[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33197 === (16))){
var state_33196__$1 = state_33196;
var statearr_33215_33239 = state_33196__$1;
(statearr_33215_33239[(2)] = null);

(statearr_33215_33239[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33197 === (10))){
var inst_33188 = (state_33196[(2)]);
var state_33196__$1 = (function (){var statearr_33216 = state_33196;
(statearr_33216[(11)] = inst_33188);

return statearr_33216;
})();
var statearr_33217_33240 = state_33196__$1;
(statearr_33217_33240[(2)] = null);

(statearr_33217_33240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33197 === (8))){
var inst_33155 = (state_33196[(9)]);
var inst_33159 = figwheel.client.reload_file_state_QMARK_.call(null,inst_33155,opts);
var state_33196__$1 = state_33196;
if(cljs.core.truth_(inst_33159)){
var statearr_33218_33241 = state_33196__$1;
(statearr_33218_33241[(1)] = (11));

} else {
var statearr_33219_33242 = state_33196__$1;
(statearr_33219_33242[(1)] = (12));

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
});})(c__24184__auto___33224,ch))
;
return ((function (switch__24096__auto__,c__24184__auto___33224,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24097__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24097__auto____0 = (function (){
var statearr_33220 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33220[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24097__auto__);

(statearr_33220[(1)] = (1));

return statearr_33220;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24097__auto____1 = (function (state_33196){
while(true){
var ret_value__24098__auto__ = (function (){try{while(true){
var result__24099__auto__ = switch__24096__auto__.call(null,state_33196);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24099__auto__;
}
break;
}
}catch (e33221){if((e33221 instanceof Object)){
var ex__24100__auto__ = e33221;
var statearr_33222_33243 = state_33196;
(statearr_33222_33243[(5)] = ex__24100__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33196);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33221;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33244 = state_33196;
state_33196 = G__33244;
continue;
} else {
return ret_value__24098__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24097__auto__ = function(state_33196){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24097__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24097__auto____1.call(this,state_33196);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24097__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24097__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24097__auto__;
})()
;})(switch__24096__auto__,c__24184__auto___33224,ch))
})();
var state__24186__auto__ = (function (){var statearr_33223 = f__24185__auto__.call(null);
(statearr_33223[(6)] = c__24184__auto___33224);

return statearr_33223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24186__auto__);
});})(c__24184__auto___33224,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__33245_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__33245_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_33249 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_33249){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_33247 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_33248 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_33247,_STAR_print_fn_STAR_33248,sb,base_path_33249){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_33247,_STAR_print_fn_STAR_33248,sb,base_path_33249))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_33248;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_33247;
}}catch (e33246){if((e33246 instanceof Error)){
var e = e33246;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_33249], null));
} else {
var e = e33246;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_33249))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__33250){
var map__33251 = p__33250;
var map__33251__$1 = ((((!((map__33251 == null)))?(((((map__33251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33251):map__33251);
var opts = map__33251__$1;
var build_id = cljs.core.get.call(null,map__33251__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__33251,map__33251__$1,opts,build_id){
return (function (p__33253){
var vec__33254 = p__33253;
var seq__33255 = cljs.core.seq.call(null,vec__33254);
var first__33256 = cljs.core.first.call(null,seq__33255);
var seq__33255__$1 = cljs.core.next.call(null,seq__33255);
var map__33257 = first__33256;
var map__33257__$1 = ((((!((map__33257 == null)))?(((((map__33257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33257):map__33257);
var msg = map__33257__$1;
var msg_name = cljs.core.get.call(null,map__33257__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__33255__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__33254,seq__33255,first__33256,seq__33255__$1,map__33257,map__33257__$1,msg,msg_name,_,map__33251,map__33251__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__33254,seq__33255,first__33256,seq__33255__$1,map__33257,map__33257__$1,msg,msg_name,_,map__33251,map__33251__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__33251,map__33251__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__33259){
var vec__33260 = p__33259;
var seq__33261 = cljs.core.seq.call(null,vec__33260);
var first__33262 = cljs.core.first.call(null,seq__33261);
var seq__33261__$1 = cljs.core.next.call(null,seq__33261);
var map__33263 = first__33262;
var map__33263__$1 = ((((!((map__33263 == null)))?(((((map__33263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33263):map__33263);
var msg = map__33263__$1;
var msg_name = cljs.core.get.call(null,map__33263__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__33261__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__33265){
var map__33266 = p__33265;
var map__33266__$1 = ((((!((map__33266 == null)))?(((((map__33266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33266):map__33266);
var on_compile_warning = cljs.core.get.call(null,map__33266__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__33266__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__33266,map__33266__$1,on_compile_warning,on_compile_fail){
return (function (p__33268){
var vec__33269 = p__33268;
var seq__33270 = cljs.core.seq.call(null,vec__33269);
var first__33271 = cljs.core.first.call(null,seq__33270);
var seq__33270__$1 = cljs.core.next.call(null,seq__33270);
var map__33272 = first__33271;
var map__33272__$1 = ((((!((map__33272 == null)))?(((((map__33272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33272):map__33272);
var msg = map__33272__$1;
var msg_name = cljs.core.get.call(null,map__33272__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__33270__$1;
var pred__33274 = cljs.core._EQ_;
var expr__33275 = msg_name;
if(cljs.core.truth_(pred__33274.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__33275))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__33274.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__33275))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__33266,map__33266__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__24184__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24184__auto__,msg_hist,msg_names,msg){
return (function (){
var f__24185__auto__ = (function (){var switch__24096__auto__ = ((function (c__24184__auto__,msg_hist,msg_names,msg){
return (function (state_33364){
var state_val_33365 = (state_33364[(1)]);
if((state_val_33365 === (7))){
var inst_33284 = (state_33364[(2)]);
var state_33364__$1 = state_33364;
if(cljs.core.truth_(inst_33284)){
var statearr_33366_33413 = state_33364__$1;
(statearr_33366_33413[(1)] = (8));

} else {
var statearr_33367_33414 = state_33364__$1;
(statearr_33367_33414[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (20))){
var inst_33358 = (state_33364[(2)]);
var state_33364__$1 = state_33364;
var statearr_33368_33415 = state_33364__$1;
(statearr_33368_33415[(2)] = inst_33358);

(statearr_33368_33415[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (27))){
var inst_33354 = (state_33364[(2)]);
var state_33364__$1 = state_33364;
var statearr_33369_33416 = state_33364__$1;
(statearr_33369_33416[(2)] = inst_33354);

(statearr_33369_33416[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (1))){
var inst_33277 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_33364__$1 = state_33364;
if(cljs.core.truth_(inst_33277)){
var statearr_33370_33417 = state_33364__$1;
(statearr_33370_33417[(1)] = (2));

} else {
var statearr_33371_33418 = state_33364__$1;
(statearr_33371_33418[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (24))){
var inst_33356 = (state_33364[(2)]);
var state_33364__$1 = state_33364;
var statearr_33372_33419 = state_33364__$1;
(statearr_33372_33419[(2)] = inst_33356);

(statearr_33372_33419[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (4))){
var inst_33362 = (state_33364[(2)]);
var state_33364__$1 = state_33364;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33364__$1,inst_33362);
} else {
if((state_val_33365 === (15))){
var inst_33360 = (state_33364[(2)]);
var state_33364__$1 = state_33364;
var statearr_33373_33420 = state_33364__$1;
(statearr_33373_33420[(2)] = inst_33360);

(statearr_33373_33420[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (21))){
var inst_33313 = (state_33364[(2)]);
var inst_33314 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33315 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33314);
var state_33364__$1 = (function (){var statearr_33374 = state_33364;
(statearr_33374[(7)] = inst_33313);

return statearr_33374;
})();
var statearr_33375_33421 = state_33364__$1;
(statearr_33375_33421[(2)] = inst_33315);

(statearr_33375_33421[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (31))){
var inst_33343 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_33364__$1 = state_33364;
if(cljs.core.truth_(inst_33343)){
var statearr_33376_33422 = state_33364__$1;
(statearr_33376_33422[(1)] = (34));

} else {
var statearr_33377_33423 = state_33364__$1;
(statearr_33377_33423[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (32))){
var inst_33352 = (state_33364[(2)]);
var state_33364__$1 = state_33364;
var statearr_33378_33424 = state_33364__$1;
(statearr_33378_33424[(2)] = inst_33352);

(statearr_33378_33424[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (33))){
var inst_33339 = (state_33364[(2)]);
var inst_33340 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33341 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33340);
var state_33364__$1 = (function (){var statearr_33379 = state_33364;
(statearr_33379[(8)] = inst_33339);

return statearr_33379;
})();
var statearr_33380_33425 = state_33364__$1;
(statearr_33380_33425[(2)] = inst_33341);

(statearr_33380_33425[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (13))){
var inst_33298 = figwheel.client.heads_up.clear.call(null);
var state_33364__$1 = state_33364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33364__$1,(16),inst_33298);
} else {
if((state_val_33365 === (22))){
var inst_33319 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33320 = figwheel.client.heads_up.append_warning_message.call(null,inst_33319);
var state_33364__$1 = state_33364;
var statearr_33381_33426 = state_33364__$1;
(statearr_33381_33426[(2)] = inst_33320);

(statearr_33381_33426[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (36))){
var inst_33350 = (state_33364[(2)]);
var state_33364__$1 = state_33364;
var statearr_33382_33427 = state_33364__$1;
(statearr_33382_33427[(2)] = inst_33350);

(statearr_33382_33427[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (29))){
var inst_33330 = (state_33364[(2)]);
var inst_33331 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33332 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33331);
var state_33364__$1 = (function (){var statearr_33383 = state_33364;
(statearr_33383[(9)] = inst_33330);

return statearr_33383;
})();
var statearr_33384_33428 = state_33364__$1;
(statearr_33384_33428[(2)] = inst_33332);

(statearr_33384_33428[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (6))){
var inst_33279 = (state_33364[(10)]);
var state_33364__$1 = state_33364;
var statearr_33385_33429 = state_33364__$1;
(statearr_33385_33429[(2)] = inst_33279);

(statearr_33385_33429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (28))){
var inst_33326 = (state_33364[(2)]);
var inst_33327 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33328 = figwheel.client.heads_up.display_warning.call(null,inst_33327);
var state_33364__$1 = (function (){var statearr_33386 = state_33364;
(statearr_33386[(11)] = inst_33326);

return statearr_33386;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33364__$1,(29),inst_33328);
} else {
if((state_val_33365 === (25))){
var inst_33324 = figwheel.client.heads_up.clear.call(null);
var state_33364__$1 = state_33364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33364__$1,(28),inst_33324);
} else {
if((state_val_33365 === (34))){
var inst_33345 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33364__$1 = state_33364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33364__$1,(37),inst_33345);
} else {
if((state_val_33365 === (17))){
var inst_33304 = (state_33364[(2)]);
var inst_33305 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33306 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33305);
var state_33364__$1 = (function (){var statearr_33387 = state_33364;
(statearr_33387[(12)] = inst_33304);

return statearr_33387;
})();
var statearr_33388_33430 = state_33364__$1;
(statearr_33388_33430[(2)] = inst_33306);

(statearr_33388_33430[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (3))){
var inst_33296 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_33364__$1 = state_33364;
if(cljs.core.truth_(inst_33296)){
var statearr_33389_33431 = state_33364__$1;
(statearr_33389_33431[(1)] = (13));

} else {
var statearr_33390_33432 = state_33364__$1;
(statearr_33390_33432[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (12))){
var inst_33292 = (state_33364[(2)]);
var state_33364__$1 = state_33364;
var statearr_33391_33433 = state_33364__$1;
(statearr_33391_33433[(2)] = inst_33292);

(statearr_33391_33433[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (2))){
var inst_33279 = (state_33364[(10)]);
var inst_33279__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_33364__$1 = (function (){var statearr_33392 = state_33364;
(statearr_33392[(10)] = inst_33279__$1);

return statearr_33392;
})();
if(cljs.core.truth_(inst_33279__$1)){
var statearr_33393_33434 = state_33364__$1;
(statearr_33393_33434[(1)] = (5));

} else {
var statearr_33394_33435 = state_33364__$1;
(statearr_33394_33435[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (23))){
var inst_33322 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_33364__$1 = state_33364;
if(cljs.core.truth_(inst_33322)){
var statearr_33395_33436 = state_33364__$1;
(statearr_33395_33436[(1)] = (25));

} else {
var statearr_33396_33437 = state_33364__$1;
(statearr_33396_33437[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (35))){
var state_33364__$1 = state_33364;
var statearr_33397_33438 = state_33364__$1;
(statearr_33397_33438[(2)] = null);

(statearr_33397_33438[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (19))){
var inst_33317 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_33364__$1 = state_33364;
if(cljs.core.truth_(inst_33317)){
var statearr_33398_33439 = state_33364__$1;
(statearr_33398_33439[(1)] = (22));

} else {
var statearr_33399_33440 = state_33364__$1;
(statearr_33399_33440[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (11))){
var inst_33288 = (state_33364[(2)]);
var state_33364__$1 = state_33364;
var statearr_33400_33441 = state_33364__$1;
(statearr_33400_33441[(2)] = inst_33288);

(statearr_33400_33441[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (9))){
var inst_33290 = figwheel.client.heads_up.clear.call(null);
var state_33364__$1 = state_33364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33364__$1,(12),inst_33290);
} else {
if((state_val_33365 === (5))){
var inst_33281 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_33364__$1 = state_33364;
var statearr_33401_33442 = state_33364__$1;
(statearr_33401_33442[(2)] = inst_33281);

(statearr_33401_33442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (14))){
var inst_33308 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_33364__$1 = state_33364;
if(cljs.core.truth_(inst_33308)){
var statearr_33402_33443 = state_33364__$1;
(statearr_33402_33443[(1)] = (18));

} else {
var statearr_33403_33444 = state_33364__$1;
(statearr_33403_33444[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (26))){
var inst_33334 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_33364__$1 = state_33364;
if(cljs.core.truth_(inst_33334)){
var statearr_33404_33445 = state_33364__$1;
(statearr_33404_33445[(1)] = (30));

} else {
var statearr_33405_33446 = state_33364__$1;
(statearr_33405_33446[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (16))){
var inst_33300 = (state_33364[(2)]);
var inst_33301 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33302 = figwheel.client.heads_up.display_exception.call(null,inst_33301);
var state_33364__$1 = (function (){var statearr_33406 = state_33364;
(statearr_33406[(13)] = inst_33300);

return statearr_33406;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33364__$1,(17),inst_33302);
} else {
if((state_val_33365 === (30))){
var inst_33336 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33337 = figwheel.client.heads_up.display_warning.call(null,inst_33336);
var state_33364__$1 = state_33364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33364__$1,(33),inst_33337);
} else {
if((state_val_33365 === (10))){
var inst_33294 = (state_33364[(2)]);
var state_33364__$1 = state_33364;
var statearr_33407_33447 = state_33364__$1;
(statearr_33407_33447[(2)] = inst_33294);

(statearr_33407_33447[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (18))){
var inst_33310 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33311 = figwheel.client.heads_up.display_exception.call(null,inst_33310);
var state_33364__$1 = state_33364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33364__$1,(21),inst_33311);
} else {
if((state_val_33365 === (37))){
var inst_33347 = (state_33364[(2)]);
var state_33364__$1 = state_33364;
var statearr_33408_33448 = state_33364__$1;
(statearr_33408_33448[(2)] = inst_33347);

(statearr_33408_33448[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33365 === (8))){
var inst_33286 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33364__$1 = state_33364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33364__$1,(11),inst_33286);
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
});})(c__24184__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__24096__auto__,c__24184__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24097__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24097__auto____0 = (function (){
var statearr_33409 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33409[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24097__auto__);

(statearr_33409[(1)] = (1));

return statearr_33409;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24097__auto____1 = (function (state_33364){
while(true){
var ret_value__24098__auto__ = (function (){try{while(true){
var result__24099__auto__ = switch__24096__auto__.call(null,state_33364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24099__auto__;
}
break;
}
}catch (e33410){if((e33410 instanceof Object)){
var ex__24100__auto__ = e33410;
var statearr_33411_33449 = state_33364;
(statearr_33411_33449[(5)] = ex__24100__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33450 = state_33364;
state_33364 = G__33450;
continue;
} else {
return ret_value__24098__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24097__auto__ = function(state_33364){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24097__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24097__auto____1.call(this,state_33364);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24097__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24097__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24097__auto__;
})()
;})(switch__24096__auto__,c__24184__auto__,msg_hist,msg_names,msg))
})();
var state__24186__auto__ = (function (){var statearr_33412 = f__24185__auto__.call(null);
(statearr_33412[(6)] = c__24184__auto__);

return statearr_33412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24186__auto__);
});})(c__24184__auto__,msg_hist,msg_names,msg))
);

return c__24184__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24184__auto___33479 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24184__auto___33479,ch){
return (function (){
var f__24185__auto__ = (function (){var switch__24096__auto__ = ((function (c__24184__auto___33479,ch){
return (function (state_33465){
var state_val_33466 = (state_33465[(1)]);
if((state_val_33466 === (1))){
var state_33465__$1 = state_33465;
var statearr_33467_33480 = state_33465__$1;
(statearr_33467_33480[(2)] = null);

(statearr_33467_33480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33466 === (2))){
var state_33465__$1 = state_33465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33465__$1,(4),ch);
} else {
if((state_val_33466 === (3))){
var inst_33463 = (state_33465[(2)]);
var state_33465__$1 = state_33465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33465__$1,inst_33463);
} else {
if((state_val_33466 === (4))){
var inst_33453 = (state_33465[(7)]);
var inst_33453__$1 = (state_33465[(2)]);
var state_33465__$1 = (function (){var statearr_33468 = state_33465;
(statearr_33468[(7)] = inst_33453__$1);

return statearr_33468;
})();
if(cljs.core.truth_(inst_33453__$1)){
var statearr_33469_33481 = state_33465__$1;
(statearr_33469_33481[(1)] = (5));

} else {
var statearr_33470_33482 = state_33465__$1;
(statearr_33470_33482[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33466 === (5))){
var inst_33453 = (state_33465[(7)]);
var inst_33455 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_33453);
var state_33465__$1 = state_33465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33465__$1,(8),inst_33455);
} else {
if((state_val_33466 === (6))){
var state_33465__$1 = state_33465;
var statearr_33471_33483 = state_33465__$1;
(statearr_33471_33483[(2)] = null);

(statearr_33471_33483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33466 === (7))){
var inst_33461 = (state_33465[(2)]);
var state_33465__$1 = state_33465;
var statearr_33472_33484 = state_33465__$1;
(statearr_33472_33484[(2)] = inst_33461);

(statearr_33472_33484[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33466 === (8))){
var inst_33457 = (state_33465[(2)]);
var state_33465__$1 = (function (){var statearr_33473 = state_33465;
(statearr_33473[(8)] = inst_33457);

return statearr_33473;
})();
var statearr_33474_33485 = state_33465__$1;
(statearr_33474_33485[(2)] = null);

(statearr_33474_33485[(1)] = (2));


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
});})(c__24184__auto___33479,ch))
;
return ((function (switch__24096__auto__,c__24184__auto___33479,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24097__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24097__auto____0 = (function (){
var statearr_33475 = [null,null,null,null,null,null,null,null,null];
(statearr_33475[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24097__auto__);

(statearr_33475[(1)] = (1));

return statearr_33475;
});
var figwheel$client$heads_up_plugin_$_state_machine__24097__auto____1 = (function (state_33465){
while(true){
var ret_value__24098__auto__ = (function (){try{while(true){
var result__24099__auto__ = switch__24096__auto__.call(null,state_33465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24099__auto__;
}
break;
}
}catch (e33476){if((e33476 instanceof Object)){
var ex__24100__auto__ = e33476;
var statearr_33477_33486 = state_33465;
(statearr_33477_33486[(5)] = ex__24100__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33476;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33487 = state_33465;
state_33465 = G__33487;
continue;
} else {
return ret_value__24098__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24097__auto__ = function(state_33465){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24097__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24097__auto____1.call(this,state_33465);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24097__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24097__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24097__auto__;
})()
;})(switch__24096__auto__,c__24184__auto___33479,ch))
})();
var state__24186__auto__ = (function (){var statearr_33478 = f__24185__auto__.call(null);
(statearr_33478[(6)] = c__24184__auto___33479);

return statearr_33478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24186__auto__);
});})(c__24184__auto___33479,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24184__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24184__auto__){
return (function (){
var f__24185__auto__ = (function (){var switch__24096__auto__ = ((function (c__24184__auto__){
return (function (state_33493){
var state_val_33494 = (state_33493[(1)]);
if((state_val_33494 === (1))){
var inst_33488 = cljs.core.async.timeout.call(null,(3000));
var state_33493__$1 = state_33493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33493__$1,(2),inst_33488);
} else {
if((state_val_33494 === (2))){
var inst_33490 = (state_33493[(2)]);
var inst_33491 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_33493__$1 = (function (){var statearr_33495 = state_33493;
(statearr_33495[(7)] = inst_33490);

return statearr_33495;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33493__$1,inst_33491);
} else {
return null;
}
}
});})(c__24184__auto__))
;
return ((function (switch__24096__auto__,c__24184__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24097__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24097__auto____0 = (function (){
var statearr_33496 = [null,null,null,null,null,null,null,null];
(statearr_33496[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24097__auto__);

(statearr_33496[(1)] = (1));

return statearr_33496;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24097__auto____1 = (function (state_33493){
while(true){
var ret_value__24098__auto__ = (function (){try{while(true){
var result__24099__auto__ = switch__24096__auto__.call(null,state_33493);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24099__auto__;
}
break;
}
}catch (e33497){if((e33497 instanceof Object)){
var ex__24100__auto__ = e33497;
var statearr_33498_33500 = state_33493;
(statearr_33498_33500[(5)] = ex__24100__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33497;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33501 = state_33493;
state_33493 = G__33501;
continue;
} else {
return ret_value__24098__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24097__auto__ = function(state_33493){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24097__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24097__auto____1.call(this,state_33493);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24097__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24097__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24097__auto__;
})()
;})(switch__24096__auto__,c__24184__auto__))
})();
var state__24186__auto__ = (function (){var statearr_33499 = f__24185__auto__.call(null);
(statearr_33499[(6)] = c__24184__auto__);

return statearr_33499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24186__auto__);
});})(c__24184__auto__))
);

return c__24184__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24184__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24184__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__24185__auto__ = (function (){var switch__24096__auto__ = ((function (c__24184__auto__,figwheel_version,temp__4657__auto__){
return (function (state_33508){
var state_val_33509 = (state_33508[(1)]);
if((state_val_33509 === (1))){
var inst_33502 = cljs.core.async.timeout.call(null,(2000));
var state_33508__$1 = state_33508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33508__$1,(2),inst_33502);
} else {
if((state_val_33509 === (2))){
var inst_33504 = (state_33508[(2)]);
var inst_33505 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_33506 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_33505);
var state_33508__$1 = (function (){var statearr_33510 = state_33508;
(statearr_33510[(7)] = inst_33504);

return statearr_33510;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33508__$1,inst_33506);
} else {
return null;
}
}
});})(c__24184__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__24096__auto__,c__24184__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24097__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24097__auto____0 = (function (){
var statearr_33511 = [null,null,null,null,null,null,null,null];
(statearr_33511[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24097__auto__);

(statearr_33511[(1)] = (1));

return statearr_33511;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24097__auto____1 = (function (state_33508){
while(true){
var ret_value__24098__auto__ = (function (){try{while(true){
var result__24099__auto__ = switch__24096__auto__.call(null,state_33508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24099__auto__;
}
break;
}
}catch (e33512){if((e33512 instanceof Object)){
var ex__24100__auto__ = e33512;
var statearr_33513_33515 = state_33508;
(statearr_33513_33515[(5)] = ex__24100__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33512;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33516 = state_33508;
state_33508 = G__33516;
continue;
} else {
return ret_value__24098__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24097__auto__ = function(state_33508){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24097__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24097__auto____1.call(this,state_33508);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24097__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24097__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24097__auto__;
})()
;})(switch__24096__auto__,c__24184__auto__,figwheel_version,temp__4657__auto__))
})();
var state__24186__auto__ = (function (){var statearr_33514 = f__24185__auto__.call(null);
(statearr_33514[(6)] = c__24184__auto__);

return statearr_33514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24186__auto__);
});})(c__24184__auto__,figwheel_version,temp__4657__auto__))
);

return c__24184__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__33517){
var map__33518 = p__33517;
var map__33518__$1 = ((((!((map__33518 == null)))?(((((map__33518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33518.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33518):map__33518);
var file = cljs.core.get.call(null,map__33518__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__33518__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__33518__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__33520 = "";
var G__33520__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33520),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__33520);
var G__33520__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33520__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__33520__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33520__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__33520__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__33521){
var map__33522 = p__33521;
var map__33522__$1 = ((((!((map__33522 == null)))?(((((map__33522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33522):map__33522);
var ed = map__33522__$1;
var formatted_exception = cljs.core.get.call(null,map__33522__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__33522__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__33522__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__33524_33528 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__33525_33529 = null;
var count__33526_33530 = (0);
var i__33527_33531 = (0);
while(true){
if((i__33527_33531 < count__33526_33530)){
var msg_33532 = cljs.core._nth.call(null,chunk__33525_33529,i__33527_33531);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_33532);


var G__33533 = seq__33524_33528;
var G__33534 = chunk__33525_33529;
var G__33535 = count__33526_33530;
var G__33536 = (i__33527_33531 + (1));
seq__33524_33528 = G__33533;
chunk__33525_33529 = G__33534;
count__33526_33530 = G__33535;
i__33527_33531 = G__33536;
continue;
} else {
var temp__4657__auto___33537 = cljs.core.seq.call(null,seq__33524_33528);
if(temp__4657__auto___33537){
var seq__33524_33538__$1 = temp__4657__auto___33537;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33524_33538__$1)){
var c__4319__auto___33539 = cljs.core.chunk_first.call(null,seq__33524_33538__$1);
var G__33540 = cljs.core.chunk_rest.call(null,seq__33524_33538__$1);
var G__33541 = c__4319__auto___33539;
var G__33542 = cljs.core.count.call(null,c__4319__auto___33539);
var G__33543 = (0);
seq__33524_33528 = G__33540;
chunk__33525_33529 = G__33541;
count__33526_33530 = G__33542;
i__33527_33531 = G__33543;
continue;
} else {
var msg_33544 = cljs.core.first.call(null,seq__33524_33538__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_33544);


var G__33545 = cljs.core.next.call(null,seq__33524_33538__$1);
var G__33546 = null;
var G__33547 = (0);
var G__33548 = (0);
seq__33524_33528 = G__33545;
chunk__33525_33529 = G__33546;
count__33526_33530 = G__33547;
i__33527_33531 = G__33548;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__33549){
var map__33550 = p__33549;
var map__33550__$1 = ((((!((map__33550 == null)))?(((((map__33550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33550.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33550):map__33550);
var w = map__33550__$1;
var message = cljs.core.get.call(null,map__33550__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3911__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3911__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__33552 = cljs.core.seq.call(null,plugins);
var chunk__33553 = null;
var count__33554 = (0);
var i__33555 = (0);
while(true){
if((i__33555 < count__33554)){
var vec__33556 = cljs.core._nth.call(null,chunk__33553,i__33555);
var k = cljs.core.nth.call(null,vec__33556,(0),null);
var plugin = cljs.core.nth.call(null,vec__33556,(1),null);
if(cljs.core.truth_(plugin)){
var pl_33562 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__33552,chunk__33553,count__33554,i__33555,pl_33562,vec__33556,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_33562.call(null,msg_hist);
});})(seq__33552,chunk__33553,count__33554,i__33555,pl_33562,vec__33556,k,plugin))
);
} else {
}


var G__33563 = seq__33552;
var G__33564 = chunk__33553;
var G__33565 = count__33554;
var G__33566 = (i__33555 + (1));
seq__33552 = G__33563;
chunk__33553 = G__33564;
count__33554 = G__33565;
i__33555 = G__33566;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33552);
if(temp__4657__auto__){
var seq__33552__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33552__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__33552__$1);
var G__33567 = cljs.core.chunk_rest.call(null,seq__33552__$1);
var G__33568 = c__4319__auto__;
var G__33569 = cljs.core.count.call(null,c__4319__auto__);
var G__33570 = (0);
seq__33552 = G__33567;
chunk__33553 = G__33568;
count__33554 = G__33569;
i__33555 = G__33570;
continue;
} else {
var vec__33559 = cljs.core.first.call(null,seq__33552__$1);
var k = cljs.core.nth.call(null,vec__33559,(0),null);
var plugin = cljs.core.nth.call(null,vec__33559,(1),null);
if(cljs.core.truth_(plugin)){
var pl_33571 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__33552,chunk__33553,count__33554,i__33555,pl_33571,vec__33559,k,plugin,seq__33552__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_33571.call(null,msg_hist);
});})(seq__33552,chunk__33553,count__33554,i__33555,pl_33571,vec__33559,k,plugin,seq__33552__$1,temp__4657__auto__))
);
} else {
}


var G__33572 = cljs.core.next.call(null,seq__33552__$1);
var G__33573 = null;
var G__33574 = (0);
var G__33575 = (0);
seq__33552 = G__33572;
chunk__33553 = G__33573;
count__33554 = G__33574;
i__33555 = G__33575;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__33577 = arguments.length;
switch (G__33577) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__33578_33583 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__33579_33584 = null;
var count__33580_33585 = (0);
var i__33581_33586 = (0);
while(true){
if((i__33581_33586 < count__33580_33585)){
var msg_33587 = cljs.core._nth.call(null,chunk__33579_33584,i__33581_33586);
figwheel.client.socket.handle_incoming_message.call(null,msg_33587);


var G__33588 = seq__33578_33583;
var G__33589 = chunk__33579_33584;
var G__33590 = count__33580_33585;
var G__33591 = (i__33581_33586 + (1));
seq__33578_33583 = G__33588;
chunk__33579_33584 = G__33589;
count__33580_33585 = G__33590;
i__33581_33586 = G__33591;
continue;
} else {
var temp__4657__auto___33592 = cljs.core.seq.call(null,seq__33578_33583);
if(temp__4657__auto___33592){
var seq__33578_33593__$1 = temp__4657__auto___33592;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33578_33593__$1)){
var c__4319__auto___33594 = cljs.core.chunk_first.call(null,seq__33578_33593__$1);
var G__33595 = cljs.core.chunk_rest.call(null,seq__33578_33593__$1);
var G__33596 = c__4319__auto___33594;
var G__33597 = cljs.core.count.call(null,c__4319__auto___33594);
var G__33598 = (0);
seq__33578_33583 = G__33595;
chunk__33579_33584 = G__33596;
count__33580_33585 = G__33597;
i__33581_33586 = G__33598;
continue;
} else {
var msg_33599 = cljs.core.first.call(null,seq__33578_33593__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_33599);


var G__33600 = cljs.core.next.call(null,seq__33578_33593__$1);
var G__33601 = null;
var G__33602 = (0);
var G__33603 = (0);
seq__33578_33583 = G__33600;
chunk__33579_33584 = G__33601;
count__33580_33585 = G__33602;
i__33581_33586 = G__33603;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4502__auto__ = [];
var len__4499__auto___33608 = arguments.length;
var i__4500__auto___33609 = (0);
while(true){
if((i__4500__auto___33609 < len__4499__auto___33608)){
args__4502__auto__.push((arguments[i__4500__auto___33609]));

var G__33610 = (i__4500__auto___33609 + (1));
i__4500__auto___33609 = G__33610;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__33605){
var map__33606 = p__33605;
var map__33606__$1 = ((((!((map__33606 == null)))?(((((map__33606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33606):map__33606);
var opts = map__33606__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq33604){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33604));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e33611){if((e33611 instanceof Error)){
var e = e33611;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e33611;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__33612){
var map__33613 = p__33612;
var map__33613__$1 = ((((!((map__33613 == null)))?(((((map__33613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33613):map__33613);
var msg_name = cljs.core.get.call(null,map__33613__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1535633103393
