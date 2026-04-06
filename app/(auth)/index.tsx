import { View, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Image } from 'react-native';
import { useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import { PayUText } from '@/components/PayUTypography';
import { PayUInput } from '@/components/PayUInput';
import { PayUButton } from '@/components/PayUButton';
import { PayUTabs } from '@/components/PayUTabs';
import { PayUCard } from '@/components/PayUCard';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';

export default function AuthScreen() {
  const [authType, setAuthType] = useState('Sign In');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];

  const handleAuth = () => {
    // Navigate to tabs on success
    router.replace('/(tabs)');
  };

  return (
    <LinearGradient
      colors={colorScheme === 'dark' ? ['#171717', '#0a0a0a'] : ['#f5f5f5', '#ffffff']}
      style={styles.container}
    >
      <Stack.Screen options={{ headerShown: false }} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.header}>
            <View style={[styles.logoContainer, { backgroundColor: colors.text }]}>
              <PayUText weight="bold" style={{ color: colors.background }}>P</PayUText>
            </View>
            <PayUText variant="h1" weight="bold" style={styles.title}>
              Welcome to PayU
            </PayUText>
            <PayUText variant="body" style={styles.subtitle}>
              Send money globally with the real exchange rate
            </PayUText>
          </View>

          <PayUCard variant="outline" style={styles.card}>
            <PayUText variant="h2" weight="medium" style={styles.cardTitle}>
              Get started
            </PayUText>
            <PayUText variant="small" style={styles.cardSubtitle}>
              Sign in to your account or create a new one
            </PayUText>

            <View style={styles.tabsContainer}>
              <PayUTabs
                options={['Sign In', 'Sign Up']}
                selectedOption={authType}
                onSelect={setAuthType}
              />
            </View>

            <View style={styles.form}>
              {authType === 'Sign Up' && (
                <PayUInput
                  label="Full Name"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChangeText={setFullName}
                />
              )}
              <PayUInput
                label="Email"
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
              />
              <PayUInput
                label="Password"
                placeholder={authType === 'Sign In' ? "Enter your password" : "Create a password"}
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
              {authType === 'Sign Up' && (
                <PayUInput
                  label="Confirm Password"
                  placeholder="Confirm your password"
                  secureTextEntry
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                />
              )}

              {authType === 'Sign In' && (
                <PayUButton
                  title="Forgot password?"
                  variant="ghost"
                  onPress={() => {}}
                  style={styles.forgotButton}
                />
              )}

              <View style={styles.submitContainer}>
                <PayUButton
                  title={authType === 'Sign In' ? "Sign In" : "Create Account"}
                  onPress={handleAuth}
                />
              </View>
            </View>
          </PayUCard>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 24,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoContainer: {
    width: 64,
    height: 64,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  title: {
    marginBottom: 8,
  },
  subtitle: {
    textAlign: 'center',
    opacity: 0.7,
  },
  card: {
    width: '100%',
  },
  cardTitle: {
    marginBottom: 4,
  },
  cardSubtitle: {
    marginBottom: 24,
    opacity: 0.6,
  },
  tabsContainer: {
    marginBottom: 24,
  },
  form: {
    width: '100%',
  },
  forgotButton: {
    alignSelf: 'flex-end',
    marginBottom: 16,
  },
  submitContainer: {
    marginTop: 8,
  },
});
