import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>Tab Navigation</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Halaman Beranda</Text>
        <Text style={styles.soal}>
          Pembuatan tab navigation dengan package
          react-navigation. Aplikasi ini berisi tiga tab (Beranda, Profil,
          dan Tentang) yang bisa dibuka bergantian lewat bilah di bawah layar.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#F1F5F4', alignItems: 'center', flexGrow: 1, paddingBottom: 28 },
  banner: {
    width: '100%',
    backgroundColor: '#00897B',
    paddingHorizontal: 24,
    paddingTop: 22,
    paddingBottom: 30,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  bannerTitle: { fontSize: 28, fontWeight: 'bold', color: '#fff' },
  card: {
    width: '90%',
    maxWidth: 420,
    marginTop: 18,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    borderLeftWidth: 5,
    borderLeftColor: '#00897B',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#263238', marginBottom: 10 },
  soal: { fontSize: 14, color: '#546E7A', lineHeight: 21 },
});