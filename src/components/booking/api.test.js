import { seededRandom, fetchAPI, submitAPI } from './api';

describe('seededRandom', () => {
  test('returns a function that produces consistent results for a given seed', () => {
    const seed = 12345;
    const randomGenerator = seededRandom(seed);

    const firstRun = [randomGenerator(), randomGenerator(), randomGenerator()];
    
    const randomGenerator2 = seededRandom(seed);
    const secondRun = [randomGenerator2(), randomGenerator2(), randomGenerator2()];

    expect(firstRun).toEqual(secondRun);
  });

  test('returns different results for different seeds', () => {
    const randomGenerator1 = seededRandom(123);
    const randomGenerator2 = seededRandom(456);

    const result1 = randomGenerator1();
    const result2 = randomGenerator2();

    expect(result1).not.toEqual(result2);
  });
});

describe('fetchAPI', () => {
  test('returns an array of times based on the random generator', () => {
    const date = new Date('2023-11-09');
    const times = fetchAPI(date);

    times.forEach(time => {
      const hour = parseInt(time.split(':')[0]);
      expect(hour).toBeGreaterThanOrEqual(10);
      expect(hour).toBeLessThanOrEqual(21);
      expect(time).toMatch(/^\d{2}:00$/);
    });
  });

  test('returns different arrays for different dates', () => {
    const date1 = new Date('2023-11-09');
    const date2 = new Date('2023-11-10');
    
    const result1 = fetchAPI(date1);
    const result2 = fetchAPI(date2);

    expect(result1).not.toEqual(result2);
  });

});

describe('submitAPI', () => {
  test('returns true for any valid formData', () => {
    const formData = {
      name: 'John Doe',
      date: '2023-11-10',
      time: '12:00',
      guests: 4,
      occasion: 'Birthday',
    };

    const result = submitAPI(formData);
    expect(result).toBe(true);
  });

  test('returns true even with empty formData', () => {
    const formData = {};

    const result = submitAPI(formData);
    expect(result).toBe(true);
  });
});
