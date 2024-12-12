import React, {useMemo} from 'react';
import {SafeAreaView} from 'react-native';
import {
  Card,
  Divider,
  Layout,
  TopNavigation,
  Text,
  List,
} from '@ui-kitten/components/ui';
import {getDashboardData} from '../../services/home.service';
import {Investment} from '../../types/home.types';
import {useNavigation} from '@react-navigation/native';

function HomeScreen() {
  const [data, setData] = React.useState<Investment[]>([]);
  const navigate = useNavigation();

  React.useEffect(() => {
    getDashboardData().then(res => {
      setData(res);
    });
  }, []);

  const {totalPortfolio, averageReturn} = useMemo(() => {
    const total = data.reduce((sum, inv) => sum + inv.price, 0);

    const avgReturn = (
      data.reduce((sum, inv) => sum + inv.price, 0) / data.length
    ).toFixed(2);

    return {
      totalPortfolio: total,
      averageReturn: avgReturn,
    };
  }, [data]);

  const renderInvestmentItem = ({item}: {item: Investment}) => {
    const onClickItem = () => {
      navigate.navigate('Detail', {
        ...item,
      });
    };

    return (
      <Card onPress={onClickItem}>
        <Layout style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Layout>
            <Text category="s1">{item.name}</Text>
            <Text appearance="hint" category="c1">
              {item.symbol}
            </Text>
          </Layout>
          <Layout style={{alignItems: 'flex-end'}}>
            <Text category="s1">${item.price.toLocaleString()}</Text>
            <Layout style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                category="c1"
                status={item.daily_change > 0 ? 'success' : 'danger'}>
                {item.daily_change}
              </Text>
            </Layout>
          </Layout>
        </Layout>
      </Card>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation title="Home - Investor" alignment="center" />
      <Divider />
      <Layout style={{flex: 1, padding: 16}}>
        <Layout
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 16,
          }}>
          <Card style={{flex: 1, marginRight: 8}}>
            <Text appearance="hint" category="c1">
              Portfolio Total
            </Text>
            <Text category="h6">${totalPortfolio.toLocaleString()}</Text>
          </Card>

          <Card style={{flex: 1, marginLeft: 8}}>
            <Text appearance="hint" category="c1">
              Perfomance
            </Text>
            <Text category="h6">{averageReturn}%</Text>
          </Card>
        </Layout>

        <List
          data={data}
          renderItem={renderInvestmentItem}
          ItemSeparatorComponent={Divider}
        />
      </Layout>
    </SafeAreaView>
  );
}

export default HomeScreen;
