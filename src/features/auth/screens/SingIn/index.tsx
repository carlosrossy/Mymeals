import React, { useEffect, useState } from "react";
import { StatusBar, Dimensions, TouchableOpacity, Alert } from "react-native";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";
import { AuthScreenNavigationProp } from "../../../../global/routes/auth.routes";
import { Spacer } from "../../../../global/components/Spacer";
import Button from "../../../../global/components/Button";
import { Controller, useForm } from "react-hook-form";
import { MaterialIcons } from "@expo/vector-icons";

import Text from "../../../../global/components/Text";
import { Input } from "../../../../global/components/Input";
import theme from "../../../../styles/theme";

import auth from "@react-native-firebase/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "../../schemas/SingIn";
import { useAuth } from "../../../../global/hook/auth";

export function SingIn() {
  const navigation = useNavigation<AuthScreenNavigationProp>();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const { SingIn, islogin, forgotPassword } = useAuth();

  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  function handleSingIn(data) {
    const { email, password } = data;
    SingIn(email, password, toggleCheckBox);
  }

  function handleForgot(data) {
    const { email } = data;
    forgotPassword(email);
  }

  return (
    <S.Container>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent={false}
      />
      <S.Header top={33}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Splash")}
          style={{ marginTop: -5 }}
        >
          <MaterialIcons
            name="arrow-back-ios"
            size={24}
            color={theme.colors.TITLE}
          />
        </TouchableOpacity>

        <Text variant="PoppinsMedium" color="TITLE" fontSize={24}>
          Login
        </Text>
      </S.Header>

      <Spacer height={34} />

      <S.Form>
        <Controller
          control={control}
          name="email"
          rules={{ required: "Email é obrigatório" }}
          render={({ field: { value, onChange } }) => (
            <Input
              onChangeText={onChange}
              value={value}
              title="E-mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize={"none"}
              errors={errors?.email}
            />
          )}
        />
        <Spacer height={12} />
        <Controller
          control={control}
          name="password"
          rules={{ required: "Senha é obrigatório" }}
          render={({ field: { value, onChange } }) => (
            <Input
              onChangeText={onChange}
              title="Senha"
              value={value}
              isActivePassword
              placeholder="Senha"
              autoCapitalize={"none"}
              errors={errors?.password}
            />
          )}
        />
      </S.Form>

      <S.Row>
        <S.CheckBoxContainer
          onPress={() => setToggleCheckBox((oldValue: boolean) => !oldValue)}
        >
          <S.CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={setToggleCheckBox}
            color="#F77F00"
            style={{
              borderTopColor: "#5B5B58",
              borderBottomColor: "#5B5B58",
              borderEndColor: "#5B5B58",
              borderStartColor: "#5B5B58",
              marginTop: -3,
            }}
          />
          <Text
            variant="PoppinsMedium"
            color="GRAY"
            fontSize={15}
            marginLeft="sm"
          >
            Manter Conectado
          </Text>
        </S.CheckBoxContainer>

        <TouchableOpacity>
          <Text variant="PoppinsMedium" color="GRAY" fontSize={15}>
            Esqueci minha senha
          </Text>
        </TouchableOpacity>
      </S.Row>

      <Spacer height={75} />

      <S.ContainerButtons>
        <Button
          title="ENTRAR"
          type="secondary"
          style={{
            maxWidth: 340,
            minWidth: 300,
          }}
          onPress={handleSubmit(handleSingIn)}
          activeLoad={islogin}
        />
      </S.ContainerButtons>
    </S.Container>
  );
}
