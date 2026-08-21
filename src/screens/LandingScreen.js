import React from 'react';
import { View, Text, Image, Pressable, StyleSheet, ScrollView } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS, LeafIcon, SparkleIcon, HeartIcon, SquiggleUnderline, LogoBadge } from '../theme/brandKit';

const CHEF_HERO = require('../assets/landing/chef-hero.jpg');
const LEAF_DECO = require('../assets/landing/leaf-deco.jpg');
const CORNER_BL = require('../assets/landing/corner-bl.jpg');
const CORNER_BR = require('../assets/landing/corner-br.jpg');

// ---- main screen ------------------------------------------------------------

export default function LandingScreen({ navigation }) {
  const insets = useSafeAreaInsets();

  const goLogin = () => navigation.navigate('Login');

  return (
    <View style={styles.root}>
      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          { paddingTop: insets.top + 8, paddingBottom: insets.bottom + 8 },
        ]}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        {/* logo */}
        <View style={styles.logoRow}>
          <LogoBadge size={36} />
          <Text style={styles.wordmark}>
            Ingredients<Text style={{ color: COLORS.greenMid }}>Hub</Text>
          </Text>
        </View>

        {/* greeting */}
        <View style={styles.greeting}>
          <View style={styles.hiRow}>
            <Text style={styles.hiScript}>Hi!</Text>
            <LeafIcon size={18} />
          </View>
          <Text style={styles.imLine}>I'm</Text>
          <View style={styles.chefAiRow}>
            <Text style={styles.chefAiName}>Chef AI</Text>
          </View>
          <SquiggleUnderline width={92} />
        </View>

        {/* hero photo + bubble overlay — flex:1 so it absorbs whatever
            vertical space is left after the fixed-height elements below,
            instead of a guessed pixel height. That's what actually
            guarantees the screen never needs to scroll, regardless of a
            given iPhone's exact safe-area insets. */}
        <View style={styles.heroWrap}>
          <Image source={CHEF_HERO} style={styles.heroImg} resizeMode="cover" />

          <Image source={LEAF_DECO} style={styles.leafImg} resizeMode="cover" />
          <View style={[styles.sparkle, { top: '6%', left: '9%' }]}>
            <SparkleIcon size={11} />
          </View>
          <View style={[styles.sparkle, { top: '24%', right: '4%' }]}>
            <SparkleIcon size={9} />
          </View>
          <View style={[styles.sparkle, { bottom: '22%', left: '2%' }]}>
            <SparkleIcon size={10} />
          </View>

          <View style={styles.bubbleWrap}>
            <View style={styles.bubble}>
              <Text style={styles.bubbleText}>Your smart cooking assistant is here!</Text>
            </View>
            <View style={styles.bubbleLeaf}>
              <LeafIcon size={14} color={COLORS.greenBright} />
            </View>
          </View>
        </View>

        {/* tagline */}
        <View style={styles.taglineWrap}>
          <Text style={styles.tagline}>All your ingredients,</Text>
          <Text style={styles.tagline}>all your recipes,</Text>
          <View style={styles.taglineLastRow}>
            <Text style={styles.tagline}>all in one place.</Text>
            <View style={{ marginLeft: 4 }}>
              <LeafIcon size={15} color="#3F5B1E" />
            </View>
          </View>
          <View style={{ alignSelf: 'center', marginTop: -6 }}>
            <SquiggleUnderline width={150} color={COLORS.greenDark} />
          </View>
        </View>

        <View style={styles.descWrap}>
          <Text style={styles.desc}>
            Organize, discover, and cook delicious meals with ease. Let's make every meal memorable!
          </Text>
        </View>

        <View style={styles.heartRow}>
          <HeartIcon size={16} />
        </View>

        {/* CTA */}
        <Pressable
          onPress={goLogin}
          style={({ pressed }) => [styles.cta, pressed && styles.ctaPressed]}
        >
          <Text style={styles.ctaText}>Get Started</Text>
          <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
            <Path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" />
          </Svg>
        </Pressable>

        <Pressable onPress={goLogin} hitSlop={10} style={{ alignSelf: 'center' }}>
          <Text style={styles.signin}>I already have an account</Text>
        </Pressable>

        {/* bottom corner flourishes, cropped from the same source photo —
            live in the scroll flow (not fixed to the viewport) so they never
            overlay the CTA/sign-in text on shorter screens */}
        <View style={styles.cornerStrip} pointerEvents="none">
          <Image source={CORNER_BL} style={styles.cornerBl} resizeMode="cover" />
          <Image source={CORNER_BR} style={styles.cornerBr} resizeMode="cover" />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: COLORS.cream },
  scrollContent: {
    paddingHorizontal: 26,
    flexGrow: 1,
  },
  logoRow: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 12 },
  wordmark: { fontSize: 19, fontWeight: '700', color: COLORS.ink },

  greeting: { marginBottom: 2 },
  hiRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  hiScript: { fontSize: 28, fontWeight: '700', color: COLORS.greenBright, fontStyle: 'italic' },
  imLine: { fontSize: 18, fontWeight: '700', color: COLORS.ink, marginTop: 1 },
  chefAiRow: { flexDirection: 'row', alignItems: 'center', marginTop: 1 },
  chefAiName: { fontSize: 25, fontWeight: '800', color: COLORS.greenChef },

  heroWrap: { flex: 1, minHeight: 150, position: 'relative', marginHorizontal: -26, marginTop: 6 },
  heroImg: { width: '100%', height: '100%' },

  leafImg: {
    position: 'absolute',
    top: '-3%',
    right: '19%',
    width: '15%',
    aspectRatio: 65 / 55,
    borderRadius: 4,
  },
  sparkle: { position: 'absolute' },

  bubbleWrap: { position: 'absolute', left: '6.7%', top: '2.5%', width: '44%' },
  bubble: {
    backgroundColor: COLORS.creamCard,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomRightRadius: 18,
    borderBottomLeftRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 14,
  },
  bubbleText: { fontSize: 12.5, fontWeight: '700', color: COLORS.ink, lineHeight: 16 },
  bubbleLeaf: { position: 'absolute', bottom: -6, right: '8%' },

  taglineWrap: { alignItems: 'center', marginTop: 10 },
  tagline: { fontSize: 18, fontWeight: '700', color: COLORS.greenDark, textAlign: 'center', lineHeight: 23 },
  taglineLastRow: { flexDirection: 'row', alignItems: 'center' },

  descWrap: { marginTop: 8 },
  desc: { fontSize: 12.5, fontWeight: '600', color: COLORS.inkSoft, textAlign: 'center', lineHeight: 17 },

  heartRow: { alignItems: 'center', marginVertical: 6 },

  cta: {
    backgroundColor: COLORS.greenMid,
    borderRadius: 28,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  ctaPressed: { backgroundColor: COLORS.greenChef },
  ctaText: { color: '#fff', fontSize: 15.5, fontWeight: '800' },

  signin: { textAlign: 'center', marginTop: 8, marginBottom: 2, fontSize: 13, fontWeight: '700', color: COLORS.greenLink },

  cornerStrip: { position: 'relative', height: 52, marginHorizontal: -26, marginTop: 8 },
  cornerBl: { position: 'absolute', left: -10, bottom: -6, width: 90, height: 62, borderTopRightRadius: 12 },
  cornerBr: { position: 'absolute', right: -8, bottom: -6, width: 108, height: 58, borderTopLeftRadius: 12 },
});
