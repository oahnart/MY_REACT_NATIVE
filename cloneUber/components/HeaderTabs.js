import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const listTabs = ['Delivery', 'Pickup'];

function HeaderTabs() {
  const [active, setActive] = useState('Delivery');
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {listTabs?.map((list, index) => (
          <TouchableOpacity key={index} onPress={() => setActive(list)}>
            <Text
              style={[
                list === active ? styles.active : styles.unActive,
                styles.primary,
              ]}>
              {list}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

export default HeaderTabs;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10,
  },
  primary: {
    fontSize: 15,
    borderRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 6,
    fontWeight: 'bold',
  },
  active: {
    backgroundColor: '#000',
    color: '#fff',
  },
  unActive: {
    color: '#000',
  },
});

// const HeaderButton = props => {
//   <View>
//     <Text>{props.text}</Text>
//   </View>;
// };
