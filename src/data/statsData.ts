/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { StatGroup } from '../types';

export const generalStats = {
  totalPopulation: 18452,
  totalRT: 82,
  totalRW: 14,
  areaSize: '1.48 km²',
  density: '12.467 jiwa/km²',
};

export const demographicStats: { [key: string]: StatGroup } = {
  gender: {
    title: 'Distribusi Jenis Kelamin',
    description: 'Perbandingan jumlah penduduk laki-laki dan perempuan di Ciptomulyo.',
    items: [
      { label: 'Laki-laki', value: 9324, percentage: 50.5, color: '#3b82f6' }, // blue-500
      { label: 'Perempuan', value: 9128, percentage: 49.5, color: '#ec4899' }, // pink-500
    ],
  },
  ageGroups: {
    title: 'Kelompok Usia',
    description: 'Distribusi penduduk berdasarkan kelompok usia produktif dan non-produktif.',
    items: [
      { label: 'Anak-anak (0-14 tahun)', value: 3875, percentage: 21.0, color: '#10b981' },
      { label: 'Pemuda (15-24 tahun)', value: 2952, percentage: 16.0, color: '#6366f1' },
      { label: 'Dewasa (25-54 tahun)', value: 8119, percentage: 44.0, color: '#f59e0b' },
      { label: 'Pra-Lansia (55-64 tahun)', value: 2214, percentage: 12.0, color: '#8b5cf6' },
      { label: 'Lansia (65+ tahun)', value: 1292, percentage: 7.0, color: '#ef4444' },
    ],
  },
  education: {
    title: 'Tingkat Pendidikan',
    description: 'Tingkat pendidikan tertinggi yang dicapai oleh warga Kelurahan Ciptomulyo.',
    items: [
      { label: 'Tidak/Belum Sekolah', value: 2583, percentage: 14.0 },
      { label: 'SD / Sederajat', value: 4244, percentage: 23.0 },
      { label: 'SMP / Sederajat', value: 3506, percentage: 19.0 },
      { label: 'SMA / SMK / Sederajat', value: 6089, percentage: 33.0 },
      { label: 'Diploma (D1-D4)', value: 738, percentage: 4.0 },
      { label: 'Sarjana & Pascasarjana (S1-S3)', value: 1292, percentage: 7.0 },
    ],
  },
  occupation: {
    title: 'Mata Pencaharian',
    description: 'Kategori pekerjaan utama yang ditekuni warga usia kerja di Ciptomulyo.',
    items: [
      { label: 'Karyawan Swasta', value: 5166, percentage: 28.0 },
      { label: 'Wiraswasta / Pedagang', value: 3321, percentage: 18.0 },
      { label: 'Buruh Harian Lepas', value: 2952, percentage: 16.0 },
      { label: 'PNS / TNI / POLRI', value: 923, percentage: 5.0 },
      { label: 'Pelajar / Mahasiswa', value: 2768, percentage: 15.0 },
      { label: 'Belum/Tidak Bekerja / IRT', value: 3322, percentage: 18.0 },
    ],
  },
};
