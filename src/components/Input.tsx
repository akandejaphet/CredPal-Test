import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TextInput, Platform} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

interface Props{
    title: string
    type: "date"|"option"|"text"|"number"
    icon?:"calender"|"employed"|"gender"|"graduate"|"home"|"human"|"nationality"|"relationship"|"single"
    placholder?: string
    value?: string
    data?:Array<{ label: string, value: string }>
}


const Input: React.FC<Props> = (props) =>{
    const placeholder = props.placholder?props.placholder:"select"
    const [input, setInput] = useState({
        date:"1997-07-19"
    })
    const [date, setDate] = useState(false)
    const data = props.data?props.data:[]
    let icon = undefined;
    if(props.icon == "calender"){
        icon = require(`../assets/calender.png`)
    }else if(props.icon == "employed"){
        icon = require(`../assets/employed.png`)
    }else if(props.icon == "gender"){
        icon = require(`../assets/gender.png`)
    }else if(props.icon == "graduate"){
        icon = require(`../assets/graduate.png`)
    }else if(props.icon == "home"){
        icon = require(`../assets/home.png`)
    }else if(props.icon == "human"){
        icon = require(`../assets/human.png`)
    }else if(props.icon == "nationality"){
        icon = require(`../assets/nationality.png`)
    }else if(props.icon == "relationship"){
        icon = require(`../assets/relationship.png`)
    }else if(props.icon == "single"){
        icon = require(`../assets/single.png`)
    }else{
        icon = ""
    }

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sept", "Oct", "Novr", "Dec"
    ];

    return(
        <View style={{flex:.48, height:45, borderBottomWidth:1, borderBottomColor:"#55555520", flexDirection:"row", marginBottom:10}}>
            <View style={{justifyContent:"center", marginTop:5}}>

                <Image source={props.icon?icon:null} height={11} width={11} style={{minWidth:11}}/>
            </View>
            <View style={{width:"100%", paddingLeft:8, marginBottom:7}}>

                <Text style={[styles.accent, styles.normalText, {paddingLeft:7}]}>{props.title}</Text>
                {
                    props.type == "date"?
                        <View style={{flex:1,justifyContent:"center"}}>
                            <View style={{paddingLeft:7, flexDirection:"row", justifyContent:"space-between", paddingRight:10}}>
                                <Text onPress={()=>setDate(!date)}>{( monthNames[new Date(input.date).getMonth()])+" "+(new Date(input.date).getDate())+", "+(new Date(input.date).getFullYear())}</Text>
                                <Image source={require(`../assets/dropdown.png`)} style={{alignSelf:"center"}}/>
                            </View>
                            <DateTimePickerModal
                                isVisible={date}
                                testID="dateTimePicker"
                                mode="date"
                                is24Hour={true}
                                display="default"
                                onConfirm={(data)=>{setDate(!date);setInput({date:data})}}
                                onCancel={()=>setDate(!date)}
                            />
                        </View>
                    :
                    props.type == "option"?
                        <View style={{flex:1, justifyContent:"center", marginLeft:Platform.OS=="ios"?7:0}}>
                            <RNPickerSelect
                                onValueChange={(value) => console.log(value)}
                                items={data}
                                placeholder={{}}
                                style={{inputAndroid:{height:25}}}
                                Icon={()=><View style={{marginRight:20, marginTop:6}}><Image source={require(`../assets/dropdown.png`)}/></View>}
                            />  
                        </View>
                    :<View style={{flex:1, justifyContent:"center"}}>
                        <TextInput keyboardType={props.type == "number"?"number-pad":"default"} placeholder={props.placholder} value={props.type=="number"?props.value.replace(/(\d{4})(\d{3})(\d{4})/, '$1 $2 $3'):props.value} style={{paddingLeft:7, color:"#222222", fontSize:13}} placeholderTextColor="#555555" numberOfLines={1}/>
                    </View>
                }
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    accent:{
        color:"#274FED"
    },
    normalText:{
        fontSize:11
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
        marginVertical:32
    },
    list:{

    },
    singleList:{

    },
    doubleList:{
        flexDirection:"row",
        justifyContent:"space-between"
    }
})

export default Input;