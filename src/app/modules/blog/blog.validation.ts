import { z } from "zod";

const blogValidationSchema = z.object({
    title: z.string({
        invalid_type_error: "Title must be a string",
    }).min(3, { message: "Title must be at least 3 characters" }),
    
    content: z.string({
        invalid_type_error: "Content must be a string",
    }).min(10, { message: "Content must be at least 10 characters" }),

    isPublished: z.boolean({
        invalid_type_error: "isPublished must be a boolean",
    }),

    author: z.string({
        invalid_type_error: "Author must be a string",
    })
});

export default blogValidationSchema;
