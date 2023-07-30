import {useEffect, useRef, useState} from "react"
import {useRouter} from "next/router"
import {E, connect, updateState} from "/utils/state"
import "focus-visible/dist/focus-visible"
import {Box, Center, HStack, Heading, Text, useColorMode} from "@chakra-ui/react"
import NextHead from "next/head"

const EVENT = "ws://localhost:8000/event"
export default function Component() {
const [state, setState] = useState({"events": [{"name": "state.hydrate"}]})
const [result, setResult] = useState({"state": null, "events": [], "processing": false})
const router = useRouter()
const socket = useRef(null)
const { isReady } = router;
const { colorMode, toggleColorMode } = useColorMode()
const Event = events => setState({
  ...state,
  events: [...state.events, ...events],
})
useEffect(() => {
  if(!isReady) {
    return;
  }
  if (!socket.current) {
    connect(socket, state, setState, result, setResult, router, EVENT, ['websocket', 'polling'])
  }
  const update = async () => {
    if (result.state != null) {
      setState({
        ...result.state,
        events: [...state.events, ...result.events],
      })
      setResult({
        state: null,
        events: [],
        processing: false,
      })
    }
    await updateState(state, setState, result, setResult, router, socket.current)
  }
  update()
})
return (
<Center sx={{"paddingTop": "10%", "backgroundColor": "rgb(128,128,128)", "height": "100vh"}}><HStack spacing="1.5em"
sx={{"fontSize": "2em"}}><Heading sx={{"fontSize": "2em", "color": "black", "width": "90%"}}>{`Arthur_`}</Heading>
<Box sx={{"padding": "2%", "borderRadius": 10, "width": "140%", "boxShadow": "-2px 2px 10px 0px rgba(0, 0, 0, 0.1)", "border": "2px solid rgba(200, 200, 200)", "backgroundColor": "rgb(240, 240, 240)"}}><Heading>{`About`}</Heading>
<Text>{`
-Hello, I'm Arthur.
                    `}</Text>
<Text>{` -My birthday is the 10th January.`}</Text>
<HStack><Text>{`- It's: `}</Text>
<Box dangerouslySetInnerHTML={{"__html": "\n<iframe src=\"https://free.timeanddate.com/clock/i8yjdned/n48/tlbe/tct/pct/ftb/bo2/tt0/tw1/tm1/tb4\" frameborder=\"0\" width=\"123\" height=\"39\" allowtransparency=\"true\"></iframe>\n                        "}}/></HStack>
<Text>{`- I speak Dutch, English and German.`}</Text></Box>
<Box sx={{"padding": "2%", "borderRadius": 10, "width": "140%", "boxShadow": "-2px 2px 10px 0px rgba(0, 0, 0, 0.1)", "border": "2px solid rgba(200, 200, 200)", "backgroundColor": "rgb(240, 240, 240)"}}><Heading>{`Projects`}</Heading>
<Text>{`- Tess (Discord bot)`}</Text></Box></HStack>
<NextHead><title>{`home-arthur_`}</title>
<meta name="description"
content="The website that's tell you a little more about arthur_"/>
<meta property="og:image"
content="favicon.ico"/></NextHead></Center>
)
}