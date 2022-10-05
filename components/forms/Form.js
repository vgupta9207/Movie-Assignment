import { Ionicons } from "@expo/vector-icons"
import { Button, FormControl, HStack, VStack ,Input, Icon} from "native-base"
import { useState } from "react"


const Form = (props)=>{
    const {fetchMovies,onInputChange}=props
    const[formData,setData]=useState({})

    const onSubmit=()=>{
        fetchMovies()

    
    }
    return (
        <VStack width="100%" >
            <FormControl isRequired>
            <FormControl.Label>Search Movie/TV Show Name</FormControl.Label>
                <HStack space={4}>
                    <Input placeholder='i.e James Bond,CSI etc' variant="filled" width="70%" px={5} InputLeftElement= {<Icon size={5}  ml={2} color='Gray.400' as={<Ionicons name ='ios-search'></Ionicons>}></Icon>} onChangeText=
                    {value=>{onInputChange(value),
                    setData({ ...formData,name:value})
                    
                     } }/>
                    
                    <Button  px={10} onPress={onSubmit}>
                        Search
                    </Button>



                </HStack>
            </FormControl>
        </VStack>





    )
}


export default Form