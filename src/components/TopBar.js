import React from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, typography, spacing } from '../theme/theme';

/**
 * mode: 'brand' (menu · wordmark · avatar) | 'back' (back arrow · title · action)
 */
export default function TopBar({
  mode = 'brand',
  title,
  onBack,
  onMenuPress,
  onAvatarPress,
  rightIcon,
  onRightPress,
  avatarUri,
  transparent = false,
}) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.wrap,
        { paddingTop: insets.top + spacing.sm },
        transparent && { backgroundColor: 'transparent', borderBottomWidth: 0 },
      ]}
    >
      {mode === 'brand' ? (
        <>
          <Pressable onPress={onMenuPress} hitSlop={10} style={styles.side}>
            <Ionicons name="menu-outline" size={24} color={colors.ink} />
          </Pressable>
          <View style={styles.brandRow}>
            <View style={styles.logoMark}>
              <Ionicons name="leaf" size={13} color={colors.paper} />
            </View>
            <Text style={styles.brand}>IngredientsHub</Text>
          </View>
          <Pressable onPress={onAvatarPress} hitSlop={10} style={styles.side}>
            {avatarUri ? (
              <Image source={{ uri: avatarUri }} style={styles.avatar} />
            ) : (
              <View style={styles.avatarFallback}>
                <Ionicons name="person" size={15} color={colors.sageDeep} />
              </View>
            )}
          </Pressable>
        </>
      ) : (
        <>
          <Pressable onPress={onBack} hitSlop={10} style={styles.side}>
            <Ionicons name="arrow-back" size={22} color={colors.ink} />
          </Pressable>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Pressable
            onPress={onRightPress}
            hitSlop={10}
            style={styles.side}
            disabled={!rightIcon}
          >
            {rightIcon && <Ionicons name={rightIcon} size={20} color={colors.ink} />}
          </Pressable>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.cream,
    paddingBottom: spacing.md,
    paddingHorizontal: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.hairline,
  },
  side: { width: 34, alignItems: 'center' },
  brandRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  logoMark: {
    width: 20,
    height: 20,
    borderRadius: 6,
    backgroundColor: colors.sageDeep,
    alignItems: 'center',
    justifyContent: 'center',
  },
  brand: {
    fontFamily: typography.display.fontFamily,
    fontSize: 17,
    color: colors.ink,
  },
  avatar: { width: 30, height: 30, borderRadius: 15 },
  avatarFallback: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.sagePale,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: typography.body.semibold,
    fontSize: typography.sizes.lg,
    color: colors.ink,
    flex: 1,
    textAlign: 'center',
  },
});
