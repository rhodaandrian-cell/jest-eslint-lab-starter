const { capitalizeWords, filterActiveUsers, logAction } = require('../index');

describe('Utility Library Tests', () => {

  // Tests for capitalizeWords
  describe('capitalizeWords', () => {
    test('capitalizes each word in a normal sentence', () => {
      expect(capitalizeWords('hello world')).toBe('Hello World');
      expect(capitalizeWords('this is a test')).toBe('This Is A Test');
    });

    test('returns empty string if input is empty', () => {
      expect(capitalizeWords('')).toBe('');
    });

    test('capitalizes single word', () => {
      expect(capitalizeWords('javascript')).toBe('Javascript');
    });

    test('handles strings with special characters', () => {
      expect(capitalizeWords('hello-world')).toBe('Hello-World');
      expect(capitalizeWords('hello_world')).toBe('Hello_World');
    });
  });

  // Tests for filterActiveUsers
  describe('filterActiveUsers', () => {
    const users = [
      { name: 'Alice', isActive: true },
      { name: 'Bob', isActive: false },
      { name: 'Charlie', isActive: true },
    ];

    test('returns only active users', () => {
      expect(filterActiveUsers(users)).toEqual([
        { name: 'Alice', isActive: true },
        { name: 'Charlie', isActive: true }
      ]);
    });

    test('returns empty array if no active users', () => {
      const inactiveUsers = [
        { name: 'Bob', isActive: false },
        { name: 'Dan', isActive: false },
      ];
      expect(filterActiveUsers(inactiveUsers)).toEqual([]);
    });

    test('returns empty array if input is empty', () => {
      expect(filterActiveUsers([])).toEqual([]);
    });
  });

  // Tests for logAction
  describe('logAction', () => {
    test('logs action with username correctly', () => {
      const log = logAction('login', 'Alice');
      expect(log).toMatch(/^User Alice performed login at/);
    });

    test('handles empty strings', () => {
      const log = logAction('', '');
      expect(log).toMatch(/^User  performed  at/);
    });

    test('handles missing parameters gracefully', () => {
      const log = logAction();
      expect(log).toMatch(/^User undefined performed undefined at/);
    });
  });

});
