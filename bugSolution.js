```javascript
// bugSolution.js
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyComponent = () => {
  const [backgroundColor, setBackgroundColor] = useState('black');

  const changeColor = () => {
    setBackgroundColor(backgroundColor === 'red' ? 'black' : 'red');
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { backgroundColor }]}>Hello</Text>
      <View>
          <Text onPress={changeColor}>Change Color</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    padding: 10,
  },
});

export default MyComponent;
```