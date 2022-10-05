import { FormControl,Select ,CheckIcon,Box,Center } from "native-base";
import { useState } from "react";


const Filter=(props)=>{
    const{handleFilter} =props
    const[selected,setSelected]= useState("popular")


return(
    <Center>
    <Box maxW="150">
<FormControl isRequired isInvalid>
<Select selectedValue={selected}   minWidth="200" _selectedItem={{
        bg: "green.600",
        endIcon: <CheckIcon size="5" />}} mt="1"   onValueChange={itemValue => {
            setSelected(itemValue) 
            // {console.log(itemValue)}
            handleFilter(itemValue)}} defaultValue={"popular"}>
        <Select.Item label="now_playing" value="now_playing" />
        <Select.Item label="popular" value="popular"   />
        <Select.Item label="top_rated" value="top_rated" />
        <Select.Item label="upcoming" value="upcoming" />
</Select>



</FormControl>    
</Box>

</Center>

)



}


export default Filter;