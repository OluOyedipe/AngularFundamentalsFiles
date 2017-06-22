/**
 * Created by olu on 6/21/17.
 */
'use strict';

eventsApp.controller('EventListController', function ($scope, $location, eventData) {
    $scope.events = eventData.getAllEvents();
});
