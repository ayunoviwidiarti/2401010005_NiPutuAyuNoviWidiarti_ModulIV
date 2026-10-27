import { useContext } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { BiodataContext } from './BiodataContext';

const info = [
  { label: 'Mata Kuliah', nilai: 'Pemrograman Mobile' },
  { label: 'Topik', nilai: 'Tab Navigation' },
  { label: 'Library', nilai: 'react-navigation' },
  { label: 'Platform', nilai: 'React Native + Expo' },
];

export default function About() {
  const { biodata } = useContext(BiodataContext);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.bannerLabel}>DIKERJAKAN OLEH</Text>
        <Text style={styles.bannerName}>{biodata?.nama || 'Belum diisi'}</Text>
        <Text style={styles.bannerNim}>{biodata?.nim || '-'}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Detail Tugas</Text>
        {info.map((item, i) => (
          <View
            key={item.label}
            style={[styles.row, i === info.length - 1 && styles.rowLast]}
          >
            <Text style={styles.rowLabel}>{item.label}</Text>
            <Text style={styles.rowValue}>{item.nilai}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#ECEFF1', flexGrow: 1, alignItems: 'center' },
  banner: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: '#263238',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
  },
  bannerLabel: { fontSize: 11, letterSpacing: 1.5, color: '#80CBC4' },
  bannerName: { fontSize: 22, fontWeight: 'bold', color: '#fff', marginTop: 6 },
  bannerNim: { fontSize: 14, color: '#B0BEC5', marginTop: 2 },
  card: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    borderLeftWidth: 5,
    borderLeftColor: '#00897B',
  },
  cardTitle: { fontSize: 16, fontWeight: 'bold', color: '#263238', marginBottom: 8 },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ECEFF1',
  },
  rowLast: { borderBottomWidth: 0 },
  rowLabel: { fontSize: 14, color: '#78909C' },
  rowValue: { fontSize: 14, fontWeight: '600', color: '#263238' },
});