import {
  ScrollView,
  Text,
  Image,
  StyleSheet,
  View,
  Pressable,
} from "react-native";
import global, { theme, useColorMode } from "@/styles/global";
import { Ionicons } from "@expo/vector-icons";
import ArticleParagraph from "@/components/ArticleParagraph";
const searchAndRescue = [
  "After receiving the report, the SAR Banjarmasin mobilised a team from its office towards the SAR Basirih pier.[12] At 5:30 am, the team departed on the vessel KN SAR Laksmana 241 and were estimated to need five hours to reach the vessel's last reported location.[13] Along with the vessel, a helicopter was deployed by SAR Surabaya from the Juanda Naval Air Base to assist with aerial search efforts.[14][15]",
  "Three commercial vessels, TB TCP, MV Haida (Aida), and TB Mauhau 9 were in the vicinity of the ship's reported coordinates.[2][15] They proceeded to rescue 38, 49, and 15 survivors respectively; with TB Mauhau 9 recovering one person who had died.[16] The Basarnas rescuers then located the ship 80 nautical miles from Banjarmasin, finding that it was partially submerged and lay capsized.[17][18] On 15 September, 22 survivors were brought to a harbour in Banjarmasin, along with 4 airlifted bodies.",
  "Sea conditions have been reported to be difficult at the search area, with waves of up to 2.5 metres (8.2 ft) hampering search and rescue operations.[20] On 14 September, it was reported that the government had deployed 622 rescue personnel to the site, along with 17 ships and 5 helicopters.[18] Strong winds and waves were said to have prevented rescuers from boarding the ship or performing underwater searches.[18] By 15 September, the ship had sunk to a depth of 30 m (98 ft).",
  "On 16 September, divers from the Indonesian Navy were stopped from accessing the vessel by strong currents.[22] The rescuers subsequently announced that they planned to right the ship, search for survivors, and then tow it away for investigation.[22][23] The vessel was reported to have shifted 450 metres (1,480 ft) from its original position.[22]",
  "The chief of Basarnas, Mohammad Syafii, said on 17 September that the responsibility for recovering and removing the wreck lies with the owner due to the provisions of Law No. 17 of 2008,[24][25] and that they still believed there were survivors trapped inside the overturned ship.[24] On 18 September, PT Virgo said that they had all the equipment ready to upright the ship, and that the lifting operation could begin within 1–2 days provided that the weather conditions permitted to do so.[26]",
  "On 18 September, divers were able to access the ship after currents dropped down to 2 knots.[27][28]",
];

export default function Article() {
  const c = useColorMode();
  return (
    <ScrollView>
      <Image
        style={styles.image}
        source={require("../assets/featured.jpg")}
      ></Image>
      <View style={styles.content}>
        <Text style={[global.title2, { color: c.sym }]}>
          Sinking of the Virgo Transport 8
        </Text>

        <Text style={[global.desc, { color: c.sym }]}>
          2026 ferry maritime disaster in Indonesia
        </Text>

        <View style={styles.divider} />

        <ArticleParagraph>
          On 13 September 2026, the Indonesian-flagged ferry Virgo Transport 8
          capsized and sank in the Java Sea. The ferry was travelling from
          Surabaya, East Java to Banjarmasin, South Kalimantan, carrying 243
          people and 89 vehicles.[1][2] The sinking has resulted in at least 80
          deaths, while 55 people remain missing.[3][4]
        </ArticleParagraph>

        <Pressable style={[styles.facts, { backgroundColor: c.card }]}>
          <Text style={{ flex: 1, color: c.sym }} numberOfLines={1}>
            <Text style={{ fontWeight: "700" }}>Quick facts</Text> Virgo
            Transport 8, Details ...
          </Text>
          <Ionicons name="chevron-down" size={20} color={c.sym} />
        </Pressable>

        <ArticleParagraph>
          The ferry departed Surabaya on 12 September. While travelling across
          the Java Sea, the ferry encountered rough weather and high waves. On
          13 September at approximately 2:00 am WITA (UTC+8), the ship's captain
          reported that the ship was listing; this was the last communication
          from the vessel before contact was lost. The Banjarmasin Search and
          Rescue Office (part of the Indonesian National Search and Rescue
          Agency) received a missing vessel report at 4:10 am from Yoel Rihi,
          the general manager of PT Virgo Karya Shipping, the ship's
          operator.[5] At 4:30 am, the rescue vessel KN SAR Laksmana 241 was
          dispatched to the ship's last estimated position; around 80 nautical
          miles (150 km; 92 mi) from the Basirih Search and Rescue (SAR) dock in
          Banjarmasin.
        </ArticleParagraph>

        <Text style={[global.title2, { color: c.sym }]}>Background</Text>
        <View style={styles.divider} />

        <Pressable style={[styles.facts, { backgroundColor: c.card }]}>
          <Text style={{ flex: 1, color: c.sym }} numberOfLines={1}>
            <Text style={{ fontWeight: "700" }}>Quick facts</Text> History,
            Japan ...
          </Text>
          <Ionicons name="chevron-down" size={20} color={c.sym} />
        </Pressable>

        <ArticleParagraph>
          The ship, originally named Ferry Kurushima, was built in 1987 at the
          Shin Kurushima Onishi shipyard in Japan.[2][6][7] It has been owned
          since 2025 by PT Virgo Karya Shipping and is assigned IMO number
          8625179.[8][9] The ship is 119 m (390 ft) long and has a gross tonnage
          of 4,277.
        </ArticleParagraph>

        <Text style={[global.title2, { color: c.sym }]}>Search and rescue</Text>
        <View style={styles.divider} />
        {searchAndRescue.map((text) => (
          <ArticleParagraph key={text}>{text}</ArticleParagraph>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    resizeMode: "cover",
    height: undefined,
    width: "100%",
    aspectRatio: 16 / 10,
  },
  content: {
    padding: "1%",
  },
  divider: {
    height: 1,
    backgroundColor: theme.accent,
    marginVertical: 16,
  },
  facts: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 4,
    marginBottom: 16,
  },
});
