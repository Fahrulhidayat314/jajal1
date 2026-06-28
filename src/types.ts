/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface NewsArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  author: string;
  summary: string;
  content: string;
  image: string;
  reads: number;
  relatedIds: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  category: 'Kependudukan' | 'Kesejahteraan' | 'Umum' | 'Pertanahan';
  description: string;
  requirements: string[];
  steps: string[];
  duration: string;
  cost: string;
}

export interface Official {
  id: string;
  name: string;
  position: string;
  photoUrl: string;
  phone?: string;
}

export interface StatGroup {
  title: string;
  description: string;
  items: {
    label: string;
    value: number;
    percentage?: number;
    color?: string;
  }[];
}

export interface Complaint {
  id: string;
  ticketId: string;
  name: string;
  phone: string;
  category: string;
  subject: string;
  description: string;
  date: string;
  status: 'pending' | 'proses' | 'selesai';
  response?: string;
}

