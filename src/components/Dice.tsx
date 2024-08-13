import {Image, ImageSourcePropType, StyleSheet, View} from 'react-native';
import React, {PropsWithChildren} from 'react';

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

function Dice({imageUrl}: DiceProps): React.JSX.Element {
  return (
    <View>
      <Image style={styles.image} source={imageUrl} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
  },
});

export default Dice;
