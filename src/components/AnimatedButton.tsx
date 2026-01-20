import React from 'react';
import { Pressable, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, SHADOWS, SIZES, SPACING, TYPOGRAPHY, GRADIENTS } from '../theme';

type GradientType = 'gold' | 'green' | 'red';

interface AnimatedButtonProps {
  onPress: () => void;
  label: string;
  gradient?: GradientType;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const gradientColors: Record<GradientType, readonly [string, string]> = {
  gold: GRADIENTS.goldButton,
  green: GRADIENTS.greenButton,
  red: GRADIENTS.redButton,
};

export function AnimatedButton({
  onPress,
  label,
  gradient = 'gold',
  disabled = false,
  style,
  textStyle,
}: AnimatedButtonProps) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => {
    scale.value = withSpring(0.95, { damping: 15, stiffness: 300 });
  };

  const handlePressOut = () => {
    scale.value = withSpring(1, { damping: 15, stiffness: 300 });
  };

  return (
    <AnimatedPressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={disabled}
      style={[animatedStyle, style]}
    >
      <LinearGradient
        colors={disabled ? [COLORS.disabled, COLORS.disabled] : gradientColors[gradient]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.button, disabled && styles.disabled]}
      >
        <Text style={[styles.buttonText, textStyle]}>{label}</Text>
      </LinearGradient>
    </AnimatedPressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.xl,
    borderRadius: SIZES.borderRadius,
    alignItems: 'center',
    justifyContent: 'center',
    ...SHADOWS.button,
  },
  disabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: COLORS.white,
    fontFamily: TYPOGRAPHY.button.fontFamily,
    fontSize: TYPOGRAPHY.button.fontSize,
    letterSpacing: TYPOGRAPHY.button.letterSpacing,
    textAlign: 'center',
  },
});

export default AnimatedButton;
