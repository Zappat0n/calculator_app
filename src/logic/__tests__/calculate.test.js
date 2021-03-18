import calculate from '../calculate';

describe('calculate', () => {
  it('Adds two numbers', () => {
    expect(calculate({ next: '1+1' }, '+').next).toBe('2+');
    expect(calculate({ next: '7+4' }, '=').next).toBe('11');
    expect(calculate({ next: '-7+4' }, '-').next).toBe('-3-');
    expect(calculate({ next: '-8+-4' }, '=').next).toBe('-12');
  });

  it('Multiplies two numbers', () => {
    expect(calculate({ next: '1.5*2' }, '+').next).toBe('3+');
    expect(calculate({ next: '4*7.5' }, '=').next).toBe('30');
    expect(calculate({ next: '-7*4' }, '-').next).toBe('-28-');
    expect(calculate({ next: '-8*-4' }, '=').next).toBe('32');
  });

  it('Divides two numbers', () => {
    expect(calculate({ next: '4/2' }, '+').next).toBe('2+');
    expect(calculate({ next: '3/1.5' }, '=').next).toBe('2');
    expect(calculate({ next: '-8/4' }, '-').next).toBe('-2-');
    expect(calculate({ next: '-9/-1.5' }, '=').next).toBe('6');
  });

  it('Subtracts two numbers', () => {
    expect(calculate({ next: '4-2' }, '+').next).toBe('2+');
    expect(calculate({ next: '-3-1.5' }, '=').next).toBe('-4.5');
    expect(calculate({ next: '-8+-4' }, '-').next).toBe('-12-');
    expect(calculate({ next: '-9-1.5' }, '=').next).toBe('-10.5');
  });
});
