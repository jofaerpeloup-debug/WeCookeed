import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, radius, shadow } from '../theme/theme';
import TopBar from '../components/TopBar';
import { recipes } from '../data/mockData';

const FILTERS = ['All', 'Vegan', 'Quick', 'High-Protein'];

export default function DiscoverScreen({ navigation }) {
  const [active, setActive] = useState('All');

  const filtered =
    active === 'All' ? recipes : recipes.filter((r) => r.tags.includes(active));

  return (
    <View style={styles.root}>
      <TopBar mode="brand" onMenuPress={() => {}} onAvatarPress={() => navigation.navigate('Profile')} />

      <View style={styles.filterRow}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: spacing.sm }}>
          {FILTERS.map((f) => {
            const isActive = f === active;
            return (
              <Pressable
                key={f}
                onPress={() => setActive(f)}
                style={[styles.filterPill, isActive && styles.filterPillActive]}
              >
                {isActive && f === 'All' && (
                  <Ionicons name="checkmark" size={13} color={colors.paper} style={{ marginRight: 4 }} />
                )}
                <Text style={[styles.filterText, isActive && styles.filterTextActive]}>{f}</Text>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>

      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <Text style={styles.pageTitle}>Recipe Discovery</Text>

        {filtered.map((recipe) => (
          <Pressable
            key={recipe.id}
            style={styles.card}
            onPress={() => navigation.navigate('RecipeDetail', { recipe })}
          >
            <Image source={{ uri: recipe.image }} style={styles.cardImage} />
            <Pressable style={styles.saveIcon} hitSlop={8}>
              <Ionicons name="bookmark-outline" size={16} color={colors.ink} />
            </Pressable>
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>{recipe.title}</Text>
              <View style={styles.metaRow}>
                <View style={styles.metaItem}>
                  <Ionicons name="time-outline" size={13} color={colors.inkFaint} />
                  <Text style={styles.metaText}>{recipe.time}</Text>
                </View>
                <View style={styles.metaItem}>
                  <Ionicons name="star-outline" size={13} color={colors.inkFaint} />
                  <Text style={styles.metaText}>Score {recipe.score}</Text>
                </View>
              </View>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.cream },
  filterRow: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.hairline,
  },
  filterPill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    paddingVertical: 8,
    borderRadius: radius.pill,
    backgroundColor: colors.paper,
    borderWidth: 1,
    borderColor: colors.hairline,
  },
  filterPillActive: { backgroundColor: colors.sageDeep, borderColor: colors.sageDeep },
  filterText: {
    fontFamily: typography.body.medium,
    fontSize: typography.sizes.sm,
    color: colors.inkSoft,
  },
  filterTextActive: { color: colors.paper },
  scroll: { padding: spacing.lg, paddingBottom: spacing.xxxl },
  pageTitle: {
    fontFamily: typography.display.fontFamily,
    fontSize: 22,
    color: colors.ink,
    marginBottom: spacing.lg,
  },
  card: {
    backgroundColor: colors.paper,
    borderRadius: radius.lg,
    overflow: 'hidden',
    marginBottom: spacing.xl,
    ...shadow.soft,
  },
  cardImage: { width: '100%', height: 190 },
  saveIcon: {
    position: 'absolute',
    top: spacing.md,
    right: spacing.md,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'rgba(255,255,255,0.9)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardBody: { padding: spacing.lg },
  cardTitle: {
    fontFamily: typography.display.fontFamily,
    fontSize: 19,
    lineHeight: 24,
    color: colors.ink,
    marginBottom: spacing.sm,
  },
  metaRow: { flexDirection: 'row', gap: spacing.lg },
  metaItem: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  metaText: {
    fontFamily: typography.body.fontFamily,
    fontSize: typography.sizes.xs,
    color: colors.inkFaint,
  },
});
