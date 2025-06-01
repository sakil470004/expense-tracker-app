import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
// this is styled button component
function Button({children, onPress,mode,style}) {
    return(
        <View style={style}>
            <Pressable onPress={onPress} android_ripple={{color: '#ccc'}} style={({pressed}) => pressed && {opacity: 0.75}}>
                <View style={[styles.button,mode === 'flat' && styles.flat]}>
                    <Text style={[styles.buttonText,mode==='flat' && styles.flatText]}>{children}</Text>
                </View>
            </Pressable>
        </View>
    )
}
export default Button;
const styles = StyleSheet.create({

    button:{
        borderRadius: 4,
        padding: 8,
        backgroundColor:GlobalStyles.colors.primary500,

    },
    flat:{
        backgroundColor:'transparent',
    },
    buttonText:{
      color:'white',
        textAlign: 'center',
    },
    flatText:{
        color: GlobalStyles.colors.primary200,
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75,
        backgroundColor: GlobalStyles.colors.primary100,
        borderRadius: 4,
        padding: 8,
    },

});