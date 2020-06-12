import React, { useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, Dimensions, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import TabbedPill from '../components/TabbedPill';
import Input from '../components/Input';


export interface Props{
    navigation:any
}

const CompleteProfile: React.FC<Props> = (props) =>{
    const [currentScreen, setCurrentScreen] = useState(1)
    const [screenCount, setScreenCount] = useState(5)

  React.useLayoutEffect(()=>{
    props.navigation.setOptions({
        headerRight: () => (
          <Text style={{marginRight:(Dimensions.get("screen").width/16), color:"#555555", fontSize:14}}>Step {currentScreen} of 5</Text>
        ),
        headerTintColor:"#555555",
        headerTitle:null
      })
    })
    
    return(
        <SafeAreaView>
            <ScrollView style={[{paddingHorizontal:(Dimensions.get("screen").width/16)}, styles.contentMargin]}>

                <TabbedPill navigation={props.navigation} current={currentScreen} value={screenCount}/>

                <View style={styles.contentMargin}>
                    <Text style={styles.header}>Complete profile</Text>
                    <Text style={styles.subText}>Tell us even more about yourself and ensure that all details provided herein are valid and up to date.</Text>
                </View>

                <View style={styles.contentMargin}>
                    <View>
                        <View style={styles.doubleList}>
                            <Input title="Date of Birth" type="date" icon="calender"/>
                            <Input title="Gender" type="option" icon="gender" data={[
                                {
                                    label:"Male",
                                    value:"male"
                                },
                                {
                                    label:"Female",
                                    value:"female"
                                }
                                ]}/>
                        </View>
                        <View style={styles.singleList}>
                            <Input title="Residential Address" type="text" icon="home" value="25, Ayonuga Street, Fadeyi, Lagos."/>
                        </View>
                        <View style={styles.doubleList}>
                            <Input title="Education Level" type="option" icon="graduate" data={[
                                {
                                    label:"Graduate",
                                    value:"graduate"
                                },
                                {
                                    label:"National Diploma",
                                    value:"nd"
                                }
                                ]}/>
                            <Input title="Nationality" type="option" icon="nationality" data={[
                                {
                                    label:"Nigeria",
                                    value:"nigeria"
                                },
                                {
                                    label:"United Kingdom",
                                    value:"uk"
                                }
                                ]}/>
                        </View>
                        <View style={styles.doubleList}>
                            <Input title="Employment Status" type="option" icon="employed" data={[
                                {
                                    label:"Employed",
                                    value:"employed"
                                },
                                {
                                    label:"Unemployed",
                                    value:"unemployed"
                                }
                                ]}/>
                            <Input title="Marital Status" type="option" icon="single" data={[
                                {
                                    label:"Single",
                                    value:"single"
                                },
                                {
                                    label:"Married",
                                    value:"married"
                                }
                                ]}/>
                        </View>
                        <View style={styles.doubleList}>
                            <Input title="Guarantor’s Name" type="text" icon="human" value="Oshokoya Joseph"/>
                            <Input title="Relationship" type="option" icon="relationship" data={[
                                {
                                    label:"Brother",
                                    value:"brother"
                                },
                                {
                                    label:"Sister",
                                    value:"sister"
                                }
                                ]}/>
                        </View>
                        <View style={styles.doubleList}>
                            <Input title="Guarantor’s Address" type="text" icon="home" placholder="Route 7, Ink Park, Toronto "/>
                            <Input title="Guarantor’s Contact Number" type="number" value="07081888124"/>
                        </View>
                    </View>
                </View>

                <View style={[styles.contentMargin, styles.buttonView]}>
                    <TouchableOpacity style={styles.button} onPress={()=>currentScreen < screenCount ? setCurrentScreen(currentScreen+1): props.navigation.navigate("Settings")}>
                        <Text style={{textAlign:"center", color:"white", fontWeight:"500", fontSize:14}}>{currentScreen != screenCount ?"NEXT":"FINISH"}</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection:"row", paddingTop:16, paddingBottom:62, justifyContent:"center"}}>
                        <Image source={require(`../assets/lock.png`)} style={{alignSelf:"center"}}/>
                        <Text style={{fontSize:12, color:"#222222", opacity:0.5, textAlign:"center", paddingLeft:6}}>Your data is secure.</Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    accent:{
        color:"#274FED"
    },
    normalText:{
        fontSize:13
    },
    header:{
        fontWeight:"bold",
        fontSize:36,
        color:"#274FED",
        marginBottom:14
    },
    subText:{
        fontSize:14,
        color:"#222222"
    },
    contentMargin:{
        paddingVertical:42
    },
    list:{

    },
    singleList:{

    },
    doubleList:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginVertical:10
    },
    buttonView:{
        justifyContent:"center"
    },
    button:{
        backgroundColor:"#274FED",
        width:218,
        height:46, 
        justifyContent:"center",
        alignSelf:"center",
        borderRadius:5
    }
})

export default CompleteProfile;