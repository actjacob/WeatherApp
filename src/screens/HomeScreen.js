import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Color, { theme } from '../../utilities/Color';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { debounce, set } from 'lodash';
import { fetchLocations } from '../../api/weatherApi';
import { fetchWeatherForecast } from '../../api/weatherApi';
import { weatherImages } from '../../constants/constans';
import * as Progress from 'react-native-progress';

const HomeScreen = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [locations, setLocations] = useState([]);
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);

  const handleLocation = (loc) => {
    // console.log('location: ', loc);
    setLocations([]);
    setShowSearch(false);
    setLoading(true);
    fetchWeatherForecast({
      cityName: loc.name,
      days: '7'
    }).then((data) => {
      setWeather(data);
      setLoading(false);
      storeData('city', loc.name);
      console.log('got forecast: ', data);
    });
  };

  const handleSearch = (value) => {
    // fetch locations
    if (value.length > 2) {
      fetchLocations({ cityName: value }).then((data) => {
        setLocations(data);
      });
    }
  };

  useEffect(() => {
    fetchMyWeatherData();
  }, []);

  const fetchMyWeatherData = async () => {
    // let myCity = await getData('city');
    // let cityName = 'Berlin';
    // if (myCity) cityName = myCity;

    fetchWeatherForecast({
      cityName: 'Berlin',
      days: '7'
    }).then((data) => {
      setWeather(data);
      setLoading(false);
    });
  };
  const handleTextDebounce = useCallback(debounce(handleSearch, 400), []);

  // const formatCountryName = (country) => {
  //   return country === 'Truthahn' ? 'Turkey' : country;
  // };

  const { current, location } = weather;

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={require('../../assets/images/bg.png')}
        style={styles.backgroundImage}
        blurRadius={70}
      />
      {loading ? (
        <View style={styles.loading}>
          <Progress.CircleSnail thickness={10} size={140} color="#0bb3b2" />
          {/* <Text style={styles.loadingText}>Loading...</Text> */}
        </View>
      ) : (
        <SafeAreaView style={styles.safeArea}>
          {/* Search section */}
          <View style={styles.searchContainer}>
            <View
              style={[
                styles.innerContainer,
                {
                  backgroundColor: showSearch ? 'rgba(255, 255, 255, 0.2)' : 'transparent'
                }
              ]}>
              <TextInput
                onChangeText={handleTextDebounce}
                style={[styles.textInput, { opacity: showSearch ? 1 : 0 }]}
                placeholder="Search City"
                placeholderTextColor={'#FFFFFF'}
                editable={showSearch}
              />

              <TouchableOpacity
                onPress={() => setShowSearch(!showSearch)}
                style={styles.searchIcon}>
                <Ionicons name="search-outline" size={25} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
            {locations.length > 0 && showSearch ? (
              <View style={styles.locations}>
                {locations.map((loc, index) => {
                  let showBorder = index + 1 !== locations.length;
                  return (
                    <TouchableOpacity
                      onPress={() => handleLocation(loc)}
                      key={index}
                      style={[styles.touchableOpacity, showBorder && styles.borderBottom]}>
                      <Text>
                        <Ionicons name="location" size={16} />
                        {loc?.name},{loc?.country}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}
          </View>
          {/* forecast section */}
          <View style={styles.forecastSection}>
            {/* location */}
            <Text style={styles.locationText}>
              {location?.name},<Text style={styles.countryText}>{' ' + location?.country} </Text>
            </Text>

            {/* weather image */}
            <View style={styles.weatherImageContainer}>
              <Image source={weatherImages[current?.condition?.text]} style={styles.weatherImage} />
            </View>

            {/* degree celcius */}
            <View style={styles.degreeContainer}>
              <Text style={styles.temperatureText}>
                {/* Math.round */}
                {`${current?.temp_c} ${String.fromCharCode(176)}`}
              </Text>
              <Text style={styles.weatherDescriptionText}>{current?.condition?.text} </Text>
            </View>
            {/* other status */}
            <View style={styles.statusContainer}>
              <View style={styles.status}>
                <Image source={require('../../assets/icons/wind.png')} style={styles.statusImage} />
                <Text style={styles.statusText}>{current?.wind_kph}km</Text>
              </View>
              <View style={styles.status}>
                <Image source={require('../../assets/icons/drop.png')} style={styles.statusImage} />
                <Text style={styles.statusText}>{current?.humidity}% </Text>
              </View>
              <View style={styles.status}>
                <Image source={require('../../assets/icons/sun.png')} style={styles.statusImage} />
                <Text style={styles.statusText}>6:05 AM</Text>
              </View>
            </View>
          </View>

          {/* forecast for next days */}

          <View style={styles.forecastContainer}>
            <View style={styles.forecast}>
              <Ionicons name="calendar" size={22} color="white" />
              <Text style={styles.forecastText}>Daily Forecast</Text>
            </View>

            <ScrollView
              horizontal={true}
              contentContainerStyle={styles.forecastScrollView}
              showsHorizontalScrollIndicator={false}>
              {weather?.forecast?.forecastday?.map((item, index) => {
                let date = new Date(item.date);
                let options = { weekday: 'long' };
                let dayName = date.toLocaleDateString('en-US', options);
                return (
                  <View key={index} style={styles.card}>
                    <Image
                      source={weatherImages[item?.day?.condition?.text]}
                      style={styles.forecastImage}
                    />
                    <Text style={styles.dayText}>{dayName}</Text>
                    <Text style={styles.tempText}>
                      {`${item?.day?.avgtemp_c} ${String.fromCharCode(176)}`}
                    </Text>
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </SafeAreaView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },
  backgroundImage: {
    position: 'absolute',
    height: '100%',
    width: '100%'
  },
  loading: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingText: {
    color: 'white',
    fontSize: 32
  },
  safeArea: {
    flex: 1
  },
  searchContainer: {
    height: 70,
    // position: 'relative',
    zIndex: 50,
    marginTop: 55,
    marginHorizontal: 16
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 999,
    justifyContent: 'space-between',
    // position: 'absolute',
    backgroundColor: 'transparent'
    // backgroundColor: 'rgba(255, 255, 255, 0.2)  '
  },
  textInput: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: 24,
    height: 50,
    fontSize: 16,
    color: '#FFFFFF'
  },
  searchIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 999,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    padding: 12
  },
  locations: {
    position: 'absolute',
    width: '100%',
    backgroundColor: '#D1D5DB',
    top: 64,
    borderRadius: 24
  },
  touchableOpacity: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 4
  },

  borderBottom: {
    borderBottomWidth: 2
  },
  forecastSection: {
    marginHorizontal: 16,
    flex: 1,
    justifyContent: 'space-around',
    marginBottom: 8
  },
  locationText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold'
  },
  countryText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#D1D5DB' // gray-300 in Tailwind
  },
  weatherImageContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  weatherImage: {
    width: 208, // w-52 in Tailwind (52 * 4)
    height: 208 // h-52 in Tailwind (52 * 4)
  },
  degreeContainer: {
    alignItems: 'center',
    marginVertical: 8 // space-y-2 converted to margin
  },
  temperatureText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 64,
    marginLeft: 20
  },
  weatherDescriptionText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    letterSpacing: 2 // tracking-widest in Tailwind
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8
  },
  statusImage: {
    height: 24,
    width: 24
  },
  statusText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 6
  },
  forecastContainer: {
    marginBottom: 8,
    paddingVertical: 12
  },
  forecast: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 8
  },
  forecastText: {
    color: 'white',
    fontSize: 16
  },
  forecastScrollView: {
    paddingHorizontal: 15
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 96,
    borderRadius: 24,
    paddingVertical: 12,
    marginHorizontal: 8,
    backgroundColor: 'rgba(255,255,255,0.15)'
  },
  forecastImage: {
    height: 44,
    width: 44
  },
  dayText: {
    color: 'white',
    fontSize: 16,
    marginTop: 4
  },
  tempText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600'
  }
});

export default HomeScreen;
// style={{ backgroundColor: showSearch? theme.bgWhite(0.2) : "transparent"   }}
