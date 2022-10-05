import { Button, Center, Divider,Box,VStack,Heading ,Image, HStack,Text} from "native-base"

const MovieCard=props=>{
const{image,name,popularity,releaseDate,navigation,overview}= props


        return(
    <Box   mb={2}>
    <VStack  divider ={<Divider/>}>
    <HStack>
    <Box>
            <Image alt="image" source={{uri:`https://image.tmdb.org/t/p/original/${image}`}} style={{ resizeMode: 'contain'}}  size ='xl'/>
            </Box>

      <VStack>      
  
    <Box>
    <Heading size='sm'>
            {name}
{console.log(navigation)}
    </Heading>
    <Text>Popularity:{popularity}</Text>
    <Text>Release Date: {releaseDate}</Text>
    </Box>
   
    
            <Box px={0} py={6}  >
            <Button variant='ghost' backgroundColor="#03e7fc" color="#fffff"  width="80%"
            onPress={()=>{navigation.navigate('Details',{name,popularity,image,releaseDate,overview})}}>More Details</Button>
            </Box>
            </VStack>
            </HStack>
    </VStack>
    </Box>





        )



}

export default MovieCard