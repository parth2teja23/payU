import { View, StyleSheet, ViewProps } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useColorScheme } from './useColorScheme';
import Colors from '@/constants/Colors';

interface PayUCardProps extends ViewProps {
  gradient?: string[];
  variant?: 'outline' | 'flat';
}

export function PayUCard({ children, style, gradient, variant = 'flat', ...props }: PayUCardProps) {
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];

  if (gradient) {
    return (
      <LinearGradient
        colors={gradient as any}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.card, styles.gradientCard, style]}
        {...props}
      >
        {children}
      </LinearGradient>
    );
  }

  return (
    <View
      style={[
        styles.card,
        { backgroundColor: colors.card, borderColor: colors.border },
        variant === 'outline' && { borderWidth: 0.5 },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    padding: 16,
    overflow: 'hidden',
  },
  gradientCard: {
    // shadow logic if needed
  },
});
