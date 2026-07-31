import { openBrowserAsync, WebBrowserPresentationStyle } from 'expo-web-browser';
import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

type Props = {
  href: string;
  children?: React.ReactNode;
};

export function ExternalLink({ href, children }: Props) {
  return (
    <Pressable
      onPress={async () => {
        await openBrowserAsync(href, {
          presentationStyle: WebBrowserPresentationStyle.AUTOMATIC,
        });
      }}
    >
      <Text style={styles.link}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  link: {
    color: '#174d38',
  },
});
