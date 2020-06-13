import React from 'react'
import { View, StyleSheet, Dimensions, Text } from 'react-native';

interface Props{
    navigation:any
    current:number
    value:number
}

const TabbedPill : React.FC<Props> = (props) =>{
    //This functional component will be able to handle any amount of pills and still be operational because of its dynamic nature
    
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
        <View style={styles.pillContainer}>
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
    },
    pillContainer:{
        flexDirection:"row", 
        justifyContent:"space-between"
    }
})

export default TabbedPill;