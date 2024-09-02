const homes = [
    {
      id: '1',
      address: '123 Maple Street, Springfield, USA',
      imageUrl: 'https://via.placeholder.com/300x200.png?text=Home+1', // Random placeholder image
      description: 'A cozy 3-bedroom home with a beautiful garden.',
      latitude: 37.7749,
      longitude: -122.4194,
      isDisabled: true
    },
    {
      id: '2',
      address: '456 Oak Avenue, Springfield, USA',
      imageUrl: 'https://via.placeholder.com/300x200.png?text=Home+2', // Random placeholder image
      description: 'Modern 2-bedroom apartment in the city center.',
      latitude: 37.7849,
      longitude: -122.4294,
      isDisabled: false
    },
    {
      id: '3',
      address: '789 Pine Lane, Springfield, USA',
      imageUrl: 'https://via.placeholder.com/300x200.png?text=Home+3', // Random placeholder image
      description: 'Spacious 4-bedroom house with a pool.',
      latitude: 37.7949,
      longitude: -122.4394,
      isDisabled: false
    },
  ];
  
  export interface Home {
    id: string;
    address: string;
    imageUrl: string;
    description: string;
    latitude: number;
    longitude: number;
  }

export const fetchHomes = async (): Promise<Home[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(homes);
      }, 1000);
    });
  };
  