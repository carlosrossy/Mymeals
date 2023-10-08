import React, { useEffect, useState } from "react";
import { StatusBar, Dimensions, TouchableOpacity } from "react-native";
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
import { InputMask } from "../../../../global/components/InputMask";
import { InputDate } from "../../../../global/components/InputDate";

export function SingUp() {
  const navigation = useNavigation<AuthScreenNavigationProp>();
  const [date, setDate] = useState<Date | null>(null);

  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

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
          Cadastro
        </Text>
      </S.Header>

      <Spacer height={34} />

      <S.Form>
        <Controller
          control={control}
          name="name"
          rules={{ required: "name é obrigatório" }}
          render={({ field: { value, onChange } }) => (
            <Input
              onChangeText={onChange}
              value={value}
              title="Nome"
              placeholder="Nome"
              // errors={errors?.name}
            />
          )}
        />

        <Spacer height={12} />

        <Controller
          control={control}
          name="peso"
          rules={{ required: "Peso é obrigatório" }}
          render={({ field: { value, onChange } }) => (
            <InputMask
              type={"money"}
              options={{
                precision: 3,
                separator: ",",
                delimiter: ".",
                unit: "",
              }}
              onChangeText={onChange}
              value={value}
              title="Peso"
              placeholder="Peso"
            />
          )}
        />

        <Spacer height={12} />

        <Controller
          control={control}
          name="altura"
          rules={{ required: "Altura é obrigatória" }}
          render={({ field: { value, onChange } }) => (
            <InputMask
              type={"custom"}
              options={{ mask: "9,99" }}
              onChangeText={onChange}
              value={value}
              title="Altura"
              placeholder="Altura"
            />
          )}
        />

        <Spacer height={12} />

        <Controller
          control={control}
          name="birthDate"
          rules={{ required: "Data de Nascimento é obrigatória" }}
          render={({ field: { value, onChange } }) => (
            <InputDate
              value={value || date}
              onChange={onChange}
              // errors={errors?.birthDate}
              editable={true}
            />
          )}
        />

        <Spacer height={12} />

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
              //   errors={errors?.email}
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
              //   errors={errors?.password}
            />
          )}
        />

        <Spacer height={12} />
        
        <Controller
          control={control}
          name="confirmPassword"
          rules={{ required: "confirmação é obrigatório" }}
          render={({ field: { value, onChange } }) => (
            <Input
              onChangeText={onChange}
              title="Confirmar senha"
              value={value}
              isActivePassword
              placeholder="Confirmar senha"
              autoCapitalize={"none"}
              // errors={errors?.confirmPassword}
            />
          )}
        />
      </S.Form>

      <S.ContainerButtons>
        <Button
          //   activeLoad={isLoading}
          title="Cadastrar"
          type="secondary"
          style={{
            maxWidth: 340,
            minWidth: 300,
          }}
          //   onPress={handleSubmit((data) => {
          //     mutate(data);
          //   })}
        />
      </S.ContainerButtons>
    </S.Container>
  );
}
