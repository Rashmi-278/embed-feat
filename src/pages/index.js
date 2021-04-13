import React , {useState} from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Button,
  Stack,
  Image,
  Text,
  Icon,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,Select,
  Center,
  SimpleGrid,
  GridItem,
  Code,
  useClipboard,
} from "@chakra-ui/react";


const KuttyHero = () => {


  const { hasCopied, onCopy } = useClipboard(value)

  const [tagname , setTagname] = useState('elonmusk')
    const [market , setMarket] = useState('twitter')
    const imgHash  = useState(Date.now())
    
    const str1 = `<div class="container">`
    var str2 = ' <img src="https://og-image.ideamarket.io/api/${market}/${tagname}.png" alt="image" /> '
    var str3 = '<a href="https://app.ideamarket.io/i/${market}/${tagname}" target="_blank">'
    const str4 = '<button class="btn">Buy</button></a></div>'
    var prefinal = str1 + '\n' + str2 + '\n' + str3 + str4

    const [value, setValue] = React.useState(prefinal)


    const createEmbed = (event) => {
        event.preventDefault();
        console.log(tagname + market);
        var str21 = str2.replace("${market}" , market)
        str21 = str21.replace("${tagname}" , tagname)
        var str31 = str3.replace("${market}" , market)
        str31 = str31.replace("${tagname}" ,tagname)
        
        var final = str1 + '\n' + str21 + '\n' + str31 + str4
        setValue(final)
        console.log(final)
        }

  return (
    <Box px={8} py={24} mx="auto">

      <Center>
        <Image
                  htmlHeight="50px"
                  htmlWidth="50px"
                  marginBottom="20px"
                  src="logo-color.png"
                  alt="ideamarket.io"
                />
                
      </Center>

      
      <Box
        w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
        mx="auto"
        textAlign={{ base: "left", md: "center" }}
      >

          <chakra.h1
            display={{ base: "block", lg: "inline" }}
            w="full"
            bgClip="text"
            bgGradient={useColorModeValue("linear(to-r, brand.200,brand.500)", "linear(to-r, brand.200,brand.400)")}
            fontWeight="extrabold"
            fontSize={{ base: "3xl", md: "5xl" }}
          >
            Ideamarket.io
          </chakra.h1>

         <Text padding="20px" fontSize={{ base: "4xl", md: "6xl" }}
>
           Embed code generator
         </Text>
        
        
        <chakra.p
          px={{ base: 0, lg: 24 }}
          mb={6}
          fontSize={{ base: "lg", md: "xl" }}
          color={useColorModeValue("gray.600",'gray.300')}
        >
          You can now generate ideamarket token card and embed it your blog !
        </chakra.p>
       
        
        
        <Box
        mt={20}
        px="50px"
        >
        <Center>
        <chakra.form
              action="#"
              method="POST"
              shadow="base"
              rounded={[null, "md"]}
              overflow={{ sm: "hidden" }}
              onSubmit={createEmbed}

            >
              <Stack
                px={4}
                py={5}
                p={[null, 6]}
                bg={useColorModeValue("white", "gray.700")}
                spacing={6}
              >
                <SimpleGrid columns={6} spacing={6}>
                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      fontSize="sm"
                      fontWeight="bold"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      Name
                    </FormLabel>
                    <Input
                      type="text"
                      name="tagname"
                      id="tag_name"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      value={tagname}  onChange={({target}) => setTagname(target.value)}
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      htmlFor="country"
                      fontSize="sm"
                      fontWeight="bold"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      Market
                    </FormLabel>
                    <Select
                      id="market"
                      name="market"
                      value={market} onChange={({target}) => setMarket(target.value) }
                      placeholder="Select market"
                      mt={1}
                      focusBorderColor="brand.800"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                    >
                      <option>twitter</option>
                      <option>substack</option>
                      <option>youtube</option>
                    </Select>
                  </FormControl>

                  
                </SimpleGrid>
              </Stack>
              <Box
                px={{ base: 4, sm: 6 }}
                py={3}
                bg={useColorModeValue("gray.50", "gray.900")}
                textAlign="right"
              >
                <Button
                  type="submit"
                  colorScheme="brand"
                  _focus={{ shadow: "" }}
                  fontWeight="md"
                >
                  Generate
                </Button>
              </Box>
            </chakra.form>

            
        </Center>

        </Box>
      </Box>

      <Box
        w={{ base:"", sm: "40%" }}
        margin="20px"
        mx="auto"
        textAlign={{ base: "left", md: "center" }}
      >
        <Input value={value} height="100px" isReadOnly placeholder="embedcode" />

        
        <Button  margin="10px" onClick={onCopy} ml={2} colorScheme="brand">
          {hasCopied ? "Copied" : "Copy"}
        </Button>


      </Box>

      <Box
        w={{ base:"", sm: "40%" }}
        margin="20px"
        mx="auto"
        textAlign={{ base: "left", md: "center" }}
      >
        <div
        className="container"
        >

        <img
          src={`https://og-image.ideamarket.io/api/${market}/${tagname}.png?${imgHash}`}
          alt="image"
          className="inset-0 sm:h-72"
        />
            <a href={`https://app.ideamarket.io/i/${market}/${tagname}`} target="_blank">

            <button class="btn" >Buy</button>
            </a>
          

      </div>

      </Box>


      
    </Box>
  );
};

export default KuttyHero;