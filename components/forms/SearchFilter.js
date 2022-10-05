import { FormControl,Select ,CheckIcon,Box,Center ,Text} from "native-base";
import { useState } from "react";


const SearchFilter=(props)=>{
    const{handleFilter} =props
const[selected,setSelected]= useState("multi")

return(
    <Center><Box maxW="300" mb ={10}>
<FormControl isRequired isInvalid>
<FormControl.Label>Choose Search Type</FormControl.Label>
<Select selectedValue={selected}   minWidth="200" _selectedItem={{
        bg: "green.600",
        endIcon: <CheckIcon size="5" />}} mt="1"  onValueChange={itemValue => {setSelected(itemValue) 
        handleFilter(itemValue)}}>
        <Select.Item label="multi" value="multi" />
        <Select.Item label="movie" value="movie"   />
        <Select.Item label="tv" value="tv" />
        
</Select>
<Text mt={6} >Please Select a search type</Text>



</FormControl>    
</Box>

</Center>

)



}


export default SearchFilter;