import { View, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { PayUText } from './PayUTypography';
import { useColorScheme } from './useColorScheme';
import Colors from '@/constants/Colors';
import { useState, useRef, useEffect } from 'react';

interface PayUTabsProps {
  options: string[];
  selectedOption: string;
  onSelect: (option: string) => void;
}

export function PayUTabs({ options, selectedOption, onSelect }: PayUTabsProps) {
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];
  
  const translateX = useRef(new Animated.Value(0)).current;
  const [containerWidth, setContainerWidth] = useState(0);
  
  const selectedIndex = options.indexOf(selectedOption);

  useEffect(() => {
    if (containerWidth > 0) {
      Animated.spring(translateX, {
        toValue: (selectedIndex * (containerWidth - 6)) / options.length,
        useNativeDriver: true,
        bounciness: 0,
      }).start();
    }
  }, [selectedIndex, containerWidth]);

  return (
    <View 
      style={[styles.container, { backgroundColor: colors.border }]}
      onLayout={(e) => setContainerWidth(e.nativeEvent.layout.width)}
    >
      <Animated.View 
        style={[
          styles.activeIndicator, 
          { 
            width: (containerWidth - 6) / options.length,
            backgroundColor: colors.text,
            transform: [{ translateX }]
          }
        ]} 
      />
      {options.map((option, index) => {
        const isActive = index === selectedIndex;
        return (
          <TouchableOpacity
            key={option}
            activeOpacity={1}
            onPress={() => onSelect(option)}
            style={styles.tab}
          >
            <PayUText
              variant="small"
              weight="medium"
              style={{ color: isActive ? (colorScheme === 'dark' ? '#171717' : '#fafafa') : colors.muted }}
            >
              {option}
            </PayUText>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 44,
    borderRadius: 14,
    padding: 3,
    position: 'relative',
  },
  activeIndicator: {
    position: 'absolute',
    top: 3,
    bottom: 3,
    left: 3,
    borderRadius: 12,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
});
