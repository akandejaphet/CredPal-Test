import React from 'react'
import { View, Text, SafeAreaView, Dimensions, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import SettingList from '../components/SettingList';
import TabbedView from '../components/TabbedView';


export interface Props{
    navigation:any
}

const EditProfile: React.FC<Props> = (props) =>{
    
  React.useLayoutEffect(()=>{
    props.navigation.setOptions({
        headerRight: () => (
          <TouchableOpacity style={{marginRight:(Dimensions.get("screen").width/16), width:65, height:28, borderWidth:1, borderColor:"#274FED20", justifyContent:"center", borderRadius:5}} onPress={()=>console.log("trying to save")}>
            <Text style={{alignSelf:"center", fontSize:14, color:"#274FED", fontWeight:"500"}}>Save</Text>
          </TouchableOpacity>
        ),
        headerTintColor:"#FE2B5E",
        headerTitleAlign:"left",
        headerTruncatedBackTitle:"Discard",
        headerTitle:null
      })
    props.navigation.setOptions({ title: 'Discard' })
    })

    return(
        <>
            <SafeAreaView style={[{paddingHorizontal:(Dimensions.get("screen").width/16)}, styles.contentMargin]}>
                <ScrollView>

                    <View style={{marginBottom:36}}>
                        <Text style={{fontSize:24, fontWeight:"bold", color:"#222222"}}>Edit Profile</Text>
                    </View>
                    <TabbedView onStateChange={()=>console.log("no state to hook to")} value={[
                        {
                            title:"Personal"
                        },
                        {
                            title:"Security"
                        },
                        {
                            title:"Others"
                        }
                    ]} selected={2}/>
                    <View>
                        <SettingList title="Employer" content="CredPal Limited" topBorder={true} type="text"/>
                        <SettingList title="Office Address" content="75, Olonode Street, A...ba, Lagos." type="text"/>
                        <SettingList title="Job Title" content="Graphics & UI/UX Designer" type="text"/>
                        <SettingList title="Contract Type" content="Full Time" type="option" data={[
                                {
                                    label:"Full Time",
                                    value:"ft"
                                },
                                {
                                    label:"Part Time",
                                    value:"pt"
                                }
                                ]}/>
                        <SettingList title="Salary" content="840000" type="number"/>
                        <View style={{height:25}}/>
                        <SettingList title="Next of Kin" content="Oshokoya Joseph" type="text" topBorder={true}/>
                        <SettingList title="Relationship" content="Brother" type="option"  data={[
                                {
                                    label:"Brother",
                                    value:"brother"
                                },
                                {
                                    label:"Sister",
                                    value:"sister"
                                }
                                ]}/>
                        <SettingList title="Address" content="Route 7, Ink Park, Toronto,...o, CA." type="text"/>
                        <SettingList title="Contact Number" content="07081888124" type="phone"/>
                    </View>
                </ScrollView>

            </SafeAreaView>
        </>
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
        color:"#274FED"
    },
    subText:{
        fontSize:14,
        color:"#222222"
    },
    contentMargin:{
        paddingVertical:40
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

export default EditProfile;