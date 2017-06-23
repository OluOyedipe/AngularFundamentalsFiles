/**
 * Created by olu on 6/22/17.
 */
'use strict';

eventsApp.directive('repeatX', function ($log) {
    return {
        compile: function (element, attributes) {
            for (var i = 0; i < Number(attributes.repeatX) - 1; i++) {
                element.after(element.clone().attr('repeat-x', 0));
            }
        }
    }
});