import React, {useState} from 'react';
import {
  ImageSourcePropType,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Vibration,
  Platform,
} from 'react-native';

// images
import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';

// components
import Dice from './components/Dice';

function App(): React.JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;
      case 3:
        setDiceImage(DiceThree);
        break;
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      case 6:
        setDiceImage(DiceSix);
        break;
    }

    // Trigger vibration
    if (Platform.OS === 'android') {
      Vibration.vibrate([0, 100, 0, 0]);
      console.log('Android vibration triggered');
    } else {
      Vibration.vibrate(100);
      console.log('iOS vibration triggered');
    }
  };

  return (
    <SafeAreaView style={styles.appContainer}>
      <View>
        <Dice imageUrl={diceImage} />
        <Pressable style={styles.rollButton} onPress={rollDice}>
          <Text style={styles.rollButtonText}>Roll the dice!</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rollButton: {
    marginTop: 60,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7286d3',
    fontWeight: 'bold',
  },
  rollButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
