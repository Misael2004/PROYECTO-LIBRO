import { server } from "./src/server.js"


const PORT = process.env.PORT || 4001

server.listen(PORT, (e) => {
    console.log(`Server is running on port ${PORT}`)
})