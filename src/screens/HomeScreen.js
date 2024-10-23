import { View, Text, Image, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Color, { theme } from '../../utilities/Color';
import Ionicons from 'react-native-vector-icons/Ionicons';
const HomeScreen = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [locations, setLocations] = useState([1, 2, 3]);
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Image source={require('../../assets/images/bg.png')} style={styles.backgroundImage} blurRadius={70} />
      <SafeAreaView style={styles.safeArea}>
        {/* Search section */}
        <View style={styles.searchContainer}>
          <View style={styles.innerContainer}>
            {showSearch ? (
              <TextInput style={styles.textInput} placeholder="Search City" placeholderTextColor={'#FFFFFF'} />
            ) : null}

            <TouchableOpacity onPress={() => setShowSearch(!showSearch)} style={styles.searchIcon}>
              <Ionicons name="search-outline" size={25} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
          {locations.length > 0 && showSearch ? (
            <View style={styles.locations}>
              {locations.map((loc, index) => {
                let showBorder = index + 1 !== locations.length;
                return (
                  <TouchableOpacity key={index} style={[styles.touchableOpacity, showBorder && styles.borderBottom]}>
                    <Text>
                      <Ionicons name="location" size={16} />
                      London,United Kingdom
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          ) : null}
        </View>
      </SafeAreaView>
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
  safeArea: {
    flex: 1
  },
  searchContainer: {
    height: 70,
    position: 'relative',
    zIndex: 50,
    marginTop: 55,
    marginHorizontal: 16
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 999,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.2)  '
  },
  textInput: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 24,
    height: 50,
    fontSize: 16,
    color: '#FFFFFF'
  },
  searchIcon: {
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
    flexDirection: 'row', // flex-row
    alignItems: 'center', // items-center
    borderWidth: 0, // border-0
    paddingVertical: 12, // p-3 (3 * 4px = 12px)
    paddingHorizontal: 16, // px-4 (4 * 4px = 16px)
    marginBottom: 4 // mb-1 (1 * 4px = 4px)
  },

  borderBottom: {
    borderBottomWidth: 2 // border-b-gray-400
  }
});

export default HomeScreen;
// style={{ backgroundColor: showSearch? theme.bgWhite(0.2) : "transparent"   }}
