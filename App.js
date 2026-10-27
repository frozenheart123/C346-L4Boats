import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Boat from './Boat';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>GetABoat - For Sale</Text>
        <Text style={styles.subtitle}>Authorized power boat dealer</Text>
      </View>
      <ScrollView contentContainerStyle={styles.list}>
        <Boat
          name="Sea Ray 500 Sundancer"
          description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
          picture={require('./img/sea_ray.jpg')}
        />
        <Boat
          name="Four Winns Horizon 180"
          description="A sporty look and refined details truly set the Horizon 180 above all others."
          picture={require('./img/four_winns.jpg')}
        />
        <Boat
          name="Flipper 640 ST"
          description="A modern take on the classic, traditional hardtop and perfect for a family picnic."
          picture={require('./img/flipper.jpg')}
        />
        <Boat
          name="Princess V48"
          description="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."
          picture={require('./img/princess.jpg')}
        />
        <Boat
          name="Bayliner 175 Bowrider"
          description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."
          picture={require('./img/bayliner.jpg')}
        />
        <Boat
          name="Fairline Targa 47"
          description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."
          picture={require('./img/fairline.jpg')}
        />
        <Text style={styles.footer}>Developed by NELSON (24039810)</Text>
      </ScrollView>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F4F7',
  },
  header: {
    backgroundColor: '#0F4C81',
    paddingTop: 60,
    paddingBottom: 24,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '700',
  },
  subtitle: {
    color: '#DCE8F4',
    fontSize: 15,
    marginTop: 4,
  },
  list: {
    padding: 16,
    paddingBottom: 32,
  },
  footer: {
    textAlign: 'center',
    color: '#6B7280',
    fontSize: 13,
    marginTop: 8,
  },
});
