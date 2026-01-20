export type BoxNumber = '4' | '5' | '6' | '8' | '9' | '10';
export type HardWayNumber = '4' | '6' | '8' | '10';
export type CandENumber = '2' | '3' | '11' | '12';
export type PointNumber = '4' | '5' | '6' | '8' | '9' | '10';

export type BoxBetType = 'Place' | 'Buy' | 'Lay';
export type PassBetType = 'Pass' | 'DONT_Pass';

export interface PayoutResult {
  amount: number;
  isValid: boolean;
}

export interface BetState {
  betAmount: string;
  selectedNumber: string;
  payout: number;
}

export interface BoxNumberBetState extends BetState {
  betType: BoxBetType | '';
}

export interface PassLineBetState extends BetState {
  betType: PassBetType | '';
  point: PointNumber | '';
}
