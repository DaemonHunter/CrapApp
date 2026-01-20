import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  runOnJS,
  Easing,
} from 'react-native-reanimated';
import { COLORS, SHADOWS, TYPOGRAPHY } from '../theme';

interface AnimatedNumberProps {
  value: number;
  prefix?: string;
  duration?: number;
}

export function AnimatedNumber({
  value,
  prefix = '$',
  duration = 500,
}: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const animatedValue = useSharedValue(0);

  useEffect(() => {
    animatedValue.value = withTiming(value, {
      duration,
      easing: Easing.out(Easing.cubic),
    });

    // Update display value periodically during animation
    const interval = setInterval(() => {
      runOnJS(setDisplayValue)(Math.floor(animatedValue.value));
    }, 16);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      setDisplayValue(value);
    }, duration + 50);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [value, duration, animatedValue]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: value > 0 ? 1 : 0.5,
  }));

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.number, animatedStyle]}>
        {prefix}{Math.floor(displayValue)}
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  number: {
    color: COLORS.gold,
    fontFamily: TYPOGRAPHY.payout.fontFamily,
    fontSize: 30,
    letterSpacing: 1,
    ...SHADOWS.glow,
  },
});

export default AnimatedNumber;
