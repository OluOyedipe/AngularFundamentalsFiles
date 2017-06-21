/**
 * Created by olu on 6/20/17.
 */
'use strict';

eventsApp.controller('EditEventController', function($scope, eventData, $log) {
    $scope.saveEvent = function(event, newEventForm) {
        if (newEventForm.$valid) {
            eventData.save(event)
                .$promise
                .then(function (response) {
                    $log.info('success', response);
                })
                .catch(function (response) {
                    $log.warn('failure', response);
                });


        }

    };

    $scope.cancelEdit = function() {
        window.location = "/EventDetails.html";
    };
});