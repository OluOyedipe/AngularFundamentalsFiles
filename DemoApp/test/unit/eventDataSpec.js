/**
 * Created by oxo0951 on 6/23/17.
 */
'use strict';

describe('eventData', function () {
   beforeEach(module('eventsApp'));

   it('should issue GET request to /data/event/11 when getEvent is called and id is 11',
       inject(function (eventData, $httpBackend) {
        $httpBackend.expectGET('/data/event/11');
        $httpBackend.when('GET', '/data/event/11').respond({});
        eventData.getEvent(11);
        $httpBackend.flush();

        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
   }));

   it('should return the correct data when getEvent is called',
       inject(function (eventData, $httpBackend) {
           $httpBackend.when('GET', '/data/event/11').respond({name: 'My Event'});
           var result = eventData.getEvent(11);
           $httpBackend.flush();

           expect(result.name).toBe('My Event');
       }
       ));

   it('should have set the id of the event to 999', inject(function (eventData, $httpBackend) {
       $httpBackend.when('POST', '/data/event/999').respond({});
       var event = {name: 'my Event'};
       eventData.save(event);
       $httpBackend.flush();
       expect(event.id).toBe(999);
   }));

   it('should issue a GET request to /data/event when getAllEvents is called', inject(function (eventData, $httpBackend) {
       $httpBackend.when('GET', '/data/event').respond([{}]);
       eventData.getAllEvents();
       $httpBackend.flush();
       $httpBackend.verifyNoOutstandingRequest();
   }))



});