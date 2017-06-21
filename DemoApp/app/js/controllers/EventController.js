/**
 * Created by oxo0951 on 6/20/17.
 */
'use strict';

eventsApp.controller('EventController', function ($scope) {
    $scope.snippet = '<h2 style="color: red;">hi there</h2>';
    $scope.boolValue = false;
    $scope.myStyle = { color: 'red'};
    $scope.myclass = 'blue';
    $scope.buttonDisabled = true;
    $scope.sortorder = 'name';
    $scope.event = {
        name: 'Angular Boot Camp',
        date: 1359781015626,
        time: '10:30 am',
        location: {
            address: 'Google Headquarters',
            city: 'Mountain View',
            province: 'CA'
        },
        imageUrl: '/img/angularjs-logo.png',
        sessions: [
            {
                name: 'Directives Masterclass introductory',
                creatorName: 'Bob Smith',
                duration: 2,
                level: 'Advanced',
                abstract: 'In this session you will learn the ins and outs of directives!',
                upVoteCount: 0
            },
            {
                name: 'Scopes for fun and profit',
                creatorName: 'John Doe',
                duration: 1,
                level: 'Introductory',
                abstract: 'This session will take a closer look as scopes. Learn what they do, have some fun also!',
                upVoteCount: 0
            },
            {
                name: 'Well Behaved Controllers',
                creatorName: 'Jane Doe',
                duration: 4,
                level: 'Intermediate',
                abstract: 'Controllers are the beginning of everything. Learn how to craft controllers that will win the respect of your friends and neighbors.',
                upVoteCount: 0
            }
        ]
    }

    $scope.upVoteSession = function(session) {
        session.upVoteCount++;
    };

    $scope.downVoteSession = function(session) {
        if (session.upVoteCount > 0) {
            session.upVoteCount--;
        }
    }
});