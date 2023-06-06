import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Animated,
  FlatList,
  StyleSheet,
  ImageBackground,
  BackHandler,
} from 'react-native';
import Video from 'react-native-video';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Home from '../screens/Home';
import Mens from '../screens/Mens';
import Womens from '../screens/Womens';
import Perfumes from '../screens/Perfumes';
import Leather from '../screens/Leather';
import Searh from '../screens/Search';
import Wishlist from '../screens/Wishlist';
import Cart from '../screens/Cart';
import Main from '../screens/Main';
import {useDispatch, useSelector} from 'react-redux';
import {loginsuccess, logout} from '../../store/Actions/LoginAction';
// import {logout} from '../../store/Actions/SignupActions';

const data = [
  {name: 'HOME', icon: require('../assets/home.png')},
  {name: 'MENS_WEAR', icon: require('../assets/mens-clothing.png')},
  {name: 'WOMEN_WEAR', icon: require('../assets/fashion.png')},
  {name: 'PERFUMES', icon: require('../assets/fashion.png')},
  {name: 'LEATHER', icon: require('../assets/belt.png')},
  {name: 'SETTING', icon: require('../assets/settings.png')},
  {name: 'ABOUT US', icon: require('../assets/info.png')},
];

const Tabbar = ({navigation}) => {
  const [show, setShow] = useState();
  const [selected, SetSelected] = useState();
  const [value, SetValue] = useState(false);
  const users = useSelector(state => state.Login?.data);
  const Animation = useRef(new Animated.Value(0)).current;
  const movetoright = useRef(new Animated.Value(0)).current;
  const scaling = useRef(new Animated.Value(1)).current;
  const animationDuration = 10;
  const pauseDuration = 6000;
  const drawer = () => {
    Animated.timing(movetoright, {
      toValue: show ? 0 : 200,
      duration: 500,
      useNativeDriver: true,
    }).start();
    Animated.timing(scaling, {
      toValue: show ? 1.01 : 0.8,
      duration: 500,
      useNativeDriver: true,
    }).start();
    setShow(!show);
  };
  const showdrawr = {
    transform: [
      {scale: scaling},
      {
        translateX: movetoright,
      },
    ],
  };
  const Help = () => {
    Animated.spring(Animation, {
      toValue: 0.2,
      friction: 5,
      duration: animationDuration,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        Animated.spring(Animation, {
          toValue: 0,
          friction: 5,
          duration: animationDuration,
          useNativeDriver: true,
        }).start(() => {
          setTimeout(Help, pauseDuration);
        });
      }, pauseDuration);
    });
  };

  useEffect(() => {
    Help();
  }, []);

  const animatedScale = {
    transform: [
      {
        rotate: Animation.interpolate({
          inputRange: [0, 1.2],
          outputRange: ['0deg', '170deg'],
        }),
      },
    ],
  };
  const move = {
    transform: [
      {scale: Animation},
      {
        translateX: Animation.interpolate({
          inputRange: [0, 0],
          outputRange: [0, -10],
        }),
      },
    ],
  };
  const handleBackButtonPress = () => {
    navigation.navigate('Tabbar');
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackButtonPress,
    );

    return () => {
      backHandler.remove();
    };
  }, []);
  const dispatch = useDispatch();
  // const hand = () => {
  //  dispatch()
  // };
  return (
    <View style={{flex: 1}}>
      {/* drawar screen */}
      <View style={styles.drawercaintain}>
        {/* <View> */}

        <Video
          source={{
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
          }}
          autoPlay
          // controls
          style={{
            height: responsiveHeight(100),
            width: responsiveWidth(100),
            // backgroundColor: 'red',
            position: 'absolute',
            top: 0,
            left: 0,
            alignItems: 'stretch',
            bottom: 0,
            right: 0,
          }}
          muted={true}
          repeat={true}
          resizeMode={'cover'}
          rate={1.0}
          ignoreSilentSwitch={'obey'}
        />

        <View style={{marginTop: responsiveHeight(5)}}>
          <TouchableOpacity
            onPress={() => SetSelected(0)}
            style={[
              styles.flatcountain,
              {
                top: responsiveHeight(5),
                backgroundColor: selected === 0 ? '#FFF' : 'firebrick',
              },
            ]}>
            <Image
              source={require('../assets/home.png')}
              style={[
                styles.icons,
                {tintColor: selected === 0 ? 'firebrick' : '#FFF'},
              ]}
            />
            <Text
              style={[
                styles.flattxt,
                {color: selected === 0 ? 'firebrick' : '#FFF'},
              ]}>
              HOME
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => SetSelected(1)}
            style={[
              styles.flatcountain,
              {
                top: responsiveHeight(5),
                backgroundColor: selected === 1 ? '#FFF' : 'firebrick',
              },
            ]}>
            <Image
              source={require('../assets/mens-clothing.png')}
              style={[
                styles.icons,
                {tintColor: selected === 1 ? 'firebrick' : '#FFF'},
              ]}
            />
            <Text
              style={[
                styles.flattxt,
                {color: selected === 1 ? 'firebrick' : '#FFF'},
              ]}>
              MEN'S
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => SetSelected(2)}
            style={[
              styles.flatcountain,
              {
                top: responsiveHeight(5),
                backgroundColor: selected === 2 ? '#FFF' : 'firebrick',
              },
            ]}>
            <Image
              source={require('../assets/fashion.png')}
              style={[
                styles.icons,
                {tintColor: selected === 2 ? 'firebrick' : '#FFF'},
              ]}
            />
            <Text
              style={[
                styles.flattxt,
                {color: selected === 2 ? 'firebrick' : '#FFF'},
              ]}>
              WOMENS
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => SetSelected(3)}
            style={[
              styles.flatcountain,
              {
                top: responsiveHeight(5),
                backgroundColor: selected === 3 ? '#FFF' : 'firebrick',
              },
            ]}>
            <Image
              source={require('../assets/perfume.png')}
              style={[
                styles.icons,
                {tintColor: selected === 3 ? 'firebrick' : '#FFF'},
              ]}
            />
            <Text
              style={[
                styles.flattxt,
                {color: selected === 3 ? 'firebrick' : '#FFF'},
              ]}>
              PERFUMES
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => SetSelected(4)}
            style={[
              styles.flatcountain,
              {
                top: responsiveHeight(5),
                backgroundColor: selected === 4 ? '#FFF' : 'firebrick',
              },
            ]}>
            <Image
              source={require('../assets/belt.png')}
              style={[
                styles.icons,
                {tintColor: selected === 4 ? 'firebrick' : '#FFF'},
              ]}
            />
            <Text
              style={[
                styles.flattxt,
                {color: selected === 4 ? 'firebrick' : '#FFF'},
              ]}>
              LEATHER
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              hand();
            }}
            style={[styles.flatcountain, {top: responsiveHeight(5)}]}>
            <Image
              source={require('../assets/settings.png')}
              style={[styles.icons, {tintColor: '#FFF'}]}
            />
            <Text style={[styles.flattxt, {color: '#FFF'}]}>Logout</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('About');
            }}
            style={[styles.flatcountain, {top: responsiveHeight(5)}]}>
            <Image
              source={require('../assets/info.png')}
              style={[styles.icons, {tintColor: '#FFF'}]}
            />
            <Text style={[styles.flattxt, {color: '#FFF'}]}>ABOUT US</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottombackground}>
          <Image
            source={{
              uri: 'https://dobrador.com/wp-content/uploads/2015/05/noproblem.png',
            }}
            style={styles.bottom}
          />
        </View>
      </View>
      {/* Main screen */}
      <Animated.View style={[styles.drawericonview, showdrawr]}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={() => {
              drawer();
            }}>
            <Image
              source={require('../assets/apps.png')}
              style={styles.drawericonimage}
            />
          </TouchableOpacity>
          {selected == 0 ? (
            <View style={styles.selectedview}>
              <Text style={styles.selectedname}>Home</Text>
            </View>
          ) : selected == 1 ? (
            <View style={styles.selectedview}>
              <Text style={styles.selectedname}>Mens</Text>
            </View>
          ) : selected == 2 ? (
            <View style={styles.selectedview}>
              <Text style={styles.selectedname}>Womens</Text>
            </View>
          ) : selected == 3 ? (
            <View style={styles.selectedview}>
              <Text style={styles.selectedname}>Perfumes</Text>
            </View>
          ) : selected == 4 ? (
            <View style={styles.selectedview}>
              <Text style={styles.selectedname}>Leather</Text>
            </View>
          ) : selected == 5 ? (
            <View style={styles.selectedview}>
              <Text style={styles.selectedname}>Mens</Text>
            </View>
          ) : selected == 6 ? (
            <View style={styles.selectedview}>
              <Text style={styles.selectedname}>Search</Text>
            </View>
          ) : selected == 7 ? (
            <View style={styles.selectedview}>
              <Text style={styles.selectedname}>Wishlist</Text>
            </View>
          ) : selected == 8 ? (
            <View style={styles.selectedview}>
              <Text style={styles.selectedname}>Cart</Text>
            </View>
          ) : (
            <View style={styles.selectedview}>
              <Text style={styles.selectedname}>Main</Text>
            </View>
          )}
        </View>
        {selected == 0 ? (
          <Home />
        ) : selected == 1 ? (
          <Mens />
        ) : selected == 2 ? (
          <Womens />
        ) : selected == 3 ? (
          <Perfumes />
        ) : selected == 4 ? (
          <Leather />
        ) : selected == 5 ? (
          <Home />
        ) : selected == 6 ? (
          <Searh />
        ) : selected == 7 ? (
          <Wishlist />
        ) : selected == 8 ? (
          <Cart />
        ) : (
          <Main />
        )}
        {/* bottom bar */}
        <View style={styles.bottombar}>
          <TouchableOpacity onPress={() => SetSelected(5)}>
            <Image
              resizeMode="contain"
              source={require('../assets/home.png')}
              style={[
                styles.bticon,
                {tintColor: selected == 5 ? 'firebrick' : 'black'},
              ]}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => SetSelected(6)}>
            <Image
              resizeMode="contain"
              source={require('../assets/searh.png')}
              style={[
                styles.bticon,
                {tintColor: selected == 6 ? 'firebrick' : 'black'},
              ]}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => SetSelected(7)}>
            <Image
              resizeMode="contain"
              source={require('../assets/love.png')}
              style={[
                styles.bticon,
                {tintColor: selected == 7 ? 'firebrick' : 'black'},
              ]}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => SetSelected(8)}>
            <Image
              resizeMode="contain"
              source={require('../assets/add-cart.png')}
              style={[
                styles.bticon,
                {tintColor: selected == 8 ? 'firebrick' : 'black'},
              ]}
            />
          </TouchableOpacity>
        </View>
        <Animated.View style={[styles.Helpme, move]}>
          <Text style={{fontSize: 60, fontWeight: 'bold'}}>Help.??</Text>
        </Animated.View>

        <Animated.View
          onTouchEnd={() => {
            navigation.navigate('Chat');
          }}
          style={[styles.Helpiconview, animatedScale]}>
          <Image
            source={require('../assets/admin.png')}
            style={{height: 60, width: 60, tintColor: 'firebrick'}}
          />
        </Animated.View>
      </Animated.View>
      {/* End Main screen */}
    </View>
  );
};
const styles = StyleSheet.create({
  icons: {
    height: responsiveHeight(3),
    width: responsiveWidth(6),
  },
  flattxt: {
    fontSize: responsiveFontSize(2),
    fontWeight: '900',
  },
  flatcountain: {
    height: responsiveHeight(6),
    width: responsiveWidth(45),
    borderWidth: 0.5,
    borderColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '5%',
    marginHorizontal: responsiveWidth(1),
    borderRadius: responsiveWidth(2),
    paddingHorizontal: responsiveWidth(3),
  },
  drawericonview: {
    borderRadius: 10,
    backgroundColor: '#fff',
    flex: 1,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    height: responsiveHeight(100),
    width: responsiveWidth(100),
  },
  drawercaintain: {
    height: responsiveHeight(100),
    width: responsiveWidth(100),
    flex: 1,
    backgroundColor: 'firebrick',
  },
  drawericonimage: {
    height: responsiveHeight(5),
    width: responsiveWidth(8),
    marginTop: responsiveHeight(3),
    left: responsiveWidth(3),
  },
  selectedview: {marginTop: responsiveHeight(2), right: responsiveWidth(5)},
  selectedname: {
    fontSize: responsiveFontSize(3),
    color: 'firebrick',
    fontWeight: 'bold',
  },
  Helpme: {
    height: responsiveHeight(20),
    width: responsiveWidth(80),
    backgroundColor: 'lightgray',
    borderRadius: 50,
    position: 'absolute',
    bottom: responsiveHeight(7),
    left: responsiveWidth(-10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  Helpiconview: {
    height: responsiveHeight(8),
    width: responsiveWidth(16),
    backgroundColor: 'lightgray',
    borderRadius: 50,
    position: 'absolute',
    bottom: responsiveHeight(10),
    left: responsiveWidth(2.5),
  },
  bottom: {
    height: responsiveHeight(15),
    width: responsiveWidth(30),

    borderRadius: responsiveWidth(5),
  },
  bottombackground: {
    height: responsiveHeight(20),
    width: responsiveWidth(40),
    borderRadius: responsiveWidth(30),
    backgroundColor: '#FFF',
    marginTop: responsiveHeight(10),
    alignItems: 'center',
    justifyContent: 'center',
    left: responsiveWidth(3),
  },
  bottombar: {
    height: responsiveHeight(7),
    width: responsiveWidth(100),
    backgroundColor: '#FFF',
    position: 'absolute',
    bottom: responsiveHeight(0),
    borderTopLeftRadius: responsiveWidth(6),
    borderTopRightRadius: responsiveWidth(6),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(5),
    alignItems: 'center',
    elevation: 5,
    // borderTopWidth: 0.4,
  },
  bticon: {
    height: responsiveHeight(5),
    width: responsiveWidth(9),
  },
  background: {
    height: responsiveWidth(100),
    width: responsiveWidth(100),
  },
});
export default Tabbar;
