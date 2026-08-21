import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Pressable } from 'react-native';
import Svg, { Polyline, Circle, Defs, LinearGradient, Stop, Polygon } from 'react-native-svg';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, radius, shadow } from '../theme/theme';
import TopBar from '../components/TopBar';
import { insights } from '../data/mockData';

const CHART_WIDTH = Dimensions.get('window').width - spacing.lg * 2 - spacing.lg * 2;
const CHART_HEIGHT = 120;

function GrowthChart({ data }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const stepX = CHART_WIDTH / (data.length - 1);

  const points = data.map((v, i) => {
    const x = i * stepX;
    const y = CHART_HEIGHT - ((v - min) / range) * (CHART_HEIGHT - 16) - 8;
    return `${x},${y}`;
  });

  const fillPoints = [`0,${CHART_HEIGHT}`, ...points, `${CHART_WIDTH},${CHART_HEIGHT}`].join(' ');
  const lastPoint = points[points.length - 1].split(',');

  return (
    <Svg width={CHART_WIDTH} height={CHART_HEIGHT}>
      <Defs>
        <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor={colors.sageDeep} stopOpacity="0.22" />
          <Stop offset="1" stopColor={colors.sageDeep} stopOpacity="0" />
        </LinearGradient>
      </Defs>
      <Polygon points={fillPoints} fill="url(#grad)" />
      <Polyline
        points={points.join(' ')}
        fill="none"
        stroke={colors.sageDeep}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle cx={lastPoint[0]} cy={lastPoint[1]} r="4" fill={colors.sageDeep} />
      <Circle cx={lastPoint[0]} cy={lastPoint[1]} r="7" fill={colors.sageDeep} opacity="0.2" />
    </Svg>
  );
}

export default function InsightsScreen({ navigation }) {
  return (
    <View style={styles.root}>
      <TopBar mode="brand" onMenuPress={() => {}} onAvatarPress={() => navigation.navigate('Profile')} />

      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Overview</Text>
        <Text style={styles.subtitle}>Your culinary intelligence metrics</Text>

        <View style={styles.heroCard}>
          <View style={styles.heroTop}>
            <Text style={styles.heroLabel}>ACTIVE COOKS</Text>
            <View style={styles.heroIconWrap}>
              <Ionicons name="people" size={14} color={colors.sageDeep} />
            </View>
          </View>
          <Text style={styles.heroValue}>{insights.activeCooks}</Text>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <View style={styles.statIconWrap}>
              <Ionicons name="swap-horizontal" size={14} color={colors.sageDeep} />
            </View>
            <Text style={styles.statLabel}>SWAP VOL</Text>
            <Text style={styles.statValue}>{insights.swapVolume}</Text>
          </View>
          <View style={styles.statCard}>
            <View style={styles.statIconWrap}>
              <Ionicons name="sparkles" size={14} color={colors.sageDeep} />
            </View>
            <Text style={styles.statLabel}>AI ACC</Text>
            <Text style={styles.statValue}>{insights.aiAccuracy}</Text>
          </View>
        </View>

        <View style={styles.chartCard}>
          <View style={styles.chartHeader}>
            <Text style={styles.chartTitle}>Platform Growth</Text>
            <View style={styles.periodRow}>
              {['1W', '1M', '1Y'].map((p, i) => (
                <Pressable key={p} style={[styles.periodPill, i === 0 && styles.periodPillActive]}>
                  <Text style={[styles.periodText, i === 0 && styles.periodTextActive]}>{p}</Text>
                </Pressable>
              ))}
            </View>
          </View>
          <View style={styles.growthRow}>
            <Text style={styles.thisWeekLabel}>THIS WEEK</Text>
            <Text style={styles.growthValue}>{insights.weeklyGrowth}</Text>
          </View>
          <GrowthChart data={insights.chartData} />
          <View style={styles.chartLabelsRow}>
            {insights.chartLabels.map((l) => (
              <Text key={l} style={styles.chartLabel}>
                {l}
              </Text>
            ))}
          </View>
        </View>
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
  },
  heroCard: {
    backgroundColor: colors.paper,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.hairline,
    padding: spacing.lg,
    marginBottom: spacing.md,
    ...shadow.soft,
  },
  heroTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing.sm },
  heroLabel: {
    fontFamily: typography.body.semibold,
    fontSize: 10,
    color: colors.inkFaint,
    letterSpacing: 1,
  },
  heroIconWrap: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: colors.sagePale,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroValue: {
    fontFamily: typography.display.fontFamily,
    fontSize: 36,
    color: colors.ink,
  },
  statsRow: { flexDirection: 'row', gap: spacing.md, marginBottom: spacing.xl },
  statCard: {
    flex: 1,
    backgroundColor: colors.paper,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.hairline,
    padding: spacing.lg,
    ...shadow.soft,
  },
  statIconWrap: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: colors.sagePale,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.sm,
  },
  statLabel: {
    fontFamily: typography.body.semibold,
    fontSize: 10,
    color: colors.inkFaint,
    letterSpacing: 1,
    marginBottom: 4,
  },
  statValue: {
    fontFamily: typography.display.fontFamily,
    fontSize: 22,
    color: colors.ink,
  },
  chartCard: {
    backgroundColor: colors.paper,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.hairline,
    padding: spacing.lg,
    ...shadow.soft,
  },
  chartHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing.md },
  chartTitle: {
    fontFamily: typography.display.fontFamily,
    fontSize: 18,
    color: colors.ink,
  },
  periodRow: { flexDirection: 'row', gap: 4, backgroundColor: colors.creamDeep, borderRadius: radius.pill, padding: 3 },
  periodPill: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: radius.pill },
  periodPillActive: { backgroundColor: colors.sageDeep },
  periodText: {
    fontFamily: typography.body.semibold,
    fontSize: 10,
    color: colors.inkFaint,
  },
  periodTextActive: { color: colors.paper },
  growthRow: { flexDirection: 'row', alignItems: 'baseline', gap: spacing.sm, marginBottom: spacing.md },
  thisWeekLabel: {
    fontFamily: typography.body.semibold,
    fontSize: 10,
    color: colors.inkFaint,
    letterSpacing: 0.5,
  },
  growthValue: {
    fontFamily: typography.body.bold,
    fontSize: typography.sizes.lg,
    color: colors.sageDeep,
  },
  chartLabelsRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: spacing.sm },
  chartLabel: {
    fontFamily: typography.body.fontFamily,
    fontSize: 10,
    color: colors.inkFaint,
  },
});
