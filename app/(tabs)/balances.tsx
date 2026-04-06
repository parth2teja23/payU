import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { PayUText } from '@/components/PayUTypography';
import { PayUCard } from '@/components/PayUCard';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function BalancesScreen() {
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];

  const barData = [
    { value: 60, color: '#fafafa' },
    { value: 80, color: '#fafafa' },
    { value: 40, color: '#fafafa' },
    { value: 70, color: '#fafafa' },
    { value: 90, color: '#fafafa' },
    { value: 50, color: '#fafafa' },
  ];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
           <PayUText variant="h1" weight="bold">Your Balances</PayUText>
           <PayUText variant="body" style={{ color: colors.muted }}>Manage your multi-currency accounts</PayUText>
        </View>

        {/* Available Currencies */}
        <View style={styles.section}>
          <PayUText variant="h2" weight="semibold" style={styles.sectionTitle}>Available Currencies</PayUText>
          <PayUCard variant="outline" style={styles.currencyCard}>
            <View style={styles.currencyInfo}>
              <View style={[styles.flagContainer, { backgroundColor: colors.border }]}>
                <PayUText style={{ fontSize: 24 }}>🇨🇦</PayUText>
              </View>
              <View>
                <PayUText weight="semibold">CAD</PayUText>
                <PayUText variant="small" style={{ color: colors.muted }}>Canadian Dollar</PayUText>
              </View>
            </View>
            <View style={styles.currencyActions}>
               <TouchableOpacity style={styles.iconBtn}>
                 <Ionicons name="ellipsis-vertical" size={20} color={colors.text} />
               </TouchableOpacity>
               <TouchableOpacity style={[styles.enableBtn, { backgroundColor: colors.border }]}>
                 <Ionicons name="checkmark-circle" size={16} color={colors.text} />
                 <PayUText variant="small" weight="medium" style={{ marginLeft: 4 }}>Enable</PayUText>
               </TouchableOpacity>
            </View>
          </PayUCard>
        </View>

        {/* Stats / Chart */}
        <View style={styles.section}>
           <PayUCard variant="outline" style={styles.statsCard}>
              <View style={styles.chartHeader}>
                <View>
                  <PayUText variant="small" style={{ color: colors.muted }}>Current margin: April Spendings</PayUText>
                  <PayUText variant="h2" weight="bold">$350.00 / $640.00</PayUText>
                </View>
              </View>

              <View style={styles.chartContainer}>
                 <View style={styles.yAxis}>
                    <PayUText variant="small" style={styles.yAxisText}>$1000</PayUText>
                    <PayUText variant="small" style={styles.yAxisText}>$500</PayUText>
                    <PayUText variant="small" style={styles.yAxisText}>$200</PayUText>
                    <PayUText variant="small" style={styles.yAxisText}>$0</PayUText>
                 </View>
                 <View style={styles.barsContainer}>
                    {barData.map((bar, index) => (
                      <View key={index} style={styles.barWrapper}>
                        <View style={[styles.barBackground, { backgroundColor: colors.border }]}>
                           <View style={[styles.barFill, { height: `${bar.value}%`, backgroundColor: colors.text }]} />
                        </View>
                      </View>
                    ))}
                 </View>
              </View>
           </PayUCard>
        </View>

        {/* Credit Score */}
        <View style={styles.section}>
          <PayUCard variant="outline" style={styles.scoreCard}>
             <View style={styles.scoreCircle}>
                <PayUText variant="h1" weight="bold">660</PayUText>
                <PayUText variant="small" style={{ color: colors.muted }}>Credit Score</PayUText>
             </View>
             <View style={styles.scoreInfo}>
               <PayUText weight="medium">Your Credit Score is average</PayUText>
               <PayUText variant="small" style={{ color: colors.muted }}>Last Check on 21 Apr</PayUText>
             </View>
          </PayUCard>
        </View>
      </ScrollView>

      {/* FAB */}
      <TouchableOpacity style={[styles.fab, { backgroundColor: colors.text }]}>
        <Ionicons name="add" size={32} color={colors.background} />
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
    marginBottom: 32,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    marginBottom: 16,
  },
  currencyCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  currencyInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  flagContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  currencyActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconBtn: {
    padding: 4,
  },
  enableBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  statsCard: {
    padding: 20,
  },
  chartHeader: {
    marginBottom: 24,
  },
  chartContainer: {
    flexDirection: 'row',
    height: 150,
  },
  yAxis: {
    justifyContent: 'space-between',
    paddingRight: 12,
    paddingVertical: 4,
  },
  yAxisText: {
    fontSize: 10,
    color: '#a1a1a1',
  },
  barsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  barWrapper: {
    width: 12,
    height: '100%',
    justifyContent: 'flex-end',
  },
  barBackground: {
    width: '100%',
    height: '100%',
    borderRadius: 6,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  barFill: {
    width: '100%',
    borderRadius: 6,
  },
  scoreCard: {
    alignItems: 'center',
    padding: 24,
  },
  scoreCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 8,
    borderColor: '#3BB9A1', // Example score color
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  scoreInfo: {
    alignItems: 'center',
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
