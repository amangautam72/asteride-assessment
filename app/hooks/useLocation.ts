import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

interface LocationCoords {
    latitude: number;
    longitude: number;
  }
  
  interface LocationType {
    coords: LocationCoords;
    timestamp: number;
  }
  
  
  interface UseLocationReturnType {
    location: LocationType | null;
    errorMsg: string;
  }

export function useLocation(): UseLocationReturnType {
  const [location, setLocation] = useState<LocationType | null>(null);
  const [errorMsg, setErrorMsg] = useState<string>("");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return { location, errorMsg };
}
