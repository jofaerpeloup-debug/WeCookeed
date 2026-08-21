import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, typography, spacing, radius, shadow } from '../theme/theme';
import Badge from '../components/Badge';
import Button from '../components/Button';

export default function RecipeDetailScreen({ navigation, route }) {
  const { recipe } = route.params;
  const insets = useSafeAreaInsets();

  const ingredients = [
    '2 cups heirloom carrots, halved',
    '1/4 cup pistachios, crushed',
    '2 tbsp olive oil',
    '1 tsp cumin',
    'Sea salt, to taste',
    '1/2 cup Greek yogurt',
    '1 lemon, zested',
  ];

  return (
    <View style={styles.root}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: spacing.xxxl }}>
        <View style={styles.imageWrap}>
          <Image source={{ uri: recipe.image }} style={styles.image} />
          <Pressable
            style={[styles.backBtn, { top: insets.top + spacing.sm }]}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={20} color={colors.ink} />
          </Pressable>
          <Pressable style={[styles.saveBtn, { top: insets.top + spacing.sm }]}>
            <Ionicons name="bookmark-outline" size={18} color={colors.ink} />
          </Pressable>
        </View>

        <View style={styles.body}>
          <View style={styles.tagRow}>
            {recipe.tags.map((tag) => (
              <Badge key={tag} label={tag} tone="sage" />
            ))}
          </View>
          <Text style={styles.title}>{recipe.title}</Text>

          <View style={styles.metaRow}>
            <View style={styles.metaItem}>
              <Ionicons name="time-outline" size={15} color={colors.inkFaint} />
              <Text style={styles.metaText}>{recipe.time}</Text>
            </View>
            <View style={styles.metaItem}>
              <Ionicons name="star-outline" size={15} color={colors.inkFaint} />
              <Text style={styles.metaText}>Score {recipe.score}</Text>
            </View>
            <View style={styles.metaItem}>
              <Ionicons name="people-outline" size={15} color={colors.inkFaint} />
              <Text style={styles.metaText}>Serves 4</Text>
            </View>
          </View>

          <Text style={styles.description}>{recipe.description}</Text>

          <Text style={styles.sectionLabel}>Ingredients</Text>
          <View style={styles.ingredientsCard}>
            {ingredients.map((ing, i) => (
              <View key={i} style={styles.ingredientRow}>
                <View style={styles.bullet} />
                <Text style={styles.ingredientText}>{ing}</Text>
              </View>
            ))}
          </View>

          <Text style={styles.sectionLabel}>Need a Substitute?</Text>
          <Pressable
            style={styles.swapPromptCard}
            onPress={() => navigation.navigate('IngredientStudio')}
          >
            <View style={styles.swapPromptIcon}>
              <Ionicons name="swap-horizontal" size={18} color={colors.sageDeep} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.swapPromptTitle}>Explore Artistic Swaps</Text>
              <Text style={styles.swapPromptSub}>Find substitutes for any ingredient</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color={colors.inkFaint} />
          </Pressable>

          <Button
            title="Add All to Shopping List"
            variant="primary"
            style={{ marginTop: spacing.xl }}
            onPress={() => navigation.navigate('List')}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.cream },
  imageWrap: { position: 'relative' },
  image: { width: '100%', height: 300 },
  backBtn: {
    position: 'absolute',
    left: spacing.lg,
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: 'rgba(255,255,255,0.92)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveBtn: {
    position: 'absolute',
    right: spacing.lg,
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: 'rgba(255,255,255,0.92)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: { padding: spacing.lg },
  tagRow: { flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.md },
  title: {
    fontFamily: typography.display.fontFamily,
    fontSize: 26,
    lineHeight: 32,
    color: colors.ink,
    marginBottom: spacing.md,
  },
  metaRow: { flexDirection: 'row', gap: spacing.lg, marginBottom: spacing.lg },
  metaItem: { flexDirection: 'row', alignItems: 'center', gap: 5 },
  metaText: {
    fontFamily: typography.body.medium,
    fontSize: typography.sizes.sm,
    color: colors.inkSoft,
  },
  description: {
    fontFamily: typography.body.fontFamily,
    fontSize: typography.sizes.md,
    lineHeight: 22,
    color: colors.inkSoft,
    marginBottom: spacing.xxl,
  },
  sectionLabel: {
    fontFamily: typography.body.semibold,
    fontSize: typography.sizes.lg,
    color: colors.ink,
    marginBottom: spacing.md,
  },
  ingredientsCard: {
    backgroundColor: colors.paper,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.hairline,
    padding: spacing.lg,
    marginBottom: spacing.xxl,
  },
  ingredientRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, paddingVertical: 6 },
  bullet: { width: 5, height: 5, borderRadius: 3, backgroundColor: colors.sage },
  ingredientText: {
    fontFamily: typography.body.fontFamily,
    fontSize: typography.sizes.base,
    color: colors.ink,
  },
  swapPromptCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    backgroundColor: colors.sagePale,
    borderRadius: radius.lg,
    padding: spacing.lg,
    ...shadow.soft,
  },
  swapPromptIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: colors.paper,
    alignItems: 'center',
    justifyContent: 'center',
  },
  swapPromptTitle: {
    fontFamily: typography.body.semibold,
    fontSize: typography.sizes.md,
    color: colors.sageDeeper,
  },
  swapPromptSub: {
    fontFamily: typography.body.fontFamily,
    fontSize: typography.sizes.xs,
    color: colors.inkSoft,
    marginTop: 2,
  },
});
