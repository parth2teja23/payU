import { TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { PayUText } from './PayUTypography';
import { useColorScheme } from './useColorScheme';
import Colors from '@/constants/Colors';

interface PayUButtonProps {
  onPress: () => void;
  title: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  loading?: boolean;
}

export function PayUButton({ onPress, title, variant = 'primary', loading }: PayUButtonProps) {
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];

  const buttonStyle = [
    styles.button,
    variant === 'primary' && { backgroundColor: colors.text },
    variant === 'secondary' && { backgroundColor: colors.card, borderWidth: 0.5, borderColor: colors.border },
    variant === 'ghost' && { backgroundColor: 'transparent' },
  ];

  const textVariant = variant === 'ghost' ? 'muted' : 'body';
  const textColor = variant === 'primary' ? (colorScheme === 'dark' ? '#171717' : '#fafafa') : colors.text;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={buttonStyle}
      disabled={loading}
    >
      {loading ? (
        <ActivityIndicator color={textColor} />
      ) : (
        <PayUText
          weight="medium"
          style={{ color: textColor }}
          variant="small"
        >
          {title}
        </PayUText>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 48,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
});
