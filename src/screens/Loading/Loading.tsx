import React from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Animated,
  Easing,
  ColorValue,
} from 'react-native';

interface LoadingScreenProps {
  message?: string;
  color?: ColorValue;
  spinnerSize?: number | 'small' | 'large';
  backgroundColor?: ColorValue;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({
  message = 'Cargando...',
  color = '#007AFF',
  spinnerSize = 'large',
  backgroundColor = '#FFFFFF',
}) => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const spinValue = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(spinValue, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={[styles.container, {backgroundColor}]}>
      <Animated.View
        style={[
          styles.content,
          {
            opacity: fadeAnim,
            transform: [{scale: fadeAnim}],
          },
        ]}>
        <Animated.View style={{transform: [{rotate: spin}]}}>
          <ActivityIndicator
            size={spinnerSize}
            color={color}
            style={styles.spinner}
          />
        </Animated.View>
        {message && (
          <Animated.Text
            style={[
              styles.message,
              {
                opacity: fadeAnim,
                color,
              },
            ]}>
            {message}
          </Animated.Text>
        )}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  spinner: {
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default LoadingScreen;

// Uso:
// <LoadingScreen />
// <LoadingScreen message="Iniciando sesión..." />
// <LoadingScreen color="#FF0000" backgroundColor="#000000" />
// <LoadingScreen spinnerSize="small" message="Cargando datos..." />
