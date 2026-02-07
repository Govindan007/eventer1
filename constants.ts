
import { Community } from './types';

export const COMMUNITIES: Community[] = [
  {
    id: 'csi',
    name: 'Computer Society of India',
    shortName: 'CSI',
    description: 'Pioneering technical excellence through innovation and collaborative research.',
    details: 'CSI is the largest body of computer professionals in India. Our chapter focuses on building industry-ready skills through workshops, hackathons, and guest lectures from industry veterans.',
    color: '#00f2ff',
    events: [
      {
        id: 'csi-1',
        title: 'Algo-Master Hackathon',
        date: 'Oct 15, 2024',
        description: 'A 24-hour challenge to solve complex algorithmic problems.',
        type: 'current',
        image: 'https://picsum.photos/seed/csi1/800/400'
      },
      {
        id: 'csi-2',
        title: 'Quantum Computing Workshop',
        date: 'Nov 02, 2024',
        description: 'Introduction to qubits and quantum algorithms.',
        type: 'upcoming',
        image: 'https://picsum.photos/seed/csi2/800/400'
      }
    ]
  },
  {
    id: 'ieee',
    name: 'Institute of Electrical and Electronics Engineers',
    shortName: 'IEEE',
    description: 'Advancing technology for the benefit of humanity.',
    details: 'IEEE Student Branch provides opportunities for professional networking, leadership, and technical skill enhancement across all engineering disciplines.',
    color: '#3b82f6',
    events: [
      {
        id: 'ieee-1',
        title: 'Robotics Championship',
        date: 'Oct 20, 2024',
        description: 'Annual battle of custom-built autonomous robots.',
        type: 'current',
        image: 'https://picsum.photos/seed/ieee1/800/400'
      },
      {
        id: 'ieee-2',
        title: 'Smart Cities Summit',
        date: 'Dec 12, 2024',
        description: 'Exploring the future of urban infrastructure.',
        type: 'upcoming',
        image: 'https://picsum.photos/seed/ieee2/800/400'
      }
    ]
  },
  {
    id: 'gdg',
    name: 'Google Developer Groups on Campus',
    shortName: 'GDG',
    description: 'Learn, build, and grow together with Google technologies.',
    details: 'GDG on Campus connects students with the latest Google tech stack, providing hands-on experience and community-driven learning paths.',
    color: '#10b981',
    events: [
      {
        id: 'gdg-1',
        title: 'DevFest 2024',
        date: 'Oct 25, 2024',
        description: 'The biggest developer festival on campus.',
        type: 'current',
        image: 'https://picsum.photos/seed/gdg1/800/400'
      },
      {
        id: 'gdg-2',
        title: 'Flutter Forward',
        date: 'Nov 15, 2024',
        description: 'Deep dive into cross-platform mobile development.',
        type: 'upcoming',
        image: 'https://picsum.photos/seed/gdg2/800/400'
      }
    ]
  }
];
