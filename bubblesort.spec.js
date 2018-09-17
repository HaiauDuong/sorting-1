describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
});

describe('Bubble Sort', function(){
	it('handles a single item', function(){
		expect( bubbleSort([0]) ).toEqual( [0] );
	});
});

describe('Bubble Sort', function(){
	it('handles many items', function(){
		expect( bubbleSort([15, 7, 4, 1, 11, 0]) ).toEqual( [0, 1, 4, 7, 11, 15] );
	});
});

describe('Bubble Sort', function(){
	it('handles many items', function(){
		expect( bubbleSort([15, 7, 4, 7, 11, 0]) ).toEqual( [0, 4, 7, 7, 11, 15] );
	});
});

beforeAll(function () {
  spyOn(bubbleSort, 'swap').and.callThrough(); // replace existing `tootsiepop['lick']` method
});
it('getting to the center of tootsiepop involves exactly three licks', function () {
  bubbleSort([15, 7, 4, 1, 11, 0]).swap();
  expect(bubbleSort([15, 7, 4, 1, 11, 0]).swap().calls.count()).toEqual(12);
});