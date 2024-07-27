import { Stack } from 'expo-router';
import theme from '../theme';

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.lighterGray,
        },
        headerTintColor: theme.accent,
        headerTitleAlign: 'center'
      }}
    />
  );
}
export default Layout;
