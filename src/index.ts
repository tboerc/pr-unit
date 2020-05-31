import {Dimensions, ViewStyle, StyleSheet as ReactStyleSheet} from 'react-native';

const {width} = Dimensions.get('window');
const pr = Math.round((width >= 600 ? width / 1440 : width / 1080) * 1e3) / 1e3;

class StyleSheet {
  static absoluteFill = ReactStyleSheet.absoluteFill;
  static hairlineWidth = ReactStyleSheet.hairlineWidth;

  static create(style: {[key: string]: ViewStyle}, unit: number = pr): object {
    const predstyle: {[key: string]: any} = {};

    Object.entries(style).forEach(([name, object]) => {
      Object.entries(object).forEach(([key, value]) => {
        if (typeof value === 'number') predstyle[name][key] = value * unit;
        else predstyle[name][key] = value;
      });
    });
    return ReactStyleSheet.create(predstyle);
  }
}

export {StyleSheet};
export default pr;
