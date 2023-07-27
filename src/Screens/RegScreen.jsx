import { useState } from "react";
import addImg from "../../assets/images/add.png";
import {
  TextInput,
  Text,
  View,
  StyleSheet,
  Pressable,
  Image,
  KeyboardAvoidingView,
} from "react-native";

export default RegScreen = () => {
  const [focusColorLogin, setFocusColorLogin] = useState("#e8e8e8");
  const [focusColorMail, setFocusColorMail] = useState("#e8e8e8");
  const [focusColorPass, setFocusColorPass] = useState("#e8e8e8");
  const [showPass, setShowPass] = useState(true);

  const [text, onChangeText] = useState("");
  const [email, onChangeEmail] = useState("");
  const [password, onChangePass] = useState("");

  const onFocusLogin = () => {
    setFocusColorLogin("#FF6C00");
    setFocusColorMail("#e8e8e8");
    setFocusColorPass("#e8e8e8");
  };
  const onFocusMail = () => {
    setFocusColorLogin("#e8e8e8");
    setFocusColorMail("#FF6C00");
    setFocusColorPass("#e8e8e8");
  };

  const onFocusPass = () => {
    setFocusColorLogin("#e8e8e8");
    setFocusColorMail("#e8e8e8");
    setFocusColorPass("#FF6C00");
  };

  const changeShowPass = () => {
    setShowPass(!showPass);
  };

  return (
  
      <View style={styles.Wrap}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={245}
        >
          <View style={styles.RegWrap}>
            <View style={styles.UserImgWrap}>
              <Image source={addImg} style={styles.AddIcon} />
            </View>
            <Text style={styles.Title}>Реєстрація</Text>
            <View style={styles.InputWrap}>
              <TextInput
                type="text"
                placeholder="Логін"
                placeholderTextColor={"#BDBDBD"}
                selectionColor="#212121"
                onFocus={() => onFocusLogin()}
                style={[{ borderColor: focusColorLogin }, styles.Input]}
                //   value={text}
                //   onChangeText={onChangeText}
              ></TextInput>
              <TextInput
                type="email"
                placeholder="Адреса електронної пошти"
                placeholderTextColor={"#BDBDBD"}
                selectionColor="#212121"
                onFocus={() => onFocusMail()}
                style={[{ borderColor: focusColorMail }, styles.Input]}
              ></TextInput>
              <View>
                <TextInput
                  type="password"
                  placeholder="Пароль"
                  maxLength={37}
                  value={password}
                  onChangeText={onChangePass}
                  secureTextEntry={showPass}
                  placeholderTextColor={"#BDBDBD"}
                  selectionColor="#212121"
                  onFocus={() => onFocusPass()}
                  style={[{ borderColor: focusColorPass }, styles.Input]}
                ></TextInput>

                <Pressable
                  onPress={() => changeShowPass()}
                  style={styles.ShowPas}
                  hitSlop={{ left: 32, bottom: 16, top: 16, right: 16 }}
                >
                  {password.length > 0 &&
                    (showPass ? (
                      <Text style={styles.ShowPassText}>Показати</Text>
                    ) : (
                      <Text style={styles.ShowPassText}>Сховати</Text>
                    ))}
                </Pressable>
              </View>
            </View>

            <Pressable style={styles.RegBtn}>
              <Text style={styles.BtnTitle}>Зареєструватися</Text>
            </Pressable>

            <Pressable style={styles.BtnLog}>
              <Text style={styles.BtnLogText}>Вже є аккаунт? Увійти</Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </View>
  );
};

const styles = StyleSheet.create({
  Wrap: {
    marginTop: 263,
    flex: 1,
    justifyContent: "flex-end",
  },

  RegWrap: {
    position: "relative",
    width: "100%",
    height: "100%",
    paddingTop: 92,
    paddingBottom: 78,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  Title: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 33,
    fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35.16,
    letterSpacing: 1.01,
  },

  InputWrap: {
    marginBottom: 43,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: 16,
    alignItems: "center",
  },

  Input: {
    width: 343,
    height: 50,
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#f6f6f6",
    borderRadius: 10,
    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 18.75,
    color: "#212121",
    borderWidth: 1,
  },

  RegBtn: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 16,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 343,
    height: 51,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  BtnTitle: {
    fontFamily: "Roboto",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 18.75,
    color: "#fff",
  },

  BtnLog: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  BtnLogText: {
    fontFamily: "Roboto",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 18.75,
    color: "#1B4371",
  },

  UserImgWrap: {
    position: "absolute",
    width: 120,
    height: 120,
    top: -60,
    left: "50%",
    transform: [{ translateX: -60 }],
    borderRadius: 16,
    backgroundColor: "#f6f6f6",
  },

  AddIcon: {
    position: "absolute",
    top: 81,
    left: 107.5,
  },
  ShowPas: {
    position: "absolute",
    top: 16,
    right: 16,
  },
  ShowPassText: {
    fontFamily: "Roboto",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 18.75,
    color: "#1B4371",
  },
});
