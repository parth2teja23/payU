import { Text, TextProps, StyleSheet } from 'react-native';
import { useColorScheme } from './useColorScheme';
import Colors from '@/constants/Colors';

interface PayUTextProps extends TextProps {
  variant?: 'h1' | 'h2' | 'body' | 'small' | 'muted' | 'card';
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
}

export function PayUText({ style, variant = 'body', weight = 'regular', ...props }: PayUTextProps) {
  const colorScheme = useColorScheme() ?? 'light';
  const color = variant === 'muted' ? Colors[colorScheme].muted : Colors[colorScheme].text;

  const getFontFamily = () => {
    if (variant === 'card' || variant === 'h1' || variant === 'h2') {
      switch (weight) {
        case 'bold': return 'PlusJakartaSans_700Bold';
        case 'semibold': return 'PlusJakartaSans_600SemiBold';
        case 'medium': return 'PlusJakartaSans_500Medium';
        default: return 'PlusJakartaSans_400Regular';
      }
    }
    switch (weight) {
      case 'bold': return 'Inter_700Bold';
      case 'semibold': return 'Inter_600SemiBold';
      case 'medium': return 'Inter_500Medium';
      default: return 'Inter_400Regular';
    }
  };

  const fontStyles = {
    h1: { fontSize: 24, lineHeight: 32 },
    h2: { fontSize: 20, lineHeight: 28 },
    body: { fontSize: 16, lineHeight: 24 },
    small: { fontSize: 14, lineHeight: 20 },
    muted: { fontSize: 14, lineHeight: 20 },
    card: { fontSize: 24, lineHeight: 32 },
  };

  return (
    <Text
      style={[
        { color, fontFamily: getFontFamily() },
        fontStyles[variant],
        style,
      ]}
      {...props}
    />
  );
}
