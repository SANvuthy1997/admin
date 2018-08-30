// Compiled by ClojureScript 1.10.238 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_27171 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__27172 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__27173 = null;
var count__27174 = (0);
var i__27175 = (0);
while(true){
if((i__27175 < count__27174)){
var vec__27176 = cljs.core._nth.call(null,chunk__27173,i__27175);
var effect_key = cljs.core.nth.call(null,vec__27176,(0),null);
var effect_value = cljs.core.nth.call(null,vec__27176,(1),null);
var temp__4655__auto___27192 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___27192)){
var effect_fn_27193 = temp__4655__auto___27192;
effect_fn_27193.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__27194 = seq__27172;
var G__27195 = chunk__27173;
var G__27196 = count__27174;
var G__27197 = (i__27175 + (1));
seq__27172 = G__27194;
chunk__27173 = G__27195;
count__27174 = G__27196;
i__27175 = G__27197;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27172);
if(temp__4657__auto__){
var seq__27172__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27172__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__27172__$1);
var G__27198 = cljs.core.chunk_rest.call(null,seq__27172__$1);
var G__27199 = c__4319__auto__;
var G__27200 = cljs.core.count.call(null,c__4319__auto__);
var G__27201 = (0);
seq__27172 = G__27198;
chunk__27173 = G__27199;
count__27174 = G__27200;
i__27175 = G__27201;
continue;
} else {
var vec__27179 = cljs.core.first.call(null,seq__27172__$1);
var effect_key = cljs.core.nth.call(null,vec__27179,(0),null);
var effect_value = cljs.core.nth.call(null,vec__27179,(1),null);
var temp__4655__auto___27202 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___27202)){
var effect_fn_27203 = temp__4655__auto___27202;
effect_fn_27203.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__27204 = cljs.core.next.call(null,seq__27172__$1);
var G__27205 = null;
var G__27206 = (0);
var G__27207 = (0);
seq__27172 = G__27204;
chunk__27173 = G__27205;
count__27174 = G__27206;
i__27175 = G__27207;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__22871__auto___27208 = re_frame.interop.now.call(null);
var duration__22872__auto___27209 = (end__22871__auto___27208 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__22872__auto___27209,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__22871__auto___27208);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_27171;
}} else {
var seq__27182 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__27183 = null;
var count__27184 = (0);
var i__27185 = (0);
while(true){
if((i__27185 < count__27184)){
var vec__27186 = cljs.core._nth.call(null,chunk__27183,i__27185);
var effect_key = cljs.core.nth.call(null,vec__27186,(0),null);
var effect_value = cljs.core.nth.call(null,vec__27186,(1),null);
var temp__4655__auto___27210 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___27210)){
var effect_fn_27211 = temp__4655__auto___27210;
effect_fn_27211.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__27212 = seq__27182;
var G__27213 = chunk__27183;
var G__27214 = count__27184;
var G__27215 = (i__27185 + (1));
seq__27182 = G__27212;
chunk__27183 = G__27213;
count__27184 = G__27214;
i__27185 = G__27215;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27182);
if(temp__4657__auto__){
var seq__27182__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27182__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__27182__$1);
var G__27216 = cljs.core.chunk_rest.call(null,seq__27182__$1);
var G__27217 = c__4319__auto__;
var G__27218 = cljs.core.count.call(null,c__4319__auto__);
var G__27219 = (0);
seq__27182 = G__27216;
chunk__27183 = G__27217;
count__27184 = G__27218;
i__27185 = G__27219;
continue;
} else {
var vec__27189 = cljs.core.first.call(null,seq__27182__$1);
var effect_key = cljs.core.nth.call(null,vec__27189,(0),null);
var effect_value = cljs.core.nth.call(null,vec__27189,(1),null);
var temp__4655__auto___27220 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___27220)){
var effect_fn_27221 = temp__4655__auto___27220;
effect_fn_27221.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__27222 = cljs.core.next.call(null,seq__27182__$1);
var G__27223 = null;
var G__27224 = (0);
var G__27225 = (0);
seq__27182 = G__27222;
chunk__27183 = G__27223;
count__27184 = G__27224;
i__27185 = G__27225;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__27226 = cljs.core.seq.call(null,value);
var chunk__27227 = null;
var count__27228 = (0);
var i__27229 = (0);
while(true){
if((i__27229 < count__27228)){
var map__27230 = cljs.core._nth.call(null,chunk__27227,i__27229);
var map__27230__$1 = ((((!((map__27230 == null)))?(((((map__27230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27230):map__27230);
var effect = map__27230__$1;
var ms = cljs.core.get.call(null,map__27230__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__27230__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__27226,chunk__27227,count__27228,i__27229,map__27230,map__27230__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__27226,chunk__27227,count__27228,i__27229,map__27230,map__27230__$1,effect,ms,dispatch))
,ms);
}


var G__27234 = seq__27226;
var G__27235 = chunk__27227;
var G__27236 = count__27228;
var G__27237 = (i__27229 + (1));
seq__27226 = G__27234;
chunk__27227 = G__27235;
count__27228 = G__27236;
i__27229 = G__27237;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27226);
if(temp__4657__auto__){
var seq__27226__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27226__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__27226__$1);
var G__27238 = cljs.core.chunk_rest.call(null,seq__27226__$1);
var G__27239 = c__4319__auto__;
var G__27240 = cljs.core.count.call(null,c__4319__auto__);
var G__27241 = (0);
seq__27226 = G__27238;
chunk__27227 = G__27239;
count__27228 = G__27240;
i__27229 = G__27241;
continue;
} else {
var map__27232 = cljs.core.first.call(null,seq__27226__$1);
var map__27232__$1 = ((((!((map__27232 == null)))?(((((map__27232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27232):map__27232);
var effect = map__27232__$1;
var ms = cljs.core.get.call(null,map__27232__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__27232__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__27226,chunk__27227,count__27228,i__27229,map__27232,map__27232__$1,effect,ms,dispatch,seq__27226__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__27226,chunk__27227,count__27228,i__27229,map__27232,map__27232__$1,effect,ms,dispatch,seq__27226__$1,temp__4657__auto__))
,ms);
}


var G__27242 = cljs.core.next.call(null,seq__27226__$1);
var G__27243 = null;
var G__27244 = (0);
var G__27245 = (0);
seq__27226 = G__27242;
chunk__27227 = G__27243;
count__27228 = G__27244;
i__27229 = G__27245;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__27246 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__27247 = null;
var count__27248 = (0);
var i__27249 = (0);
while(true){
if((i__27249 < count__27248)){
var event = cljs.core._nth.call(null,chunk__27247,i__27249);
re_frame.router.dispatch.call(null,event);


var G__27250 = seq__27246;
var G__27251 = chunk__27247;
var G__27252 = count__27248;
var G__27253 = (i__27249 + (1));
seq__27246 = G__27250;
chunk__27247 = G__27251;
count__27248 = G__27252;
i__27249 = G__27253;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27246);
if(temp__4657__auto__){
var seq__27246__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27246__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__27246__$1);
var G__27254 = cljs.core.chunk_rest.call(null,seq__27246__$1);
var G__27255 = c__4319__auto__;
var G__27256 = cljs.core.count.call(null,c__4319__auto__);
var G__27257 = (0);
seq__27246 = G__27254;
chunk__27247 = G__27255;
count__27248 = G__27256;
i__27249 = G__27257;
continue;
} else {
var event = cljs.core.first.call(null,seq__27246__$1);
re_frame.router.dispatch.call(null,event);


var G__27258 = cljs.core.next.call(null,seq__27246__$1);
var G__27259 = null;
var G__27260 = (0);
var G__27261 = (0);
seq__27246 = G__27258;
chunk__27247 = G__27259;
count__27248 = G__27260;
i__27249 = G__27261;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__27262 = cljs.core.seq.call(null,value);
var chunk__27263 = null;
var count__27264 = (0);
var i__27265 = (0);
while(true){
if((i__27265 < count__27264)){
var event = cljs.core._nth.call(null,chunk__27263,i__27265);
clear_event.call(null,event);


var G__27266 = seq__27262;
var G__27267 = chunk__27263;
var G__27268 = count__27264;
var G__27269 = (i__27265 + (1));
seq__27262 = G__27266;
chunk__27263 = G__27267;
count__27264 = G__27268;
i__27265 = G__27269;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27262);
if(temp__4657__auto__){
var seq__27262__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27262__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__27262__$1);
var G__27270 = cljs.core.chunk_rest.call(null,seq__27262__$1);
var G__27271 = c__4319__auto__;
var G__27272 = cljs.core.count.call(null,c__4319__auto__);
var G__27273 = (0);
seq__27262 = G__27270;
chunk__27263 = G__27271;
count__27264 = G__27272;
i__27265 = G__27273;
continue;
} else {
var event = cljs.core.first.call(null,seq__27262__$1);
clear_event.call(null,event);


var G__27274 = cljs.core.next.call(null,seq__27262__$1);
var G__27275 = null;
var G__27276 = (0);
var G__27277 = (0);
seq__27262 = G__27274;
chunk__27263 = G__27275;
count__27264 = G__27276;
i__27265 = G__27277;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1535633081354
