import { useEffect, useState } from "react";
import connectSocket, { configSocket } from "../utils/socket";


export default function useSockets (identity) {
    const [connections, setConnections] = useState([])
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const socket = connectSocket(identity, data=>configSocket(setConnections, setMessages, data))
        return () => socket?.close()
      }, [identity]);

    return {
        connections,
        messages
    }
}