/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceItem } from '../types';

export const services: ServiceItem[] = [
  {
    id: '1',
    title: 'Surat Pengantar RT/RW',
    category: 'Umum',
    description: 'Surat keterangan awal yang diperlukan warga sebagai dasar untuk mengurus berbagai dokumen kependudukan maupun kebutuhan administratif lainnya.',
    requirements: [
      'Kartu Tanda Penduduk (KTP) asli & fotokopi',
      'Kartu Keluarga (KK) asli & fotokopi',
      'Mengisi formulir permohonan di Ketua RT masing-masing',
    ],
    steps: [
      'Menghubungi Ketua RT setempat untuk meminta tanda tangan formulir pengantar.',
      'Membawa formulir tersebut ke Ketua RW untuk ditandatangani dan diberi stempel RW.',
      'Surat pengantar RT/RW siap digunakan untuk mengurus layanan selanjutnya di kantor Kelurahan.'
    ],
    duration: '15 Menit di Ketua RT/RW',
    cost: 'Gratis (Rp 0)',
  },
  {
    id: '2',
    title: 'Penerbitan Kartu Tanda Penduduk (KTP-el)',
    category: 'Kependudukan',
    description: 'Pelayanan pengurusan KTP elektronik baru, penggantian karena rusak, hilang, atau perubahan data bagi warga Ciptomulyo.',
    requirements: [
      'Surat Pengantar RT/RW',
      'Fotokopi Kartu Keluarga (KK)',
      'KTP lama (untuk kasus rusak atau perubahan data)',
      'Surat Keterangan Kehilangan dari Kepolisian (untuk kasus KTP hilang)',
      'Fotokopi Akta Kelahiran'
    ],
    steps: [
      'Warga membawa seluruh berkas persyaratan ke loket pelayanan kelurahan.',
      'Petugas kelurahan memverifikasi berkas dan menerbitkan surat pengantar perekaman/pencetakan.',
      'Warga melanjutkan proses ke Kantor Kecamatan Sukun untuk perekaman iris mata/sidik jari atau pencetakan kartu.'
    ],
    duration: '1 Hari Kerja (Pencetakan di Kecamatan)',
    cost: 'Gratis (Rp 0)',
  },
  {
    id: '3',
    title: 'Pembaruan Kartu Keluarga (KK)',
    category: 'Kependudukan',
    description: 'Pelayanan penerbitan Kartu Keluarga baru karena penambahan anggota keluarga (kelahiran), pengurangan anggota (kematian/pindah), atau karena hilang/rusak.',
    requirements: [
      'Surat Pengantar RT/RW',
      'Kartu Keluarga (KK) asli yang lama',
      'Fotokopi Akta Kelahiran (jika ada penambahan anggota lahir)',
      'Fotokopi Surat Nikah / Akta Cerai',
      'Surat Keterangan Kematian (jika ada pengurangan anggota meninggal)',
      'Surat Keterangan Pindah (jika ada anggota yang pindah keluar/masuk)'
    ],
    steps: [
      'Menyerahkan dokumen persyaratan lengkap kepada petugas pelayanan kelurahan.',
      'Petugas melakukan entri data ke Sistem Informasi Administrasi Kependudukan (SIAK).',
      'Petugas memberikan bukti tanda terima pengurusan.',
      'Dokumen dikirim ke Dispendukcapil Kota Malang untuk pencetakan TTE (Tanda Tangan Elektronik).',
      'Warga dapat mengambil KK baru di kantor kelurahan setelah selesai dicetak.'
    ],
    duration: '2 - 3 Hari Kerja',
    cost: 'Gratis (Rp 0)',
  },
  {
    id: '4',
    title: 'Surat Keterangan Tidak Mampu (SKTM)',
    category: 'Kesejahteraan',
    description: 'Surat keterangan resmi yang membuktikan bahwa keluarga pemohon tergolong kurang mampu secara ekonomi, biasanya digunakan untuk bantuan sekolah (KIP), jaminan kesehatan, atau keringanan biaya medis.',
    requirements: [
      'Surat Pengantar RT/RW',
      'Fotokopi Kartu Keluarga (KK) & KTP-el pemohon',
      'Fotokopi Kartu Perlindungan Sosial (KKS/KPS/PKH) jika memiliki',
      'Surat Pernyataan Mutlak Tidak Mampu yang ditandatangani di atas materai Rp10.000',
      'Foto rumah tampak depan/keseluruhan (opsional, sebagai pendukung)'
    ],
    steps: [
      'Warga menyerahkan berkas persyaratan ke loket pelayanan umum kelurahan.',
      'Kasi Pemberdayaan Masyarakat melakukan verifikasi data kemiskinan pada DTKS (Data Terpadu Kesejahteraan Sosial).',
      'Jika memenuhi kualifikasi, draf SKTM dicetak dan diparaf oleh Kepala Seksi.',
      'Lurah menandatangani SKTM secara resmi.',
      'Warga menerima lembar SKTM asli berstempel kelurahan.'
    ],
    duration: '1 Hari Kerja',
    cost: 'Gratis (Rp 0)',
  },
  {
    id: '5',
    title: 'Surat Keterangan Usaha (SKU)',
    category: 'Umum',
    description: 'Surat keterangan resmi dari Kelurahan untuk menyatakan bahwa warga yang bersangkutan benar memiliki usaha mikro/kecil di wilayah Ciptomulyo. Berguna untuk pengajuan modal usaha/Kredit Usaha Rakyat (KUR).',
    requirements: [
      'Surat Pengantar RT/RW (menerangkan jenis usaha dan alamat tempat usaha)',
      'Fotokopi KTP-el & Kartu Keluarga (KK)',
      'Foto kegiatan tempat usaha/barang dagangan',
      'Surat Pernyataan Kepemilikan Usaha'
    ],
    steps: [
      'Warga mengajukan berkas ke petugas kelurahan.',
      'Petugas melakukan pencatatan dan verifikasi lokasi usaha (bila diperlukan koordinasi dengan Babinsa/Bhabinkamtibmas).',
      'Staf kelurahan mencetak draf Surat Keterangan Usaha.',
      'Lurah Ciptomulyo menandatangani dokumen SKU.',
      'Warga mengambil SKU asli untuk digunakan sebagai kelengkapan berkas perbankan.'
    ],
    duration: '1 Hari Kerja',
    cost: 'Gratis (Rp 0)',
  },
  {
    id: '6',
    title: 'Surat Keterangan Kematian',
    category: 'Kependudukan',
    description: 'Surat keterangan resmi untuk mencatat kematian warga Ciptomulyo guna kepengurusan klaim asuransi, warisan, pensiun, maupun penghapusan data dari Kartu Keluarga.',
    requirements: [
      'Surat Pengantar RT/RW',
      'Surat Keterangan Kematian dari Rumah Sakit / Dokter (jika meninggal di RS)',
      'Fotokopi KTP & KK yang meninggal',
      'Fotokopi KTP pelapor (ahli waris)',
      'Fotokopi KTP 2 orang saksi dari tetangga terdekat'
    ],
    steps: [
      'Pelapor mengurus surat pengantar kematian ke RT dan RW.',
      'Membawa berkas pengantar dan berkas pendukung ke loket Kelurahan.',
      'Petugas menginput data kematian ke dalam sistem dan mencetak draf Surat Keterangan Kematian.',
      'Lurah menandatangani dokumen.',
      'Pelapor menerima Surat Keterangan Kematian yang sah dari Kelurahan.'
    ],
    duration: '30 Menit',
    cost: 'Gratis (Rp 0)',
  },
  {
    id: '7',
    title: 'Pendaftaran Waris & Hak Tanah',
    category: 'Pertanahan',
    description: 'Layanan administrasi pertanahan awal untuk pengurusan Surat Pernyataan Ahli Waris atau pengantar peralihan hak atas tanah di wilayah Kelurahan.',
    requirements: [
      'Surat Pengantar RT/RW',
      'Fotokopi KTP seluruh ahli waris',
      'Fotokopi Kartu Keluarga (KK)',
      'Fotokopi sertifikat tanah atau Letter C / Petok D',
      'Surat Kematian Pewaris asli',
      'Draf Surat Keterangan Waris yang disetujui seluruh ahli waris dan bermaterai'
    ],
    steps: [
      'Para ahli waris mengajukan draf kesepakatan waris bersama berkas kepemilikan tanah.',
      'Pihak kelurahan melakukan pengecekan buku Letter C Kelurahan untuk memastikan kepemilikan.',
      'Petugas menjadwalkan verifikasi tatap muka dengan seluruh ahli waris dan saksi-saksi.',
      'Setelah semua pihak sepakat, Lurah membubuhkan tanda tangan pengesahan pada Surat Pernyataan Waris.'
    ],
    duration: '3 - 5 Hari Kerja (tergantung kelengkapan berkas & kehadiran waris)',
    cost: 'Gratis (Rp 0)',
  }
];
