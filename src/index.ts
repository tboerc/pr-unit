// Imports
import {Dimensions, ViewStyle, ImageStyle, TextStyle, StyleSheet as ReactStyleSheet} from 'react-native';
import blacklist from './blacklist';

// Types and Interfaces
interface Config {
  unit: number;
  blacklist: Array<string>;
}

type NamedStyles<T> = {[P in keyof T]: ViewStyle | TextStyle | ImageStyle};

// Base pr calc
const {width} = Dimensions.get('window');
const pr = Math.round((width >= 600 ? width / 1440 : width / 1080) * 1e3) / 1e3;

// Default config object
const _config: Config = {unit: pr, blacklist};

// Function to check key in blacklist
const checkBlackList = (blacklist: Array<string>, key: string) => !blacklist.some((value) => key == value);

class StyleSheet {
  static compose = ReactStyleSheet.compose;
  static absoluteFill = ReactStyleSheet.absoluteFill;
  static hairlineWidth = ReactStyleSheet.hairlineWidth;

  static create<T extends NamedStyles<T> | NamedStyles<any>>(style: T | NamedStyles<T>, config: Config = _config) {
    Object.entries(style).forEach(([key, value]) => {
      Object.entries(value).forEach(([subKey, subValue]) => {
        if (typeof subValue === 'number' && checkBlackList(config.blacklist, subKey))
          style[key][subKey] = subValue * config.unit;
        else if (typeof subValue === 'string' && subValue.startsWith('_'))
          style[key][subKey] = parseFloat(subValue.replace('_', ''));
        else style[key][subKey] = subValue;
      });
    });
    return ReactStyleSheet.create(style);
  }
}

export {StyleSheet};
export default pr;
