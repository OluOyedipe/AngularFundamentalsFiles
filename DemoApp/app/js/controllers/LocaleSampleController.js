/**
 * Created by oxo0951 on 6/21/17.
 */
'use strict';

eventsApp.controller('LocaleSampleController', function LocaleSampleController($scope, $locale) {

    $scope.myDate = Date.now();
    $scope.myFormat = $locale.DATETIME_FORMATS.shortDate;
});

