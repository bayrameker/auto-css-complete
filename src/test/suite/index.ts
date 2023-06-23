import * as assert from 'assert';

// Testleriniz için describe ve it bloklarını kullanabilirsiniz
describe('Örnek Test Suite', () => {
  it('Test 1: Birinci Test', () => {
    // Testin içeriği
    const result = 5 + 10;
    assert.strictEqual(result, 15);
  });

  it('Test 2: İkinci Test', () => {
    // Testin içeriği
    const str = 'Merhaba Dünya';
    assert.strictEqual(str.length, 13);
  });

  // Başka testler buraya eklenebilir...
});
