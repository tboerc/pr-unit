# Path to Responsiveness
It's a unit that scale's up based on the device's width. It works very well on phones and tablets, and it is very simple to use.

There is two ways of utilize it. One is using the embedded StyleSheet, that will take care of multiply all values with the "pr" unit, like:
```javascript
import {StyleSheet} from 'pr-unit';

const style = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
  }
});

export default style;
```
It will blacklist some values (flex, elevation, zIndex...) so you can simply change from the react-native to pr-unit, and just adjust some values. If you want to leave some value normal, just add a "_" before the value, like: 
```
const style = StyleSheet.create({
  container: {
    width: 100,
    height: `_${100}`,
  }
});
```
The other is getting the "pr" value, and multiply the value that you want to be responsive, like:
```javascript
import {StyleSheet} from 'react-native';
import pr from 'pr-unit';

const style = StyleSheet.create({
  container: {
    width: 100 * pr,
    height: 100 * pr,
  }
});

export default style;
```
