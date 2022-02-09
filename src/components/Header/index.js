import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';

export default function Header({onBack}) {
  const backIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg>`;
  return (
    <View style={styles.header}>
      {onBack && (
        <TouchableOpacity onPress={onBack}>
          <SvgXml width={20} height={20} fill="#FFFFFF" xml={backIcon} />
        </TouchableOpacity>
      )}
      <Text>
        <Text style={styles.textLogo}>Movie</Text>
        <Text style={styles.textLogoLight}>box</Text>
      </Text>
      <View />
    </View>
  );
}

const styles = StyleSheet.create({
  textLogo: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 20,
  },
  textLogoLight: {
    color: '#FFFFFF',
    fontWeight: '400',
    fontSize: 20,
  },
  header: {
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
