import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTitle: "my Zone App",
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
}