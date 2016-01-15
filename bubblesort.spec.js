describe('Bubble Sort', function(){
   beforeEach(function(){
       spyOn(window, 'bubbleSort').and.callThrough();
   })

   it('handles an empty array', function(){
       expect( bubbleSort([]) ).toEqual( [] );
   });

   it('handles an array with one element', function(){
       expect( bubbleSort([1]) ).toEqual( [1] );
   });

   it('handles an array with multiple elements', function(){
       expect( bubbleSort([0, 1, 5, 2, 8, 4, 3, 7]) ).toEqual( [0, 1, 2, 3, 4, 5, 7, 8] );
   });

   xit("tracks the number of times it was called", function() {
       bubbleSort([0, 1, 5, 2, 8, 4, 3, 7])
       expect(bubbleSort.swap.calls.count()).toEqual(3);
   });
});