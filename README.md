# Path to Responsiveness
It's a very simple package that helps a lot to make the application responsive. To use, simple multiply all project sizes with the "pr".

## Basic usage
```javascript
import { StyleSheet } from 'react-native';
import pr from 'pr-unit';

const style = StyleSheet.create({
  container: {
    width: 100 * pr,
    height: 100 * pr,
  }
});

export default style;
```
