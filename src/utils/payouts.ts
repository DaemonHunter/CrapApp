import type { BoxBetType, BoxNumber, HardWayNumber, CandENumber, PointNumber, PassBetType } from '../types/betting';

export const BOX_NUMBER_ODDS: Record<BoxBetType, Partial<Record<BoxNumber, number>>> = {
  Place: {
    '4': 9 / 5,
    '5': 7 / 5,
    '6': 7 / 6,
    '8': 7 / 6,
    '9': 7 / 5,
    '10': 9 / 5,
  },
  Buy: {
    '4': 2,
    '5': 3 / 2,
    '6': 6 / 5,
    '8': 6 / 5,
    '9': 3 / 2,
    '10': 2,
  },
  Lay: {
    '4': 1 / 2,
    '5': 2 / 3,
    '6': 5 / 6,
    '8': 5 / 6,
    '9': 2 / 3,
    '10': 1 / 2,
  },
};

export const HARD_WAY_ODDS: Record<HardWayNumber, number> = {
  '4': 7,
  '6': 9,
  '8': 9,
  '10': 7,
};

export const CANDE_ODDS: Record<CandENumber, number> = {
  '2': 7,
  '3': 7,
  '11': 15,
  '12': 7,
};

export const PASS_LINE_ODDS: Record<PassBetType, Partial<Record<PointNumber, number>>> = {
  Pass: {
    '4': 2,
    '5': 3 / 2,
    '6': 6 / 5,
    '8': 6 / 5,
    '9': 3 / 2,
    '10': 2,
  },
  DONT_Pass: {
    '4': 9 / 5,
    '5': 7 / 5,
    '6': 7 / 6,
    '8': 7 / 6,
    '9': 7 / 5,
    '10': 9 / 5,
  },
};

const BUY_COMMISSION = 0.05;
const LAY_COMMISSION = 0.05;

export function calculateBoxNumberPayout(
  betType: BoxBetType | '',
  boxNumber: BoxNumber | string,
  betAmount: number
): number {
  if (!betType || !boxNumber || isNaN(betAmount) || betAmount <= 0) {
    return 0;
  }

  const odds = BOX_NUMBER_ODDS[betType]?.[boxNumber as BoxNumber];
  if (odds === undefined) {
    return 0;
  }

  const basePayout = betAmount * odds;

  if (betType === 'Buy') {
    return basePayout - basePayout * BUY_COMMISSION;
  }

  if (betType === 'Lay') {
    return basePayout * (1 - LAY_COMMISSION);
  }

  return basePayout;
}

export function calculateHardWayPayout(
  numberHit: HardWayNumber | string,
  betAmount: number
): number {
  if (!numberHit || isNaN(betAmount) || betAmount <= 0) {
    return 0;
  }

  const odds = HARD_WAY_ODDS[numberHit as HardWayNumber];
  if (odds === undefined) {
    return 0;
  }

  return betAmount * odds;
}

export function calculateCandEPayout(
  numberHit: CandENumber | string,
  betAmount: number
): number {
  if (!numberHit || isNaN(betAmount) || betAmount <= 0) {
    return 0;
  }

  const odds = CANDE_ODDS[numberHit as CandENumber];
  if (odds === undefined) {
    return 0;
  }

  return betAmount * odds;
}

export function calculatePassLinePayout(
  betType: PassBetType | '',
  betAmount: number,
  point: PointNumber | string
): number {
  if (!betType || !point || isNaN(betAmount) || betAmount <= 0) {
    return 0;
  }

  const odds = PASS_LINE_ODDS[betType]?.[point as PointNumber];
  if (odds === undefined) {
    return 0;
  }

  return betAmount * odds;
}
