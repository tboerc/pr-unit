# Rem
It's a very simple package that helps a lot to make the application responsive. To use, simple multiply all project sizes with the "rem".

## Basic usage
```javascript
import { Stylesheet } from 'react-native';
import rem from 'react-native-rem';

const style = Stylesheet.create({
  container: {
    width: 100 * rem,
    height: 100 * rem,
  }
});

export default style;
```
