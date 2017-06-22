'use strict';

eventsApp.directive('upvote', function () {
    return {
        replace: true,
        restrict: 'E',
        templateUrl: '/templates/directives/upvote.html',
        scope: {
            upvote: "&",
            downvote: "&",
            count: "="
        }

    }
});