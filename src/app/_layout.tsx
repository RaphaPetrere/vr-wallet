import { Stack } from 'expo-router';
import theme from '../theme';
import { CartoesProvider } from '../hooks/cartoes';
import { RootSiblingParent } from 'react-native-root-siblings';

const Layout = () => {
  return (
    <RootSiblingParent>
      <CartoesProvider>
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: theme.lighterGray,
            },
            headerTintColor: theme.accent,
            headerTitleAlign: 'center',
            headerBackTitleVisible: false
          }}
        />
      </CartoesProvider>
    </RootSiblingParent>
  );
}
export default Layout;
