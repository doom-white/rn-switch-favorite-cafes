import React, {useState} from 'react';
import {
  SafeAreaView,
  Switch,
  StyleSheet,
  Text,
  FlatList,
  View,
} from 'react-native';

const App = () => {
  const data = [
    {id: 0, name: 'Teras Cafe', isFav: false},
    {id: 1, name: 'Mado', isFav: true},
    {id: 2, name: "Cafe'de Paris", isFav: true},
    {id: 3, name: 'Otogar Cafe', isFav: false},
    {id: 4, name: 'Cafe.exe', isFav: false},
    {id: 5, name: 'Cafe Blue', isFav: false},
    {id: 6, name: 'Jazz Cafe', isFav: true},
    {id: 7, name: 'Türkü Kafe', isFav: false},
    {id: 8, name: 'Cafe Quens', isFav: true},
    {id: 9, name: 'King Cafe', isFav: false},
  ];

  const [cafeList, setCafeList] = useState(data);
  const [isOpen, setIsOpen] = useState(false);
  const [thmbColor, setThmbColor] = useState('#d1ccc0');
  const [bgColor, setBgColor] = useState('#d1ccc0');

  const getCafeList = ({item}) => (
    <Text style={[styles.flatText, {backgroundColor: bgColor}]}>
      {item.name}
    </Text>
  );
  const changeOpenStatus = value => {
    setIsOpen(value);
    value ? setCafeList(cafeList.filter(c => c.isFav)) : setCafeList(data);
    value ? setThmbColor('#ffb142') : setThmbColor('#d1ccc0');
    value ? setBgColor('#ffb142') : setBgColor('#d1ccc0');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.switchContainer}>
        <Text style={styles.title}>Show only favorite cafes...</Text>
        <Switch
          value={isOpen}
          onValueChange={changeOpenStatus}
          trackColor={{true: '#b33939'}}
          thumbColor={thmbColor}
        />
      </View>
      <FlatList
        style={styles.flatContainer}
        data={cafeList}
        renderItem={getCafeList}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#227093',
    flex: 1,
  },
  switchContainer: {
    backgroundColor: '#ff5252',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 0.1,
    paddingHorizontal: 9,
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#f7f1e3',
  },
  flatText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#2c2c54',
    marginBottom: 3,
    padding: 15,
    borderRadius: 10,
  },
  flatContainer: {
    padding: 15,
    flex: 1,
  },
});

export default App;
