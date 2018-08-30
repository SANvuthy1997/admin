// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__32843){
var map__32844 = p__32843;
var map__32844__$1 = ((((!((map__32844 == null)))?(((((map__32844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32844):map__32844);
var m = map__32844__$1;
var n = cljs.core.get.call(null,map__32844__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__32844__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32846_32868 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32847_32869 = null;
var count__32848_32870 = (0);
var i__32849_32871 = (0);
while(true){
if((i__32849_32871 < count__32848_32870)){
var f_32872 = cljs.core._nth.call(null,chunk__32847_32869,i__32849_32871);
cljs.core.println.call(null,"  ",f_32872);


var G__32873 = seq__32846_32868;
var G__32874 = chunk__32847_32869;
var G__32875 = count__32848_32870;
var G__32876 = (i__32849_32871 + (1));
seq__32846_32868 = G__32873;
chunk__32847_32869 = G__32874;
count__32848_32870 = G__32875;
i__32849_32871 = G__32876;
continue;
} else {
var temp__4657__auto___32877 = cljs.core.seq.call(null,seq__32846_32868);
if(temp__4657__auto___32877){
var seq__32846_32878__$1 = temp__4657__auto___32877;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32846_32878__$1)){
var c__4319__auto___32879 = cljs.core.chunk_first.call(null,seq__32846_32878__$1);
var G__32880 = cljs.core.chunk_rest.call(null,seq__32846_32878__$1);
var G__32881 = c__4319__auto___32879;
var G__32882 = cljs.core.count.call(null,c__4319__auto___32879);
var G__32883 = (0);
seq__32846_32868 = G__32880;
chunk__32847_32869 = G__32881;
count__32848_32870 = G__32882;
i__32849_32871 = G__32883;
continue;
} else {
var f_32884 = cljs.core.first.call(null,seq__32846_32878__$1);
cljs.core.println.call(null,"  ",f_32884);


var G__32885 = cljs.core.next.call(null,seq__32846_32878__$1);
var G__32886 = null;
var G__32887 = (0);
var G__32888 = (0);
seq__32846_32868 = G__32885;
chunk__32847_32869 = G__32886;
count__32848_32870 = G__32887;
i__32849_32871 = G__32888;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_32889 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_32889);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_32889)))?cljs.core.second.call(null,arglists_32889):arglists_32889));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32850_32890 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32851_32891 = null;
var count__32852_32892 = (0);
var i__32853_32893 = (0);
while(true){
if((i__32853_32893 < count__32852_32892)){
var vec__32854_32894 = cljs.core._nth.call(null,chunk__32851_32891,i__32853_32893);
var name_32895 = cljs.core.nth.call(null,vec__32854_32894,(0),null);
var map__32857_32896 = cljs.core.nth.call(null,vec__32854_32894,(1),null);
var map__32857_32897__$1 = ((((!((map__32857_32896 == null)))?(((((map__32857_32896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32857_32896.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32857_32896):map__32857_32896);
var doc_32898 = cljs.core.get.call(null,map__32857_32897__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32899 = cljs.core.get.call(null,map__32857_32897__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32895);

cljs.core.println.call(null," ",arglists_32899);

if(cljs.core.truth_(doc_32898)){
cljs.core.println.call(null," ",doc_32898);
} else {
}


var G__32900 = seq__32850_32890;
var G__32901 = chunk__32851_32891;
var G__32902 = count__32852_32892;
var G__32903 = (i__32853_32893 + (1));
seq__32850_32890 = G__32900;
chunk__32851_32891 = G__32901;
count__32852_32892 = G__32902;
i__32853_32893 = G__32903;
continue;
} else {
var temp__4657__auto___32904 = cljs.core.seq.call(null,seq__32850_32890);
if(temp__4657__auto___32904){
var seq__32850_32905__$1 = temp__4657__auto___32904;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32850_32905__$1)){
var c__4319__auto___32906 = cljs.core.chunk_first.call(null,seq__32850_32905__$1);
var G__32907 = cljs.core.chunk_rest.call(null,seq__32850_32905__$1);
var G__32908 = c__4319__auto___32906;
var G__32909 = cljs.core.count.call(null,c__4319__auto___32906);
var G__32910 = (0);
seq__32850_32890 = G__32907;
chunk__32851_32891 = G__32908;
count__32852_32892 = G__32909;
i__32853_32893 = G__32910;
continue;
} else {
var vec__32859_32911 = cljs.core.first.call(null,seq__32850_32905__$1);
var name_32912 = cljs.core.nth.call(null,vec__32859_32911,(0),null);
var map__32862_32913 = cljs.core.nth.call(null,vec__32859_32911,(1),null);
var map__32862_32914__$1 = ((((!((map__32862_32913 == null)))?(((((map__32862_32913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32862_32913.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32862_32913):map__32862_32913);
var doc_32915 = cljs.core.get.call(null,map__32862_32914__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32916 = cljs.core.get.call(null,map__32862_32914__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32912);

cljs.core.println.call(null," ",arglists_32916);

if(cljs.core.truth_(doc_32915)){
cljs.core.println.call(null," ",doc_32915);
} else {
}


var G__32917 = cljs.core.next.call(null,seq__32850_32905__$1);
var G__32918 = null;
var G__32919 = (0);
var G__32920 = (0);
seq__32850_32890 = G__32917;
chunk__32851_32891 = G__32918;
count__32852_32892 = G__32919;
i__32853_32893 = G__32920;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__32864 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__32865 = null;
var count__32866 = (0);
var i__32867 = (0);
while(true){
if((i__32867 < count__32866)){
var role = cljs.core._nth.call(null,chunk__32865,i__32867);
var temp__4657__auto___32921__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___32921__$1)){
var spec_32922 = temp__4657__auto___32921__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_32922));
} else {
}


var G__32923 = seq__32864;
var G__32924 = chunk__32865;
var G__32925 = count__32866;
var G__32926 = (i__32867 + (1));
seq__32864 = G__32923;
chunk__32865 = G__32924;
count__32866 = G__32925;
i__32867 = G__32926;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__32864);
if(temp__4657__auto____$1){
var seq__32864__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32864__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__32864__$1);
var G__32927 = cljs.core.chunk_rest.call(null,seq__32864__$1);
var G__32928 = c__4319__auto__;
var G__32929 = cljs.core.count.call(null,c__4319__auto__);
var G__32930 = (0);
seq__32864 = G__32927;
chunk__32865 = G__32928;
count__32866 = G__32929;
i__32867 = G__32930;
continue;
} else {
var role = cljs.core.first.call(null,seq__32864__$1);
var temp__4657__auto___32931__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___32931__$2)){
var spec_32932 = temp__4657__auto___32931__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_32932));
} else {
}


var G__32933 = cljs.core.next.call(null,seq__32864__$1);
var G__32934 = null;
var G__32935 = (0);
var G__32936 = (0);
seq__32864 = G__32933;
chunk__32865 = G__32934;
count__32866 = G__32935;
i__32867 = G__32936;
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
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1535633101989
