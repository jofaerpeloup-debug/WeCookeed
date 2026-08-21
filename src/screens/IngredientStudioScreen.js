import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, radius, shadow } from '../theme/theme';
import TopBar from '../components/TopBar';
import Badge from '../components/Badge';
import { ingredientSwaps } from '../data/mockData';

export default function IngredientStudioScreen({ navigation }) {
  const data = ingredientSwaps.butter;

  return (
    <View style={styles.root}>
      <TopBar mode="brand" onMenuPress={() => {}} onAvatarPress={() => navigation.navigate('Profile')} />

      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.heroCircleWrap}>
          <Image source={{ uri: data.image }} style={styles.heroCircle} />
        </View>

        <Text style={styles.eyebrow}>ORIGINAL INGREDIENT</Text>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.subtitle}>{data.subtitle}</Text>

        <Text style={styles.sectionLabel}>Artistic Swaps</Text>

        {data.swaps.map((swap) => (
          <Pressable
            key={swap.id}
            style={styles.swapCard}
            onPress={() => navigation.navigate('SwapDetail', { swap })}
          >
            <View style={styles.swapIconWrap}>
              <Text style={styles.swapEmoji}>{swap.icon}</Text>
            </View>
            <View style={styles.swapBody}>
              <View style={styles.swapHeaderRow}>
                <Text style={styles.swapName}>{swap.name}</Text>
                <Badge label={swap.tag} tone={swap.tone} />
              </View>
              <Text style={styles.swapDesc}>{swap.description}</Text>
              <View style={styles.ratioRow}>
                <Ionicons name="git-compare-outline" size={12} color={colors.inkFaint} />
                <Text style={styles.ratioText}>Ratio: {swap.ratio}</Text>
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
  scroll: { padding: spacing.lg, paddingBottom: spacing.xxxl, alignItems: 'center' },
  heroCircleWrap: {
    marginTop: spacing.lg,
    marginBottom: spacing.lg,
    ...shadow.card,
    borderRadius: 60,
  },
  heroCircle: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 3,
    borderColor: colors.paper,
  },
  eyebrow: {
    fontFamily: typography.body.semibold,
    fontSize: typography.sizes.xs,
    color: colors.inkFaint,
    letterSpacing: 1,
    marginBottom: spacing.xs,
  },
  title: {
    fontFamily: typography.display.fontFamily,
    fontSize: 30,
    color: colors.ink,
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontFamily: typography.body.fontFamily,
    fontSize: typography.sizes.base,
    color: colors.inkSoft,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: spacing.xxl,
    maxWidth: '90%',
  },
  sectionLabel: {
    alignSelf: 'flex-start',
    fontFamily: typography.body.semibold,
    fontSize: typography.sizes.lg,
    color: colors.ink,
    marginBottom: spacing.md,
  },
  swapCard: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    backgroundColor: colors.paper,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.hairline,
    padding: spacing.md,
    gap: spacing.md,
    marginBottom: spacing.md,
  },
  swapIconWrap: {
    width: 52,
    height: 52,
    borderRadius: radius.md,
    backgroundColor: colors.creamDeep,
    alignItems: 'center',
    justifyContent: 'center',
  },
  swapEmoji: { fontSize: 24 },
  swapBody: { flex: 1 },
  swapHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  swapName: {
    fontFamily: typography.body.semibold,
    fontSize: typography.sizes.md,
    color: colors.ink,
  },
  swapDesc: {
    fontFamily: typography.body.fontFamily,
    fontSize: typography.sizes.sm,
    color: colors.inkSoft,
    lineHeight: 18,
    marginBottom: spacing.sm,
  },
  ratioRow: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  ratioText: {
    fontFamily: typography.body.medium,
    fontSize: typography.sizes.xs,
    color: colors.inkFaint,
  },
});
