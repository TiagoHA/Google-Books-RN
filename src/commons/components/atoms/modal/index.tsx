import React, { Component } from "react";
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  Alert,
  TextInput
} from "react-native";

export default class ModalSearch extends Component {
  state = {
    isVisible: false
  };

  setModalVisible(visible) {
    this.setState({ isVisible: visible });
  }

  render() {
    return (
      <View style={{ marginTop: 22, maxHeight: 100, maxWidth: 100 }}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.props.isVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={{ marginTop: 22 }}>
            <View>
              <TextInput />

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.props.isVisible);
                }}
              >
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
