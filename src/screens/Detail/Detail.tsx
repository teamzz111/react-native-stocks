import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  Divider,
  Icon,
  IconElement,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import {TouchableWebElement} from '@ui-kitten/components/devsupport';
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Investment} from '../../types/home.types';
import {useNavigation} from '@react-navigation/native';

const BackIcon = (): IconElement => <Icon name="arrow-back" />;

const renderBackAction = (onBack: () => void): TouchableWebElement => (
  <TopNavigationAction onPress={onBack} icon={BackIcon} />
);

type RootStackParamList = {
  Detail: Investment;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;

const DetailScreen = ({route}: Props) => {
  const navigation = useNavigation();
  const onBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <TopNavigation
        alignment="center"
        title={route.params.name}
        subtitle={route.params.symbol}
        accessoryLeft={() => renderBackAction(onBack)}
        style={{flex: 1}}
      />
      <Divider />
      <View style={{padding: 10}}>
        <Text>Price: ${route.params.price}</Text>
        <Divider style={{marginVertical: 10}} />
        <Text>
          {route.params.symbol}, Variation: {route.params.daily_change}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default DetailScreen;
