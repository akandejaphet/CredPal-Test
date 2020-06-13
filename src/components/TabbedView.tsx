import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

interface Props{
    onStateChange?:()=>void
    value:Array<{title:string}>
    selected?:number
}

const TabbedView : React.FC<Props> = (props) =>{
    const [option, setOption] = useState(props.selected?props.selected:0)
    const [selected, setSelected] = useState(props.selected)

    var tab = [];

	for(let i = 0; i < props.value.length; i++){

		tab.push(
            <>

                {
                    i!=0||i==props.value.length-1?
                        <Image source={require('../assets/line.png')} style={{alignSelf:"center"}}/>
                    :null
                }
                <TouchableOpacity  style={{flex:.333, justifyContent:"center", height:34, backgroundColor:selected==i?"#274FED":"transparent", borderRadius:7}} key={i} onPress={()=>{props.onStateChange(); setSelected(i)}}>
                    <Text style={{textAlign:"center", color:selected==i?"#ffffff":"#222222", opacity:selected==i?1:.5, fontSize:12}}>{props.value[i].title}</Text>
                </TouchableOpacity>
            </>
		)
	}
    return(

        <View style={{flex:1, borderWidth:1, borderRadius:7, borderColor:"#22222230", height:38, flexDirection:"row", padding:1, marginBottom:23}}>
            {tab}
        </View>
    )
}

export default TabbedView