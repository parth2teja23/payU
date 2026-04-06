import { View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { PayUText } from '@/components/PayUTypography';
import { PayUCard } from '@/components/PayUCard';
import { PayUTabs } from '@/components/PayUTabs';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];
  const [profileTab, setProfileTab] = useState('Preview');
  const router = useRouter();

  const handleLogout = () => {
    router.replace('/(auth)');
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header (Same as Home but with Profile Title) */}
        <View style={styles.header}>
          <View style={styles.logoRow}>
            <View style={[styles.logoContainer, { backgroundColor: colors.text }]}>
              <PayUText weight="bold" style={{ color: colors.background, fontSize: 14 }}>P</PayUText>
            </View>
            <PayUText weight="semibold" style={styles.appName}>Alex yu</PayUText>
          </View>
          <View style={styles.headerActions}>
            <TouchableOpacity style={styles.headerButton}>
              <Ionicons name="settings-outline" size={20} color={colors.text} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.tabsContainer}>
          <PayUTabs 
            options={['Preview', 'Edit']} 
            selectedOption={profileTab} 
            onSelect={setProfileTab} 
          />
        </View>

        {profileTab === 'Preview' ? (
          <View style={styles.infoSection}>
            <View style={styles.infoRow}>
               <PayUText variant="body" style={{ color: colors.muted }}>Total spendings:</PayUText>
               <PayUText variant="h2" weight="bold"> $2000</PayUText>
            </View>
            <View style={styles.infoRow}>
               <PayUText variant="body" style={{ color: colors.muted }}>Email :</PayUText>
               <PayUText variant="h2" weight="bold"> alex@gmail.com</PayUText>
            </View>
            <View style={styles.infoRow}>
               <PayUText variant="body" style={{ color: colors.muted }}>Balance :</PayUText>
               <PayUText variant="h2" weight="bold"> $20000</PayUText>
            </View>

            <View style={styles.actionsContainer}>
               <TouchableOpacity 
                 style={[styles.logoutBtn, { borderColor: '#d53436' }]} 
                 onPress={handleLogout}
               >
                 <Ionicons name="log-out-outline" size={20} color="#d53436" />
                 <PayUText style={{ color: '#d53436', marginLeft: 8 }} weight="medium">Logout</PayUText>
               </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={styles.editSection}>
             <PayUCard variant="outline" style={styles.editCard}>
                {/* Form fields can go here, similar to Sign Up */}
                <PayUText style={{ textAlign: 'center', marginVertical: 20 }}>Edit Profile Form</PayUText>
             </PayUCard>
          </View>
        )}
      </ScrollView>

      {/* FAB */}
      <TouchableOpacity style={[styles.fab, { backgroundColor: colors.text }]}>
        <Ionicons name="camera-outline" size={32} color={colors.background} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 100,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  logoContainer: {
    width: 32,
    height: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appName: {
    fontSize: 16,
  },
  headerActions: {
    flexDirection: 'row',
    gap: 12,
  },
  headerButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabsContainer: {
    marginBottom: 32,
  },
  infoSection: {
    gap: 24,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionsContainer: {
    marginTop: 40,
  },
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
  },
  editSection: {
    flex: 1,
  },
  editCard: {
    padding: 24,
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});
