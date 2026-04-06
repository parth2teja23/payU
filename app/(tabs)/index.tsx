import { View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { PayUText } from '@/components/PayUTypography';
import { PayUCard } from '@/components/PayUCard';
import { PayUTabs } from '@/components/PayUTabs';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];
  const [expenseType, setExpenseType] = useState('Weekly');

  const expenses = [
    { id: '1', category: 'FOOD', status: 'Lesser than last week', amount: '$1000', icon: 'fast-food' },
    { id: '2', category: 'TRAVEL', status: 'More than last week', amount: '$4000', icon: 'airplane' },
  ];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logoRow}>
            <View style={[styles.logoContainer, { backgroundColor: colors.text }]}>
              <PayUText weight="bold" style={{ color: colors.background, fontSize: 14 }}>P</PayUText>
            </View>
            <PayUText weight="semibold" style={styles.appName}>PayU</PayUText>
          </View>
          <View style={styles.headerActions}>
            <TouchableOpacity style={styles.headerButton}>
              <Ionicons name="search" size={20} color={colors.text} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerButton}>
              <Ionicons name="notifications-outline" size={20} color={colors.text} />
              <View style={styles.badge}><PayUText style={styles.badgeText}>2</PayUText></View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Welcome */}
        <View style={styles.welcomeSection}>
          <PayUText variant="h2" weight="semibold">Hey, Alex</PayUText>
          <PayUText variant="body" style={{ color: colors.muted }}>Add your yesterday's expense</PayUText>
        </View>

        {/* Credit Card */}
        <View style={styles.cardContainer}>
          <PayUCard 
            gradient={['#FED4B4', '#3BB9A1']} 
            style={styles.creditCard}
          >
            <View style={styles.cardHeader}>
              <PayUText weight="bold" style={styles.cardBankName}>ADRBank</PayUText>
              <Ionicons name="radio-outline" size={24} color="white" />
            </View>
            <PayUText weight="bold" style={styles.cardNumber}>8763 1111 2222 0329</PayUText>
            <View style={styles.cardFooter}>
              <View>
                <PayUText style={styles.cardLabel}>Card Holder Name</PayUText>
                <PayUText weight="bold" style={styles.cardValue}>ALEX</PayUText>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <PayUText style={styles.cardLabel}>Expired Date</PayUText>
                <PayUText weight="bold" style={styles.cardValue}>10/28</PayUText>
              </View>
            </View>
          </PayUCard>
        </View>

        {/* Expenses Section */}
        <View style={styles.expensesSection}>
          <View style={styles.sectionHeader}>
            <PayUText variant="h2" weight="semibold">Your expenses</PayUText>
          </View>
          
          <PayUTabs 
            options={['Weekly', 'Monthly']} 
            selectedOption={expenseType} 
            onSelect={setExpenseType} 
          />

          <View style={styles.expensesList}>
            {expenses.map((expense) => (
              <PayUCard key={expense.id} variant="outline" style={styles.expenseItem}>
                <View style={styles.expenseInfo}>
                  <View style={[styles.expenseIconContainer, { backgroundColor: colors.border }]}>
                    <Ionicons name={expense.icon as any} size={20} color={colors.text} />
                  </View>
                  <View>
                    <PayUText weight="medium">{expense.category}</PayUText>
                    <PayUText variant="small" style={{ color: colors.muted }}>{expense.status}</PayUText>
                  </View>
                </View>
                <View style={styles.expenseRight}>
                   <TouchableOpacity>
                     <Ionicons name="star-outline" size={20} color={colors.muted} />
                   </TouchableOpacity>
                   <View style={[styles.amountTag, { backgroundColor: colors.border }]}>
                     <PayUText weight="medium" variant="small">{expense.amount}</PayUText>
                   </View>
                </View>
              </PayUCard>
            ))}
          </View>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
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
  badge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: '#d53436',
    width: 18,
    height: 18,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#0a0a0a',
  },
  badgeText: {
    color: '#0a0a0a',
    fontSize: 10,
    fontWeight: 'bold',
  },
  welcomeSection: {
    marginBottom: 24,
  },
  cardContainer: {
    marginBottom: 32,
    alignItems: 'center',
  },
  creditCard: {
    width: '100%',
    height: 200,
    justifyContent: 'space-between',
    padding: 24,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardBankName: {
    color: 'white',
    fontSize: 18,
  },
  cardNumber: {
    color: 'white',
    fontSize: 22,
    letterSpacing: 2,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  cardLabel: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 10,
    marginBottom: 4,
  },
  cardValue: {
    color: 'white',
    fontSize: 14,
  },
  expensesSection: {
    flex: 1,
  },
  sectionHeader: {
    marginBottom: 16,
  },
  expensesList: {
    marginTop: 20,
    gap: 12,
  },
  expenseItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
  },
  expenseInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  expenseIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  expenseRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  amountTag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
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
