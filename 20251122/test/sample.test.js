const { describe, it, expect } = require('vitest');
const getNextMonthDate = require('../problem/script.js');

describe('getNextMonthDate', () => {
    it('should return the correct date for the next month', () => {
        expect(getNextMonthDate(new Date('2025-11-22'))).toBe('2025-12-22');
    });

    it('should handle month overflow correctly', () => {
        expect(getNextMonthDate(new Date('2025-12-22'))).toBe('2026-01-22');
    });

    it('should handle different days', () => {
        expect(getNextMonthDate(new Date('2024-01-15'))).toBe('2024-02-15');
    });
});
