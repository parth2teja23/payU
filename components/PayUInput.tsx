import { TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import { PayUText } from './PayUTypography';
import { useColorScheme } from './useColorScheme';
import Colors from '@/constants/Colors';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

interface PayUInputProps {
  label: string;
  placeholder: string;
  secureTextEntry?: boolean;
  value: string;
  onChangeText: (text: string) => void;
}

export function PayUInput({ label, placeholder, secureTextEntry, value, onChangeText }: PayUInputProps) {
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <PayUText variant="small" weight="medium" style={styles.label}>
        {label}
      </PayUText>
      <View style={[styles.inputContainer, { backgroundColor: colors.inputBackground, borderColor: colors.border }]}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={colors.muted}
          secureTextEntry={secureTextEntry && !showPassword}
          style={[styles.input, { color: colors.text }]}
          value={value}
          onChangeText={onChangeText}
        />
        {secureTextEntry && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.iconButton}>
            <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={20} color={colors.muted} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    marginBottom: 8,
  },
  inputContainer: {
    height: 48,
    borderRadius: 8,
    borderWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 16,
  },
  iconButton: {
    padding: 8,
  },
});
