import { FormControl,Select ,CheckIcon,Box,Center } from "native-base";
import { useState } from "react";


const TvFilter=(props)=>{
    const{handleFilter} =props
    const[selected,setSelected]= useState("popular")


return(
    <Center><Box maxW="300" px={20} py={3}>
<FormControl isRequired isInvalid>
<Center>
<Select selectedValue={selected}   minWidth="200" _selectedItem={{
        bg: "green.600", 
        endIcon: <CheckIcon size="5" />}} mt="1"  onValueChange={itemValue => {
            setSelected(itemValue) 
            // {console.log(itemValue)}
            handleFilter(itemValue)}} defaultValue={"popular"}>
        <Select.Item label="airing_today" value="airing_today" />
        <Select.Item label="on_the _air" value="on_the_air"   />
        <Select.Item label="top_rated" value="top_rated" />
        <Select.Item label="popular" value="popular" />
</Select>

</Center>

</FormControl>    
</Box>

</Center>

)



}


export default TvFilter;