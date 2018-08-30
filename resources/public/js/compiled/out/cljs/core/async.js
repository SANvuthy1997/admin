// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__24230 = arguments.length;
switch (G__24230) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async24231 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24231 = (function (f,blockable,meta24232){
this.f = f;
this.blockable = blockable;
this.meta24232 = meta24232;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24231.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24233,meta24232__$1){
var self__ = this;
var _24233__$1 = this;
return (new cljs.core.async.t_cljs$core$async24231(self__.f,self__.blockable,meta24232__$1));
});

cljs.core.async.t_cljs$core$async24231.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24233){
var self__ = this;
var _24233__$1 = this;
return self__.meta24232;
});

cljs.core.async.t_cljs$core$async24231.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24231.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24231.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async24231.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24231.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24232","meta24232",-1328527161,null)], null);
});

cljs.core.async.t_cljs$core$async24231.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24231.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24231";

cljs.core.async.t_cljs$core$async24231.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24231");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24231.
 */
cljs.core.async.__GT_t_cljs$core$async24231 = (function cljs$core$async$__GT_t_cljs$core$async24231(f__$1,blockable__$1,meta24232){
return (new cljs.core.async.t_cljs$core$async24231(f__$1,blockable__$1,meta24232));
});

}

return (new cljs.core.async.t_cljs$core$async24231(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__24237 = arguments.length;
switch (G__24237) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__24240 = arguments.length;
switch (G__24240) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__24243 = arguments.length;
switch (G__24243) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24245 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24245);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24245,ret){
return (function (){
return fn1.call(null,val_24245);
});})(val_24245,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__24247 = arguments.length;
switch (G__24247) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___24249 = n;
var x_24250 = (0);
while(true){
if((x_24250 < n__4376__auto___24249)){
(a[x_24250] = (0));

var G__24251 = (x_24250 + (1));
x_24250 = G__24251;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__24252 = (i + (1));
i = G__24252;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async24253 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24253 = (function (flag,meta24254){
this.flag = flag;
this.meta24254 = meta24254;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24253.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24255,meta24254__$1){
var self__ = this;
var _24255__$1 = this;
return (new cljs.core.async.t_cljs$core$async24253(self__.flag,meta24254__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24253.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24255){
var self__ = this;
var _24255__$1 = this;
return self__.meta24254;
});})(flag))
;

cljs.core.async.t_cljs$core$async24253.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24253.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24253.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24253.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24253.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24254","meta24254",1948062666,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24253.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24253.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24253";

cljs.core.async.t_cljs$core$async24253.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24253");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24253.
 */
cljs.core.async.__GT_t_cljs$core$async24253 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24253(flag__$1,meta24254){
return (new cljs.core.async.t_cljs$core$async24253(flag__$1,meta24254));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24253(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async24256 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24256 = (function (flag,cb,meta24257){
this.flag = flag;
this.cb = cb;
this.meta24257 = meta24257;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24256.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24258,meta24257__$1){
var self__ = this;
var _24258__$1 = this;
return (new cljs.core.async.t_cljs$core$async24256(self__.flag,self__.cb,meta24257__$1));
});

cljs.core.async.t_cljs$core$async24256.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24258){
var self__ = this;
var _24258__$1 = this;
return self__.meta24257;
});

cljs.core.async.t_cljs$core$async24256.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24256.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async24256.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24256.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24256.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24257","meta24257",-628055758,null)], null);
});

cljs.core.async.t_cljs$core$async24256.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24256.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24256";

cljs.core.async.t_cljs$core$async24256.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24256");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24256.
 */
cljs.core.async.__GT_t_cljs$core$async24256 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24256(flag__$1,cb__$1,meta24257){
return (new cljs.core.async.t_cljs$core$async24256(flag__$1,cb__$1,meta24257));
});

}

