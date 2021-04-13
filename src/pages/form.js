import {react, useState} from 'react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Select,
    Button
  } from "@chakra-ui/react"

export default function form() {
    const [tagname , setTagname] = useState('elonmusk')
    const [market , setMarket] = useState('twitter')
    const imgHash  = useState(Date.now())

    const str1 = `<div className="container">`
    var str2 = ' <img src={`https://og-image.ideamarket.io/api/${market}/${tagname}.png`} alt="image" className="inset-0 sm:h-72"/> '
    var str3 = '<a href={`https://app.ideamarket.io/i/${market}/${tagname}`} target="_blank">'
    const str4 = '<button class="btn" >Buy</button> </a></div>'

    const createEmbed = (event) => {
        event.preventDefault();
        console.log(tagname + market);
        var str21 = str2.replace("${market}" , market)
        str21 = str21.replace("${tagname}" , tagname)
        var str31 = str3.replace("${market}" , market)
        str31 = str31.replace("${tagname}" ,tagname)
        
        var final = str1 + '\n' + str21 + '\n' + str31 + str4

        console.log(final)
        


        
    }

    return(
        <>
        <form method="POST" onSubmit={createEmbed} >

            <FormControl id="tagname">
            <FormLabel>Name</FormLabel>
            <Input type="text" value={tagname}  onChange={({target}) => setTagname(target.value)} />
            </FormControl>

            <FormControl id="market">
            <FormLabel>Market</FormLabel>
            <Select placeholder="Select market" value={market} onChange={({target}) => setMarket(target.value) }>
                <option>twitter</option>
                <option>showtime</option>
            </Select>
            </FormControl>

            <Button colorScheme="teal" variant="solid" type="submit">
                Create embed
            </Button>



        </form>

        <div className="container">
        <img src={`https://og-image.ideamarket.io/api/${market}/${tagname}.png?${imgHash}`} alt="image" className="inset-0 sm:h-72"/>
        <a href={`https://app.ideamarket.io/i/${market}/${tagname}`} target="_blank"> 
        <button class="btn" >Buy</button> </a> </div>

        </>
    )
}