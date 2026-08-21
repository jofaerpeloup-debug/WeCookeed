import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, radius } from '../theme/theme';
import TopBar from '../components/TopBar';
import { settingsGroups } from '../data/mockData';

export default function SettingsScreen({ navigation }) {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <View style={styles.root}>
      <TopBar mode="back" title="" onBack={() => navigation.goBack()} />

      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Settings</Text>
        <Text style={styles.subtitle}>
          Manage your account preferences and culinary profile.
        </Text>

        {settingsGroups.map((group) => (
          <View key={group.title} style={styles.group}>
            <Text style={styles.groupTitle}>{group.title.toUpperCase()}</Text>
            <View style={styles.card}>
              {group.items.map((item, i) => (
                <Pressable
                  key={item.id}
                  style={[
                    styles.row,
                    i < group.items.length - 1 && styles.rowBorder,
                  ]}
                  onPress={() => item.id === 'theme' && setDarkTheme((v) => !v)}
                >
                  <View style={styles.iconWrap}>
                    <Ionicons name={item.icon} size={17} color={colors.sageDeep} />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.rowLabel}>{item.label}</Text>
                    {item.sub && <Text style={styles.rowSub}>{item.sub}</Text>}
                  </View>
                  {item.toggle ? (
                    <Switch
                      value={darkTheme}
                      onValueChange={setDarkTheme}
                      trackColor={{ false: colors.hairline, true: colors.sageDeep }}
                      thumbColor={colors.paper}
                    />
                  ) : (
                    <Ionicons name="chevron-forward" size={17} color={colors.inkFaint} />
                  )}
                </Pressable>
              ))}
            </View>
          </View>
        ))}

        <Pressable style={styles.logoutBtn}>
          <Text style={styles.logoutText}>Log Out</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.cream },
  scroll: { padding: spacing.lg, paddingBottom: spacing.xxxl },
  title: {
    fontFamily: typography.display.fontFamily,
    fontSize: 26,
    color: colors.ink,
    marginBottom: 4,
  },
  subtitle: {
    fontFamily: typography.body.fontFamily,
    fontSize: typography.sizes.sm,
    color: colors.inkSoft,
    marginBottom: spacing.xl,
    lineHeight: 19,
  },
  group: { marginBottom: spacing.xl },
  groupTitle: {
    fontFamily: typography.body.semibold,
    fontSize: 10,
    color: colors.inkFaint,
    letterSpacing: 1,
    marginBottom: spacing.sm,
  },
  card: {
    backgroundColor: colors.paper,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.hairline,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    padding: spacing.md,
  },
  rowBorder: { borderBottomWidth: 1, borderBottomColor: colors.hairline },
  iconWrap: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: colors.sagePale,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowLabel: {
    fontFamily: typography.body.medium,
    fontSize: typography.sizes.base,
    color: colors.ink,
  },
  rowSub: {
    fontFamily: typography.body.fontFamily,
    fontSize: typography.sizes.xs,
    color: colors.inkFaint,
    marginTop: 1,
  },
  logoutBtn: { alignItems: 'center', paddingVertical: spacing.lg },
  logoutText: {
    fontFamily: typography.body.semibold,
    fontSize: typography.sizes.md,
    color: colors.error,
  },
});
