import { Flex} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    let links =[
       
        {
            path:"/",
            text:"Home",
        },
        {
            path:"/addresturant",
            text:"AddResturant",
        },
    ]

  return (
    <div>
       
       <Flex direction='row' justify='space-between' align='center' bg='red.200' color='black' > 
       {
            links.map((link)=>{
                return <Link to={link.path} key={link.path} style={{padding:'20px'}}>
                {link.text}
                </Link>
            })
        }
       </Flex>
       
    </div>
  )
}

export default Navbar