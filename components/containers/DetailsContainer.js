import { HStack ,Box,Center,Text,Image,Divider, Heading} from "native-base"

const DetailsContainer=({navigation,route})=>{
const{name,popularity,image,releaseDate,overview}= route.params


return(
    
    <Box width="100%">
    <Center>
    <Heading mt={10} mb={10}>{name}</Heading>
    <Image alt="image" source={{uri:`https://image.tmdb.org/t/p/original/${image}`}} style={{ resizeMode: 'contain'}}  size ='2xl'/>
    <Text>{overview}</Text>
      <HStack  space={2}divider ={<Divider/>} mt={5}>
      <Text divider ={<Divider/>}>Popularity:{popularity}</Text>
      <Text>Release Date:{releaseDate}</Text>
      </HStack>
        



    </Center>   
    </Box>
    
    )









}

export default DetailsContainer