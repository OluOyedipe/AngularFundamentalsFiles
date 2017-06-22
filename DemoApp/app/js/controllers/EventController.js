/**
 * Created by oxo0951 on 6/20/17.
 */
'use strict';

eventsApp.controller('EventController', function ($scope, eventData, $log, $anchorScroll) {
    $scope.snippet = '<h2 style="color: red;">hi there</h2>';
    $scope.boolValue = false;
    $scope.myStyle = { color: 'red'};
    $scope.myclass = 'blue';
    $scope.buttonDisabled = true;
    $scope.sortorder = 'name';
    eventData.getEvent()
        .$promise
        .then(function (event) {
            $scope.event = event;
        })
        .catch(function (response) {
            $log.warn(response);
        });

    $scope.upVoteSession = function(session) {
        session.upVoteCount++;
    };

    $scope.downVoteSession = function(session) {
        if (session.upVoteCount > 0) {
            session.upVoteCount--;
        }
    }

    $scope.scrollToSession = function () {
        $anchorScroll();
    }
});