import { render, screen } from '@testing-library/react';
import LeaderboardItem from './LeaderboardItem.js';

describe('leaderboard item', () => {
  test('should exist when props operator="XL" and number="50000"', () => {
    render(<LeaderboardItem operator="XL" number="50000" />);
    const operatorElement = screen.getByText(/XL/i);
    const numberElement = screen.getByText(/50000/i);
    expect(operatorElement).toBeInTheDocument();
    expect(numberElement).toBeInTheDocument();
  });

  test('should exist when props operator="AS" and number="10000"', () => {
    render(<LeaderboardItem operator="AS" number="10000" />);
    const operatorElement = screen.getByText(/AS/i);
    const numberElement = screen.getByText(/10000/i);
    expect(operatorElement).toBeInTheDocument();
    expect(numberElement).toBeInTheDocument();
  });

  test('should have the same parent', () => {
    render(<LeaderboardItem operator="XL" number="50000" />);
    const operatorElement = screen.getByText(/XL/i);
    const numberElement = screen.getByText(/50000/i);
    expect(operatorElement).toBeInTheDocument();
    expect(numberElement).toBeInTheDocument();
    expect(operatorElement.parentElement).toEqual(numberElement.parentElement);
  });
})
