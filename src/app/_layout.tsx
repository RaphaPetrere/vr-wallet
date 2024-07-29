import { Stack } from 'expo-router';
import theme from '../theme';
import { CartoesProvider } from '../hooks/cartoes';

const Layout = () => {
  return (
    <CartoesProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.lighterGray,
          },
          headerTintColor: theme.accent,
          headerTitleAlign: 'center'
        }}
      />
    </CartoesProvider>
  );
}
export default Layout;