return (new cljs.core.async.t_cljs$core$async24256(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24259_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24259_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24260_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24260_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24261 = (i + (1));
i = G__24261;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___24267 = arguments.length;
var i__4500__auto___24268 = (0);
while(true){
if((i__4500__auto___24268 < len__4499__auto___24267)){
args__4502__auto__.push((arguments[i__4500__auto___24268]));

var G__24269 = (i__4500__auto___24268 + (1));
i__4500__auto___24268 = G__24269;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24264){
var map__24265 = p__24264;
var map__24265__$1 = ((((!((map__24265 == null)))?(((((map__24265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24265):map__24265);
var opts = map__24265__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24262){
var G__24263 = cljs.core.first.call(null,seq24262);
var seq24262__$1 = cljs.core.next.call(null,seq24262);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24263,seq24262__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__24271 = arguments.length;
switch (G__24271) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24184__auto___24317 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24184__auto___24317){
return (function (){
var f__24185__auto__ = (function (){var switch__24096__auto__ = ((function (c__24184__auto___24317){
return (function (state_24295){
var state_val_24296 = (state_24295[(1)]);
if((state_val_24296 === (7))){
var inst_24291 = (state_24295[(2)]);
var state_24295__$1 = state_24295;
var statearr_24297_24318 = state_24295__$1;
(statearr_24297_24318[(2)] = inst_24291);

(statearr_24297_24318[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24296 === (1))){
var state_24295__$1 = state_24295;
var statearr_24298_24319 = state_24295__$1;
(statearr_24298_24319[(2)] = null);

(statearr_24298_24319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24296 === (4))){
var inst_24274 = (state_24295[(7)]);
var inst_24274__$1 = (state_24295[(2)]);
var inst_24275 = (inst_24274__$1 == null);
var state_24295__$1 = (function (){var statearr_24299 = state_24295;
(statearr_24299[(7)] = inst_24274__$1);

return statearr_24299;
})();
if(cljs.core.truth_(inst_24275)){
var statearr_24300_24320 = state_24295__$1;
(statearr_24300_24320[(1)] = (5));

} else {
var statearr_24301_24321 = state_24295__$1;
(statearr_24301_24321[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24296 === (13))){
var state_24295__$1 = state_24295;
var statearr_24302_24322 = state_24295__$1;
(statearr_24302_24322[(2)] = null);

(statearr_24302_24322[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24296 === (6))){
var inst_24274 = (state_24295[(7)]);
var state_24295__$1 = state_24295;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24295__$1,(11),to,inst_24274);
} else {
if((state_val_24296 === (3))){
var inst_24293 = (state_24295[(2)]);
var state_24295__$1 = state_24295;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24295__$1,inst_24293);
} else {
if((state_val_24296 === (12))){
var state_24295__$1 = state_24295;
var statearr_24303_24323 = state_24295__$1;
(statearr_24303_24323[(2)] = null);

(statearr_24303_24323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24296 === (2))){
var state_24295__$1 = state_24295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24295__$1,(4),from);
} else {
if((state_val_24296 === (11))){
var inst_24284 = (state_24295[(2)]);
var state_24295__$1 = state_24295;
if(cljs.core.truth_(inst_24284)){
var statearr_24304_24324 = state_24295__$1;
(statearr_24304_24324[(1)] = (12));

} else {
var statearr_24305_24325 = state_24295__$1;
(statearr_24305_24325[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24296 === (9))){
var state_24295__$1 = state_24295;
var statearr_24306_24326 = state_24295__$1;
(statearr_24306_24326[(2)] = null);

(statearr_24306_24326[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24296 === (5))){
var state_24295__$1 = state_24295;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24307_24327 = state_24295__$1;
(statearr_24307_24327[(1)] = (8));

} else {
var statearr_24308_24328 = state_24295__$1;
(statearr_24308_24328[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24296 === (14))){
var inst_24289 = (state_24295[(2)]);
var state_24295__$1 = state_24295;
var statearr_24309_24329 = state_24295__$1;
(statearr_24309_24329[(2)] = inst_24289);

(statearr_24309_24329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24296 === (10))){
var inst_24281 = (state_24295[(2)]);
var state_24295__$1 = state_24295;
var statearr_24310_24330 = state_24295__$1;
(statearr_24310_24330[(2)] = inst_24281);

(statearr_24310_24330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24296 === (8))){
var inst_24278 = cljs.core.async.close_BANG_.call(null,to);
var state_24295__$1 = state_24295;
var statearr_24311_24331 = state_24295__$1;
(statearr_24311_24331[(2)] = inst_24278);

(statearr_24311_24331[(1)] = (10));


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
});})(c__24184__auto___24317))
;
return ((function (switch__24096__auto__,c__24184__auto___24317){
return (function() {
var cljs$core$async$state_machine__24097__auto__ = null;
var cljs$core$async$state_machine__24097__auto____0 = (function (){
var statearr_24312 = [null,null,null,null,null,null,null,null];
(statearr_24312[(0)] = cljs$core$async$state_machine__24097__auto__);

(statearr_24312[(1)] = (1));

return statearr_24312;
});
var cljs$core$async$state_machine__24097__auto____1 = (function (state_24295){
while(true){
var ret_value__24098__auto__ = (function (){try{while(true){
var result__24099__auto__ = switch__24096__auto__.call(null,state_24295);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24099__auto__;
}
break;
}
}catch (e24313){if((e24313 instanceof Object)){
var ex__24100__auto__ = e24313;
var statearr_24314_24332 = state_24295;
(statearr_24314_24332[(5)] = ex__24100__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24295);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24333 = state_24295;
state_24295 = G__24333;
continue;
} else {
return ret_value__24098__auto__;
}
break;
}
});
cljs$core$async$state_machine__24097__auto__ = function(state_24295){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24097__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24097__auto____1.call(this,state_24295);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24097__auto____0;
cljs$core$async$state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24097__auto____1;
return cljs$core$async$state_machine__24097__auto__;
})()
;})(switch__24096__auto__,c__24184__auto___24317))
})();
var state__24186__auto__ = (function (){var statearr_24315 = f__24185__auto__.call(null);
(statearr_24315[(6)] = c__24184__auto___24317);

return statearr_24315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24186__auto__);
});})(c__24184__auto___24317))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__24334){
var vec__24335 = p__24334;
var v = cljs.core.nth.call(null,vec__24335,(0),null);
var p = cljs.core.nth.call(null,vec__24335,(1),null);
var job = vec__24335;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24184__auto___24506 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24184__auto___24506,res,vec__24335,v,p,job,jobs,results){
return (function (){
var f__24185__auto__ = (function (){var switch__24096__auto__ = ((function (c__24184__auto___24506,res,vec__24335,v,p,job,jobs,results){
return (function (state_24342){
var state_val_24343 = (state_24342[(1)]);
if((state_val_24343 === (1))){
var state_24342__$1 = state_24342;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24342__$1,(2),res,v);
} else {
if((state_val_24343 === (2))){
var inst_24339 = (state_24342[(2)]);
var inst_24340 = cljs.core.async.close_BANG_.call(null,res);
var state_24342__$1 = (function (){var statearr_24344 = state_24342;
(statearr_24344[(7)] = inst_24339);

return statearr_24344;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24342__$1,inst_24340);
} else {
return null;
}
}
});})(c__24184__auto___24506,res,vec__24335,v,p,job,jobs,results))
;
return ((function (switch__24096__auto__,c__24184__auto___24506,res,vec__24335,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24097__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24097__auto____0 = (function (){
var statearr_24345 = [null,null,null,null,null,null,null,null];
(statearr_24345[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24097__auto__);

(statearr_24345[(1)] = (1));

return statearr_24345;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24097__auto____1 = (function (state_24342){
while(true){
var ret_value__24098__auto__ = (function (){try{while(true){
var result__24099__auto__ = switch__24096__auto__.call(null,state_24342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24099__auto__;
}
break;
}
}catch (e24346){if((e24346 instanceof Object)){
var ex__24100__auto__ = e24346;
var statearr_24347_24507 = state_24342;
(statearr_24347_24507[(5)] = ex__24100__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24508 = state_24342;
state_24342 = G__24508;
continue;
} else {
return ret_value__24098__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24097__auto__ = function(state_24342){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24097__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24097__auto____1.call(this,state_24342);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24097__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24097__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24097__auto__;
})()
;})(switch__24096__auto__,c__24184__auto___24506,res,vec__24335,v,p,job,jobs,results))
})();
var state__24186__auto__ = (function (){var statearr_24348 = f__24185__auto__.call(null);
(statearr_24348[(6)] = c__24184__auto___24506);

return statearr_24348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24186__auto__);
});})(c__24184__auto___24506,res,vec__24335,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24349){
var vec__24350 = p__24349;
var v = cljs.core.nth.call(null,vec__24350,(0),null);
var p = cljs.core.nth.call(null,vec__24350,(1),null);
var job = vec__24350;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___24509 = n;
var __24510 = (0);
while(true){
if((__24510 < n__4376__auto___24509)){
var G__24353_24511 = type;
var G__24353_24512__$1 = (((G__24353_24511 instanceof cljs.core.Keyword))?G__24353_24511.fqn:null);
switch (G__24353_24512__$1) {
case "compute":
var c__24184__auto___24514 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24510,c__24184__auto___24514,G__24353_24511,G__24353_24512__$1,n__4376__auto___24509,jobs,results,process,async){
return (function (){
var f__24185__auto__ = (function (){var switch__24096__auto__ = ((function (__24510,c__24184__auto___24514,G__24353_24511,G__24353_24512__$1,n__4376__auto___24509,jobs,results,process,async){
return (function (state_24366){
var state_val_24367 = (state_24366[(1)]);
if((state_val_24367 === (1))){
var state_24366__$1 = state_24366;
var statearr_24368_24515 = state_24366__$1;
(statearr_24368_24515[(2)] = null);

(statearr_24368_24515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24367 === (2))){
var state_24366__$1 = state_24366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24366__$1,(4),jobs);
} else {
if((state_val_24367 === (3))){
var inst_24364 = (state_24366[(2)]);
var state_24366__$1 = state_24366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24366__$1,inst_24364);
} else {
if((state_val_24367 === (4))){
var inst_24356 = (state_24366[(2)]);
var inst_24357 = process.call(null,inst_24356);
var state_24366__$1 = state_24366;
if(cljs.core.truth_(inst_24357)){
var statearr_24369_24516 = state_24366__$1;
(statearr_24369_24516[(1)] = (5));

} else {
var statearr_24370_24517 = state_24366__$1;
(statearr_24370_24517[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24367 === (5))){
var state_24366__$1 = state_24366;
var statearr_24371_24518 = state_24366__$1;
(statearr_24371_24518[(2)] = null);

(statearr_24371_24518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24367 === (6))){
var state_24366__$1 = state_24366;
var statearr_24372_24519 = state_24366__$1;
(statearr_24372_24519[(2)] = null);

(statearr_24372_24519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24367 === (7))){
var inst_24362 = (state_24366[(2)]);
var state_24366__$1 = state_24366;
var statearr_24373_24520 = state_24366__$1;
(statearr_24373_24520[(2)] = inst_24362);

(statearr_24373_24520[(1)] = (3));


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
});})(__24510,c__24184__auto___24514,G__24353_24511,G__24353_24512__$1,n__4376__auto___24509,jobs,results,process,async))
;
return ((function (__24510,switch__24096__auto__,c__24184__auto___24514,G__24353_24511,G__24353_24512__$1,n__4376__auto___24509,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24097__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24097__auto____0 = (function (){
var statearr_24374 = [null,null,null,null,null,null,null];
(statearr_24374[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24097__auto__);

(statearr_24374[(1)] = (1));

return statearr_24374;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24097__auto____1 = (function (state_24366){
while(true){
var ret_value__24098__auto__ = (function (){try{while(true){
var result__24099__auto__ = switch__24096__auto__.call(null,state_24366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24099__auto__;
}
break;
}
}catch (e24375){if((e24375 instanceof Object)){
var ex__24100__auto__ = e24375;
var statearr_24376_24521 = state_24366;
(statearr_24376_24521[(5)] = ex__24100__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24375;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24522 = state_24366;
state_24366 = G__24522;
continue;
} else {
return ret_value__24098__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24097__auto__ = function(state_24366){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24097__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24097__auto____1.call(this,state_24366);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24097__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24097__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24097__auto__;
})()
;})(__24510,switch__24096__auto__,c__24184__auto___24514,G__24353_24511,G__24353_24512__$1,n__4376__auto___24509,jobs,results,process,async))
})();
var state__24186__auto__ = (function (){var statearr_24377 = f__24185__auto__.call(null);
(statearr_24377[(6)] = c__24184__auto___24514);

return statearr_24377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24186__auto__);
});})(__24510,c__24184__auto___24514,G__24353_24511,G__24353_24512__$1,n__4376__auto___24509,jobs,results,process,async))
);


break;
case "async":
var c__24184__auto___24523 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24510,c__24184__auto___24523,G__24353_24511,G__24353_24512__$1,n__4376__auto___24509,jobs,results,process,async){
return (function (){
var f__24185__auto__ = (function (){var switch__24096__auto__ = ((function (__24510,c__24184__auto___24523,G__24353_24511,G__24353_24512__$1,n__4376__auto___24509,jobs,results,process,async){
return (function (state_24390){
var state_val_24391 = (state_24390[(1)]);
if((state_val_24391 === (1))){
var state_24390__$1 = state_24390;
var statearr_24392_24524 = state_24390__$1;
(statearr_24392_24524[(2)] = null);

(statearr_24392_24524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24391 === (2))){
var state_24390__$1 = state_24390;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24390__$1,(4),jobs);
} else {
if((state_val_24391 === (3))){
var inst_24388 = (state_24390[(2)]);
var state_24390__$1 = state_24390;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24390__$1,inst_24388);
} else {
if((state_val_24391 === (4))){
var inst_24380 = (state_24390[(2)]);
var inst_24381 = async.call(null,inst_24380);
var state_24390__$1 = state_24390;
if(cljs.core.truth_(inst_24381)){
var statearr_24393_24525 = state_24390__$1;
(statearr_24393_24525[(1)] = (5));

} else {
var statearr_24394_24526 = state_24390__$1;
(statearr_24394_24526[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24391 === (5))){
var state_24390__$1 = state_24390;
var statearr_24395_24527 = state_24390__$1;
(statearr_24395_24527[(2)] = null);

(statearr_24395_24527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24391 === (6))){
var state_24390__$1 = state_24390;
var statearr_24396_24528 = state_24390__$1;
(statearr_24396_24528[(2)] = null);

(statearr_24396_24528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24391 === (7))){
var inst_24386 = (state_24390[(2)]);
var state_24390__$1 = state_24390;
var statearr_24397_24529 = state_24390__$1;
(statearr_24397_24529[(2)] = inst_24386);

(statearr_24397_24529[(1)] = (3));


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
});})(__24510,c__24184__auto___24523,G__24353_24511,G__24353_24512__$1,n__4376__auto___24509,jobs,results,process,async))
;
return ((function (__24510,switch__24096__auto__,c__24184__auto___24523,G__24353_24511,G__24353_24512__$1,n__4376__auto___24509,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24097__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24097__auto____0 = (function (){
var statearr_24398 = [null,null,null,null,null,null,null];
(statearr_24398[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24097__auto__);

(statearr_24398[(1)] = (1));

return statearr_24398;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24097__auto____1 = (function (state_24390){
while(true){
var ret_value__24098__auto__ = (function (){try{while(true){
var result__24099__auto__ = switch__24096__auto__.call(null,state_24390);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24099__auto__;
}
break;
}
}catch (e24399){if((e24399 instanceof Object)){
var ex__24100__auto__ = e24399;
var statearr_24400_24530 = state_24390;
(statearr_24400_24530[(5)] = ex__24100__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24390);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24531 = state_24390;
state_24390 = G__24531;
continue;
} else {
return ret_value__24098__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24097__auto__ = function(state_24390){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24097__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24097__auto____1.call(this,state_24390);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24097__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24097__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24097__auto__;
})()
;})(__24510,switch__24096__auto__,c__24184__auto___24523,G__24353_24511,G__24353_24512__$1,n__4376__auto___24509,jobs,results,process,async))
})();
var state__24186__auto__ = (function (){var statearr_24401 = f__24185__auto__.call(null);
(statearr_24401[(6)] = c__24184__auto___24523);

return statearr_24401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24186__auto__);
});})(__24510,c__24184__auto___24523,G__24353_24511,G__24353_24512__$1,n__4376__auto___24509,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24353_24512__$1)].join('')));

}

var G__24532 = (__24510 + (1));
__24510 = G__24532;
continue;
} else {
}
break;
}

var c__24184__auto___24533 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24184__auto___24533,jobs,results,process,async){
return (function (){
var f__24185__auto__ = (function (){var switch__24096__auto__ = ((function (c__24184__auto___24533,jobs,results,process,async){
return (function (state_24423){
var state_val_24424 = (state_24423[(1)]);
if((state_val_24424 === (1))){
var state_24423__$1 = state_24423;
var statearr_24425_24534 = state_24423__$1;
(statearr_24425_24534[(2)] = null);

(statearr_24425_24534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24424 === (2))){
var state_24423__$1 = state_24423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24423__$1,(4),from);
} else {
if((state_val_24424 === (3))){
var inst_24421 = (state_24423[(2)]);
var state_24423__$1 = state_24423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24423__$1,inst_24421);
} else {
if((state_val_24424 === (4))){
var inst_24404 = (state_24423[(7)]);
var inst_24404__$1 = (state_24423[(2)]);
var inst_24405 = (inst_24404__$1 == null);
var state_24423__$1 = (function (){var statearr_24426 = state_24423;
(statearr_24426[(7)] = inst_24404__$1);

return statearr_24426;
})();
if(cljs.core.truth_(inst_24405)){
var statearr_24427_24535 = state_24423__$1;
(statearr_24427_24535[(1)] = (5));

} else {
var statearr_24428_24536 = state_24423__$1;
(statearr_24428_24536[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24424 === (5))){
var inst_24407 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24423__$1 = state_24423;
var statearr_24429_24537 = state_24423__$1;
(statearr_24429_24537[(2)] = inst_24407);

(statearr_24429_24537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24424 === (6))){
var inst_24409 = (state_24423[(8)]);
var inst_24404 = (state_24423[(7)]);
var inst_24409__$1 = cljs.core.async.chan.call(null,(1));
var inst_24410 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24411 = [inst_24404,inst_24409__$1];
var inst_24412 = (new cljs.core.PersistentVector(null,2,(5),inst_24410,inst_24411,null));
var state_24423__$1 = (function (){var statearr_24430 = state_24423;
(statearr_24430[(8)] = inst_24409__$1);

return statearr_24430;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24423__$1,(8),jobs,inst_24412);
} else {
if((state_val_24424 === (7))){
var inst_24419 = (state_24423[(2)]);
var state_24423__$1 = state_24423;
var statearr_24431_24538 = state_24423__$1;
(statearr_24431_24538[(2)] = inst_24419);

(statearr_24431_24538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24424 === (8))){
var inst_24409 = (state_24423[(8)]);
var inst_24414 = (state_24423[(2)]);
var state_24423__$1 = (function (){var statearr_24432 = state_24423;
(statearr_24432[(9)] = inst_24414);

return statearr_24432;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24423__$1,(9),results,inst_24409);
} else {
if((state_val_24424 === (9))){
var inst_24416 = (state_24423[(2)]);
var state_24423__$1 = (function (){var statearr_24433 = state_24423;
(statearr_24433[(10)] = inst_24416);

return statearr_24433;
})();
var statearr_24434_24539 = state_24423__$1;
(statearr_24434_24539[(2)] = null);

(statearr_24434_24539[(1)] = (2));


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
});})(c__24184__auto___24533,jobs,results,process,async))
;
return ((function (switch__24096__auto__,c__24184__auto___24533,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24097__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24097__auto____0 = (function (){
var statearr_24435 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24435[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24097__auto__);

(statearr_24435[(1)] = (1));

return statearr_24435;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24097__auto____1 = (function (state_24423){
while(true){
var ret_value__24098__auto__ = (function (){try{while(true){
var result__24099__auto__ = switch__24096__auto__.call(null,state_24423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24099__auto__;
}
break;
}
}catch (e24436){if((e24436 instanceof Object)){
var ex__24100__auto__ = e24436;
var statearr_24437_24540 = state_24423;
(statearr_24437_24540[(5)] = ex__24100__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24541 = state_24423;
state_24423 = G__24541;
continue;
} else {
return ret_value__24098__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24097__auto__ = function(state_24423){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24097__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24097__auto____1.call(this,state_24423);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24097__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24097__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24097__auto__;
})()
;})(switch__24096__auto__,c__24184__auto___24533,jobs,results,process,async))
})();
var state__24186__auto__ = (function (){var statearr_24438 = f__24185__auto__.call(null);
(statearr_24438[(6)] = c__24184__auto___24533);

return statearr_24438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24186__auto__);
});})(c__24184__auto___24533,jobs,results,process,async))
);


var c__24184__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24184__auto__,jobs,results,process,async){
return (function (){
var f__24185__auto__ = (function (){var switch__24096__auto__ = ((function (c__24184__auto__,jobs,results,process,async){
return (function (state_24476){
var state_val_24477 = (state_24476[(1)]);
if((state_val_24477 === (7))){
var inst_24472 = (state_24476[(2)]);
var state_24476__$1 = state_24476;
var statearr_24478_24542 = state_24476__$1;
(statearr_24478_24542[(2)] = inst_24472);

(statearr_24478_24542[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24477 === (20))){
var state_24476__$1 = state_24476;
var statearr_24479_24543 = state_24476__$1;
(statearr_24479_24543[(2)] = null);

(statearr_24479_24543[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24477 === (1))){
var state_24476__$1 = state_24476;
var statearr_24480_24544 = state_24476__$1;
(statearr_24480_24544[(2)] = null);

(statearr_24480_24544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24477 === (4))){
var inst_24441 = (state_24476[(7)]);
var inst_24441__$1 = (state_24476[(2)]);
var inst_24442 = (inst_24441__$1 == null);
var state_24476__$1 = (function (){var statearr_24481 = state_24476;
(statearr_24481[(7)] = inst_24441__$1);

return statearr_24481;
})();
if(cljs.core.truth_(inst_24442)){
var statearr_24482_24545 = state_24476__$1;
(statearr_24482_24545[(1)] = (5));

} else {
var statearr_24483_24546 = state_24476__$1;
(statearr_24483_24546[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24477 === (15))){
var inst_24454 = (state_24476[(8)]);
var state_24476__$1 = state_24476;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24476__$1,(18),to,inst_24454);
} else {
if((state_val_24477 === (21))){
var inst_24467 = (state_24476[(2)]);
var state_24476__$1 = state_24476;
var statearr_24484_24547 = state_24476__$1;
(statearr_24484_24547[(2)] = inst_24467);

(statearr_24484_24547[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24477 === (13))){
var inst_24469 = (state_24476[(2)]);
var state_24476__$1 = (function (){var statearr_24485 = state_24476;
(statearr_24485[(9)] = inst_24469);

return statearr_24485;
})();
var statearr_24486_24548 = state_24476__$1;
(statearr_24486_24548[(2)] = null);

(statearr_24486_24548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24477 === (6))){
var inst_24441 = (state_24476[(7)]);
var state_24476__$1 = state_24476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24476__$1,(11),inst_24441);
} else {
if((state_val_24477 === (17))){
var inst_24462 = (state_24476[(2)]);
var state_24476__$1 = state_24476;
if(cljs.core.truth_(inst_24462)){
var statearr_24487_24549 = state_24476__$1;
(statearr_24487_24549[(1)] = (19));

} else {
var statearr_24488_24550 = state_24476__$1;
(statearr_24488_24550[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24477 === (3))){
var inst_24474 = (state_24476[(2)]);
var state_24476__$1 = state_24476;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24476__$1,inst_24474);
} else {
if((state_val_24477 === (12))){
var inst_24451 = (state_24476[(10)]);
var state_24476__$1 = state_24476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24476__$1,(14),inst_24451);
} else {
if((state_val_24477 === (2))){
var state_24476__$1 = state_24476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24476__$1,(4),results);
} else {
if((state_val_24477 === (19))){
var state_24476__$1 = state_24476;
var statearr_24489_24551 = state_24476__$1;
(statearr_24489_24551[(2)] = null);

(statearr_24489_24551[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24477 === (11))){
var inst_24451 = (state_24476[(2)]);
var state_24476__$1 = (function (){var statearr_24490 = state_24476;
(statearr_24490[(10)] = inst_24451);

return statearr_24490;
})();
var statearr_24491_24552 = state_24476__$1;
(statearr_24491_24552[(2)] = null);

(statearr_24491_24552[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24477 === (9))){
var state_24476__$1 = state_24476;
var statearr_24492_24553 = state_24476__$1;
(statearr_24492_24553[(2)] = null);

(statearr_24492_24553[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24477 === (5))){
var state_24476__$1 = state_24476;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24493_24554 = state_24476__$1;
(statearr_24493_24554[(1)] = (8));

} else {
var statearr_24494_24555 = state_24476__$1;
(statearr_24494_24555[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24477 === (14))){
var inst_24456 = (state_24476[(11)]);
var inst_24454 = (state_24476[(8)]);
var inst_24454__$1 = (state_24476[(2)]);
var inst_24455 = (inst_24454__$1 == null);
var inst_24456__$1 = cljs.core.not.call(null,inst_24455);
var state_24476__$1 = (function (){var statearr_24495 = state_24476;
(statearr_24495[(11)] = inst_24456__$1);

(statearr_24495[(8)] = inst_24454__$1);

return statearr_24495;
})();
if(inst_24456__$1){
var statearr_24496_24556 = state_24476__$1;
(statearr_24496_24556[(1)] = (15));

} else {
var statearr_24497_24557 = state_24476__$1;
(statearr_24497_24557[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24477 === (16))){
var inst_24456 = (state_24476[(11)]);
var state_24476__$1 = state_24476;
var statearr_24498_24558 = state_24476__$1;
(statearr_24498_24558[(2)] = inst_24456);

(statearr_24498_24558[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24477 === (10))){
var inst_24448 = (state_24476[(2)]);
var state_24476__$1 = state_24476;
var statearr_24499_24559 = state_24476__$1;
(statearr_24499_24559[(2)] = inst_24448);

(statearr_24499_24559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24477 === (18))){
var inst_24459 = (state_24476[(2)]);
var state_24476__$1 = state_24476;
var statearr_24500_24560 = state_24476__$1;
(statearr_24500_24560[(2)] = inst_24459);

(statearr_24500_24560[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24477 === (8))){
var inst_24445 = cljs.core.async.close_BANG_.call(null,to);
var state_24476__$1 = state_24476;
var statearr_24501_24561 = state_24476__$1;
(statearr_24501_24561[(2)] = inst_24445);

(statearr_24501_24561[(1)] = (10));


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
});})(c__24184__auto__,jobs,results,process,async))
;
return ((function (switch__24096__auto__,c__24184__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24097__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24097__auto____0 = (function (){
var statearr_24502 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24502[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24097__auto__);

(statearr_24502[(1)] = (1));

return statearr_24502;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24097__auto____1 = (function (state_24476){
while(true){
var ret_value__24098__auto__ = (function (){try{while(true){
var result__24099__auto__ = switch__24096__auto__.call(null,state_24476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24099__auto__;
}
break;
}
}catch (e24503){if((e24503 instanceof Object)){
var ex__24100__auto__ = e24503;
var statearr_24504_24562 = state_24476;
(statearr_24504_24562[(5)] = ex__24100__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24503;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24563 = state_24476;
state_24476 = G__24563;
continue;
} else {
return ret_value__24098__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24097__auto__ = function(state_24476){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24097__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24097__auto____1.call(this,state_24476);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24097__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24097__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24097__auto__;
})()
;})(switch__24096__auto__,c__24184__auto__,jobs,results,process,async))
})();
var state__24186__auto__ = (function (){var statearr_24505 = f__24185__auto__.call(null);
(statearr_24505[(6)] = c__24184__auto__);

return statearr_24505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24186__auto__);
});})(c__24184__auto__,jobs,results,process,async))
);

return c__24184__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__24565 = arguments.length;
switch (G__24565) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__24568 = arguments.length;
switch (G__24568) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__24571 = arguments.length;
switch (G__24571) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__24184__auto___24620 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24184__auto___24620,tc,fc){
return (function (){
var f__24185__auto__ = (function (){var switch__24096__auto__ = ((function (c__24184__auto___24620,tc,fc){
return (function (state_24597){
var state_val_24598 = (state_24597[(1)]);
if((state_val_24598 === (7))){
var inst_24593 = (state_24597[(2)]);
var state_24597__$1 = state_24597;
var statearr_24599_24621 = state_24597__$1;
(statearr_24599_24621[(2)] = inst_24593);

(statearr_24599_24621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24598 === (1))){
var state_24597__$1 = state_24597;
var statearr_24600_24622 = state_24597__$1;
(statearr_24600_24622[(2)] = null);

(statearr_24600_24622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24598 === (4))){
var inst_24574 = (state_24597[(7)]);
var inst_24574__$1 = (state_24597[(2)]);
var inst_24575 = (inst_24574__$1 == null);
var state_24597__$1 = (function (){var statearr_24601 = state_24597;
(statearr_24601[(7)] = inst_24574__$1);

return statearr_24601;
})();
if(cljs.core.truth_(inst_24575)){
var statearr_24602_24623 = state_24597__$1;
(statearr_24602_24623[(1)] = (5));

} else {
var statearr_24603_24624 = state_24597__$1;
(statearr_24603_24624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24598 === (13))){
var state_24597__$1 = state_24597;
var statearr_24604_24625 = state_24597__$1;
(statearr_24604_24625[(2)] = null);

(statearr_24604_24625[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24598 === (6))){
var inst_24574 = (state_24597[(7)]);
var inst_24580 = p.call(null,inst_24574);
var state_24597__$1 = state_24597;
if(cljs.core.truth_(inst_24580)){
var statearr_24605_24626 = state_24597__$1;
(statearr_24605_24626[(1)] = (9));

} else {
var statearr_24606_24627 = state_24597__$1;
(statearr_24606_24627[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24598 === (3))){
var inst_24595 = (state_24597[(2)]);
var state_24597__$1 = state_24597;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24597__$1,inst_24595);
} else {
if((state_val_24598 === (12))){
var state_24597__$1 = state_24597;
var statearr_24607_24628 = state_24597__$1;
(statearr_24607_24628[(2)] = null);

(statearr_24607_24628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24598 === (2))){
var state_24597__$1 = state_24597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24597__$1,(4),ch);
} else {
if((state_val_24598 === (11))){
var inst_24574 = (state_24597[(7)]);
var inst_24584 = (state_24597[(2)]);
var state_24597__$1 = state_24597;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24597__$1,(8),inst_24584,inst_24574);
} else {
if((state_val_24598 === (9))){
var state_24597__$1 = state_24597;
var statearr_24608_24629 = state_24597__$1;
(statearr_24608_24629[(2)] = tc);

(statearr_24608_24629[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24598 === (5))){
var inst_24577 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24578 = cljs.core.async.close_BANG_.call(null,fc);
var state_24597__$1 = (function (){var statearr_24609 = state_24597;
(statearr_24609[(8)] = inst_24577);

return statearr_24609;
})();
var statearr_24610_24630 = state_24597__$1;
(statearr_24610_24630[(2)] = inst_24578);

(statearr_24610_24630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24598 === (14))){
var inst_24591 = (state_24597[(2)]);
var state_24597__$1 = state_24597;
var statearr_24611_24631 = state_24597__$1;
(statearr_24611_24631[(2)] = inst_24591);

(statearr_24611_24631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24598 === (10))){
var state_24597__$1 = state_24597;
var statearr_24612_24632 = state_24597__$1;
(statearr_24612_24632[(2)] = fc);

(statearr_24612_24632[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24598 === (8))){
var inst_24586 = (state_24597[(2)]);
var state_24597__$1 = state_24597;
if(cljs.core.truth_(inst_24586)){
var statearr_24613_24633 = state_24597__$1;
(statearr_24613_24633[(1)] = (12));

} else {
var statearr_24614_24634 = state_24597__$1;
(statearr_24614_24634[(1)] = (13));

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
});})(c__24184__auto___24620,tc,fc))
;
return ((function (switch__24096__auto__,c__24184__auto___24620,tc,fc){
return (function() {
var cljs$core$async$state_machine__24097__auto__ = null;
var cljs$core$async$state_machine__24097__auto____0 = (function (){
var statearr_24615 = [null,null,null,null,null,null,null,null,null];
(statearr_24615[(0)] = cljs$core$async$state_machine__24097__auto__);

(statearr_24615[(1)] = (1));

return statearr_24615;
});
var cljs$core$async$state_machine__24097__auto____1 = (function (state_24597){
while(true){
var ret_value__24098__auto__ = (function (){try{while(true){
var result__24099__auto__ = switch__24096__auto__.call(null,state_24597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24099__auto__;
}
break;
}
}catch (e24616){if((e24616 instanceof Object)){
var ex__24100__auto__ = e24616;
var statearr_24617_24635 = state_24597;
(statearr_24617_24635[(5)] = ex__24100__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24616;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24636 = state_24597;
state_24597 = G__24636;
continue;
} else {
return ret_value__24098__auto__;
}
break;
}
});
cljs$core$async$state_machine__24097__auto__ = function(state_24597){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24097__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24097__auto____1.call(this,state_24597);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24097__auto____0;
cljs$core$async$state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24097__auto____1;
return cljs$core$async$state_machine__24097__auto__;
})()
;})(switch__24096__auto__,c__24184__auto___24620,tc,fc))
})();
var state__24186__auto__ = (function (){var statearr_24618 = f__24185__auto__.call(null);
(statearr_24618[(6)] = c__24184__auto___24620);

return statearr_24618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24186__auto__);
});})(c__24184__auto___24620,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__24184__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24184__auto__){
return (function (){
var f__24185__auto__ = (function (){var switch__24096__auto__ = ((function (c__24184__auto__){
return (function (state_24657){
var state_val_24658 = (state_24657[(1)]);
if((state_val_24658 === (7))){
var inst_24653 = (state_24657[(2)]);
var state_24657__$1 = state_24657;
var statearr_24659_24677 = state_24657__$1;
(statearr_24659_24677[(2)] = inst_24653);

(statearr_24659_24677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24658 === (1))){
var inst_24637 = init;
var state_24657__$1 = (function (){var statearr_24660 = state_24657;
(statearr_24660[(7)] = inst_24637);

return statearr_24660;
})();
var statearr_24661_24678 = state_24657__$1;
(statearr_24661_24678[(2)] = null);

(statearr_24661_24678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24658 === (4))){
var inst_24640 = (state_24657[(8)]);
var inst_24640__$1 = (state_24657[(2)]);
var inst_24641 = (inst_24640__$1 == null);
var state_24657__$1 = (function (){var statearr_24662 = state_24657;
(statearr_24662[(8)] = inst_24640__$1);

return statearr_24662;
})();
if(cljs.core.truth_(inst_24641)){
var statearr_24663_24679 = state_24657__$1;
(statearr_24663_24679[(1)] = (5));

} else {
var statearr_24664_24680 = state_24657__$1;
(statearr_24664_24680[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24658 === (6))){
var inst_24640 = (state_24657[(8)]);
var inst_24637 = (state_24657[(7)]);
var inst_24644 = (state_24657[(9)]);
var inst_24644__$1 = f.call(null,inst_24637,inst_24640);
var inst_24645 = cljs.core.reduced_QMARK_.call(null,inst_24644__$1);
var state_24657__$1 = (function (){var statearr_24665 = state_24657;
(statearr_24665[(9)] = inst_24644__$1);

return statearr_24665;
})();
if(inst_24645){
var statearr_24666_24681 = state_24657__$1;
(statearr_24666_24681[(1)] = (8));

} else {
var statearr_24667_24682 = state_24657__$1;
(statearr_24667_24682[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24658 === (3))){
var inst_24655 = (state_24657[(2)]);
var state_24657__$1 = state_24657;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24657__$1,inst_24655);
} else {
if((state_val_24658 === (2))){
var state_24657__$1 = state_24657;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24657__$1,(4),ch);
} else {
if((state_val_24658 === (9))){
var inst_24644 = (state_24657[(9)]);
var inst_24637 = inst_24644;
var state_24657__$1 = (function (){var statearr_24668 = state_24657;
(statearr_24668[(7)] = inst_24637);

return statearr_24668;
})();
var statearr_24669_24683 = state_24657__$1;
(statearr_24669_24683[(2)] = null);

(statearr_24669_24683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24658 === (5))){
var inst_24637 = (state_24657[(7)]);
var state_24657__$1 = state_24657;
var statearr_24670_24684 = state_24657__$1;
(statearr_24670_24684[(2)] = inst_24637);

(statearr_24670_24684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24658 === (10))){
var inst_24651 = (state_24657[(2)]);
var state_24657__$1 = state_24657;
var statearr_24671_24685 = state_24657__$1;
(statearr_24671_24685[(2)] = inst_24651);

(statearr_24671_24685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24658 === (8))){
var inst_24644 = (state_24657[(9)]);
var inst_24647 = cljs.core.deref.call(null,inst_24644);
var state_24657__$1 = state_24657;
var statearr_24672_24686 = state_24657__$1;
(statearr_24672_24686[(2)] = inst_24647);

(statearr_24672_24686[(1)] = (10));


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
});})(c__24184__auto__))
;
return ((function (switch__24096__auto__,c__24184__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24097__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24097__auto____0 = (function (){
var statearr_24673 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24673[(0)] = cljs$core$async$reduce_$_state_machine__24097__auto__);

(statearr_24673[(1)] = (1));

return statearr_24673;
});
var cljs$core$async$reduce_$_state_machine__24097__auto____1 = (function (state_24657){
while(true){
var ret_value__24098__auto__ = (function (){try{while(true){
var result__24099__auto__ = switch__24096__auto__.call(null,state_24657);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24099__auto__;
}
break;
}
}catch (e24674){if((e24674 instanceof Object)){
var ex__24100__auto__ = e24674;
var statearr_24675_24687 = state_24657;
(statearr_24675_24687[(5)] = ex__24100__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24657);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24674;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24688 = state_24657;
state_24657 = G__24688;
continue;
} else {
return ret_value__24098__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24097__auto__ = function(state_24657){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24097__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24097__auto____1.call(this,state_24657);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24097__auto____0;
cljs$core$async$reduce_$_state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24097__auto____1;
return cljs$core$async$reduce_$_state_machine__24097__auto__;
})()
;})(switch__24096__auto__,c__24184__auto__))
})();
var state__24186__auto__ = (function (){var statearr_24676 = f__24185__auto__.call(null);
(statearr_24676[(6)] = c__24184__auto__);

return statearr_24676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24186__auto__);
});})(c__24184__auto__))
);

return c__24184__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__24690 = arguments.length;
switch (G__24690) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24184__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24184__auto__){
return (function (){
var f__24185__auto__ = (function (){var switch__24096__auto__ = ((function (c__24184__auto__){
return (function (state_24715){
var state_val_24716 = (state_24715[(1)]);
if((state_val_24716 === (7))){
var inst_24697 = (state_24715[(2)]);
var state_24715__$1 = state_24715;
var statearr_24717_24738 = state_24715__$1;
(statearr_24717_24738[(2)] = inst_24697);

(statearr_24717_24738[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24716 === (1))){
var inst_24691 = cljs.core.seq.call(null,coll);
var inst_24692 = inst_24691;
var state_24715__$1 = (function (){var statearr_24718 = state_24715;
(statearr_24718[(7)] = inst_24692);

return statearr_24718;
})();
var statearr_24719_24739 = state_24715__$1;
(statearr_24719_24739[(2)] = null);

(statearr_24719_24739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24716 === (4))){
var inst_24692 = (state_24715[(7)]);
var inst_24695 = cljs.core.first.call(null,inst_24692);
var state_24715__$1 = state_24715;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24715__$1,(7),ch,inst_24695);
} else {
if((state_val_24716 === (13))){
var inst_24709 = (state_24715[(2)]);
var state_24715__$1 = state_24715;
var statearr_24720_24740 = state_24715__$1;
(statearr_24720_24740[(2)] = inst_24709);

(statearr_24720_24740[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24716 === (6))){
var inst_24700 = (state_24715[(2)]);
var state_24715__$1 = state_24715;
if(cljs.core.truth_(inst_24700)){
var statearr_24721_24741 = state_24715__$1;
(statearr_24721_24741[(1)] = (8));

} else {
var statearr_24722_24742 = state_24715__$1;
(statearr_24722_24742[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24716 === (3))){
var inst_24713 = (state_24715[(2)]);
var state_24715__$1 = state_24715;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24715__$1,inst_24713);
} else {
if((state_val_24716 === (12))){
var state_24715__$1 = state_24715;
var statearr_24723_24743 = state_24715__$1;
(statearr_24723_24743[(2)] = null);

(statearr_24723_24743[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24716 === (2))){
var inst_24692 = (state_24715[(7)]);
var state_24715__$1 = state_24715;
if(cljs.core.truth_(inst_24692)){
var statearr_24724_24744 = state_24715__$1;
(statearr_24724_24744[(1)] = (4));

} else {
var statearr_24725_24745 = state_24715__$1;
(statearr_24725_24745[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24716 === (11))){
var inst_24706 = cljs.core.async.close_BANG_.call(null,ch);
var state_24715__$1 = state_24715;
var statearr_24726_24746 = state_24715__$1;
(statearr_24726_24746[(2)] = inst_24706);

(statearr_24726_24746[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24716 === (9))){
var state_24715__$1 = state_24715;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24727_24747 = state_24715__$1;
(statearr_24727_24747[(1)] = (11));

} else {
var statearr_24728_24748 = state_24715__$1;
(statearr_24728_24748[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24716 === (5))){
var inst_24692 = (state_24715[(7)]);
var state_24715__$1 = state_24715;
var statearr_24729_24749 = state_24715__$1;
(statearr_24729_24749[(2)] = inst_24692);

(statearr_24729_24749[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24716 === (10))){
var inst_24711 = (state_24715[(2)]);
var state_24715__$1 = state_24715;
var statearr_24730_24750 = state_24715__$1;
(statearr_24730_24750[(2)] = inst_24711);

(statearr_24730_24750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24716 === (8))){
var inst_24692 = (state_24715[(7)]);
var inst_24702 = cljs.core.next.call(null,inst_24692);
var inst_24692__$1 = inst_24702;
var state_24715__$1 = (function (){var statearr_24731 = state_24715;
(statearr_24731[(7)] = inst_24692__$1);

return statearr_24731;
})();
var statearr_24732_24751 = state_24715__$1;
(statearr_24732_24751[(2)] = null);

(statearr_24732_24751[(1)] = (2));


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
});})(c__24184__auto__))
;
return ((function (switch__24096__auto__,c__24184__auto__){
return (function() {
var cljs$core$async$state_machine__24097__auto__ = null;
var cljs$core$async$state_machine__24097__auto____0 = (function (){
var statearr_24733 = [null,null,null,null,null,null,null,null];
(statearr_24733[(0)] = cljs$core$async$state_machine__24097__auto__);

(statearr_24733[(1)] = (1));

return statearr_24733;
});
var cljs$core$async$state_machine__24097__auto____1 = (function (state_24715){
while(true){
var ret_value__24098__auto__ = (function (){try{while(true){
var result__24099__auto__ = switch__24096__auto__.call(null,state_24715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24099__auto__;
}
break;
}
}catch (e24734){if((e24734 instanceof Object)){
var ex__24100__auto__ = e24734;
var statearr_24735_24752 = state_24715;
(statearr_24735_24752[(5)] = ex__24100__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24734;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24753 = state_24715;
state_24715 = G__24753;
continue;
} else {
return ret_value__24098__auto__;
}
break;
}
});
cljs$core$async$state_machine__24097__auto__ = function(state_24715){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24097__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24097__auto____1.call(this,state_24715);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24097__auto____0;
cljs$core$async$state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24097__auto____1;
return cljs$core$async$state_machine__24097__auto__;
})()
;})(switch__24096__auto__,c__24184__auto__))
})();
var state__24186__auto__ = (function (){var statearr_24736 = f__24185__auto__.call(null);
(statearr_24736[(6)] = c__24184__auto__);

return statearr_24736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24186__auto__);
});})(c__24184__auto__))
);

return c__24184__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async24754 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24754 = (function (ch,cs,meta24755){
this.ch = ch;
this.cs = cs;
this.meta24755 = meta24755;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24754.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24756,meta24755__$1){
var self__ = this;
var _24756__$1 = this;
return (new cljs.core.async.t_cljs$core$async24754(self__.ch,self__.cs,meta24755__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24754.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24756){
var self__ = this;
var _24756__$1 = this;
return self__.meta24755;
});})(cs))
;

cljs.core.async.t_cljs$core$async24754.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24754.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24754.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24754.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24754.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24754.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24754.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24755","meta24755",-92838638,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24754.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24754.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24754";

cljs.core.async.t_cljs$core$async24754.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24754");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24754.
 */
cljs.core.async.__GT_t_cljs$core$async24754 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24754(ch__$1,cs__$1,meta24755){
return (new cljs.core.async.t_cljs$core$async24754(ch__$1,cs__$1,meta24755));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24754(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__24184__auto___24976 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24184__auto___24976,cs,m,dchan,dctr,done){
return (function (){
var f__24185__auto__ = (function (){var switch__24096__auto__ = ((function (c__24184__auto___24976,cs,m,dchan,dctr,done){
return (function (state_24891){
var state_val_24892 = (state_24891[(1)]);
if((state_val_24892 === (7))){
var inst_24887 = (state_24891[(2)]);
var state_24891__$1 = state_24891;
var statearr_24893_24977 = state_24891__$1;
(statearr_24893_24977[(2)] = inst_24887);

(statearr_24893_24977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (20))){
var inst_24790 = (state_24891[(7)]);
var inst_24802 = cljs.core.first.call(null,inst_24790);
var inst_24803 = cljs.core.nth.call(null,inst_24802,(0),null);
var inst_24804 = cljs.core.nth.call(null,inst_24802,(1),null);
var state_24891__$1 = (function (){var statearr_24894 = state_24891;
(statearr_24894[(8)] = inst_24803);

return statearr_24894;
})();
if(cljs.core.truth_(inst_24804)){
var statearr_24895_24978 = state_24891__$1;
(statearr_24895_24978[(1)] = (22));

} else {
var statearr_24896_24979 = state_24891__$1;
(statearr_24896_24979[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (27))){
var inst_24839 = (state_24891[(9)]);
var inst_24759 = (state_24891[(10)]);
var inst_24834 = (state_24891[(11)]);
var inst_24832 = (state_24891[(12)]);
var inst_24839__$1 = cljs.core._nth.call(null,inst_24832,inst_24834);
var inst_24840 = cljs.core.async.put_BANG_.call(null,inst_24839__$1,inst_24759,done);
var state_24891__$1 = (function (){var statearr_24897 = state_24891;
(statearr_24897[(9)] = inst_24839__$1);

return statearr_24897;
})();
if(cljs.core.truth_(inst_24840)){
var statearr_24898_24980 = state_24891__$1;
(statearr_24898_24980[(1)] = (30));

} else {
var statearr_24899_24981 = state_24891__$1;
(statearr_24899_24981[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (1))){
var state_24891__$1 = state_24891;
var statearr_24900_24982 = state_24891__$1;
(statearr_24900_24982[(2)] = null);

(statearr_24900_24982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (24))){
var inst_24790 = (state_24891[(7)]);
var inst_24809 = (state_24891[(2)]);
var inst_24810 = cljs.core.next.call(null,inst_24790);
var inst_24768 = inst_24810;
var inst_24769 = null;
var inst_24770 = (0);
var inst_24771 = (0);
var state_24891__$1 = (function (){var statearr_24901 = state_24891;
(statearr_24901[(13)] = inst_24768);

(statearr_24901[(14)] = inst_24769);

(statearr_24901[(15)] = inst_24771);

(statearr_24901[(16)] = inst_24809);

(statearr_24901[(17)] = inst_24770);

return statearr_24901;
})();
var statearr_24902_24983 = state_24891__$1;
(statearr_24902_24983[(2)] = null);

(statearr_24902_24983[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (39))){
var state_24891__$1 = state_24891;
var statearr_24906_24984 = state_24891__$1;
(statearr_24906_24984[(2)] = null);

(statearr_24906_24984[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (4))){
var inst_24759 = (state_24891[(10)]);
var inst_24759__$1 = (state_24891[(2)]);
var inst_24760 = (inst_24759__$1 == null);
var state_24891__$1 = (function (){var statearr_24907 = state_24891;
(statearr_24907[(10)] = inst_24759__$1);

return statearr_24907;
})();
if(cljs.core.truth_(inst_24760)){
var statearr_24908_24985 = state_24891__$1;
(statearr_24908_24985[(1)] = (5));

} else {
var statearr_24909_24986 = state_24891__$1;
(statearr_24909_24986[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (15))){
var inst_24768 = (state_24891[(13)]);
var inst_24769 = (state_24891[(14)]);
var inst_24771 = (state_24891[(15)]);
var inst_24770 = (state_24891[(17)]);
var inst_24786 = (state_24891[(2)]);
var inst_24787 = (inst_24771 + (1));
var tmp24903 = inst_24768;
var tmp24904 = inst_24769;
var tmp24905 = inst_24770;
var inst_24768__$1 = tmp24903;
var inst_24769__$1 = tmp24904;
var inst_24770__$1 = tmp24905;
var inst_24771__$1 = inst_24787;
var state_24891__$1 = (function (){var statearr_24910 = state_24891;
(statearr_24910[(13)] = inst_24768__$1);

(statearr_24910[(18)] = inst_24786);

(statearr_24910[(14)] = inst_24769__$1);

(statearr_24910[(15)] = inst_24771__$1);

(statearr_24910[(17)] = inst_24770__$1);

return statearr_24910;
})();
var statearr_24911_24987 = state_24891__$1;
(statearr_24911_24987[(2)] = null);

(statearr_24911_24987[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (21))){
var inst_24813 = (state_24891[(2)]);
var state_24891__$1 = state_24891;
var statearr_24915_24988 = state_24891__$1;
(statearr_24915_24988[(2)] = inst_24813);

(statearr_24915_24988[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (31))){
var inst_24839 = (state_24891[(9)]);
var inst_24843 = done.call(null,null);
var inst_24844 = cljs.core.async.untap_STAR_.call(null,m,inst_24839);
var state_24891__$1 = (function (){var statearr_24916 = state_24891;
(statearr_24916[(19)] = inst_24843);

return statearr_24916;
})();
var statearr_24917_24989 = state_24891__$1;
(statearr_24917_24989[(2)] = inst_24844);

(statearr_24917_24989[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (32))){
var inst_24833 = (state_24891[(20)]);
var inst_24831 = (state_24891[(21)]);
var inst_24834 = (state_24891[(11)]);
var inst_24832 = (state_24891[(12)]);
var inst_24846 = (state_24891[(2)]);
var inst_24847 = (inst_24834 + (1));
var tmp24912 = inst_24833;
var tmp24913 = inst_24831;
var tmp24914 = inst_24832;
var inst_24831__$1 = tmp24913;
var inst_24832__$1 = tmp24914;
var inst_24833__$1 = tmp24912;
var inst_24834__$1 = inst_24847;
var state_24891__$1 = (function (){var statearr_24918 = state_24891;
(statearr_24918[(20)] = inst_24833__$1);

(statearr_24918[(21)] = inst_24831__$1);

(statearr_24918[(22)] = inst_24846);

(statearr_24918[(11)] = inst_24834__$1);

(statearr_24918[(12)] = inst_24832__$1);

return statearr_24918;
})();
var statearr_24919_24990 = state_24891__$1;
(statearr_24919_24990[(2)] = null);

(statearr_24919_24990[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (40))){
var inst_24859 = (state_24891[(23)]);
var inst_24863 = done.call(null,null);
var inst_24864 = cljs.core.async.untap_STAR_.call(null,m,inst_24859);
var state_24891__$1 = (function (){var statearr_24920 = state_24891;
(statearr_24920[(24)] = inst_24863);

return statearr_24920;
})();
var statearr_24921_24991 = state_24891__$1;
(statearr_24921_24991[(2)] = inst_24864);

(statearr_24921_24991[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (33))){
var inst_24850 = (state_24891[(25)]);
var inst_24852 = cljs.core.chunked_seq_QMARK_.call(null,inst_24850);
var state_24891__$1 = state_24891;
if(inst_24852){
var statearr_24922_24992 = state_24891__$1;
(statearr_24922_24992[(1)] = (36));

} else {
var statearr_24923_24993 = state_24891__$1;
(statearr_24923_24993[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (13))){
var inst_24780 = (state_24891[(26)]);
var inst_24783 = cljs.core.async.close_BANG_.call(null,inst_24780);
var state_24891__$1 = state_24891;
var statearr_24924_24994 = state_24891__$1;
(statearr_24924_24994[(2)] = inst_24783);

(statearr_24924_24994[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (22))){
var inst_24803 = (state_24891[(8)]);
var inst_24806 = cljs.core.async.close_BANG_.call(null,inst_24803);
var state_24891__$1 = state_24891;
var statearr_24925_24995 = state_24891__$1;
(statearr_24925_24995[(2)] = inst_24806);

(statearr_24925_24995[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (36))){
var inst_24850 = (state_24891[(25)]);
var inst_24854 = cljs.core.chunk_first.call(null,inst_24850);
var inst_24855 = cljs.core.chunk_rest.call(null,inst_24850);
var inst_24856 = cljs.core.count.call(null,inst_24854);
var inst_24831 = inst_24855;
var inst_24832 = inst_24854;
var inst_24833 = inst_24856;
var inst_24834 = (0);
var state_24891__$1 = (function (){var statearr_24926 = state_24891;
(statearr_24926[(20)] = inst_24833);

(statearr_24926[(21)] = inst_24831);

(statearr_24926[(11)] = inst_24834);

(statearr_24926[(12)] = inst_24832);

return statearr_24926;
})();
var statearr_24927_24996 = state_24891__$1;
(statearr_24927_24996[(2)] = null);

(statearr_24927_24996[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (41))){
var inst_24850 = (state_24891[(25)]);
var inst_24866 = (state_24891[(2)]);
var inst_24867 = cljs.core.next.call(null,inst_24850);
var inst_24831 = inst_24867;
var inst_24832 = null;
var inst_24833 = (0);
var inst_24834 = (0);
var state_24891__$1 = (function (){var statearr_24928 = state_24891;
(statearr_24928[(27)] = inst_24866);

(statearr_24928[(20)] = inst_24833);

(statearr_24928[(21)] = inst_24831);

(statearr_24928[(11)] = inst_24834);

(statearr_24928[(12)] = inst_24832);

return statearr_24928;
})();
var statearr_24929_24997 = state_24891__$1;
(statearr_24929_24997[(2)] = null);

(statearr_24929_24997[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (43))){
var state_24891__$1 = state_24891;
var statearr_24930_24998 = state_24891__$1;
(statearr_24930_24998[(2)] = null);

(statearr_24930_24998[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (29))){
var inst_24875 = (state_24891[(2)]);
var state_24891__$1 = state_24891;
var statearr_24931_24999 = state_24891__$1;
(statearr_24931_24999[(2)] = inst_24875);

(statearr_24931_24999[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (44))){
var inst_24884 = (state_24891[(2)]);
var state_24891__$1 = (function (){var statearr_24932 = state_24891;
(statearr_24932[(28)] = inst_24884);

return statearr_24932;
})();
var statearr_24933_25000 = state_24891__$1;
(statearr_24933_25000[(2)] = null);

(statearr_24933_25000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (6))){
var inst_24823 = (state_24891[(29)]);
var inst_24822 = cljs.core.deref.call(null,cs);
var inst_24823__$1 = cljs.core.keys.call(null,inst_24822);
var inst_24824 = cljs.core.count.call(null,inst_24823__$1);
var inst_24825 = cljs.core.reset_BANG_.call(null,dctr,inst_24824);
var inst_24830 = cljs.core.seq.call(null,inst_24823__$1);
var inst_24831 = inst_24830;
var inst_24832 = null;
var inst_24833 = (0);
var inst_24834 = (0);
var state_24891__$1 = (function (){var statearr_24934 = state_24891;
(statearr_24934[(30)] = inst_24825);

(statearr_24934[(20)] = inst_24833);

(statearr_24934[(21)] = inst_24831);

(statearr_24934[(11)] = inst_24834);

(statearr_24934[(12)] = inst_24832);

(statearr_24934[(29)] = inst_24823__$1);

return statearr_24934;
})();
var statearr_24935_25001 = state_24891__$1;
(statearr_24935_25001[(2)] = null);

(statearr_24935_25001[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (28))){
var inst_24831 = (state_24891[(21)]);
var inst_24850 = (state_24891[(25)]);
var inst_24850__$1 = cljs.core.seq.call(null,inst_24831);
var state_24891__$1 = (function (){var statearr_24936 = state_24891;
(statearr_24936[(25)] = inst_24850__$1);

return statearr_24936;
})();
if(inst_24850__$1){
var statearr_24937_25002 = state_24891__$1;
(statearr_24937_25002[(1)] = (33));

} else {
var statearr_24938_25003 = state_24891__$1;
(statearr_24938_25003[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (25))){
var inst_24833 = (state_24891[(20)]);
var inst_24834 = (state_24891[(11)]);
var inst_24836 = (inst_24834 < inst_24833);
var inst_24837 = inst_24836;
var state_24891__$1 = state_24891;
if(cljs.core.truth_(inst_24837)){
var statearr_24939_25004 = state_24891__$1;
(statearr_24939_25004[(1)] = (27));

} else {
var statearr_24940_25005 = state_24891__$1;
(statearr_24940_25005[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (34))){
var state_24891__$1 = state_24891;
var statearr_24941_25006 = state_24891__$1;
(statearr_24941_25006[(2)] = null);

(statearr_24941_25006[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (17))){
var state_24891__$1 = state_24891;
var statearr_24942_25007 = state_24891__$1;
(statearr_24942_25007[(2)] = null);

(statearr_24942_25007[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (3))){
var inst_24889 = (state_24891[(2)]);
var state_24891__$1 = state_24891;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24891__$1,inst_24889);
} else {
if((state_val_24892 === (12))){
var inst_24818 = (state_24891[(2)]);
var state_24891__$1 = state_24891;
var statearr_24943_25008 = state_24891__$1;
(statearr_24943_25008[(2)] = inst_24818);

(statearr_24943_25008[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (2))){
var state_24891__$1 = state_24891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24891__$1,(4),ch);
} else {
if((state_val_24892 === (23))){
var state_24891__$1 = state_24891;
var statearr_24944_25009 = state_24891__$1;
(statearr_24944_25009[(2)] = null);

(statearr_24944_25009[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (35))){
var inst_24873 = (state_24891[(2)]);
var state_24891__$1 = state_24891;
var statearr_24945_25010 = state_24891__$1;
(statearr_24945_25010[(2)] = inst_24873);

(statearr_24945_25010[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (19))){
var inst_24790 = (state_24891[(7)]);
var inst_24794 = cljs.core.chunk_first.call(null,inst_24790);
var inst_24795 = cljs.core.chunk_rest.call(null,inst_24790);
var inst_24796 = cljs.core.count.call(null,inst_24794);
var inst_24768 = inst_24795;
var inst_24769 = inst_24794;
var inst_24770 = inst_24796;
var inst_24771 = (0);
var state_24891__$1 = (function (){var statearr_24946 = state_24891;
(statearr_24946[(13)] = inst_24768);

(statearr_24946[(14)] = inst_24769);

(statearr_24946[(15)] = inst_24771);

(statearr_24946[(17)] = inst_24770);

return statearr_24946;
})();
var statearr_24947_25011 = state_24891__$1;
(statearr_24947_25011[(2)] = null);

(statearr_24947_25011[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (11))){
var inst_24768 = (state_24891[(13)]);
var inst_24790 = (state_24891[(7)]);
var inst_24790__$1 = cljs.core.seq.call(null,inst_24768);
var state_24891__$1 = (function (){var statearr_24948 = state_24891;
(statearr_24948[(7)] = inst_24790__$1);

return statearr_24948;
})();
if(inst_24790__$1){
var statearr_24949_25012 = state_24891__$1;
(statearr_24949_25012[(1)] = (16));

} else {
var statearr_24950_25013 = state_24891__$1;
(statearr_24950_25013[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (9))){
var inst_24820 = (state_24891[(2)]);
var state_24891__$1 = state_24891;
var statearr_24951_25014 = state_24891__$1;
(statearr_24951_25014[(2)] = inst_24820);

(statearr_24951_25014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (5))){
var inst_24766 = cljs.core.deref.call(null,cs);
var inst_24767 = cljs.core.seq.call(null,inst_24766);
var inst_24768 = inst_24767;
var inst_24769 = null;
var inst_24770 = (0);
var inst_24771 = (0);
var state_24891__$1 = (function (){var statearr_24952 = state_24891;
(statearr_24952[(13)] = inst_24768);

(statearr_24952[(14)] = inst_24769);

(statearr_24952[(15)] = inst_24771);

(statearr_24952[(17)] = inst_24770);

return statearr_24952;
})();
var statearr_24953_25015 = state_24891__$1;
(statearr_24953_25015[(2)] = null);

(statearr_24953_25015[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (14))){
var state_24891__$1 = state_24891;
var statearr_24954_25016 = state_24891__$1;
(statearr_24954_25016[(2)] = null);

(statearr_24954_25016[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (45))){
var inst_24881 = (state_24891[(2)]);
var state_24891__$1 = state_24891;
var statearr_24955_25017 = state_24891__$1;
(statearr_24955_25017[(2)] = inst_24881);

(statearr_24955_25017[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (26))){
var inst_24823 = (state_24891[(29)]);
var inst_24877 = (state_24891[(2)]);
var inst_24878 = cljs.core.seq.call(null,inst_24823);
var state_24891__$1 = (function (){var statearr_24956 = state_24891;
(statearr_24956[(31)] = inst_24877);

return statearr_24956;
})();
if(inst_24878){
var statearr_24957_25018 = state_24891__$1;
(statearr_24957_25018[(1)] = (42));

} else {
var statearr_24958_25019 = state_24891__$1;
(statearr_24958_25019[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (16))){
var inst_24790 = (state_24891[(7)]);
var inst_24792 = cljs.core.chunked_seq_QMARK_.call(null,inst_24790);
var state_24891__$1 = state_24891;
if(inst_24792){
var statearr_24959_25020 = state_24891__$1;
(statearr_24959_25020[(1)] = (19));

} else {
var statearr_24960_25021 = state_24891__$1;
(statearr_24960_25021[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (38))){
var inst_24870 = (state_24891[(2)]);
var state_24891__$1 = state_24891;
var statearr_24961_25022 = state_24891__$1;
(statearr_24961_25022[(2)] = inst_24870);

(statearr_24961_25022[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (30))){
var state_24891__$1 = state_24891;
var statearr_24962_25023 = state_24891__$1;
(statearr_24962_25023[(2)] = null);

(statearr_24962_25023[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (10))){
var inst_24769 = (state_24891[(14)]);
var inst_24771 = (state_24891[(15)]);
var inst_24779 = cljs.core._nth.call(null,inst_24769,inst_24771);
var inst_24780 = cljs.core.nth.call(null,inst_24779,(0),null);
var inst_24781 = cljs.core.nth.call(null,inst_24779,(1),null);
var state_24891__$1 = (function (){var statearr_24963 = state_24891;
(statearr_24963[(26)] = inst_24780);

return statearr_24963;
})();
if(cljs.core.truth_(inst_24781)){
var statearr_24964_25024 = state_24891__$1;
(statearr_24964_25024[(1)] = (13));

} else {
var statearr_24965_25025 = state_24891__$1;
(statearr_24965_25025[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (18))){
var inst_24816 = (state_24891[(2)]);
var state_24891__$1 = state_24891;
var statearr_24966_25026 = state_24891__$1;
(statearr_24966_25026[(2)] = inst_24816);

(statearr_24966_25026[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (42))){
var state_24891__$1 = state_24891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24891__$1,(45),dchan);
} else {
if((state_val_24892 === (37))){
var inst_24759 = (state_24891[(10)]);
var inst_24859 = (state_24891[(23)]);
var inst_24850 = (state_24891[(25)]);
var inst_24859__$1 = cljs.core.first.call(null,inst_24850);
var inst_24860 = cljs.core.async.put_BANG_.call(null,inst_24859__$1,inst_24759,done);
var state_24891__$1 = (function (){var statearr_24967 = state_24891;
(statearr_24967[(23)] = inst_24859__$1);

return statearr_24967;
})();
if(cljs.core.truth_(inst_24860)){
var statearr_24968_25027 = state_24891__$1;
(statearr_24968_25027[(1)] = (39));

} else {
var statearr_24969_25028 = state_24891__$1;
(statearr_24969_25028[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24892 === (8))){
var inst_24771 = (state_24891[(15)]);
var inst_24770 = (state_24891[(17)]);
var inst_24773 = (inst_24771 < inst_24770);
var inst_24774 = inst_24773;
var state_24891__$1 = state_24891;
if(cljs.core.truth_(inst_24774)){
var statearr_24970_25029 = state_24891__$1;
(statearr_24970_25029[(1)] = (10));

} else {
var statearr_24971_25030 = state_24891__$1;
(statearr_24971_25030[(1)] = (11));

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
});})(c__24184__auto___24976,cs,m,dchan,dctr,done))
;
return ((function (switch__24096__auto__,c__24184__auto___24976,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24097__auto__ = null;
var cljs$core$async$mult_$_state_machine__24097__auto____0 = (function (){
var statearr_24972 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24972[(0)] = cljs$core$async$mult_$_state_machine__24097__auto__);

(statearr_24972[(1)] = (1));

return statearr_24972;
});
var cljs$core$async$mult_$_state_machine__24097__auto____1 = (function (state_24891){
while(true){
var ret_value__24098__auto__ = (function (){try{while(true){
var result__24099__auto__ = switch__24096__auto__.call(null,state_24891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24099__auto__;
}
break;
}
}catch (e24973){if((e24973 instanceof Object)){
var ex__24100__auto__ = e24973;
var statearr_24974_25031 = state_24891;
(statearr_24974_25031[(5)] = ex__24100__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24973;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25032 = state_24891;
state_24891 = G__25032;
continue;
} else {
return ret_value__24098__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24097__auto__ = function(state_24891){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24097__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24097__auto____1.call(this,state_24891);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24097__auto____0;
cljs$core$async$mult_$_state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24097__auto____1;
return cljs$core$async$mult_$_state_machine__24097__auto__;
})()
;})(switch__24096__auto__,c__24184__auto___24976,cs,m,dchan,dctr,done))
})();
var state__24186__auto__ = (function (){var statearr_24975 = f__24185__auto__.call(null);
(statearr_24975[(6)] = c__24184__auto___24976);

return statearr_24975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24186__auto__);
});})(c__24184__auto___24976,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__25034 = arguments.length;
switch (G__25034) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___25046 = arguments.length;
var i__4500__auto___25047 = (0);
while(true){
if((i__4500__auto___25047 < len__4499__auto___25046)){
args__4502__auto__.push((arguments[i__4500__auto___25047]));

var G__25048 = (i__4500__auto___25047 + (1));
i__4500__auto___25047 = G__25048;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25040){
var map__25041 = p__25040;
var map__25041__$1 = ((((!((map__25041 == null)))?(((((map__25041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25041):map__25041);
var opts = map__25041__$1;
var statearr_25043_25049 = state;
(statearr_25043_25049[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__25041,map__25041__$1,opts){
return (function (val){
var statearr_25044_25050 = state;
(statearr_25044_25050[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25041,map__25041__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_25045_25051 = state;
(statearr_25045_25051[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25036){
var G__25037 = cljs.core.first.call(null,seq25036);
var seq25036__$1 = cljs.core.next.call(null,seq25036);
var G__25038 = cljs.core.first.call(null,seq25036__$1);
var seq25036__$2 = cljs.core.next.call(null,seq25036__$1);
var G__25039 = cljs.core.first.call(null,seq25036__$2);
var seq25036__$3 = cljs.core.next.call(null,seq25036__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25037,G__25038,G__25039,seq25036__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async25052 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25052 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta25053){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta25053 = meta25053;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25052.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25054,meta25053__$1){
var self__ = this;
var _25054__$1 = this;
return (new cljs.core.async.t_cljs$core$async25052(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta25053__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25052.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25054){
var self__ = this;
var _25054__$1 = this;
return self__.meta25053;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25052.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25052.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25052.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25052.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25052.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25052.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25052.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25052.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25052.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta25053","meta25053",-138858875,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25052.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25052.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25052";

cljs.core.async.t_cljs$core$async25052.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async25052");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25052.
 */
cljs.core.async.__GT_t_cljs$core$async25052 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25052(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta25053){
return (new cljs.core.async.t_cljs$core$async25052(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta25053));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25052(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24184__auto___25216 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24184__auto___25216,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24185__auto__ = (function (){var switch__24096__auto__ = ((function (c__24184__auto___25216,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25156){
var state_val_25157 = (state_25156[(1)]);
if((state_val_25157 === (7))){
var inst_25071 = (state_25156[(2)]);
var state_25156__$1 = state_25156;
var statearr_25158_25217 = state_25156__$1;
(statearr_25158_25217[(2)] = inst_25071);

(statearr_25158_25217[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (20))){
var inst_25083 = (state_25156[(7)]);
var state_25156__$1 = state_25156;
var statearr_25159_25218 = state_25156__$1;
(statearr_25159_25218[(2)] = inst_25083);

(statearr_25159_25218[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (27))){
var state_25156__$1 = state_25156;
var statearr_25160_25219 = state_25156__$1;
(statearr_25160_25219[(2)] = null);

(statearr_25160_25219[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (1))){
var inst_25058 = (state_25156[(8)]);
var inst_25058__$1 = calc_state.call(null);
var inst_25060 = (inst_25058__$1 == null);
var inst_25061 = cljs.core.not.call(null,inst_25060);
var state_25156__$1 = (function (){var statearr_25161 = state_25156;
(statearr_25161[(8)] = inst_25058__$1);

return statearr_25161;
})();
if(inst_25061){
var statearr_25162_25220 = state_25156__$1;
(statearr_25162_25220[(1)] = (2));

} else {
var statearr_25163_25221 = state_25156__$1;
(statearr_25163_25221[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (24))){
var inst_25107 = (state_25156[(9)]);
var inst_25116 = (state_25156[(10)]);
var inst_25130 = (state_25156[(11)]);
var inst_25130__$1 = inst_25107.call(null,inst_25116);
var state_25156__$1 = (function (){var statearr_25164 = state_25156;
(statearr_25164[(11)] = inst_25130__$1);

return statearr_25164;
})();
if(cljs.core.truth_(inst_25130__$1)){
var statearr_25165_25222 = state_25156__$1;
(statearr_25165_25222[(1)] = (29));

} else {
var statearr_25166_25223 = state_25156__$1;
(statearr_25166_25223[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (4))){
var inst_25074 = (state_25156[(2)]);
var state_25156__$1 = state_25156;
if(cljs.core.truth_(inst_25074)){
var statearr_25167_25224 = state_25156__$1;
(statearr_25167_25224[(1)] = (8));

} else {
var statearr_25168_25225 = state_25156__$1;
(statearr_25168_25225[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (15))){
var inst_25101 = (state_25156[(2)]);
var state_25156__$1 = state_25156;
if(cljs.core.truth_(inst_25101)){
var statearr_25169_25226 = state_25156__$1;
(statearr_25169_25226[(1)] = (19));

} else {
var statearr_25170_25227 = state_25156__$1;
(statearr_25170_25227[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (21))){
var inst_25106 = (state_25156[(12)]);
var inst_25106__$1 = (state_25156[(2)]);
var inst_25107 = cljs.core.get.call(null,inst_25106__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25108 = cljs.core.get.call(null,inst_25106__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25109 = cljs.core.get.call(null,inst_25106__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25156__$1 = (function (){var statearr_25171 = state_25156;
(statearr_25171[(9)] = inst_25107);

(statearr_25171[(12)] = inst_25106__$1);

(statearr_25171[(13)] = inst_25108);

return statearr_25171;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25156__$1,(22),inst_25109);
} else {
if((state_val_25157 === (31))){
var inst_25138 = (state_25156[(2)]);
var state_25156__$1 = state_25156;
if(cljs.core.truth_(inst_25138)){
var statearr_25172_25228 = state_25156__$1;
(statearr_25172_25228[(1)] = (32));

} else {
var statearr_25173_25229 = state_25156__$1;
(statearr_25173_25229[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (32))){
var inst_25115 = (state_25156[(14)]);
var state_25156__$1 = state_25156;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25156__$1,(35),out,inst_25115);
} else {
if((state_val_25157 === (33))){
var inst_25106 = (state_25156[(12)]);
var inst_25083 = inst_25106;
var state_25156__$1 = (function (){var statearr_25174 = state_25156;
(statearr_25174[(7)] = inst_25083);

return statearr_25174;
})();
var statearr_25175_25230 = state_25156__$1;
(statearr_25175_25230[(2)] = null);

(statearr_25175_25230[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (13))){
var inst_25083 = (state_25156[(7)]);
var inst_25090 = inst_25083.cljs$lang$protocol_mask$partition0$;
var inst_25091 = (inst_25090 & (64));
var inst_25092 = inst_25083.cljs$core$ISeq$;
var inst_25093 = (cljs.core.PROTOCOL_SENTINEL === inst_25092);
var inst_25094 = ((inst_25091) || (inst_25093));
var state_25156__$1 = state_25156;
if(cljs.core.truth_(inst_25094)){
var statearr_25176_25231 = state_25156__$1;
(statearr_25176_25231[(1)] = (16));

} else {
var statearr_25177_25232 = state_25156__$1;
(statearr_25177_25232[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (22))){
var inst_25116 = (state_25156[(10)]);
var inst_25115 = (state_25156[(14)]);
var inst_25114 = (state_25156[(2)]);
var inst_25115__$1 = cljs.core.nth.call(null,inst_25114,(0),null);
var inst_25116__$1 = cljs.core.nth.call(null,inst_25114,(1),null);
var inst_25117 = (inst_25115__$1 == null);
var inst_25118 = cljs.core._EQ_.call(null,inst_25116__$1,change);
var inst_25119 = ((inst_25117) || (inst_25118));
var state_25156__$1 = (function (){var statearr_25178 = state_25156;
(statearr_25178[(10)] = inst_25116__$1);

(statearr_25178[(14)] = inst_25115__$1);

return statearr_25178;
})();
if(cljs.core.truth_(inst_25119)){
var statearr_25179_25233 = state_25156__$1;
(statearr_25179_25233[(1)] = (23));

} else {
var statearr_25180_25234 = state_25156__$1;
(statearr_25180_25234[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (36))){
var inst_25106 = (state_25156[(12)]);
var inst_25083 = inst_25106;
var state_25156__$1 = (function (){var statearr_25181 = state_25156;
(statearr_25181[(7)] = inst_25083);

return statearr_25181;
})();
var statearr_25182_25235 = state_25156__$1;
(statearr_25182_25235[(2)] = null);

(statearr_25182_25235[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (29))){
var inst_25130 = (state_25156[(11)]);
var state_25156__$1 = state_25156;
var statearr_25183_25236 = state_25156__$1;
(statearr_25183_25236[(2)] = inst_25130);

(statearr_25183_25236[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (6))){
var state_25156__$1 = state_25156;
var statearr_25184_25237 = state_25156__$1;
(statearr_25184_25237[(2)] = false);

(statearr_25184_25237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (28))){
var inst_25126 = (state_25156[(2)]);
var inst_25127 = calc_state.call(null);
var inst_25083 = inst_25127;
var state_25156__$1 = (function (){var statearr_25185 = state_25156;
(statearr_25185[(7)] = inst_25083);

(statearr_25185[(15)] = inst_25126);

return statearr_25185;
})();
var statearr_25186_25238 = state_25156__$1;
(statearr_25186_25238[(2)] = null);

(statearr_25186_25238[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (25))){
var inst_25152 = (state_25156[(2)]);
var state_25156__$1 = state_25156;
var statearr_25187_25239 = state_25156__$1;
(statearr_25187_25239[(2)] = inst_25152);

(statearr_25187_25239[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (34))){
var inst_25150 = (state_25156[(2)]);
var state_25156__$1 = state_25156;
var statearr_25188_25240 = state_25156__$1;
(statearr_25188_25240[(2)] = inst_25150);

(statearr_25188_25240[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (17))){
var state_25156__$1 = state_25156;
var statearr_25189_25241 = state_25156__$1;
(statearr_25189_25241[(2)] = false);

(statearr_25189_25241[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (3))){
var state_25156__$1 = state_25156;
var statearr_25190_25242 = state_25156__$1;
(statearr_25190_25242[(2)] = false);

(statearr_25190_25242[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (12))){
var inst_25154 = (state_25156[(2)]);
var state_25156__$1 = state_25156;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25156__$1,inst_25154);
} else {
if((state_val_25157 === (2))){
var inst_25058 = (state_25156[(8)]);
var inst_25063 = inst_25058.cljs$lang$protocol_mask$partition0$;
var inst_25064 = (inst_25063 & (64));
var inst_25065 = inst_25058.cljs$core$ISeq$;
var inst_25066 = (cljs.core.PROTOCOL_SENTINEL === inst_25065);
var inst_25067 = ((inst_25064) || (inst_25066));
var state_25156__$1 = state_25156;
if(cljs.core.truth_(inst_25067)){
var statearr_25191_25243 = state_25156__$1;
(statearr_25191_25243[(1)] = (5));

} else {
var statearr_25192_25244 = state_25156__$1;
(statearr_25192_25244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (23))){
var inst_25115 = (state_25156[(14)]);
var inst_25121 = (inst_25115 == null);
var state_25156__$1 = state_25156;
if(cljs.core.truth_(inst_25121)){
var statearr_25193_25245 = state_25156__$1;
(statearr_25193_25245[(1)] = (26));

} else {
var statearr_25194_25246 = state_25156__$1;
(statearr_25194_25246[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (35))){
var inst_25141 = (state_25156[(2)]);
var state_25156__$1 = state_25156;
if(cljs.core.truth_(inst_25141)){
var statearr_25195_25247 = state_25156__$1;
(statearr_25195_25247[(1)] = (36));

} else {
var statearr_25196_25248 = state_25156__$1;
(statearr_25196_25248[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (19))){
var inst_25083 = (state_25156[(7)]);
var inst_25103 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25083);
var state_25156__$1 = state_25156;
var statearr_25197_25249 = state_25156__$1;
(statearr_25197_25249[(2)] = inst_25103);

(statearr_25197_25249[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (11))){
var inst_25083 = (state_25156[(7)]);
var inst_25087 = (inst_25083 == null);
var inst_25088 = cljs.core.not.call(null,inst_25087);
var state_25156__$1 = state_25156;
if(inst_25088){
var statearr_25198_25250 = state_25156__$1;
(statearr_25198_25250[(1)] = (13));

} else {
var statearr_25199_25251 = state_25156__$1;
(statearr_25199_25251[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (9))){
var inst_25058 = (state_25156[(8)]);
var state_25156__$1 = state_25156;
var statearr_25200_25252 = state_25156__$1;
(statearr_25200_25252[(2)] = inst_25058);

(statearr_25200_25252[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (5))){
var state_25156__$1 = state_25156;
var statearr_25201_25253 = state_25156__$1;
(statearr_25201_25253[(2)] = true);

(statearr_25201_25253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (14))){
var state_25156__$1 = state_25156;
var statearr_25202_25254 = state_25156__$1;
(statearr_25202_25254[(2)] = false);

(statearr_25202_25254[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (26))){
var inst_25116 = (state_25156[(10)]);
var inst_25123 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25116);
var state_25156__$1 = state_25156;
var statearr_25203_25255 = state_25156__$1;
(statearr_25203_25255[(2)] = inst_25123);

(statearr_25203_25255[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (16))){
var state_25156__$1 = state_25156;
var statearr_25204_25256 = state_25156__$1;
(statearr_25204_25256[(2)] = true);

(statearr_25204_25256[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (38))){
var inst_25146 = (state_25156[(2)]);
var state_25156__$1 = state_25156;
var statearr_25205_25257 = state_25156__$1;
(statearr_25205_25257[(2)] = inst_25146);

(statearr_25205_25257[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (30))){
var inst_25107 = (state_25156[(9)]);
var inst_25116 = (state_25156[(10)]);
var inst_25108 = (state_25156[(13)]);
var inst_25133 = cljs.core.empty_QMARK_.call(null,inst_25107);
var inst_25134 = inst_25108.call(null,inst_25116);
var inst_25135 = cljs.core.not.call(null,inst_25134);
var inst_25136 = ((inst_25133) && (inst_25135));
var state_25156__$1 = state_25156;
var statearr_25206_25258 = state_25156__$1;
(statearr_25206_25258[(2)] = inst_25136);

(statearr_25206_25258[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (10))){
var inst_25058 = (state_25156[(8)]);
var inst_25079 = (state_25156[(2)]);
var inst_25080 = cljs.core.get.call(null,inst_25079,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25081 = cljs.core.get.call(null,inst_25079,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25082 = cljs.core.get.call(null,inst_25079,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25083 = inst_25058;
var state_25156__$1 = (function (){var statearr_25207 = state_25156;
(statearr_25207[(16)] = inst_25081);

(statearr_25207[(7)] = inst_25083);

(statearr_25207[(17)] = inst_25082);

(statearr_25207[(18)] = inst_25080);

return statearr_25207;
})();
var statearr_25208_25259 = state_25156__$1;
(statearr_25208_25259[(2)] = null);

(statearr_25208_25259[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (18))){
var inst_25098 = (state_25156[(2)]);
var state_25156__$1 = state_25156;
var statearr_25209_25260 = state_25156__$1;
(statearr_25209_25260[(2)] = inst_25098);

(statearr_25209_25260[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (37))){
var state_25156__$1 = state_25156;
var statearr_25210_25261 = state_25156__$1;
(statearr_25210_25261[(2)] = null);

(statearr_25210_25261[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (8))){
var inst_25058 = (state_25156[(8)]);
var inst_25076 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25058);
var state_25156__$1 = state_25156;
var statearr_25211_25262 = state_25156__$1;
(statearr_25211_25262[(2)] = inst_25076);

(statearr_25211_25262[(1)] = (10));


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
});})(c__24184__auto___25216,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24096__auto__,c__24184__auto___25216,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24097__auto__ = null;
var cljs$core$async$mix_$_state_machine__24097__auto____0 = (function (){
var statearr_25212 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25212[(0)] = cljs$core$async$mix_$_state_machine__24097__auto__);

(statearr_25212[(1)] = (1));

return statearr_25212;
});
var cljs$core$async$mix_$_state_machine__24097__auto____1 = (function (state_25156){
while(true){
var ret_value__24098__auto__ = (function (){try{while(true){
var result__24099__auto__ = switch__24096__auto__.call(null,state_25156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24099__auto__;
}
break;
}
}catch (e25213){if((e25213 instanceof Object)){
var ex__24100__auto__ = e25213;
var statearr_25214_25263 = state_25156;
(statearr_25214_25263[(5)] = ex__24100__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25213;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25264 = state_25156;
state_25156 = G__25264;
continue;
} else {
return ret_value__24098__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24097__auto__ = function(state_25156){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24097__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24097__auto____1.call(this,state_25156);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24097__auto____0;
cljs$core$async$mix_$_state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24097__auto____1;
return cljs$core$async$mix_$_state_machine__24097__auto__;
})()
;})(switch__24096__auto__,c__24184__auto___25216,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24186__auto__ = (function (){var statearr_25215 = f__24185__auto__.call(null);
(statearr_25215[(6)] = c__24184__auto___25216);

return statearr_25215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24186__auto__);
});})(c__24184__auto___25216,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__25266 = arguments.length;
switch (G__25266) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__25270 = arguments.length;
switch (G__25270) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__25268_SHARP_){
if(cljs.core.truth_(p1__25268_SHARP_.call(null,topic))){
return p1__25268_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25268_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async25271 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25271 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25272){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25272 = meta25272;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25273,meta25272__$1){
var self__ = this;
var _25273__$1 = this;
return (new cljs.core.async.t_cljs$core$async25271(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25272__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25271.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25273){
var self__ = this;
var _25273__$1 = this;
return self__.meta25272;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25271.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25271.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25271.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25271.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25271.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25271.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25271.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25271.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25272","meta25272",416685687,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25271.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25271.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25271";

cljs.core.async.t_cljs$core$async25271.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async25271");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25271.
 */
cljs.core.async.__GT_t_cljs$core$async25271 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25271(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25272){
return (new cljs.core.async.t_cljs$core$async25271(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25272));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25271(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24184__auto___25391 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24184__auto___25391,mults,ensure_mult,p){
return (function (){
var f__24185__auto__ = (function (){var switch__24096__auto__ = ((function (c__24184__auto___25391,mults,ensure_mult,p){
return (function (state_25345){
var state_val_25346 = (state_25345[(1)]);
if((state_val_25346 === (7))){
var inst_25341 = (state_25345[(2)]);
var state_25345__$1 = state_25345;
var statearr_25347_25392 = state_25345__$1;
(statearr_25347_25392[(2)] = inst_25341);

(statearr_25347_25392[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25346 === (20))){
var state_25345__$1 = state_25345;
var statearr_25348_25393 = state_25345__$1;
(statearr_25348_25393[(2)] = null);

(statearr_25348_25393[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25346 === (1))){
var state_25345__$1 = state_25345;
var statearr_25349_25394 = state_25345__$1;
(statearr_25349_25394[(2)] = null);

(statearr_25349_25394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25346 === (24))){
var inst_25324 = (state_25345[(7)]);
var inst_25333 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25324);
var state_25345__$1 = state_25345;
var statearr_25350_25395 = state_25345__$1;
(statearr_25350_25395[(2)] = inst_25333);

(statearr_25350_25395[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25346 === (4))){
var inst_25276 = (state_25345[(8)]);
var inst_25276__$1 = (state_25345[(2)]);
var inst_25277 = (inst_25276__$1 == null);
var state_25345__$1 = (function (){var statearr_25351 = state_25345;
(statearr_25351[(8)] = inst_25276__$1);

return statearr_25351;
})();
if(cljs.core.truth_(inst_25277)){
var statearr_25352_25396 = state_25345__$1;
(statearr_25352_25396[(1)] = (5));

} else {
var statearr_25353_25397 = state_25345__$1;
(statearr_25353_25397[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25346 === (15))){
var inst_25318 = (state_25345[(2)]);
var state_25345__$1 = state_25345;
var statearr_25354_25398 = state_25345__$1;
(statearr_25354_25398[(2)] = inst_25318);

(statearr_25354_25398[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25346 === (21))){
var inst_25338 = (state_25345[(2)]);
var state_25345__$1 = (function (){var statearr_25355 = state_25345;
(statearr_25355[(9)] = inst_25338);

return statearr_25355;
})();
var statearr_25356_25399 = state_25345__$1;
(statearr_25356_25399[(2)] = null);

(statearr_25356_25399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25346 === (13))){
var inst_25300 = (state_25345[(10)]);
var inst_25302 = cljs.core.chunked_seq_QMARK_.call(null,inst_25300);
var state_25345__$1 = state_25345;
if(inst_25302){
var statearr_25357_25400 = state_25345__$1;
(statearr_25357_25400[(1)] = (16));

} else {
var statearr_25358_25401 = state_25345__$1;
(statearr_25358_25401[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25346 === (22))){
var inst_25330 = (state_25345[(2)]);
var state_25345__$1 = state_25345;
if(cljs.core.truth_(inst_25330)){
var statearr_25359_25402 = state_25345__$1;
(statearr_25359_25402[(1)] = (23));

} else {
var statearr_25360_25403 = state_25345__$1;
(statearr_25360_25403[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25346 === (6))){
var inst_25324 = (state_25345[(7)]);
var inst_25276 = (state_25345[(8)]);
var inst_25326 = (state_25345[(11)]);
var inst_25324__$1 = topic_fn.call(null,inst_25276);
var inst_25325 = cljs.core.deref.call(null,mults);
var inst_25326__$1 = cljs.core.get.call(null,inst_25325,inst_25324__$1);
var state_25345__$1 = (function (){var statearr_25361 = state_25345;
(statearr_25361[(7)] = inst_25324__$1);

(statearr_25361[(11)] = inst_25326__$1);

return statearr_25361;
})();
if(cljs.core.truth_(inst_25326__$1)){
var statearr_25362_25404 = state_25345__$1;
(statearr_25362_25404[(1)] = (19));

} else {
var statearr_25363_25405 = state_25345__$1;
(statearr_25363_25405[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25346 === (25))){
var inst_25335 = (state_25345[(2)]);
var state_25345__$1 = state_25345;
var statearr_25364_25406 = state_25345__$1;
(statearr_25364_25406[(2)] = inst_25335);

(statearr_25364_25406[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25346 === (17))){
var inst_25300 = (state_25345[(10)]);
var inst_25309 = cljs.core.first.call(null,inst_25300);
var inst_25310 = cljs.core.async.muxch_STAR_.call(null,inst_25309);
var inst_25311 = cljs.core.async.close_BANG_.call(null,inst_25310);
var inst_25312 = cljs.core.next.call(null,inst_25300);
var inst_25286 = inst_25312;
var inst_25287 = null;
var inst_25288 = (0);
var inst_25289 = (0);
var state_25345__$1 = (function (){var statearr_25365 = state_25345;
(statearr_25365[(12)] = inst_25286);

(statearr_25365[(13)] = inst_25311);

(statearr_25365[(14)] = inst_25288);

(statearr_25365[(15)] = inst_25289);

(statearr_25365[(16)] = inst_25287);

return statearr_25365;
})();
var statearr_25366_25407 = state_25345__$1;
(statearr_25366_25407[(2)] = null);

(statearr_25366_25407[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25346 === (3))){
var inst_25343 = (state_25345[(2)]);
var state_25345__$1 = state_25345;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25345__$1,inst_25343);
} else {
if((state_val_25346 === (12))){
var inst_25320 = (state_25345[(2)]);
var state_25345__$1 = state_25345;
var statearr_25367_25408 = state_25345__$1;
(statearr_25367_25408[(2)] = inst_25320);

(statearr_25367_25408[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25346 === (2))){
var state_25345__$1 = state_25345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25345__$1,(4),ch);
} else {
if((state_val_25346 === (23))){
var state_25345__$1 = state_25345;
var statearr_25368_25409 = state_25345__$1;
(statearr_25368_25409[(2)] = null);

(statearr_25368_25409[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25346 === (19))){
var inst_25276 = (state_25345[(8)]);
var inst_25326 = (state_25345[(11)]);
var inst_25328 = cljs.core.async.muxch_STAR_.call(null,inst_25326);
var state_25345__$1 = state_25345;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25345__$1,(22),inst_25328,inst_25276);
} else {
if((state_val_25346 === (11))){
var inst_25286 = (state_25345[(12)]);
var inst_25300 = (state_25345[(10)]);
var inst_25300__$1 = cljs.core.seq.call(null,inst_25286);
var state_25345__$1 = (function (){var statearr_25369 = state_25345;
(statearr_25369[(10)] = inst_25300__$1);

return statearr_25369;
})();
if(inst_25300__$1){
var statearr_25370_25410 = state_25345__$1;
(statearr_25370_25410[(1)] = (13));

} else {
var statearr_25371_25411 = state_25345__$1;
(statearr_25371_25411[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25346 === (9))){
var inst_25322 = (state_25345[(2)]);
var state_25345__$1 = state_25345;
var statearr_25372_25412 = state_25345__$1;
(statearr_25372_25412[(2)] = inst_25322);

(statearr_25372_25412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25346 === (5))){
var inst_25283 = cljs.core.deref.call(null,mults);
var inst_25284 = cljs.core.vals.call(null,inst_25283);
var inst_25285 = cljs.core.seq.call(null,inst_25284);
var inst_25286 = inst_25285;
var inst_25287 = null;
var inst_25288 = (0);
var inst_25289 = (0);
var state_25345__$1 = (function (){var statearr_25373 = state_25345;
(statearr_25373[(12)] = inst_25286);

(statearr_25373[(14)] = inst_25288);

(statearr_25373[(15)] = inst_25289);

(statearr_25373[(16)] = inst_25287);

return statearr_25373;
})();
var statearr_25374_25413 = state_25345__$1;
(statearr_25374_25413[(2)] = null);

(statearr_25374_25413[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25346 === (14))){
var state_25345__$1 = state_25345;
var statearr_25378_25414 = state_25345__$1;
(statearr_25378_25414[(2)] = null);

(statearr_25378_25414[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25346 === (16))){
var inst_25300 = (state_25345[(10)]);
var inst_25304 = cljs.core.chunk_first.call(null,inst_25300);
var inst_25305 = cljs.core.chunk_rest.call(null,inst_25300);
var inst_25306 = cljs.core.count.call(null,inst_25304);
var inst_25286 = inst_25305;
var inst_25287 = inst_25304;
var inst_25288 = inst_25306;
var inst_25289 = (0);
var state_25345__$1 = (function (){var statearr_25379 = state_25345;
(statearr_25379[(12)] = inst_25286);

(statearr_25379[(14)] = inst_25288);

(statearr_25379[(15)] = inst_25289);

(statearr_25379[(16)] = inst_25287);

return statearr_25379;
})();
var statearr_25380_25415 = state_25345__$1;
(statearr_25380_25415[(2)] = null);

(statearr_25380_25415[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25346 === (10))){
var inst_25286 = (state_25345[(12)]);
var inst_25288 = (state_25345[(14)]);
var inst_25289 = (state_25345[(15)]);
var inst_25287 = (state_25345[(16)]);
var inst_25294 = cljs.core._nth.call(null,inst_25287,inst_25289);
var inst_25295 = cljs.core.async.muxch_STAR_.call(null,inst_25294);
var inst_25296 = cljs.core.async.close_BANG_.call(null,inst_25295);
var inst_25297 = (inst_25289 + (1));
var tmp25375 = inst_25286;
var tmp25376 = inst_25288;
var tmp25377 = inst_25287;
var inst_25286__$1 = tmp25375;
var inst_25287__$1 = tmp25377;
var inst_25288__$1 = tmp25376;
var inst_25289__$1 = inst_25297;
var state_25345__$1 = (function (){var statearr_25381 = state_25345;
(statearr_25381[(12)] = inst_25286__$1);

(statearr_25381[(17)] = inst_25296);

(statearr_25381[(14)] = inst_25288__$1);

(statearr_25381[(15)] = inst_25289__$1);

(statearr_25381[(16)] = inst_25287__$1);

return statearr_25381;
})();
var statearr_25382_25416 = state_25345__$1;
(statearr_25382_25416[(2)] = null);

(statearr_25382_25416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25346 === (18))){
var inst_25315 = (state_25345[(2)]);
var state_25345__$1 = state_25345;
var statearr_25383_25417 = state_25345__$1;
(statearr_25383_25417[(2)] = inst_25315);

(statearr_25383_25417[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25346 === (8))){
var inst_25288 = (state_25345[(14)]);
var inst_25289 = (state_25345[(15)]);
var inst_25291 = (inst_25289 < inst_25288);
var inst_25292 = inst_25291;
var state_25345__$1 = state_25345;
if(cljs.core.truth_(inst_25292)){
var statearr_25384_25418 = state_25345__$1;
(statearr_25384_25418[(1)] = (10));

} else {
var statearr_25385_25419 = state_25345__$1;
(statearr_25385_25419[(1)] = (11));

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
});})(c__24184__auto___25391,mults,ensure_mult,p))
;
return ((function (switch__24096__auto__,c__24184__auto___25391,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24097__auto__ = null;
var cljs$core$async$state_machine__24097__auto____0 = (function (){
var statearr_25386 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25386[(0)] = cljs$core$async$state_machine__24097__auto__);

(statearr_25386[(1)] = (1));

return statearr_25386;
});
var cljs$core$async$state_machine__24097__auto____1 = (function (state_25345){
while(true){
var ret_value__24098__auto__ = (function (){try{while(true){
var result__24099__auto__ = switch__24096__auto__.call(null,state_25345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24099__auto__;
}
break;
}
}catch (e25387){if((e25387 instanceof Object)){
var ex__24100__auto__ = e25387;
var statearr_25388_25420 = state_25345;
(statearr_25388_25420[(5)] = ex__24100__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25421 = state_25345;
state_25345 = G__25421;
continue;
} else {
return ret_value__24098__auto__;
}
break;
}
});
cljs$core$async$state_machine__24097__auto__ = function(state_25345){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24097__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24097__auto____1.call(this,state_25345);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24097__auto____0;
cljs$core$async$state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24097__auto____1;
return cljs$core$async$state_machine__24097__auto__;
})()
;})(switch__24096__auto__,c__24184__auto___25391,mults,ensure_mult,p))
})();
var state__24186__auto__ = (function (){var statearr_25389 = f__24185__auto__.call(null);
(statearr_25389[(6)] = c__24184__auto___25391);

return statearr_25389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24186__auto__);
});})(c__24184__auto___25391,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__25423 = arguments.length;
switch (G__25423) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__25426 = arguments.length;
switch (G__25426) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__25429 = arguments.length;
switch (G__25429) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__24184__auto___25496 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24184__auto___25496,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24185__auto__ = (function (){var switch__24096__auto__ = ((function (c__24184__auto___25496,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25468){
var state_val_25469 = (state_25468[(1)]);
if((state_val_25469 === (7))){
var state_25468__$1 = state_25468;
var statearr_25470_25497 = state_25468__$1;
(statearr_25470_25497[(2)] = null);

(statearr_25470_25497[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25469 === (1))){
var state_25468__$1 = state_25468;
var statearr_25471_25498 = state_25468__$1;
(statearr_25471_25498[(2)] = null);

(statearr_25471_25498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25469 === (4))){
var inst_25432 = (state_25468[(7)]);
var inst_25434 = (inst_25432 < cnt);
var state_25468__$1 = state_25468;
if(cljs.core.truth_(inst_25434)){
var statearr_25472_25499 = state_25468__$1;
(statearr_25472_25499[(1)] = (6));

} else {
var statearr_25473_25500 = state_25468__$1;
(statearr_25473_25500[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25469 === (15))){
var inst_25464 = (state_25468[(2)]);
var state_25468__$1 = state_25468;
var statearr_25474_25501 = state_25468__$1;
(statearr_25474_25501[(2)] = inst_25464);

(statearr_25474_25501[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25469 === (13))){
var inst_25457 = cljs.core.async.close_BANG_.call(null,out);
var state_25468__$1 = state_25468;
var statearr_25475_25502 = state_25468__$1;
(statearr_25475_25502[(2)] = inst_25457);

(statearr_25475_25502[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25469 === (6))){
var state_25468__$1 = state_25468;
var statearr_25476_25503 = state_25468__$1;
(statearr_25476_25503[(2)] = null);

(statearr_25476_25503[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25469 === (3))){
var inst_25466 = (state_25468[(2)]);
var state_25468__$1 = state_25468;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25468__$1,inst_25466);
} else {
if((state_val_25469 === (12))){
var inst_25454 = (state_25468[(8)]);
var inst_25454__$1 = (state_25468[(2)]);
var inst_25455 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25454__$1);
var state_25468__$1 = (function (){var statearr_25477 = state_25468;
(statearr_25477[(8)] = inst_25454__$1);

return statearr_25477;
})();
if(cljs.core.truth_(inst_25455)){
var statearr_25478_25504 = state_25468__$1;
(statearr_25478_25504[(1)] = (13));

} else {
var statearr_25479_25505 = state_25468__$1;
(statearr_25479_25505[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25469 === (2))){
var inst_25431 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25432 = (0);
var state_25468__$1 = (function (){var statearr_25480 = state_25468;
(statearr_25480[(7)] = inst_25432);

(statearr_25480[(9)] = inst_25431);

return statearr_25480;
})();
var statearr_25481_25506 = state_25468__$1;
(statearr_25481_25506[(2)] = null);

(statearr_25481_25506[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25469 === (11))){
var inst_25432 = (state_25468[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25468,(10),Object,null,(9));
var inst_25441 = chs__$1.call(null,inst_25432);
var inst_25442 = done.call(null,inst_25432);
var inst_25443 = cljs.core.async.take_BANG_.call(null,inst_25441,inst_25442);
var state_25468__$1 = state_25468;
var statearr_25482_25507 = state_25468__$1;
(statearr_25482_25507[(2)] = inst_25443);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25468__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25469 === (9))){
var inst_25432 = (state_25468[(7)]);
var inst_25445 = (state_25468[(2)]);
var inst_25446 = (inst_25432 + (1));
var inst_25432__$1 = inst_25446;
var state_25468__$1 = (function (){var statearr_25483 = state_25468;
(statearr_25483[(7)] = inst_25432__$1);

(statearr_25483[(10)] = inst_25445);

return statearr_25483;
})();
var statearr_25484_25508 = state_25468__$1;
(statearr_25484_25508[(2)] = null);

(statearr_25484_25508[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25469 === (5))){
var inst_25452 = (state_25468[(2)]);
var state_25468__$1 = (function (){var statearr_25485 = state_25468;
(statearr_25485[(11)] = inst_25452);

return statearr_25485;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25468__$1,(12),dchan);
} else {
if((state_val_25469 === (14))){
var inst_25454 = (state_25468[(8)]);
var inst_25459 = cljs.core.apply.call(null,f,inst_25454);
var state_25468__$1 = state_25468;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25468__$1,(16),out,inst_25459);
} else {
if((state_val_25469 === (16))){
var inst_25461 = (state_25468[(2)]);
var state_25468__$1 = (function (){var statearr_25486 = state_25468;
(statearr_25486[(12)] = inst_25461);

return statearr_25486;
})();
var statearr_25487_25509 = state_25468__$1;
(statearr_25487_25509[(2)] = null);

(statearr_25487_25509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25469 === (10))){
var inst_25436 = (state_25468[(2)]);
var inst_25437 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25468__$1 = (function (){var statearr_25488 = state_25468;
(statearr_25488[(13)] = inst_25436);

return statearr_25488;
})();
var statearr_25489_25510 = state_25468__$1;
(statearr_25489_25510[(2)] = inst_25437);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25468__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25469 === (8))){
var inst_25450 = (state_25468[(2)]);
var state_25468__$1 = state_25468;
var statearr_25490_25511 = state_25468__$1;
(statearr_25490_25511[(2)] = inst_25450);

(statearr_25490_25511[(1)] = (5));


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
});})(c__24184__auto___25496,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24096__auto__,c__24184__auto___25496,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24097__auto__ = null;
var cljs$core$async$state_machine__24097__auto____0 = (function (){
var statearr_25491 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25491[(0)] = cljs$core$async$state_machine__24097__auto__);

(statearr_25491[(1)] = (1));

return statearr_25491;
});
var cljs$core$async$state_machine__24097__auto____1 = (function (state_25468){
while(true){
var ret_value__24098__auto__ = (function (){try{while(true){
var result__24099__auto__ = switch__24096__auto__.call(null,state_25468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24099__auto__;
}
break;
}
}catch (e25492){if((e25492 instanceof Object)){
var ex__24100__auto__ = e25492;
var statearr_25493_25512 = state_25468;
(statearr_25493_25512[(5)] = ex__24100__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25513 = state_25468;
state_25468 = G__25513;
continue;
} else {
return ret_value__24098__auto__;
}
break;
}
});
cljs$core$async$state_machine__24097__auto__ = function(state_25468){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24097__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24097__auto____1.call(this,state_25468);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24097__auto____0;
cljs$core$async$state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24097__auto____1;
return cljs$core$async$state_machine__24097__auto__;
})()
;})(switch__24096__auto__,c__24184__auto___25496,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24186__auto__ = (function (){var statearr_25494 = f__24185__auto__.call(null);
(statearr_25494[(6)] = c__24184__auto___25496);

return statearr_25494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24186__auto__);
});})(c__24184__auto___25496,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__25516 = arguments.length;
switch (G__25516) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24184__auto___25570 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24184__auto___25570,out){
return (function (){
var f__24185__auto__ = (function (){var switch__24096__auto__ = ((function (c__24184__auto___25570,out){
return (function (state_25548){
var state_val_25549 = (state_25548[(1)]);
if((state_val_25549 === (7))){
var inst_25528 = (state_25548[(7)]);
var inst_25527 = (state_25548[(8)]);
var inst_25527__$1 = (state_25548[(2)]);
var inst_25528__$1 = cljs.core.nth.call(null,inst_25527__$1,(0),null);
var inst_25529 = cljs.core.nth.call(null,inst_25527__$1,(1),null);
var inst_25530 = (inst_25528__$1 == null);
var state_25548__$1 = (function (){var statearr_25550 = state_25548;
(statearr_25550[(7)] = inst_25528__$1);

(statearr_25550[(9)] = inst_25529);

(statearr_25550[(8)] = inst_25527__$1);

return statearr_25550;
})();
if(cljs.core.truth_(inst_25530)){
var statearr_25551_25571 = state_25548__$1;
(statearr_25551_25571[(1)] = (8));

} else {
var statearr_25552_25572 = state_25548__$1;
(statearr_25552_25572[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25549 === (1))){
var inst_25517 = cljs.core.vec.call(null,chs);
var inst_25518 = inst_25517;
var state_25548__$1 = (function (){var statearr_25553 = state_25548;
(statearr_25553[(10)] = inst_25518);

return statearr_25553;
})();
var statearr_25554_25573 = state_25548__$1;
(statearr_25554_25573[(2)] = null);

(statearr_25554_25573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25549 === (4))){
var inst_25518 = (state_25548[(10)]);
var state_25548__$1 = state_25548;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25548__$1,(7),inst_25518);
} else {
if((state_val_25549 === (6))){
var inst_25544 = (state_25548[(2)]);
var state_25548__$1 = state_25548;
var statearr_25555_25574 = state_25548__$1;
(statearr_25555_25574[(2)] = inst_25544);

(statearr_25555_25574[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25549 === (3))){
var inst_25546 = (state_25548[(2)]);
var state_25548__$1 = state_25548;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25548__$1,inst_25546);
} else {
if((state_val_25549 === (2))){
var inst_25518 = (state_25548[(10)]);
var inst_25520 = cljs.core.count.call(null,inst_25518);
var inst_25521 = (inst_25520 > (0));
var state_25548__$1 = state_25548;
if(cljs.core.truth_(inst_25521)){
var statearr_25557_25575 = state_25548__$1;
(statearr_25557_25575[(1)] = (4));

} else {
var statearr_25558_25576 = state_25548__$1;
(statearr_25558_25576[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25549 === (11))){
var inst_25518 = (state_25548[(10)]);
var inst_25537 = (state_25548[(2)]);
var tmp25556 = inst_25518;
var inst_25518__$1 = tmp25556;
var state_25548__$1 = (function (){var statearr_25559 = state_25548;
(statearr_25559[(11)] = inst_25537);

(statearr_25559[(10)] = inst_25518__$1);

return statearr_25559;
})();
var statearr_25560_25577 = state_25548__$1;
(statearr_25560_25577[(2)] = null);

(statearr_25560_25577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25549 === (9))){
var inst_25528 = (state_25548[(7)]);
var state_25548__$1 = state_25548;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25548__$1,(11),out,inst_25528);
} else {
if((state_val_25549 === (5))){
var inst_25542 = cljs.core.async.close_BANG_.call(null,out);
var state_25548__$1 = state_25548;
var statearr_25561_25578 = state_25548__$1;
(statearr_25561_25578[(2)] = inst_25542);

(statearr_25561_25578[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25549 === (10))){
var inst_25540 = (state_25548[(2)]);
var state_25548__$1 = state_25548;
var statearr_25562_25579 = state_25548__$1;
(statearr_25562_25579[(2)] = inst_25540);

(statearr_25562_25579[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25549 === (8))){
var inst_25518 = (state_25548[(10)]);
var inst_25528 = (state_25548[(7)]);
var inst_25529 = (state_25548[(9)]);
var inst_25527 = (state_25548[(8)]);
var inst_25532 = (function (){var cs = inst_25518;
var vec__25523 = inst_25527;
var v = inst_25528;
var c = inst_25529;
return ((function (cs,vec__25523,v,c,inst_25518,inst_25528,inst_25529,inst_25527,state_val_25549,c__24184__auto___25570,out){
return (function (p1__25514_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25514_SHARP_);
});
;})(cs,vec__25523,v,c,inst_25518,inst_25528,inst_25529,inst_25527,state_val_25549,c__24184__auto___25570,out))
})();
var inst_25533 = cljs.core.filterv.call(null,inst_25532,inst_25518);
var inst_25518__$1 = inst_25533;
var state_25548__$1 = (function (){var statearr_25563 = state_25548;
(statearr_25563[(10)] = inst_25518__$1);

return statearr_25563;
})();
var statearr_25564_25580 = state_25548__$1;
(statearr_25564_25580[(2)] = null);

(statearr_25564_25580[(1)] = (2));


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
});})(c__24184__auto___25570,out))
;
return ((function (switch__24096__auto__,c__24184__auto___25570,out){
return (function() {
var cljs$core$async$state_machine__24097__auto__ = null;
var cljs$core$async$state_machine__24097__auto____0 = (function (){
var statearr_25565 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25565[(0)] = cljs$core$async$state_machine__24097__auto__);

(statearr_25565[(1)] = (1));

return statearr_25565;
});
var cljs$core$async$state_machine__24097__auto____1 = (function (state_25548){
while(true){
var ret_value__24098__auto__ = (function (){try{while(true){
var result__24099__auto__ = switch__24096__auto__.call(null,state_25548);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24099__auto__;
}
break;
}
}catch (e25566){if((e25566 instanceof Object)){
var ex__24100__auto__ = e25566;
var statearr_25567_25581 = state_25548;
(statearr_25567_25581[(5)] = ex__24100__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25566;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25582 = state_25548;
state_25548 = G__25582;
continue;
} else {
return ret_value__24098__auto__;
}
break;
}
});
cljs$core$async$state_machine__24097__auto__ = function(state_25548){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24097__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24097__auto____1.call(this,state_25548);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24097__auto____0;
cljs$core$async$state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24097__auto____1;
return cljs$core$async$state_machine__24097__auto__;
})()
;})(switch__24096__auto__,c__24184__auto___25570,out))
})();
var state__24186__auto__ = (function (){var statearr_25568 = f__24185__auto__.call(null);
(statearr_25568[(6)] = c__24184__auto___25570);

return statearr_25568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24186__auto__);
});})(c__24184__auto___25570,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__25584 = arguments.length;
switch (G__25584) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24184__auto___25629 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24184__auto___25629,out){
return (function (){
var f__24185__auto__ = (function (){var switch__24096__auto__ = ((function (c__24184__auto___25629,out){
return (function (state_25608){
var state_val_25609 = (state_25608[(1)]);
if((state_val_25609 === (7))){
var inst_25590 = (state_25608[(7)]);
var inst_25590__$1 = (state_25608[(2)]);
var inst_25591 = (inst_25590__$1 == null);
var inst_25592 = cljs.core.not.call(null,inst_25591);
var state_25608__$1 = (function (){var statearr_25610 = state_25608;
(statearr_25610[(7)] = inst_25590__$1);

return statearr_25610;
})();
if(inst_25592){
var statearr_25611_25630 = state_25608__$1;
(statearr_25611_25630[(1)] = (8));

} else {
var statearr_25612_25631 = state_25608__$1;
(statearr_25612_25631[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25609 === (1))){
var inst_25585 = (0);
var state_25608__$1 = (function (){var statearr_25613 = state_25608;
(statearr_25613[(8)] = inst_25585);

return statearr_25613;
})();
var statearr_25614_25632 = state_25608__$1;
(statearr_25614_25632[(2)] = null);

(statearr_25614_25632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25609 === (4))){
var state_25608__$1 = state_25608;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25608__$1,(7),ch);
} else {
if((state_val_25609 === (6))){
var inst_25603 = (state_25608[(2)]);
var state_25608__$1 = state_25608;
var statearr_25615_25633 = state_25608__$1;
(statearr_25615_25633[(2)] = inst_25603);

(statearr_25615_25633[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25609 === (3))){
var inst_25605 = (state_25608[(2)]);
var inst_25606 = cljs.core.async.close_BANG_.call(null,out);
var state_25608__$1 = (function (){var statearr_25616 = state_25608;
(statearr_25616[(9)] = inst_25605);

return statearr_25616;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25608__$1,inst_25606);
} else {
if((state_val_25609 === (2))){
var inst_25585 = (state_25608[(8)]);
var inst_25587 = (inst_25585 < n);
var state_25608__$1 = state_25608;
if(cljs.core.truth_(inst_25587)){
var statearr_25617_25634 = state_25608__$1;
(statearr_25617_25634[(1)] = (4));

} else {
var statearr_25618_25635 = state_25608__$1;
(statearr_25618_25635[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25609 === (11))){
var inst_25585 = (state_25608[(8)]);
var inst_25595 = (state_25608[(2)]);
var inst_25596 = (inst_25585 + (1));
var inst_25585__$1 = inst_25596;
var state_25608__$1 = (function (){var statearr_25619 = state_25608;
(statearr_25619[(10)] = inst_25595);

(statearr_25619[(8)] = inst_25585__$1);

return statearr_25619;
})();
var statearr_25620_25636 = state_25608__$1;
(statearr_25620_25636[(2)] = null);

(statearr_25620_25636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25609 === (9))){
var state_25608__$1 = state_25608;
var statearr_25621_25637 = state_25608__$1;
(statearr_25621_25637[(2)] = null);

(statearr_25621_25637[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25609 === (5))){
var state_25608__$1 = state_25608;
var statearr_25622_25638 = state_25608__$1;
(statearr_25622_25638[(2)] = null);

(statearr_25622_25638[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25609 === (10))){
var inst_25600 = (state_25608[(2)]);
var state_25608__$1 = state_25608;
var statearr_25623_25639 = state_25608__$1;
(statearr_25623_25639[(2)] = inst_25600);

(statearr_25623_25639[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25609 === (8))){
var inst_25590 = (state_25608[(7)]);
var state_25608__$1 = state_25608;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25608__$1,(11),out,inst_25590);
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
});})(c__24184__auto___25629,out))
;
return ((function (switch__24096__auto__,c__24184__auto___25629,out){
return (function() {
var cljs$core$async$state_machine__24097__auto__ = null;
var cljs$core$async$state_machine__24097__auto____0 = (function (){
var statearr_25624 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25624[(0)] = cljs$core$async$state_machine__24097__auto__);

(statearr_25624[(1)] = (1));

return statearr_25624;
});
var cljs$core$async$state_machine__24097__auto____1 = (function (state_25608){
while(true){
var ret_value__24098__auto__ = (function (){try{while(true){
var result__24099__auto__ = switch__24096__auto__.call(null,state_25608);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24099__auto__;
}
break;
}
}catch (e25625){if((e25625 instanceof Object)){
var ex__24100__auto__ = e25625;
var statearr_25626_25640 = state_25608;
(statearr_25626_25640[(5)] = ex__24100__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25608);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25625;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25641 = state_25608;
state_25608 = G__25641;
continue;
} else {
return ret_value__24098__auto__;
}
break;
}
});
cljs$core$async$state_machine__24097__auto__ = function(state_25608){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24097__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24097__auto____1.call(this,state_25608);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24097__auto____0;
cljs$core$async$state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24097__auto____1;
return cljs$core$async$state_machine__24097__auto__;
})()
;})(switch__24096__auto__,c__24184__auto___25629,out))
})();
var state__24186__auto__ = (function (){var statearr_25627 = f__24185__auto__.call(null);
(statearr_25627[(6)] = c__24184__auto___25629);

return statearr_25627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24186__auto__);
});})(c__24184__auto___25629,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25643 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25643 = (function (f,ch,meta25644){
this.f = f;
this.ch = ch;
this.meta25644 = meta25644;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25643.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25645,meta25644__$1){
var self__ = this;
var _25645__$1 = this;
return (new cljs.core.async.t_cljs$core$async25643(self__.f,self__.ch,meta25644__$1));
});

cljs.core.async.t_cljs$core$async25643.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25645){
var self__ = this;
var _25645__$1 = this;
return self__.meta25644;
});

cljs.core.async.t_cljs$core$async25643.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25643.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25643.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25643.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25643.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async25646 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25646 = (function (f,ch,meta25644,_,fn1,meta25647){
this.f = f;
this.ch = ch;
this.meta25644 = meta25644;
this._ = _;
this.fn1 = fn1;
this.meta25647 = meta25647;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25648,meta25647__$1){
var self__ = this;
var _25648__$1 = this;
return (new cljs.core.async.t_cljs$core$async25646(self__.f,self__.ch,self__.meta25644,self__._,self__.fn1,meta25647__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25646.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25648){
var self__ = this;
var _25648__$1 = this;
return self__.meta25647;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25646.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25646.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25646.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25646.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25642_SHARP_){
return f1.call(null,(((p1__25642_SHARP_ == null))?null:self__.f.call(null,p1__25642_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25646.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25644","meta25644",629045800,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25643","cljs.core.async/t_cljs$core$async25643",-203190214,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25647","meta25647",1498630403,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25646.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25646.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25646";

cljs.core.async.t_cljs$core$async25646.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async25646");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25646.
 */
cljs.core.async.__GT_t_cljs$core$async25646 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25646(f__$1,ch__$1,meta25644__$1,___$2,fn1__$1,meta25647){
return (new cljs.core.async.t_cljs$core$async25646(f__$1,ch__$1,meta25644__$1,___$2,fn1__$1,meta25647));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25646(self__.f,self__.ch,self__.meta25644,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async25643.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25643.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25643.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25644","meta25644",629045800,null)], null);
});

cljs.core.async.t_cljs$core$async25643.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25643.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25643";

cljs.core.async.t_cljs$core$async25643.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async25643");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25643.
 */
cljs.core.async.__GT_t_cljs$core$async25643 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25643(f__$1,ch__$1,meta25644){
return (new cljs.core.async.t_cljs$core$async25643(f__$1,ch__$1,meta25644));
});

}

return (new cljs.core.async.t_cljs$core$async25643(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25649 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25649 = (function (f,ch,meta25650){
this.f = f;
this.ch = ch;
this.meta25650 = meta25650;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25649.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25651,meta25650__$1){
var self__ = this;
var _25651__$1 = this;
return (new cljs.core.async.t_cljs$core$async25649(self__.f,self__.ch,meta25650__$1));
});

cljs.core.async.t_cljs$core$async25649.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25651){
var self__ = this;
var _25651__$1 = this;
return self__.meta25650;
});

cljs.core.async.t_cljs$core$async25649.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25649.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25649.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25649.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25649.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25649.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25649.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25650","meta25650",-873139626,null)], null);
});

cljs.core.async.t_cljs$core$async25649.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25649.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25649";

cljs.core.async.t_cljs$core$async25649.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async25649");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25649.
 */
cljs.core.async.__GT_t_cljs$core$async25649 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25649(f__$1,ch__$1,meta25650){
return (new cljs.core.async.t_cljs$core$async25649(f__$1,ch__$1,meta25650));
});

}

return (new cljs.core.async.t_cljs$core$async25649(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async25652 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25652 = (function (p,ch,meta25653){
this.p = p;
this.ch = ch;
this.meta25653 = meta25653;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25652.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25654,meta25653__$1){
var self__ = this;
var _25654__$1 = this;
return (new cljs.core.async.t_cljs$core$async25652(self__.p,self__.ch,meta25653__$1));
});

cljs.core.async.t_cljs$core$async25652.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25654){
var self__ = this;
var _25654__$1 = this;
return self__.meta25653;
});

cljs.core.async.t_cljs$core$async25652.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25652.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25652.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25652.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25652.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25652.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25652.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25652.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25653","meta25653",323098406,null)], null);
});

cljs.core.async.t_cljs$core$async25652.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25652.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25652";

cljs.core.async.t_cljs$core$async25652.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async25652");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25652.
 */
cljs.core.async.__GT_t_cljs$core$async25652 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25652(p__$1,ch__$1,meta25653){
return (new cljs.core.async.t_cljs$core$async25652(p__$1,ch__$1,meta25653));
});

}

return (new cljs.core.async.t_cljs$core$async25652(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__25656 = arguments.length;
switch (G__25656) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24184__auto___25696 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24184__auto___25696,out){
return (function (){
var f__24185__auto__ = (function (){var switch__24096__auto__ = ((function (c__24184__auto___25696,out){
return (function (state_25677){
var state_val_25678 = (state_25677[(1)]);
if((state_val_25678 === (7))){
var inst_25673 = (state_25677[(2)]);
var state_25677__$1 = state_25677;
var statearr_25679_25697 = state_25677__$1;
(statearr_25679_25697[(2)] = inst_25673);

(statearr_25679_25697[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25678 === (1))){
var state_25677__$1 = state_25677;
var statearr_25680_25698 = state_25677__$1;
(statearr_25680_25698[(2)] = null);

(statearr_25680_25698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25678 === (4))){
var inst_25659 = (state_25677[(7)]);
var inst_25659__$1 = (state_25677[(2)]);
var inst_25660 = (inst_25659__$1 == null);
var state_25677__$1 = (function (){var statearr_25681 = state_25677;
(statearr_25681[(7)] = inst_25659__$1);

return statearr_25681;
})();
if(cljs.core.truth_(inst_25660)){
var statearr_25682_25699 = state_25677__$1;
(statearr_25682_25699[(1)] = (5));

} else {
var statearr_25683_25700 = state_25677__$1;
(statearr_25683_25700[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25678 === (6))){
var inst_25659 = (state_25677[(7)]);
var inst_25664 = p.call(null,inst_25659);
var state_25677__$1 = state_25677;
if(cljs.core.truth_(inst_25664)){
var statearr_25684_25701 = state_25677__$1;
(statearr_25684_25701[(1)] = (8));

} else {
var statearr_25685_25702 = state_25677__$1;
(statearr_25685_25702[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25678 === (3))){
var inst_25675 = (state_25677[(2)]);
var state_25677__$1 = state_25677;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25677__$1,inst_25675);
} else {
if((state_val_25678 === (2))){
var state_25677__$1 = state_25677;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25677__$1,(4),ch);
} else {
if((state_val_25678 === (11))){
var inst_25667 = (state_25677[(2)]);
var state_25677__$1 = state_25677;
var statearr_25686_25703 = state_25677__$1;
(statearr_25686_25703[(2)] = inst_25667);

(statearr_25686_25703[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25678 === (9))){
var state_25677__$1 = state_25677;
var statearr_25687_25704 = state_25677__$1;
(statearr_25687_25704[(2)] = null);

(statearr_25687_25704[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25678 === (5))){
var inst_25662 = cljs.core.async.close_BANG_.call(null,out);
var state_25677__$1 = state_25677;
var statearr_25688_25705 = state_25677__$1;
(statearr_25688_25705[(2)] = inst_25662);

(statearr_25688_25705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25678 === (10))){
var inst_25670 = (state_25677[(2)]);
var state_25677__$1 = (function (){var statearr_25689 = state_25677;
(statearr_25689[(8)] = inst_25670);

return statearr_25689;
})();
var statearr_25690_25706 = state_25677__$1;
(statearr_25690_25706[(2)] = null);

(statearr_25690_25706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25678 === (8))){
var inst_25659 = (state_25677[(7)]);
var state_25677__$1 = state_25677;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25677__$1,(11),out,inst_25659);
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
});})(c__24184__auto___25696,out))
;
return ((function (switch__24096__auto__,c__24184__auto___25696,out){
return (function() {
var cljs$core$async$state_machine__24097__auto__ = null;
var cljs$core$async$state_machine__24097__auto____0 = (function (){
var statearr_25691 = [null,null,null,null,null,null,null,null,null];
(statearr_25691[(0)] = cljs$core$async$state_machine__24097__auto__);

(statearr_25691[(1)] = (1));

return statearr_25691;
});
var cljs$core$async$state_machine__24097__auto____1 = (function (state_25677){
while(true){
var ret_value__24098__auto__ = (function (){try{while(true){
var result__24099__auto__ = switch__24096__auto__.call(null,state_25677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24099__auto__;
}
break;
}
}catch (e25692){if((e25692 instanceof Object)){
var ex__24100__auto__ = e25692;
var statearr_25693_25707 = state_25677;
(statearr_25693_25707[(5)] = ex__24100__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25692;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25708 = state_25677;
state_25677 = G__25708;
continue;
} else {
return ret_value__24098__auto__;
}
break;
}
});
cljs$core$async$state_machine__24097__auto__ = function(state_25677){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24097__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24097__auto____1.call(this,state_25677);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24097__auto____0;
cljs$core$async$state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24097__auto____1;
return cljs$core$async$state_machine__24097__auto__;
})()
;})(switch__24096__auto__,c__24184__auto___25696,out))
})();
var state__24186__auto__ = (function (){var statearr_25694 = f__24185__auto__.call(null);
(statearr_25694[(6)] = c__24184__auto___25696);

return statearr_25694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24186__auto__);
});})(c__24184__auto___25696,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__25710 = arguments.length;
switch (G__25710) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__24184__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24184__auto__){
return (function (){
var f__24185__auto__ = (function (){var switch__24096__auto__ = ((function (c__24184__auto__){
return (function (state_25773){
var state_val_25774 = (state_25773[(1)]);
if((state_val_25774 === (7))){
var inst_25769 = (state_25773[(2)]);
var state_25773__$1 = state_25773;
var statearr_25775_25813 = state_25773__$1;
(statearr_25775_25813[(2)] = inst_25769);

(statearr_25775_25813[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25774 === (20))){
var inst_25739 = (state_25773[(7)]);
var inst_25750 = (state_25773[(2)]);
var inst_25751 = cljs.core.next.call(null,inst_25739);
var inst_25725 = inst_25751;
var inst_25726 = null;
var inst_25727 = (0);
var inst_25728 = (0);
var state_25773__$1 = (function (){var statearr_25776 = state_25773;
(statearr_25776[(8)] = inst_25728);

(statearr_25776[(9)] = inst_25750);

(statearr_25776[(10)] = inst_25725);

(statearr_25776[(11)] = inst_25727);

(statearr_25776[(12)] = inst_25726);

return statearr_25776;
})();
var statearr_25777_25814 = state_25773__$1;
(statearr_25777_25814[(2)] = null);

(statearr_25777_25814[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25774 === (1))){
var state_25773__$1 = state_25773;
var statearr_25778_25815 = state_25773__$1;
(statearr_25778_25815[(2)] = null);

(statearr_25778_25815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25774 === (4))){
var inst_25714 = (state_25773[(13)]);
var inst_25714__$1 = (state_25773[(2)]);
var inst_25715 = (inst_25714__$1 == null);
var state_25773__$1 = (function (){var statearr_25779 = state_25773;
(statearr_25779[(13)] = inst_25714__$1);

return statearr_25779;
})();
if(cljs.core.truth_(inst_25715)){
var statearr_25780_25816 = state_25773__$1;
(statearr_25780_25816[(1)] = (5));

} else {
var statearr_25781_25817 = state_25773__$1;
(statearr_25781_25817[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25774 === (15))){
var state_25773__$1 = state_25773;
var statearr_25785_25818 = state_25773__$1;
(statearr_25785_25818[(2)] = null);

(statearr_25785_25818[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25774 === (21))){
var state_25773__$1 = state_25773;
var statearr_25786_25819 = state_25773__$1;
(statearr_25786_25819[(2)] = null);

(statearr_25786_25819[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25774 === (13))){
var inst_25728 = (state_25773[(8)]);
var inst_25725 = (state_25773[(10)]);
var inst_25727 = (state_25773[(11)]);
var inst_25726 = (state_25773[(12)]);
var inst_25735 = (state_25773[(2)]);
var inst_25736 = (inst_25728 + (1));
var tmp25782 = inst_25725;
var tmp25783 = inst_25727;
var tmp25784 = inst_25726;
var inst_25725__$1 = tmp25782;
var inst_25726__$1 = tmp25784;
var inst_25727__$1 = tmp25783;
var inst_25728__$1 = inst_25736;
var state_25773__$1 = (function (){var statearr_25787 = state_25773;
(statearr_25787[(8)] = inst_25728__$1);

(statearr_25787[(14)] = inst_25735);

(statearr_25787[(10)] = inst_25725__$1);

(statearr_25787[(11)] = inst_25727__$1);

(statearr_25787[(12)] = inst_25726__$1);

return statearr_25787;
})();
var statearr_25788_25820 = state_25773__$1;
(statearr_25788_25820[(2)] = null);

(statearr_25788_25820[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25774 === (22))){
var state_25773__$1 = state_25773;
var statearr_25789_25821 = state_25773__$1;
(statearr_25789_25821[(2)] = null);

(statearr_25789_25821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25774 === (6))){
var inst_25714 = (state_25773[(13)]);
var inst_25723 = f.call(null,inst_25714);
var inst_25724 = cljs.core.seq.call(null,inst_25723);
var inst_25725 = inst_25724;
var inst_25726 = null;
var inst_25727 = (0);
var inst_25728 = (0);
var state_25773__$1 = (function (){var statearr_25790 = state_25773;
(statearr_25790[(8)] = inst_25728);

(statearr_25790[(10)] = inst_25725);

(statearr_25790[(11)] = inst_25727);

(statearr_25790[(12)] = inst_25726);

return statearr_25790;
})();
var statearr_25791_25822 = state_25773__$1;
(statearr_25791_25822[(2)] = null);

(statearr_25791_25822[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25774 === (17))){
var inst_25739 = (state_25773[(7)]);
var inst_25743 = cljs.core.chunk_first.call(null,inst_25739);
var inst_25744 = cljs.core.chunk_rest.call(null,inst_25739);
var inst_25745 = cljs.core.count.call(null,inst_25743);
var inst_25725 = inst_25744;
var inst_25726 = inst_25743;
var inst_25727 = inst_25745;
var inst_25728 = (0);
var state_25773__$1 = (function (){var statearr_25792 = state_25773;
(statearr_25792[(8)] = inst_25728);

(statearr_25792[(10)] = inst_25725);

(statearr_25792[(11)] = inst_25727);

(statearr_25792[(12)] = inst_25726);

return statearr_25792;
})();
var statearr_25793_25823 = state_25773__$1;
(statearr_25793_25823[(2)] = null);

(statearr_25793_25823[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25774 === (3))){
var inst_25771 = (state_25773[(2)]);
var state_25773__$1 = state_25773;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25773__$1,inst_25771);
} else {
if((state_val_25774 === (12))){
var inst_25759 = (state_25773[(2)]);
var state_25773__$1 = state_25773;
var statearr_25794_25824 = state_25773__$1;
(statearr_25794_25824[(2)] = inst_25759);

(statearr_25794_25824[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25774 === (2))){
var state_25773__$1 = state_25773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25773__$1,(4),in$);
} else {
if((state_val_25774 === (23))){
var inst_25767 = (state_25773[(2)]);
var state_25773__$1 = state_25773;
var statearr_25795_25825 = state_25773__$1;
(statearr_25795_25825[(2)] = inst_25767);

(statearr_25795_25825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25774 === (19))){
var inst_25754 = (state_25773[(2)]);
var state_25773__$1 = state_25773;
var statearr_25796_25826 = state_25773__$1;
(statearr_25796_25826[(2)] = inst_25754);

(statearr_25796_25826[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25774 === (11))){
var inst_25725 = (state_25773[(10)]);
var inst_25739 = (state_25773[(7)]);
var inst_25739__$1 = cljs.core.seq.call(null,inst_25725);
var state_25773__$1 = (function (){var statearr_25797 = state_25773;
(statearr_25797[(7)] = inst_25739__$1);

return statearr_25797;
})();
if(inst_25739__$1){
var statearr_25798_25827 = state_25773__$1;
(statearr_25798_25827[(1)] = (14));

} else {
var statearr_25799_25828 = state_25773__$1;
(statearr_25799_25828[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25774 === (9))){
var inst_25761 = (state_25773[(2)]);
var inst_25762 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25773__$1 = (function (){var statearr_25800 = state_25773;
(statearr_25800[(15)] = inst_25761);

return statearr_25800;
})();
if(cljs.core.truth_(inst_25762)){
var statearr_25801_25829 = state_25773__$1;
(statearr_25801_25829[(1)] = (21));

} else {
var statearr_25802_25830 = state_25773__$1;
(statearr_25802_25830[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25774 === (5))){
var inst_25717 = cljs.core.async.close_BANG_.call(null,out);
var state_25773__$1 = state_25773;
var statearr_25803_25831 = state_25773__$1;
(statearr_25803_25831[(2)] = inst_25717);

(statearr_25803_25831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25774 === (14))){
var inst_25739 = (state_25773[(7)]);
var inst_25741 = cljs.core.chunked_seq_QMARK_.call(null,inst_25739);
var state_25773__$1 = state_25773;
if(inst_25741){
var statearr_25804_25832 = state_25773__$1;
(statearr_25804_25832[(1)] = (17));

} else {
var statearr_25805_25833 = state_25773__$1;
(statearr_25805_25833[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25774 === (16))){
var inst_25757 = (state_25773[(2)]);
var state_25773__$1 = state_25773;
var statearr_25806_25834 = state_25773__$1;
(statearr_25806_25834[(2)] = inst_25757);

(statearr_25806_25834[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25774 === (10))){
var inst_25728 = (state_25773[(8)]);
var inst_25726 = (state_25773[(12)]);
var inst_25733 = cljs.core._nth.call(null,inst_25726,inst_25728);
var state_25773__$1 = state_25773;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25773__$1,(13),out,inst_25733);
} else {
if((state_val_25774 === (18))){
var inst_25739 = (state_25773[(7)]);
var inst_25748 = cljs.core.first.call(null,inst_25739);
var state_25773__$1 = state_25773;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25773__$1,(20),out,inst_25748);
} else {
if((state_val_25774 === (8))){
var inst_25728 = (state_25773[(8)]);
var inst_25727 = (state_25773[(11)]);
var inst_25730 = (inst_25728 < inst_25727);
var inst_25731 = inst_25730;
var state_25773__$1 = state_25773;
if(cljs.core.truth_(inst_25731)){
var statearr_25807_25835 = state_25773__$1;
(statearr_25807_25835[(1)] = (10));

} else {
var statearr_25808_25836 = state_25773__$1;
(statearr_25808_25836[(1)] = (11));

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
});})(c__24184__auto__))
;
return ((function (switch__24096__auto__,c__24184__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24097__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24097__auto____0 = (function (){
var statearr_25809 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25809[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24097__auto__);

(statearr_25809[(1)] = (1));

return statearr_25809;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24097__auto____1 = (function (state_25773){
while(true){
var ret_value__24098__auto__ = (function (){try{while(true){
var result__24099__auto__ = switch__24096__auto__.call(null,state_25773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24099__auto__;
}
break;
}
}catch (e25810){if((e25810 instanceof Object)){
var ex__24100__auto__ = e25810;
var statearr_25811_25837 = state_25773;
(statearr_25811_25837[(5)] = ex__24100__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25838 = state_25773;
state_25773 = G__25838;
continue;
} else {
return ret_value__24098__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24097__auto__ = function(state_25773){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24097__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24097__auto____1.call(this,state_25773);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24097__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24097__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24097__auto__;
})()
;})(switch__24096__auto__,c__24184__auto__))
})();
var state__24186__auto__ = (function (){var statearr_25812 = f__24185__auto__.call(null);
(statearr_25812[(6)] = c__24184__auto__);

return statearr_25812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24186__auto__);
});})(c__24184__auto__))
);

return c__24184__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__25840 = arguments.length;
switch (G__25840) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__25843 = arguments.length;
switch (G__25843) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__25846 = arguments.length;
switch (G__25846) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24184__auto___25893 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24184__auto___25893,out){
return (function (){
var f__24185__auto__ = (function (){var switch__24096__auto__ = ((function (c__24184__auto___25893,out){
return (function (state_25870){
var state_val_25871 = (state_25870[(1)]);
if((state_val_25871 === (7))){
var inst_25865 = (state_25870[(2)]);
var state_25870__$1 = state_25870;
var statearr_25872_25894 = state_25870__$1;
(statearr_25872_25894[(2)] = inst_25865);

(statearr_25872_25894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (1))){
var inst_25847 = null;
var state_25870__$1 = (function (){var statearr_25873 = state_25870;
(statearr_25873[(7)] = inst_25847);

return statearr_25873;
})();
var statearr_25874_25895 = state_25870__$1;
(statearr_25874_25895[(2)] = null);

(statearr_25874_25895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (4))){
var inst_25850 = (state_25870[(8)]);
var inst_25850__$1 = (state_25870[(2)]);
var inst_25851 = (inst_25850__$1 == null);
var inst_25852 = cljs.core.not.call(null,inst_25851);
var state_25870__$1 = (function (){var statearr_25875 = state_25870;
(statearr_25875[(8)] = inst_25850__$1);

return statearr_25875;
})();
if(inst_25852){
var statearr_25876_25896 = state_25870__$1;
(statearr_25876_25896[(1)] = (5));

} else {
var statearr_25877_25897 = state_25870__$1;
(statearr_25877_25897[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (6))){
var state_25870__$1 = state_25870;
var statearr_25878_25898 = state_25870__$1;
(statearr_25878_25898[(2)] = null);

(statearr_25878_25898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (3))){
var inst_25867 = (state_25870[(2)]);
var inst_25868 = cljs.core.async.close_BANG_.call(null,out);
var state_25870__$1 = (function (){var statearr_25879 = state_25870;
(statearr_25879[(9)] = inst_25867);

return statearr_25879;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25870__$1,inst_25868);
} else {
if((state_val_25871 === (2))){
var state_25870__$1 = state_25870;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25870__$1,(4),ch);
} else {
if((state_val_25871 === (11))){
var inst_25850 = (state_25870[(8)]);
var inst_25859 = (state_25870[(2)]);
var inst_25847 = inst_25850;
var state_25870__$1 = (function (){var statearr_25880 = state_25870;
(statearr_25880[(10)] = inst_25859);

(statearr_25880[(7)] = inst_25847);

return statearr_25880;
})();
var statearr_25881_25899 = state_25870__$1;
(statearr_25881_25899[(2)] = null);

(statearr_25881_25899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (9))){
var inst_25850 = (state_25870[(8)]);
var state_25870__$1 = state_25870;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25870__$1,(11),out,inst_25850);
} else {
if((state_val_25871 === (5))){
var inst_25847 = (state_25870[(7)]);
var inst_25850 = (state_25870[(8)]);
var inst_25854 = cljs.core._EQ_.call(null,inst_25850,inst_25847);
var state_25870__$1 = state_25870;
if(inst_25854){
var statearr_25883_25900 = state_25870__$1;
(statearr_25883_25900[(1)] = (8));

} else {
var statearr_25884_25901 = state_25870__$1;
(statearr_25884_25901[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (10))){
var inst_25862 = (state_25870[(2)]);
var state_25870__$1 = state_25870;
var statearr_25885_25902 = state_25870__$1;
(statearr_25885_25902[(2)] = inst_25862);

(statearr_25885_25902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (8))){
var inst_25847 = (state_25870[(7)]);
var tmp25882 = inst_25847;
var inst_25847__$1 = tmp25882;
var state_25870__$1 = (function (){var statearr_25886 = state_25870;
(statearr_25886[(7)] = inst_25847__$1);

return statearr_25886;
})();
var statearr_25887_25903 = state_25870__$1;
(statearr_25887_25903[(2)] = null);

(statearr_25887_25903[(1)] = (2));


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
});})(c__24184__auto___25893,out))
;
return ((function (switch__24096__auto__,c__24184__auto___25893,out){
return (function() {
var cljs$core$async$state_machine__24097__auto__ = null;
var cljs$core$async$state_machine__24097__auto____0 = (function (){
var statearr_25888 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25888[(0)] = cljs$core$async$state_machine__24097__auto__);

(statearr_25888[(1)] = (1));

return statearr_25888;
});
var cljs$core$async$state_machine__24097__auto____1 = (function (state_25870){
while(true){
var ret_value__24098__auto__ = (function (){try{while(true){
var result__24099__auto__ = switch__24096__auto__.call(null,state_25870);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24099__auto__;
}
break;
}
}catch (e25889){if((e25889 instanceof Object)){
var ex__24100__auto__ = e25889;
var statearr_25890_25904 = state_25870;
(statearr_25890_25904[(5)] = ex__24100__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25889;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25905 = state_25870;
state_25870 = G__25905;
continue;
} else {
return ret_value__24098__auto__;
}
break;
}
});
cljs$core$async$state_machine__24097__auto__ = function(state_25870){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24097__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24097__auto____1.call(this,state_25870);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24097__auto____0;
cljs$core$async$state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24097__auto____1;
return cljs$core$async$state_machine__24097__auto__;
})()
;})(switch__24096__auto__,c__24184__auto___25893,out))
})();
var state__24186__auto__ = (function (){var statearr_25891 = f__24185__auto__.call(null);
(statearr_25891[(6)] = c__24184__auto___25893);

return statearr_25891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24186__auto__);
});})(c__24184__auto___25893,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__25907 = arguments.length;
switch (G__25907) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24184__auto___25973 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24184__auto___25973,out){
return (function (){
var f__24185__auto__ = (function (){var switch__24096__auto__ = ((function (c__24184__auto___25973,out){
return (function (state_25945){
var state_val_25946 = (state_25945[(1)]);
if((state_val_25946 === (7))){
var inst_25941 = (state_25945[(2)]);
var state_25945__$1 = state_25945;
var statearr_25947_25974 = state_25945__$1;
(statearr_25947_25974[(2)] = inst_25941);

(statearr_25947_25974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (1))){
var inst_25908 = (new Array(n));
var inst_25909 = inst_25908;
var inst_25910 = (0);
var state_25945__$1 = (function (){var statearr_25948 = state_25945;
(statearr_25948[(7)] = inst_25910);

(statearr_25948[(8)] = inst_25909);

return statearr_25948;
})();
var statearr_25949_25975 = state_25945__$1;
(statearr_25949_25975[(2)] = null);

(statearr_25949_25975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (4))){
var inst_25913 = (state_25945[(9)]);
var inst_25913__$1 = (state_25945[(2)]);
var inst_25914 = (inst_25913__$1 == null);
var inst_25915 = cljs.core.not.call(null,inst_25914);
var state_25945__$1 = (function (){var statearr_25950 = state_25945;
(statearr_25950[(9)] = inst_25913__$1);

return statearr_25950;
})();
if(inst_25915){
var statearr_25951_25976 = state_25945__$1;
(statearr_25951_25976[(1)] = (5));

} else {
var statearr_25952_25977 = state_25945__$1;
(statearr_25952_25977[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (15))){
var inst_25935 = (state_25945[(2)]);
var state_25945__$1 = state_25945;
var statearr_25953_25978 = state_25945__$1;
(statearr_25953_25978[(2)] = inst_25935);

(statearr_25953_25978[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (13))){
var state_25945__$1 = state_25945;
var statearr_25954_25979 = state_25945__$1;
(statearr_25954_25979[(2)] = null);

(statearr_25954_25979[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (6))){
var inst_25910 = (state_25945[(7)]);
var inst_25931 = (inst_25910 > (0));
var state_25945__$1 = state_25945;
if(cljs.core.truth_(inst_25931)){
var statearr_25955_25980 = state_25945__$1;
(statearr_25955_25980[(1)] = (12));

} else {
var statearr_25956_25981 = state_25945__$1;
(statearr_25956_25981[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (3))){
var inst_25943 = (state_25945[(2)]);
var state_25945__$1 = state_25945;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25945__$1,inst_25943);
} else {
if((state_val_25946 === (12))){
var inst_25909 = (state_25945[(8)]);
var inst_25933 = cljs.core.vec.call(null,inst_25909);
var state_25945__$1 = state_25945;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25945__$1,(15),out,inst_25933);
} else {
if((state_val_25946 === (2))){
var state_25945__$1 = state_25945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25945__$1,(4),ch);
} else {
if((state_val_25946 === (11))){
var inst_25925 = (state_25945[(2)]);
var inst_25926 = (new Array(n));
var inst_25909 = inst_25926;
var inst_25910 = (0);
var state_25945__$1 = (function (){var statearr_25957 = state_25945;
(statearr_25957[(7)] = inst_25910);

(statearr_25957[(8)] = inst_25909);

(statearr_25957[(10)] = inst_25925);

return statearr_25957;
})();
var statearr_25958_25982 = state_25945__$1;
(statearr_25958_25982[(2)] = null);

(statearr_25958_25982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (9))){
var inst_25909 = (state_25945[(8)]);
var inst_25923 = cljs.core.vec.call(null,inst_25909);
var state_25945__$1 = state_25945;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25945__$1,(11),out,inst_25923);
} else {
if((state_val_25946 === (5))){
var inst_25913 = (state_25945[(9)]);
var inst_25910 = (state_25945[(7)]);
var inst_25909 = (state_25945[(8)]);
var inst_25918 = (state_25945[(11)]);
var inst_25917 = (inst_25909[inst_25910] = inst_25913);
var inst_25918__$1 = (inst_25910 + (1));
var inst_25919 = (inst_25918__$1 < n);
var state_25945__$1 = (function (){var statearr_25959 = state_25945;
(statearr_25959[(12)] = inst_25917);

(statearr_25959[(11)] = inst_25918__$1);

return statearr_25959;
})();
if(cljs.core.truth_(inst_25919)){
var statearr_25960_25983 = state_25945__$1;
(statearr_25960_25983[(1)] = (8));

} else {
var statearr_25961_25984 = state_25945__$1;
(statearr_25961_25984[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (14))){
var inst_25938 = (state_25945[(2)]);
var inst_25939 = cljs.core.async.close_BANG_.call(null,out);
var state_25945__$1 = (function (){var statearr_25963 = state_25945;
(statearr_25963[(13)] = inst_25938);

return statearr_25963;
})();
var statearr_25964_25985 = state_25945__$1;
(statearr_25964_25985[(2)] = inst_25939);

(statearr_25964_25985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (10))){
var inst_25929 = (state_25945[(2)]);
var state_25945__$1 = state_25945;
var statearr_25965_25986 = state_25945__$1;
(statearr_25965_25986[(2)] = inst_25929);

(statearr_25965_25986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25946 === (8))){
var inst_25909 = (state_25945[(8)]);
var inst_25918 = (state_25945[(11)]);
var tmp25962 = inst_25909;
var inst_25909__$1 = tmp25962;
var inst_25910 = inst_25918;
var state_25945__$1 = (function (){var statearr_25966 = state_25945;
(statearr_25966[(7)] = inst_25910);

(statearr_25966[(8)] = inst_25909__$1);

return statearr_25966;
})();
var statearr_25967_25987 = state_25945__$1;
(statearr_25967_25987[(2)] = null);

(statearr_25967_25987[(1)] = (2));


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
});})(c__24184__auto___25973,out))
;
return ((function (switch__24096__auto__,c__24184__auto___25973,out){
return (function() {
var cljs$core$async$state_machine__24097__auto__ = null;
var cljs$core$async$state_machine__24097__auto____0 = (function (){
var statearr_25968 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25968[(0)] = cljs$core$async$state_machine__24097__auto__);

(statearr_25968[(1)] = (1));

return statearr_25968;
});
var cljs$core$async$state_machine__24097__auto____1 = (function (state_25945){
while(true){
var ret_value__24098__auto__ = (function (){try{while(true){
var result__24099__auto__ = switch__24096__auto__.call(null,state_25945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24099__auto__;
}
break;
}
}catch (e25969){if((e25969 instanceof Object)){
var ex__24100__auto__ = e25969;
var statearr_25970_25988 = state_25945;
(statearr_25970_25988[(5)] = ex__24100__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25989 = state_25945;
state_25945 = G__25989;
continue;
} else {
return ret_value__24098__auto__;
}
break;
}
});
cljs$core$async$state_machine__24097__auto__ = function(state_25945){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24097__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24097__auto____1.call(this,state_25945);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24097__auto____0;
cljs$core$async$state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24097__auto____1;
return cljs$core$async$state_machine__24097__auto__;
})()
;})(switch__24096__auto__,c__24184__auto___25973,out))
})();
var state__24186__auto__ = (function (){var statearr_25971 = f__24185__auto__.call(null);
(statearr_25971[(6)] = c__24184__auto___25973);

return statearr_25971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24186__auto__);
});})(c__24184__auto___25973,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__25991 = arguments.length;
switch (G__25991) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24184__auto___26061 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24184__auto___26061,out){
return (function (){
var f__24185__auto__ = (function (){var switch__24096__auto__ = ((function (c__24184__auto___26061,out){
return (function (state_26033){
var state_val_26034 = (state_26033[(1)]);
if((state_val_26034 === (7))){
var inst_26029 = (state_26033[(2)]);
var state_26033__$1 = state_26033;
var statearr_26035_26062 = state_26033__$1;
(statearr_26035_26062[(2)] = inst_26029);

(statearr_26035_26062[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26034 === (1))){
var inst_25992 = [];
var inst_25993 = inst_25992;
var inst_25994 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26033__$1 = (function (){var statearr_26036 = state_26033;
(statearr_26036[(7)] = inst_25993);

(statearr_26036[(8)] = inst_25994);

return statearr_26036;
})();
var statearr_26037_26063 = state_26033__$1;
(statearr_26037_26063[(2)] = null);

(statearr_26037_26063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26034 === (4))){
var inst_25997 = (state_26033[(9)]);
var inst_25997__$1 = (state_26033[(2)]);
var inst_25998 = (inst_25997__$1 == null);
var inst_25999 = cljs.core.not.call(null,inst_25998);
var state_26033__$1 = (function (){var statearr_26038 = state_26033;
(statearr_26038[(9)] = inst_25997__$1);

return statearr_26038;
})();
if(inst_25999){
var statearr_26039_26064 = state_26033__$1;
(statearr_26039_26064[(1)] = (5));

} else {
var statearr_26040_26065 = state_26033__$1;
(statearr_26040_26065[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26034 === (15))){
var inst_26023 = (state_26033[(2)]);
var state_26033__$1 = state_26033;
var statearr_26041_26066 = state_26033__$1;
(statearr_26041_26066[(2)] = inst_26023);

(statearr_26041_26066[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26034 === (13))){
var state_26033__$1 = state_26033;
var statearr_26042_26067 = state_26033__$1;
(statearr_26042_26067[(2)] = null);

(statearr_26042_26067[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26034 === (6))){
var inst_25993 = (state_26033[(7)]);
var inst_26018 = inst_25993.length;
var inst_26019 = (inst_26018 > (0));
var state_26033__$1 = state_26033;
if(cljs.core.truth_(inst_26019)){
var statearr_26043_26068 = state_26033__$1;
(statearr_26043_26068[(1)] = (12));

} else {
var statearr_26044_26069 = state_26033__$1;
(statearr_26044_26069[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26034 === (3))){
var inst_26031 = (state_26033[(2)]);
var state_26033__$1 = state_26033;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26033__$1,inst_26031);
} else {
if((state_val_26034 === (12))){
var inst_25993 = (state_26033[(7)]);
var inst_26021 = cljs.core.vec.call(null,inst_25993);
var state_26033__$1 = state_26033;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26033__$1,(15),out,inst_26021);
} else {
if((state_val_26034 === (2))){
var state_26033__$1 = state_26033;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26033__$1,(4),ch);
} else {
if((state_val_26034 === (11))){
var inst_26001 = (state_26033[(10)]);
var inst_25997 = (state_26033[(9)]);
var inst_26011 = (state_26033[(2)]);
var inst_26012 = [];
var inst_26013 = inst_26012.push(inst_25997);
var inst_25993 = inst_26012;
var inst_25994 = inst_26001;
var state_26033__$1 = (function (){var statearr_26045 = state_26033;
(statearr_26045[(11)] = inst_26013);

(statearr_26045[(7)] = inst_25993);

(statearr_26045[(8)] = inst_25994);

(statearr_26045[(12)] = inst_26011);

return statearr_26045;
})();
var statearr_26046_26070 = state_26033__$1;
(statearr_26046_26070[(2)] = null);

(statearr_26046_26070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26034 === (9))){
var inst_25993 = (state_26033[(7)]);
var inst_26009 = cljs.core.vec.call(null,inst_25993);
var state_26033__$1 = state_26033;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26033__$1,(11),out,inst_26009);
} else {
if((state_val_26034 === (5))){
var inst_26001 = (state_26033[(10)]);
var inst_25997 = (state_26033[(9)]);
var inst_25994 = (state_26033[(8)]);
var inst_26001__$1 = f.call(null,inst_25997);
var inst_26002 = cljs.core._EQ_.call(null,inst_26001__$1,inst_25994);
var inst_26003 = cljs.core.keyword_identical_QMARK_.call(null,inst_25994,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26004 = ((inst_26002) || (inst_26003));
var state_26033__$1 = (function (){var statearr_26047 = state_26033;
(statearr_26047[(10)] = inst_26001__$1);

return statearr_26047;
})();
if(cljs.core.truth_(inst_26004)){
var statearr_26048_26071 = state_26033__$1;
(statearr_26048_26071[(1)] = (8));

} else {
var statearr_26049_26072 = state_26033__$1;
(statearr_26049_26072[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26034 === (14))){
var inst_26026 = (state_26033[(2)]);
var inst_26027 = cljs.core.async.close_BANG_.call(null,out);
var state_26033__$1 = (function (){var statearr_26051 = state_26033;
(statearr_26051[(13)] = inst_26026);

return statearr_26051;
})();
var statearr_26052_26073 = state_26033__$1;
(statearr_26052_26073[(2)] = inst_26027);

(statearr_26052_26073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26034 === (10))){
var inst_26016 = (state_26033[(2)]);
var state_26033__$1 = state_26033;
var statearr_26053_26074 = state_26033__$1;
(statearr_26053_26074[(2)] = inst_26016);

(statearr_26053_26074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26034 === (8))){
var inst_26001 = (state_26033[(10)]);
var inst_25997 = (state_26033[(9)]);
var inst_25993 = (state_26033[(7)]);
var inst_26006 = inst_25993.push(inst_25997);
var tmp26050 = inst_25993;
var inst_25993__$1 = tmp26050;
var inst_25994 = inst_26001;
var state_26033__$1 = (function (){var statearr_26054 = state_26033;
(statearr_26054[(14)] = inst_26006);

(statearr_26054[(7)] = inst_25993__$1);

(statearr_26054[(8)] = inst_25994);

return statearr_26054;
})();
var statearr_26055_26075 = state_26033__$1;
(statearr_26055_26075[(2)] = null);

(statearr_26055_26075[(1)] = (2));


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
});})(c__24184__auto___26061,out))
;
return ((function (switch__24096__auto__,c__24184__auto___26061,out){
return (function() {
var cljs$core$async$state_machine__24097__auto__ = null;
var cljs$core$async$state_machine__24097__auto____0 = (function (){
var statearr_26056 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26056[(0)] = cljs$core$async$state_machine__24097__auto__);

(statearr_26056[(1)] = (1));

return statearr_26056;
});
var cljs$core$async$state_machine__24097__auto____1 = (function (state_26033){
while(true){
var ret_value__24098__auto__ = (function (){try{while(true){
var result__24099__auto__ = switch__24096__auto__.call(null,state_26033);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24099__auto__;
}
break;
}
}catch (e26057){if((e26057 instanceof Object)){
var ex__24100__auto__ = e26057;
var statearr_26058_26076 = state_26033;
(statearr_26058_26076[(5)] = ex__24100__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26033);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26077 = state_26033;
state_26033 = G__26077;
continue;
} else {
return ret_value__24098__auto__;
}
break;
}
});
cljs$core$async$state_machine__24097__auto__ = function(state_26033){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24097__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24097__auto____1.call(this,state_26033);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24097__auto____0;
cljs$core$async$state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24097__auto____1;
return cljs$core$async$state_machine__24097__auto__;
})()
;})(switch__24096__auto__,c__24184__auto___26061,out))
})();
var state__24186__auto__ = (function (){var statearr_26059 = f__24185__auto__.call(null);
(statearr_26059[(6)] = c__24184__auto___26061);

return statearr_26059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24186__auto__);
});})(c__24184__auto___26061,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1535633074292
