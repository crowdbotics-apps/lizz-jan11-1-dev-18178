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
      <View style={styles.View_1_1171}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d896/4736/a7cacb4c201733fd0cf3ad6b30322fb5"
          }}
          style={styles.ImageBackground_1_1172}
        />
      </View>
      <View style={styles.View_1_1191}>
        <View style={styles.View_1_1192}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b441/d1d8/4a4cf25b89d9f7c099e4bd6708cdd5d2"
            }}
            style={styles.ImageBackground_1_1193}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/48c2/e355/994de51c462236398a99429b9f8e0afd"
            }}
            style={styles.ImageBackground_1_1197}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/48c2/e355/994de51c462236398a99429b9f8e0afd"
            }}
            style={styles.ImageBackground_1_1198}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/48c2/e355/994de51c462236398a99429b9f8e0afd"
            }}
            style={styles.ImageBackground_1_1199}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc0e/dc80/bcf2880328e346eb8939e2ee3c87239c"
        }}
        style={styles.ImageBackground_1_1200}
      />
      <View style={styles.View_1_1207}>
        <View style={styles.View_1_1208} />
        <View style={styles.View_1_1209}>
          <View style={styles.View_1_1210} />
          <View style={styles.View_1_1211}>
            <View style={styles.View_1_1212} />
            <View style={styles.View_1_1213} />
          </View>
        </View>
        <View style={styles.View_1_1214} />
        <View style={styles.View_1_1215}>
          <View style={styles.View_1_1216} />
          <View style={styles.View_1_1217}>
            <View style={styles.View_1_1218} />
            <View style={styles.View_1_1219} />
          </View>
        </View>
      </View>
      <View style={styles.View_1_1220}>
        <Text style={styles.Text_1_1220}>
          One-stop shop for all operational services: from staffing, to help
          desk and localisation
        </Text>
      </View>
      <View style={styles.View_1_1221}>
        <View style={styles.View_1_1222}>
          <Text style={styles.Text_1_1222}>Business Growth</Text>
        </View>
        <View style={styles.View_1_1223} />
      </View>
      <View style={styles.View_1_1224}>
        <Text style={styles.Text_1_1224}>What we offer</Text>
      </View>
      <View style={styles.View_1_1225}>
        <Text style={styles.Text_1_1225}>Team extension</Text>
      </View>
      <View style={styles.View_1_1226}>
        <Text style={styles.Text_1_1226}>Recruitment</Text>
      </View>
      <View style={styles.View_1_1227}>
        <Text style={styles.Text_1_1227}>NetOps</Text>
      </View>
      <View style={styles.View_1_1228}>
        <Text style={styles.Text_1_1228}>Help Desk</Text>
      </View>
      <View style={styles.View_1_1229}>
        <Text style={styles.Text_1_1229}>Translation</Text>
      </View>
      <View style={styles.View_1_1230}>
        <Text style={styles.Text_1_1230}>01</Text>
      </View>
      <View style={styles.View_1_1231}>
        <Text style={styles.Text_1_1231}>02</Text>
      </View>
      <View style={styles.View_1_1232}>
        <Text style={styles.Text_1_1232}>03</Text>
      </View>
      <View style={styles.View_1_1233}>
        <Text style={styles.Text_1_1233}>04</Text>
      </View>
      <View style={styles.View_1_1234}>
        <Text style={styles.Text_1_1234}>05</Text>
      </View>
      <View style={styles.View_1_1235}>
        <View style={styles.View_1_1236}>
          <View style={styles.View_1_1237} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8617/b48b/6dd95ea2f716ffeeb76ba222517a4d95"
            }}
            style={styles.ImageBackground_1_1239}
          />
        </View>
      </View>
      <View style={styles.View_1_1240} />
      <View style={styles.View_1_1241}>
        <Text style={styles.Text_1_1241}>
          Stable support and administration of IT infrastructure (servers,
          firewalls, VPN and VoIP soft and hardware etc.) with 99.9% uptime
        </Text>
      </View>
      <View style={styles.View_1_1242}>
        <Text style={styles.Text_1_1242}>WHY ARCHER?</Text>
      </View>
      <View style={styles.View_1_1243}>
        <View style={styles.View_1_1244}>
          <Text style={styles.Text_1_1244}>
            Our employee turnover rate is 5% thanks to favorable working
            environment, responsible attitude to administrative issues and great
            life-work balance. We have been building highly efficient teams for
            almost 20 years putting together professional PMs, BAs and SAs,
            Developers, and QA specialists to ensure cost-performance index of
            99.5%
          </Text>
        </View>
        <View style={styles.View_1_1245}>
          <Text style={styles.Text_1_1245}>
            We source people with almost any tech stack fast and train them to
            match our clients needs. We focus on achieving your business
            objectives and guarantee on time delivery and enduring value. We
            offer flexible engagement models and a wide range of cost-effective
            solutions.
          </Text>
        </View>
        <View style={styles.View_1_1246}>
          <Text style={styles.Text_1_1246}>
            We provide a full spectrum of IT staffing and recruiting solutions
            from offshore outsourcing to buy-out and relocation. Project
            Managers and Business Analysts are available immediately to help you
            plan the resources you need and manage them efficiently..
          </Text>
        </View>
      </View>
      <View style={styles.View_1_1247} />
      <View style={styles.View_1_1248}>
        <Text style={styles.Text_1_1248}>Process</Text>
      </View>
      <View style={styles.View_1_1249}>
        <Text style={styles.Text_1_1249}>Stage 1: Recruiting</Text>
      </View>
      <View style={styles.View_1_1250}>
        <Text style={styles.Text_1_1250}>Stage 3: Motivation</Text>
      </View>
      <View style={styles.View_1_1251}>
        <Text style={styles.Text_1_1251}>Stage 4: Retention</Text>
      </View>
      <View style={styles.View_1_1252}>
        <Text style={styles.Text_1_1252}>Stage 5: Efficiency mark</Text>
      </View>
      <View style={styles.View_1_1253}>
        <Text style={styles.Text_1_1253}>Stage 6: Training</Text>
      </View>
      <View style={styles.View_1_1254} />
      <View style={styles.View_1_1255}>
        <Text style={styles.Text_1_1255}>Results we deliver:</Text>
      </View>
      <View style={styles.View_1_1256}>
        <View style={styles.View_1_1257}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4537/bb64/a223c9c97d724a110b67d46673bfd119"
            }}
            style={styles.ImageBackground_1_1258}
          />
        </View>
      </View>
      <View style={styles.View_1_1267}>
        <Text style={styles.Text_1_1267}>
          One-stop shop for all services to advance custom software development
        </Text>
      </View>
      <View style={styles.View_1_1268}>
        <Text style={styles.Text_1_1268}>
          Quick recruiting of the IT personnel with required hard and soft
          skills
        </Text>
      </View>
      <View style={styles.View_1_1269}>
        <View style={styles.View_1_1270}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd3d/c00d/1f2bbbab6b764374ec8c735f62b7b80e"
            }}
            style={styles.ImageBackground_1_1271}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30d5/12dd/dbd5a77020345aba39863f6f0014a7b0"
          }}
          style={styles.ImageBackground_1_1278}
        />
      </View>
      <View style={styles.View_1_1283}>
        <Text style={styles.Text_1_1283}>
          Better control of administrative costs of operational services
          provision
        </Text>
      </View>
      <View style={styles.View_1_1284}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8201/19bc/b7bce81d30379032dd35bdc0dcc24283"
          }}
          style={styles.ImageBackground_1_1285}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/213a/ab5b/bd690a4b29d22f71cd311f395b5720b0"
          }}
          style={styles.ImageBackground_1_1286}
        />
        <View style={styles.View_1_1287} />
        <View style={styles.View_1_1288} />
        <View style={styles.View_1_1289} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a617/2c5e/bf5612024022fe91a1f3e2419168b030"
          }}
          style={styles.ImageBackground_1_1290}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/082d/4de9/d5ba2404189b0fec58aa777f29e4d8f9"
        }}
        style={styles.ImageBackground_1_1294}
      />
      <View style={styles.View_1_1304}>
        <Text style={styles.Text_1_1304}>
          Smooth and easy-to-follow workflows, scalable business processes
        </Text>
      </View>
      <View style={styles.View_1_1305}>
        <Text style={styles.Text_1_1305}>
          Direct management of the distributed team’s progress and performance
        </Text>
      </View>
      <View style={styles.View_1_1306}>
        <View style={styles.View_1_1307}>
          <View style={styles.View_1_1308}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b72e/be06/9ad3ccbb862d9c2a3bc36f0b65f85d40"
              }}
              style={styles.ImageBackground_1_1309}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30d5/12dd/dbd5a77020345aba39863f6f0014a7b0"
            }}
            style={styles.ImageBackground_1_1314}
          />
        </View>
        <View style={styles.View_1_1319}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7751/79fe/f8ea290b20820bd907233466567ae896"
            }}
            style={styles.ImageBackground_1_1320}
          />
          <View style={styles.View_1_1321} />
        </View>
        <View style={styles.View_1_1322} />
        <View style={styles.View_1_1323} />
      </View>
      <View style={styles.View_1_1324}>
        <Text style={styles.Text_1_1324}>Success Stories</Text>
      </View>
      <View style={styles.View_1_1325}>
        <View style={styles.View_1_1326}>
          <View style={styles.View_1_1327}>
            <Text style={styles.Text_1_1327}>
              Driving Behavior Monitoring and Safety Management Solution
            </Text>
          </View>
          <View style={styles.View_1_1328}>
            <Text style={styles.Text_1_1328}>View solution</Text>
          </View>
          <View style={styles.View_1_1329}>
            <Text style={styles.Text_1_1329}>
              Identify business needs, assess and match them with the current
              state of your or competing products.
            </Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f9a4/d9c8/9d2d5127538530204192c304d44a6fe3"
          }}
          style={styles.ImageBackground_1_1330}
        />
      </View>
      <View style={styles.View_1_1331} />
      <View style={styles.View_1_1332}>
        <Text style={styles.Text_1_1332}>Stage 2: Adaptation</Text>
      </View>
      <View style={styles.View_1_1333}>
        <Text style={styles.Text_1_1333}>
          We accelerate your time to fill due to the access to the highly
          skillful and result-driven talent pool in Ukraine Due to a solid HR
          brand of our company we get the best candidates and you improve the
          quality of your hires
        </Text>
      </View>
      <View style={styles.View_1_1334}>
        <View style={styles.View_1_1335}>
          <Text style={styles.Text_1_1335}>Development Team Design</Text>
        </View>
        <View style={styles.View_1_1336} />
      </View>
      <View style={styles.View_1_1337}>
        <View style={styles.View_1_1338} />
        <View style={styles.View_1_1339}>
          <Text style={styles.Text_1_1339}>
            Employee Development Strategies
          </Text>
        </View>
      </View>
      <View style={styles.View_1_1340}>
        <View style={styles.View_1_1341}>
          <View style={styles.View_1_1342}>
            <Text style={styles.Text_1_1342}>Competency Modeling</Text>
          </View>
          <View style={styles.View_1_1343} />
        </View>
      </View>
      <View style={styles.View_1_1344}>
        <View style={styles.View_1_1345}>
          <Text style={styles.Text_1_1345}>Recruitment</Text>
        </View>
        <View style={styles.View_1_1346} />
      </View>
      <View style={styles.View_1_1347}>
        <View style={styles.View_1_1348} />
        <View style={styles.View_1_1349}>
          <Text style={styles.Text_1_1349}>
            Development Team Performance Management
          </Text>
        </View>
      </View>
      <View style={styles.View_1_1350}>
        <View style={styles.View_1_1351} />
        <View style={styles.View_1_1352}>
          <Text style={styles.Text_1_1352}>Workshops &amp; Training</Text>
        </View>
      </View>
      <View style={styles.View_1_1353}>
        <View style={styles.View_1_1354} />
        <View style={styles.View_1_1355}>
          <Text style={styles.Text_1_1355}>Team Augmentation</Text>
        </View>
      </View>
      <View style={styles.View_1_1356}>
        <View style={styles.View_1_1357}>
          <Text style={styles.Text_1_1357}>
            Workforce Forecasting and Analysis
          </Text>
        </View>
        <View style={styles.View_1_1358} />
      </View>
      <View style={styles.View_1_1359}>
        <Text style={styles.Text_1_1359}>Tools and Technologies</Text>
      </View>
      <View style={styles.View_1_1360}>
        <View style={styles.View_1_1361}>
          <Text style={styles.Text_1_1361}>Retention Management</Text>
        </View>
        <View style={styles.View_1_1362} />
      </View>
      <View style={styles.View_1_1363} />
      <View style={styles.View_1_1364}>
        <Text style={styles.Text_1_1364}>Leave us a message</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f51/b5df/78ea21bdd865c9c2962ff4029629ab41"
        }}
        style={styles.ImageBackground_1_1365}
      />
      <View style={styles.View_1_1367}>
        <View style={styles.View_1_1368} />
        <View style={styles.View_1_1369}>
          <Text style={styles.Text_1_1369}>Send Message</Text>
        </View>
      </View>
      <View style={styles.View_1_1370}>
        <View style={styles.View_1_1371} />
        <View style={styles.View_1_1372} />
        <View style={styles.View_1_1373} />
        <View style={styles.View_1_1374} />
        <View style={styles.View_1_1375} />
        <View style={styles.View_1_1376} />
      </View>
      <View style={styles.View_1_1377}>
        <View style={styles.View_1_1378}>
          <Text style={styles.Text_1_1378}>Full name</Text>
        </View>
        <View style={styles.View_1_1379}>
          <Text style={styles.Text_1_1379}>Business</Text>
        </View>
        <View style={styles.View_1_1380}>
          <Text style={styles.Text_1_1380}>E-mail</Text>
        </View>
        <View style={styles.View_1_1381}>
          <Text style={styles.Text_1_1381}>Message</Text>
        </View>
        <View style={styles.View_1_1382}>
          <Text style={styles.Text_1_1382}>Company</Text>
        </View>
        <View style={styles.View_1_1383}>
          <Text style={styles.Text_1_1383}>Country</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/db95/51ec/e979b8e9049caa20b65909eb2da3b701"
        }}
        style={styles.ImageBackground_1_1384}
      />
      <View style={styles.View_1_1385}>
        <View style={styles.View_1_1386}>
          <View style={styles.View_1_1387} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d369/fb46/e1ff1ac66eaa669bb67b8414156547e1"
            }}
            style={styles.ImageBackground_1_1388}
          />
        </View>
        <View style={styles.View_1_1389}>
          <Text style={styles.Text_1_1389}>
            Respective events we participate in and hold
          </Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1_1171: {
    width: 220.8000030517578,
    minWidth: 220.8000030517578,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 30,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1_1172: {
    width: 220.79986572265625,
    height: 48.000003814697266,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1_1191: {
    width: 24,
    minWidth: 24,
    height: 17.389610290527344,
    minHeight: 17.389610290527344,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 321,
    top: 48,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_1192: {
    width: 25.47186279296875,
    height: 17.142858505249023,
    top: 0.02587890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_1_1193: {
    width: 18.805194854736328,
    height: 17.142858505249023,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.666748046875
  },
  ImageBackground_1_1197: {
    width: 3.4285712242126465,
    height: 3.428569793701172,
    top: 13.523681640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_1_1198: {
    width: 3.4285712242126465,
    height: 3.4285731315612793,
    top: 6.761962890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_1_1199: {
    width: 3.4285712242126465,
    height: 3.4285714626312256,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_1_1200: {
    width: 375,
    minWidth: 375,
    height: 394,
    minHeight: 394,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 229
  },
  View_1_1207: {
    width: 176.00001525878906,
    minWidth: 176.00001525878906,
    height: 88.00000762939453,
    minHeight: 88.00000762939453,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 199,
    top: 579
  },
  View_1_1208: {
    width: 88,
    minWidth: 88,
    height: 88,
    minHeight: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 88,
    top: 0,
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_1209: {
    width: 39.6274299621582,
    minWidth: 39.6274299621582,
    height: 22.627418518066406,
    minHeight: 22.627418518066406,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 112.5,
    top: 33.37255859375
  },
  View_1_1210: {
    width: 34,
    minWidth: 34,
    height: 4.000001430511475,
    minHeight: 4.000001430511475,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 9.62744140625,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1_1211: {
    width: 22.627416610717773,
    minWidth: 22.627416610717773,
    height: 22.627416610717773,
    minHeight: 22.627416610717773,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 0
  },
  View_1_1212: {
    width: 14.142134666442871,
    minWidth: 14.142134666442871,
    height: 14.142135620117188,
    minHeight: 14.142135620117188,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.4853515625,
    top: 8.4853515625,
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_1213: {
    width: 14.142135620117188,
    minWidth: 14.142135620117188,
    height: 14.142135620117188,
    minHeight: 14.142135620117188,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.4853515625,
    top: 0,
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_1214: {
    width: 88.00000762939453,
    minWidth: 88.00000762939453,
    height: 88.00000762939453,
    minHeight: 88.00000762939453,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(222, 55, 50, 1)"
  },
  View_1_1215: {
    width: 39.62743377685547,
    minWidth: 39.62743377685547,
    height: 22.627422332763672,
    minHeight: 22.627422332763672,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23.87255859375,
    top: 33
  },
  View_1_1216: {
    width: 34,
    minWidth: 34,
    height: 4.000004291534424,
    minHeight: 4.000004291534424,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.62744140625,
    top: 9,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1_1217: {
    width: 22.627416610717773,
    minWidth: 22.627416610717773,
    height: 22.627416610717773,
    minHeight: 22.627416610717773,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1_1218: {
    width: 14.142133712768555,
    minWidth: 14.142133712768555,
    height: 14.142136573791504,
    minHeight: 14.142136573791504,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_1219: {
    width: 14.142135620117188,
    minWidth: 14.142135620117188,
    height: 14.142134666442871,
    minHeight: 14.142134666442871,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 8.4853515625,
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_1_1220: {
    width: 315,
    minWidth: 315,
    minHeight: 127,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 265
  },
  Text_1_1220: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 21,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2.6,
    textTransform: "none"
  },
  View_1_1221: {
    width: 217,
    minWidth: 217,
    height: 36,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 79,
    top: 136
  },
  View_1_1222: {
    width: 217,
    minWidth: 217,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_1_1222: {
    color: "rgba(222, 55, 50, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2.4000000000000004,
    textTransform: "none"
  },
  View_1_1223: {
    width: 216,
    minWidth: 216,
    height: 4,
    minHeight: 4,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 32,
    backgroundColor: "rgba(222, 55, 50, 1)"
  },
  View_1_1224: {
    width: 186,
    minWidth: 186,
    minHeight: 72,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 683
  },
  Text_1_1224: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 3.6,
    textTransform: "uppercase"
  },
  View_1_1225: {
    width: 212,
    minWidth: 212,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 102,
    top: 972
  },
  Text_1_1225: {
    color: "rgba(237, 32, 45, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2.4000000000000004,
    textTransform: "none"
  },
  View_1_1226: {
    width: 150,
    minWidth: 150,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 102,
    top: 1102
  },
  Text_1_1226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2.4000000000000004,
    textTransform: "none"
  },
  View_1_1227: {
    width: 95,
    minWidth: 95,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 102,
    top: 1151
  },
  Text_1_1227: {
    color: "rgba(128, 128, 128, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2.4000000000000004,
    textTransform: "none"
  },
  View_1_1228: {
    width: 131,
    minWidth: 131,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 102,
    top: 1200
  },
  Text_1_1228: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2.4000000000000004,
    textTransform: "none"
  },
  View_1_1229: {
    width: 138,
    minWidth: 138,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 102,
    top: 1249
  },
  Text_1_1229: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2.4000000000000004,
    textTransform: "none"
  },
  View_1_1230: {
    width: 27,
    minWidth: 27,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31,
    top: 972
  },
  Text_1_1230: {
    color: "rgba(237, 32, 45, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2.4000000000000004,
    textTransform: "none"
  },
  View_1_1231: {
    width: 34,
    minWidth: 34,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31,
    top: 1102
  },
  Text_1_1231: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2.4000000000000004,
    textTransform: "none"
  },
  View_1_1232: {
    width: 33,
    minWidth: 33,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31,
    top: 1151
  },
  Text_1_1232: {
    color: "rgba(128, 128, 128, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2.4000000000000004,
    textTransform: "none"
  },
  View_1_1233: {
    width: 33,
    minWidth: 33,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31,
    top: 1200
  },
  Text_1_1233: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2.4000000000000004,
    textTransform: "none"
  },
  View_1_1234: {
    width: 34,
    minWidth: 34,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31,
    top: 1249
  },
  Text_1_1234: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2.4000000000000004,
    textTransform: "none"
  },
  View_1_1235: {
    width: 375,
    minWidth: 375,
    height: 189,
    minHeight: 189,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 773
  },
  View_1_1236: {
    width: 375,
    minWidth: 375,
    height: 189,
    minHeight: 189,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1_1237: {
    width: 375,
    minWidth: 375,
    height: 189,
    minHeight: 189,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_1_1239: {
    width: 375,
    minWidth: 375,
    height: 189,
    minHeight: 189,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    resizeMode: "cover"
  },
  View_1_1240: {
    width: 375,
    minWidth: 375,
    height: 3,
    minHeight: 3,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 959,
    backgroundColor: "rgba(222, 55, 50, 1)"
  },
  View_1_1241: {
    width: 315,
    minWidth: 315,
    minHeight: 72,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 1016
  },
  Text_1_1241: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.6,
    textTransform: "none"
  },
  View_1_1242: {
    width: 185,
    minWidth: 185,
    minHeight: 72,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 1306
  },
  Text_1_1242: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 3.6,
    textTransform: "none"
  },
  View_1_1243: {
    width: 314.99951171875,
    minWidth: 314.99951171875,
    height: 669,
    minHeight: 669,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 1445
  },
  View_1_1244: {
    width: 311.81817626953125,
    minWidth: 311.81817626953125,
    minHeight: 219,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.06005859375,
    top: 212
  },
  Text_1_1244: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.6,
    textTransform: "none"
  },
  View_1_1245: {
    width: 313.93939208984375,
    minWidth: 313.93939208984375,
    minHeight: 190,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.06005859375,
    top: 479
  },
  Text_1_1245: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.6,
    textTransform: "none"
  },
  View_1_1246: {
    width: 312.8787841796875,
    minWidth: 312.8787841796875,
    minHeight: 164,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_1_1246: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.6,
    textTransform: "none"
  },
  View_1_1247: {
    width: 375,
    minWidth: 375,
    height: 760,
    minHeight: 760,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -4,
    top: 2157,
    backgroundColor: "rgba(222, 55, 50, 1)"
  },
  View_1_1248: {
    width: 564.47998046875,
    minWidth: 564.47998046875,
    minHeight: 88.92487335205078,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 2225
  },
  Text_1_1248: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 3.6,
    textTransform: "none"
  },
  View_1_1249: {
    width: 199,
    minWidth: 199,
    minHeight: 51,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27,
    top: 2337
  },
  Text_1_1249: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.6,
    textTransform: "none"
  },
  View_1_1250: {
    width: 199,
    minWidth: 199,
    minHeight: 51,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27,
    top: 2674
  },
  Text_1_1250: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.6,
    textTransform: "none"
  },
  View_1_1251: {
    width: 199,
    minWidth: 199,
    minHeight: 51,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27,
    top: 2738
  },
  Text_1_1251: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.6,
    textTransform: "none"
  },
  View_1_1252: {
    width: 199,
    minWidth: 199,
    minHeight: 51,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27,
    top: 2802
  },
  Text_1_1252: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.6,
    textTransform: "none"
  },
  View_1_1253: {
    width: 199,
    minWidth: 199,
    minHeight: 51,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27,
    top: 2866
  },
  Text_1_1253: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.6,
    textTransform: "none"
  },
  View_1_1254: {
    width: 375,
    minWidth: 375,
    height: 1437,
    minHeight: 1437,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -10,
    top: 3641,
    backgroundColor: "rgba(51, 51, 51, 1)"
  },
  View_1_1255: {
    width: 234,
    minWidth: 234,
    minHeight: 72,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 3664
  },
  Text_1_1255: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 3.6,
    textTransform: "uppercase"
  },
  View_1_1256: {
    width: 101.0198745727539,
    minWidth: 101.0198745727539,
    height: 99.0000228881836,
    minHeight: 99.0000228881836,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 127,
    top: 3797
  },
  View_1_1257: {
    width: 101.0198745727539,
    minWidth: 101.0198745727539,
    height: 99.0000228881836,
    minHeight: 99.0000228881836,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_1_1258: {
    width: 101.0198745727539,
    minWidth: 101.0198745727539,
    height: 99.0000228881836,
    minHeight: 99.0000228881836,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1_1267: {
    width: 275,
    minWidth: 275,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 38,
    top: 3937
  },
  Text_1_1267: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.8,
    textTransform: "none"
  },
  View_1_1268: {
    width: 275,
    minWidth: 275,
    minHeight: 66,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 38,
    top: 4176
  },
  Text_1_1268: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.8,
    textTransform: "none"
  },
  View_1_1269: {
    width: 100,
    minWidth: 100,
    height: 100,
    minHeight: 100,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 128,
    top: 4045
  },
  View_1_1270: {
    width: 100,
    minWidth: 100,
    height: 100,
    minHeight: 100,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_1_1271: {
    width: 100,
    minWidth: 100,
    height: 100,
    minHeight: 100,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_1_1278: {
    width: 100,
    minWidth: 100,
    height: 100,
    minHeight: 100,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1_1283: {
    width: 275,
    minWidth: 275,
    minHeight: 80,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 38,
    top: 4422
  },
  Text_1_1283: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.8,
    textTransform: "none"
  },
  View_1_1284: {
    width: 90.06192779541016,
    minWidth: 90.06192779541016,
    height: 88.8981704711914,
    minHeight: 88.8981704711914,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 132,
    top: 4288
  },
  ImageBackground_1_1285: {
    width: 88.8981704711914,
    minWidth: 88.8981704711914,
    height: 88.8981704711914,
    minHeight: 88.8981704711914,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_1_1286: {
    width: 12.122478485107422,
    minWidth: 12.122478485107422,
    height: 12.122478485107422,
    minHeight: 12.122478485107422,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 77.939453125,
    top: 21.9384765625
  },
  View_1_1287: {
    width: 2,
    minWidth: 2,
    height: 53,
    minHeight: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24.939453125,
    top: 17.9384765625,
    backgroundColor: "rgba(222, 55, 50, 1)"
  },
  View_1_1288: {
    width: 2,
    minWidth: 2,
    height: 53,
    minHeight: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 60.939453125,
    top: 17.9384765625,
    backgroundColor: "rgba(222, 55, 50, 1)"
  },
  View_1_1289: {
    width: 2,
    minWidth: 2,
    height: 53,
    minHeight: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 43.939453125,
    top: 17.9384765625,
    backgroundColor: "rgba(222, 55, 50, 1)"
  },
  ImageBackground_1_1290: {
    width: 48,
    minWidth: 48,
    height: 37,
    minHeight: 37,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19.939453125,
    top: 21.9384765625
  },
  ImageBackground_1_1294: {
    width: 130.66015625,
    minWidth: 130.66015625,
    height: 89.4781265258789,
    minHeight: 89.4781265258789,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 112,
    top: 4550
  },
  View_1_1304: {
    width: 275,
    minWidth: 275,
    minHeight: 59,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 38,
    top: 4679
  },
  Text_1_1304: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.8,
    textTransform: "none"
  },
  View_1_1305: {
    width: 275,
    minWidth: 275,
    minHeight: 66,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 38,
    top: 4922.9384765625
  },
  Text_1_1305: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.8,
    textTransform: "none"
  },
  View_1_1306: {
    width: 100,
    minWidth: 100,
    height: 100,
    minHeight: 100,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 128,
    top: 4786
  },
  View_1_1307: {
    width: 100,
    minWidth: 100,
    height: 100,
    minHeight: 100,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1_1308: {
    width: 100,
    minWidth: 100,
    height: 100,
    minHeight: 100,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_1_1309: {
    width: 100,
    minWidth: 100,
    height: 100,
    minHeight: 100,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_1_1314: {
    width: 100,
    minWidth: 100,
    height: 100,
    minHeight: 100,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1_1319: {
    width: 31.81817626953125,
    minWidth: 31.81817626953125,
    height: 54,
    minHeight: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 34,
    top: 34
  },
  ImageBackground_1_1320: {
    width: 31.81818199157715,
    minWidth: 31.81818199157715,
    height: 31.81818199157715,
    minHeight: 31.81818199157715,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1_1321: {
    width: 11,
    minWidth: 11,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 22,
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_1322: {
    width: 17,
    minWidth: 17,
    height: 6,
    minHeight: 6,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 41,
    top: 71,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_1_1323: {
    width: 17,
    minWidth: 17,
    height: 6,
    minHeight: 6,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 41,
    top: 79,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_1_1324: {
    width: 329,
    minWidth: 329,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 5126
  },
  Text_1_1324: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 3.6,
    textTransform: "uppercase"
  },
  View_1_1325: {
    width: 314,
    minWidth: 314,
    height: 388,
    minHeight: 388,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 5222
  },
  View_1_1326: {
    width: 314,
    minWidth: 314,
    height: 270,
    minHeight: 270,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 118
  },
  View_1_1327: {
    width: 314,
    minWidth: 314,
    minHeight: 79,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_1_1327: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2.4000000000000004,
    textTransform: "none"
  },
  View_1_1328: {
    width: 314,
    minWidth: 314,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 220
  },
  Text_1_1328: {
    color: "rgba(222, 55, 50, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.8,
    textTransform: "none"
  },
  View_1_1329: {
    width: 314,
    minWidth: 314,
    minHeight: 80,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 110
  },
  Text_1_1329: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 1.4000000000000001,
    textTransform: "none"
  },
  ImageBackground_1_1330: {
    width: 100,
    minWidth: 100,
    height: 100,
    minHeight: 100,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 107,
    top: 0,
    resizeMode: "cover"
  },
  View_1_1331: {
    width: 952,
    minWidth: 952,
    height: 199,
    minHeight: 199,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27,
    top: 2381,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1_1332: {
    width: 199,
    minWidth: 199,
    minHeight: 51,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27,
    top: 2610
  },
  Text_1_1332: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.6,
    textTransform: "none"
  },
  View_1_1333: {
    width: 284,
    minWidth: 284,
    minHeight: 111,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 57,
    top: 2422
  },
  Text_1_1333: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.4000000000000001,
    textTransform: "none"
  },
  View_1_1334: {
    width: 150,
    minWidth: 150,
    height: 41,
    minHeight: 41,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22,
    top: 3145
  },
  View_1_1335: {
    width: 103,
    minWidth: 103,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 7
  },
  Text_1_1335: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.4000000000000001,
    textTransform: "none"
  },
  View_1_1336: {
    width: 150,
    minWidth: 150,
    height: 41,
    minHeight: 41,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
  },
  View_1_1337: {
    width: 308,
    minWidth: 308,
    height: 41,
    minHeight: 41,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25,
    top: 3218
  },
  View_1_1338: {
    width: 308,
    minWidth: 308,
    height: 41,
    minHeight: 41,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
  },
  View_1_1339: {
    width: 263,
    minWidth: 263,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23,
    top: 14
  },
  Text_1_1339: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.4000000000000001,
    textTransform: "none"
  },
  View_1_1340: {
    width: 148,
    minWidth: 148,
    height: 41,
    minHeight: 41,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 189,
    top: 3291
  },
  View_1_1341: {
    width: 148,
    minWidth: 148,
    height: 41,
    minHeight: 41,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1_1342: {
    width: 100,
    minWidth: 100,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 7
  },
  Text_1_1342: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.4000000000000001,
    textTransform: "none"
  },
  View_1_1343: {
    width: 148,
    minWidth: 148,
    height: 41,
    minHeight: 41,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
  },
  View_1_1344: {
    width: 141,
    minWidth: 141,
    height: 41,
    minHeight: 41,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 196,
    top: 3145
  },
  View_1_1345: {
    width: 93,
    minWidth: 93,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 14
  },
  Text_1_1345: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.4000000000000001,
    textTransform: "none"
  },
  View_1_1346: {
    width: 141,
    minWidth: 141,
    height: 41,
    minHeight: 41,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
  },
  View_1_1347: {
    width: 248,
    minWidth: 248,
    height: 41,
    minHeight: 41,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 55,
    top: 3364
  },
  View_1_1348: {
    width: 248,
    minWidth: 248,
    height: 41,
    minHeight: 41,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
  },
  View_1_1349: {
    width: 200,
    minWidth: 200,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 7
  },
  Text_1_1349: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.4000000000000001,
    textTransform: "none"
  },
  View_1_1350: {
    width: 215,
    minWidth: 215,
    height: 41,
    minHeight: 41,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 72,
    top: 3437
  },
  View_1_1351: {
    width: 215,
    minWidth: 215,
    height: 41,
    minHeight: 41,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
  },
  View_1_1352: {
    width: 167,
    minWidth: 167,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 14
  },
  Text_1_1352: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.4000000000000001,
    textTransform: "none"
  },
  View_1_1353: {
    width: 200,
    minWidth: 200,
    height: 41,
    minHeight: 41,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 79,
    top: 3510
  },
  View_1_1354: {
    width: 200,
    minWidth: 200,
    height: 41,
    minHeight: 41,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
  },
  View_1_1355: {
    width: 152,
    minWidth: 152,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 14
  },
  Text_1_1355: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.4000000000000001,
    textTransform: "none"
  },
  View_1_1356: {
    width: 220,
    minWidth: 220,
    height: 41,
    minHeight: 41,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22,
    top: 3072
  },
  View_1_1357: {
    width: 173,
    minWidth: 173,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 7
  },
  Text_1_1357: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.4000000000000001,
    textTransform: "none"
  },
  View_1_1358: {
    width: 220,
    minWidth: 220,
    height: 41,
    minHeight: 41,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
  },
  View_1_1359: {
    width: 280,
    minWidth: 280,
    minHeight: 72,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27,
    top: 2966
  },
  Text_1_1359: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 3.6,
    textTransform: "uppercase"
  },
  View_1_1360: {
    width: 153,
    minWidth: 153,
    height: 41,
    minHeight: 41,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 3291
  },
  View_1_1361: {
    width: 103,
    minWidth: 103,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25.000244140625,
    top: 7
  },
  Text_1_1361: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.4000000000000001,
    textTransform: "none"
  },
  View_1_1362: {
    width: 153,
    minWidth: 153,
    height: 41,
    minHeight: 41,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
  },
  View_1_1363: {
    width: 378,
    minWidth: 378,
    height: 702,
    minHeight: 702,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -3,
    top: 5610,
    backgroundColor: "rgba(51, 51, 51, 1)"
  },
  View_1_1364: {
    width: 207,
    minWidth: 207,
    minHeight: 72,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 34,
    top: 5674
  },
  Text_1_1364: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 3.6,
    textTransform: "none"
  },
  ImageBackground_1_1365: {
    width: 16,
    height: 17.14285659790039,
    top: 6179,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 311
  },
  View_1_1367: {
    width: 320,
    minWidth: 320,
    height: 91,
    minHeight: 91,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 6256,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1368: {
    width: 320,
    height: 91,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 63,
    borderTopRightRadius: 63,
    borderBottomLeftRadius: 63,
    borderBottomRightRadius: 63
  },
  View_1_1369: {
    width: 235,
    top: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 43
  },
  Text_1_1369: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 3,
    textTransform: "none"
  },
  View_1_1370: {
    width: 314,
    minWidth: 314,
    height: 386,
    minHeight: 386,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31,
    top: 5822
  },
  View_1_1371: {
    width: 314,
    minWidth: 314,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1_1372: {
    width: 314,
    minWidth: 314,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 308,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1_1373: {
    width: 314,
    minWidth: 314,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 77,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1_1374: {
    width: 314,
    minWidth: 314,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 385,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1_1375: {
    width: 312,
    minWidth: 312,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2,
    top: 154,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1_1376: {
    width: 312,
    minWidth: 312,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2,
    top: 231,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1_1377: {
    width: 86,
    minWidth: 86,
    height: 401,
    minHeight: 401,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 61,
    top: 5794
  },
  View_1_1378: {
    width: 86,
    minWidth: 86,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_1_1378: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.6,
    textTransform: "none"
  },
  View_1_1379: {
    width: 78,
    minWidth: 78,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 308
  },
  Text_1_1379: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.6,
    textTransform: "none"
  },
  View_1_1380: {
    width: 55,
    minWidth: 55,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 77
  },
  Text_1_1380: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.6,
    textTransform: "none"
  },
  View_1_1381: {
    width: 76,
    minWidth: 76,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 385
  },
  Text_1_1381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.6,
    textTransform: "none"
  },
  View_1_1382: {
    width: 81,
    minWidth: 81,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 154
  },
  Text_1_1382: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.6,
    textTransform: "none"
  },
  View_1_1383: {
    width: 70,
    minWidth: 70,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 231
  },
  Text_1_1383: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.6,
    textTransform: "none"
  },
  ImageBackground_1_1384: {
    width: 378,
    minWidth: 378,
    height: 186,
    minHeight: 186,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -3,
    top: 6773,
    resizeMode: "cover"
  },
  View_1_1385: {
    width: 311.66119384765625,
    minWidth: 311.66119384765625,
    height: 285.9997863769531,
    minHeight: 285.9997863769531,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31.3203125,
    top: 6411
  },
  View_1_1386: {
    width: 311.66119384765625,
    minWidth: 311.66119384765625,
    height: 285.9997863769531,
    minHeight: 285.9997863769531,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1_1387: {
    width: 311.66119384765625,
    minWidth: 311.66119384765625,
    height: 285.9997863769531,
    minHeight: 285.9997863769531,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_1_1388: {
    width: 311.66119384765625,
    minWidth: 311.66119384765625,
    height: 285.9997863769531,
    minHeight: 285.9997863769531,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    resizeMode: "cover"
  },
  View_1_1389: {
    width: 256.753173828125,
    minWidth: 256.753173828125,
    minHeight: 76.94410705566406,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27.8056640625,
    top: 104.5283203125
  },
  Text_1_1389: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 3,
    textTransform: "none"
  },
  View_2: { height: 6959 }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
