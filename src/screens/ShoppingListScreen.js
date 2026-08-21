import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, radius } from '../theme/theme';
import TopBar from '../components/TopBar';
import Badge from '../components/Badge';
import { shoppingList as initialList } from '../data/mockData';

function Checkbox({ checked }) {
  return (
    <View style={[styles.checkbox, checked && styles.checkboxChecked]}>
      {checked && <Ionicons name="checkmark" size={13} color={colors.paper} />}
    </View>
  );
}

function Section({ title, items, onToggle }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {items.map((item) => (
        <Pressable key={item.id} style={styles.row} onPress={() => onToggle(item.id)}>
          <Checkbox checked={item.checked} />
          <Text style={[styles.itemText, item.checked && styles.itemTextChecked]}>
            {item.name}
          </Text>
          {item.badge && <Badge label={item.badge} tone="warning" />}
        </Pressable>
      ))}
    </View>
  );
}

export default function ShoppingListScreen({ navigation }) {
  const [list, setList] = useState(initialList);
  const [newItem, setNewItem] = useState('');

  const toggle = (category) => (id) => {
    setList((prev) => ({
      ...prev,
      [category]: prev[category].map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      ),
    }));
  };

  const addItem = () => {
    if (!newItem.trim()) return;
    setList((prev) => ({
      ...prev,
      produce: [
        ...prev.produce,
        { id: `custom-${Date.now()}`, name: newItem.trim(), checked: false },
      ],
    }));
    setNewItem('');
  };

  return (
    <View style={styles.root}>
      <TopBar mode="brand" onMenuPress={() => {}} onAvatarPress={() => navigation.navigate('Profile')} />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
          <Section title="Produce" items={list.produce} onToggle={toggle('produce')} />
          <Section title="Pantry" items={list.pantry} onToggle={toggle('pantry')} />
          <Section title="Dairy" items={list.dairy} onToggle={toggle('dairy')} />
        </ScrollView>

        <View style={styles.addBar}>
          <TextInput
            style={styles.addInput}
            placeholder="Add an item... (e.g. '3 Honeycrisp Apples')"
            placeholderTextColor={colors.inkFaint}
            value={newItem}
            onChangeText={setNewItem}
            onSubmitEditing={addItem}
            returnKeyType="done"
          />
          <Pressable style={styles.addBtn} onPress={addItem}>
            <Ionicons name="add" size={20} color={colors.paper} />
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.cream },
  scroll: { padding: spacing.lg, paddingBottom: spacing.xl },
  section: { marginBottom: spacing.xl },
  sectionTitle: {
    fontFamily: typography.body.semibold,
    fontSize: typography.sizes.xs,
    color: colors.inkFaint,
    letterSpacing: 1,
    marginBottom: spacing.md,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    paddingVertical: spacing.sm,
  },
  checkbox: {
    width: 21,
    height: 21,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: colors.hairline,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: { backgroundColor: colors.sageDeep, borderColor: colors.sageDeep },
  itemText: {
    flex: 1,
    fontFamily: typography.body.fontFamily,
    fontSize: typography.sizes.md,
    color: colors.ink,
  },
  itemTextChecked: {
    color: colors.inkFaint,
    textDecorationLine: 'line-through',
  },
  addBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    padding: spacing.lg,
    borderTopWidth: 1,
    borderTopColor: colors.hairline,
    backgroundColor: colors.paper,
  },
  addInput: {
    flex: 1,
    height: 44,
    borderRadius: radius.pill,
    backgroundColor: colors.creamDeep,
    paddingHorizontal: spacing.lg,
    fontFamily: typography.body.fontFamily,
    fontSize: typography.sizes.sm,
    color: colors.ink,
  },
  addBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.sageDeep,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
