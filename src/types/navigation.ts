import type { DrawerScreenProps } from '@react-navigation/drawer';
import type { CompositeScreenProps } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootDrawerParamList = {
  Home: undefined;
  'Box Number': undefined;
  'Hard Way': undefined;
  'Pass Line': undefined;
  'C&E': undefined;
};

export type RootStackParamList = {
  StackHome: undefined;
  Details: undefined;
};

export type DrawerScreenName = keyof RootDrawerParamList;

export type RootDrawerScreenProps<T extends DrawerScreenName> = DrawerScreenProps<
  RootDrawerParamList,
  T
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootDrawerParamList {}
  }
}
