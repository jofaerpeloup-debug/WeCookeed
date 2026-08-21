import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, radius, shadow } from '../theme/theme';
import TopBar from '../components/TopBar';
import { savedRecipes } from '../data/mockData';

export default function SavedScreen({ navigation }) {
  const [featured, ...rest] = savedRecipes;

  return (
    <View style={styles.root}>
      <TopBar mode="brand" onMenuPress={() => {}} onAvatarPress={() => navigation.navigate('Profile')} />

      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <Pressable
          style={styles.featuredCard}
          onPress={() => navigation.navigate('RecipeDetail', { recipe: featured })}
        >
          <Image source={{ uri: featured.image }} style={styles.featuredImage} />
          <Pressable style={styles.saveIconFeatured} hitSlop={8}>
            <Ionicons name="bookmark" size={16} color={colors.sageDeep} />
          </Pressable>
          <View style={styles.featuredTextWrap}>
            <Text style={styles.featuredTitle}>{featured.title}</Text>
            <View style={styles.metaRow}>
              <Ionicons name="time-outline" size={12} color={colors.inkFaint} />
              <Text style={styles.metaText}>{featured.time}</Text>
              <Text style={styles.metaDot}>·</Text>
              <Text style={styles.metaText}>{featured.tags[0] || 'Dinner'}</Text>
            </View>
          </View>
        </Pressable>

        <View style={styles.grid}>
          {rest.map((recipe) => (
            <Pressable
              key={recipe.id}
              style={styles.gridCard}
              onPress={() => navigation.navigate('RecipeDetail', { recipe })}
            >
              <Image source={{ uri: recipe.image }} style={styles.gridImage} />
              <Pressable style={styles.saveIconGrid} hitSlop={8}>
                <Ionicons name="bookmark" size={13} color={colors.sageDeep} />
              </Pressable>
              <View style={styles.gridTextWrap}>
                <Text style={styles.gridTitle} numberOfLines={1}>
                  {recipe.title}
                </Text>
                <View style={styles.metaRow}>
                  <Ionicons name="time-outline" size={11} color={colors.inkFaint} />
                  <Text style={styles.metaTextSm}>{recipe.tags[0] || recipe.time}</Text>
                </View>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.cream },
  scroll: { padding: spacing.lg, paddingBottom: spacing.xxxl },
  featuredCard: {
    borderRadius: radius.lg,
    overflow: 'hidden',
    marginBottom: spacing.lg,
    backgroundColor: colors.paper,
    ...shadow.soft,
  },
  featuredImage: { width: '100%', height: 170 },
  saveIconFeatured: {
    position: 'absolute',
    top: spacing.md,
    right: spacing.md,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'rgba(255,255,255,0.92)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  featuredTextWrap: { padding: spacing.lg },
  featuredTitle: {
    fontFamily: typography.display.fontFamily,
    fontSize: 19,
    color: colors.ink,
    marginBottom: spacing.sm,
  },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.md },
  gridCard: {
    width: '47%',
    backgroundColor: colors.paper,
    borderRadius: radius.md,
    overflow: 'hidden',
    ...shadow.soft,
  },
  gridImage: { width: '100%', height: 110 },
  saveIconGrid: {
    position: 'absolute',
    top: spacing.sm,
    right: spacing.sm,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.92)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridTextWrap: { padding: spacing.md },
  gridTitle: {
    fontFamily: typography.body.semibold,
    fontSize: typography.sizes.sm,
    color: colors.ink,
    marginBottom: 4,
  },
  metaRow: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  metaText: {
    fontFamily: typography.body.fontFamily,
    fontSize: typography.sizes.xs,
    color: colors.inkFaint,
  },
  metaTextSm: {
    fontFamily: typography.body.fontFamily,
    fontSize: 10,
    color: colors.inkFaint,
  },
  metaDot: { color: colors.inkFaint, fontSize: 10 },
});
