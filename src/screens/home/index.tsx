import * as React from "react";
import { Image, View } from "react-native";
import styled from "styled-components/native";
import Divider from "src/commons/components/atoms/divider";

const link = `https://thumbs.mic.com/ODg0ZGQ1NjM2ZSMvbF9VeWFzMndzUTEydWhQTVZ6WWJxVWtHSXhzPS8weDM4Ojk5OHg2NjgvODAweDQ1MC9maWx0ZXJzOmZvcm1hdChqcGVnKTpxdWFsaXR5KDgwKS9odHRwczovL3MzLmFtYXpvbmF3cy5jb20vcG9saWN5bWljLWltYWdlcy80NWExYWFhN2JhMTVmMzJmMGE3YjgwNWViNmEzNmU1YjFkMjhiYzYyMjdmYzcyZTI0YmMzMmUzNTVlNDE4ZWU4LmpwZw.jpg`;

export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Image
          style={{
            width: 300,
            height: 250,
            resizeMode: "contain",
            opacity: 0.8
          }}
          source={{ uri: link }}
        />
        <View>
          <Title>O que deseja pesquisar hoje?</Title>
          <Divider />
          <Input />
        </View>
        <Divider size={30} />
        <Button>
          <TextButton>Search</TextButton>
        </Button>
      </Container>
    );
  }
}

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: yellow;
  align-items: center;
  padding: 10px;
`;

const Title = styled.Text`
  font-weight: 600;
  font-family: Roboto-Bold;
  font-size: 18px;
`;

const Input = styled.TextInput`
  background-color: white;
  font-weight: 400;
  font-size: 16px;
  min-width: 200px;
  border-radius: 5px;
  padding: 5px;
`;

const Button = styled.TouchableOpacity`
  background-color: blue;
  border-radius: 25px;
  padding: 10px 30px;
`;

const TextButton = styled.Text`
  color: white;
  font-weight: 500;
  font-family: Roboto-Regular;
  font-size: 16px;
`;
