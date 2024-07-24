import { StyleSheet, View } from 'react-native';
import { Typography } from 'react-native-ttm-design';

function App() {
  return (
    <View style={styles.container}>
      <Typography variant="SH" text={`Special Heading`} />
    </View>
  );
}

let AppEntryPoint = App;

if (process.env.STORYBOOK_ENABLED) {
  AppEntryPoint = require('../../.ondevice').default;
}

export default AppEntryPoint;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
