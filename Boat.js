import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const Boat = ({ name, description, picture }) => {
  return (
    <View style={styles.card}>
      <View style={styles.titleRow}>
        <FontAwesome6 name="sailboat" size={20} color="#0F4C81" />
        <Text style={styles.name}>{name}</Text>
      </View>
      <Text style={styles.description}>{description}</Text>
      <Image source={picture} style={styles.picture} resizeMode="cover" />
    </View>
  );
};

export default Boat;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    boxShadow: '0 2px 6px rgba(16, 24, 40, 0.08)',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  name: {
    flexShrink: 1,
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  description: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 20,
    marginTop: 6,
    marginBottom: 12,
  },
  picture: {
    width: '100%',
    height: 220,
    borderRadius: 8,
  },
});
