// Compiled by ClojureScript 1.10.238 {}
goog.provide('re_com.typeahead');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_com.misc');
goog.require('re_com.util');
goog.require('re_com.popover');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('reagent.core');
goog.require('goog.events.KeyCodes');

/**
 * Return an initial value for the typeahead state, given `args`.
 */
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__26154){
var map__26155 = p__26154;
var map__26155__$1 = ((((!((map__26155 == null)))?(((((map__26155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26155):map__26155);
var args = map__26155__$1;
var on_change = cljs.core.get.call(null,map__26155__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__26155__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__26155__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var data_source = cljs.core.get.call(null,map__26155__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.call(null,map__26155__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.call(null,map__26155__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.call(null,map__26155__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value.call(null,model);
var G__26157 = (function (){var c_input = cljs.core.async.chan.call(null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__3922__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,re_com.typeahead.debounce.call(null,c_input,debounce_delay),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value.call(null,model),re_com.util.deref_or_value.call(null,model)]);
})();
if(cljs.core.truth_(external_model_value)){
return re_com.typeahead.display_suggestion.call(null,G__26157,external_model_value);
} else {
return G__26157;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__26158,event){
var map__26159 = p__26158;
var map__26159__$1 = ((((!((map__26159 == null)))?(((((map__26159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26159):map__26159);
var state = map__26159__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__26159__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.call(null,map__26159__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value.call(null,rigid_QMARK_);
var G__26161 = event;
var G__26161__$1 = (((G__26161 instanceof cljs.core.Keyword))?G__26161.fqn:null);
switch (G__26161__$1) {
case "input-text-blurred":
var and__3911__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,rigid_QMARK___$1);
} else {
return and__3911__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
case "input-text-changed":
return cljs.core.not.call(null,(function (){var or__3922__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return rigid_QMARK___$1;
}
})());

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26161__$1)].join('')));

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__26163,event){
var map__26164 = p__26163;
var map__26164__$1 = ((((!((map__26164 == null)))?(((((map__26164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26164):map__26164);
var state = map__26164__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__26164__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var G__26166 = event;
var G__26166__$1 = (((G__26166 instanceof cljs.core.Keyword))?G__26166.fqn:null);
switch (G__26166__$1) {
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
default:
return false;

}
});
/**
 * Change the `typeahead` `model` value to `new-value`
 */
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__26168,new_value){
var map__26169 = p__26168;
var map__26169__$1 = ((((!((map__26169 == null)))?(((((map__26169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26169):map__26169);
var state = map__26169__$1;
var on_change = cljs.core.get.call(null,map__26169__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
on_change.call(null,new_value);
} else {
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__26171,suggestion){
var map__26172 = p__26171;
var map__26172__$1 = ((((!((map__26172 == null)))?(((((map__26172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26172):map__26172);
var state = map__26172__$1;
var suggestion_to_string = cljs.core.get.call(null,map__26172__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = suggestion_to_string.call(null,suggestion);
var G__26174 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.call(null,G__26174,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true);
} else {
return G__26174;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__26175,index){
var map__26176 = p__26175;
var map__26176__$1 = ((((!((map__26176 == null)))?(((((map__26176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26176.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26176):map__26176);
var state = map__26176__$1;
var suggestions = cljs.core.get.call(null,map__26176__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
var G__26178 = state;
var G__26178__$1 = cljs.core.assoc.call(null,G__26178,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__26178__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model.call(null,G__26178__$1,suggestion):G__26178__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion.call(null,G__26178__$2,suggestion);
} else {
return G__26178__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__26179,index){
var map__26180 = p__26179;
var map__26180__$1 = ((((!((map__26180 == null)))?(((((map__26180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26180.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26180):map__26180);
var state = map__26180__$1;
var suggestions = cljs.core.get.call(null,map__26180__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,re_com.typeahead.activate_suggestion_by_index.call(null,state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__26182){
var map__26183 = p__26182;
var map__26183__$1 = ((((!((map__26183 == null)))?(((((map__26183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26183):map__26183);
var state = map__26183__$1;
var suggestion_active_index = cljs.core.get.call(null,map__26183__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__26185 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index.call(null,G__26185,suggestion_active_index);
} else {
return G__26185;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod.call(null,(count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__26186){
var map__26187 = p__26186;
var map__26187__$1 = ((((!((map__26187 == null)))?(((((map__26187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26187):map__26187);
var state = map__26187__$1;
var suggestions = cljs.core.get.call(null,map__26187__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__26187__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__26189 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__26189,re_com.typeahead.wrap.call(null,((function (){var or__3922__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__26189;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__26190){
var map__26191 = p__26190;
var map__26191__$1 = ((((!((map__26191 == null)))?(((((map__26191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26191):map__26191);
var state = map__26191__$1;
var suggestions = cljs.core.get.call(null,map__26191__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__26191__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__26193 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__26193,re_com.typeahead.wrap.call(null,((function (){var or__3922__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__26193;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__26194 = state;
var G__26194__$1 = re_com.typeahead.clear_suggestions.call(null,G__26194)
;
var G__26194__$2 = cljs.core.assoc.call(null,G__26194__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__26194__$2,null);
} else {
return G__26194__$2;
}
});
/**
 * Update state when new suggestions are available
 */
re_com.typeahead.got_suggestions = (function re_com$typeahead$got_suggestions(state,suggestions){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),suggestions,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),null);
});
/**
 * Update state when the `input-text` is about to lose focus.
 */
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__26195){
var map__26196 = p__26195;
var map__26196__$1 = ((((!((map__26196 == null)))?(((((map__26196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26196):map__26196);
var state = map__26196__$1;
var input_text = cljs.core.get.call(null,map__26196__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.call(null,map__26196__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var G__26198 = state;
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.not.call(null,displaying_suggestion_QMARK_);
if(and__3911__auto__){
return re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__3911__auto__;
}
})())){
return re_com.typeahead.update_model.call(null,G__26198,input_text);
} else {
return G__26198;
}
});
/**
 * Update `state` given a new `data-source`. Resets the typeahead since any existing suggestions
 *   came from the old `data-source`.
 */
re_com.typeahead.change_data_source = (function re_com$typeahead$change_data_source(state,data_source){
return cljs.core.assoc.call(null,re_com.typeahead.reset_typeahead.call(null,state),new cljs.core.Keyword(null,"data-source","data-source",-658934676),data_source);
});
/**
 * Update state when the external model value has changed.
 */
re_com.typeahead.external_model_changed = (function re_com$typeahead$external_model_changed(state,new_value){
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,state,new_value),new_value));
});
/**
 * Call the `data-source` fn with `text`, and then call `got-suggestions` with the result
 *   (asynchronously, if `data-source` does not return a truthy value).
 */
re_com.typeahead.search_data_source_BANG_ = (function re_com$typeahead$search_data_source_BANG_(data_source,state_atom,text){
var temp__4655__auto__ = data_source.call(null,text,(function (p1__26199_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,p1__26199_SHARP_);
}));
if(cljs.core.truth_(temp__4655__auto__)){
var return_value = temp__4655__auto__;
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,return_value);
} else {
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),true);
}
});
/**
 * For every value arriving on the `c-search` channel, call `search-data-source!`.
 */
re_com.typeahead.search_data_source_loop_BANG_ = (function re_com$typeahead$search_data_source_loop_BANG_(state_atom,c_search){
var c__24184__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24184__auto__){
return (function (){
var f__24185__auto__ = (function (){var switch__24096__auto__ = ((function (c__24184__auto__){
return (function (state_26216){
var state_val_26217 = (state_26216[(1)]);
if((state_val_26217 === (1))){
var state_26216__$1 = state_26216;
var statearr_26218_26230 = state_26216__$1;
(statearr_26218_26230[(2)] = null);

(statearr_26218_26230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26217 === (2))){
var state_26216__$1 = state_26216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26216__$1,(4),c_search);
} else {
if((state_val_26217 === (3))){
var inst_26214 = (state_26216[(2)]);
var state_26216__$1 = state_26216;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26216__$1,inst_26214);
} else {
if((state_val_26217 === (4))){
var inst_26202 = (state_26216[(7)]);
var inst_26202__$1 = (state_26216[(2)]);
var inst_26203 = cljs.core.deref.call(null,state_atom);
var inst_26204 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_26203);
var inst_26205 = cljs.core._EQ_.call(null,"",inst_26202__$1);
var state_26216__$1 = (function (){var statearr_26219 = state_26216;
(statearr_26219[(7)] = inst_26202__$1);

(statearr_26219[(8)] = inst_26204);

return statearr_26219;
})();
if(inst_26205){
var statearr_26220_26231 = state_26216__$1;
(statearr_26220_26231[(1)] = (5));

} else {
var statearr_26221_26232 = state_26216__$1;
(statearr_26221_26232[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26217 === (5))){
var inst_26207 = cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
var state_26216__$1 = state_26216;
var statearr_26222_26233 = state_26216__$1;
(statearr_26222_26233[(2)] = inst_26207);

(statearr_26222_26233[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26217 === (6))){
var inst_26202 = (state_26216[(7)]);
var inst_26204 = (state_26216[(8)]);
var inst_26209 = re_com.typeahead.search_data_source_BANG_.call(null,inst_26204,state_atom,inst_26202);
var state_26216__$1 = state_26216;
var statearr_26223_26234 = state_26216__$1;
(statearr_26223_26234[(2)] = inst_26209);

(statearr_26223_26234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26217 === (7))){
var inst_26211 = (state_26216[(2)]);
var state_26216__$1 = (function (){var statearr_26224 = state_26216;
(statearr_26224[(9)] = inst_26211);

return statearr_26224;
})();
var statearr_26225_26235 = state_26216__$1;
(statearr_26225_26235[(2)] = null);

(statearr_26225_26235[(1)] = (2));


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
});})(c__24184__auto__))
;
return ((function (switch__24096__auto__,c__24184__auto__){
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__24097__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__24097__auto____0 = (function (){
var statearr_26226 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26226[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__24097__auto__);

(statearr_26226[(1)] = (1));

return statearr_26226;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__24097__auto____1 = (function (state_26216){
while(true){
var ret_value__24098__auto__ = (function (){try{while(true){
var result__24099__auto__ = switch__24096__auto__.call(null,state_26216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24099__auto__;
}
break;
}
}catch (e26227){if((e26227 instanceof Object)){
var ex__24100__auto__ = e26227;
var statearr_26228_26236 = state_26216;
(statearr_26228_26236[(5)] = ex__24100__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26237 = state_26216;
state_26216 = G__26237;
continue;
} else {
return ret_value__24098__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__24097__auto__ = function(state_26216){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__24097__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__24097__auto____1.call(this,state_26216);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__24097__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__24097__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__24097__auto__;
})()
;})(switch__24096__auto__,c__24184__auto__))
})();
var state__24186__auto__ = (function (){var statearr_26229 = f__24185__auto__.call(null);
(statearr_26229[(6)] = c__24184__auto__);

return statearr_26229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24186__auto__);
});})(c__24184__auto__))
);

return c__24184__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__26239 = cljs.core.deref.call(null,state_atom);
var map__26239__$1 = ((((!((map__26239 == null)))?(((((map__26239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26239):map__26239);
var state = map__26239__$1;
var input_text = cljs.core.get.call(null,map__26239__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.call(null,map__26239__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.call(null,new_text,input_text)){
return state;
} else {
if(clojure.string.blank_QMARK_.call(null,new_text)){
} else {
cljs.core.async.put_BANG_.call(null,c_input,new_text);
}

return cljs.core.swap_BANG_.call(null,state_atom,((function (map__26239,map__26239__$1,state,input_text,c_input){
return (function (p1__26238_SHARP_){
var G__26241 = p1__26238_SHARP_;
var G__26241__$1 = cljs.core.assoc.call(null,G__26241,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__26241__$1,new_text);
} else {
return G__26241__$1;
}
});})(map__26239,map__26239__$1,state,input_text,c_input))
);
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__26242 = cljs.core._EQ_;
var expr__26243 = event.which;
if(cljs.core.truth_(pred__26242.call(null,goog.events.KeyCodes.UP,expr__26243))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_(pred__26242.call(null,goog.events.KeyCodes.DOWN,expr__26243))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_(pred__26242.call(null,goog.events.KeyCodes.ENTER,expr__26243))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_(pred__26242.call(null,goog.events.KeyCodes.ESC,expr__26243))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
} else {
if(cljs.core.truth_(pred__26242.call(null,goog.events.KeyCodes.TAB,expr__26243))){
if(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_atom))))){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);

return event.preventDefault();
} else {
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.input_text_will_blur);
}
} else {
return true;
}
}
}
}
}
});
re_com.typeahead.typeahead_args_desc = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null)," supplies suggestion objects. This can either accept a single string argument (the search term), or a string and a callback. For the first case, the fn should return a collection of suggestion objects (which can be anything). For the second case, the fn should return ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil"], null),", and eventually result in a call to the callback with a collection of suggestion objects."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"string -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," controls when it is called. It is passed a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-change"], null)," when the user chooses a suggestion, otherwise invoke it on every change (navigating through suggestions with the mouse or keyboard, or if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"rigid?"], null)," is also ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null),", invoke it on every character typed.)"], null)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"object | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"The initial value of the typeahead (should match the suggestion objects returned by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),")."]),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(250),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"After receiving input, the typeahead will wait this many milliseconds without receiving new input before calling ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"render fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override the rendering of the suggestion items by passing a fn that returns hiccup forms. The fn will receive two arguments: the search term, and the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"suggestion -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"When a suggestion is chosen, the input-text value will be set to the result of calling this fn with the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"If ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null)," the user will be allowed to choose arbitrary text input rather than a suggestion from ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),". In this case, a string will be supplied in lieu of a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.input_status_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"validation status. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil/omitted"], null)," for normal status or one of: ",re_com.validate.input_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, display an icon to match ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":status"], null)," (no icon for nil)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"displayed in status icon's tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"background text shown when empty"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"250px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS width setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS height setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't interact (input anything)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed"], null)], null)], null);
/**
 * typeahead reagent component
 */
re_com.typeahead.typeahead = (function re_com$typeahead$typeahead(var_args){
var args__4502__auto__ = [];
var len__4499__auto___26267 = arguments.length;
var i__4500__auto___26268 = (0);
while(true){
if((i__4500__auto___26268 < len__4499__auto___26267)){
args__4502__auto__.push((arguments[i__4500__auto___26268]));

var G__26269 = (i__4500__auto___26268 + (1));
i__4500__auto___26268 = G__26269;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__26247){
var map__26248 = p__26247;
var map__26248__$1 = ((((!((map__26248 == null)))?(((((map__26248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26248):map__26248);
var args = map__26248__$1;
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__26250 = re_com.typeahead.make_typeahead_state.call(null,args);
var map__26250__$1 = ((((!((map__26250 == null)))?(((((map__26250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26250):map__26250);
var state = map__26250__$1;
var c_search = cljs.core.get.call(null,map__26250__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.call(null,map__26250__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.call(null,state);
var input_text_model = reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_.call(null,state_atom,c_search);

return ((function (map__26250,map__26250__$1,state,c_search,c_input,state_atom,input_text_model,map__26248,map__26248__$1,args){
return (function() { 
var G__26270__delegate = function (p__26252){
var map__26253 = p__26252;
var map__26253__$1 = ((((!((map__26253 == null)))?(((((map__26253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26253):map__26253);
var args__$1 = map__26253__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__26253__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.call(null,map__26253__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__26253__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__26253__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.call(null,map__26253__$1,new cljs.core.Keyword(null,"model","model",331153215));
var _debounce_delay = cljs.core.get.call(null,map__26253__$1,new cljs.core.Keyword(null,"_debounce-delay","_debounce-delay",-1476744225));
var _on_change = cljs.core.get.call(null,map__26253__$1,new cljs.core.Keyword(null,"_on-change","_on-change",156649312));
var placeholder = cljs.core.get.call(null,map__26253__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.call(null,map__26253__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var _suggestion_to_string = cljs.core.get.call(null,map__26253__$1,new cljs.core.Keyword(null,"_suggestion-to-string","_suggestion-to-string",795407399));
var width = cljs.core.get.call(null,map__26253__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source = cljs.core.get.call(null,map__26253__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var _rigid_QMARK_ = cljs.core.get.call(null,map__26253__$1,new cljs.core.Keyword(null,"_rigid?","_rigid?",1424449294));
var style = cljs.core.get.call(null,map__26253__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _change_on_blur_QMARK_ = cljs.core.get.call(null,map__26253__$1,new cljs.core.Keyword(null,"_change-on-blur?","_change-on-blur?",1219941073));
var status = cljs.core.get.call(null,map__26253__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__26253__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var _attr = cljs.core.get.call(null,map__26253__$1,new cljs.core.Keyword(null,"_attr","_attr",299438964));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args__$1,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__26255 = cljs.core.deref.call(null,state_atom);
var map__26255__$1 = ((((!((map__26255 == null)))?(((((map__26255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26255):map__26255);
var state__$1 = map__26255__$1;
var suggestions = cljs.core.get.call(null,map__26255__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.call(null,map__26255__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.call(null,map__26255__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.call(null,map__26255__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
var last_data_source = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value.call(null,model);
var width__$1 = (function (){var or__3922__auto__ = width;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "250px";
}
})();
if(cljs.core.not_EQ_.call(null,last_data_source,data_source)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.change_data_source,data_source);
} else {
}

if(cljs.core.not_EQ_.call(null,latest_external_model,external_model)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.external_model_changed,latest_external_model);
} else {
}

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.input_text,new cljs.core.Keyword(null,"model","model",331153215),input_text_model,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),status_icon_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),status_tooltip,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.call(null,re_com.typeahead.input_text_on_change_BANG_,state_atom),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),cljs.core.partial.call(null,re_com.typeahead.input_text_on_key_down_BANG_,state_atom)], null)], null),(cljs.core.truth_((function (){var or__3922__auto__ = cljs.core.not_empty.call(null,suggestions);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__4292__auto__ = ((function (map__26255,map__26255__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__26253,map__26253__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__26250,map__26250__$1,state,c_search,c_input,state_atom,input_text_model,map__26248,map__26248__$1,args){
return (function re_com$typeahead$iter__26257(s__26258){
return (new cljs.core.LazySeq(null,((function (map__26255,map__26255__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__26253,map__26253__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__26250,map__26250__$1,state,c_search,c_input,state_atom,input_text_model,map__26248,map__26248__$1,args){
return (function (){
var s__26258__$1 = s__26258;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26258__$1);
if(temp__4657__auto__){
var s__26258__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26258__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__26258__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__26260 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__26259 = (0);
while(true){
if((i__26259 < size__4291__auto__)){
var vec__26261 = cljs.core._nth.call(null,c__4290__auto__,i__26259);
var i = cljs.core.nth.call(null,vec__26261,(0),null);
var s = cljs.core.nth.call(null,vec__26261,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
cljs.core.chunk_append.call(null,b__26260,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__26259,selected_QMARK_,vec__26261,i,s,c__4290__auto__,size__4291__auto__,b__26260,s__26258__$2,temp__4657__auto__,map__26255,map__26255__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__26253,map__26253__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__26250,map__26250__$1,state,c_search,c_input,state_atom,input_text_model,map__26248,map__26248__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__26259,selected_QMARK_,vec__26261,i,s,c__4290__auto__,size__4291__auto__,b__26260,s__26258__$2,temp__4657__auto__,map__26255,map__26255__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__26253,map__26253__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__26250,map__26250__$1,state,c_search,c_input,state_atom,input_text_model,map__26248,map__26248__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__26259,selected_QMARK_,vec__26261,i,s,c__4290__auto__,size__4291__auto__,b__26260,s__26258__$2,temp__4657__auto__,map__26255,map__26255__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__26253,map__26253__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__26250,map__26250__$1,state,c_search,c_input,state_atom,input_text_model,map__26248,map__26248__$1,args){
return (function (p1__26245_SHARP_){
p1__26245_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__26259,selected_QMARK_,vec__26261,i,s,c__4290__auto__,size__4291__auto__,b__26260,s__26258__$2,temp__4657__auto__,map__26255,map__26255__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__26253,map__26253__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__26250,map__26250__$1,state,c_search,c_input,state_atom,input_text_model,map__26248,map__26248__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__26271 = (i__26259 + (1));
i__26259 = G__26271;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26260),re_com$typeahead$iter__26257.call(null,cljs.core.chunk_rest.call(null,s__26258__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26260),null);
}
} else {
var vec__26264 = cljs.core.first.call(null,s__26258__$2);
var i = cljs.core.nth.call(null,vec__26264,(0),null);
var s = cljs.core.nth.call(null,vec__26264,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__26264,i,s,s__26258__$2,temp__4657__auto__,map__26255,map__26255__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__26253,map__26253__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__26250,map__26250__$1,state,c_search,c_input,state_atom,input_text_model,map__26248,map__26248__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__26264,i,s,s__26258__$2,temp__4657__auto__,map__26255,map__26255__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__26253,map__26253__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__26250,map__26250__$1,state,c_search,c_input,state_atom,input_text_model,map__26248,map__26248__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__26264,i,s,s__26258__$2,temp__4657__auto__,map__26255,map__26255__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__26253,map__26253__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__26250,map__26250__$1,state,c_search,c_input,state_atom,input_text_model,map__26248,map__26248__$1,args){
return (function (p1__26245_SHARP_){
p1__26245_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__26264,i,s,s__26258__$2,temp__4657__auto__,map__26255,map__26255__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__26253,map__26253__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__26250,map__26250__$1,state,c_search,c_input,state_atom,input_text_model,map__26248,map__26248__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__26257.call(null,cljs.core.rest.call(null,s__26258__$2)));
}
} else {
return null;
}
break;
}
});})(map__26255,map__26255__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__26253,map__26253__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__26250,map__26250__$1,state,c_search,c_input,state_atom,input_text_model,map__26248,map__26248__$1,args))
,null,null));
});})(map__26255,map__26255__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__26253,map__26253__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__26250,map__26250__$1,state,c_search,c_input,state_atom,input_text_model,map__26248,map__26248__$1,args))
;
return iter__4292__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),suggestions));
})()], null)], null)], null):null)], null)], null);
};
var G__26270 = function (var_args){
var p__26252 = null;
if (arguments.length > 0) {
var G__26272__i = 0, G__26272__a = new Array(arguments.length -  0);
while (G__26272__i < G__26272__a.length) {G__26272__a[G__26272__i] = arguments[G__26272__i + 0]; ++G__26272__i;}
  p__26252 = new cljs.core.IndexedSeq(G__26272__a,0,null);
} 
return G__26270__delegate.call(this,p__26252);};
G__26270.cljs$lang$maxFixedArity = 0;
G__26270.cljs$lang$applyTo = (function (arglist__26273){
var p__26252 = cljs.core.seq(arglist__26273);
return G__26270__delegate(p__26252);
});
G__26270.cljs$core$IFn$_invoke$arity$variadic = G__26270__delegate;
return G__26270;
})()
;
;})(map__26250,map__26250__$1,state,c_search,c_input,state_atom,input_text_model,map__26248,map__26248__$1,args))
});

re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq26246){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26246));
});

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.call(null);
var c__24184__auto___26354 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24184__auto___26354,out){
return (function (){
var f__24185__auto__ = (function (){var switch__24096__auto__ = ((function (c__24184__auto___26354,out){
return (function (state_26324){
var state_val_26325 = (state_26324[(1)]);
if((state_val_26325 === (7))){
var inst_26279 = (state_26324[(2)]);
var state_26324__$1 = state_26324;
var statearr_26326_26355 = state_26324__$1;
(statearr_26326_26355[(2)] = inst_26279);

(statearr_26326_26355[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26325 === (1))){
var inst_26274 = null;
var state_26324__$1 = (function (){var statearr_26327 = state_26324;
(statearr_26327[(7)] = inst_26274);

return statearr_26327;
})();
var statearr_26328_26356 = state_26324__$1;
(statearr_26328_26356[(2)] = null);

(statearr_26328_26356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26325 === (4))){
var state_26324__$1 = state_26324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26324__$1,(7),in$);
} else {
if((state_val_26325 === (15))){
var inst_26309 = (state_26324[(2)]);
var state_26324__$1 = (function (){var statearr_26329 = state_26324;
(statearr_26329[(8)] = inst_26309);

return statearr_26329;
})();
var statearr_26330_26357 = state_26324__$1;
(statearr_26330_26357[(2)] = null);

(statearr_26330_26357[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26325 === (13))){
var inst_26297 = (state_26324[(9)]);
var inst_26311 = cljs.core._EQ_.call(null,inst_26297,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_26324__$1 = state_26324;
if(inst_26311){
var statearr_26331_26358 = state_26324__$1;
(statearr_26331_26358[(1)] = (16));

} else {
var statearr_26332_26359 = state_26324__$1;
(statearr_26332_26359[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26325 === (6))){
var inst_26283 = (state_26324[(10)]);
var inst_26282 = (state_26324[(2)]);
var inst_26283__$1 = cljs.core.async.timeout.call(null,ms);
var inst_26291 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26292 = [in$,inst_26283__$1];
var inst_26293 = (new cljs.core.PersistentVector(null,2,(5),inst_26291,inst_26292,null));
var state_26324__$1 = (function (){var statearr_26333 = state_26324;
(statearr_26333[(10)] = inst_26283__$1);

(statearr_26333[(11)] = inst_26282);

return statearr_26333;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26324__$1,(8),inst_26293);
} else {
if((state_val_26325 === (17))){
var state_26324__$1 = state_26324;
var statearr_26334_26360 = state_26324__$1;
(statearr_26334_26360[(2)] = null);

(statearr_26334_26360[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26325 === (3))){
var inst_26322 = (state_26324[(2)]);
var state_26324__$1 = state_26324;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26324__$1,inst_26322);
} else {
if((state_val_26325 === (12))){
var inst_26282 = (state_26324[(11)]);
var state_26324__$1 = state_26324;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26324__$1,(15),out,inst_26282);
} else {
if((state_val_26325 === (2))){
var inst_26274 = (state_26324[(7)]);
var inst_26276 = (inst_26274 == null);
var state_26324__$1 = state_26324;
if(cljs.core.truth_(inst_26276)){
var statearr_26335_26361 = state_26324__$1;
(statearr_26335_26361[(1)] = (4));

} else {
var statearr_26336_26362 = state_26324__$1;
(statearr_26336_26362[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26325 === (11))){
var inst_26319 = (state_26324[(2)]);
var inst_26274 = inst_26319;
var state_26324__$1 = (function (){var statearr_26337 = state_26324;
(statearr_26337[(7)] = inst_26274);

return statearr_26337;
})();
var statearr_26338_26363 = state_26324__$1;
(statearr_26338_26363[(2)] = null);

(statearr_26338_26363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26325 === (9))){
var inst_26295 = (state_26324[(12)]);
var inst_26303 = cljs.core.nth.call(null,inst_26295,(0),null);
var inst_26304 = cljs.core.nth.call(null,inst_26295,(1),null);
var state_26324__$1 = (function (){var statearr_26339 = state_26324;
(statearr_26339[(13)] = inst_26304);

return statearr_26339;
})();
var statearr_26340_26364 = state_26324__$1;
(statearr_26340_26364[(2)] = inst_26303);

(statearr_26340_26364[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26325 === (5))){
var inst_26274 = (state_26324[(7)]);
var state_26324__$1 = state_26324;
var statearr_26341_26365 = state_26324__$1;
(statearr_26341_26365[(2)] = inst_26274);

(statearr_26341_26365[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26325 === (14))){
var inst_26317 = (state_26324[(2)]);
var state_26324__$1 = state_26324;
var statearr_26342_26366 = state_26324__$1;
(statearr_26342_26366[(2)] = inst_26317);

(statearr_26342_26366[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26325 === (16))){
var inst_26296 = (state_26324[(14)]);
var state_26324__$1 = state_26324;
var statearr_26343_26367 = state_26324__$1;
(statearr_26343_26367[(2)] = inst_26296);

(statearr_26343_26367[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26325 === (10))){
var inst_26283 = (state_26324[(10)]);
var inst_26297 = (state_26324[(9)]);
var inst_26306 = cljs.core._EQ_.call(null,inst_26297,inst_26283);
var state_26324__$1 = state_26324;
if(inst_26306){
var statearr_26344_26368 = state_26324__$1;
(statearr_26344_26368[(1)] = (12));

} else {
var statearr_26345_26369 = state_26324__$1;
(statearr_26345_26369[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26325 === (18))){
var inst_26315 = (state_26324[(2)]);
var state_26324__$1 = state_26324;
var statearr_26346_26370 = state_26324__$1;
(statearr_26346_26370[(2)] = inst_26315);

(statearr_26346_26370[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26325 === (8))){
var inst_26295 = (state_26324[(12)]);
var inst_26297 = (state_26324[(9)]);
var inst_26295__$1 = (state_26324[(2)]);
var inst_26296 = cljs.core.nth.call(null,inst_26295__$1,(0),null);
var inst_26297__$1 = cljs.core.nth.call(null,inst_26295__$1,(1),null);
var inst_26298 = cljs.core._EQ_.call(null,inst_26297__$1,in$);
var state_26324__$1 = (function (){var statearr_26347 = state_26324;
(statearr_26347[(14)] = inst_26296);

(statearr_26347[(12)] = inst_26295__$1);

(statearr_26347[(9)] = inst_26297__$1);

return statearr_26347;
})();
if(inst_26298){
var statearr_26348_26371 = state_26324__$1;
(statearr_26348_26371[(1)] = (9));

} else {
var statearr_26349_26372 = state_26324__$1;
(statearr_26349_26372[(1)] = (10));

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
});})(c__24184__auto___26354,out))
;
return ((function (switch__24096__auto__,c__24184__auto___26354,out){
return (function() {
var re_com$typeahead$debounce_$_state_machine__24097__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__24097__auto____0 = (function (){
var statearr_26350 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26350[(0)] = re_com$typeahead$debounce_$_state_machine__24097__auto__);

(statearr_26350[(1)] = (1));

return statearr_26350;
});
var re_com$typeahead$debounce_$_state_machine__24097__auto____1 = (function (state_26324){
while(true){
var ret_value__24098__auto__ = (function (){try{while(true){
var result__24099__auto__ = switch__24096__auto__.call(null,state_26324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24099__auto__;
}
break;
}
}catch (e26351){if((e26351 instanceof Object)){
var ex__24100__auto__ = e26351;
var statearr_26352_26373 = state_26324;
(statearr_26352_26373[(5)] = ex__24100__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26351;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26374 = state_26324;
state_26324 = G__26374;
continue;
} else {
return ret_value__24098__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__24097__auto__ = function(state_26324){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__24097__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__24097__auto____1.call(this,state_26324);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$debounce_$_state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__24097__auto____0;
re_com$typeahead$debounce_$_state_machine__24097__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__24097__auto____1;
return re_com$typeahead$debounce_$_state_machine__24097__auto__;
})()
;})(switch__24096__auto__,c__24184__auto___26354,out))
})();
var state__24186__auto__ = (function (){var statearr_26353 = f__24185__auto__.call(null);
(statearr_26353[(6)] = c__24184__auto___26354);

return statearr_26353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24186__auto__);
});})(c__24184__auto___26354,out))
);


return out;
});

//# sourceMappingURL=typeahead.js.map?rel=1535633075543
