import {
    Text,
    TextArea,
    TextField,
    Button,
    Heading,
    Flex
} from '@radix-ui/themes'

function Article()
{
    return (
        <div>
            <Flex direction='column' gap='4' wrap='wrap' style={{marginTop: '15px'}}>
            <Heading>What do you want to ask or share?</Heading>

            <Flex display='inline-flex' wrap='wrap'>
                <Text>Title</Text>
                <TextField.Root placeholder='Enter a descriptive title' >                     
                </TextField.Root>
            </Flex>

            <Text>
                Abstract
            </Text>
            <TextArea placeholder='Enter a 1-paragraph abstract' size='1'/>

            <Text>
                Article text
            </Text>
            <TextArea placeholder='Enter article' size='3'/>

            <Flex display='inline-flex' wrap='wrap'>
                <Text>Tags</Text>
                <TextField.Root placeholder='Please add upto 3 tags to describe what your article is about eg .. Java' style={{width:'50vw'}}>                     
                </TextField.Root>
            </Flex>
            
            <Flex align='end'>
                <Button size='3' highContrast> 
                    Post
                </Button>
            </Flex>
            </Flex>
            
        </div>
    )
}

export default Article