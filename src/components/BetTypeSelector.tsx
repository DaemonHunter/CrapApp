import React from 'react';
import { View, Text, Pressable, StyleSheet, Keyboard } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, SPACING, TYPOGRAPHY, SIZES, SHADOWS, GRADIENTS } from '../theme';

interface BetOption {
  value: string;
  label: string;
}

interface BetTypeSelectorProps {
  options: BetOption[];
  selectedType: string;
  onSelect: (type: string) => void;
  label?: string;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

function BetTypeButton({
  option,
  isSelected,
  onPress,
}: {
  option: BetOption;
  isSelected: boolean;
  onPress: () => void;
}) {
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
      style={animatedStyle}
    >
      {isSelected ? (
        <LinearGradient
          colors={GRADIENTS.greenButton}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[styles.button, styles.buttonActive]}
        >
          <Text style={styles.buttonText}>{option.label}</Text>
        </LinearGradient>
      ) : (
        <View style={styles.button}>
          <Text style={styles.buttonText}>{option.label}</Text>
        </View>
      )}
    </AnimatedPressable>
  );
}

export function BetTypeSelector({
  options,
  selectedType,
  onSelect,
  label = 'Bet Type:',
}: BetTypeSelectorProps) {
  const handlePress = (type: string) => {
    onSelect(type);
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.buttonContainer}>
        {options.map((option) => (
          <BetTypeButton
            key={option.value}
            option={option}
            isSelected={selectedType === option.value}
            onPress={() => handlePress(option.value)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: SPACING.md,
  },
  label: {
    color: COLORS.text,
    fontFamily: TYPOGRAPHY.label.fontFamily,
    fontSize: TYPOGRAPHY.label.fontSize,
    marginVertical: SPACING.md,
  },
  buttonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: SPACING.sm,
  },
  button: {
    alignItems: 'center',
    backgroundColor: COLORS.disabled,
    borderRadius: SIZES.borderRadius,
    height: SIZES.betButton.height,
    justifyContent: 'center',
    marginHorizontal: SPACING.xs,
    padding: SPACING.md,
    width: SIZES.betButton.width,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  buttonActive: {
    borderWidth: 0,
    ...SHADOWS.button,
  },
  buttonText: {
    color: COLORS.white,
    fontFamily: TYPOGRAPHY.button.fontFamily,
    fontSize: TYPOGRAPHY.button.fontSize,
    textAlign: 'center',
  },
});

export default BetTypeSelector;
