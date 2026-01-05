import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const SplashScreen = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/home");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/zone.png")}
        style={{ width: 350, height: 350, marginBottom: 20, borderRadius: 55 }}
      />
      <Text style={styles.title}>My Zone </Text>
      <Text style={styles.title2}>Welcome to My Zone App</Text>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={handleNavigate}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ color: "white", fontSize: 16 }}>Submit</Text>
            <Ionicons
              name="arrow-forward"
              size={24}
              color="red"
              style={{ marginLeft: 10 }}
            />
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#9823bcff",
  },
  container: {
    flex: 1,
    backgroundColor: "#e951cfff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
  },
  title2: {
    fontSize: 16,
    marginTop: 10,
  },
  buttonContainer: {
          width: "60%",
          marginTop: 20,
          justifyContent: "center",
          alignItems: "center",
           
        },
  button: {
    padding: 10,
   margin:10,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#9823bcff",
    borderRadius: 40,
  },
});
