import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, typography, spacing } from '../theme/theme';

const TABS = [
  { key: 'Home', label: 'Home', icon: 'home', iconOutline: 'home-outline' },
  { key: 'Discover', label: 'Discover', icon: 'search', iconOutline: 'search-outline' },
  { key: 'Assistant', label: 'Assistant', icon: 'sparkles', iconOutline: 'sparkles-outline' },
  { key: 'Saved', label: 'Saved', icon: 'bookmark', iconOutline: 'bookmark-outline' },
  { key: 'List', label: 'List', icon: 'list', iconOutline: 'list-outline' },
];

export default function TabBar({ state, navigation }) {
  const insets = useSafeAreaInsets();
  const activeIndex = state.index;

  return (
    <View style={[styles.wrap, { paddingBottom: Math.max(insets.bottom, 10) }]}>
      {TABS.map((tab, i) => {
        const focused = i === activeIndex;
        const isCenter = tab.key === 'Assistant';
        return (
          <Pressable
            key={tab.key}
            onPress={() => navigation.navigate(tab.key)}
            style={styles.tab}
            hitSlop={6}
          >
            {isCenter ? (
              <View style={[styles.centerIcon, focused && styles.centerIconActive]}>
                <Ionicons
                  name={focused ? tab.icon : tab.iconOutline}
                  size={18}
                  color={focused ? colors.paper : colors.sageDeep}
                />
              </View>
            ) : (
              <Ionicons
                name={focused ? tab.icon : tab.iconOutline}
                size={21}
                color={focused ? colors.sageDeep : colors.inkFaint}
              />
            )}
            <Text style={[styles.label, focused && styles.labelActive]}>{tab.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    backgroundColor: colors.paper,
    borderTopWidth: 1,
    borderTopColor: colors.hairline,
    paddingTop: spacing.sm,
    paddingHorizontal: spacing.sm,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    gap: 4,
  },
  centerIcon: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: colors.sagePale,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 1,
  },
  centerIconActive: {
    backgroundColor: colors.sageDeep,
  },
  label: {
    fontFamily: typography.body.medium,
    fontSize: 10,
    color: colors.inkFaint,
  },
  labelActive: {
    color: colors.sageDeep,
    fontFamily: typography.body.semibold,
  },
});
