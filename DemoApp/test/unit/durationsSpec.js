/**
 * Created by oxo0951 on 6/23/17.
 */
describe('durations', function () {
   beforeEach(module('eventsApp'));

   it('should return "30 mins" when passed a 1', inject(function (durationMapperFilter) {
       expect(durationMapperFilter(1)).toEqual('30 mins')
   }));
    it('should return "1 hr" when passed a 2', inject(function (durationMapperFilter) {
        expect(durationMapperFilter(2)).toEqual('1 hr')
    }));
    it('should return "1 hr 30 mins" when passed a 3', inject(function (durationMapperFilter) {
        expect(durationMapperFilter(3)).toEqual('1 hr 30 mins')
    }));
    it('should return "2 hrs" when passed a 4', inject(function (durationMapperFilter) {
        expect(durationMapperFilter(4)).toEqual('2 hrs')
    }));
});