/*
 * jQuery mmenu WordPress wrapper
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(s){var e="mmenu",n="wordpress";s[e].wrappers[n]=function(){this.conf.classNames.selected="current-menu-item",s("#wpadminbar").css("position","fixed").addClass("mm-slideout")}}(jQuery);