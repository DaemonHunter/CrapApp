import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { COLORS, SHADOWS, SIZES, SPACING } from '../theme';

type CardVariant = 'default' | 'highlighted' | 'outlined';

interface CardProps {
  children: React.ReactNode;
  variant?: CardVariant;
  style?: ViewStyle;
  animate?: boolean;
  delay?: number;
}

export function Card({
  children,
  variant = 'default',
  style,
  animate = false,
  delay = 0,
}: CardProps) {
  const cardStyle = [
    styles.card,
    variant === 'highlighted' && styles.highlighted,
    variant === 'outlined' && styles.outlined,
    style,
  ];

  if (animate) {
    return (
      <Animated.View
        entering={FadeInDown.delay(delay).duration(400).springify()}
        style={cardStyle}
      >
        {children}
      </Animated.View>
    );
  }

  return <View style={cardStyle}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.backgroundCard,
    borderRadius: SIZES.borderRadiusLarge,
    padding: SPACING.lg,
    marginVertical: SPACING.sm,
    marginHorizontal: SPACING.md,
    ...SHADOWS.card,
  },
  highlighted: {
    borderWidth: 2,
    borderColor: COLORS.gold,
    ...SHADOWS.glow,
  },
  outlined: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
});

export default Card;
