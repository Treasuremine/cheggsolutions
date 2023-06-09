// Import the assert module
import * as assert from 'assert';

// Define a function to test
function add(a: number, b: number): number {
  return a + b;
}

// Write a test case
describe('add function', () => {
  it('should return the sum of two numbers', () => {
    // Arrange
    const x = 2;
    const y = 3;

    // Act
    const result = add(x, y);

    // Assert
    assert.strictEqual(result, 5);
  });
});
