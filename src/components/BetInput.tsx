import React, { useState } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { COLORS, SPACING, TYPOGRAPHY, SIZES } from '../theme';

interface BetInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

export function BetInput({
  value,
  onChange,
  placeholder = 'Enter Bet Amount',
}: BetInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const borderWidth = useSharedValue(1);
  const borderOpacity = useSharedValue(0.5);

  const animatedContainerStyle = useAnimatedStyle(() => ({
    borderWidth: borderWidth.value,
    borderColor: isFocused ? COLORS.gold : COLORS.border,
    opacity: borderOpacity.value,
  }));

  const handleFocus = () => {
    setIsFocused(true);
    borderWidth.value = withTiming(2, { duration: 200 });
    borderOpacity.value = withTiming(1, { duration: 200 });
  };

  const handleBlur = () => {
    setIsFocused(false);
    borderWidth.value = withTiming(1, { duration: 200 });
    borderOpacity.value = withTiming(0.5, { duration: 200 });
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.inputContainer, animatedContainerStyle]}>
        <AnimatedTextInput
          textAlign="center"
          placeholder={placeholder}
          placeholderTextColor={COLORS.textMuted}
          keyboardType="numeric"
          value={value}
          onChangeText={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={styles.input}
          selectionColor={COLORS.gold}
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginVertical: SPACING.md,
  },
  inputContainer: {
    width: '80%',
    backgroundColor: COLORS.backgroundSecondary,
    borderRadius: SIZES.borderRadius,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  input: {
    color: COLORS.gold,
    fontFamily: TYPOGRAPHY.input.fontFamily,
    fontSize: TYPOGRAPHY.input.fontSize,
    padding: SPACING.lg,
    textAlign: 'center',
  },
});

export default BetInput;
