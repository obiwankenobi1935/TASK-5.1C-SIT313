import {Text} from '@radix-ui/themes'
import {
    TextArea,
    TextField,
    Button,
    Heading,
    Flex} from '@radix-ui/themes'

function Question()
{
    return (
        <div>
            <Flex gap='4' direction='column' wrap='wrap' style={{marginTop: '15px'}}>
            <Heading>What do you want to ask or share?</Heading>

            <Flex display='inline-flex'  wrap='wrap' gap='2'>
                <Text>Title</Text>
                <TextField.Root placeholder='Start your question with how, what where etc..' style={{width:'60vw'}}>                     
                </TextField.Root>
            </Flex>

            <Flex>
            <Text>
                Describe your problem 
            </Text>
            </Flex>
            <TextArea size='3'/>
            

            <Flex display='inline-flex' wrap='wrap'>
                <Text>Tags</Text>
                <TextField.Root placeholder='Please add upto 3 tags to describe what your question is about eg .. Java' style={{width:'50vw'}}>                     
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

export default Question