export const Types = {
    regular: {
        body: "bg-gradient-to-r from-gray-800 to-gray-600",
        child: "bg-gray-600 border-2 border-gray-500"
    },
    negative: {
        body: "bg-gradient-to-r from-red-600 to-red-400",
        child: "bg-red-400 border-2 border-red-300"
    },
    positive: {
        body: "bg-gradient-to-r from-green-600 to-green-400",
        child: "bg-green-300 border-2 border-green-200"
    }
}

export type TypesOfTypes = keyof typeof Types
