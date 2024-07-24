import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export type MyButtonProps = {
  onPress: () => void;
  text: string;
};

const Button = ({ onPress, text }: MyButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}
      className="w-[500px] bg-green-400"
    >
      <Text style={styles.text} className="text-red-700 w-[500]">
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'purple',
    borderRadius: 8,
  },
  text: { color: 'white' },
});
