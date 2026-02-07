
export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  type: 'current' | 'upcoming';
  image: string;
}

export interface Community {
  id: string;
  name: string;
  shortName: string;
  description: string;
  details: string;
  color: string;
  events: Event[];
}
