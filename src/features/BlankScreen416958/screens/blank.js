import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_117_145}>
        <Text style={styles.Text_117_145}>New York</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/660f/8f79/c52f7eddaf6a0634fce0d5c77fea71ba"
        }}
        style={styles.ImageBackground_117_146}
      />
      <View style={styles.View_117_147}>
        <Text style={styles.Text_117_147}>Search in</Text>
      </View>
      <View style={styles.View_117_148} />
      <View style={styles.View_117_149} />
      <View style={styles.View_117_150} />
      <View style={styles.View_117_151} />
      <View style={styles.View_117_152}>
        <Text style={styles.Text_117_152}>New</Text>
      </View>
      <View style={styles.View_117_153}>
        <Text style={styles.Text_117_153}>Loft</Text>
      </View>
      <View style={styles.View_117_154}>
        <Text style={styles.Text_117_154}>Modern</Text>
      </View>
      <View style={styles.View_117_155}>
        <Text style={styles.Text_117_155}>Popular</Text>
      </View>
      <View style={styles.View_117_156}>
        <View style={styles.View_117_157}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba2c/ac78/b960a9d800ff027fa407b76ade64e49e"
            }}
            style={styles.ImageBackground_117_158}
          />
        </View>
      </View>
      <View style={styles.View_117_160} />
      <View style={styles.View_117_161}>
        <Text style={styles.Text_117_161}>Casual</Text>
      </View>
      <View style={styles.View_117_162}>
        <View style={styles.View_117_163} />
        <View style={styles.View_117_164}>
          <View style={styles.View_117_165} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97ec/80a8/5771c3fcaf8a44abfe97f1ac53c2c611"
            }}
            style={styles.ImageBackground_117_166}
          />
        </View>
        <View style={styles.View_117_167} />
        <View style={styles.View_117_168}>
          <View style={styles.View_117_169}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6707/7e8a/9f97e669af0f073bb07e66927ee344bf"
              }}
              style={styles.ImageBackground_117_170}
            />
          </View>
        </View>
        <View style={styles.View_117_172} />
        <View style={styles.View_117_173} />
        <View style={styles.View_117_174}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/763a/49ec/b3ca45fca757553e774e0338e84f37f9"
            }}
            style={styles.ImageBackground_117_175}
          />
        </View>
        <View style={styles.View_117_180}>
          <Text style={styles.Text_117_180}>Invest</Text>
        </View>
        <View style={styles.View_117_181}>
          <Text style={styles.Text_117_181}>Trending</Text>
        </View>
      </View>
      <View style={styles.View_117_182}>
        <View style={styles.View_117_183} />
        <View style={styles.View_117_184}>
          <View style={styles.View_117_185} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a28d/a5f1/952c78f417901f25cd9da51c2bd3c5c1"
            }}
            style={styles.ImageBackground_117_186}
          />
        </View>
        <View style={styles.View_117_187} />
        <View style={styles.View_117_188} />
        <View style={styles.View_117_189}>
          <View style={styles.View_117_190}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6707/7e8a/9f97e669af0f073bb07e66927ee344bf"
              }}
              style={styles.ImageBackground_117_191}
            />
          </View>
        </View>
        <View style={styles.View_117_193}>
          <Text style={styles.Text_117_193}>Trending</Text>
        </View>
        <View style={styles.View_117_194} />
        <View style={styles.View_117_195}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/763a/49ec/b3ca45fca757553e774e0338e84f37f9"
            }}
            style={styles.ImageBackground_117_196}
          />
        </View>
        <View style={styles.View_117_201}>
          <Text style={styles.Text_117_201}>Invest</Text>
        </View>
      </View>
      <View style={styles.View_117_202}>
        <View style={styles.View_117_203} />
        <View style={styles.View_117_204}>
          <View style={styles.View_117_205} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f7f/002a/d3846d41561731acf4edee5a1d8bf778"
            }}
            style={styles.ImageBackground_117_206}
          />
          <View style={styles.View_117_207}>
            <View style={styles.View_117_208}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6707/7e8a/9f97e669af0f073bb07e66927ee344bf"
                }}
                style={styles.ImageBackground_117_209}
              />
            </View>
          </View>
          <View style={styles.View_117_211}>
            <Text style={styles.Text_117_211}>Trending</Text>
          </View>
        </View>
        <View style={styles.View_117_212} />
        <View style={styles.View_117_213} />
        <View style={styles.View_117_214} />
        <View style={styles.View_117_215}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/763a/49ec/b3ca45fca757553e774e0338e84f37f9"
            }}
            style={styles.ImageBackground_117_216}
          />
        </View>
        <View style={styles.View_117_221}>
          <Text style={styles.Text_117_221}>Invest</Text>
        </View>
      </View>
      <View style={styles.View_117_222}>
        <Text style={styles.Text_117_222}>Modern flat</Text>
      </View>
      <View style={styles.View_117_223}>
        <Text style={styles.Text_117_223}>Modern loft home</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d113/0d6d/7f0a3fe3c83a9e935a8f0ec4e3412b46"
        }}
        style={styles.ImageBackground_117_224}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d113/0d6d/7f0a3fe3c83a9e935a8f0ec4e3412b46"
        }}
        style={styles.ImageBackground_117_225}
      />
      <View style={styles.View_117_226}>
        <Text style={styles.Text_117_226}>205 East 59 Street</Text>
      </View>
      <View style={styles.View_117_227}>
        <Text style={styles.Text_117_227}>55 Thompson Street</Text>
      </View>
      <View style={styles.View_117_228}>
        <View style={styles.View_117_229} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d24/459c/eaa71a9cb7e4ceb6cdb816e47423bab6"
          }}
          style={styles.ImageBackground_117_230}
        />
        <View style={styles.View_117_232}>
          <View style={styles.View_117_233}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/630e/1c56/9b7df0588c4ccbc75e34691e4bb24cdd"
              }}
              style={styles.ImageBackground_117_234}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/415e/7590/3d3f5a4b51abf2d592c962f9989ec2e1"
          }}
          style={styles.ImageBackground_117_236}
        />
        <View style={styles.View_117_237}>
          <View style={styles.View_117_238}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22f1/02ee/44e6ec542f2fc2c773b0d1553a3e6aae"
              }}
              style={styles.ImageBackground_117_239}
            />
          </View>
          <View style={styles.View_117_241}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/59d2/641f/09faecabd3c2e418d5a256ec633da960"
              }}
              style={styles.ImageBackground_117_242}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_117_244}>
        <View style={styles.View_I117_244_7330_56}>
          <View style={styles.View_I117_244_7330_57} />
        </View>
        <View style={styles.View_I117_244_7330_61}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ed/67f7/ada2ec5a7c4974bb4f352ac62e63bbf5"
            }}
            style={styles.ImageBackground_I117_244_7330_62}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
            }}
            style={styles.ImageBackground_I117_244_7330_66}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
            }}
            style={styles.ImageBackground_I117_244_7330_70}
          />
        </View>
        <View style={styles.View_I117_244_7330_77}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbc8/937c/936c1d3e893321b7422c19206af3e4c0"
            }}
            style={styles.ImageBackground_I117_244_7330_78}
          />
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_117_145: {
    flexGrow: 1,
    width: 250,
    top: 93,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24
  },
  Text_117_145: {
    color: "rgba(1, 36, 60, 1)",
    fontSize: 29,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_117_146: {
    width: 327,
    minWidth: 327,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 147
  },
  View_117_147: {
    flexGrow: 1,
    width: 91,
    top: 80,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24
  },
  Text_117_147: {
    color: "rgba(188, 195, 200, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_117_148: {
    width: 72,
    minWidth: 72,
    height: 38,
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 166,
    borderColor: "rgba(226, 231, 234, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
  },
  View_117_149: {
    width: 68,
    minWidth: 68,
    height: 38,
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 98,
    top: 166,
    borderColor: "rgba(226, 231, 234, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
  },
  View_117_150: {
    width: 83,
    minWidth: 83,
    height: 38,
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 260,
    top: 166,
    borderColor: "rgba(226, 231, 234, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
  },
  View_117_151: {
    width: 84,
    minWidth: 84,
    height: 38,
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 171,
    top: 166,
    borderColor: "rgba(226, 231, 234, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
  },
  View_117_152: {
    flexGrow: 1,
    width: 51,
    top: 176,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31
  },
  Text_117_152: {
    color: "rgba(1, 36, 60, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_117_153: {
    flexGrow: 1,
    width: 51,
    top: 176,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 106
  },
  Text_117_153: {
    color: "rgba(1, 36, 60, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_117_154: {
    flexGrow: 1,
    width: 58,
    top: 176,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 273
  },
  Text_117_154: {
    color: "rgba(1, 36, 60, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_117_155: {
    flexGrow: 1,
    width: 61,
    top: 176,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 184
  },
  Text_117_155: {
    color: "rgba(1, 36, 60, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_117_156: {
    width: 24,
    minWidth: 24,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 327,
    top: 107,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_117_157: {
    width: 24,
    height: 16,
    top: 4,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_117_158: {
    width: 24,
    height: 16,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_117_160: {
    width: 84,
    minWidth: 84,
    height: 38,
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 349,
    top: 166,
    borderColor: "rgba(226, 231, 234, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
  },
  View_117_161: {
    flexGrow: 1,
    width: 61,
    top: 176,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 362
  },
  Text_117_161: {
    color: "rgba(1, 36, 60, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_117_162: {
    width: 327,
    minWidth: 327,
    height: 286,
    minHeight: 286,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 239
  },
  View_117_163: {
    width: 327,
    minWidth: 327,
    height: 286,
    minHeight: 286,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(249, 251, 252, 1)",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
  },
  View_117_164: {
    width: 327,
    minWidth: 327,
    height: 210,
    minHeight: 210,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_117_165: {
    width: 327,
    minWidth: 327,
    height: 210,
    minHeight: 210,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
  },
  ImageBackground_117_166: {
    width: 327,
    minWidth: 327,
    height: 210,
    minHeight: 210,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    resizeMode: "cover"
  },
  View_117_167: {
    width: 149,
    minWidth: 149,
    height: 53,
    minHeight: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11,
    top: 146,
    backgroundColor: "rgba(139, 170, 224, 1)",
    opacity: 0.6499999761581421,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18
  },
  View_117_168: {
    width: 24,
    minWidth: 24,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 23,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_117_169: {
    width: 18.7659912109375,
    height: 23.999940872192383,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.6171875
  },
  ImageBackground_117_170: {
    width: 18.7659912109375,
    height: 23.999940872192383,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_117_172: {
    width: 53,
    minWidth: 53,
    height: 53,
    minHeight: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11,
    top: 146,
    backgroundColor: "rgba(139, 170, 224, 1)",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18
  },
  View_117_173: {
    width: 23,
    minWidth: 23,
    height: 23,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 192,
    top: 160,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_117_174: {
    width: 24,
    minWidth: 24,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 160,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_117_175: {
    width: 24,
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_117_180: {
    flexGrow: 1,
    width: 57.582515716552734,
    top: 159.18310546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 76
  },
  Text_117_180: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_117_181: {
    flexGrow: 1,
    width: 84.19364929199219,
    top: 23.000244140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64
  },
  Text_117_181: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_117_182: {
    width: 327,
    minWidth: 327,
    height: 286,
    minHeight: 286,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 549
  },
  View_117_183: {
    width: 327,
    minWidth: 327,
    height: 286,
    minHeight: 286,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(249, 251, 252, 1)",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
  },
  View_117_184: {
    width: 327,
    minWidth: 327,
    height: 210,
    minHeight: 210,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_117_185: {
    width: 327,
    minWidth: 327,
    height: 210,
    minHeight: 210,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
  },
  ImageBackground_117_186: {
    width: 327,
    minWidth: 327,
    height: 210,
    minHeight: 210,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    resizeMode: "cover"
  },
  View_117_187: {
    width: 149,
    minWidth: 149,
    height: 53,
    minHeight: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11,
    top: 146,
    backgroundColor: "rgba(139, 170, 224, 1)",
    opacity: 0.6499999761581421,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18
  },
  View_117_188: {
    width: 53,
    minWidth: 53,
    height: 53,
    minHeight: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11,
    top: 146,
    backgroundColor: "rgba(139, 170, 224, 1)",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18
  },
  View_117_189: {
    width: 24,
    minWidth: 24,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 23,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_117_190: {
    width: 18.7659912109375,
    height: 23.999940872192383,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.6171875
  },
  ImageBackground_117_191: {
    width: 18.7659912109375,
    height: 23.999940872192383,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_117_193: {
    flexGrow: 1,
    width: 84.19364929199219,
    top: 23.000244140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64
  },
  Text_117_193: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_117_194: {
    width: 23,
    minWidth: 23,
    height: 23,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 192,
    top: 160,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_117_195: {
    width: 24,
    minWidth: 24,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 160,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_117_196: {
    width: 24,
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_117_201: {
    flexGrow: 1,
    width: 57.582515716552734,
    top: 159.18310546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 76
  },
  Text_117_201: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_117_202: {
    width: 327,
    minWidth: 327,
    height: 286,
    minHeight: 286,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 859
  },
  View_117_203: {
    width: 327,
    minWidth: 327,
    height: 286,
    minHeight: 286,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
  },
  View_117_204: {
    width: 327,
    minWidth: 327,
    height: 210,
    minHeight: 210,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_117_205: {
    width: 327,
    minWidth: 327,
    height: 210,
    minHeight: 210,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
  },
  ImageBackground_117_206: {
    width: 327,
    minWidth: 327,
    height: 210,
    minHeight: 210,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    resizeMode: "cover"
  },
  View_117_207: {
    width: 24,
    minWidth: 24,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 20,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_117_208: {
    width: 18.7659912109375,
    height: 23.999940872192383,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.6171875
  },
  ImageBackground_117_209: {
    width: 18.7659912109375,
    height: 23.999940872192383,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_117_211: {
    flexGrow: 1,
    width: 84.19364929199219,
    top: 20.000244140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 58
  },
  Text_117_211: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_117_212: {
    width: 149,
    minWidth: 149,
    height: 53,
    minHeight: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11,
    top: 146,
    backgroundColor: "rgba(164, 114, 198, 1)",
    opacity: 0.550000011920929,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18
  },
  View_117_213: {
    width: 53,
    minWidth: 53,
    height: 53,
    minHeight: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11,
    top: 146,
    backgroundColor: "rgba(164, 114, 198, 1)",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18
  },
  View_117_214: {
    width: 23,
    minWidth: 23,
    height: 23,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 192,
    top: 160,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_117_215: {
    width: 24,
    minWidth: 24,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 160,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_117_216: {
    width: 24,
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_117_221: {
    flexGrow: 1,
    width: 57.582515716552734,
    top: 159.18310546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 76
  },
  Text_117_221: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_117_222: {
    flexGrow: 1,
    width: 247,
    top: 465,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 54
  },
  Text_117_222: {
    color: "rgba(1, 36, 60, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_117_223: {
    flexGrow: 1,
    width: 247,
    top: 775,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 54
  },
  Text_117_223: {
    color: "rgba(1, 36, 60, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_117_224: {
    width: 20.870187759399414,
    height: 20,
    top: 399,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 301
  },
  ImageBackground_117_225: {
    width: 20.870187759399414,
    height: 20,
    top: 709,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 301
  },
  View_117_226: {
    flexGrow: 1,
    width: 142,
    top: 489,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 54
  },
  Text_117_226: {
    color: "rgba(188, 195, 200, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_117_227: {
    flexGrow: 1,
    width: 142,
    top: 799,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 54
  },
  Text_117_227: {
    color: "rgba(188, 195, 200, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_117_228: {
    width: 375,
    minWidth: 375,
    height: 71,
    minHeight: 71,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 977
  },
  View_117_229: {
    width: 375,
    minWidth: 375,
    height: 71,
    minHeight: 71,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(239, 244, 246, 1)"
  },
  ImageBackground_117_230: {
    width: 24,
    height: 24,
    top: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 44
  },
  View_117_232: {
    width: 24,
    minWidth: 24,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 131,
    top: 21,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_117_233: {
    width: 18.7659912109375,
    height: 23.999940872192383,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.6171875
  },
  ImageBackground_117_234: {
    width: 18.7659912109375,
    height: 23.999940872192383,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_117_236: {
    width: 25.044225692749023,
    height: 24,
    top: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 305
  },
  View_117_237: {
    width: 24,
    minWidth: 24,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 221,
    top: 21,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_117_238: {
    width: 23.99995231628418,
    height: 23.99995231628418,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_117_239: {
    width: 23.99995231628418,
    height: 23.99995231628418,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_117_241: {
    width: 20,
    height: 20,
    top: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2
  },
  ImageBackground_117_242: {
    width: 20,
    height: 20,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_117_244: {
    width: 375,
    minWidth: 375,
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I117_244_7330_56: {
    flexGrow: 1,
    width: 375,
    height: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: -2
  },
  View_I117_244_7330_57: {
    flexGrow: 1,
    width: 375,
    height: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 2,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I117_244_7330_61: {
    flexGrow: 1,
    width: 66.661376953125,
    height: 20.666584014892578,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293.66650390625,
    top: 8
  },
  ImageBackground_I117_244_7330_62: {
    width: 24.32803726196289,
    minWidth: 24.32803726196289,
    height: 11.333333015441895,
    minHeight: 11.333333015441895,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 42.33349609375,
    top: 9.333251953125
  },
  ImageBackground_I117_244_7330_66: {
    width: 15.27237606048584,
    minWidth: 15.27237606048584,
    height: 10.965571403503418,
    minHeight: 10.965571403503418,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22.02685546875,
    top: 9.33056640625
  },
  ImageBackground_I117_244_7330_70: {
    width: 17,
    minWidth: 17,
    height: 10.666666984558105,
    minHeight: 10.666666984558105,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 9.66650390625
  },
  View_I117_244_7330_77: {
    flexGrow: 1,
    width: 54,
    height: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 12
  },
  ImageBackground_I117_244_7330_78: {
    width: 54,
    minWidth: 54,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_2: { height: 1048 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)