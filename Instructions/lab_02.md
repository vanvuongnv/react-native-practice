# Lab 02: Creating UI Basic Components
REACT Native provides a wide range of UI components that you can use to create your app's interface. In this section, you will learn how to create some of the most commonly used components.

## Text
The Text component is used to display text on the screen. You can use it like this:
```
import React from 'react';
import { Text } from 'react-native';

const App = () => {
  return (
    <Text>Hello, world!</Text>
  );
};

export default App;
```

## View
The View component is used to create a container that can hold other components. You can use it like this:
```
import React from 'react';
import { View, Text } from 'react-native';

const App = () => {
  return (
    <View>
      <Text>Hello, world!</Text>
    </View>
  );
};

export default App;
```

## Image
The Image component is used to display images on the screen. You can use it like this:
```
import React from 'react';
import { Image } from 'react-native';

const App = () => {
  return (
    <Image
      source={{ uri: 'https://via.placeholder.com/150' }}
      style={{ width: 150, height: 150 }}
    />
  );
};

export default App;
```

## Button
The Button component is used to create a button that the user can interact with. You can use it like this:
```
import React from 'react';
import { Button, View } from 'react-native';

const App = () => {
  return (
    <View>
      <Button
        title="Press me"
        onPress={() => alert('Button pressed')}
      />
    </View>
  );
};

export default App;
```

## Styling and Layout
In addition to creating UI components, you can also style and layout them to create visually appealing and responsive apps.
### Styling
You can style components using the style prop. The style prop takes an object with CSS-like properties. For example:
```
import React from 'react';
import { View, Text } from 'react-native';

const App = () => {
  return (
    <View style={{ backgroundColor: 'red', padding: 10 }}>
      <Text style={{ color: 'white' }}>Hello, world!</Text>
    </View>
  );
};

export default App;
```

### Layout
You can layout components using the flex property. The flex property takes a number that determines how much space the component should take up relative to its siblings. For example:
```
import React from 'react';
import { View } from 'react-native';

const App = () => {
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <View style={{ flex: 1, backgroundColor: 'red' }} />
      <View style={{ flex: 2, backgroundColor: 'green' }} />
      <View style={{ flex: 3, backgroundColor: 'blue' }} />
    </View>
  );
};

export default App;
```

### StyleSheet
A StyleSheet is an abstraction similar to CSS StyleSheets

```
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App = () => (
  <View style={styles.container}>
    <Text style={styles.title}>React Native</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default App;
```