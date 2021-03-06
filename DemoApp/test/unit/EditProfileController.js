'use strict';

describe('EditProfileController', function () {

    var $controllerConstructor, scope, mockGravatarUrlBuilder;

    beforeEach(module('eventsApp'));
    beforeEach(inject(function ($controller, $rootScope) {
        $controllerConstructor = $controller;
        scope = $rootScope.$new();
        mockGravatarUrlBuilder = sinon.stub({buildGravatarUrl: function () {

        }});
    }));

    it('should return a gravatar url when an email is passed', function () {
        $controllerConstructor('EditProfileController', {
            $scope: scope,
            gravatarUrlBuilder: mockGravatarUrlBuilder
        });

        var email = 'joe@joe.com';

        scope.getGravatarUrl(email);
        expect(mockGravatarUrlBuilder.buildGravatarUrl.calledWith(email)).toBe(true);
    })
})