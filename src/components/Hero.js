import { Flex, Heading , Image , VStack} from '@chakra-ui/react'

export const Hero = ({ title }) => (
  <>
  <Flex padding="10px"  height="60vh">
    <Heading fontSize="6vw">{title}</Heading>
    <VStack>
    <Image
      htmlHeight="30px"
      htmlWidth="30px"
      src="logo-color.png"
      alt="ideamarket.io"
    />
    </VStack>

  </Flex>
  



 </>
)

Hero.defaultProps = {
  title: 'with-ideamarket.io',
}
