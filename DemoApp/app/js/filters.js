'use strict';

eventsApp.filter('durationMapper', function () {
    return function(input) {
        switch (input) {
            case 1:
                return '30 mins';
            case 2:
                return '1 hr';
            case 3:
                return '1 hr 30 mins';
            case 4:
                return '2 hrs';
        }
    }
});
