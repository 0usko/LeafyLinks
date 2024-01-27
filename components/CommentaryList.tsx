import * as React from "react";
import {Image, StyleSheet, View, Text} from "react-native";

const List1 = () => {
  	
  	return (
    		<View style={styles.list}>
      			<View style={styles.articleFlexBox}>
        				<View style={styles.imageContainer}>
          					<Image style={[styles.imageIcon, styles.imageIconLayout]} resizeMode="cover" source="image.png" />
        				</View>
        				<View style={styles.titleParent}>
          					<Text style={styles.title}>Dernier commentaire</Text>
          					<Text style={[styles.subtitle, styles.subtitleTypo]}>By John Doe</Text>
          					<Text style={[styles.subtitle1, styles.subtitleTypo]}>10 Tips for a Cozy Home</Text>
          					<View style={styles.user}>
            						<View style={[styles.avatar, styles.avatarFlexBox]}>
              							<View style={styles.avatar1} />
              							<View style={styles.titleWrapper}>
                								<Text style={[styles.title1, styles.subtitleTypo]} numberOfLines={1}>John Doe</Text>
              							</View>
            						</View>
            						<View style={[styles.iconButtons, styles.avatarFlexBox]}>
              							<Text style={styles.icon} numberOfLines={1}>📖</Text>
            						</View>
          					</View>
        				</View>
        				<Image style={[styles.articleChild, styles.imageIconLayout]} resizeMode="cover" source="Vector 200.png" />
      			</View>
      			<View style={[styles.article1, styles.articleFlexBox]}>
        				<View style={styles.imageContainer}>
          					<View style={styles.image} />
          					<Image style={styles.image5Icon} resizeMode="cover" imag="image 5.png" />
        				</View>
        				<View style={styles.titleParent}>
          					<Text style={styles.title}>Article en vedette</Text>
          					<Text style={[styles.subtitle1, styles.subtitleTypo]}>Comment choisir la fleur idéale pour vous</Text>
          					<View style={styles.user}>
            						<View style={[styles.avatar, styles.avatarFlexBox]}>
              							<View style={styles.avatar1} />
              							<View style={styles.titleWrapper}>
                								<Text style={[styles.title1, styles.subtitleTypo]} numberOfLines={1}>Jane Smith</Text>
              							</View>
            						</View>
            						<View style={[styles.iconButtons, styles.avatarFlexBox]}>
              							<Text style={styles.icon} numberOfLines={1}>📖</Text>
            						</View>
          					</View>
        				</View>
        				<Image style={[styles.articleChild, styles.imageIconLayout]} resizeMode="cover" source="Vector 200.png" />
      			</View>
    		</View>);
};

const styles = StyleSheet.create({
  	imageIconLayout: {
    		maxHeight: "100%",
    		maxWidth: "100%",
    		overflow: "hidden"
  	},
  	subtitleTypo: {
    		fontSize: 12,
    		textAlign: "left",
    		alignSelf: "stretch"
  	},
  	avatarFlexBox: {
    		alignItems: "center",
    		flexDirection: "row"
  	},
  	articleFlexBox: {
    		paddingVertical: 8,
    		paddingHorizontal: 0,
    		flexDirection: "row",
    		justifyContent: "center",
    		alignSelf: "stretch"
  	},
  	imageIcon: {
    		width: "100%",
    		maxHeight: "100%",
    		maxWidth: "100%",
    		flex: 1,
    		alignSelf: "stretch"
  	},
  	imageContainer: {
    		width: 80,
    		zIndex: 0,
    		overflow: "hidden",
    		height: 80,
    		flexDirection: "row"
  	},
  	title: {
    		textAlign: "left",
    		color: "#064a09",
    		fontWeight: "500",
    		lineHeight: 20,
    		fontSize: 16,
    		alignSelf: "stretch"
  	},
  	subtitle: {
    		color: "rgba(0, 0, 0, 0.5)",
    		lineHeight: 20
  	},
  	subtitle1: {
    		color: "#064a09",
    		fontSize: 12,
    		lineHeight: 20
  	},
  	avatar1: {
    		borderRadius: 20,
    		backgroundColor: "rgba(0, 0, 0, 0.1)",
    		width: 20,
    		height: 20,
    		overflow: "hidden"
  	},
  	title1: {
    		lineHeight: 16,
    		height: 16,
    		color: "#064a09",
    		fontSize: 12,
    		fontWeight: "500",
    		overflow: "hidden"
  	},
  	titleWrapper: {
    		marginLeft: 8,
    		flex: 1
  	},
  	avatar: {
    		flexDirection: "row",
    		flex: 1
  	},
  	icon: {
    		lineHeight: 24,
    		color: "#000",
    		textAlign: "center",
    		display: "flex",
    		width: 24,
    		height: 24,
    		fontSize: 16,
    		overflow: "hidden",
    		justifyContent: "center",
    		alignItems: "center"
  	},
  	iconButtons: {
    		marginLeft: 8,
    		flexDirection: "row"
  	},
  	user: {
    		paddingVertical: 4,
    		paddingHorizontal: 0,
    		flexDirection: "row",
    		alignItems: "center",
    		alignSelf: "stretch"
  	},
  	titleParent: {
    		zIndex: 1,
    		marginLeft: 12,
    		flex: 1
  	},
  	articleChild: {
    		position: "absolute",
    		right: 0,
    		bottom: -1,
    		left: 0,
    		zIndex: 2
  	},
  	image: {
    		backgroundColor: "rgba(0, 0, 0, 0.05)",
    		flex: 1,
    		alignSelf: "stretch"
  	},
  	image5Icon: {
    		width: 79,
    		height: 80
  	},
  	article1: {
    		marginTop: 8
  	},
  	list: {
    		paddingHorizontal: 12,
    		paddingVertical: 0,
    		justifyContent: "center",
    		alignItems: "center",
    		width: "100%",
    		flex: 1,
    		alignSelf: "stretch"
  	}
});

export default List1;
