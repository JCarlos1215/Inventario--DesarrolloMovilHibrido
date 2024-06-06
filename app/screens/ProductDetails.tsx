import React, {useEffect, useState} from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../App';
import {StackNavigationProp} from '@react-navigation/stack';
import {Product} from '../screens/model/products';

export type Params = {
  product: Product;
};

export type Props = {
  route: RouteProp<RootStackParamList, 'ProductDetails'>;
  navigation: StackNavigationProp<RootStackParamList, 'ProductDetails'>;
};

function ProductDetails({route, navigation}: Props): React.JSX.Element {
  const [product, setProduct] = useState<Product>(undefined!);
  useEffect(() => {
    setProduct(route.params.product);
  }, [route]);
  return (
    <SafeAreaView style={style.page}>
      {product && (
        <View>
          <Text style={style.header}>{product.nombre}</Text>
          <View style={style.row}>
            <Text style={[style.text, style.col]}>Existencias:</Text>
            <Text style={[style.text, style.colAuto]}>
              <Text
                style={
                  product.currentStock < product.minStock
                    ? style.stockError
                    : null
                }>
                {product.currentStock}
              </Text>{' '}
              / {product.maxStock}
            </Text>
          </View>
          <View style={style.row}>
            <Text style={[style.text, style.col]}>Precio:</Text>
            <Text style={[style.text, style.colAuto]}>
              $ {product.precio.toFixed(2)}
            </Text>
          </View>
        </View>
        
      )}<Text>{"\n"}</Text>
      <View style={style.row}>
        <Text>{"\n"}</Text>
        <Button title="Entrada" onPress={() => navigation.push('EntradasScreen', {product})}/>
        <Text>{"\n"}</Text>
        <Button title="Salida" onPress={() => navigation.push('SalidasScreen', {product})}/>
        <Text>{"\n"}</Text>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  page: {
    margin: 16,
  },
  header: {
    fontSize: 38,
    color: 'black',
    textShadowColor: '#D4412045',
    textAlign: 'center',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    padding: 2,
    margin:2,
  },
  col: {
    flexGrow: 999,
    
  },
  colAuto: {},
  stockError: {
    color: 'red',
  },
  text: {
    fontSize: 16,
    padding: 5,
    

  },
});

export default ProductDetails;
