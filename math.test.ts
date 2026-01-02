describe('Math function', () => {
    // describeはJestのテストグループ化関数
    // テストコードでのみ使えて、テストクラスに近い役割
    // Math functionというグループを作成する
    // ⬇︎ここにテストケースを書く
    test('add function should add two numbers', () => {
        expect(add(2, 3)).toBe(5);
        expect(add(-1, 1)).toBe(0);
    });
    // ()=>という書き方について
    // 「引数なしの関数」を表す
    // テストコードでは引数なしの関数が多い
    test('multiply function should multiply two numbers', () => {
        expect(multiply(2, 3)).toBe(6);
        expect(multiply(-1, 5)).toBe(-5);
    })


})