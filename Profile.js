import { useContext, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { BiodataContext } from './BiodataContext';

export default function Profile() {
  const { biodata, setBiodata } = useContext(BiodataContext);
  const [nama, setNama] = useState('');
  const [nim, setNim] = useState('');
  const [mengubah, setMengubah] = useState(false);

  const tampilkanForm = !biodata || mengubah;
  const inisial = biodata?.nama?.charAt(0).toUpperCase() ?? '?';

  const resetForm = () => {
    setNama('');
    setNim('');
    setMengubah(false);
  };

  const simpan = () => {
    if (!nama.trim() || !nim.trim()) return;
    setBiodata({ nama: nama.trim(), nim: nim.trim() });
    setMengubah(false);
  };

  const ubah = () => {
    setNama(biodata?.nama ?? '');
    setNim(biodata?.nim ?? '');
    setMengubah(true);
  };

  const hapus = () => {
    setBiodata(null);
    resetForm();
  };

  console.log('PROFILE VERSI BARU', biodata);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {tampilkanForm ? (
        <View style={styles.card}>
          <Text style={styles.title}>Isi Biodata</Text>
          <Text style={styles.subtitle}>
            Setelah disimpan, datanya akan tampil di halaman ini.
          </Text>

          <Text style={styles.label}>Nama Lengkap</Text>
          <TextInput
            style={styles.input}
            placeholder="Contoh: Budi Santoso"
            value={nama}
            onChangeText={setNama}
          />

          <Text style={styles.label}>NIM</Text>
          <TextInput
            style={styles.input}
            placeholder="Contoh: 2021001234"
            value={nim}
            onChangeText={setNim}
            keyboardType="numeric"
          />

          <View style={styles.row}>
            <Pressable style={[styles.button, styles.save]} onPress={simpan}>
              <Text style={styles.buttonText}>Simpan</Text>
            </Pressable>
            {mengubah && (
              <Pressable
                style={[styles.button, styles.cancel]}
                onPress={() => setMengubah(false)}
              >
                <Text style={styles.buttonText}>Batal</Text>
              </Pressable>
            )}
          </View>
        </View>
      ) : (
        <>
          <View style={styles.header}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{inisial}</Text>
            </View>
            <Text style={styles.name}>{biodata.nama}</Text>
            <Text style={styles.nim}>NIM: {biodata.nim}</Text>
          </View>

          <View style={styles.card}>
            <View style={styles.status}>
              <Text style={styles.statusText}>✓ Data tersimpan</Text>
            </View>

            <Text style={styles.label}>Nama</Text>
            <Text style={styles.value}>{biodata.nama}</Text>

            <Text style={styles.label}>NIM</Text>
            <Text style={styles.value}>{biodata.nim}</Text>

            <View style={styles.row}>
              <Pressable style={[styles.button, styles.save]} onPress={ubah}>
                <Text style={styles.buttonText}>Ubah Data</Text>
              </Pressable>
              <Pressable style={[styles.button, styles.delete]} onPress={hapus}>
                <Text style={styles.buttonText}>Hapus</Text>
              </Pressable>
            </View>
          </View>
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ECEFF1',
    alignItems: 'center',
    paddingBottom: 24,
  },
  header: {
    width: '100%',
    backgroundColor: '#00897B',
    alignItems: 'center',
    paddingVertical: 28,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    marginBottom: 16,
  },
  avatar: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatarText: { fontSize: 36, fontWeight: 'bold', color: '#00897B' },
  name: { fontSize: 22, fontWeight: 'bold', color: '#fff' },
  nim: { fontSize: 15, color: '#B2DFDB', marginTop: 4 },
  card: {
    width: '90%',
    maxWidth: 420,
    marginTop: 16,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  title: { fontSize: 20, fontWeight: 'bold', color: '#263238' },
  subtitle: { fontSize: 13, color: '#78909C', marginTop: 4, marginBottom: 16 },
  label: {
    fontSize: 13,
    color: '#546E7A',
    marginBottom: 4,
    marginTop: 6,
    fontWeight: '600',
  },
  value: { fontSize: 20, fontWeight: 'bold', color: '#00897B', marginBottom: 6 },
  input: {
    borderWidth: 1,
    borderColor: '#CFD8DC',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 10,
  },
  status: {
    alignSelf: 'flex-start',
    backgroundColor: '#E0F2F1',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 8,
  },
  statusText: { color: '#00695C', fontWeight: '600' },
  row: { flexDirection: 'row', gap: 10, marginTop: 16 },
  button: { flex: 1, paddingVertical: 12, borderRadius: 10, alignItems: 'center' },
  save: { backgroundColor: '#00897B' },
  cancel: { backgroundColor: '#B0BEC5' },
  delete: { backgroundColor: '#E57373' },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});