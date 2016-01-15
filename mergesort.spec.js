describe('Merge Sort', function(){
   it('is able to merge two sorted arrays', function(){
      expect( merge([4], [1]) ).toEqual( [1,4] );
      expect( merge([4, 6], [1, 7]) ).toEqual( [1,4,6,7] );
      expect( merge([1, 4, 6, 45], [1, 3, 6, 7, 99]) ).toEqual( [1, 1, 3, 4, 6, 6, 7, 45, 99] );
   });
});

describe('Split Array function', function() {
 it('is able to split an array into two halves', function() {
   expect( split([]) ).toEqual( [] );
   expect( split([1]) ).toEqual( [1] );
   expect( split([3,5]) ).toEqual( [[3],[5]] );
   expect( split([3,5,6,7,8,9,77]) ).toEqual( [[3,5,6], [7,8,9,77]] );
 });
});

describe('mergeSort', function(){
   beforeEach(function(){
       spyOn(window, 'mergeSort').and.callThrough();
   })

   it('handles an empty array', function(){
       expect( mergeSort([]) ).toEqual( [] );
   });

   it('handles an array with one element', function(){
       expect( mergeSort([1]) ).toEqual( [1] );
   });

   it('handles an array with multiple elements', function(){
       expect( mergeSort([0, 1, 5, 2, 8, 4, 3, 7]) ).toEqual( [0, 1, 2, 3, 4, 5, 7, 8] );
   });

   it('handles an array with multiple elements', function(){
       expect( mergeSort([0, 13, 1, 5, 2, 8, 4, 3, 7]) ).toEqual( [0, 1, 2, 3, 4, 5, 7, 8, 13] );
   });

   it("tracks the number of times it was called", function() {
     mergeSort([0, 1, 5, 2, 8, 4, 3, 7, 11]);
       expect(mergeSort.calls.count()).toEqual(17);
   });
});