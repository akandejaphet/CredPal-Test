import React from 'react'
import { View, StyleSheet, Dimensions, Text } from 'react-native';

interface Props{
    navigation:any
    current:number
    value:number
}

const TabbedPill : React.FC<Props> = (props) =>{
    
  const [current, setCurrent] = React.useState(props.current);

  React.useLayoutEffect(()=>{
    setCurrent(props.current)
  })

  var pill = [];

  for(let i = 1; i <= props.value; i++){

      pill.push(
            <View key={i} style={[styles.headerPill, {opacity:current == i?1:.1}]}></View>
      )
  }

    return(
        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
            {pill}
        </View>
    )
}

const styles = StyleSheet.create({
    headerPill:{
        width:63,
        height:4,
        backgroundColor:"#274FED",
        borderRadius:2.5
    }
})

export default TabbedPill;