import React, { useState } from 'react'
import { View, Text, Image, TextInput, StyleSheet } from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
import TabbedPill from './TabbedPill'

interface Props{
    topBorder?: boolean
    title: string
    content: string
    type:"number"|"phone"|"text"|"option"
    data?:Array<{ label: string, value: string }>
}

const SettingList : React.FC<Props> = (props) =>{
    const data = props.data?props.data:[]
    
    //capture the value to a state
    const [content, setContent] = useState(props.content)
    
    return (
        <View style={{borderTopWidth:props.topBorder?1:0, borderBottomWidth:1, borderColor:"#22222230", height:62, justifyContent:"space-between", flexDirection:"row"}}>
            <View style={{justifyContent:"center", height:"100%"}}>
                <Text style={{color:"#222222", fontSize:14}}>{props.title}</Text>
            </View>
            <View style={{justifyContent:"center", height:"100%", flexDirection:"row"}}>
                {props.type!="option"?
                    <>{props.type=="number"?<Text style={{justifyContent:"center",color:"#222222", opacity:.5, alignSelf:"center", marginBottom:2}}>₦</Text>:null}<TextInput  keyboardType={props.type == "number"?"number-pad":"default"} style={{color:"#222222", fontSize:14, opacity:.5,alignSelf:"center"}} value={props.type=="phone"?content.replace(/(\d{4})(\d{3})(\d{4})/, '$1 $2 $3'):props.type=="number"?content.replace(/\B(?=(\d{3})+(?!\d))/g, ","):content} onChangeText={(content)=>setContent(content)}/></>
                :null}
                {props.type=="option"?
                        <View style={{justifyContent:"center", width:150}}>
                            <RNPickerSelect
                                onValueChange={(value) => console.log(value)}
                                items={data}
                                style={{inputAndroid:{height:25, color:"#22222250"},inputIOS:{height:25, color:"#22222250", textAlign:"right", marginRight:48}}}
                                textInputProps={{underlineColorAndroid:"yellow"}}
                                placeholder={{}}
                                Icon={()=><View style={{marginRight:20, marginTop:11}}><Image source={require(`../assets/dropdown.png`)}/></View>}
                            />
                        </View>:null}
            </View>

        </View>
    )
}

const style = StyleSheet.create({
    
})

export default SettingList;