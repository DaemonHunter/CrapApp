import { StyleSheet } from 'react-native';
import { COLORS, SPACING, TYPOGRAPHY, SIZES } from '../theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.background,
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: SPACING.md,
    width: '100%',
  },
  heading: {
    color: COLORS.text,
    fontFamily: TYPOGRAPHY.heading.fontFamily,
    fontSize: TYPOGRAPHY.heading.fontSize,
    letterSpacing: TYPOGRAPHY.heading.letterSpacing,
    marginVertical: SPACING.xl,
  },
  label: {
    color: COLORS.text,
    fontFamily: TYPOGRAPHY.label.fontFamily,
    fontSize: TYPOGRAPHY.label.fontSize,
    marginVertical: SPACING.md,
  },
  payout: {
    color: COLORS.text,
    fontFamily: TYPOGRAPHY.label.fontFamily,
    fontSize: TYPOGRAPHY.label.fontSize,
    marginTop: SPACING.xl,
    textAlign: 'center',
  },
  welcomeText: {
    color: COLORS.textSecondary,
    fontFamily: TYPOGRAPHY.body.fontFamily,
    fontSize: TYPOGRAPHY.body.fontSize,
    textAlign: 'center',
    marginTop: SPACING.md,
    paddingHorizontal: SPACING.lg,
  },
  title: {
    color: COLORS.gold,
    fontFamily: TYPOGRAPHY.heading.fontFamily,
    fontSize: 28,
    letterSpacing: 1,
    marginBottom: SPACING.md,
    marginTop: SPACING.xl,
  },
});
