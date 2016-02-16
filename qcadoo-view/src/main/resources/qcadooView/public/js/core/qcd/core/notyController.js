/*
 * ***************************************************************************
 * Copyright (c) 2010 Qcadoo Limited
 * Project: Qcadoo Framework
 * Version: 1.4
 *
 * This file is part of Qcadoo.
 *
 * Qcadoo is free software; you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation; either version 3 of the License,
 * or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty
 * of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
 * ***************************************************************************
 */
var QCD = QCD || {};

QCD.Notifications = function () {
    "use strict";

    if (!(this instanceof QCD.Notifications)) {
        return new QCD.Notifications();
    }
	
	this.getNotifications = function () {

		var notifications = function () {
    		$.get('/rest/alert', function(data) {
    		if(data instanceof Array){

    	    var audio = new Audio('/qcadooView/public/alarm.mp3');
        		for(var k in data) {
        			var n = noty(
                		{
                    		layout: 'top',
                        	theme: 'relax', // or 'relax'
                        	type: data[k].type,
                        	text: data[k].message,
                        	dismissQueue: true, // If you want to use queue feature set this true
                        	template: '<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',
                        	animation: {
                        		open: 'animated fadeInDown', // Animate.css class names
                           	 	close: 'animated fadeOutUp', // Animate.css class names
                            	easing: 'swing', // unavailable - no need
                            	speed: 500 // unavailable - no need
                        	},
                        	timeout: false, // delay for closing event. Set false for sticky notifications
                        	force: false, // adds notification to the beginning of queue when set to true
                        	modal: false,
                        	maxVisible: 3, // you can set max visible notification for dismissQueue true option,
                        	killer: false, // for close all notifications before show
                        	closeWith: ['button'], // ['click', 'button', 'hover', 'backdrop'] // backdrop click will close all notifications
        					buttons: false // an array of buttons
                    	});
                    	if(data[k].sound){
                    		audio.play();
                    	}
        		}

        		}
        	});
        	setTimeout(notifications,900000);
		}
	notifications();
	};

};
