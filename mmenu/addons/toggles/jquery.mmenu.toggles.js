/*
 * jQuery mmenu toggles add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(t){var e="mmenu",c="toggles";t[e].addons[c]={setup:function(){var s=this;this.opts[c],this.conf[c];a=t[e].glbl,this.bind("initPanels:after",function(e){this.__refactorClass(e.find("input"),this.conf.classNames[c].toggle,n.toggle),this.__refactorClass(e.find("input"),this.conf.classNames[c].check,n.check),e.find("input."+n.toggle+", input."+n.check).each(function(){var e=t(this),c=e.closest("li"),i=e.hasClass(n.toggle)?"toggle":"check",a=e.attr("id")||s.__getUniqueId();c.children('label[for="'+a+'"]').length||(e.attr("id",a),c.prepend(e),t('<label for="'+a+'" class="'+n[i]+'"></label>').insertBefore(c.children("a, span").last()))})})},add:function(){n=t[e]._c,s=t[e]._d,i=t[e]._e,n.add("toggle check")},clickAnchor:function(t,e){}},t[e].configuration.classNames[c]={toggle:"Toggle",check:"Check"};var n,s,i,a}(jQuery);