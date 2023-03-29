function add(x: number, y: number): number {
  return x + y;
}

describe('add', () => {
  it('두 수의 합을 리턴한다', () => {
    expect(add(1, 2)).toBe(3);
  });
});
