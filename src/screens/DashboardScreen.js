import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, radius, shadow } from '../theme/theme';
import TopBar from '../components/TopBar';
import { recipes, chef } from '../data/mockData';

export default function DashboardScreen({ navigation }) {
  const featured = recipes[2];

  return (
    <View style={styles.root}>
      <TopBar
        mode="brand"
        onMenuPress={() => {}}
        onAvatarPress={() => navigation.navigate('Profile')}
        avatarUri={chef.avatar}
      />
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <Text style={styles.greeting}>
          Good Morning,{'\n'}
          <Text style={styles.greetingName}>Chef Ninong ry.</Text>
        </Text>

        <Pressable
          style={styles.searchBar}
          onPress={() => navigation.navigate('Discover')}
        >
          <Ionicons name="search" size={17} color={colors.inkFaint} />
          <Text style={styles.searchPlaceholder}>Find a swap or recipe...</Text>
        </Pressable>

        <Text style={styles.sectionLabel}>For You</Text>
        <Pressable
          style={styles.featuredCard}
          onPress={() => navigation.navigate('RecipeDetail', { recipe: featured })}
        >
          <Image source={{ uri: featured.image }} style={styles.featuredImage} />
          <View style={styles.featuredBody}>
            <Text style={styles.featuredTitle}>{featured.title}</Text>
            <Text style={styles.featuredDesc}>{featured.description}</Text>
            <Pressable
              style={styles.viewRecipeBtn}
              onPress={() => navigation.navigate('RecipeDetail', { recipe: featured })}
            >
              <Text style={styles.viewRecipeText}>View Recipe</Text>
            </Pressable>
          </View>
        </Pressable>

        <Text style={styles.sectionLabel}>Quick Tools</Text>
        <View style={styles.toolsGrid}>
          <Pressable
            style={styles.toolCard}
            onPress={() => navigation.navigate('IngredientStudio')}
          >
            <View style={styles.toolIconWrap}>
              <Ionicons name="swap-horizontal" size={20} color={colors.sageDeep} />
            </View>
            <Text style={styles.toolLabel}>Substitute{'\n'}Finder</Text>
          </Pressable>
          <Pressable style={styles.toolCard} onPress={() => navigation.navigate('Saved')}>
            <View style={styles.toolIconWrap}>
              <Ionicons name="book" size={20} color={colors.sageDeep} />
            </View>
            <Text style={styles.toolLabel}>Recipe{'\n'}Collection</Text>
          </Pressable>
        </View>

        <Pressable style={styles.listBanner} onPress={() => navigation.navigate('List')}>
          <View style={styles.listBannerIcon}>
            <Ionicons name="list" size={16} color={colors.paper} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.listBannerTitle}>Smart Shopping List</Text>
            <Text style={styles.listBannerSub}>3 items remaining for dinner</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color={colors.inkFaint} />
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.cream },
  scroll: { padding: spacing.lg, paddingBottom: spacing.xxxl },
  greeting: {
    fontFamily: typography.display.fontFamily,
    fontSize: 26,
    lineHeight: 32,
    color: colors.ink,
    marginTop: spacing.sm,
    marginBottom: spacing.lg,
  },
  greetingName: { color: colors.sageDeep },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: colors.paper,
    borderRadius: radius.pill,
    borderWidth: 1,
    borderColor: colors.hairline,
    paddingHorizontal: spacing.lg,
    height: 46,
    marginBottom: spacing.xl,
  },
  searchPlaceholder: {
    fontFamily: typography.body.fontFamily,
    fontSize: typography.sizes.base,
    color: colors.inkFaint,
  },
  sectionLabel: {
    fontFamily: typography.body.semibold,
    fontSize: typography.sizes.base,
    color: colors.ink,
    marginBottom: spacing.md,
  },
  featuredCard: {
    backgroundColor: colors.paper,
    borderRadius: radius.lg,
    overflow: 'hidden',
    marginBottom: spacing.xl,
    ...shadow.soft,
  },
  featuredImage: { width: '100%', height: 160 },
  featuredBody: { padding: spacing.lg },
  featuredTitle: {
    fontFamily: typography.display.fontFamily,
    fontSize: 18,
    color: colors.ink,
    marginBottom: 4,
  },
  featuredDesc: {
    fontFamily: typography.body.fontFamily,
    fontSize: typography.sizes.sm,
    color: colors.inkSoft,
    marginBottom: spacing.md,
    lineHeight: 18,
  },
  viewRecipeBtn: {
    backgroundColor: colors.sageDeep,
    borderRadius: radius.pill,
    paddingVertical: 11,
    alignItems: 'center',
  },
  viewRecipeText: {
    fontFamily: typography.body.semibold,
    fontSize: typography.sizes.sm,
    color: colors.paper,
  },
  toolsGrid: { flexDirection: 'row', gap: spacing.md, marginBottom: spacing.xl },
  toolCard: {
    flex: 1,
    backgroundColor: colors.paper,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.hairline,
    padding: spacing.lg,
    alignItems: 'center',
    gap: spacing.sm,
  },
  toolIconWrap: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: colors.sagePale,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toolLabel: {
    fontFamily: typography.body.medium,
    fontSize: typography.sizes.sm,
    color: colors.ink,
    textAlign: 'center',
    lineHeight: 17,
  },
  listBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    backgroundColor: colors.sageDeep,
    borderRadius: radius.lg,
    padding: spacing.lg,
  },
  listBannerIcon: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listBannerTitle: {
    fontFamily: typography.body.semibold,
    fontSize: typography.sizes.base,
    color: colors.paper,
  },
  listBannerSub: {
    fontFamily: typography.body.fontFamily,
    fontSize: typography.sizes.xs,
    color: 'rgba(255,255,255,0.75)',
    marginTop: 2,
  },
});
