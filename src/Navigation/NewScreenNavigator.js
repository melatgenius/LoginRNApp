
import CredentialInput from '../Screen/CredentialInput'
import ConfirmationScreen from '../Screen/ConfirmationScreen';
import { createStackNavigator, createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';



const NewScreenNavigator = createStackNavigator({
    Login: {screen:CredentialInput},
    Confirmation: {screen:ConfirmationScreen}
});

export default createAppContainer(NewScreenNavigator);