import z from'zod'

const noteSchema = z.object({
    title: z.string().min(3 , "Title too short!").max(100 , "Title too long!"),
    body: z.string().min(3 , "Body too short!"),
    tag : z.enum(["easy" , "hard" , "medium"]).optional() 
})

export {noteSchema}