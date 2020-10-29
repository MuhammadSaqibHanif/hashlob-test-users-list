import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {SvgUri} from 'react-native-svg';
import {connect} from 'react-redux';
import {getList} from '../../store/actions/listAction';

const userObj = {
  name: '',
  username: '',
  email: '',
  avatar: '',
  address: {
    country: '',
    city: '',
    street: '',
    alley: '',
  },
  phone: '',
  website: '',
  company: '',
};

const ShowList = ({getList, data}) => {
  const [showModal, setShowModal] = useState(false);
  const [showData, setShowData] = useState(userObj);

  useEffect(() => {
    getList();
  }, []);

  const {username, email, avatar, address, phone, website, company} = showData;

  return (
    <SafeAreaView style={{flex: 1}}>
      <Modal animationType="slide" transparent={true} visible={showModal}>
        <View style={styles.modalBox} elevation={5}>
          <View style={{flexDirection: 'row', marginBottom: 10}}>
            <View style={{width: 60, height: 60}}>
              <SvgUri width={60} height={60} uri={avatar} />
            </View>

            <Text style={styles.userName}>{username}</Text>
          </View>

          <View style={styles.modalList}>
            <Text style={styles.headingText}>email : </Text>

            <Text style={styles.bodyText}>{email}</Text>
          </View>

          <View style={styles.modalList}>
            <Text style={styles.headingText}>country : </Text>

            <Text style={styles.bodyText}>{address.country}</Text>
          </View>

          <View style={styles.modalList}>
            <Text style={styles.headingText}>city : </Text>

            <Text style={styles.bodyText}>{address.city}</Text>
          </View>

          <View style={styles.modalList}>
            <Text style={styles.headingText}>street : </Text>

            <Text style={styles.bodyText}>{address.street}</Text>
          </View>

          <View style={styles.modalList}>
            <Text style={styles.headingText}>alley : </Text>

            <Text style={styles.bodyText}>{address.alley}</Text>
          </View>

          <View style={styles.modalList}>
            <Text style={styles.headingText}>phone : </Text>

            <Text style={styles.bodyText}>{phone}</Text>
          </View>

          <View style={styles.modalList}>
            <Text style={styles.headingText}>website : </Text>

            <Text style={styles.bodyText}>{website}</Text>
          </View>

          <View style={styles.modalList}>
            <Text style={styles.headingText}>company : </Text>

            <Text style={styles.bodyText}>{company}</Text>
          </View>

          <TouchableOpacity
            style={styles.modalCloseButton}
            onPress={() => setShowModal(false)}>
            <Text
              style={{fontSize: 18, fontWeight: 'bold', textAlign: 'center'}}>
              Close
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <ScrollView>
        <View
          style={{
            width: '95%',
            alignSelf: 'center',
            paddingVertical: 30,
          }}>
          {data !== undefined &&
            data !== null &&
            data.map((user, index) => (
              <View key={index} style={styles.list} elevation={5}>
                <TouchableOpacity
                  onPress={() => {
                    setShowModal(true);

                    setShowData(user);
                  }}
                  style={{width: '100%'}}>
                  <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                    {user.name}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  modalBox: {
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    backgroundColor: '#ABB2B9',
    paddingVertical: 20,
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  headingText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  bodyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  modalList: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
    textAlignVertical: 'center',
    color: 'black',
  },
  modalCloseButton: {
    width: '70%',
    backgroundColor: 'gray',
    alignSelf: 'center',
    paddingVertical: 10,
    borderRadius: 5,
    marginVertical: 20,
  },
  list: {
    backgroundColor: '#EBEDEF',
    marginBottom: 15,
    paddingVertical: 15,
    borderRadius: 10,
    paddingHorizontal: 15,
  },
});

const mapStateToProps = (state) => ({
  data: state.list.data,
});

export default connect(mapStateToProps, {getList})(ShowList);
