import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import HeaderTabs from './components/HeaderTabs';

const App = () => {
  return (
    <SafeAreaView>
      <HeaderTabs />
      {/* <View style={styles.container}>
        <View>
          <Text>item1</Text>
        </View>
        <View>
          <Text>item2</Text>
        </View>
      </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 50,
    alignSelf: 'center',
    paddingVertical: 50,
  },
});

export default App;
