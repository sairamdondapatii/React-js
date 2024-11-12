import { Input, Stack } from '@chakra-ui/react'
import React from 'react'
import { createListCollection } from "@chakra-ui/react"
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from '../components/ui/select'
import {Button} from '..//components/ui/button'
const frameworks = createListCollection({
  items: [
    { label: "React.js", value: "react" },
    { label: "Vue.js", value: "vue" },
    { label: "Angular", value: "angular" },
    { label: "Svelte", value: "svelte" },
  ],
})

const AddResturant = () => {
  return (
    <form style={{textAlign:'center'}}>
      <Stack gap='15px' justify='center'>
        <Input variant='outline' placeholder='Enter Name..' name='name' />
        <SelectRoot collection={frameworks} size="sm" name='type' >
          <SelectTrigger>
            <SelectValueText placeholder="Select Type" />
          </SelectTrigger>
          <SelectContent>
            {frameworks.items.map((movie) => (
              <SelectItem item={movie} key={movie.value} >
                {movie.label}
              </SelectItem>
            ))}
          </SelectContent>
        </SelectRoot>
        <Input variant='outline' placeholder='Rating' name='rating' type='number'/>
        <Input variant='outline' placeholder='Number of votes' name='votes'/>
        <Input variant='outline' placeholder='price statrs from' name='price'/>
        <Input variant='outline' placeholder='Image url' name='img' type='url'/>
        <Button variant="outline" type='submit' colorPalette='red' width='300px'>Create Resturant</Button>
      </Stack>
    </form>
  )
}

export default AddResturant