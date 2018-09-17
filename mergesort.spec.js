describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here 
    expect( split([1, 2, 3, 4, 5]) ).toEqual( [[1, 2], [3, 4, 5]] );
  });
 });


describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect( merge([1, 2], [3, 4, 5]) ).toEqual( [1, 2, 3, 4, 5] );
  });
});

describe('Merge Sort function', function(){
  it('is able to merge an array into a sorted array', function(){
    expect( mergeSort([2, 1, 4, 3]) ).toEqual( [1, 2, 3, 4] );
  });
});